export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-dark-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="section-fade">
          <p className="text-sm tracking-[0.3em] text-white/40 mb-6">GET IN TOUCH</p>
          
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-8">
            Let's create something extraordinary together.
          </h2>
          
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Whether you're planning an event, looking for creative direction, 
            or just want to connect — I'd love to hear from you.
          </p>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="mailto:reyesmcarlo@gmail.com"
              className="group px-8 py-4 bg-white text-dark-900 font-medium rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-reyes-dasein/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          {/* Location */}
          <div className="inline-flex items-center gap-3 text-white/40">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Based in Barcelona, Spain — Available for remote collaboration worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}
