/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaCheckCircle, FaUsers, FaDumbbell, FaStar } from "react-icons/fa";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

function Home() {
  return (
    <div className="bg-black text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Glows */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px]" />
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Gurugram's Ultimate Fitness Destination
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent leading-none"
          >
            TRAIN. LIVE. <br /> <span className="text-white">EVOLVE.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            A premium ecosystem for elite sports training, professional fitness, and modern co-living.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <NavLink to="/fitness-club" className="px-8 py-4 bg-indigo-600 rounded-full font-bold hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20">
              Start Training
            </NavLink>
            <NavLink to="/about" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition">
              Learn More
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem icon={<FaUsers />} label="Members" value="500+" />
          <StatItem icon={<FaDumbbell />} label="Trainers" value="12+" />
          <StatItem icon={<FaStar />} label="Rating" value="4.9/5" />
          <StatItem icon={<FaCheckCircle />} label="Disciplines" value="5+" />
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">The Ecosystem</h2>
            <p className="text-gray-500 mt-2">Everything you need to reach your peak performance.</p>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 mx-8 hidden md:block mb-4"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Card
            to="/sports-academy"
            title="Badminton Academy"
            desc="Structured coaching for all levels with professional grade courts."
            status="Coming Soon"
            statusColor="text-indigo-400"
          />
          <Card
            to="/fitness-club"
            title="Fitness Club"
            desc="Elite gym environment with specialized strength and cardio zones."
            status="Now Open"
            statusColor="text-green-400"
          />
          <Card
            to="/coliving"
            title="Premium Co-Living"
            desc="Luxury accommodation designed for athletes and professionals."
            status="Operating"
            statusColor="text-green-400"
          />
        </motion.div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="my-20 relative rounded-3xl overflow-hidden py-20 px-10 text-center border border-indigo-500/30 bg-gradient-to-b from-indigo-600/10 to-transparent">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to join the elite?</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">Visit us in Sector 51, Gurugram today for a free trial session at our Fitness Club.</p>
        <NavLink to="/contact" className="inline-block px-10 py-4 bg-white text-black rounded-full font-black hover:bg-gray-200 transition">
          GET STARTED NOW
        </NavLink>
      </section>
    </div>
  );
}

// Sub-components
function StatItem({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-indigo-500 text-xl mb-1">{icon}</span>
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-gray-500 text-xs uppercase tracking-widest">{label}</span>
    </div>
  );
}

function Card({ to, title, desc, status, statusColor }) {
  return (
    <motion.div variants={itemVariants}>
      <NavLink
        to={to}
        className="group block bg-white/5 border border-white/10 rounded-3xl p-8 min-h-[300px]
          flex flex-col justify-between hover:bg-white/10 hover:border-indigo-500/50 
          transition-all duration-500 hover:-translate-y-2 relative"
      >
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition">{desc}</p>
        </div>
        <div className="mt-8 flex items-center justify-between">
            <span className={`text-xs font-black uppercase tracking-widest ${statusColor}`}>{status}</span>
            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">→</span>
        </div>
      </NavLink>
    </motion.div>
  );
}

export default Home;