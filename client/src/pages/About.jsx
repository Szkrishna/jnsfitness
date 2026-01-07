function About() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] justify-center px-6 pt-16 md:pt-16">
        <div className="max-w-2xl w-full text-center">
          
          <span className="inline-block text-xs uppercase tracking-widest text-indigo-400 mb-4">
            About JNS Fitness
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-indigo-300 to-white bg-clip-text text-transparent">
            Built for Strength. <br className="hidden md:block" />
            Driven by Discipline.
          </h1>

          <p className="mt-6 text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl mx-auto">
            JNS Fitness is more than a gym — it’s a movement focused on physical
            strength, mental resilience, and lifestyle transformation.
            We are building an ecosystem around fitness, sports, and
            community-driven growth.
          </p>

          <div className="mt-8 h-px w-24 bg-indigo-500/40 mx-auto" />

          <div className="mt-8 flex justify-center">
            <span className="px-5 py-2 text-sm rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              Full Experience Launching Soon
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;