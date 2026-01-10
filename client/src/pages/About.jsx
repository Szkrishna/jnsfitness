// import { motion } from "framer-motion";
// import { FaInstagram, FaYoutube, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

// // Animation Variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
// };

// function About() {
//   return (
//     <section className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">

//       {/* Ambient Background Glows */}
//       <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
//       <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />

//       <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">

//         {/* --- Top Section: Identity --- */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           className="text-center mb-20"
//         >
//           <span className="inline-block text-xs uppercase tracking-[0.3em] text-indigo-400 mb-4 font-semibold">
//             About JNS Fitness
//           </span>
//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-8">
//             Fitness. Sports. <br /> Lifestyle.
//           </h1>
//           <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
//             JNS Fitness is a growing lifestyle ecosystem. We aim to build environments
//             where individuals can train, stay, and grow with discipline and purpose.
//           </p>
//         </motion.div>

//         {/* --- Middle Section: Interactive Service Grid --- */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24"
//         >
//           <ServiceCard icon="🏋️" title="Fitness Club" status="Operating" />
//           <ServiceCard icon="🏸" title="Sports Academy" status="Operating" />
//           <ServiceCard icon="🏠" title="Accommodation" status="Operating" />
//         </motion.div>

//         {/* --- Bottom Section: Social & Map (The "Suggestion") --- */}
//         <div className="grid md:grid-cols-2 gap-12 items-stretch mt-20">

//           {/* Contact & Socials */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="bg-white/5 border border-white/10 p-10 rounded-3xl flex flex-col justify-between"
//           >
//             <div>
//               <h2 className="text-3xl font-bold mb-6 text-white">Connect With Us</h2>
//               <p className="text-gray-400 mb-10 leading-relaxed">
//                 Have questions about memberships or room availability?
//                 Visit us or reach out through our social channels.
//               </p>

//               <div className="space-y-6">
//                 <ContactLink icon={<FaMapMarkerAlt />} text="Sector 45, Near Huda City Center, Gurugram" />
//                 <ContactLink icon={<FaEnvelope />} text="contact@jnsfitness.com" />
//                 <ContactLink icon={<FaPhone />} text="+91 98765 43210" />
//               </div>
//             </div>

//             <div className="mt-12">
//               <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Follow the Journey</p>
//               <div className="flex gap-5">
//                 <SocialBtn icon={<FaInstagram />} link="#" color="hover:text-pink-500" />
//                 <SocialBtn icon={<FaYoutube />} link="#" color="hover:text-red-500" />
//                 <SocialBtn icon={<FaLinkedin />} link="#" color="hover:text-blue-400" />
//               </div>
//             </div>
//           </motion.div>

//           {/* Map Embed - Light Mode Version */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="rounded-3xl overflow-hidden border border-white/20 min-h-[400px] relative shadow-2xl"
//           >
//             <iframe
//               /* Replace the URL below with your actual Google Maps Embed Link from Google Maps Share menu */
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8157640624!2d77.0594348!3d28.424816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19267ca82d5b%3A0xb58cd569ee58f0a4!2sJNS%20Fitness%20Studio!5e0!3m2!1sen!2sin!4v1700000000000"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }} // Removed 'filter' property to allow light mode
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="opacity-100 transition-opacity duration-500"
//             />
//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// }

// // Helper Components
// const ServiceCard = ({ icon, title, status }) => (
//   <motion.div
//     variants={fadeIn}
//     whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
//     className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center transition-all"
//   >
//     <div className="text-3xl mb-3">{icon}</div>
//     <div className="font-semibold text-gray-200">{title}</div>
//     <div className="text-green-400 text-xs mt-1 font-medium uppercase tracking-wider">{status}</div>
//   </motion.div>
// );

// const ContactLink = ({ icon, text }) => (
//   <div className="flex items-center gap-4 text-gray-300 group">
//     <span className="text-indigo-400 text-xl group-hover:scale-110 transition-transform">{icon}</span>
//     <span className="text-sm md:text-base">{text}</span>
//   </div>
// );

// const SocialBtn = ({ icon, link, color }) => (
//   <motion.a
//     href={link} target="_blank"
//     whileHover={{ y: -5, scale: 1.1 }}
//     className={`text-2xl text-gray-400 transition-colors ${color}`}
//   >
//     {icon}
//   </motion.a>
// );

// export default About;


import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

function About() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Query generated! JNS team will contact you shortly.");
  };

  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">

      {/* Ambient Background Glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">

        {/* --- Top Section: Identity (Unchanged) --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-indigo-400 mb-4 font-semibold">
            About JNS Fitness
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-8">
            Fitness. Sports. <br /> Lifestyle.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            JNS Fitness is a growing lifestyle ecosystem. We aim to build environments
            where individuals can train, stay, and grow with discipline and purpose.
          </p>
        </motion.div>

        {/* --- Middle Section: Interactive Service Grid (Unchanged) --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24"
        >
          <ServiceCard icon="🏋️" title="Fitness Club" status="Operating" />
          <ServiceCard icon="🏸" title="Sports Academy" status="Operating" />
          <ServiceCard icon="🏠" title="Accommodation" status="Operating" />
        </motion.div>

        {/* --- New Rearranged Bottom Section --- */}
        <div className="space-y-12 mt-20">
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* 1. Contact & Socials (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Connect With Us</h2>
                <div className="space-y-6">
                  <ContactLink icon={<FaMapMarkerAlt />} text="Sector 45, Near Huda City Center, Gurugram" />
                  <ContactLink icon={<FaEnvelope />} text="contact@jnsfitness.com" />
                  <ContactLink icon={<FaPhone />} text="+91 98765 43210" />
                </div>
              </div>

              <div className="mt-12">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Follow the Journey</p>
                <div className="flex gap-5">
                  <SocialBtn icon={<FaInstagram />} link="#" color="hover:text-pink-500" />
                  <SocialBtn icon={<FaYoutube />} link="#" color="hover:text-red-500" />
                  <SocialBtn icon={<FaLinkedin />} link="#" color="hover:text-blue-400" />
                </div>
              </div>
            </motion.div>

            {/* 2. Query Form (Right - NEW) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Send a Query</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition" 
                />
                <input 
                  type="email" placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition" 
                />
                <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition text-gray-400">
                   <option>Select Interest</option>
                   <option>Gym Membership</option>
                   <option>Accommodation</option>
                   <option>Badminton Academy</option>
                </select>
                <textarea 
                  placeholder="Your Message" rows="3"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  Submit Query <FaPaperPlane className="text-xs" />
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* 3. Map (Full Width Bottom - Light Mode) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/20 h-[400px] relative shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.4613271402264!2d77.0592!3d28.4355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI2JzA3LjgiTiA3N8KwMDMnMzMuMSJF!5e0!3m2!1sen!2sin!4v1625000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-100 transition-opacity duration-500"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// Helper Components (Unchanged)
const ServiceCard = ({ icon, title, status }) => (
  <motion.div
    variants={fadeIn}
    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
    className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center transition-all"
  >
    <div className="text-3xl mb-3">{icon}</div>
    <div className="font-semibold text-gray-200">{title}</div>
    <div className="text-green-400 text-xs mt-1 font-medium uppercase tracking-wider">{status}</div>
  </motion.div>
);

const ContactLink = ({ icon, text }) => (
  <div className="flex items-center gap-4 text-gray-300 group">
    <span className="text-indigo-400 text-xl group-hover:scale-110 transition-transform">{icon}</span>
    <span className="text-sm md:text-base">{text}</span>
  </div>
);

const SocialBtn = ({ icon, link, color }) => (
  <motion.a
    href={link} target="_blank"
    whileHover={{ y: -5, scale: 1.1 }}
    className={`text-2xl text-gray-400 transition-colors ${color}`}
  >
    {icon}
  </motion.a>
);

export default About;