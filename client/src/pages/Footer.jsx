/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import jnsLogo from "../assets/jns_logo.jpeg";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-12 border-t border-white/20 pt-10 pb-8 bg-black">
      {/* INNER CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left">
          {/* 1. Brand Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <img
                  src={jnsLogo}
                  alt="JNS Logo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h2 className="text-xl font-bold tracking-tighter text-white">
                JNS <span className="text-indigo-400">FITNESS</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Gurugram's premier ecosystem for fitness, professional sports, and
              premium living.
            </p>
          </div>

          {/* 2. Contact Details Section */}
          <div className="flex flex-col gap-3 text-left">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">
              Reach Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-3 group">
                <FaMapMarkerAlt className="text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>Sector 51, Samaspur, Gurugram</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaPhone className="text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaEnvelope className="text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>info@jnsfitness.com</span>
              </li>
            </ul>
          </div>

          {/* 3. Follow Us Section */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <SocialIcon
                icon={<FaInstagram size={24} />}
                link="#"
                hoverColor="hover:text-pink-500"
              />
              <SocialIcon
                icon={<FaYoutube size={24} />}
                link="#"
                hoverColor="hover:text-red-500"
              />
              <SocialIcon
                icon={<FaLinkedin size={24} />}
                link="#"
                hoverColor="hover:text-blue-500"
              />
            </div>
          </div>
        </div>

        {/* DIVIDER + BOTTOM SECTION */}
        <div className="mt-10 relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="pt-8 pb-4 flex flex-col md:flex-row justify-between items-start gap-4 text-xs uppercase tracking-[0.15em] text-gray-500 font-medium text-left">
            <p className="hover:text-gray-300 transition-colors cursor-default">
              © 2026 JNS Ecosystem. All rights reserved.
            </p>

            <div className="flex items-center gap-3 self-start">
              <span className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />
              <p className="text-indigo-400/80 tracking-[0.2em]">
                Built for Discipline & Performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// SOCIAL ICON COMPONENT
const SocialIcon = ({ icon, link, hoverColor }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    className={`w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${hoverColor} border border-white/10 shadow-lg cursor-pointer`}
  >
    {icon}
  </motion.a>
);

export default Footer;
