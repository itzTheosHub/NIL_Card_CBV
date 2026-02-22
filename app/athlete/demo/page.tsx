"use client"

import Image from "next/image"
import Header from "@/components/Header"
import { Eye, Users, TrendingUp, Camera, Video,
        Package, Calendar, Award, Share2, BadgeCheck, GraduationCap, ExternalLink } from "lucide-react"


export default function DemoPage() {

    function formatNumber(num:number) : string {
        if ( num >= 1000000){
            return `${(num / 1000000).toFixed(1)}M`;
        }
        if (num >= 1000){
             return `${(num / 1000).toFixed(1)}K`;
        }
        
        return num.toString();
    }

    function formatEngagement(num:number) : string {
        return `${(num)}%`;
    }

    

    const totalReach = 120000
    const formattedReach = formatNumber(totalReach)
    const formattedEngagement = formatEngagement(450000/totalReach)
    const formattedAverageReach = formatNumber(12390)

    const contentTags = ["Fitness", "Health", "Travel", "Fashion", "Food"]

    
    return (
            <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
              <Header />

            <main className="mx-auto max-w-2xl px-4 py-8">
                {/* Page Header */}
                <div className="flex items-start justify-between mb-6 ">
                    <div>
                        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                            Your NIL Profile
                        </h1>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                            This is how your public profile will appear when brands click on your unique link.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:hover:bg-violet-900/50 font-medium transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Preview
                    </button>
                </div>

                {/* Profile Card */}
                <div className="overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg dark:border dark:border-zinc-700 dark:bg-zinc-900/80 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    {/* Cover Image Area */}
                    <div className="h-32 bg-gradient-to-r from-violet-600 to-blue-500" />

                    {/* Profile Photo - overlaps cover */}
                    <div className="-mt-16 px-6 flex justify-center">
                        <div className="relative w-fit">
                            <Image
                                src="/athleteDemoPhoto.jpg"
                                alt="Jordan Smith"
                                width={128}
                                height={128}
                                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg dark:border-zinc-900 ring-4 ring-violet-500/30"
                            />
                            <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-zinc-900 animate-pulse" />
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="px-6 pb-6 pt-4 text-center">
                        {/* Name + Verified */}
                        <div className="flex items-center justify-center gap-2">
                            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                                Jordan Smith
                            </h1>
                            <BadgeCheck className="w-4 h-4 text-violet-500"/>
                        </div>

                        {/* University/School/College */}
                        <div className="flex items-center justify-center gap-1.5 text-zinc-500 dark:text-zinc-300 mt-1">
                            <span>Junior</span>
                            <span>•</span>
                            <span>Men&#39;s Basketball</span>
                            <span>•</span>
                            <span>Division I</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 text-zinc-500 dark:text-zinc-300 mt-1">
                            <GraduationCap className="w-4 h-4 text-violet-500"/>
                                <span>University of Cincinnati &#39;27</span>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mt-4 mb-6 pb-6 border-b border-gray-100 dark:border-zinc-700">
                            {/* Stat 1: Total Reach */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-2 dark:bg-purple-900/30">
                                    <Users className="w-5 h-5 text-purple-600"/>
                                </div>
                                <div className="font-bold text-gray-900 dark:text-white">
                                    {formattedReach}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-zinc-400">
                                    Total Reach
                                </div>
                            </div>

                            {/* Stat 2: Engagement % */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center mb-2 dark:bg-pink-900/30">
                                    <TrendingUp className="w-5 h-5 text-purple-600"/>
                                </div>
                                <div className="font-bold text-gray-900 dark:text-white">
                                    {formattedEngagement}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-zinc-400">
                                    Engagement Rate
                                </div>

                            </div>

                            {/* Stat 3: Avg Reach */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-2 dark:bg-blue-900/30">
                                    <Eye className="w-5 h-5 text-purple-600"/>
                                </div>
                                <div className="font-bold text-gray-900 dark:text-white">
                                    {formattedAverageReach}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-zinc-400">
                                    Avg Reach
                                </div>

                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="space-y-3 mt-4 text-left">
                            <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">Social Channels</div>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com/jordansmith"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 rounded-xl transition-all group border border-purple-100 dark:border-purple-800"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-zinc-900 dark:text-white">Instagram</div>
                                        <div className="text-xs text-zinc-600 dark:text-zinc-400">@jordansmith</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="text-right">
                                        <div className="font-semibold text-zinc-900 dark:text-white">125K</div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400">followers</div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                                </div>
                            </a>

                            {/* TikTok */}
                            <a
                                href="https://tiktok.com/@jordansmith"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 bg-gradient-to-r from-zinc-50 to-zinc-100 hover:from-zinc-100 hover:to-zinc-200 dark:from-zinc-800/50 dark:to-zinc-700/50 dark:hover:from-zinc-800 dark:hover:to-zinc-700 rounded-xl transition-all group border border-zinc-200 dark:border-zinc-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-zinc-900 dark:text-white">TikTok</div>
                                        <div className="text-xs text-zinc-600 dark:text-zinc-400">@jordansmith</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="text-right">
                                        <div className="font-semibold text-zinc-900 dark:text-white">95K</div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400">followers</div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                                </div>
                            </a>

                            {/* Twitter/X */}
                            <a
                                href="https://twitter.com/jsmith_hoops"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 dark:from-blue-900/20 dark:to-sky-900/20 dark:hover:from-blue-900/30 dark:hover:to-sky-900/30 rounded-xl transition-all group border border-blue-100 dark:border-blue-800"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-zinc-900 dark:text-white">X (Twitter)</div>
                                        <div className="text-xs text-zinc-600 dark:text-zinc-400">@jsmith_hoops</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="text-right">
                                        <div className="font-semibold text-zinc-900 dark:text-white">30K</div>
                                        <div className="text-xs text-zinc-500 dark:text-zinc-400">followers</div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 mb-6 border border-gray-100 dark:border dark:border-zinc-700 dark:bg-zinc-900/80 mt-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <h2 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-300">
                        About
                    </h2>
                    <p className="text-gray-700 leading-relaxed dark:text-zinc-300">
                        Passionate about inspiring the next generation of athletes while promoting health & wellness. Dedicated to excellence on and off the court.
                        Currently majoring in Sports Management with a focus on building authentic brand partnerships.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {contentTags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-linear-to-r from-violet-600 to-blue-500 text-white text-sm font-medium hover:from-violet-700 hover:to-blue-600 hover:scale-105 transition-all cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/*Partnership deliverables Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 mb-6 border border-gray-100 dark:border dark:border-zinc-700 dark:bg-zinc-900/80 mt-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <h2 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">
                        Partnership Deliverables
                    </h2>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-purple-50 hover:border-purple-200 transition-colors dark:hover:bg-purple-900/20 dark:bg-zinc-800 dark:border-zinc-700">
                            <Camera className="w-5 h-5 text-purple-600"/>
                                <span className="text-gray-700 font-medium dark:text-zinc-300">
                                    Instagram Post & Story
                                </span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-purple-50 hover:border-purple-200 transition-colors dark:hover:bg-purple-900/20 dark:bg-zinc-800 dark:border-zinc-700">
                            <Video className="w-5 h-5 text-purple-600"/>
                                <span className="text-gray-700 font-medium dark:text-zinc-300">
                                    TikTok Video
                                </span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-purple-50 hover:border-purple-200 transition-colors dark:hover:bg-purple-900/20 dark:bg-zinc-800 dark:border-zinc-700">
                            <Package className="w-5 h-5 text-purple-600"/>
                                <span className="text-gray-700 font-medium dark:text-zinc-300">
                                    Product Review & Unboxing
                                </span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-purple-50 hover:border-purple-200 transition-colors dark:hover:bg-purple-900/20 dark:bg-zinc-800 dark:border-zinc-700">
                            <Share2 className="w-5 h-5 text-purple-600"/>
                                <span className="text-gray-700 font-medium dark:text-zinc-300">
                                    Social Media Takeover
                                </span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-purple-50 hover:border-purple-200 transition-colors dark:hover:bg-purple-900/20 dark:bg-zinc-800 dark:border-zinc-700">
                            <Calendar className="w-5 h-5 text-purple-600"/>
                                <span className="text-gray-700 font-medium dark:text-zinc-300">
                                    Event Appearance
                                </span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-purple-50 hover:border-purple-200 transition-colors dark:hover:bg-purple-900/20 dark:bg-zinc-800 dark:border-zinc-700">
                            <Award className="w-5 h-5 text-purple-600"/>
                                <span className="text-gray-700 font-medium dark:text-zinc-300">
                                    Brand Ambassador
                                </span>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 space-y-3">
                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white font-semibold shadow-xl hover:shadow-xl transition-all shadow-violet-500/40 hover:-translate-y-0.5 hover:scale-[1.02] duration-300">
                            Contact for Partnership Opportunities
                    </button>
                </div>
            </main>

            </div>
    )
}


