import { useEffect, useRef } from 'react'

export default function Hero({ mousePosition }) {
  const containerRef = useRef(null)

  // Generate orbital dots for each ring
  const generateDots = (count, radius, size, opacity, speed) => {
    return Array.from({ length: count }, (_, i) => ({
      angle: (360 / count) * i,
      radius,
      size,
      opacity,
      speed,
      delay: i * (3 / count)
    }))
  }

  const orbitals = [
    ...generateDots(8, 200, 2, 0.3, 60),   // Outer ring - slow
    ...generateDots(12, 165, 1.5, 0.4, 45), // 
    ...generateDots(10, 130, 2, 0.5, 35),   // Middle rings
    ...generateDots(8, 100, 1.5, 0.6, 28),  //
    ...generateDots(6, 70, 2, 0.7, 20),     // Inner ring - faster
  ]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Animated Orbital Container */}
      <div 
        ref={containerRef}
        className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] mb-12"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        {/* Orbital rings */}
        {[200, 165, 130, 100, 70].map((radius, i) => (
          <div
            key={`ring-${i}`}
            className="absolute rounded-full border border-white"
            style={{
              width: radius * 2,
              height: radius * 2,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.08 + (i * 0.03),
            }}
          />
        ))}

        {/* Rotating ring groups */}
        <div 
          className="absolute inset-0"
          style={{ animation: 'spin 60s linear infinite' }}
        >
          {orbitals.filter((_, i) => i < 8).map((dot, i) => (
            <div
              key={`dot-outer-${i}`}
              className="absolute rounded-full bg-white orbit-dot"
              style={{
                width: dot.size,
                height: dot.size,
                top: '50%',
                left: '50%',
                opacity: dot.opacity,
                transform: `rotate(${dot.angle}deg) translateX(${dot.radius}px)`,
                animationDelay: `${dot.delay}s`
              }}
            />
          ))}
        </div>

        <div 
          className="absolute inset-0"
          style={{ animation: 'spin 45s linear infinite reverse' }}
        >
          {orbitals.filter((_, i) => i >= 8 && i < 20).map((dot, i) => (
            <div
              key={`dot-mid1-${i}`}
              className="absolute rounded-full bg-white orbit-dot"
              style={{
                width: dot.size,
                height: dot.size,
                top: '50%',
                left: '50%',
                opacity: dot.opacity,
                transform: `rotate(${dot.angle}deg) translateX(${dot.radius}px)`,
                animationDelay: `${dot.delay}s`
              }}
            />
          ))}
        </div>

        <div 
          className="absolute inset-0"
          style={{ animation: 'spin 35s linear infinite' }}
        >
          {orbitals.filter((_, i) => i >= 20 && i < 30).map((dot, i) => (
            <div
              key={`dot-mid2-${i}`}
              className="absolute rounded-full bg-white orbit-dot"
              style={{
                width: dot.size,
                height: dot.size,
                top: '50%',
                left: '50%',
                opacity: dot.opacity,
                transform: `rotate(${dot.angle}deg) translateX(${dot.radius}px)`,
                animationDelay: `${dot.delay}s`
              }}
            />
          ))}
        </div>

        <div 
          className="absolute inset-0"
          style={{ animation: 'spin 25s linear infinite reverse' }}
        >
          {orbitals.filter((_, i) => i >= 30 && i < 38).map((dot, i) => (
            <div
              key={`dot-inner1-${i}`}
              className="absolute rounded-full bg-white orbit-dot"
              style={{
                width: dot.size,
                height: dot.size,
                top: '50%',
                left: '50%',
                opacity: dot.opacity,
                transform: `rotate(${dot.angle}deg) translateX(${dot.radius}px)`,
                animationDelay: `${dot.delay}s`
              }}
            />
          ))}
        </div>

        <div 
          className="absolute inset-0"
          style={{ animation: 'spin 18s linear infinite' }}
        >
          {orbitals.filter((_, i) => i >= 38).map((dot, i) => (
            <div
              key={`dot-inner2-${i}`}
              className="absolute rounded-full bg-white orbit-dot"
              style={{
                width: dot.size,
                height: dot.size,
                top: '50%',
                left: '50%',
                opacity: dot.opacity,
                transform: `rotate(${dot.angle}deg) translateX(${dot.radius}px)`,
                animationDelay: `${dot.delay}s`
              }}
            />
          ))}
        </div>

        {/* Spiral paths - decorative */}
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 500 500"
          style={{ animation: 'spin 120s linear infinite' }}
        >
          <defs>
            <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.15" />
              <stop offset="50%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Spiral 1 */}
          <path
            d="M250,250 Q300,200 320,250 Q340,300 300,340 Q260,380 220,340 Q180,300 200,260 Q220,220 260,230 Q300,240 290,270"
            fill="none"
            stroke="url(#spiralGradient)"
            strokeWidth="0.5"
          />
          {/* Spiral 2 - opposite direction */}
          <path
            d="M250,250 Q200,200 180,250 Q160,300 200,340 Q240,380 280,340 Q320,300 300,260 Q280,220 240,230 Q200,240 210,270"
            fill="none"
            stroke="url(#spiralGradient)"
            strokeWidth="0.5"
          />
          {/* Outer spiral arc */}
          <path
            d="M250,50 Q400,100 450,250 Q400,400 250,450 Q100,400 50,250 Q100,100 250,50"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
            strokeOpacity="0.1"
            strokeDasharray="10 20"
          />
        </svg>

        {/* Secondary rotating spiral */}
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 500 500"
          style={{ animation: 'spin 90s linear infinite reverse' }}
        >
          <ellipse
            cx="250"
            cy="250"
            rx="180"
            ry="120"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.08"
            transform="rotate(30 250 250)"
          />
          <ellipse
            cx="250"
            cy="250"
            rx="180"
            ry="120"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.08"
            transform="rotate(-30 250 250)"
          />
        </svg>

        {/* Center logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div 
            className="w-24 h-24 md:w-28 md:h-28 border border-white/40 rounded-full flex items-center justify-center bg-dark-900/80 backdrop-blur-sm"
            style={{
              boxShadow: '0 0 60px rgba(255,255,255,0.05), inset 0 0 30px rgba(255,255,255,0.03)'
            }}
          >
            <span className="font-display text-4xl md:text-5xl font-light tracking-tight">C</span>
          </div>
        </div>

        {/* Glow effect behind center */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }}
        />
      </div>

      {/* Tagline */}
      <div className="text-center relative z-10">
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
          STORYTELLER BY NATURE
        </h1>
        <p className="text-base md:text-xl tracking-[0.3em] text-white/60 uppercase">
          Multidisciplinary by Accident
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-white/40">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>

      {/* Subtle background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 50%)'
        }}
      />
    </section>
  )
}
