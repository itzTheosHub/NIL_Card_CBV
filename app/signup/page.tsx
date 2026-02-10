"use client"

import { useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SignUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const supabase = createClient()

        
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        const { data, error } = await
        supabase.auth.signUp({email, password})
        
        if (error){
            console.log("An error has occured")
            setError(error.message)
            console.log("Error: ", error.message)
        }
        else {
            console.log("Submitted")
            setSuccess(true)
            // Alert and redirect to somewhere else
        }
        setLoading(false)
    }

    


    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
              {/* Header */}
              <header className="border-b border-zinc-200 bg-[rgb(252,253,255)] dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center justify-between px-6 py-2">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="NIL Card logo"
                    width={220}
                    height={120}
                    className="h-20 w-auto dark:hidden"
                  />
                  {/* Dark Mode Logo */}
                  <Image
                    src="/logo-dark.png"
                    alt="NIL Card logo"
                    width={220}
                    height={120}
                    className="h-20 w-auto hidden dark:block"
                  />
                </Link>
                  </div>
            </header>

            <main className="flex-1 flex place-items-center justify-center px-4">
                <div className= "bg-white rounded-lg border border-zinc-200 p-8 shadow-md w-full max-w-md dark:bg-zinc-900 dark:border-zinc-700">
                    <h1 className="text-2xl font-bold text-zinc-900 text-center mb-6 dark:text-zinc-100">
                        Sign Up
                    </h1>

                    {success ? (
                        <div className="text-center">
                            <p className="text-green-600 dark:text-green-400 mb-4">
                                Account created! Check your email for a confirmation link.
                            </p>
                        </div>
                    ) : (
                        <>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setError(null)
                                    }}
                                    required
                                />
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        setError(null)
                                    }}
                                    required
                                />
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-2 rounded-md bg-gradient-to-r from-violet-600 to-blue-500 text-white font-medium hover:from-violet-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Signing up..." : "Sign Up"}
                                </Button>
                                {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
                            </form>
                            <div className="border-t border-zinc-300 dark:border-zinc-600 my-6"></div>
                            <div className="text-center">
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                                    Already have an account?
                                </p>
                                <Link
                                    href="/login"
                                    className="block w-full py-2 rounded-md border border-zinc-300 text-zinc-700 font-medium hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                >
                                    Sign in
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
        )
}