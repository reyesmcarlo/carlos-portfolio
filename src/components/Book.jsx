export default function Book() {
  return (
    <section id="book" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Book mockup */}
            <div className="relative">
              {/* Book placeholder - replace with actual book image */}
              <div className="aspect-[3/4] max-w-md mx-auto relative">
                {/* Shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/50 blur-2xl rounded-full" />
                
                {/* Book cover */}
                <div className="relative rounded-lg shadow-2xl h-full overflow-hidden">
                  <img
                    src="/images/book-cover/Newest Cover Test.jpg"
                    alt="Book Cover by Carlos Ernesto Reyes"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-white/10 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-white/10 rounded-full" />
              </div>
            </div>

            {/* Book info */}
            <div>
              <p className="text-sm tracking-[0.3em] text-white/40 mb-6">PUBLISHED AUTHOR</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
                The Deepest Trench in the Ocean
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                An exploration of personal and general philosophical concepts, told through the lens of a trip to Cuba by two young, wild lovers. Loosely based on a true story, The Deepest Trench in the Ocean combines dark humor, romance, and adventure. 
              </p>
              
              {/* Key points */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/60">Presented at the Wax Museum Barcelona — a historic venue that set the perfect stage for the book's themes.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/60">Available world-wide on Amazon.</p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.amazon.es/dp/B0DNY3ZMXV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-dark-900 font-medium rounded-full hover:bg-white/90 transition-colors"
                >
                  Get the Book
                </a>
                <a
                  href="#"
                  className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                >
                  Read an Excerpt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
