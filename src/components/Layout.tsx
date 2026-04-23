import { ReactNode } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Home, BookOpen, User } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
}

export function Layout({ children, title, showBack }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isPortfolio = location.pathname === '/portfolio';
  const isAbout = location.pathname === '/about';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 h-16 bg-[#F9F7F2] border-b border-[#E5E1D9] shadow-ambient">
        <div className="flex items-center gap-4">
          {showBack && (
            <button 
              onClick={() => navigate(-1)}
              className="text-primary hover:bg-surface-container-low active:scale-95 transition-transform p-2 -ml-2 rounded-full flex items-center justify-center"
            >
              <ArrowLeft size={24} />
            </button>
          )}
          <h1 className="font-display font-semibold tracking-tight text-lg text-on-surface">
            {title || "首页"}
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary' : 'text-outline hover:text-primary'}`}>首页</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary' : 'text-outline hover:text-primary'}`}>作品集</NavLink>
          <NavLink to="/about" className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-primary' : 'text-outline hover:text-primary'}`}>关于</NavLink>
        </nav>
        
        <div className="w-10 md:hidden"></div>
      </header>

      <main className="flex-1 pt-16 pb-24 md:pb-8">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          {children}
        </motion.div>
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-5 pb-safe h-20 bg-white border-t border-[#E5E1D9] shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center justify-center w-16 transition-all ${isActive ? 'text-primary bg-[#F9F7F2] rounded-lg py-1' : 'text-outline'}`}>
          <Home size={22} fill={isHome ? "currentColor" : "none"} className="mb-0.5" />
          <span className="text-[10px] uppercase font-bold tracking-tighter">首页</span>
        </NavLink>
        
        <NavLink to="/portfolio" className={({ isActive }) => `flex flex-col items-center justify-center w-16 transition-all ${isActive ? 'text-primary bg-[#F9F7F2] rounded-lg py-1' : 'text-outline'}`}>
          <BookOpen size={22} fill={isPortfolio ? "currentColor" : "none"} className="mb-0.5" />
          <span className="text-[10px] uppercase font-bold tracking-tighter">作品</span>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => `flex flex-col items-center justify-center w-16 transition-all ${isActive ? 'text-primary bg-[#F9F7F2] rounded-lg py-1' : 'text-outline'}`}>
          <User size={22} fill={isAbout ? "currentColor" : "none"} className="mb-0.5" />
          <span className="text-[10px] uppercase font-bold tracking-tighter">关于</span>
        </NavLink>
      </nav>
    </div>
  );
}
