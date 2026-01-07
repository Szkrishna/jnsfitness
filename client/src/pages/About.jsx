function About() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] justify-center px-6 pt-16">
        <div className="max-w-4xl w-full text-center">
          
          {/* Section Label */}
          <span className="inline-block text-xs uppercase tracking-widest text-indigo-400 mb-4">
            About JNS Fitness
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-indigo-300 to-white bg-clip-text text-transparent">
            Fitness. Sports. <br className="hidden md:block" />
            Lifestyle.
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-400 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
            JNS Fitness is a growing lifestyle ecosystem focused on physical
            fitness, professional sports training, and modern accommodation.
            We aim to build environments where individuals can train, stay,
            and grow with discipline and purpose.
          </p>

          <p className="mt-4 text-gray-400 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
            Our approach combines high-quality fitness infrastructure,
            structured coaching, and community-focused living to support
            long-term health, performance, and personal development.
          </p>

          {/* Divider */}
          <div className="mt-10 h-px w-32 bg-indigo-500/40 mx-auto" />

          {/* Services Status */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm md:text-base">
            <div className="rounded-xl bg-white/5 border border-white/10 py-4 text-gray-300">
              🏋️ Fitness Club <br />
              <span className="text-green-400 text-sm">Operating</span>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 py-4 text-gray-300">
              🏸 Sports Academy <br />
              <span className="text-green-400 text-sm">Operating</span>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 py-4 text-gray-300">
              🏠 Accommodation <br />
              <span className="text-green-400 text-sm">Operating</span>
            </div>
          </div>

          {/* Footer Badge */}
          <div className="mt-10 mb-10 flex justify-center">
            <span className="px-6 py-2 text-sm rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              Building a Complete Fitness Ecosystem
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;