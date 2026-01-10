/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import heroVideo from "../assets/videos/elite_stay/elite_video.mp4";
import gymImg from '../assets/images/fitness_studio/gym_img2.jpeg';
import badmintonImg from '../assets/images/academy/badminton_1.avif';
import colivingImg from '../assets/images/roost/roost_img9.jpeg';

// Import Accommodation Images
import eliteImg from "../assets/images/elite_stay/elite_img1.jpeg";
import roostImg from "../assets/images/roost/roost_img8.jpeg";
import sunriseImg from "../assets/images/sunrise/sunrise_img1.jpeg";

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
      {/* 1. HERO SECTION - Fixed White Spaces & Centered Content */}
      <section className="mt-10 relative max-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-black rounded-[2rem] shadow-2xl">

        {/* Video Background - scale-105 ensures no white edges appear behind rounded corners */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Dark Overlay - Critical for text readability */}
          <div className="absolute inset-0 bg-black/60 z-[1]" />

          {/* Background Glows */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse z-[2]" />
          <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] z-[2]" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 text-center max-w-4xl px-6 py-12">
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
            className="text-5xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-none"
          >
            TRAIN. LIVE. <br /> <span className="text-white">EVOLVE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg"
          >
            A premium ecosystem for elite sports training, professional fitness, and modern co-living.
          </motion.p>
        </div>
      </section>

      {/* 2. THE ECOSYSTEM SECTION */}
      <section className="py-16 max-w-7xl mx-auto text-left">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight uppercase">The Ecosystem</h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-2 mb-2"></div>
          <p className="text-gray-500 text-sm">Everything you need to reach your peak performance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EcoCard to="/sports-academy" title="Academy" bgImage={badmintonImg} status="Operating" statusColor="text-green-400" />
          <EcoCard to="/fitness-club" title="Fitness Club" bgImage={gymImg} status="Operating" statusColor="text-green-400" />
          <EcoCard to="/coliving" title="Co-Living" bgImage={colivingImg} status="Operating" statusColor="text-green-400" />
        </div>
      </section>

      {/* 3. BROWSE ACCOMMODATION SECTION */}
      <section className="py-16 max-w-7xl mx-auto overflow-visible">
        <div className="mb-8">
          <h2 className="text-4xl font-bold tracking-tight uppercase">
            Browse <span className="text-indigo-500">Accommodation</span>
          </h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-2 mb-2"></div>
          <p className="text-gray-500 text-sm">Premium living spaces curated for your comfort and lifestyle.</p>
        </div>

        <div className="relative py-10 group/swiper-container">
          {/* Side Buttons positioned over images */}
          <button className="swiper-prev-button absolute left-2 md:left-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-indigo-600 transition-all text-white opacity-0 group-hover/swiper-container:opacity-100">
            ←
          </button>
          <button className="swiper-next-button absolute right-2 md:right-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-indigo-600 transition-all text-white opacity-0 group-hover/swiper-container:opacity-100">
            →
          </button>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true
            }}
            navigation={{
              nextEl: ".swiper-next-button",
              prevEl: ".swiper-prev-button",
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="w-full"
          >
            {[
              { name: "Elite Stay", img: eliteImg },
              { name: "Roost", img: roostImg },
              { name: "Sunrise", img: sunriseImg },
              { name: "Elite Stay", img: eliteImg },
              { name: "Roost", img: roostImg }
            ].map((item, index) => (
              <SwiperSlide key={index} className="max-w-[280px] md:max-w-[320px]">
                <PropertyCard name={item.name} image={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 4. CUSTOMER REVIEWS SECTION (NEW) */}
      <section className="py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight uppercase">How Our Community <span className="text-indigo-500">Feels</span></h2>
          <div className="h-[2px] w-20 bg-indigo-600 mt-2 mx-auto mb-4"></div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-green-400 font-bold">Excellent</span>
            <div className="flex text-green-400 text-lg">★★★★★</div>
            <span className="text-gray-400 text-sm">Based on 8,738 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard 
            title="It was helpful" 
            text="The trainers provided excellent guidance for my personalized fitness journey. Truly elite experience." 
            author="Melek" 
            time="18 hours ago" 
          />
          <ReviewCard 
            title="Professional Service" 
            text="The sports academy facilities are top-notch. My badminton technique improved significantly in just a month." 
            author="Mahathy" 
            time="19 hours ago" 
          />
          <ReviewCard 
            title="Clear and stress-free" 
            text="The co-living spaces are modern, clean, and provide a great community atmosphere. Highly recommend!" 
            author="Greeshma" 
            time="22 hours ago" 
          />
        </div>
      </section>
    </div>
  );
}

// --- Sub-components ---
function EcoCard({ to, title, bgImage, status, statusColor }) {
  return (
    <motion.div variants={itemVariants}>
      <NavLink to={to} className="group relative block overflow-hidden rounded-3xl min-h-[300px] border border-white/10 transition-all duration-500">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 p-8 flex flex-col justify-between items-start text-left min-h-[300px]">
          <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{title}</h3>
          <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black/60 border border-white/20 rounded-full ${statusColor}`}>
            {status}
          </span>
        </div>
      </NavLink>
    </motion.div>
  );
}

function PropertyCard({ name, image }) {
  return (
    <div className="group relative w-full aspect-[1/1] cursor-pointer rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
      <div className="absolute bottom-0 left-0 p-6 w-full text-center">
        <h3 className="text-xl font-medium text-white tracking-[0.25em] uppercase mb-1 drop-shadow-lg transition-colors group-hover:text-indigo-400">
          {name}
        </h3>
        <div className="h-[1px] w-0 bg-indigo-500 group-hover:w-16 transition-all duration-700 mx-auto" />
      </div>
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}

function ReviewCard({ title, text, author, time }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-indigo-500/50 transition-all duration-300"
    >
      <div className="flex text-green-400 mb-4 text-sm">★★★★★ <span className="ml-2 text-white/40 text-xs uppercase tracking-widest">• Verified</span></div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{text}"</p>
      <div className="flex flex-col">
        <span className="font-bold text-indigo-400 uppercase tracking-tighter">{author}</span>
        <span className="text-[10px] text-gray-500 uppercase">{time}</span>
      </div>
    </motion.div>
  );
}

export default Home;