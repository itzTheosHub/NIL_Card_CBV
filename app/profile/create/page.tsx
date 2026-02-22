"use client"

import ProfileForm from "@/components/ProfileForm"
import { createClient } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function CreateProfilePage() {

  // Supabase client
  const supabase = createClient()
  const router = useRouter()

  const handleCreate = async (payload: {formData: any; socialLinks: any[]; tags: string[]; deliverables: string[]}) => {
    const { formData, socialLinks, tags, deliverables} = payload
    const { data: { user } } = await supabase.auth.getUser()

    // Calculate totalFollowers from socialLinks
    const totalFollowers = socialLinks.reduce((sum, link) => {
      return sum + (typeof link.followers === "number" ? link.followers : 0)
    }, 0)
    
    // INSERT into profiles
    const { error: insertError } = await supabase.from("profiles").insert({
      id: user?.id, email: user?.email, full_name: formData.fullName,
      bio: formData.bio, university: formData.school, sport: formData.sport,
      graduation_year: parseInt(formData.gradYear), division: formData.division,
      engagement_rate: parseFloat(formData.engagementRate),
      avg_views: parseInt(formData.avgViews), total_followers: totalFollowers
    })

    if (insertError)
    {
      throw new Error(insertError.message)
    }
    else
    {
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
          return

        }
        // Route to user's profile
       router.push(`/profile/${user?.id}`)
      }

  }

  return (
    <ProfileForm
      onSubmit={handleCreate}
      submitLabel="Generate My NIL Card →"
      loadingLabel="Generating..."
      pageTitle="Quick Profile Setup"
      pageSubtitle="Fill out your info and get your shareable NIL card in minutes"
    />
  )

}