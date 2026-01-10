/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { FaCheckCircle, FaUsers, FaDumbbell, FaStar } from "react-icons/fa";
import heroVideo from "../assets/videos/elite_stay/elite_video.mp4";
import gymImg from '../assets/images/fitness_studio/gym_img2.jpeg';
import badmintonImg from '../assets/images/academy/badminton_1.avif';
import colivingImg from '../assets/images/roost/roost_img9.jpeg';

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
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="bg-black text-white px-6 md:px-16 lg:px-24">
      {/* 1. HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative min-h-[68vh] mt-8 mb-16 rounded-[2rem] overflow-hidden mx-auto max-w-[95%] lg:max-w-7xl shadow-2xl">
        {/* The Video Container */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45 z-[1]" />
        </div>

        {/* Background Glows */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse z-[2]" />
        <div className="absolute bottom-10 -right-20 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[80px] z-[2]" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full min-h-[68vh] px-6 py-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-3 block"
          >
            Gurugram's Ultimate Fitness Destination
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-[1.1]"
          >
            TRAIN. LIVE. <br /> <span className="text-white">EVOLVE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-white text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            A premium ecosystem for elite sports training, professional fitness, and modern co-living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {/* NavLinks can go here */}
          </motion.div>
        </div>
      </section>
      
      {/* 2. STATS SECTION */}
      {/* <section className="py-12 border-y border-white/5 bg-white/[0.02] -mx-6 md:-mx-16 lg:-mx-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          <StatItem icon={<FaUsers />} label="Members" value="500+" />
          <StatItem icon={<FaDumbbell />} label="Trainers" value="12+" />
          <StatItem icon={<FaStar />} label="Rating" value="4.9/5" />
          <StatItem icon={<FaCheckCircle />} label="Disciplines" value="5+" />
        </div>
      </section> */}

      {/* --- 3. THE ECOSYSTEM SECTION --- */}
      <section className="py-16 max-w-7xl mx-auto text-left">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight">The Ecosystem</h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-2 mb-2"></div>
          <p className="text-gray-500">Everything you need to reach your peak performance.</p>
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
            title="Academy"
            desc="Structured coaching for all levels with professional grade courts."
            status="Operating"
            statusColor="text-green-400"
            bgImage={badmintonImg}
          />
          <Card
            to="/fitness-club"
            title="Fitness Club"
            desc="Elite gym environment with specialized strength and cardio zones."
            status="Operating"
            statusColor="text-green-400"
            bgImage={gymImg}
          />
          <Card
            to="/coliving"
            title="Co-Living"
            desc="Luxury accommodation designed for athletes and professionals."
            status="Operating"
            statusColor="text-green-400"
            bgImage={colivingImg}
          />
        </motion.div>
      </section>

      {/* 4. BROWSE BY PROPERTY SECTION */}
      <section className="py-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold tracking-tight italic text-left">
            Browse by <span className="text-indigo-500">Property</span>
          </h2>
          <div className="hidden sm:flex gap-3">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-indigo-600 transition-all text-white">←</button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-indigo-600 transition-all text-white">→</button>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <PropertyCard
            name="Elite Stay"
            image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
          />
          <PropertyCard
            name="Roost"
            image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop"
          />
          <PropertyCard
            name="Sunrise"
            image="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop"
          />
        </motion.div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="my-16 max-w-7xl mx-auto relative rounded-3xl overflow-hidden py-16 px-10 text-center border border-indigo-500/30 bg-gradient-to-b from-indigo-600/10 to-transparent">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to join the elite?</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">Visit us in Sector 51, Gurugram today for a free trial session at our Fitness Club.</p>
        <NavLink to="/contact" className="inline-block px-10 py-4 bg-white text-black rounded-full font-black hover:bg-gray-200 transition">
          GET STARTED NOW
        </NavLink>
      </section>
    </div>
  );
}

// --- Sub-components ---
function StatItem({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="text-indigo-500 text-xl mb-1">{icon}</span>
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-gray-500 text-xs uppercase tracking-widest">{label}</span>
    </div>
  );
}

// Fixed Card Component: Improved visibility with opacity-90 and softer gradient
function Card({ to, title, desc, status, statusColor, bgImage }) {
  return (
    <motion.div variants={itemVariants}>
      <NavLink
        to={to}
        className="group relative block overflow-hidden rounded-3xl min-h-[300px] border border-white/10 transition-all duration-500"
      >
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
          />
          {/* Subtle overlay: darker at bottom for text, clear at top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-between items-start text-left min-h-[300px]">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors drop-shadow-md">{title}</h3>
            <p className="text-white font-medium leading-relaxed text-sm drop-shadow-md">{desc}</p>
          </div>
          <div className="mt-8 w-full flex items-center justify-between">
            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black/60 border border-white/20 rounded-full ${statusColor}`}>
              {status}
            </span>
            <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-indigo-600 transition-colors">→</span>
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
}

function PropertyCard({ name, image }) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      className="group relative cursor-pointer overflow-hidden rounded-[2rem] aspect-[3/4] bg-zinc-900 border border-white/10"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 p-8 w-full text-left">
        <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Premium Accommodation
        </span>
        <h3 className="text-3xl font-black text-white tracking-tight italic uppercase">
          {name}
        </h3>
        <div className="h-[3px] w-0 bg-indigo-500 group-hover:w-16 transition-all duration-500 mt-3" />
      </div>
    </motion.div>
  );
}

export default Home;