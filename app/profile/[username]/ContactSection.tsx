"use client"

import {useState} from "react"
import { CircleCheck } from "lucide-react"

type contactProps = {
    email: string,
    name: string
}

export default function ContactSection({email, name}: contactProps){

    const [isOpen, setIsOpen] = useState(false)
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [senderEmail, setEmail] = useState("")
    const [showSuccess, setShowSuccess] = useState(false)
    
    async function handleSend(){
        await fetch("/api/contact", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, senderEmail, subject, message})
            
        })
        setIsOpen(false)
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
    }   

    return (
        <div>
        {/* Buttons */}
                <div className="mt-6 space-y-3">
                    <button 
                        onClick= {() => setIsOpen(true)}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white font-semibold shadow-xl hover:shadow-xl transition-all shadow-violet-500/40 hover:-translate-y-0.5 hover:scale-[1.02] duration-300">
                            Contact for Partnership Opportunities
                    </button>
                </div>
            {/* Only renders when isOpen is true */}

                {isOpen && (
                    <>
                        {/*Backdrop - dark overlay, clicking it closes modal*/}
                        <div className = "fixed inset-0 bg-black/50 z-50"
                        onClick={() => setIsOpen(false)}
                        />

                        {/* Modal Card - centered on screen */}
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div 
                                className="space-y-4 bg-white rounded-2xl p-6 w-full max-w-md shadow-xl z-50 dark:bg-zinc-900 dark:border dark:border-zinc-700"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                                    Contact: {name}
                                </h2>

                                <input 
                                    className="w-full rounded-lg border p-3 dark:border-zinc-600 dark:bg-zinc-800"
                                    value={senderEmail}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                />

                                <input
                                    className="w-full rounded-lg border p-3 dark:border-zinc-600 dark:bg-zinc-800"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Subject"
                                />

                                <textarea
                                    className="w-full rounded-lg border p-3 dark:bg-zinc-800 dark:border-zinc-600"
                                    value={message}
                                    rows={4}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Your message..."
                                />

                                <button 
                                    onClick={handleSend}
                                    className="w-full py-2 rounded-md bg-gradient-to-r from-violet-600 to-blue-500 text-white font-medium text-center block hover:from-violet-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Send
                                </button>

                                <button 
                                    className="text-zinc-500 w-full text-center hover:text-zinc-700"
                                    onClick = {() => setIsOpen(false)}>
                                    Cancel
                                </button>

                            </div>
                        </div>
                    </>
                )}
                {showSuccess && (
                    
                        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-lg shadow-green-500/20 p-5 flex items-center gap-2 animate-bounce dark:bg-green-900/20">
                            <CircleCheck className="w-5 h-5 text-green-500" />
                                <span className="text-zinc-900 font-medium text-lg dark:text-white">Message  
                                    sent successfully!
                                </span>
                        </div>
                    
                )}

        </div>
    )

}