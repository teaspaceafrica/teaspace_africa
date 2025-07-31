export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const categorySlug = params.categorySlug

  console.log('Category Slug:', params)

  return (
    <>
      <section className="relative bg-[#0066cc] text-white overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-200/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-200/25 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-white/15 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 md:py-12">
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="flex justify-center items-center gap-6 mb-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm"></div>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text capitalize tracking-tight drop-shadow-2xl">
                  {categorySlug || 'Trending'}
                </h1>
              </div>
            </div>

            {/* Enhanced accent line with glow */}
            <div className="max-w-lg mx-auto mt-2">
              <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-lg shadow-white/10"></div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-lg"></div>
      </section>
    </>
  )
}
