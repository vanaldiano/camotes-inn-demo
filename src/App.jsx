import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  Wifi,
  Waves,
  Coffee,
  Car,
  MessageCircle,
  Star,
  Phone,
} from "lucide-react";

export default function App() {
  const rooms = [
    ["Deluxe Couple Room", "₱1,800 / night", "Cozy air-conditioned room perfect for couples."],
    ["Family Room", "₱3,200 / night", "Spacious room for families or barkada trips."],
    ["Barkada Room", "₱4,500 / night", "Budget-friendly group stay near island attractions."],
  ];

  const amenities = [
    [Wifi, "Free WiFi"],
    [Waves, "Near Beach"],
    [Coffee, "Breakfast Option"],
    [Car, "Parking Area"],
  ];

  return (
    <>
      <style>{`
        body { margin:0; font-family: Arial, sans-serif; background:#f8fbff; color:#0f172a; }
        a { text-decoration:none; color:inherit; }
        .container { max-width:1180px; margin:auto; padding:0 22px; }
        header { position:sticky; top:0; z-index:50; background:white; border-bottom:1px solid #e5e7eb; }
        .nav { display:flex; justify-content:space-between; align-items:center; padding:16px 0; }
        .links { display:flex; gap:28px; color:#475569; font-size:14px; }
        button { border:none; cursor:pointer; border-radius:999px; padding:12px 22px; font-weight:700; background:#0284c7; color:white; }
        .btn-outline { background:white; color:#0284c7; border:1px solid #bae6fd; }
        .hero { background:linear-gradient(135deg,#bae6fd,#eff6ff,#fff); padding:70px 0; }
        .hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:50px; align-items:center; }
        .badge { display:inline-flex; gap:8px; align-items:center; background:white; padding:10px 16px; border-radius:999px; color:#0369a1; font-weight:700; box-shadow:0 8px 24px #0001; }
        h1 { font-size:56px; line-height:1.05; margin:24px 0 18px; }
        h2 { font-size:38px; margin:0 0 14px; }
        p { line-height:1.7; color:#475569; }
        .hero-img { height:430px; border-radius:36px; padding:18px; background:linear-gradient(135deg,#38bdf8,#1d4ed8); box-shadow:0 25px 70px #0003; }
        .hero-img-inner { height:100%; border-radius:28px; background:url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80') center/cover; }
        .floating-card { margin-top:-45px; margin-left:24px; background:white; padding:18px; border-radius:22px; width:260px; box-shadow:0 18px 50px #0002; position:relative; }
        .grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; padding:60px 0; }
        .card { background:white; border-radius:24px; padding:24px; box-shadow:0 10px 28px #00000012; }
        .icon-box { background:#e0f2fe; color:#0369a1; width:46px; height:46px; display:grid; place-items:center; border-radius:16px; }
        .rooms { background:white; padding:70px 0; }
        .room-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .room-img { height:180px; border-radius:22px; background:linear-gradient(135deg,#bae6fd,#2563eb); margin-bottom:18px; }
        .gallery { padding:70px 0; text-align:center; }
        .gallery-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; text-align:left; }
        .gallery-item { min-height:180px; border-radius:28px; padding:20px; display:flex; align-items:end; background:linear-gradient(135deg,#bae6fd,#2563eb); }
        .cta { background:#020617; color:white; padding:70px 0; }
        .cta p { color:#cbd5e1; }
        .cta-grid { display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center; }
        input, select { width:100%; padding:14px; border-radius:16px; border:1px solid #cbd5e1; margin-bottom:12px; box-sizing:border-box; }
        footer { background:white; padding:35px 0; }
        .footer-flex { display:flex; justify-content:space-between; gap:20px; align-items:center; }
        @media(max-width:800px){
          .hero-grid,.cta-grid,.room-grid,.grid-4,.gallery-grid { grid-template-columns:1fr; }
          .links { display:none; }
          h1 { font-size:40px; }
          .hero-img { height:320px; }
          .footer-flex { flex-direction:column; align-items:flex-start; }
        }
      `}</style>

      <header>
        <div className="container nav">
          <div>
            <strong>Camotes Breeze Inn</strong>
            <div style={{ fontSize: 12, color: "#64748b" }}>Island Stay • Camotes, Cebu</div>
          </div>
          <nav className="links">
            <a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <button>Book Now</button>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="badge"><MapPin size={18} /> Camotes Island, Cebu</div>
            <h1>Relax, recharge, and enjoy your Camotes island escape.</h1>
            <p>A peaceful inn made for couples, families, and barkada trips. Book your stay easily and experience the simple beauty of Camotes.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
              <button><CalendarDays size={18} /> Check Availability</button>
              <button className="btn-outline"><MessageCircle size={18} /> Message Us</button>
            </div>
            <p><Star size={16} /> Perfect for weekend getaways and island tours</p>
          </motion.div>

          <div>
            <div className="hero-img">
              <div className="hero-img-inner"></div>
            </div>
            <div className="floating-card">
              <strong>Easy booking request</strong>
              <p style={{ fontSize: 13 }}>Guests can inquire rooms, dates, and contact details in one form.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="amenities" className="container grid-4">
        {amenities.map(([Icon, label]) => (
          <div className="card" key={label}>
            <div className="icon-box"><Icon /></div>
            <h3>{label}</h3>
          </div>
        ))}
      </section>

      <section id="rooms" className="rooms">
        <div className="container">
          <h2>Choose your island stay</h2>
          <p>Simple room options that are easy for guests to understand and quick to book online.</p>
          <div className="room-grid">
            {rooms.map(([name, price, desc]) => (
              <div className="card" key={name}>
                <div className="room-img"></div>
                <h3>{name}</h3>
                <strong style={{ color: "#0284c7" }}>{price}</strong>
                <p>{desc}</p>
                <button style={{ width: "100%" }}>View Room</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="container gallery">
        <h2>A glimpse of your stay</h2>
        <div className="gallery-grid">
          {["Beach view", "Room interior", "Lobby", "Island tour"].map((item) => (
            <div className="gallery-item" key={item}>
              <strong style={{ background: "white", padding: "10px 14px", borderRadius: 999 }}>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container cta-grid">
          <div>
            <h2>Ready for your Camotes getaway?</h2>
            <p>Send your preferred dates and room type. The inn can confirm your booking through Messenger, phone, or email.</p>
          </div>
          <div className="card">
            <input placeholder="Full name" />
            <input placeholder="Check-in / Check-out date" />
            <select>
              <option>Select room type</option>
              <option>Deluxe Couple Room</option>
              <option>Family Room</option>
              <option>Barkada Room</option>
            </select>
            <button style={{ width: "100%" }}>Send Booking Request</button>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container footer-flex">
          <div>
            <strong>Camotes Breeze Inn</strong>
            <p>Camotes Island, Cebu • Open for bookings</p>
          </div>
          <p><Phone size={16} /> 09XX XXX XXXX &nbsp; | &nbsp; <MessageCircle size={16} /> Facebook Messenger</p>
        </div>
      </footer>
    </>
  );
}