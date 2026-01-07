import { NavLink } from 'react-router-dom';

const navItemBase =
  'relative flex items-center justify-center h-10 w-[120px] text-sm font-medium rounded-md transition-colors duration-300';

function Header() {
  const linkClasses = ({ isActive }) =>
    `${navItemBase} ${isActive
      ? `
          text-indigo-300
          bg-indigo-500/10
          ring-1 ring-indigo-400/30
          shadow-[0_0_12px_rgba(99,102,241,0.5)]
          after:absolute
          after:bottom-1
          after:h-[2px]
          after:w-3/5
          after:bg-indigo-400
          after:rounded-full
        `
      : `
          text-gray-300
          hover:text-white
          hover:bg-white/5
          after:absolute
          after:bottom-1
          after:h-[2px]
          after:w-3/5
          after:bg-transparent
        `
    }`;

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="ml-4 text-xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-300 bg-clip-text text-transparent"
        >
          JNS
        </NavLink>

        {/* Navigation */}
        <nav className="flex gap-3">
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

      </div>
    </header>
  );
}

export default Header;