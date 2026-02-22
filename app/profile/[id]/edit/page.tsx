"use client"

import {Sparkles} from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { createClient } from "@/lib/supabase"
import ProfileForm from "@/components/ProfileForm"


export default function EditProfilePage() {

    const { id } = useParams()
    const supabase = createClient()
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [initialFormData, setInitialFormData] = useState<{
        fullName: string;
        bio: string;
        school: string;
        sport: string;
        gradYear: string;
        division: string;
        engagementRate: string;
        avgViews: string;
    } | undefined>(undefined)

    const [initialSocialLinks, setInitialSocialLinks] = useState<{ platform: any; username: any; followers: any; }[] | undefined>(undefined)
    const [initialTags, setInitialTags] = useState<any[] | undefined>(undefined)
    const [initialDeliverables, setInitialDeliverables] = useState<any[] | undefined>(undefined)

    useEffect(() => {
        async function authData() {
            const { data: { user } } = await supabase.auth.getUser()
            if (user?.id !== id) {
                router.push("/")
                return
            }

            const { data: profile } = await supabase.from("profiles").select("*").eq("id", id).single()
            const { data: socialLinks } = await supabase.from("social_links").select("*").eq("profile_id", id)
            const { data: profileContentTags } = await supabase.from("profile_content_tags").select("tag_id, content_tags(name)").eq("profile_id", id)
            const { data: deliverables } = await supabase.from("profile_deliverables").select("deliverable_id, deliverables(name)").eq("profile_id", id)

            setInitialFormData({
                fullName: profile?.full_name ?? "",
                bio: profile?.bio ?? "",
                school: profile?.university ?? "",
                sport: profile?.sport ?? "",
                gradYear: String(profile?.graduation_year ?? ""),
                division: profile?.division ?? "",
                engagementRate: String(profile?.engagement_rate ?? ""),
                avgViews: String(profile?.avg_views ?? ""),
            })

            setInitialSocialLinks(
                socialLinks?.map(link => ({
                    platform: link.platform,
                    username: link.url,
                    followers: link.follower_count,
                })) ?? []
            )

            setInitialDeliverables(deliverables?.map(deliverable => (deliverable.deliverables as any)?.name) ?? [])

            setInitialTags(profileContentTags?.map(tag => (tag.content_tags as any)?.name) ?? [])
            setLoading(false)

        }
        authData()
    }, [])

    const handleEdit = async (payload: {formData: any; socialLinks: any[]; tags: string[]; deliverables: string[]}) => {
        const { formData, socialLinks, tags, deliverables} = payload
        const {data: { user }, error: userError,} = await supabase.auth.getUser()

        // Calculate total followers from social links
        const totalFollowers = socialLinks.reduce((sum, link) => {
            return sum + (typeof link.followers === "number" ? link.followers : 0)
        }, 0)

        const { error: insertError } = await supabase.from("profiles").update({
            full_name: formData.fullName,
            bio: formData.bio, university: formData.school, sport: formData.sport,
            graduation_year: parseInt(formData.gradYear), division: formData.division,
            engagement_rate: parseFloat(formData.engagementRate),
            avg_views: parseInt(formData.avgViews), total_followers: totalFollowers
        }).eq("id", id)

        if (insertError)
    {
      throw new Error(insertError.message)
    }
    else
    {
        // Deleting before inserting
        await supabase.from("social_links").delete().eq("profile_id", id)
        
        // Mapping the socialLinks array to math the DB column names
        const {error: socialLinksError } = await supabase.from("social_links").insert(
        socialLinks.map(link => ({
          profile_id: user?.id,
          platform: link.platform,
          url: link.username,
          follower_count: link.followers
        }))
      )
        
        if(socialLinksError)
        {
            throw new Error(socialLinksError.message)
            return
        }
        // Delete tag row before inserting
        await supabase.from("profile_content_tags").delete().eq("profile_id", id)

        // For each tag in selectedTags, insert it into content_tags (if it doesn't already exist) and get back the ID: 
        const {data: tagRows } = await supabase.from("content_tags").upsert(
          tags.map(tag => ({ name: tag })),
          { onConflict: "name"}
        ).select("id")

        if(!tagRows)
        {
          throw new Error("Failed to save content tags")
          return
        }

        // Insert junction rows into profile_content_tags
        const {error : tagLinkError } = await supabase.from("profile_content_tags").insert(
          tagRows.map(row => ({
            profile_id: user?.id,
            tag_id: row.id,
          }))
        )
       
        if (tagLinkError)
        {
          throw new Error(tagLinkError.message)  
          return
        }

        // Delete before inserting
        await supabase.from("profile_deliverables").delete().eq("profile_id", id)

        // deliverables + profile_deliverables
        const { data: deliverablesRows } = await supabase.from("deliverables").upsert(
          deliverables.map(tag => ({ name: tag})),
          { onConflict: "name"}
        ).select("id")

        if(!deliverablesRows)
        {
          throw new Error("Failed to save deliverable")
          return
        }

        const { error : deliverableError} = await supabase.from("profile_deliverables").insert(
          deliverablesRows.map(row => ({ 
            profile_id: user?.id,
            deliverable_id: row.id,

          }))
        )
      
        if (deliverableError)
        {
          throw new Error(deliverableError.message)
        }

        router.push(`/profile/${id}`)
    }
    }

    if (loading) {
         return (
         <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
              <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-600 to-blue-500 rounded-full mb-4 animate-spin">
                      <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">Loading your profile...</p>
              </div>
          </div>
      )
    }

    return (
        <ProfileForm
            onSubmit={handleEdit}
            initialFormData={initialFormData}
            initialSocialLinks={initialSocialLinks}
            initialTags={initialTags}
            initialDeliverables={initialDeliverables}
            submitLabel="Save Changes"
            loadingLabel="Saving..."
            pageTitle="Edit Profile"
            pageSubtitle="Update your NIL Card info"
        />
    )

}
