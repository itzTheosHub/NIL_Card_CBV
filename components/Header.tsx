import Link  from "next/link"
import Image from "next/image"

export default function Header({children}: {children?: React.ReactNode}){
    return (
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
                    <Image
                        src="/logo-dark.png"
                        alt="NIL Card logo"
                        width={220}
                        height={120}
                        className="h-20 w-auto hidden dark:block"
                    />
                    </Link>
                        {children}
            </div>
        </header>
                
    )
}