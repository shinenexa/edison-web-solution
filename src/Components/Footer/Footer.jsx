import "./Footer.css";
// import Logo from "../../assets/Main-Logo/Logo.png";

const services = {
  "AI Solutions": [
    { label: "AI Chatbot",          path: "/services/ai-solutions/ai-chatbot" },
    { label: "API Integration",     path: "/services/ai-solutions/api-integration" },
    { label: "Custom Gen AI",       path: "/services/ai-solutions/custom-gen-ai" },
    { label: "Data Insights",       path: "/services/ai-solutions/data-insights" },
    { label: "Gen AI",              path: "/services/ai-solutions/gen-ai" },
    { label: "Workflow Automation", path: "/services/ai-solutions/workflow-automation" },
  ],
  "Digital Marketing": [
    { label: "Content Writing", path: "/services/digital-marketing/content-writing" },
    { label: "Email Marketing", path: "/services/digital-marketing/email-marketing" },
    { label: "PPC",             path: "/services/digital-marketing/ppc" },
    { label: "SEM",             path: "/services/digital-marketing/sem" },
    { label: "SEO",             path: "/services/digital-marketing/seo" },
    { label: "Social Media",    path: "/services/digital-marketing/social-media" },
  ],
  "IT Solutions": [
    { label: "Domain Hosting",    path: "/services/it-solutions/domain-hosting" },
    { label: "Ecommerce",         path: "/services/it-solutions/ecommerce" },
    { label: "HTML/WP Migration", path: "/services/it-solutions/html-wp-migration" },
    { label: "Mobile App",        path: "/services/it-solutions/mobile-app" },
    { label: "Web Development",   path: "/services/it-solutions/web-development" },
    { label: "WordPress",         path: "/services/it-solutions/wordpress" },
  ],
};

const company = [
  { label: "About Us",  path: "/about",    icon: "bx bx-info-circle" },
  { label: "Careers",   path: "/careers",  icon: "bx bx-briefcase" },
  { label: "Blog",      path: "/blog",     icon: "bx bx-book-open" },
  { label: "Contact",   path: "/contact",  icon: "bx bx-envelope" },
];

const socials = [
  { icon: "bx bxl-linkedin",  path: "#", label: "LinkedIn" },
  { icon: "bx bxl-twitter",   path: "#", label: "Twitter" },
  { icon: "bx bxl-instagram", path: "#", label: "Instagram" },
  { icon: "bx bxl-facebook",  path: "#", label: "Facebook" },
  { icon: "bx bxl-youtube",   path: "#", label: "YouTube" },
];

const stats = [
  { val: "500+", lbl: "Projects Done",  icon: "bx bx-rocket" },
  { val: "200+", lbl: "Happy Clients",  icon: "bx bx-smile" },
  { val: "8+",   lbl: "Years Experience",icon: "bx bx-trophy" },
  { val: "15+",  lbl: "Team Members",   icon: "bx bx-group" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow fg1" />
      <div className="footer__glow fg2" />

      {/* Stats bar */}
      <div className="footer__stats-bar">
        <div className="footer__stats-inner">
          {stats.map(s => (
            <div key={s.lbl} className="fstat">
              <i className={s.icon} />
              <span className="fstat__val">{s.val}</span>
              <span className="fstat__lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="footer__brand">
          {/* <img src={Logo} alt="IPO Edition" className="footer__logo-img" /> */}
          <a href="/" className="footer__logo">
            <span className="logo-ipo">IPO</span>
            <span className="logo-ed">Edition</span>
          </a>
          <p className="footer__tagline">
            Edison Web Solutions is a technology-driven digital agency specializing in AI development,
            web solutions, automation, and digital marketing.
          </p>
          <div className="footer__socials">
            {socials.map(s => (
              <a key={s.label} href={s.path} className="social-btn" aria-label={s.label}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
          <div className="footer__contact-info">
            <div className="fcontact">
              <i className="bx bx-envelope" />
              <a href="mailto:hello@edisonweb.com">hello@edisonweb.com</a>
            </div>
            <div className="fcontact">
              <i className="bx bx-phone" />
              <a href="tel:+910000000000">+91 00000 00000</a>
            </div>
            <div className="fcontact">
              <i className="bx bx-map" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* Services columns */}
        {Object.entries(services).map(([cat, links]) => (
          <div key={cat} className="footer__col">
            <h4 className="footer__col-title">{cat}</h4>
            <ul>
              {links.map(link => (
                <li key={link.label}>
                  <a href={link.path} className="footer__link">
                    <i className="bx bx-chevron-right" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Company */}
        <div className="footer__col">
          <h4 className="footer__col-title">Company</h4>
          <ul>
            {company.map(link => (
              <li key={link.label}>
                <a href={link.path} className="footer__link">
                  <i className={link.icon} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} <span>Edison Web Solutions</span>. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <span>·</span>
            <a href="/terms">Terms of Service</a>
            <span>·</span>
            <a href="/sitemap">Sitemap</a>
          </div>
          <div className="footer__made">
            Made with <i className="bx bxs-heart" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
}
