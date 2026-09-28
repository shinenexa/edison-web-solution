import { useEffect, useRef, useState } from "react";
import "./home.css";
import Images from "../../assets/image";

/* ─── DATA ─── */
const stats = [
  { value: "500+", label: "Projects Delivered", icon: "bx bx-rocket" },
  { value: "200+", label: "Happy Clients",       icon: "bx bx-smile" },
  { value: "8+",   label: "Years Experience",    icon: "bx bx-trophy" },
  { value: "15+",  label: "Expert Team",         icon: "bx bx-group" },
];

const services = [
  {
    id: "ai", icon: "bx bx-bot", label: "AI Solutions",
    path: "/services/ai-solutions",
    heading: "AI Solutions",
    sub: "Automate, analyze and scale with custom AI systems.",
    items: [
      { icon: "bx bx-chip",                name: "AI Development Services",   desc: "Custom AI solutions to automate processes and improve decision-making." },
      { icon: "bx bx-code-alt",            name: "AI Web & App Development",  desc: "Intelligent websites built with performance and scalability." },
      { icon: "bx bx-cog",                 name: "AI Workflow Automation",    desc: "Reduce manual effort through smart automation systems." },
      { icon: "bx bx-message-square-dots", name: "AI Chatbots for Websites",  desc: "24/7 conversational chatbots for engagement and leads." },
      { icon: "bx bx-transfer",            name: "API Integration Services",  desc: "Seamless integrations to connect tools and workflows." },
      { icon: "bx bx-brain",               name: "Custom Gen AI Solutions",   desc: "Bespoke AI tools designed for your business use cases." },
    ],
  },
  {
    id: "dm", icon: "bx bx-bar-chart-alt-2", label: "Digital Marketing", color: "blue",
    path: "/services/digital-marketing",
    heading: "Digital Marketing",
    sub: "Data-driven growth strategies to scale your brand.",
    items: [
      { icon: "bx bx-data",        name: "Data & Insight Services",    desc: "Transform raw data into actionable insights via AI dashboards." },
      { icon: "bx bx-trending-up", name: "Digital Marketing Services", desc: "SEO, paid campaigns, social media and growth strategies." },
      { icon: "bx bx-edit",        name: "Content Writing",            desc: "Compelling content that drives traffic and conversions." },
      { icon: "bx bx-envelope",    name: "Email Marketing",            desc: "Targeted campaigns that nurture leads and retain customers." },
      { icon: "bx bx-search-alt",  name: "SEO & SEM",                  desc: "Rank higher and drive qualified traffic to your website." },
      { icon: "bx bx-share-alt",   name: "Social Media Marketing",     desc: "Build brand presence across all major social platforms." },
    ],
  },
  {
    id: "it", icon: "bx bx-globe", label: "IT Solutions", color: "teal",
    path: "/services/it-solutions",
    heading: "IT Solutions",
    sub: "Web, cloud and infrastructure solutions for modern businesses.",
    items: [
      { icon: "bx bx-desktop",    name: "Website Design & Development", desc: "High-performance responsive websites that convert." },
      { icon: "bx bxl-wordpress", name: "WordPress & eCommerce",        desc: "Scalable WooCommerce and WordPress solutions." },
      { icon: "bx bx-mobile-alt", name: "Mobile App Development",       desc: "Cross-platform apps built for performance and UX." },
      { icon: "bx bx-server",     name: "Domain & Hosting",             desc: "Secure, reliable hosting infrastructure for your presence." },
      { icon: "bx bx-cart",       name: "Ecommerce Development",        desc: "Full-stack ecommerce platforms built to scale." },
      { icon: "bx bx-code-curly", name: "HTML/WP Migration",            desc: "Smooth, zero-downtime website migrations." },
    ],
  },
];

const steps = [
  { num: "01", icon: "bx bx-search-alt",  title: "Discovery",         desc: "Understand your business goals, challenges, and technical requirements." },
  { num: "02", icon: "bx bx-palette",     title: "Strategy & Design", desc: "Plan user-centric, data-driven, and scalable digital solutions." },
  { num: "03", icon: "bx bx-code-curly",  title: "Development",       desc: "Build and optimize using modern technologies and AI tools." },
  { num: "04", icon: "bx bx-rocket",      title: "Launch & Support",  desc: "Deploy with continuous monitoring, updates, and improvements." },
];

const whyUs = [
  { icon: "bx bx-target-lock",    title: "Result-Driven Approach",  desc: "Business-focused solutions built to deliver measurable outcomes." },
  { icon: "bx bx-brain",          title: "AI-First Thinking",        desc: "We lead with AI to build smarter, faster automation and insights." },
  { icon: "bx bx-link-external",  title: "End-to-End Support",       desc: "From strategy to launch and beyond — we're with you every step." },
  { icon: "bx bx-shield-quarter", title: "Security & Reliability",   desc: "Strong focus on data security, privacy, and uptime." },
];

const testimonials = [
  { quote: "Edison Web Solutions helped us automate workflows and improve operational efficiency significantly. Their AI-first approach made a real difference.", author: "Founder", company: "Technology Startup", initials: "TS" },
  { quote: "Their AI-driven solutions improved our customer engagement and overall business performance. Highly recommend their digital marketing expertise.", author: "Marketing Head", company: "Digital Business", initials: "DB" },
];

const insights = [
  { icon: "bx bx-brain",  tag: "AI",         color: "orange", title: "How AI Is Transforming Modern Businesses",   desc: "Exploring the impact of AI-first strategies on enterprise growth and efficiency." },
  { icon: "bx bx-globe",  tag: "Web",        color: "blue",   title: "Building Scalable Websites for Growth",      desc: "Architecture patterns and tech choices that support long-term digital scale." },
  { icon: "bx bx-cog",    tag: "Automation", color: "teal",   title: "Smart Automation for Competitive Advantage", desc: "How intelligent automation is reshaping business workflows and productivity." },
];

const heroStatNumbers = [
  { value: "500+", label: "Projects Delivered", icon: "bx bx-rocket" },
  { value: "200+", label: "Happy Clients",       icon: "bx bx-smile" },
  { value: "8+",   label: "Years Experience",    icon: "bx bx-trophy" },
  { value: "15+",  label: "Expert Team",         icon: "bx bx-group" },
];

/* ─── HOOKS ─── */
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

function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const num = parseInt(target);
        const step = num / (duration / 16);
        let cur = 0;
        const t = setInterval(() => {
          cur += step;
          if (cur >= num) { setCount(num); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 16);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { ref, count };
}

/* ─── STAT CARD ─── */
function StatCard({ value, label, icon }) {
  const num = parseInt(value);
  const suffix = value.replace(String(num), "");
  const { ref, count } = useCounter(num);
  return (
    <div className="stat-card" ref={ref}>
      <i className={`${icon} stat-card__icon`} />
      <span className="stat-card__val">{count}{suffix}</span>
      <span className="stat-card__lbl">{label}</span>
    </div>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__particles" aria-hidden="true">
        {[...Array(20)].map((_, i) => <span key={i} className="particle" style={{ "--i": i }} />)}
      </div>
      <div className="hero__glow g1" /><div className="hero__glow g2" />
      <div className="container hero__inner">
        <div className="hero__left">
          <div className="badge badge--glow"><span className="badge__ring" />Technology-Driven Digital Agency</div>
          <h1 className="hero__h1">
            Empowering Businesses<br />
            with <span className="grad-text">Smart Digital</span><br />
            &amp; <span className="outline-text">AI Solutions</span>
          </h1>
          <p className="hero__sub">
            We help startups and enterprises build intelligent websites, AI-powered
            systems, and scalable digital solutions that drive real business growth.
          </p>
          <div className="hero__btns">
            <a href="/contact" className="btn btn--glow">Get a Free Consultation <i className="bx bx-right-arrow-alt" /></a>
            <a href="/services" className="btn btn--ghost">Explore Our Services <i className="bx bx-chevron-right" /></a>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__imgwrap">
            <div className="hero__ring r1" /><div className="hero__ring r2" /><div className="hero__ring r3" />
            <div className="hero__imgbox">
              <img src={Images.homehero} alt="Edison" className="hero__img" />
            </div>
          </div>
          <div className="float-card fc1"><i className="bx bx-bot" /><div><p>AI Automation</p><small>Smart &amp; Scalable</small></div></div>
          <div className="float-card fc2"><i className="bx bx-trending-up" /><div><p>Digital Growth</p><small>Data-Driven</small></div></div>
          <div className="float-card fc3"><i className="bx bx-desktop" /><div><p>Web Solutions</p><small>High Performance</small></div></div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES (Tab layout) ─── */
function Services() {
  const [active, setActive] = useState("ai");
  const ref = useFadeIn();
  const current = services.find(s => s.id === active);

  return (
    <section className="section" id="services">
      <div className="container fade-section" ref={ref}>
        <div className="sec-hdr">
          <div className="badge">Our Core Services</div>
          <h2>End-to-End Digital, AI &amp; <span className="grad-text">Marketing Services</span></h2>
          <p className="sec-desc">Comprehensive services designed for business transformation, automation, and long-term scalability.</p>
        </div>
        <div className="svc-layout">
          {/* Tabs */}
          <div className="svc-tabs">
            {services.map(s => (
              <button
                key={s.id}
                className={`svc-tab svc-tab--${s.color || "orange"} ${active === s.id ? "active" : ""}`}
                onClick={() => setActive(s.id)}
              >
                <i className={s.icon} />
                {s.label}
                <i className="bx bx-chevron-right svc-tab__arrow" />
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="svc-panel">
            <div className={`svc-panel__head svc-head--${current.color || "orange"}`}>
              <div className={`svc-head__ico ico-bg-${current.color || "orange"}`}>
                <i className={current.icon} />
              </div>
              <div>
                <h3>{current.heading}</h3>
                <p>{current.sub}</p>
              </div>
            </div>
            <div className="svc-items">
              {current.items.map(item => (
                <div key={item.name} className={`svc-item svc-item--${current.color || "orange"}`}>
                  <div className={`svc-item__ico ico-sm-${current.color || "orange"}`}>
                    <i className={item.icon} />
                  </div>
                  <div>
                    <p className="svc-item__name">{item.name}</p>
                    <p className="svc-item__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href={current.path} className={`svc-more link-${current.color || "orange"}`}>
              Explore {current.heading} <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS (Timeline) ─── */
function Process() {
  const ref = useFadeIn();
  return (
    <section className="section section--alt" id="process">
      <div className="container fade-section" ref={ref}>
        <div className="sec-hdr sec-hdr--center">
          <div className="badge">How We Work</div>
          <h2>Our <span className="grad-text">4-Step Process</span></h2>
          <p className="sec-desc">A proven framework to turn your ideas into scalable, AI-powered solutions.</p>
        </div>
        <div className="timeline">
          {steps.map((s, i) => (
            <div key={s.num} className="timeline__step">
              <div className="timeline__circle">
                <i className={s.icon} />
              </div>
              <div className="timeline__num">{`Step ${s.num}`}</div>
              <div className="timeline__title">{s.title}</div>
              <div className="timeline__desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY US (Row layout) ─── */
function WhyUs() {
  const ref = useFadeIn();
  return (
    <section className="section" id="why-us">
      <div className="container fade-section" ref={ref}>
        <div className="why-layout">
          <div className="why-left">
            <div className="sec-hdr">
              <div className="badge">Why Choose Us</div>
              <h2>Why <span className="grad-text">Edison Web Solutions</span></h2>
              <p className="sec-desc">We combine AI-first thinking with deep technical expertise to deliver real business results.</p>
            </div>
            <div className="why-rows">
              {whyUs.map(w => (
                <div key={w.title} className="why-row">
                  <div className="why-row__ico"><i className={w.icon} /></div>
                  <div>
                    <div className="why-row__title">{w.title}</div>
                    <div className="why-row__desc">{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-right">
                            <img src={Images.Teamwork} alt="Career at Edison" className="ci-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  const ref = useFadeIn();
  return (
    <section className="section section--alt" id="testimonials">
      <div className="container fade-section" ref={ref}>
        <div className="sec-hdr sec-hdr--center">
          <div className="badge">Client Testimonials</div>
          <h2>What Our <span className="grad-text">Clients Say</span></h2>
        </div>
        <div className="testi-grid">
          {testimonials.map(t => (
            <div key={t.company} className="testi-card">
              <div className="testi-card__stars">{[...Array(5)].map((_, i) => <i key={i} className="bx bxs-star" />)}</div>
              <i className="bx bxs-quote-alt-left testi-card__q" />
              <p className="testi-card__text">{t.quote}</p>
              <div className="testi-card__author">
                <div className="testi-card__av">{t.initials}</div>
                <div>
                  <p className="testi-card__name">{t.author}</p>
                  <p className="testi-card__co">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── INSIGHTS (List) ─── */
function Insights() {
  const ref = useFadeIn();
  return (
    <section className="section" id="insights">
      <div className="container fade-section" ref={ref}>
        <div className="ins-header">
          <div className="sec-hdr" style={{ marginBottom: 0 }}>
            <div className="badge">Insights &amp; Resources</div>
            <h2>Latest <span className="grad-text">Articles</span></h2>
          </div>
          <a href="/blog" className="btn btn--outline">Read All Articles <i className="bx bx-right-arrow-alt" /></a>
        </div>
        <div className="ins-list">
          {insights.map(a => (
            <a key={a.title} href="/blog" className="ins-item">
              <div className={`ins-item__ico ico-bg-${a.color}`}>
                <i className={a.icon} />
              </div>
              <div className="ins-item__body">
                <span className={`ins-tag tag-${a.color}`}>{a.tag}</span>
                <div className="ins-item__title">{a.title}</div>
                <div className="ins-item__desc">{a.desc}</div>
              </div>
              <div className="ins-item__arrow"><i className="bx bx-right-arrow-alt" /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT CTA ─── */
function ContactCTA() {
  const ref = useFadeIn();
  return (
    <section className="cta-band">
      <div className="cta-band__glow cg1" /><div className="cta-band__glow cg2" />
      <div className="container fade-section cta-band__inner" ref={ref}>
        <div className="badge badge--glow"><span className="badge__ring" />Let's Talk</div>
        <h2>Let's Build Something <span className="grad-text">Smart Together</span></h2>
        <p>Have a project in mind? Connect with our team to explore how AI, automation, and digital solutions can help your business grow.</p>
        <div className="cta-band__btns">
          <a href="/contact" className="btn btn--glow btn--lg">Contact Us <i className="bx bx-send" /></a>
          <a href="/about"   className="btn btn--outline btn--lg">View Our Work <i className="bx bx-right-arrow-alt" /></a>
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  const ref = useFadeIn();
  return (
    <section className="final-cta">
      <div className="container fade-section" ref={ref}>
        <h2>Ready to Grow with <span className="grad-text">Smart Digital Solutions?</span></h2>
        <p>Partner with Edison Web Solutions to turn your digital ideas into scalable, AI-powered solutions.</p>
        <a href="/contact" className="btn btn--glow btn--lg">Get Started Today <i className="bx bx-rocket" /></a>
      </div>
    </section>
  );
}

/* ─── MAIN ─── */
export default function Home() {
  return (
    <main className="dark-page">
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <Insights />
      <ContactCTA />
      <FinalCTA />
    </main>
  );
}
