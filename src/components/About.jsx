export default function About() {
  const stats = [
    { number: '10+', label: 'Years in Events' },
    { number: '100+', label: 'Events Produced' },
    { number: '6', label: 'Years in Tech' },
    { number: '2000+', label: 'Max Attendance' },
  ]

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade">
          {/* Section label */}
          <p className="text-sm tracking-[0.3em] text-white/40 mb-6">ABOUT</p>
          
          {/* Main headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-12 max-w-4xl">
            Event producer, author, and technologist based in Barcelona.
          </h2>

          {/* Two column content */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                For over a decade, I've been shaping Barcelona's electronic music scene — 
                producing events that bring together artists, audiences, and unforgettable 
                moments. From intimate 200-person showcases to productions with thousands 
                of attendees, I've learned that great events are about more than logistics. 
                They're about telling a story.
              </p>
              <p>
                My path has also taken me inside some of the world's most demanding tech 
                companies — Apple, Meta, and Printful — where I developed a deep appreciation 
                for customer experience, technical problem-solving, and operating at scale.
              </p>
            </div>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Today, I bring all of this together: the creative instincts of a producer, 
                the precision of a technologist, and the narrative sensibility of a writer. 
                Whether I'm designing an event experience, helping a startup find its voice, 
                or crafting my next story, the thread is always the same — connection.
              </p>
              <p>
                I believe the best experiences, like the best stories, make people feel 
                something. That's what I'm here to create.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="font-display text-4xl md:text-5xl font-semibold mb-2">{stat.number}</p>
                <p className="text-sm tracking-wide text-white/50 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
