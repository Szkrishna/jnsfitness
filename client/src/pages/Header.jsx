import { NavLink } from 'react-router-dom';

function Header() {
  const linkClasses = ({ isActive }) =>
    `
    relative px-3 py-2 text-sm font-medium transition
    ${isActive 
      ? 'text-indigo-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-indigo-400'
      : 'text-gray-300 hover:text-white'}
    `;

  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-400 to-white bg-clip-text text-transparent"
        >
          JNS Fitness
        </NavLink>

        {/* Navigation */}
        <nav className="flex gap-6">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/sports-academy" className={linkClasses}>
            Sports Academy
          </NavLink>
          <NavLink to="/fitness-club" className={linkClasses}>
            Fitness Club
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