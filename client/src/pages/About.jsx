function About() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      {/* Glass Card */}
      <div className="max-w-xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 text-center">
        
        <span className="text-xs uppercase tracking-widest text-indigo-400">
          About Us
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">
          Coming Soon
        </h1>

        <p className="mt-5 text-gray-400 text-sm md:text-base leading-relaxed">
          We’re crafting something powerful for fitness, sports, and lifestyle
          enthusiasts. This section will soon showcase our mission, values,
          and vision.
        </p>

        <div className="mt-8 flex justify-center">
          <span className="px-4 py-2 text-sm rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 animate-pulse">
            Launching shortly
          </span>
        </div>

      </div>
    </section>
  );
}

export default About;