import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

/* ══════════════════════════════════════════════
   ⚙️  EMAILJS CONFIG
   Step 1: npm install @emailjs/browser
   Step 2: emailjs.com → Account → replace below
══════════════════════════════════════════════ */
const EMAILJS_SERVICE_ID  = "service_ppgbr59";
const EMAILJS_TEMPLATE_ID = "template_nn3329v";
const EMAILJS_PUBLIC_KEY  = "xPp3vfD4X4F7IyBlI";
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
        <div className="ph-badge"><span className="ph-bdot" />Get In Touch</div>
        <h1 className="ph-h1">
          <span className="ph-line l1">Let's Build</span>
          <span className="ph-line l2 grad-text">Something Smart</span>
          <span className="ph-line l3 outline-text">Together</span>
        </h1>
        <p className="ph-sub">
          Have a project in mind? Connect with our team to explore how AI,
          automation, and digital solutions can help your business grow.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════
   DATA
═══════════════════════════ */
const contactInfo = [
  { icon:"bx bx-phone",   color:"orange", label:"Phone",  value:"044 – 4660 7666",    link:"tel:04446607666",       sub:"Mon – Fri, 9am – 6pm IST" },
  { icon:"bx bx-envelope",color:"blue",   label:"Email",  value:"edisonwebsolutions@gmail.com",link:"mailto:edisonwebsolutions@gmail.com",sub:"We reply within 24 hours" },
  { icon:"bx bx-map",     color:"teal",   label:"Office", value:"Chennai, Tamil Nadu", link:"https://maps.google.com", sub:"India — 600001" },
];

const socials = [
  { icon:"bx bxl-linkedin",  label:"LinkedIn",  href:"#", color:"blue"   },
  { icon:"bx bxl-twitter",   label:"Twitter",   href:"#", color:"blue"   },
  { icon:"bx bxl-instagram", label:"Instagram", href:"#", color:"orange" },
  { icon:"bx bxl-facebook",  label:"Facebook",  href:"#", color:"blue"   },
  { icon:"bx bxl-youtube",   label:"YouTube",   href:"#", color:"orange" },
];

const faqs = [
  { q:"How long does a typical project take?",      a:"Project timelines vary based on scope. A standard website takes 2–4 weeks, while complex AI solutions may take 6–12 weeks." },
  { q:"Do you offer post-launch support?",          a:"Yes! We provide ongoing maintenance, updates, and support packages tailored to your needs." },
  { q:"What industries do you work with?",          a:"We've delivered projects across education, healthcare, finance, retail, and professional services." },
  { q:"Can you work with our existing tech stack?", a:"Absolutely. We adapt to your existing infrastructure and can integrate with most modern platforms and APIs." },
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
   CONTACT SECTION
═══════════════════════════ */
function ContactSection() {
  const ref = useFadeIn();
  const [formData, setFormData] = useState({ name:"", email:"", phone:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);
  const [error,     setError]     = useState("");

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);

    const now = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    /* ── Template params ──
       EmailJS template-ல இந்த variable names use பண்ணுங்க:
       {{from_name}} {{from_email}} {{phone}} {{service}}
       {{message}} {{submitted_at}} {{reply_to}}
    ── */
    const params = {
      from_name:    formData.name,
      from_email:   formData.email,
      phone:        formData.phone   || "Not provided",
      service:      formData.service || "Not specified",
      message:      formData.message,
      reply_to:     formData.email,
      submitted_at: now,
      /* CC-ஐ template-ல "CC Email" field-ல add பண்ணுங்க */
      cc_email:     "mohulshinenexa@gmail.com",
    };

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        params,
        EMAILJS_PUBLIC_KEY
      );
      console.log("EmailJS success:", result.text);
      setSending(false);
      setSubmitted(true);
      setFormData({ name:"", email:"", phone:"", service:"", message:"" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSending(false);
      setError("Failed to send. Please email us directly at hello@edisonweb.com");
    }
  };

  return (
    <section className="contact-sec" id="contact">
      <div className="c-container fade-section" ref={ref}>
        <div className="contact-layout">

          {/* ── LEFT ── */}
          <div className="contact-left">
            <div className="c-badge">Contact Us</div>
            <h2 className="c-h2">We'd Love to <span className="grad-text">Hear From You</span></h2>
            <p className="c-p">Whether you have a project idea, a question, or just want to say hello — our team is here and ready to help you build something great.</p>

            <div className="info-cards">
              {contactInfo.map(info => (
                <a key={info.label} href={info.link} className={`info-card info-card--${info.color}`}
                   target={info.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <div className={`info-ico ico-${info.color}`}><i className={info.icon} /></div>
                  <div>
                    <p className="info-label">{info.label}</p>
                    <p className="info-value">{info.value}</p>
                    <p className="info-sub">{info.sub}</p>
                  </div>
                  <i className="bx bx-right-arrow-alt info-arrow" />
                </a>
              ))}
            </div>

            <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="whatsapp-btn">
              <i className="bx bxl-whatsapp" />Chat on WhatsApp<span className="wa-badge">Online</span>
            </a>

            <div className="social-row">
              <p className="social-label">Follow Us</p>
              <div className="social-icons">
                {socials.map(s => (
                  <a key={s.label} href={s.href} className={`social-ico soc-${s.color}`} aria-label={s.label}>
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="contact-right">
            <div className="form-card">
              {!submitted ? (
                <>
                  <div className="form-card__hdr">
                    <h3>Send Us a Message</h3>
                    <p>Fill in the form below and we'll get back to you within 24 hours.</p>
                  </div>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <div className="input-wrap">
                          <i className="bx bx-user" />
                          <input type="text" name="name" placeholder="Your full name"
                            value={formData.name} onChange={handleChange} required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email Address *</label>
                        <div className="input-wrap">
                          <i className="bx bx-envelope" />
                          <input type="email" name="email" placeholder="your@email.com"
                            value={formData.email} onChange={handleChange} required />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <div className="input-wrap">
                          <i className="bx bx-phone" />
                          <input type="tel" name="phone" placeholder="+91 00000 00000"
                            value={formData.phone} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Service Interested In</label>
                        <div className="input-wrap input-wrap--select">
                          <i className="bx bx-cog" />
                          <select name="service" value={formData.service} onChange={handleChange}>
                            <option value="">Select a service</option>
                            <option>AI Development</option>
                            <option>Web Development</option>
                            <option>Digital Marketing</option>
                            <option>Mobile App</option>
                            <option>eCommerce</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Message *</label>
                      <div className="input-wrap input-wrap--textarea">
                        <i className="bx bx-message-detail" />
                        <textarea name="message" rows={5} placeholder="Tell us about your project..."
                          value={formData.message} onChange={handleChange} required />
                      </div>
                    </div>

                    {error && (
                      <div className="form-error">
                        <i className="bx bx-error-circle" />{error}
                      </div>
                    )}

                    <button type="submit" className="submit-btn" disabled={sending}>
                      {sending
                        ? <><i className="bx bx-loader-alt bx-spin" />Sending...</>
                        : <><i className="bx bx-send" />Send Message</>}
                    </button>

                    <p className="form-note">
                      <i className="bx bx-lock-alt" />Your information is secure and will never be shared.
                    </p>
                  </form>
                </>
              ) : (
                <div className="success-state">
                  <div className="success-ico"><i className="bx bx-check-circle" /></div>
                  <h3>Message Sent! 🎉</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <div className="success-details">
                    <div className="sd-item"><i className="bx bx-envelope" /><span>mohulnath404@gmail.com</span></div>
                    <div className="sd-item"><i className="bx bx-copy" /><span>CC: mohulshinenexa@gmail.com</span></div>
                  </div>
                  <button className="submit-btn" onClick={() => setSubmitted(false)}>
                    <i className="bx bx-refresh" />Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════
   MAP SECTION
═══════════════════════════ */
function MapSection() {
  const ref = useFadeIn();
  return (
    <section className="map-sec">
      <div className="c-container fade-section" ref={ref}>
        <div className="map-hdr">
          <div className="c-badge">Our Location</div>
          <h2 className="c-h2">Find <span className="grad-text">Us Here</span></h2>
        </div>
        <div className="map-wrap">
          <iframe
            title="Edison Web Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.00892621601806!3d13.047482100946426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%" height="420" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-overlay">
            <div className="map-card">
              <i className="bx bx-map-pin" />
              <div>
                <p className="map-card__title">Edison Web Solutions</p>
                <p className="map-card__addr">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════
   FAQ
═══════════════════════════ */
function FAQ() {
  const ref = useFadeIn();
  const [open, setOpen] = useState(0);
  return (
    <section className="faq-sec">
      <div className="c-container fade-section" ref={ref}>
        <div className="faq-hdr">
          <div className="c-badge">FAQ</div>
          <h2 className="c-h2">Frequently Asked <span className="grad-text">Questions</span></h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? "faq-item--open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <i className="bx bx-chevron-down faq-icon" />
              </button>
              <div className="faq-a"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════
   MAIN EXPORT
═══════════════════════════ */
export default function Contact() {
  return (
    <main className="dark-page">
      <PageHero />
      <ContactSection />
      <MapSection />
      <FAQ />
    </main>
  );
}
