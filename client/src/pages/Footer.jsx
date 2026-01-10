import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-white/20 pt-16 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                {/* 1. Brand Section */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20">
                            JNS
                        </div>
                        <h2 className="text-2xl font-bold tracking-tighter text-white">
                            JNS <span className="text-indigo-400">FITNESS</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                        Gurugram's premier ecosystem for fitness, professional sports, and premium living.
                    </p>
                </div>

                {/* 2. Contact Details Section */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">Reach Us</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
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
                <div className="flex flex-col gap-6">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">Follow Us</h3>
                    <div className="flex gap-5">
                        <SocialIcon icon={<FaInstagram size={28} />} link="#" hoverColor="hover:text-pink-500" />
                        <SocialIcon icon={<FaYoutube size={28} />} link="#" hoverColor="hover:text-red-500" />
                        <SocialIcon icon={<FaLinkedin size={28} />} link="#" hoverColor="hover:text-blue-500" />
                    </div>
                </div>

            </div>

            {/* Bottom Copyright */}
            {/* Bottom Copyright */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-gray-400 font-medium">
                <p>© 2026 JNS Fitness Ecosystem. All rights reserved.</p>
                <p className="text-indigo-400/80">Built for Discipline & Performance</p>
            </div>
        </footer>
    );
};

// --- DEFINED OUTSIDE THE COMPONENT ---
const SocialIcon = ({ icon, link, hoverColor }) => (
    <motion.a
        href={link}
        target="_blank"
        whileHover={{ y: -5, scale: 1.1 }}
        /* w-14 h-14 matches the size 28 icons perfectly */
        className={`w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${hoverColor} border border-white/10 shadow-lg cursor-pointer`}
    >
        {icon}
    </motion.a>
);

export default Footer;