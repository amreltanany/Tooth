import { useState } from "react";
import { ArrowUpRight, CalendarDays, Check, ChevronDown, Instagram, MapPin, Menu, Phone, Sparkles, Star, Stethoscope, X } from "lucide-react";

const logo = "/manus-storage/taj-elite-logo_1d4b0830.png";
const video = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const navItems = [
  ["Services", "services"],
  ["Our approach", "approach"],
  ["The clinic", "clinic"],
  ["Contact", "contact"],
];

const services = [
  { number: "01", title: "Aesthetic dentistry", copy: "Subtle, sculpted results that keep you unmistakably you.", tag: "Smile design" },
  { number: "02", title: "Restorative care", copy: "Precision-led treatment for a healthy, confident smile.", tag: "Long-term health" },
  { number: "03", title: "Implant dentistry", copy: "Natural-looking solutions, planned around your life.", tag: "Advanced care" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booked, setBooked] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <nav className="nav container">
          <button className="brand-mark" onClick={() => scrollTo("top")} aria-label="Back to top">
            <img src={logo} alt="Taj Elite Clinics" />
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}
            <button className="nav-cta" onClick={() => scrollTo("contact")}>Book a visit <ArrowUpRight size={16} /></button>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <div className="hero-video-wrap">
          <video className="hero-video" autoPlay muted loop playsInline preload="auto" poster={logo} aria-hidden="true">
            <source src={video} type="video/mp4" />
          </video>
          <div className="hero-video-tint" />
        </div>
        <div className="hero-content container">
          <div className="hero-kicker"><span className="kicker-line" /> EST. 2012 · RIYADH</div>
          <h1>Smile with<br /><em>confidence.</em></h1>
          <p className="hero-copy">Thoughtful dentistry for people who care about the details. Advanced clinical care, designed around you.</p>
          <div className="hero-actions">
            <button className="button button-gold" onClick={() => scrollTo("contact")}>Start your journey <ArrowUpRight size={18} /></button>
            <button className="text-link" onClick={() => scrollTo("approach")}>Discover our approach <span>↓</span></button>
          </div>
        </div>
        <div className="hero-footer container">
          <div className="hero-note"><Sparkles size={17} /><span>Where precision<br />meets artistry</span></div>
          <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
          <div className="hero-badge"><span className="badge-dot" /> Accepting new patients</div>
        </div>
      </section>

      <section className="intro section-pad" id="approach">
        <div className="container intro-grid">
          <div className="eyebrow">01 / THE TAJ ELITE DIFFERENCE</div>
          <div className="intro-main">
            <h2>Dental care,<br /><span>elevated.</span></h2>
            <div className="intro-detail"><div className="detail-rule" /><p>We believe your dental experience should feel considered from the first hello to the final result. At Taj Elite, clinical excellence is only the beginning.</p></div>
          </div>
          <div className="intro-aside"><div className="large-number">12<span>+</span></div><p>years of<br />care, refined</p></div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow gold-text">02 / WHAT WE DO</div><h2>Care that looks<br /><em>like you.</em></h2></div><p className="heading-note">Every smile is different.<br />Your treatment should be too.</p></div>
          <div className="service-list">{services.map((service) => <article className="service-card" key={service.number}><div className="service-number">{service.number}</div><div className="service-copy"><h3>{service.title}</h3><p>{service.copy}</p></div><div className="service-tag">{service.tag}</div><ArrowUpRight className="service-arrow" size={24} /></article>)}</div>
          <button className="outline-button" onClick={() => scrollTo("contact")}>Explore all treatments <ArrowUpRight size={17} /></button>
        </div>
      </section>

      <section className="philosophy" id="clinic">
        <div className="philosophy-image"><div className="image-orbit orbit-one" /><div className="image-orbit orbit-two" /><div className="tooth-symbol">✦</div></div>
        <div className="philosophy-content"><div className="eyebrow">03 / OUR PHILOSOPHY</div><h2>Nothing<br /><em>ordinary.</em></h2><p>We bring together the calm of a considered space, the latest in dental technology, and a team who genuinely care about your outcome.</p><div className="philosophy-points"><div><Check size={16} /><span>Consultation-led care</span></div><div><Check size={16} /><span>Technology with purpose</span></div><div><Check size={16} /><span>Results that feel natural</span></div></div></div>
      </section>

      <section className="quote-section section-pad"><div className="container quote-inner"><div className="quote-mark">“</div><blockquote>It’s not just about<br /><em>changing a smile.</em><br />It’s about changing<br />how you feel in it.</blockquote><div className="quote-byline"><span className="quote-line" /> THE TAJ ELITE TEAM</div></div></section>

      <section className="contact section-pad" id="contact"><div className="container contact-grid"><div><div className="eyebrow gold-text">04 / COME SAY HELLO</div><h2>Ready for your<br /><em>next chapter?</em></h2><p className="contact-lede">Tell us a little about what you’re looking for. We’ll take it from there.</p></div><div className="contact-card"><div className="contact-card-top"><span>BOOK A CONSULTATION</span><CalendarDays size={20} /></div><button className="contact-button" onClick={() => setBooked(!booked)}>{booked ? "Request received — thank you" : "Request a visit"}<ArrowUpRight size={18} /></button><div className="contact-info"><div><MapPin size={17} /><span>King Fahd Road, Riyadh<br />Kingdom of Saudi Arabia</span></div><div><Phone size={17} /><span>+966 11 466 2200</span></div></div></div></div></section>

      <footer className="footer"><div className="container footer-inner"><div className="footer-brand"><img src={logo} alt="Taj Elite Clinics" /><p>Modern dentistry.<br />Thoughtfully delivered.</p></div><div className="footer-nav"><div><span>Explore</span><button onClick={() => scrollTo("services")}>Treatments</button><button onClick={() => scrollTo("approach")}>Our approach</button><button onClick={() => scrollTo("clinic")}>The clinic</button></div><div><span>Connect</span><a href="tel:+966114662200">Call us</a><a href="mailto:hello@tajelite.sa">Email us</a><a href="#contact"><Instagram size={15} /> Instagram</a></div></div><div className="footer-bottom"><span>© 2025 Taj Elite Clinics</span><span>Designed with intention</span><Star size={14} /></div></div></footer>
    </main>
  );
}
