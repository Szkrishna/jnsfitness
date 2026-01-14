/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { 
  FaInstagram, FaYoutube, FaLinkedin, 
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane, 
  FaHistory, FaHotel, FaUsers, FaCheckCircle, FaStar 
} from "react-icons/fa";

// Leaflet Marker Fix
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

function About() {
  // Verified Coordinates for Sector 51, Gurgaon
  const position = [28.4255, 77.0650]; 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry Sent! The JNS Elite team will contact you shortly.");
  };

  return (
    <div className="bg-black text-white px-6 md:px-16 lg:px-24 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="mt-10 relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-neutral-900 rounded-[2.5rem] shadow-2xl border border-white/5">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black z-[1]" />
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse z-[2]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs mb-6"
          >
            <FaCheckCircle className="text-sm" /> Verified & Claimed Professional Stay
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent leading-none"
          >
            JNS ELITE STAY.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Providing premium unisex accommodations in Sector 51, Gurgaon for over 6 years. 
            Highly rated for our cleanliness and dedicated facilities for women and girl students.
          </motion.p>
        </div>
      </section>

      {/* 2. CORE BUSINESS STATS */}
      <section className="py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ValueCard 
            icon={<FaHistory className="text-indigo-400" />} 
            title="6 Years" 
            desc="Over six years of trusted business presence in the Gurugram community." 
          />
          <ValueCard 
            icon={<FaStar className="text-yellow-500" />} 
            title="4.6 Rating" 
            desc="Backed by 100+ positive ratings highlighting our service quality." 
          />
          <ValueCard 
            icon={<FaHotel className="text-indigo-400" />} 
            title="Clean Rooms" 
            desc="Consistently recognized for superior hygiene and well-maintained AC rooms." 
          />
        </div>
      </section>

      {/* 3. CONTACT & INQUIRY */}
      <section className="py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* Business Info Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-12 rounded-[3rem] flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight mb-10">Connect <span className="text-indigo-500">Elite</span></h2>
              <div className="space-y-10">
                <ContactInfo icon={<FaMapMarkerAlt />} title="Location" detail="Sector 51, Gurgaon (Open 24 Hours)" />
                <ContactInfo icon={<FaPhone />} title="Phone" detail="08460479473" />
                <ContactInfo icon={<FaUsers />} title="Residents" detail="Unisex | Specialized Female Wings" />
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/5 flex gap-8">
                <SocialIcon icon={<FaInstagram />} link="#" color="hover:text-pink-500" />
                <SocialIcon icon={<FaYoutube />} link="#" color="hover:text-red-500" />
                <SocialIcon icon={<FaLinkedin />} link="#" color="hover:text-blue-400" />
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-12 rounded-[3rem] shadow-2xl"
          >
            <h2 className="text-4xl font-black uppercase tracking-tight mb-10">Book a <span className="text-indigo-500">Visit</span></h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder="Full Name" className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-indigo-500 transition text-sm text-white" />
              <input type="email" placeholder="Email Address" className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-indigo-500 transition text-sm text-white" />
              <select className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-indigo-500 transition text-gray-400 text-sm appearance-none">
                 <option>Accommodation Interest</option>
                 <option>AC Room (Female)</option>
                 <option>AC Room (Male)</option>
                 <option>PG for Girl Students</option>
              </select>
              <textarea placeholder="Tell us your requirements..." rows="4" className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-indigo-500 transition resize-none text-sm text-white" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-5 rounded-2xl transition shadow-lg shadow-indigo-600/20"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 4. MAP SECTION */}
      <section className="pb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="rounded-[3rem] overflow-hidden border border-white/10 h-[550px] relative shadow-2xl z-0"
        >
          <MapContainer 
            center={position} 
            zoom={15} 
            scrollWheelZoom={false} 
            style={{ height: "100%", width: "100%", filter: "invert(100%) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div className="text-black font-bold">JNS Elite Stay</div>
                <div className="text-gray-600 text-xs italic">Premium AC PG Accommodations</div>
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </section>
    </div>
  );
}

// Sub-components
function ValueCard({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -10 }} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:border-indigo-500/50 transition-all duration-300 group">
      <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-2xl font-black mb-4 group-hover:text-indigo-400 uppercase tracking-tight">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ContactInfo({ icon, title, detail }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{title}</h4>
        <p className="text-gray-200 font-bold text-lg">{detail}</p>
      </div>
    </div>
  );
}

function SocialIcon({ icon, link, color }) {
  return (
    <motion.a href={link} whileHover={{ y: -5, scale: 1.2 }} className={`text-3xl text-gray-600 transition-colors ${color}`}>
      {icon}
    </motion.a>
  );
}

export default About;