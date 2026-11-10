import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Award,
  ChevronRight,
  Download,
  FolderGit2,
  Home,
  Layers,
  Mail,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  User,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../public/Images/tab.png";
import PageContainer from "./PageContainer";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/#skills", label: "Skills", icon: Sparkles },
  { to: "/#services", label: "Services", icon: Layers },
  { to: "/#projects", label: "Projects", icon: FolderGit2 },
  { to: "/experience", label: "Experience", icon: Award },
  { to: "/contact", label: "Contact", icon: Send },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/918940450960?text=Hi%20Dhivakar,%20I'd%20like%20to%20discuss%20a%20project.",
    icon: FaWhatsapp,
  },
  { label: "Call", href: "tel:+918940450960", icon: FaPhoneAlt },
  { label: "Email", href: "mailto:dhivakarp305@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com", icon: FaGithub },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        document.documentElement.dataset.theme = savedTheme;
        return savedTheme === "light";
      }
      return document.documentElement.dataset.theme === "light";
    }
    return false;
  });
  const location = useLocation();
  const [prevLocationKey, setPrevLocationKey] = useState(location.key);

  if (prevLocationKey !== location.key) {
    setPrevLocationKey(location.key);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }

  const toggleTheme = () => {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);
    const themeName = nextIsLight ? "light" : "dark";
    document.documentElement.dataset.theme = themeName;
    try {
      localStorage.setItem("theme", themeName);
    } catch {
      // ignore
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isLinkActive = (to) => {
    if (to.startsWith("/#")) {
      const hash = to.replace("/", "");
      return location.pathname === "/" && location.hash === hash;
    }
    if (to === "/") {
      return location.pathname === "/" && !location.hash;
    }
    return location.pathname === to;
  };

  const handleLinkClick = (e, to) => {
    closeMobileMenu();
    if (to.startsWith("/#")) {
      const targetId = to.replace("/#", "");
      if (location.pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    }
  };

  return (
    <header className="portfolio-navbar sticky top-0 z-50">
      <nav aria-label="Primary navigation">
        <PageContainer
          fullWidth
          className="flex min-h-[64px] items-center justify-between gap-3 sm:min-h-[68px] sm:gap-6"
        >
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="flex min-w-0 shrink items-center gap-2.5 sm:gap-3"
            onClick={closeMobileMenu}
          >
            <img
              src={logo}
              alt="Dhivakar P"
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-orange-500/80 shadow-[0_0_10px_rgba(249,115,22,0.3)] sm:h-12 sm:w-12"
            />
            <span className="min-w-0 leading-tight">
              <strong className="portfolio-navbar-title block text-[15px] font-bold tracking-wide sm:text-[17px]">
                DHIVAKAR P
              </strong>
              <small className="portfolio-navbar-subtitle flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.14em]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                FULL STACK DEVELOPER
              </small>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const active = isLinkActive(link.to);
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={(e) => handleLinkClick(e, link.to)}
                  className={`portfolio-navbar-link relative py-2 text-[13px] font-semibold transition-colors ${
                    active ? "portfolio-navbar-link-active" : ""
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
              className="portfolio-theme-toggle flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-105 active:scale-95"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isLight ? "sun" : "moon"}
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {isLight ? (
                    <Sun size={17} className="text-amber-500" />
                  ) : (
                    <Moon size={17} className="text-orange-400" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
            <a
              href="/resume.pdf"
              download
              className="portfolio-resume-button flex items-center gap-3 rounded-xl px-4 py-2 transition"
            >
              <span>Download Resume</span>
              <Download className="portfolio-resume-icon" size={18} />
            </a>
          </div>

          {/* Mobile Actions: Theme Switcher & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
              className="portfolio-theme-toggle flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isLight ? "sun" : "moon"}
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {isLight ? (
                    <Sun size={17} className="text-amber-500" />
                  ) : (
                    <Moon size={17} className="text-orange-400" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="portfolio-mobile-menu"
              className={`portfolio-mobile-toggle flex h-10 w-10 items-center justify-center rounded-xl border transition-all active:scale-95 ${
                mobileMenuOpen ? "border-orange-500/60 bg-orange-500/15" : ""
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={mobileMenuOpen ? "open" : "closed"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center justify-center"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </PageContainer>
      </nav>

      {/* Modern Sleek Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Frosted Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="portfolio-mobile-backdrop fixed inset-0 top-[64px] sm:top-[68px] z-40 bg-black/60 backdrop-blur-md lg:hidden"
              aria-hidden="true"
            />

            {/* Menu Sheet with Generous Padding & Max Width */}
            <motion.div
              key="mobile-menu"
              id="portfolio-mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="portfolio-mobile-menu fixed left-0 right-0 top-[64px] sm:top-[68px] z-50 max-h-[calc(100vh-68px)] overflow-y-auto overscroll-contain border-b border-orange-500/20 px-6 py-6 shadow-2xl lg:hidden"
            >
              <div className="mx-auto flex w-full max-w-sm flex-col">
                {/* Navigation Links List */}
                <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const active = isLinkActive(link.to);
                    const Icon = link.icon;
                    return (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={(e) => handleLinkClick(e, link.to)}
                        className={`group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
                          active
                            ? "portfolio-mobile-link-active border border-orange-500/40 bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent text-orange-400 font-bold shadow-[0_0_15px_rgba(249,115,22,0.12)]"
                            : "portfolio-mobile-link border border-transparent text-slate-300 hover:text-orange-400 hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                              active
                                ? "bg-orange-500 text-slate-950 shadow-md shadow-orange-500/30"
                                : "bg-white/[0.05] text-slate-400 group-hover:bg-orange-500/15 group-hover:text-orange-400"
                            }`}
                          >
                            <Icon size={18} />
                          </div>
                          <span className="text-[15px] font-semibold tracking-wide">
                            {link.label}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {active ? (
                            <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
                          ) : (
                            <ChevronRight
                              size={17}
                              className="text-slate-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-orange-400"
                            />
                          )}
                        </div>
                      </NavLink>
                    );
                  })}
                </nav>

                {/* Bottom Actions: Resume CTA & Direct Contact Row */}
                <div className="mt-5 flex flex-col gap-4 border-t border-orange-500/15 pt-5">
                  <a
                    href="/resume.pdf"
                    download
                    className="portfolio-resume-button mt-3 flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-xl px-5 py-3 text-sm font-bold shadow-lg transition-all active:scale-[0.98]"
                  >
                    <span>Download Resume</span>
                    <Download size={18} className="portfolio-resume-icon" />
                  </a>

                  <div className="flex items-center justify-center gap-3 pt-1">
                    {socialLinks.map(({ label, href, icon: SIcon }) => (
                      <a
                        key={label}
                        href={href}
                        target={
                          href.startsWith("mailto:") || href.startsWith("tel:")
                            ? undefined
                            : "_blank"
                        }
                        rel="noreferrer"
                        aria-label={label}
                        className="portfolio-mobile-social-icon flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/5 text-slate-300 transition-all hover:scale-110 hover:border-orange-500/50 hover:bg-orange-500/20 hover:text-orange-400 active:scale-95"
                      >
                        <SIcon size={17} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
