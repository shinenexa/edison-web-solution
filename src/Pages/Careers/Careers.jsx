import { useEffect, useRef, useState } from "react";
import "./Careers.css";
import Images from "../../assets/image"; 

/* ═══════════════════════════
   DATA
═══════════════════════════ */
const jobs = [
  {
    id: 1,
    title: "AI Developer",
    category: "AI Solutions",
    type: "Full Time",
    location: "Chennai",
    desc: "Build and deploy AI models, chatbots, and automation systems for enterprise clients.",
    tags: ["Python", "TensorFlow", "OpenAI"],
    hot: true,
  },
  {
    id: 2,
    title: "Full Stack Developer",
    category: "Web Development",
    type: "Full Time",
    location: "Chennai",
    desc: "Develop scalable web applications using React, Node.js, and modern cloud infrastructure.",
    tags: ["React", "Node.js", "MongoDB"],
    hot: true,
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    category: "Digital Marketing",
    type: "Full Time",
    location: "Chennai",
    desc: "Plan and execute SEO, PPC, and social media campaigns to drive business growth.",
    tags: ["SEO", "Google Ads", "Analytics"],
    hot: false,
  },
  {
    id: 4,
    title: "WordPress Developer",
    category: "Web Development",
    type: "Full Time, Remote",
    location: "Remote",
    desc: "Design and develop custom WordPress themes, plugins, and WooCommerce solutions.",
    tags: ["WordPress", "PHP", "WooCommerce"],
    hot: false,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    category: "Design",
    type: "Full Time",
    location: "Chennai",
    desc: "Create stunning user interfaces and experiences for web and mobile applications.",
    tags: ["Figma", "Adobe XD", "Prototyping"],
    hot: true,
  },
  {
    id: 6,
    title: "SEO Specialist",
    category: "Digital Marketing",
    type: "Part Time",
    location: "Remote",
    desc: "Optimize websites for search engines and create data-driven content strategies.",
    tags: ["SEO", "Content", "Analytics"],
    hot: false,
  },
];

const categories = ["All Job Category", "AI Solutions", "Web Development", "Digital Marketing", "Design"];
const types      = ["All Job Type", "Full Time", "Part Time", "Full Time, Remote"];
const locations  = ["All Location", "Chennai", "Remote"];

const perks = [
  { icon: "bx bx-laptop",        title: "Remote Friendly",     desc: "Flexible work-from-home options for select roles." },
  { icon: "bx bx-trending-up",   title: "Career Growth",       desc: "Clear growth paths with mentorship and training." },
  { icon: "bx bx-group",         title: "Collaborative Team",  desc: "Work with talented designers, devs, and marketers." },
  { icon: "bx bx-trophy",        title: "Competitive Pay",     desc: "Industry-standard salaries with performance bonuses." },
  { icon: "bx bx-brain",         title: "AI-First Culture",    desc: "Work on cutting-edge AI and automation projects." },
  { icon: "bx bx-heart",         title: "Work-Life Balance",   desc: "We value your wellbeing inside and outside work." },
];

/* ═══════════════════════════
   HOOKS
═══════════════════════════ */
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

/* ═══════════════════════════
   PAGE HERO
═══════════════════════════ */
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
        <div className="ph-badge"><span className="ph-bdot" />We're Hiring</div>
        <h1 className="ph-h1">
          <span className="ph-line l1">Join Our</span>
          <span className="ph-line l2 grad-text">Growing Team</span>
          <span className="ph-line l3 outline-text">of Innovators</span>
        </h1>
        <p className="ph-sub">
          Join Edison Web Solutions and work on cutting-edge AI, web, and digital marketing
          projects. We're looking for talented developers, designers, and marketers.
        </p>
        <div className="ph-btns">
          <a href="#jobs"    className="btn btn--glow">View Open Positions <i className="bx bx-right-arrow-alt" /></a>
          <a href="/contact" className="btn btn--ghost">Contact Us <i className="bx bx-chevron-right" /></a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════
   CAREER WITH EDISON
═══════════════════════════ */
function CareerIntro() {
  const ref = useFadeIn();
  return (
    <section className="career-intro">
      <div className="ci-container fade-section" ref={ref}>
        <div className="ci-layout">
          <div className="ci-left">
            <div className="cr-badge">Career With Edison</div>
            <h2 className="cr-h2">
              Build Your Future with <span className="grad-text">Edison Web Solutions</span>
            </h2>
            <p className="cr-p">
              At Edison Web Solutions, we believe in empowering fresh talent and experienced
              professionals to create cutting-edge digital solutions. As a fast-growing AI and
              web development company, we focus on innovation, quality, and client satisfaction.
            </p>
            <p className="cr-p">
              Whether you're a developer, designer, or marketer — we offer a collaborative
              environment where your ideas matter and your career thrives.
            </p>
            <div className="ci-tags">
              <span className="ci-tag"><i className="bx bx-check" />Flexible Work</span>
              <span className="ci-tag"><i className="bx bx-check" />Career Growth</span>
              <span className="ci-tag"><i className="bx bx-check" />AI-First Culture</span>
              <span className="ci-tag"><i className="bx bx-check" />Competitive Pay</span>
            </div>
            <a href="#jobs" className="btn btn--glow" style={{ marginTop: 8 }}>
              See Open Roles <i className="bx bx-right-arrow-alt" />
            </a>
          </div>
          <div className="ci-right">
            <div className="ci-img-wrap">
            
              <div className="ci-img-placeholder">
                  <img src={Images.Careers} alt="Career at Edison" className="ci-img" />
              </div>
              <div className="ci-img-badge b1">
                <i className="bx bx-group" />
                <div><p>15+</p><small>Team Members</small></div>
              </div>
              <div className="ci-img-badge b2">
                <i className="bx bx-briefcase" />
                <div><p>Open Roles</p><small>Apply Today</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════
   PERKS SECTION
═══════════════════════════ */
function Perks() {
  const ref = useFadeIn();
  return (
    <section className="perks-sec">
      <div className="ci-container fade-section" ref={ref}>
        <div className="cr-hdr">
          <div className="cr-badge">Why Join Us</div>
          <h2 className="cr-h2">Perks &amp; <span className="grad-text">Benefits</span></h2>
          <p className="cr-desc">We take care of our team so they can take care of great work.</p>
        </div>
        <div className="perks-grid">
          {perks.map((p, i) => (
            <div key={p.title} className="perk-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="perk-ico"><i className={p.icon} /></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════
   JOBS SECTION
═══════════════════════════ */
function Jobs() {
  const ref = useFadeIn();
  const [search,   setSearch]   = useState("");
  const [category, setCategory] = useState("All Job Category");
  const [type,     setType]     = useState("All Job Type");
  const [location, setLocation] = useState("All Location");

  const filtered = jobs.filter(j => {
    const q = search.toLowerCase();
    const matchSearch   = !q || j.title.toLowerCase().includes(q) || j.category.toLowerCase().includes(q);
    const matchCategory = category === "All Job Category" || j.category === category;
    const matchType     = type     === "All Job Type"     || j.type === type;
    const matchLocation = location === "All Location"     || j.location === location;
    return matchSearch && matchCategory && matchType && matchLocation;
  });

  return (
    <section className="jobs-sec" id="jobs">
      <div className="ci-container fade-section" ref={ref}>
        <div className="cr-hdr">
          <div className="cr-badge">Open Positions</div>
          <h2 className="cr-h2">Current <span className="grad-text">Job Openings</span></h2>
          <p className="cr-desc">Find the role that matches your skills and passion. We'd love to have you on board.</p>
        </div>

        {/* Filters */}
        <div className="job-filters">
          <div className="filter-search">
            <i className="bx bx-search" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-select-wrap">
            <i className="bx bx-category" />
            <select value={category} onChange={e => setCategory(e.target.value)}>
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="filter-select-wrap">
            <i className="bx bx-briefcase" />
            <select value={type} onChange={e => setType(e.target.value)}>
              {types.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="filter-select-wrap">
            <i className="bx bx-map" />
            <select value={location} onChange={e => setLocation(e.target.value)}>
              {locations.map(l => <option key={l}>{l}</option>)}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="jobs-count">
          <span>{filtered.length} position{filtered.length !== 1 ? "s" : ""} found</span>
        </div>

        {/* Job cards */}
        {filtered.length > 0 ? (
          <div className="jobs-grid">
            {filtered.map((job, i) => (
              <div key={job.id} className="job-card" style={{ animationDelay: `${i * 0.07}s` }}>
                
                <div className="job-card__top">
                  <div className="job-ico"><i className="bx bx-briefcase" /></div>
                  <div className="job-meta">
                    <span className="job-type">{job.type}</span>
                    <span className="job-loc"><i className="bx bx-map-pin" />{job.location}</span>
                  </div>
                </div>
                <h3 className="job-title">{job.title}</h3>
                <p className="job-cat"><i className="bx bx-category-alt" />{job.category}</p>
                <p className="job-desc">{job.desc}</p>
                <div className="job-tags">
                  {job.tags.map(t => <span key={t} className="job-tag">{t}</span>)}
                </div>
                <a href="/contact" className="job-apply">
                  Apply Now <i className="bx bx-right-arrow-alt" />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="jobs-empty">
            <i className="bx bx-search-alt" />
            <p>No positions found matching your criteria.</p>
            <button onClick={() => { setSearch(""); setCategory("All Job Category"); setType("All Job Type"); setLocation("All Location"); }} className="btn btn--ghost">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════
   CTA SECTION
═══════════════════════════ */
function CareerCTA() {
  const ref = useFadeIn();
  return (
    <section className="career-cta">
      <div className="cta-g1" /><div className="cta-g2" />
      <div className="ci-container fade-section cta-inner" ref={ref}>
        <div className="cr-badge" style={{ justifyContent: "center" }}>
          <span className="ph-bdot" />Don't See Your Role?
        </div>
        <h2 className="cta-h">Send Us Your <span className="grad-text">Resume Anyway</span></h2>
        <p className="cta-p">We're always on the lookout for exceptional talent. Drop your resume and we'll reach out when the right opportunity comes up.</p>
        <div className="cta-btns">
          <a href="mailto:careers@edisonweb.com" className="btn btn--glow btn--lg">
            <i className="bx bx-envelope" />Send Your Resume
          </a>
          <a href="/contact" className="btn btn--outline btn--lg">
            Contact Us <i className="bx bx-right-arrow-alt" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════
   MAIN EXPORT
═══════════════════════════ */
export default function Careers() {
  return (
    <main className="dark-page">
      <PageHero />
      <CareerIntro />
      <Perks />
      <Jobs />
      <CareerCTA />
    </main>
  );
}
