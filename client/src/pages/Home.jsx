import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// 1. Define Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each card
    },
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
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Glows (Your Previous Theme) */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-16">
        {/* Hero Text Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-indigo-300 to-white bg-clip-text text-transparent">
            Welcome to JNS
          </h1>
          <p className="mt-6 text-gray-400 text-sm md:text-lg leading-relaxed">
            A complete ecosystem for fitness, sports training, and modern
            accommodation — built for discipline, performance, and growth.
          </p>
        </motion.div>
        {/* Staggered Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-10"
        >
          {/* Card Component Helper to keep code clean */}
          <Card
            to="/sports-academy"
            title="🏸 Badminton Academy"
            desc="Professional badminton training with structured coaching and performance development."
            status="Coming Soon"
            statusColor="text-indigo-400"
          />
          <Card
            to="/fitness-club"
            title="🏋️ Fitness Club"
            desc="Fully operational gym with modern equipment, expert trainers, and a motivating environment."
            status="Now Open"
            statusColor="text-green-400"
          />
          <Card
            to="/coliving"
            title="🏠 Accommodation"
            desc="Comfortable and well-managed accommodation options designed for long-term living."
            status="Operating"
            statusColor="text-green-400"
          />
        </motion.div>
      </div>
    </section>
  );
}

// Sub-component for individual cards to use Variants
function Card({ to, title, desc, status, statusColor }) {
  return (
    <motion.div variants={itemVariants}>
      <NavLink
        to={to}
        className="group block bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[280px]
          flex flex-col justify-between hover:bg-white/10 hover:border-indigo-500/50 
          transition-all duration-300 hover:-translate-y-2"
      >
        <div>
          <h3 className="text-xl font-semibold text-indigo-300 group-hover:text-white transition">
            {title}
          </h3>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            {desc}
          </p>
        </div>
        <span className={`text-sm font-medium ${statusColor}`}>
          {status} →
        </span>
      </NavLink>
    </motion.div>
  );
}

export default Home;