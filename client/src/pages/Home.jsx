import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        
        {/* Hero Text */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-indigo-300 to-white bg-clip-text text-transparent">
            Welcome to JNS Fitness
          </h1>

          <p className="mt-6 text-gray-400 text-sm md:text-lg leading-relaxed">
            A complete ecosystem for fitness, sports training, and modern
            accommodation — built for discipline, performance, and growth.
          </p>
        </div>

        {/* Cards */}
        <div className="ml-30 mr-30 mt-20 mb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Badminton */}
          <NavLink
            to="/sports-academy"
            className="group bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[280px]
                       flex flex-col justify-between hover:bg-white/10 transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-300">
                🏸 Badminton Academy
              </h3>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Professional badminton training with structured coaching and
                performance-focused development.
              </p>
            </div>
            <span className="text-sm text-indigo-400">
              Coming Soon →
            </span>
          </NavLink>

          {/* Gym */}
          <NavLink
            to="/fitness-club"
            className="group bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[280px]
                       flex flex-col justify-between hover:bg-white/10 transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-300">
                🏋️ Fitness Club
              </h3>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Fully operational gym with modern equipment, expert trainers,
                and a motivating workout environment.
              </p>
            </div>
            <span className="text-sm text-green-400">
              Now Open →
            </span>
          </NavLink>

          {/* Coliving */}
          <NavLink
            to="/coliving"
            className="group bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[280px]
                       flex flex-col justify-between hover:bg-white/10 transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-300">
                🏠 Accommodation
              </h3>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Comfortable and well-managed accommodation options designed
                for long-term living and convenience.
              </p>
            </div>
            <span className="text-sm text-green-400">
              Operating →
            </span>
          </NavLink>

        </div>

      </div>
    </section>
  );
}

export default Home;