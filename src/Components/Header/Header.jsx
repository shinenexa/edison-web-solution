import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Images from "../../assets/image";

const navLinks = [
  { label: "Home",    path: "/" },
  { label: "About",   path: "/about" },
  {
    label: "Services", path: "#",
    mega: [
      {
        cat: "AI Solutions", icon: "bx bx-bot",
        items: [
          { label: "AI Chatbot",          path: "/services/ai-solutions/ai-chatbot",          icon: "bx bx-message-square-dots" },
          { label: "API Integration",     path: "/services/ai-solutions/api-integration",     icon: "bx bx-transfer" },
          { label: "Custom Gen AI",       path: "/services/ai-solutions/custom-gen-ai",       icon: "bx bx-brain" },
          { label: "Data Insights",       path: "/services/ai-solutions/data-insights",       icon: "bx bx-data" },
          { label: "Gen AI",              path: "/services/ai-solutions/gen-ai",              icon: "bx bx-chip" },
          { label: "Workflow Automation", path: "/services/ai-solutions/workflow-automation", icon: "bx bx-cog" },
        ],
      },
      {
        cat: "Digital Marketing", icon: "bx bx-bar-chart-alt-2",
        items: [
          { label: "Content Writing",  path: "/services/digital-marketing/content-writing",  icon: "bx bx-edit" },
          { label: "Email Marketing",  path: "/services/digital-marketing/email-marketing",  icon: "bx bx-envelope" },
          { label: "PPC",              path: "/services/digital-marketing/ppc",              icon: "bx bx-dollar-circle" },
          { label: "SEM",              path: "/services/digital-marketing/sem",              icon: "bx bx-search-alt" },
          { label: "SEO",              path: "/services/digital-marketing/seo",              icon: "bx bx-trending-up" },
          { label: "Social Media",     path: "/services/digital-marketing/social-media",     icon: "bx bx-share-alt" },
        ],
      },
      {
        cat: "IT Solutions", icon: "bx bx-globe",
        items: [
          { label: "Domain Hosting",    path: "/services/it-solutions/domain-hosting",    icon: "bx bx-server" },
          { label: "Ecommerce",         path: "/services/it-solutions/ecommerce",         icon: "bx bx-cart" },
          { label: "HTML/WP Migration", path: "/services/it-solutions/html-wp-migration", icon: "bx bxl-wordpress" },
          { label: "Mobile App",        path: "/services/it-solutions/mobile-app",        icon: "bx bx-mobile-alt" },
          { label: "Web Development",   path: "/services/it-solutions/web-development",   icon: "bx bx-code-alt" },
          { label: "WordPress",         path: "/services/it-solutions/wordpress",         icon: "bx bxl-wordpress" },
        ],
      },
    ],
  },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [megaOpen,   setMegaOpen]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [mobSvcOpen, setMobSvcOpen] = useState(false);
  const closeTimer = useRef(null);
  const location   = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
    setMobSvcOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const open     = useCallback(() => { clearTimeout(closeTimer.current); setMegaOpen(true);  }, []);
  const close    = useCallback(() => { closeTimer.current = setTimeout(() => setMegaOpen(false), 150); }, []);
  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">

        {/* Logo */}
        <Link to="/" className="header__logo">
          <span className="header__logo-text">
            <img src={Images.logo} alt="IPO Edition" />
          </span>
          <span className="header__logo-dot" />
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav">
          {navLinks.map((link) =>
            link.mega ? (
              <div
                key={link.label}
                className="nav-item nav-item--mega"
                onMouseEnter={open}
                onMouseLeave={close}
              >
                <button className={`nav-link nav-link--svc ${megaOpen ? "nav-link--active" : ""}`}>
                  {link.label}
                  <i className={`bx bx-chevron-down nav-chevron ${megaOpen ? "rot" : ""}`} />
                </button>

                <div className="mega-bridge" />

                <div
                  className={`mega-menu ${megaOpen ? "mega-menu--open" : ""}`}
                  onMouseEnter={open}
                  onMouseLeave={close}
                >
                  <div className="mega-menu__panel">
                    {link.mega.map((col) => (
                      <div key={col.cat} className="mega-col">
                        <Link to={col.path} className="mega-col__title">
                          <i className={col.icon} />
                          {col.cat}
                        </Link>
                        <ul>
                          {col.items.map((item) => (
                            <li key={item.label}>
                              <Link to={item.path} className="mega-link">
                                <i className={item.icon} />
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="mega-promo">
                      <div className="mega-promo__glow" />
                      <i className="bx bx-rocket mega-promo__icon" />
                      <h4>Ready to Scale?</h4>
                      <p>Let's build your next AI-powered digital solution together.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={link.label} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? "nav-link--current" : ""}`}
                >
                  {link.label}
                </Link>
              </div>
            )
          )}
        </nav>

        {/* Right */}
        <div className="header__right">
          <Link to="/contact" className="header__cta">
            Get Started <i className="bx bx-right-arrow-alt" />
          </Link>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}>
        <ul>
          {navLinks.map((link) =>
            link.mega ? (
              <li key={link.label} className="mob-item">
                <button
                  className="mob-link mob-link--toggle"
                  onClick={() => setMobSvcOpen(!mobSvcOpen)}
                >
                  {link.label}
                  <i className={`bx bx-chevron-down ${mobSvcOpen ? "rot" : ""}`} />
                </button>
                {mobSvcOpen && (
                  <div className="mob-mega">
                    {link.mega.map((col) => (
                      <div key={col.cat} className="mob-col">
                        <Link to={col.path} className="mob-col__title">
                          <i className={col.icon} />{col.cat}
                        </Link>
                        {col.items.map((item) => (
                          <Link key={item.label} to={item.path} className="mob-sub-link">
                            <i className={item.icon} />{item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              // ✅ FIXED: link.label (was item.label before — typo)
              <li key={link.label} className="mob-item">
                <Link
                  to={link.path}
                  className={`mob-link ${isActive(link.path) ? "mob-link--current" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
          <li className="mob-item mob-cta">
            <Link to="/contact" className="header__cta" style={{ width: "100%", justifyContent: "center" }}>
              Get Started <i className="bx bx-right-arrow-alt" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
