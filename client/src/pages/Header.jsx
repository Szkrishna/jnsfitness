// import { NavLink } from 'react-router-dom';

// const navItemBase =
//   'relative flex items-center justify-center h-10 w-[120px] text-sm font-medium rounded-md transition-colors duration-300';

// function Header() {
//   const linkClasses = ({ isActive }) =>
//     `${navItemBase} ${isActive
//       ? `
//           text-indigo-300
//           bg-indigo-500/10
//           ring-1 ring-indigo-400/30
//           shadow-[0_0_12px_rgba(99,102,241,0.5)]
//           after:absolute
//           after:bottom-1
//           after:h-[2px]
//           after:w-3/5
//           after:bg-indigo-400
//           after:rounded-full
//         `
//       : `
//           text-gray-300
//           hover:text-white
//           hover:bg-white/5
//           after:absolute
//           after:bottom-1
//           after:h-[2px]
//           after:w-3/5
//           after:bg-transparent
//         `
//     }`;

//   return (
//     <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-white/5">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <NavLink
//           to="/"
//           className="ml-4 text-xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-300 bg-clip-text text-transparent"
//         >
//           JNS
//         </NavLink>

//         {/* Navigation */}
//         <nav className="flex gap-3">
//           <NavLink to="/" end className={linkClasses}>
//             Home
//           </NavLink>
//           <NavLink to="/about" className={linkClasses}>
//             About
//           </NavLink>
//           <NavLink to="/sports-academy" className={linkClasses}>
//             Academy
//           </NavLink>
//           <NavLink to="/fitness-club" className={linkClasses}>
//             Fitness
//           </NavLink>
//           <NavLink to="/coliving" className={linkClasses}>
//             Coliving
//           </NavLink>
//         </nav>

//       </div>
//     </header>
//   );
// }

// export default Header;


import { NavLink } from 'react-router-dom';

const navItemBase =
  'relative flex items-center justify-center h-10 w-[100px] lg:w-[120px] text-xs lg:text-sm font-medium rounded-md transition-all duration-300';

function Header() {
  const linkClasses = ({ isActive }) =>
    `${navItemBase} ${isActive
      ? `
          text-indigo-300
          bg-indigo-500/10
          ring-1 ring-indigo-400/20
          shadow-[0_0_15px_rgba(99,102,241,0.3)]
          after:absolute
          after:bottom-1
          after:h-[2px]
          after:w-2/5
          after:bg-indigo-400
          after:rounded-full
        `
      : `
          text-gray-400
          hover:text-white
          hover:bg-white/5
          after:absolute
          after:bottom-1
          after:h-[2px]
          after:w-0
          after:bg-transparent
          after:transition-all
          hover:after:w-2/5
          hover:after:bg-gray-500
        `
    }`;

  return (
    /* Changed bg-black/95 to a slightly more transparent black for better blur effect */
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">

        {/* Logo - Removed ml-4 for better alignment */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-sm group-hover:rotate-6 transition-transform">
            J
          </div>
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            <span className="text-indigo-400">JNS</span>
          </span>
        </NavLink>

        {/* Navigation - Hidden on very small screens, or add overflow-x-auto */}
        <nav className="hidden md:flex gap-1 lg:gap-3 bg-white/5 p-1 rounded-xl border border-white/5">
          <NavLink to="/" end className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/sports-academy" className={linkClasses}>
            Academy
          </NavLink>
          <NavLink to="/fitness-club" className={linkClasses}>
            Fitness
          </NavLink>
          <NavLink to="/coliving" className={linkClasses}>
            Coliving
          </NavLink>
        </nav>

        {/* Mobile Call to Action (Optional) */}
        <div className="md:hidden">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-4 h-[2px] bg-white shadow-[0_4px_0_white,-0_8px_0_white]" />
            </div>
        </div>

      </div>
    </header>
  );
}

export default Header;