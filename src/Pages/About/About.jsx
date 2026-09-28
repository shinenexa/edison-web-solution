import { useEffect, useRef } from "react";
import "./About.css";

/* ═══════════════════════════════════════
   REUSABLE PAGE HERO
═══════════════════════════════════════ */
function PageHero() {
  const ptRef = useRef(null);

  useEffect(() => {
    const c = ptRef.current;
    if (!c || c.childElementCount > 0) return;
    const cols = ["rgba(255,77,0,.32)", "rgba(255,140,66,.22)", "rgba(59,130,246,.18)", "rgba(20,184,166,.14)"];
    for (let i = 0; i < 28; i++) {
      const el = document.createElement("span");
      el.className = "ph-particle";
      const s = Math.random() * 3 + 1;
      Object.assign(el.style, {
        width: s + "px", height: s + "px",
        background: cols[Math.floor(Math.random() * cols.length)],
        left: Math.random() * 100 + "%",
        animationDuration: (Math.random() * 8 + 6) + "s",
        animationDelay: (Math.random() * 8) + "s",
      });
      c.appendChild(el);
    }
  }, []);

  return (
    <section className="ph-hero">
      <div className="ph-grid" />
      <div className="ph-orb o1" /><div className="ph-orb o2" /><div className="ph-orb o3" />
      <div className="ph-noise" />
      <div className="ph-particles" ref={ptRef} />

      <div className="ph-content">
        <div className="ph-badge"><span className="ph-bdot" />About Edison Web Solutions</div>
        <h1 className="ph-h1">
          <span className="ph-line l1">Building</span>
          <span className="ph-line l2 grad-text">Smart Digital</span>
          <span className="ph-line l3 outline-text">Solutions</span>
        </h1>
        <p className="ph-sub">
          A technology-driven IT services company focused on helping businesses establish
          a strong digital presence through AI, web development, and strategic growth services.
        </p>
        <div className="ph-btns">
          <a href="/contact"  className="btn btn--glow">Work With Us <i className="bx bx-right-arrow-alt" /></a>
          <a href="/services" className="btn btn--ghost">Our Services  <i className="bx bx-chevron-right" /></a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */
const industries = [
  { icon: "bx bx-book",            label: "Education" },
  { icon: "bx bx-heart-circle",    label: "Healthcare" },
  { icon: "bx bx-bar-chart-alt-2", label: "Finance" },
  { icon: "bx bx-store",           label: "Retail" },
  { icon: "bx bx-briefcase",       label: "Professional Services" },
];

const whatWeDo = [
  { icon: "bx bx-desktop",     title: "Website Design & Development",  desc: "Responsive, SEO-ready, performance-focused websites." },
  { icon: "bx bx-mobile-alt",  title: "Web & Mobile App Development",  desc: "Scalable applications with seamless user experience." },
  { icon: "bx bx-brain",       title: "AI & Automation Solutions",     desc: "Intelligent systems for efficiency and engagement." },
  { icon: "bx bx-cart",        title: "eCommerce Development",         desc: "Secure, conversion-driven online stores." },
  { icon: "bx bx-transfer",    title: "API Integration Services",      desc: "Seamless system connectivity across platforms." },
  { icon: "bx bx-trending-up", title: "Digital Marketing Solutions",   desc: "SEO, PPC, and online growth strategies." },
];

const values = [
  { num: "01", icon: "bx bx-bulb",       color: "orange", title: "Innovation",        desc: "Embracing new technologies and continuous improvement to stay ahead in a rapidly evolving digital landscape.",  tag: { icon: "bx bx-chip",         label: "Tech-First"      }, col: "1/3" },
  { num: "02", icon: "bx bx-diamond",    color: "blue",   title: "Quality",           desc: "Delivering solutions with precision and performance — every pixel, every line of code crafted to perfection.",    tag: { icon: "bx bx-check-circle",  label: "Zero Compromise" }, col: "3/5" },
  { num: "03", icon: "bx bx-shield",     color: "teal",   title: "Integrity",         desc: "Building trust through transparency, honesty, and consistent delivery on every promise we make.",                 tag: { icon: "bx bx-lock",          label: "Trusted"         }, col: "5/7" },
  { num: "04", icon: "bx bx-group",      color: "amber",  title: "Collaboration",     desc: "Working as an extension of our clients' teams — your goals become our goals, your success is our success.",       tag: { icon: "bx bx-handshake",     label: "Partner Mindset" }, col: "1/4" },
  { num: "05", icon: "bx bx-line-chart", color: "blue",   title: "Customer Success",  desc: "Measuring our success purely through client growth, satisfaction, and long-term business impact.",                tag: { icon: "bx bx-trophy",        label: "Growth Driven"   }, col: "4/7" },
];

const whyUs = [
  { icon: "bx bx-code-alt",      text: "Experienced team across modern web and AI technologies." },
  { icon: "bx bx-expand-alt",    text: "Focus on scalable, future-ready solutions." },
  { icon: "bx bx-check-shield",  text: "Proven delivery across diverse business domains." },
  { icon: "bx bx-support",       text: "End-to-end support from concept to post-launch." },
];

const whyCards = [
  { icon: "bx bx-rocket",        color: "orange", title: "Fast Delivery",  desc: "On-time project delivery with zero compromise on quality." },
  { icon: "bx bx-brain",         color: "blue",   title: "AI-First",       desc: "Every solution built with intelligent automation in mind." },
  { icon: "bx bx-shield-quarter",color: "teal",   title: "Secure",         desc: "Data security and privacy at every layer of our work." },
  { icon: "bx bx-line-chart",    color: "amber",  title: "Scalable",       desc: "Built to grow with your business, long-term." },
];

const testimonials = [
  { quote: "The Edison Web Solutions team was professional, responsive, and focused on delivering results.", initials: "CL", role: "Client",       company: "Technology Startup" },
  { quote: "Their technical expertise helped us launch our platform smoothly and efficiently.",              initials: "PT", role: "Partner",      company: "Digital Business"   },
];

const stats = [
  { val: 500, suffix: "+", label: "Projects Delivered" },
  { val: 200, suffix: "+", label: "Happy Clients"       },
  { val: 8,   suffix: "+", label: "Years Experience"    },
  { val: 15,  suffix: "+", label: "Expert Team"         },
];

/* ═══════════════════════════════════════
   FADE IN HOOK
═══════════════════════════════════════ */
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("visible"), delay); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ═══════════════════════════════════════
   COUNTER HOOK
═══════════════════════════════════════ */
function useCounter(target, duration = 1800) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const num = target;
        const step = num / (duration / 16);
        let cur = 0;
        const t = setInterval(() => {
          cur += step;
          if (cur >= num) { el.textContent = num; clearInterval(t); }
          else el.textContent = Math.floor(cur);
        }, 16);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return ref;
}

/* ═══════════════════════════════════════
   MARQUEE
═══════════════════════════════════════ */
const marqueeItems = ["AI Development", "Web Solutions", "Digital Marketing", "eCommerce", "Automation", "Mobile Apps", "API Integration"];

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />{item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   STATS BAND
═══════════════════════════════════════ */
function StatItem({ val, suffix, label }) {
  const numRef = useCounter(val);
  return (
    <div className="stat-item">
      <span className="stat-val">
        <span ref={numRef}>0</span>{suffix}
      </span>
      <span className="stat-lbl">{label}</span>
    </div>
  );
}

function StatsBand() {
  const ref = useFadeIn();
  return (
    <div className="stats-band">
      <div className="a-container fade-section" ref={ref}>
        <div className="stats-grid">
          {stats.map(s => <StatItem key={s.label} {...s} />)}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   WHO WE ARE
═══════════════════════════════════════ */
function WhoWeAre() {
  const ref = useFadeIn();
  return (
    <section className="a-section" id="who-we-are">
      <div className="a-container fade-section" ref={ref}>
        <div className="who-layout">
          <div className="who-left">
            <div className="a-badge">Who We Are</div>
            <h2 className="a-h2"><span className="grad-text">Passionate Team</span> of Innovators &amp; Problem Solvers</h2>
            <p className="a-p">Founded with a passion for innovation and problem-solving, Edison Web Solutions brings together a skilled team of designers, developers, and digital strategists. We blend creativity with technical expertise to deliver customized solutions that drive business growth.</p>
            <p className="a-p">Our team has successfully delivered projects across industries including education, healthcare, finance, retail, and professional services.</p>
            <div className="industry-pills">
              {industries.map(i => (
                <div key={i.label} className="industry-pill">
                  <i className={i.icon} />{i.label}
                </div>
              ))}
            </div>
          </div>
          <div className="mv-stack">
            <div className="mv-card">
              <div className="mv-ico"><i className="bx bx-target-lock" /></div>
              <h3>Our Mission</h3>
              <p>To deliver reliable, high-quality, and result-oriented digital solutions that help businesses grow, connect with customers, and succeed in a competitive digital environment.</p>
            </div>
            <div className="mv-card mv-card--blue">
              <div className="mv-ico mv-ico--blue"><i className="bx bx-globe" /></div>
              <h3>Our Vision</h3>
              <p>To become a trusted global technology partner known for innovation, reliability, and consistent value delivery — transforming ideas into impactful digital experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   WHAT WE DO
═══════════════════════════════════════ */
function WhatWeDo() {
  const ref = useFadeIn();
  return (
    <section className="a-section a-section--alt" id="what-we-do">
      <div className="a-container fade-section" ref={ref}>
        <div className="a-sec-hdr">
          <div className="a-badge">What We Do</div>
          <h2 className="a-h2">End-to-End <span className="grad-text">Technology Solutions</span></h2>
          <p className="a-desc">Comprehensive services to support your complete digital journey.</p>
        </div>
        <div className="wwd-grid">
          {whatWeDo.map((s, i) => (
            <div key={s.title} className="wwd-item" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="wwd-ico"><i className={s.icon} /></div>
              <div>
                <p className="wwd-title">{s.title}</p>
                <p className="wwd-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   CORE VALUES — BENTO GRID
═══════════════════════════════════════ */
function CoreValues() {
  const ref = useFadeIn();
  return (
    <section className="a-section" id="values">
      <div className="a-container fade-section" ref={ref}>
        <div className="values-hdr">
          <div>
            <div className="a-badge">Our Core Values</div>
            <h2 className="a-h2">What <span className="grad-text">Drives Us</span><br />Every Day</h2>
          </div>
          <p className="a-desc values-hdr-desc">The principles that guide every project, every partnership, and every decision we make at Edison Web Solutions.</p>
        </div>
        <div className="bento-grid">
          {values.map(v => (
            <div
              key={v.title}
              className={`bento-card bento-card--${v.color}`}
              style={{ gridColumn: v.col }}
            >
              <div className="bento-top">
                <div className={`bento-ico ico-${v.color}`}><i className={v.icon} /></div>
                <span className="bento-num">{v.num}</span>
              </div>
              <div className="bento-title">{v.title}</div>
              <div className="bento-desc">{v.desc}</div>
              <div className={`bento-tag tag-${v.color}`}>
                <i className={v.tag.icon} />{v.tag.label}
              </div>
              <div className="bento-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   WHY CHOOSE US
═══════════════════════════════════════ */
function WhyChooseUs() {
  const ref = useFadeIn();
  return (
    <section className="a-section a-section--alt" id="why-us">
      <div className="a-container fade-section" ref={ref}>
        <div className="why-layout">
          <div className="why-left">
            <div className="a-badge">Why Choose Us</div>
            <h2 className="a-h2">Why <span className="grad-text">Edison Web Solutions?</span></h2>
            <p className="a-p" style={{ marginBottom: 28 }}>With a commitment to quality, performance, and long-term value, we partner with organizations to turn ideas into scalable digital solutions.</p>
            <div className="why-rows">
              {whyUs.map(w => (
                <div key={w.text} className="why-row">
                  <div className="why-ico"><i className={w.icon} /></div>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="why-cards-grid">
            {whyCards.map(c => (
              <div key={c.title} className={`why-card why-card--${c.color}`}>
                <div className={`why-card-ico wci-${c.color}`}><i className={c.icon} /></div>
                <div className="why-card-title">{c.title}</div>
                <div className="why-card-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════ */
function Testimonials() {
  const ref = useFadeIn();
  return (
    <section className="a-section" id="testimonials">
      <div className="a-container fade-section" ref={ref}>
        <div className="a-sec-hdr">
          <div className="a-badge">Client Testimonials</div>
          <h2 className="a-h2">What Our <span className="grad-text">Clients Say</span></h2>
        </div>
        <div className="testi-grid">
          {testimonials.map(t => (
            <div key={t.initials} className="testi-card">
              <div className="testi-stars">{[...Array(5)].map((_, i) => <i key={i} className="bx bxs-star" />)}</div>
              <i className="bx bxs-quote-alt-left testi-q" />
              <p className="testi-text">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-av">{t.initials}</div>
                <div>
                  <p className="testi-name">{t.role}</p>
                  <p className="testi-co">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   CTA BAND
═══════════════════════════════════════ */
function AboutCTA() {
  const ref = useFadeIn();
  return (
    <section className="a-cta">
      <div className="a-cta-g1" /><div className="a-cta-g2" />
      <div className="a-container fade-section a-cta-inner" ref={ref}>
        <div className="a-badge" style={{ justifyContent: "center" }}>
          <span className="ph-bdot" />Let's Connect
        </div>
        <h2 className="a-cta-h">Let's Build Something <span className="grad-text">Great Together</span></h2>
        <p className="a-cta-p">Whether you are a startup, small business, or growing enterprise, Edison Web Solutions is ready to support your digital goals. Get in touch and let's build solutions that drive growth.</p>
        <div className="a-cta-btns">
          <a href="/contact"  className="btn btn--glow btn--lg">Get in Touch <i className="bx bx-send" /></a>
          <a href="/services" className="btn btn--outline btn--lg">Explore Services <i className="bx bx-right-arrow-alt" /></a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════ */
export default function About() {
  return (
    <main className="dark-page">
      <PageHero />
      <Marquee />
      <StatsBand />
      <WhoWeAre />
      <WhatWeDo />
      <CoreValues />
      <WhyChooseUs />
      <Testimonials />
      <AboutCTA />
    </main>
  );
}
