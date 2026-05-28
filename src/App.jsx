import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bath,
  BedDouble,
  CalendarDays,
  Camera,
  Car,
  ChevronRight,
  Coffee,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Route,
  ShieldCheck,
  Snowflake,
  Star,
  Tv,
  Users,
  Waves,
  Wifi,
  X,
} from "lucide-react";

const navLinks = ["Rooms", "Amenities", "Gallery", "About", "Contact"];

const images = {
  hero:
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=85",
  roomCouple:
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
  roomFamily:
    "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=1200&q=85",
  roomBarkada:
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85",
  sunset:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
  lifestyle:
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85",
  island:
    "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1200&q=85",
  dining:
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
  pool:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
  breakfast:
    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85",
};

const amenities = [
  [Wifi, "Free WiFi", "Fast connection for work, travel planning, and sharing your island moments."],
  [Waves, "Near Beach", "Easy access to the shoreline and Camotes day-trip routes."],
  [Snowflake, "Air-conditioned Rooms", "Cool, quiet rooms after long sunny island adventures."],
  [Car, "Parking Area", "Convenient space for guests arriving by car or motorbike."],
  [Coffee, "Breakfast", "Simple morning options before tours, ferry rides, and beach days."],
  [Route, "Island Tour Assistance", "Local help for caves, beaches, lake trips, and transfers."],
  [Tv, "Smart TV", "Relax with streaming-ready entertainment after your itinerary."],
  [Bath, "Private Bathrooms", "Clean, comfortable ensuite spaces for every room type."],
];

const rooms = [
  {
    name: "Deluxe Couple Room",
    price: "PHP 1,800",
    capacity: "2 guests",
    image: images.roomCouple,
    description: "A calm, intimate room for couples who want comfort close to the island's best stops.",
  },
  {
    name: "Family Garden Room",
    price: "PHP 3,200",
    capacity: "4 guests",
    image: images.roomFamily,
    description: "Spacious, practical, and polished for families spending a full weekend in Camotes.",
  },
  {
    name: "Barkada Suite",
    price: "PHP 4,500",
    capacity: "6 guests",
    image: images.roomBarkada,
    description: "A generous group stay with shared comfort, smart amenities, and easy tour planning.",
  },
];

const gallery = [
  ["Ocean mornings", images.sunset, "tall"],
  ["Premium room details", images.roomCouple, ""],
  ["Island hopping days", images.island, ""],
  ["Breakfast before tours", images.breakfast, ""],
  ["Resort-style lounging", images.pool, "wide"],
  ["Warm evening stays", images.dining, ""],
];

const testimonials = [
  {
    name: "Mika and Ron",
    location: "Cebu City",
    quote: "The room felt fresh, the staff made booking easy, and the island tour help saved us so much time.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "The Santos Family",
    location: "Danao",
    quote: "Clean, peaceful, and very convenient for our kids. We felt taken care of from inquiry to checkout.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "James W.",
    location: "Australia",
    quote: "A professional stay with local warmth. Great base for seeing Santiago Bay, Lake Danao, and caves.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <main>
      <style>{`
        :root {
          --ocean: #087b92;
          --ocean-dark: #064b63;
          --lagoon: #0fb7b4;
          --sand: #f5ead8;
          --sand-deep: #e8c996;
          --sunset: #f59f7a;
          --coral: #df6f58;
          --ink: #10232f;
          --muted: #667985;
          --line: rgba(16, 35, 47, 0.12);
          --glass: rgba(255, 255, 255, 0.74);
          --shadow: 0 24px 70px rgba(7, 47, 62, 0.16);
          --soft-shadow: 0 18px 44px rgba(11, 56, 72, 0.12);
          --radius: 28px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          color: var(--ink);
          background:
            radial-gradient(circle at top left, rgba(15, 183, 180, 0.16), transparent 34rem),
            linear-gradient(180deg, #fffdf8 0%, #f7fbfb 45%, #fffaf1 100%);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        body, button, input, select { font: inherit; }
        a { color: inherit; text-decoration: none; }
        button { border: 0; cursor: pointer; }
        img { display: block; max-width: 100%; }

        .container { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .section { padding: 112px 0; position: relative; }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ocean-dark);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .section-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(280px, 0.58fr);
          gap: 40px;
          align-items: end;
          margin-bottom: 40px;
        }
        h1, h2, h3, p { margin: 0; }
        h1 {
          max-width: 820px;
          color: #fff;
          font-size: clamp(3.45rem, 8vw, 7.4rem);
          line-height: 0.9;
          letter-spacing: 0;
          font-weight: 800;
        }
        h2 {
          margin-top: 12px;
          font-size: clamp(2.2rem, 4vw, 4.8rem);
          line-height: 0.98;
          letter-spacing: 0;
          font-weight: 800;
        }
        h3 { font-size: 1.24rem; line-height: 1.2; letter-spacing: 0; }
        p { color: var(--muted); line-height: 1.72; }

        .nav-shell {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 80;
          transition: padding 0.35s ease, background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          padding: 18px 0;
          border-bottom: 1px solid transparent;
        }
        .nav-shell.is-scrolled,
        .nav-shell.menu-visible {
          padding: 10px 0;
          background: rgba(255, 255, 255, 0.84);
          border-color: rgba(255, 255, 255, 0.65);
          box-shadow: 0 18px 40px rgba(8, 58, 75, 0.12);
          backdrop-filter: blur(20px);
        }
        .nav {
          min-height: 62px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 28px;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          width: fit-content;
        }
        .is-scrolled .brand,
        .menu-visible .brand { color: var(--ink); }
        .brand-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #fff;
          background: linear-gradient(135deg, var(--ocean), var(--sunset));
          box-shadow: 0 12px 30px rgba(8, 123, 146, 0.32);
        }
        .brand-name { font-weight: 900; line-height: 1; letter-spacing: 0; }
        .brand-loc { margin-top: 4px; font-size: 0.74rem; color: rgba(255, 255, 255, 0.78); }
        .is-scrolled .brand-loc,
        .menu-visible .brand-loc { color: var(--muted); }
        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 7px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(18px);
        }
        .is-scrolled .nav-links,
        .menu-visible .nav-links {
          background: rgba(7, 63, 83, 0.05);
          border-color: rgba(7, 63, 83, 0.1);
        }
        .nav-link {
          padding: 11px 16px;
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 0.9rem;
          font-weight: 760;
          transition: color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        }
        .nav-link:hover { background: rgba(255, 255, 255, 0.18); transform: translateY(-1px); }
        .is-scrolled .nav-link,
        .menu-visible .nav-link { color: var(--ink); }
        .is-scrolled .nav-link:hover,
        .menu-visible .nav-link:hover { background: rgba(8, 123, 146, 0.08); }
        .nav-actions {
          justify-self: end;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 999px;
          color: #fff;
          background: linear-gradient(135deg, var(--ocean), var(--lagoon));
          box-shadow: 0 14px 30px rgba(8, 123, 146, 0.24);
          font-weight: 850;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          white-space: nowrap;
        }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 18px 44px rgba(8, 123, 146, 0.34); }
        .btn.sunset { background: linear-gradient(135deg, #f4ad6d, var(--coral)); box-shadow: 0 16px 38px rgba(223, 111, 88, 0.28); }
        .btn.ghost {
          color: #fff;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.32);
          box-shadow: none;
          backdrop-filter: blur(12px);
        }
        .btn.light {
          color: var(--ocean-dark);
          background: #fff;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }
        .menu-toggle {
          display: none;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #fff;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(12px);
        }
        .is-scrolled .menu-toggle,
        .menu-visible .menu-toggle {
          color: var(--ink);
          background: rgba(8, 123, 146, 0.08);
          border-color: rgba(8, 123, 146, 0.1);
        }
        .mobile-menu {
          display: none;
          overflow: hidden;
        }

        .hero {
          position: relative;
          min-height: 100svh;
          display: grid;
          align-items: end;
          padding: 138px 0 58px;
          color: #fff;
          isolation: isolate;
          overflow: hidden;
        }
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -3;
          background: var(--hero-image) center/cover no-repeat;
          transform: scale(1.05);
          animation: floatHero 16s ease-in-out infinite alternate;
        }
        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(4, 26, 36, 0.78), rgba(4, 26, 36, 0.38) 48%, rgba(4, 26, 36, 0.18)),
            linear-gradient(180deg, rgba(4, 26, 36, 0.28), rgba(4, 26, 36, 0.4) 70%, rgba(255, 253, 248, 1) 100%);
        }
        @keyframes floatHero {
          from { transform: scale(1.05) translate3d(0, 0, 0); }
          to { transform: scale(1.1) translate3d(-18px, -12px, 0); }
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 388px;
          gap: 44px;
          align-items: end;
        }
        .hero-copy { padding-bottom: 24px; }
        .hero-copy p {
          max-width: 650px;
          margin-top: 24px;
          color: rgba(255, 255, 255, 0.88);
          font-size: clamp(1.05rem, 2vw, 1.3rem);
        }
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }
        .hero-kpis {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 38px;
        }
        .kpi-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 15px;
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.13);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(14px);
          font-size: 0.9rem;
          font-weight: 760;
        }
        .rating-badge {
          position: absolute;
          right: 7vw;
          top: 24vh;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.76);
          color: var(--ink);
          box-shadow: var(--shadow);
          backdrop-filter: blur(20px);
          font-weight: 900;
        }
        .rating-badge svg { color: #f6a13a; fill: #f6a13a; }

        .booking-card {
          border: 1px solid rgba(255, 255, 255, 0.38);
          border-radius: 32px;
          padding: 22px;
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.22);
          color: var(--ink);
          backdrop-filter: blur(24px);
        }
        .booking-card h3 { margin-bottom: 6px; }
        .booking-card p { margin-bottom: 18px; font-size: 0.94rem; }
        .booking-grid {
          display: grid;
          gap: 12px;
        }
        .field label {
          display: block;
          margin: 0 0 7px 2px;
          color: var(--ocean-dark);
          font-size: 0.76rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .field input,
        .field select {
          width: 100%;
          min-height: 48px;
          border: 1px solid rgba(8, 75, 99, 0.16);
          border-radius: 16px;
          padding: 0 14px;
          color: var(--ink);
          background: rgba(255, 255, 255, 0.84);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .field input:focus,
        .field select:focus {
          border-color: rgba(8, 123, 146, 0.5);
          box-shadow: 0 0 0 4px rgba(15, 183, 180, 0.14);
        }

        .quick-booking {
          margin-top: -34px;
          z-index: 5;
          position: relative;
        }
        .quick-panel {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.72);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.78);
          box-shadow: var(--shadow);
          backdrop-filter: blur(22px);
        }
        .quick-panel .field input,
        .quick-panel .field select { background: #fff; }
        .quick-panel .btn { height: 100%; min-height: 68px; align-self: end; }

        .amenity-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .amenity-card {
          min-height: 222px;
          padding: 24px;
          border: 1px solid rgba(8, 75, 99, 0.08);
          border-radius: var(--radius);
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 18px 44px rgba(8, 75, 99, 0.08);
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .amenity-card:hover {
          transform: translateY(-7px);
          border-color: rgba(15, 183, 180, 0.34);
          box-shadow: 0 24px 60px rgba(8, 123, 146, 0.16);
        }
        .icon-box {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          margin-bottom: 28px;
          color: var(--ocean-dark);
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(15, 183, 180, 0.16), rgba(245, 159, 122, 0.18));
        }
        .amenity-card h3 { margin-bottom: 10px; }

        .rooms-section {
          background:
            linear-gradient(180deg, rgba(245, 234, 216, 0.42), rgba(255, 255, 255, 0.72)),
            radial-gradient(circle at 82% 10%, rgba(245, 159, 122, 0.18), transparent 24rem);
        }
        .room-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .room-card {
          overflow: hidden;
          border: 1px solid rgba(8, 75, 99, 0.1);
          border-radius: 32px;
          background: #fff;
          box-shadow: var(--soft-shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .room-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 78px rgba(8, 75, 99, 0.2);
        }
        .room-media {
          position: relative;
          height: 286px;
          overflow: hidden;
        }
        .room-media::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--room-image) center/cover no-repeat;
          transition: transform 0.55s ease;
        }
        .room-card:hover .room-media::before { transform: scale(1.08); }
        .room-tag {
          position: absolute;
          left: 18px;
          top: 18px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: 999px;
          color: var(--ink);
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(12px);
          font-size: 0.82rem;
          font-weight: 850;
        }
        .room-body { padding: 24px; }
        .room-top {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: start;
          margin-bottom: 12px;
        }
        .price {
          color: var(--ocean-dark);
          font-weight: 950;
          white-space: nowrap;
        }
        .price small { display: block; margin-top: 2px; color: var(--muted); font-size: 0.74rem; font-weight: 700; }
        .room-body p { min-height: 78px; }
        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
          color: var(--ocean-dark);
          font-weight: 900;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 44px;
          align-items: center;
        }
        .experience-copy {
          max-width: 520px;
        }
        .experience-copy h2 { margin-bottom: 20px; }
        .story-list {
          display: grid;
          gap: 16px;
          margin-top: 30px;
        }
        .story-item {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 14px;
          align-items: start;
        }
        .story-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          color: var(--coral);
          background: rgba(245, 159, 122, 0.15);
        }
        .story-item strong { display: block; margin-bottom: 4px; }
        .magazine {
          display: grid;
          grid-template-columns: 1.1fr 0.8fr;
          grid-template-rows: 270px 210px;
          gap: 18px;
        }
        .magazine-card {
          position: relative;
          overflow: hidden;
          border-radius: 32px;
          background: var(--image) center/cover no-repeat;
          box-shadow: var(--soft-shadow);
        }
        .magazine-card:first-child { grid-row: span 2; }
        .magazine-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 48%, rgba(8, 31, 40, 0.6));
        }
        .magazine-card span {
          position: absolute;
          left: 20px;
          bottom: 18px;
          z-index: 1;
          color: #fff;
          font-weight: 900;
        }

        .gallery-section {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.6), rgba(232, 201, 150, 0.18));
        }
        .masonry {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 198px;
          gap: 18px;
        }
        .gallery-tile {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          background: var(--image) center/cover no-repeat;
          box-shadow: var(--soft-shadow);
          transition: transform 0.28s ease, filter 0.28s ease;
        }
        .gallery-tile:hover { transform: translateY(-4px); filter: saturate(1.08); }
        .gallery-tile.tall { grid-row: span 2; }
        .gallery-tile.wide { grid-column: span 2; }
        .gallery-tile::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 52%, rgba(3, 27, 36, 0.64));
          opacity: 0.88;
        }
        .gallery-tile span {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          z-index: 1;
          color: #fff;
          font-weight: 900;
        }

        .reviews-wrap {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 7%, black 93%, transparent);
        }
        .review-track {
          display: flex;
          width: max-content;
          gap: 20px;
          animation: reviewScroll 26s linear infinite;
        }
        .reviews-wrap:hover .review-track { animation-play-state: paused; }
        @keyframes reviewScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .review-card {
          width: min(440px, 84vw);
          padding: 24px;
          border: 1px solid rgba(8, 75, 99, 0.09);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.82);
          box-shadow: var(--soft-shadow);
        }
        .review-stars {
          display: flex;
          gap: 4px;
          color: #f6a13a;
          margin-bottom: 18px;
        }
        .review-stars svg { fill: currentColor; }
        .review-card blockquote {
          margin: 0;
          color: var(--ink);
          line-height: 1.65;
          font-size: 1.06rem;
        }
        .reviewer {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 24px;
        }
        .reviewer img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }
        .reviewer strong { display: block; }
        .reviewer span { color: var(--muted); font-size: 0.88rem; }

        .cta-section { padding: 104px 0; }
        .cta-panel {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: center;
          padding: clamp(32px, 6vw, 70px);
          border-radius: 40px;
          color: #fff;
          background:
            linear-gradient(135deg, rgba(6, 75, 99, 0.94), rgba(8, 123, 146, 0.84)),
            var(--image) center/cover no-repeat;
          box-shadow: 0 36px 100px rgba(6, 75, 99, 0.26);
        }
        .cta-panel::after {
          content: "";
          position: absolute;
          inset: auto -15% -45% 38%;
          height: 260px;
          background: radial-gradient(circle, rgba(245, 159, 122, 0.72), transparent 64%);
        }
        .cta-panel h2 { max-width: 780px; color: #fff; }
        .cta-panel p { max-width: 630px; margin-top: 18px; color: rgba(255, 255, 255, 0.84); }
        .cta-actions {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: flex-end;
        }

        footer {
          padding: 70px 0 34px;
          background: #fffdf8;
          border-top: 1px solid rgba(8, 75, 99, 0.1);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.7fr 0.9fr 1fr;
          gap: 34px;
          align-items: start;
        }
        .footer-brand { color: var(--ink); }
        .footer-brand .brand-loc { color: var(--muted); }
        .footer-col h3 {
          margin-bottom: 16px;
          font-size: 0.96rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ocean-dark);
        }
        .footer-links {
          display: grid;
          gap: 12px;
          color: var(--muted);
        }
        .contact-line {
          display: flex;
          gap: 10px;
          align-items: center;
          color: var(--muted);
        }
        .map-frame {
          width: 100%;
          min-height: 170px;
          border: 0;
          border-radius: 24px;
          box-shadow: var(--soft-shadow);
          filter: saturate(0.92);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 44px;
          padding-top: 24px;
          border-top: 1px solid rgba(8, 75, 99, 0.1);
          color: var(--muted);
          font-size: 0.9rem;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 120;
          display: grid;
          place-items: center;
          padding: 22px;
          background: rgba(3, 20, 28, 0.82);
          backdrop-filter: blur(10px);
        }
        .lightbox-content {
          width: min(1050px, 100%);
          overflow: hidden;
          border-radius: 32px;
          background: #fff;
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.36);
        }
        .lightbox-image {
          height: min(72svh, 720px);
          background: var(--image) center/cover no-repeat;
        }
        .lightbox-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 18px 16px 22px;
        }
        .icon-btn {
          width: 44px;
          height: 44px;
          display: inline-grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(8, 123, 146, 0.09);
          color: var(--ocean-dark);
        }

        @media (max-width: 1020px) {
          .section { padding: 86px 0; }
          .section-heading,
          .hero-grid,
          .experience-grid,
          .cta-panel,
          .footer-grid { grid-template-columns: 1fr; }
          .nav { grid-template-columns: 1fr auto; }
          .nav-links { display: none; }
          .menu-toggle { display: inline-flex; }
          .mobile-menu { display: block; }
          .mobile-menu-inner {
            display: grid;
            gap: 8px;
            padding: 14px 0 4px;
          }
          .mobile-menu-inner a {
            padding: 14px 16px;
            border-radius: 18px;
            color: var(--ink);
            background: rgba(255, 255, 255, 0.7);
            font-weight: 850;
          }
          .hero { min-height: auto; padding-top: 128px; }
          .rating-badge {
            position: static;
            width: fit-content;
            margin: 24px 0 0;
          }
          .booking-card { max-width: 560px; }
          .quick-panel { grid-template-columns: repeat(2, 1fr); }
          .quick-panel .btn { grid-column: 1 / -1; }
          .amenity-grid { grid-template-columns: repeat(2, 1fr); }
          .room-grid { grid-template-columns: 1fr; }
          .room-body p { min-height: 0; }
          .magazine { grid-template-columns: 1fr 1fr; }
          .masonry { grid-template-columns: repeat(2, 1fr); }
          .cta-actions { justify-content: flex-start; }
        }

        @media (max-width: 680px) {
          .container { width: min(100% - 28px, 1180px); }
          .section { padding: 70px 0; }
          .nav-actions .btn { display: none; }
          .brand-mark { width: 38px; height: 38px; border-radius: 13px; }
          .brand-name { font-size: 0.98rem; }
          .brand-loc { font-size: 0.7rem; }
          .hero { padding: 112px 0 34px; }
          .hero-copy { padding-bottom: 0; }
          h1 { font-size: clamp(3rem, 18vw, 4.6rem); }
          h2 { font-size: clamp(2rem, 11vw, 3.1rem); }
          .hero-ctas,
          .cta-actions { flex-direction: column; align-items: stretch; }
          .btn { width: 100%; }
          .quick-booking { margin-top: 0; padding-top: 18px; }
          .quick-panel,
          .amenity-grid,
          .magazine,
          .masonry { grid-template-columns: 1fr; }
          .gallery-tile.tall,
          .gallery-tile.wide { grid-row: auto; grid-column: auto; }
          .magazine-card:first-child { grid-row: auto; min-height: 360px; }
          .room-media { height: 236px; }
          .footer-grid { gap: 28px; }
          .footer-bottom { flex-direction: column; }
        }
      `}</style>

      <header className={`nav-shell ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-visible" : ""}`}>
        <div className="container">
          <nav className="nav" aria-label="Primary navigation">
            <a className="brand" href="#top" aria-label="Camotes Breeze Inn home">
              <span className="brand-mark">
                <Waves size={22} />
              </span>
              <span>
                <span className="brand-name">Camotes Breeze Inn</span>
                <span className="brand-loc">Island Stay, Cebu</span>
              </span>
            </a>

            <div className="nav-links">
              {navLinks.map((link) => (
                <a className="nav-link" href={`#${link.toLowerCase()}`} key={link}>
                  {link}
                </a>
              ))}
            </div>

            <div className="nav-actions">
              <a className="btn sunset" href="#booking">
                Book Now <ChevronRight size={18} />
              </a>
              <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen((open) => !open)}>
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>

          <motion.div
            className="mobile-menu"
            initial={false}
            animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="mobile-menu-inner">
              {navLinks.map((link) => (
                <a href={`#${link.toLowerCase()}`} key={link} onClick={() => setMenuOpen(false)}>
                  {link}
                </a>
              ))}
              <a href="#booking" onClick={() => setMenuOpen(false)}>
                Book Now
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <section id="top" className="hero" style={{ "--hero-image": `url(${images.hero})` }}>
        <motion.div className="rating-badge" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          <Star size={18} /> 4.9 Guest Rating
        </motion.div>

        <div className="container hero-grid">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
            <span className="eyebrow">
              <MapPin size={16} /> Camotes Island, Cebu, Philippines
            </span>
            <h1>Your Perfect Island Escape in Camotes</h1>
            <p>
              A polished boutique inn experience for couples, families, barkada travelers, and weekend guests who want
              a relaxed stay with easy booking and local island assistance.
            </p>
            <div className="hero-ctas">
              <a className="btn sunset" href="#booking">
                <CalendarDays size={18} /> Book Stay
              </a>
              <a className="btn ghost" href="#rooms">
                <BedDouble size={18} /> View Rooms
              </a>
            </div>
            <div className="hero-kpis" aria-label="Inn highlights">
              <span className="kpi-pill">
                <ShieldCheck size={16} /> Verified booking support
              </span>
              <span className="kpi-pill">
                <Waves size={16} /> Near beaches and tours
              </span>
              <span className="kpi-pill">
                <Heart size={16} /> Warm local hospitality
              </span>
            </div>
          </motion.div>

          <motion.aside
            className="booking-card"
            id="booking"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.75, ease: "easeOut" }}
          >
            <h3>Plan your island stay</h3>
            <p>Send dates and guest details for fast room confirmation.</p>
            <div className="booking-grid">
              <div className="field">
                <label htmlFor="hero-checkin">Check-in</label>
                <input id="hero-checkin" type="date" />
              </div>
              <div className="field">
                <label htmlFor="hero-checkout">Check-out</label>
                <input id="hero-checkout" type="date" />
              </div>
              <div className="field">
                <label htmlFor="hero-room">Room type</label>
                <select id="hero-room" defaultValue="">
                  <option value="" disabled>
                    Choose a room
                  </option>
                  {rooms.map((room) => (
                    <option key={room.name}>{room.name}</option>
                  ))}
                </select>
              </div>
              <a className="btn sunset" href="#contact">
                Request Booking <ChevronRight size={18} />
              </a>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="quick-booking" aria-label="Quick booking panel">
        <div className="container">
          <motion.div className="quick-panel" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div className="field">
              <label htmlFor="checkin">Check-in</label>
              <input id="checkin" type="date" />
            </div>
            <div className="field">
              <label htmlFor="checkout">Check-out</label>
              <input id="checkout" type="date" />
            </div>
            <div className="field">
              <label htmlFor="guests">Guests</label>
              <select id="guests" defaultValue="2 guests">
                <option>2 guests</option>
                <option>3 to 4 guests</option>
                <option>5 to 6 guests</option>
                <option>7+ guests</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="room-type">Room type</label>
              <select id="room-type" defaultValue="Deluxe Couple Room">
                {rooms.map((room) => (
                  <option key={room.name}>{room.name}</option>
                ))}
              </select>
            </div>
            <a className="btn" href="#contact">
              Book Now
            </a>
          </motion.div>
        </div>
      </section>

      <section id="amenities" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Amenities</span>
              <h2>Premium essentials for a relaxed Camotes stay.</h2>
            </div>
            <p>
              Everything is designed to help guests arrive easily, rest well, and explore the island with confidence.
            </p>
          </div>

          <div className="amenity-grid">
            {amenities.map(([Icon, title, text], index) => (
              <motion.article
                className="amenity-card"
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.04, duration: 0.5 } } }}
              >
                <div className="icon-box">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="rooms" className="section rooms-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Featured rooms</span>
              <h2>Comfortable spaces for every island itinerary.</h2>
            </div>
            <p>
              Clear room choices, premium imagery, and practical details make booking feel simple and trustworthy.
            </p>
          </div>

          <div className="room-grid">
            {rooms.map((room) => (
              <article className="room-card" key={room.name}>
                <div className="room-media" style={{ "--room-image": `url(${room.image})` }}>
                  <span className="room-tag">
                    <Users size={15} /> {room.capacity}
                  </span>
                </div>
                <div className="room-body">
                  <div className="room-top">
                    <h3>{room.name}</h3>
                    <span className="price">
                      {room.price}
                      <small>per night</small>
                    </span>
                  </div>
                  <p>{room.description}</p>
                  <a className="text-link" href="#contact">
                    View Details <ChevronRight size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container experience-grid">
          <motion.div className="experience-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <span className="eyebrow">Island experience</span>
            <h2>Wake up slow, explore freely, come home to calm.</h2>
            <p>
              The homepage tells a boutique resort story: sunset walks, cozy rooms, group trips, beach days, and local
              guidance that makes Camotes feel effortless for first-time visitors.
            </p>
            <div className="story-list">
              <div className="story-item">
                <span className="story-icon">
                  <Heart size={21} />
                </span>
                <p>
                  <strong>For couples</strong>
                  Quiet stays, soft mornings, and cinematic sunset moments.
                </p>
              </div>
              <div className="story-item">
                <span className="story-icon">
                  <Users size={21} />
                </span>
                <p>
                  <strong>For families and barkadas</strong>
                  Room choices and tour support that make planning easier.
                </p>
              </div>
              <div className="story-item">
                <span className="story-icon">
                  <Camera size={21} />
                </span>
                <p>
                  <strong>For weekend travelers</strong>
                  A premium home base near the beaches, lake, caves, and ferry routes.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="magazine" aria-label="Lifestyle imagery">
            <div className="magazine-card" style={{ "--image": `url(${images.sunset})` }}>
              <span>Sunset beach walks</span>
            </div>
            <div className="magazine-card" style={{ "--image": `url(${images.lifestyle})` }}>
              <span>Couple getaways</span>
            </div>
            <div className="magazine-card" style={{ "--image": `url(${images.island})` }}>
              <span>Island hopping</span>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Gallery</span>
              <h2>A visual preview designed to convert browsers into guests.</h2>
            </div>
            <p>Rounded masonry photography creates a professional resort feel while keeping the page light and modern.</p>
          </div>

          <div className="masonry">
            {gallery.map(([title, image, span]) => (
              <button
                className={`gallery-tile ${span}`}
                key={title}
                type="button"
                style={{ "--image": `url(${image})` }}
                onClick={() => setLightbox({ title, image })}
              >
                <span>{title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Guest testimonials">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Guest stories</span>
              <h2>Reviews that build instant trust.</h2>
            </div>
            <p>Elegant testimonial cards reinforce the inn as friendly, clean, responsive, and easy to book.</p>
          </div>
        </div>
        <div className="reviews-wrap">
          <div className="review-track">
            {[...testimonials, ...testimonials].map((review, index) => (
              <article className="review-card" key={`${review.name}-${index}`}>
                <div className="review-stars" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star size={16} key={starIndex} />
                  ))}
                </div>
                <blockquote>{review.quote}</blockquote>
                <div className="reviewer">
                  <img src={review.image} alt="" />
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-panel" style={{ "--image": `url(${images.hero})` }}>
            <div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.82)" }}>
                Book direct
              </span>
              <h2>Ready for Your Camotes Getaway?</h2>
              <p>
                Confirm room availability, ask about island tours, or message the inn for custom family and barkada arrangements.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn light" href="#booking">
                <CalendarDays size={18} /> Book Now
              </a>
              <a className="btn ghost" href="#contact">
                <MessageCircle size={18} /> Messenger
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a className="brand footer-brand" href="#top">
                <span className="brand-mark">
                  <Waves size={22} />
                </span>
                <span>
                  <span className="brand-name">Camotes Breeze Inn</span>
                  <span className="brand-loc">Camotes Island, Cebu</span>
                </span>
              </a>
              <p style={{ marginTop: 18 }}>
                A modern booking homepage concept for a real hospitality business in Camotes Island.
              </p>
            </div>

            <div className="footer-col">
              <h3>Quick links</h3>
              <div className="footer-links">
                {navLinks.map((link) => (
                  <a href={`#${link.toLowerCase()}`} key={link}>
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h3>Contact</h3>
              <div className="footer-links">
                <span className="contact-line">
                  <Phone size={17} /> 09XX XXX XXXX
                </span>
                <span className="contact-line">
                  <MessageCircle size={17} /> Facebook Messenger
                </span>
                <span className="contact-line">
                  <Mail size={17} /> stay@camotesbreeze.ph
                </span>
                <span className="contact-line">
                  <MapPin size={17} /> Camotes Island, Cebu
                </span>
              </div>
            </div>

            <div className="footer-col">
              <h3>Find us</h3>
              <iframe
                className="map-frame"
                title="Camotes Island map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Camotes%20Island%2C%20Cebu%2C%20Philippines&output=embed"
              />
            </div>
          </div>

          <div className="footer-bottom">
            <span>Copyright 2026 Camotes Breeze Inn. All rights reserved.</span>
            <span>Direct booking, room inquiries, and island tour assistance.</span>
          </div>
        </div>
      </footer>

      {lightbox && (
        <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="lightbox-content">
            <div className="lightbox-image" style={{ "--image": `url(${lightbox.image})` }} />
            <div className="lightbox-bar">
              <strong>{lightbox.title}</strong>
              <button className="icon-btn" type="button" aria-label="Close gallery image" onClick={() => setLightbox(null)}>
                <X size={22} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}

export default App;
