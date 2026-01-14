/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { 
  FaInstagram, FaYoutube, FaLinkedin, 
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane, FaHistory, FaHotel, FaUsers 
} from "react-icons/fa";

// Fix for default marker icons in Leaflet with React
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
  // Coordinates for Sector 51, Gurgaon (JNS Elite Stay area)
  const position = [28.4255, 77.0650]; 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Query generated! JNS team will contact you shortly.");
  };

  return (
    <div className="bg-black text-white px-6 md:px-16 lg:px-24">
      
      {/* 1. HERO SECTION */}
      <section className="mt-10 relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-neutral-900 rounded-[2rem] shadow-2xl border border-white/5">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black z-[1]" />
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse z-[2]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            ESTABLISHED 2020
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-none"
          >
            JNS ELITE STAY. <br /> <span className="text-white">PREMIUM LIVING.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Strategically located in Sector 51, Gurugram. We offer a holistic living environment 
            with AC rooms, laundry services, and direct access to JNS Sports Academy.
          </motion.p>
        </div>
      </section>

      {/* 2. BUSINESS QUICK INFO */}
      <section className="py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<FaHistory className="text-indigo-400" />} 
            title="Established" 
            desc="Serving Gurgaon since 2020 with high-standard hospitality." 
          />
          <ValueCard 
            icon={<FaHotel className="text-indigo-400" />} 
            title="Accommodation" 
            desc="Modern AC rooms with dedicated professional laundry services." 
          />
          <ValueCard 
            icon={<FaUsers className="text-indigo-400" />} 
            title="Occupancy" 
            desc="Single occupancy for Girls and Boys with premium security." 
          />
        </div>
      </section>

      {/* 3. CONTACT & FORM */}
      <section className="py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 rounded-[2rem] flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Visit <span className="text-indigo-500">Us</span></h2>
              <div className="space-y-8">
                <ContactInfo icon={<FaMapMarkerAlt />} title="Location" detail="Sector 51, Samaspur, Gurugram, Haryana" />
                <ContactInfo icon={<FaEnvelope />} title="Email" detail="info@jnselitestay.com" />
                <ContactInfo icon={<FaPhone />} title="Phone" detail="+91 98XXX XXXXX" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 rounded-[2rem] shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" placeholder="Full Name" className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition text-sm text-white" />
              <input type="email" placeholder="Email Address" className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition text-sm text-white" />
              <select className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition text-gray-400 text-sm">
                 <option>Occupancy Preference</option>
                 <option>Single (Girls)</option>
                 <option>Single (Boys)</option>
              </select>
              <textarea placeholder="Message" rows="4" className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 transition resize-none text-sm text-white" />
              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition">Send Inquiry</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 4. PROFESSIONAL MAP SECTION */}
      <section className="pb-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="rounded-[2.5rem] overflow-hidden border border-white/10 h-[500px] relative shadow-2xl z-0"
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
                <div className="text-gray-600 text-xs">Sector 51, Gurugram</div>
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </section>
    </div>
  );
}

// Sub-components (ValueCard, ContactInfo, SocialIcon omitted for brevity but remain same as previous)
function ValueCard({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -10 }} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-indigo-500/50 transition-all group">
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors uppercase tracking-tighter">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ContactInfo({ icon, title, detail }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">{title}</h4>
        <p className="text-gray-200 font-medium">{detail}</p>
      </div>
    </div>
  );
}

export default About;