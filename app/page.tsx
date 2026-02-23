import Link from "next/link";
import Header from "@/components/Header"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <Header>
        <div className="flex gap-2 sm:gap-3">
          <Link
            href="/login"
            className="rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 px-4 py-2 text-sm font-medium text-white"
          >
            Get Started
          </Link>
        </div>
      </Header>
          
          {/*Hero Section */}
          <main className="flex flex-col items-center justify-center py-12 sm:py-20 px-4 bg-gradient-to-b from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl text-center">
              Your NIL Profile,
              <br/>
              your confident pitch to brands
            </h1>
            <p className="mt-4 text-lg text-zinc-600 text-center max-w-md">
              Create a professional virtual NIL Card to showcase your social reach, 
              audience, and brand collaboration opportunities. Share it with one simple link.
            </p>
            <div className="flex flex-col items-center sm:flex-row gap-4 mt-8">
              <Link
                href="/signup"
                className="rounded-md bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 px-8 py-3 text-base font-medium text-white whitespace-nowrap"
              >
                Create Your Card
              </Link>
              <Link
                href="/athlete/demo"
                className="rounded-md border border-zinc-300 bg-white px-8 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 whitespace-nowrap"
              >
                See Example
              </Link>
            </div>

          </main>
          {/* How It Works Section */}
          <section className="border-t border-zinc-200 bg-white py-20 px-4 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                How It Works
              </h2>
              <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">
                Get your NIL Card in three simple steps
              </p>

              <div className="mt-12 grid gap-12 sm:grid-cols-3">
                {/* Step 1 */}
                <div className="text-center rounded-lg p-4 transition hover:bg-zinc-50 dark:hover:bg-zinc-800">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-xl font-bold text-white shadow-md">
                    1
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    Create Your Profile
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Add your bio, stats, social media handles, and upload a photo.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center rounded-lg p-4 transition hover:bg-zinc-50 dark:hover:bg-zinc-800">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-xl font-bold text-white shadow-md">
                    2
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    Get Your Link
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    We generate a unique, shareable link for your NIL Card.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center rounded-lg p-4 transition hover:bg-zinc-50 dark:hover:bg-zinc-800">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-xl font-bold text-white shadow-md">
                    3
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    Share With Brands
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Send your link to brands and sponsors to land NIL deals.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      
      
      
        
  )
  }