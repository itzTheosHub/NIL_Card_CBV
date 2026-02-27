"use client"

import Link  from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import {useState, useEffect} from "react"

export default function Header({children}: {children?: React.ReactNode}){

    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    return (
        <header className="border-b border-zinc-200 bg-[rgb(252,253,255)] dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center justify-between px-4 sm:px-6 py-2">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="NIL Card logo"
                        width={220}
                        height={120}
                        className="h-12 sm:h-20 w-auto dark:hidden"
                    />
                    <Image
                        src="/logo-dark.png"
                        alt="NIL Card logo"
                        width={220}
                        height={120}
                        className="h-12 sm:h-20 w-auto hidden dark:block"
                    />
                </Link>
                <div className="flex items-center gap-3">
                    <button
                        className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                        {mounted ? (resolvedTheme == "dark" ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>) : <div className="w-5 h-5 "/>}
                    </button>
                    {children}
                </div>
            </div>
        </header>
                
    )
}