import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, work }) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !work) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark-900/95 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal container */}
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] bg-dark-800 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-dark-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-dark-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero image */}
          <div className={`relative aspect-[21/9] bg-gradient-to-br ${work.color}`}>
            <img 
              src={work.image} 
              alt={work.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/20 to-transparent" />
            
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs tracking-wide uppercase mb-4">
                {work.category === 'event' ? 'Music Event' : 'Cultural'}
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-semibold mb-2">{work.title}</h2>
              <p className="text-xl text-white/60">{work.subtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Stats bar */}
            <div className="flex flex-wrap gap-4 mb-10 pb-10 border-b border-white/10">
              {work.stats.map((stat, index) => (
                <div key={index} className="px-5 py-3 bg-white/5 rounded-xl">
                  <span className="text-white/80 font-medium">{stat}</span>
                </div>
              ))}
            </div>

            {/* Two column layout */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left column - Description */}
              <div>
                <h3 className="font-display text-xl font-semibold mb-4">Overview</h3>
                <p className="text-white/70 leading-relaxed mb-6">{work.description}</p>
                <p className="text-white/70 leading-relaxed">{work.longDescription}</p>
              </div>

              {/* Right column - Details */}
              <div>
                <h3 className="font-display text-xl font-semibold mb-4">The Challenge</h3>
                <p className="text-white/70 leading-relaxed mb-6">{work.challenge}</p>
                
                <h3 className="font-display text-xl font-semibold mb-4">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {work.responsibilities?.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/70">
                      <svg className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo gallery */}
            {work.gallery && work.gallery.length > 0 && (
              <div className="mt-12">
                <h3 className="font-display text-xl font-semibold mb-6">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {work.gallery.map((img, index) => (
                    <div 
                      key={index} 
                      className="aspect-[4/3] rounded-xl overflow-hidden bg-dark-700"
                    >
                      <img 
                        src={img} 
                        alt={`${work.title} - ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.parentElement.style.display = 'none' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              >
                ← Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
