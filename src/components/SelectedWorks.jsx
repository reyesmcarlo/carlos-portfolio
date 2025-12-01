import { useState } from 'react'
import Modal from './Modal'

export default function SelectedWorks() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedWork, setSelectedWork] = useState(null)

  const works = [
    {
      id: 1,
      category: 'event',
      title: 'Reckon at Catalonia Plaza Hotel',
      subtitle: 'Rooftop Series • 2016–2017',
      description: 'A unique series of events on one of Barcelona\'s most breathtaking rooftops. Negotiating access to this prestigious hotel venue required persistence and vision — resulting in 10+ unforgettable events overlooking the city skyline.',
      longDescription: 'The Catalonia Plaza Hotel rooftop offered something rare in Barcelona: a panoramic view of the entire city, from Montjuïc to the Sagrada Família, with the Mediterranean as backdrop. Transforming this corporate space into an underground electronic music venue required reimagining what a hotel partnership could look like.',
      challenge: 'Convincing a four-star hotel to host electronic music events was no small feat. It required months of negotiation, demonstrating professionalism, and building trust with hotel management. We had to balance the energy of our events with the hotel\'s brand standards and ensure zero complaints from guests.',
      responsibilities: [
        'Venue negotiation and partnership development',
        'Artist booking and lineup curation',
        'Sound system design for open-air acoustics',
        'Marketing and promotion strategy',
        'On-site production and event management',
        'Sponsor acquisition and brand partnerships'
      ],
      stats: ['10+ Events', 'Exclusive Venue', 'Hotel Partnership'],
      image: '/images/reckon-plaza/hero.jpg',
      gallery: [
        '/images/reckon-plaza/hero.jpg',
        '/images/reckon-plaza/18192523_715557128627700_8721476632218889250_o.jpg',
        '/images/reckon-plaza/18208946_715556921961054_4608979912500442747_o.jpg',
        '/images/reckon-plaza/18209090_715556625294417_2763968564810658633_o.jpg',
        '/images/reckon-plaza/34442888_920022131514531_7519519104206635008_n.jpg',
        '/images/reckon-plaza/34595777_920022261514518_7074192091521220608_n.jpg',
      ],
      color: 'from-amber-900/50 to-dark-900',
    },
    {
      id: 2,
      category: 'event',
      title: 'Reckon at Input',
      subtitle: 'Club Residency • 2016',
      description: 'A year-long residency at one of Barcelona\'s premier electronic music venues. Twice-monthly events drawing 1,000+ attendees each, establishing Reckon as a cornerstone of the city\'s underground scene.',
      longDescription: 'Input High Fidelity Dance Club was known for its exceptional sound system and discerning crowd. Securing a residency there meant joining the ranks of Barcelona\'s most respected promoters. Our twice-monthly events became a ritual for the city\'s electronic music community.',
      challenge: 'Maintaining momentum over a full year requires constant evolution. Each event needed to feel fresh while staying true to our identity. We had to balance booking emerging talent with established names, all while managing the economics of a 1,000+ capacity venue.',
      responsibilities: [
        'Residency negotiation and programming',
        'International artist booking and logistics',
        'Budget management for large-scale productions',
        'Community building and audience development',
        'Visual identity and promotional campaigns',
        'Door and capacity management'
      ],
      stats: ['1,000+ Attendees', 'Twice Monthly', '1 Year Residency'],
      image: '/images/reckon-input/hero.jpg',
      gallery: [
        '/images/reckon-input/hero.jpg',
        '/images/reckon-input/crowd.jpg',
        '/images/reckon-input/atmosphere.jpg',
        '/images/reckon-input/86495532_1393601384156601_1133142793661710336_n.jpg',
        '/images/reckon-input/Denizer.jpg',
      ],
      color: 'from-purple-900/50 to-dark-900',
    },
    {
      id: 3,
      category: 'event',
      title: 'La Font del Gat',
      subtitle: 'Open-Air Festival Series • 2019',
      description: 'Four magical events in the Roman gardens of Montjuïc. This hidden gem required extensive negotiation to secure. The result: our largest gatherings ever, blending electronic music with live painting, artisan markets, and visual installations.',
      longDescription: 'La Font del Gat is a historic restaurant nestled in the gardens of Montjuïc, surrounded by Roman-era architecture and Mediterranean pines. We transformed this cultural landmark into a multi-sensory festival experience, proving that electronic music could coexist with Barcelona\'s heritage spaces.',
      challenge: 'Working with a heritage site meant navigating permits, noise restrictions, and preservation requirements. We had to design an event format that respected the space while delivering an unforgettable experience. The outdoor setting also meant weather contingencies and complex production logistics.',
      responsibilities: [
        'Heritage site permit acquisition',
        'Multi-vendor coordination (market, food, art)',
        'Live visual artist programming',
        'Environmental sound management',
        'Large-scale crowd flow design',
        'Cross-promotional partnerships'
      ],
      stats: ['Largest Attendance', '4 Editions', 'Multi-Sensory Experience'],
      image: '/images/font-del-gat/hero.jpg',
      gallery: [
        '/images/font-del-gat/hero.jpg',
        '/images/font-del-gat/70245880_1253906038126137_1180071921325178880_n.jpg',
        '/images/font-del-gat/70485216_1253906081459466_515978945531740160_n.jpg',
        '/images/font-del-gat/74892365_1283967688453305_6244809807602122752_n.jpg',
        '/images/font-del-gat/75354903_1283966365120104_5113711938064351232_n.jpg',
      ],
      color: 'from-emerald-900/50 to-dark-900',
    },
    {
      id: 4,
      category: 'cultural',
      title: 'Book Launch',
      subtitle: 'Museu de Cera Barcelona • 2024',
      description: 'An intimate launch event for my published book at Barcelona\'s iconic Wax Museum. A carefully curated evening that brought together literature, atmosphere, and meaningful conversation in a truly unique setting.',
      longDescription: 'The Wax Museum of Barcelona, with its theatrical rooms and uncanny figures, provided the perfect backdrop for a book that explores identity and perception. The launch was designed not just as a reading, but as an immersive experience that extended the themes of the book into physical space.',
      challenge: 'Creating an author event that stands apart from typical bookstore readings required thinking like an event producer, not just a writer. The venue\'s unusual nature meant designing an experience that embraced the surreal atmosphere while keeping focus on the literary work.',
      responsibilities: [
        'Venue selection and negotiation',
        'Event concept and experience design',
        'Guest list curation and invitations',
        'Press and media coordination',
        'Reading and presentation preparation',
        'Book sales and signing logistics'
      ],
      stats: ['Wax Museum', 'Author Event', '2024'],
      image: '/images/book-launch/1.jpg',
      gallery: [
        '/images/book-launch/1.jpg',
        '/images/book-launch/2.jpg',
        '/images/book-launch/3.jpg',
        '/images/book-launch/4.jpg',
        '/images/book-launch/photo_2025-02-18_16-16-54.jpg',
      ],
      color: 'from-rose-900/50 to-dark-900',
    },
  ]

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'event', label: 'Music Events' },
    { id: 'cultural', label: 'Cultural' },
  ]

  const filteredWorks = activeFilter === 'all' 
    ? works 
    : works.filter(w => w.category === activeFilter)

  return (
    <>
      <section id="works" className="py-32 px-6 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="section-fade">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="text-sm tracking-[0.3em] text-white/40 mb-4">PORTFOLIO</p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold">Selected Works</h2>
              </div>
              
              {/* Filters */}
              <div className="flex gap-4">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 text-sm tracking-wide rounded-full transition-all ${
                      activeFilter === filter.id
                        ? 'bg-white text-dark-900'
                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Works Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredWorks.map((work) => (
                <article
                  key={work.id}
                  onClick={() => setSelectedWork(work)}
                  className="case-card group relative bg-dark-700 rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Image area */}
                  <div className={`aspect-[16/10] bg-gradient-to-br ${work.color} relative overflow-hidden`}>
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                    
                    {/* Category badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs tracking-wide uppercase">
                        {work.category === 'event' ? 'Music Event' : 'Cultural'}
                      </span>
                    </div>

                    {/* View arrow */}
                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-sm text-white/50 mb-2">{work.subtitle}</p>
                    <h3 className="font-display text-2xl font-semibold mb-3">{work.title}</h3>
                    <p className="text-white/60 leading-relaxed mb-6 line-clamp-3">{work.description}</p>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap gap-3">
                      {work.stats.map((stat, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/50"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal 
        isOpen={selectedWork !== null}
        onClose={() => setSelectedWork(null)}
        work={selectedWork}
      />
    </>
  )
}
