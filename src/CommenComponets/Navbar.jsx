import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import logo from "../../public/Images/tab.png";
import PageContainer from "./PageContainer";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/services", label: "Services" },
  { to: "/experience", label: "Experience" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);
    document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="portfolio-navbar sticky top-0 z-50">
      <nav aria-label="Primary navigation">
        <PageContainer
          fullWidth
          className="flex min-h-[68px] items-center justify-between gap-6"
        >
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt="Dhivakar P"
            className="h-14 w-14 rounded-full object-cover ring-1 ring-cyan-400/70"
          />
          <span className="leading-none">
            <strong className="portfolio-navbar-title block text-[17px] font-bold tracking-wide">DHIVAKAR P</strong>
            <small className="portfolio-navbar-subtitle mt-1 block text-[9px] font-semibold tracking-[0.16em]">
              FULL STACK DEVELOPER
            </small>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `portfolio-navbar-link relative py-2 text-[13px] font-semibold transition-colors ${
                isActive ? "portfolio-navbar-link-active" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-fuchsia-500 shadow-[0_0_8px_#d946ef]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
            className="portfolio-theme-toggle flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
          >
            {isLight ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="/resume.pdf"
            download
            className="portfolio-resume-button flex items-center gap-3 rounded-xl px-4 py-2 transition"
          >
            <span>Download Resume</span>
            <Download className="portfolio-resume-icon" size={20} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="portfolio-mobile-toggle flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        </PageContainer>
      </nav>

      {mobileMenuOpen && (
        <div className="portfolio-mobile-menu border-t px-5 pb-5 lg:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className="portfolio-mobile-link rounded-lg px-3 py-2.5 text-sm font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="/resume.pdf"
              download
              className="portfolio-mobile-resume mt-2 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold"
            >
              Download Resume <Download size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
