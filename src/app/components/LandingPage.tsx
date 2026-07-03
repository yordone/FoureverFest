import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Calendar, MapPin, ChevronDown, Play, Music, Users, Clock, Star } from "lucide-react";

import imgHeroBg from "../../imports/FoureverLanding/58638305ae73cf9c99a8fa98e5879b3d6f772d7b.png";
import imgThrowback from "../../imports/FoureverLanding/517eb9ec35088cb06aa2dda95b2a4c655f1222b0.png";
import imgForRevenge from "../../imports/FoureverLanding/a1d87542f90bddcb0b3e609a293ab88f67bdb989.png";
import imgAjengFebria from "../../imports/FoureverLanding/b9f37c8de16d81f407cd3fc37c2b7de1f4272170.png";
import imgLavora from "../../imports/FoureverLanding/014d5904956dfcc274ad2ebdfb1edd3d3efa9719.png";
import imgMamanFvndyLogo from "../../imports/FoureverLanding/91124dd7f724b511e837f55053698037b88955eb.png";
import imgFestival from "../../imports/FoureverLanding/7bf8804d5d84ad084800985a5889537dd3c5ed08.png";
import imgLogo from "../../imports/FoureverLanding/6e66bac3d72c7e0a19ffc30dc2e4501641f6b54f.png";

import logoCocaCola from "../../assets/sponsors/Coca-Cola_logo.svg.webp";
import logoSampoerna from "../../assets/sponsors/LogoSampoerna.webp";

/* ─── figma lineup card backgrounds (removed) ──────────────────── */

/* ─── motion variants ─────────────────────────────────── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

/* ─── countdown hook ──────────────────────────────────── */
const TARGET = new Date("2026-10-18T08:00:00");
function useCountdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const calc = () => {
      const d = TARGET.getTime() - Date.now();
      if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(d / 86400000),
        hours: Math.floor((d % 86400000) / 3600000),
        minutes: Math.floor((d % 3600000) / 60000),
        seconds: Math.floor((d % 60000) / 1000),
      };
    };
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

/* ─── animated countdown box ─────────────────────────── */
function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col gap-1.5 items-center">
      <motion.div
        className="rounded-[10px] md:rounded-[12px] lg:rounded-[14px] size-[56px] md:size-[70px] lg:size-[88px] flex items-center justify-center overflow-hidden border border-[#1a1a1a]"
        style={{ background: "linear-gradient(rgb(26,26,26) 0%, rgba(6,6,6,0.57) 42%, rgba(0,0,0,0) 100%)" }}
        whileHover={{ borderColor: "rgba(252,98,5,0.5)", boxShadow: "0 0 20px rgba(252,98,5,0.2)" }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
            className="font-['Sora',sans-serif] font-bold text-[20px] md:text-[28px] lg:text-[36px] text-[#fc6205] leading-none"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[9px] md:text-[10px] lg:text-[11px] text-white/40 tracking-[2px] uppercase">
        {label}
      </span>
    </div>
  );
}

/* ─── section fade hook ───────────────────────────────── */
function useFade(amount = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount });
  return { ref, inView };
}

/* ─── main component ──────────────────────────────────── */
interface Props { onBuyTicket: () => void }

export function LandingPage({ onBuyTicket }: Props) {
  const { days, hours, minutes, seconds } = useCountdown();
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  /* section refs for smooth scroll */
  const lineupRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  /* inView trackers */
  const stats = useFade(0.3);
  const throwback = useFade(0.2);
  const lineup = useFade(0.1);
  const gallery = useFade(0.1);
  const experience = useFade(0.1);
  const sponsors = useFade(0.2);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = () => { setScrolled(window.scrollY > 20); setScrollY(window.scrollY); };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  /* ── render ── */
  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {/* keyframe CSS */}
      <style>{`
        @keyframes glow-pulse  { 0%,100%{box-shadow:0 0 15px rgba(252,98,5,.4)} 50%{box-shadow:0 0 30px rgba(252,98,5,.75)} }
        @keyframes bounce-soft { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        .btn-glow  { animation: glow-pulse  3s ease-in-out infinite; }
        .play-glow { animation: glow-pulse  2s ease-in-out infinite; }
        .scroll-bounce { animation: bounce-soft 2.2s ease-in-out infinite; }
      `}</style>

      {/* ═══ NAVBAR ═══════════════════════════════════════════ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? "backdrop-blur-[16px] bg-black/70 border-white/10"
            : "backdrop-blur-[6px]  bg-black/25 border-white/5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <motion.img
            src={imgLogo}
            alt="Fourever Management"
            className="h-8 object-contain cursor-pointer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          />

          {/* desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Lineup",     action: () => scrollTo(lineupRef) },
              { label: "Gallery",    action: () => scrollTo(galleryRef) },
              { label: "Experience", action: () => scrollTo(experienceRef) },
            ].map(({ label, action }) => (
              <motion.button
                key={label}
                onClick={action}
                className="relative px-4 py-2 rounded-full text-sm text-white/60 overflow-hidden"
                whileHover={{ color: "#fff", backgroundColor: "rgba(255,255,255,0.08)" }}
                transition={{ duration: 0.18 }}
              >
                {label}
              </motion.button>
            ))}
            <motion.button
              onClick={onBuyTicket}
              className="ml-3 bg-[#fc6205] px-5 py-2 rounded-full text-sm font-bold text-white"
              whileHover={{ scale: 1.06, backgroundColor: "#e05500", boxShadow: "0 0 22px rgba(252,98,5,.55)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              BELI TIKET
            </motion.button>
          </div>

          {/* hamburger */}
          <motion.button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} whileTap={{ scale: 0.9 }}>
            <div className="w-5 space-y-[5px]">
              {[
                menuOpen ? { rotate: 45, y: 7 }  : { rotate: 0, y: 0 },
                menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 },
                menuOpen ? { rotate:-45, y:-7 }  : { rotate: 0, y: 0 },
              ].map((anim, i) => (
                <motion.span key={i} className="block h-0.5 bg-white rounded-full origin-center" animate={anim} transition={{ duration: 0.25 }} />
              ))}
            </div>
          </motion.button>
        </div>

        {/* mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-black/95 overflow-hidden"
            >
              <div className="px-6 pb-5 pt-2 flex flex-col gap-1">
                {["Lineup", "Gallery", "Experience"].map((lbl, i) => (
                  <motion.button
                    key={lbl}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => scrollTo([lineupRef, galleryRef, experienceRef][i])}
                    className="text-left py-3 text-white/60 text-sm border-b border-white/5 hover:text-white transition-colors"
                  >
                    {lbl}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                  onClick={onBuyTicket}
                  className="bg-[#fc6205] mt-3 py-3 rounded-full text-sm font-bold text-white"
                >
                  BELI TIKET
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ═══ HERO ═════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* parallax bg */}
        <div
          className="absolute inset-0"
          style={{ transform: `scale(1.12) translateY(${scrollY * 0.28}px)`, willChange: "transform" }}
        >
          <img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

        {/* content — staggered entry */}
        <motion.div
          className="relative z-10 flex-1 flex flex-col justify-end pb-12 md:pb-16 pt-[100px] md:pt-[120px] px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto w-full"
          variants={stagger}
          initial="hidden"
          animate={heroReady ? "visible" : "hidden"}
        >
          {/* brand label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <motion.div
              className="h-px bg-[#fc6205]"
              initial={{ width: 0, opacity: 0 }}
              animate={heroReady ? { width: 32, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] text-xs tracking-[3px] uppercase">
              FOUREVER MANAGEMENT
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-['Arimo',sans-serif] font-bold text-white leading-none mb-1"
            style={{ fontSize: "clamp(62px, 12vw, 116px)" }}
          >
            FOUREVER
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] leading-none mb-8"
            style={{ fontSize: "clamp(62px, 12vw, 116px)" }}
          >
            FEST
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white/80 text-lg max-w-[512px] mb-6"
          >
            Bebaskan dirimu, nikmati setiap irama, dan biarkan kami mewujudkannya.
          </motion.p>

          {/* info badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            {[
              { icon: <Calendar size={14} />, text: "18 Oktober 2026" },
              { icon: <MapPin size={14} />, text: "Lap. Candran, Salatiga" },
            ].map(({ icon, text }) => (
              <motion.div
                key={text}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-[#fc6205] cursor-default"
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.09)", borderColor: "rgba(252,98,5,.4)" }}
                transition={{ type: "spring", stiffness: 380 }}
              >
                {icon}
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] text-white">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* countdown */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 md:gap-4 mb-10">
            <CountdownBox value={days}    label="Hari" />
            <span className="font-['Inter',sans-serif] font-bold text-[16px] md:text-[24px] text-[#fc6205] pb-5 md:pb-8">:</span>
            <CountdownBox value={hours}   label="Jam" />
            <span className="font-['Inter',sans-serif] font-bold text-[16px] md:text-[24px] text-[#fc6205] pb-5 md:pb-8">:</span>
            <CountdownBox value={minutes} label="Menit" />
            <span className="font-['Inter',sans-serif] font-bold text-[16px] md:text-[24px] text-[#fc6205] pb-5 md:pb-8">:</span>
            <CountdownBox value={seconds} label="Detik" />
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <motion.button
              onClick={onBuyTicket}
              className="btn-glow bg-[#fc6205] px-8 py-3.5 rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-black"
              whileHover={{ scale: 1.06, backgroundColor: "#e05500" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              Beli Tiket Sekarang
            </motion.button>
            <motion.button
              onClick={() => scrollTo(lineupRef)}
              className="border border-white/30 px-8 py-3.5 rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[16px] text-white"
              whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,.65)", backgroundColor: "rgba(255,255,255,.05)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              Lihat Lineup
            </motion.button>
          </motion.div>
        </motion.div>

        {/* scroll arrow */}
        <div className="relative z-10 flex justify-center pb-8">
          <motion.button
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
            className="scroll-bounce bg-[#fc6205] p-3 rounded-full"
            whileHover={{ scale: 1.18, boxShadow: "0 0 24px rgba(252,98,5,.7)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown size={24} className="text-white" />
          </motion.button>
        </div>
      </section>

      {/* ═══ STATS BAR ════════════════════════════════════════ */}
      <section ref={stats.ref as React.RefObject<HTMLElement>} className="bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1280px] mx-auto px-6 overflow-x-auto">
          <div className="flex min-w-max md:min-w-0 divide-x divide-[#1a1a1a]">
            {[
              { value: "8K+",  label: "Kapasitas"   },
              { value: "4",    label: "Artis Lokal"  },
              { value: "1",    label: "Stage"        },
              { value: "20+",  label: "Food Stalls"  },
              { value: "1",    label: "Hari"         },
              { value: "100%", label: "Outdoor"      },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={stats.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center py-8 px-10 md:flex-1 cursor-default group"
                whileHover={{ backgroundColor: "rgba(252,98,5,0.04)" }}
              >
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] text-[#fc6205] leading-none group-hover:scale-110 transition-transform duration-200 inline-block">
                  {s.value}
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-white/40 tracking-[1.5px] uppercase mt-1.5">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THROWBACK ════════════════════════════════════════ */}
      <section ref={throwback.ref as React.RefObject<HTMLElement>} className="bg-[#0a0a0a] border-t border-[#111] py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1536px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={throwback.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] text-[14px] tracking-[1.4px] uppercase mb-3">Throwback</p>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold mb-2" style={{ fontSize: "clamp(32px,5vw,52px)" }}>
              FOUREVER FEST <span className="text-[#fc6205]">2025</span>
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-[rgba(255,230,205,0.6)]">Lihat keseruan festival tahun lalu</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={throwback.inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-[896px] mx-auto rounded-2xl overflow-hidden border border-[#1a1a1a] relative group cursor-pointer"
            whileHover={{ borderColor: "rgba(252,98,5,0.35)" }}
          >
            <img
              src={imgThrowback}
              alt="Throwback Concert"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-400 flex items-center justify-center">
              <motion.div
                className="play-glow bg-[#fc6205] rounded-full w-20 h-20 flex items-center justify-center"
                whileHover={{ scale: 1.22 }}
                whileTap={{ scale: 0.93 }}
              >
                <Play size={24} fill="black" className="text-black ml-1" />
              </motion.div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#fc6205 50%,transparent)" }} />
          </motion.div>
        </div>
      </section>

      {/* ═══ LINEUP ═══════════════════════════════════════════ */}
      <section ref={lineupRef} className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto" ref={lineup.ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={lineup.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] text-[12px] tracking-[3px] uppercase mb-3">Lineup</p>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold mb-2" style={{ fontSize: "clamp(32px,5vw,52px)" }}>
              Artis <span className="text-[#fc6205]">2026</span>
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#ffe6cd]">18 Oktober 2026 · Lap. Candran, Salatiga</p>
          </motion.div>

          {/* day pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={lineup.inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex border border-[#fc6205] shadow-[0_0_20px_rgba(252,98,5,.4)] rounded-full px-4 py-2.5 gap-4 items-center">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] text-white">Hari 1</span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[11px] text-white/50">18 Oktober 2026</span>
            </div>
          </motion.div>

          {/* ── FOR REVENGE — Headline card ── */}
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={lineup.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-[#2a2520] mb-4 relative cursor-pointer group h-[240px] md:h-[320px] lg:h-[400px]"
            whileHover={{ borderColor: "rgba(252,98,5,.6)", boxShadow: "0 0 48px rgba(252,98,5,.22)", transition: { type: "spring", stiffness: 300, damping: 22 } }}
          >
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
              <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgb(200,215,225) 0%, rgb(150,190,210) 100%)" }} />
              <img src={imgForRevenge} alt="For Revenge" className="absolute inset-0 w-full h-full object-contain object-bottom p-4 md:p-8" style={{ mixBlendMode: "multiply" }} />
            </div>
            <div className="absolute inset-0 group-hover:opacity-75 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.45) 38%, transparent 62%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 40%)" }} />
            <div className="absolute bottom-0 inset-x-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: "linear-gradient(90deg,#fc6205,rgba(252,98,5,0))" }} />
            <div className="absolute bottom-0 left-0 p-5 md:p-7">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] text-[10px] md:text-[11px] tracking-[3px] uppercase mb-1.5 md:mb-2">ARTIST</p>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white leading-none group-hover:text-[#fc6205] transition-colors duration-300 text-[28px] md:text-[48px] lg:text-[56px]">
                FOR REVENGE
              </h3>
            </div>
          </motion.div>

          {/* ── AJENG FEBRIA + LAVORA — Mid-tier row ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

            {/* Ajeng Febria */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={lineup.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="rounded-2xl overflow-hidden border border-[#2a2520] relative cursor-pointer group h-[180px] md:h-[240px] lg:h-[280px]"
              whileHover={{ borderColor: "rgba(252,98,5,.5)", boxShadow: "0 0 36px rgba(252,98,5,.18)", transition: { type: "spring", stiffness: 300, damping: 22 } }}
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <div className="absolute inset-0" style={{ background: "linear-gradient(80deg, rgb(230,215,205) 0%, rgb(255,203,162) 100%)" }} />
                <img src={imgAjengFebria} alt="Ajeng Febria" className="absolute inset-0 w-full h-full object-contain object-bottom p-4 md:p-6 lg:p-8" style={{ mixBlendMode: "multiply" }} />
              </div>
              <div className="absolute inset-0 group-hover:opacity-75 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 42%, transparent 65%)" }} />
              <div className="absolute bottom-0 inset-x-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: "linear-gradient(90deg,#fc6205,rgba(252,98,5,0))" }} />
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] text-[10px] tracking-[3px] uppercase mb-1">ARTIST</p>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white leading-none group-hover:text-[#fc6205] transition-colors duration-300 text-[22px] md:text-[32px] lg:text-[38px]">
                  AJENG FEBRIA
                </h3>
              </div>
            </motion.div>

            {/* Lavora */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={lineup.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.54 }}
              className="rounded-2xl overflow-hidden border border-[#2a2520] relative cursor-pointer group h-[180px] md:h-[240px] lg:h-[280px]"
              whileHover={{ borderColor: "rgba(252,98,5,.5)", boxShadow: "0 0 36px rgba(252,98,5,.18)", transition: { type: "spring", stiffness: 300, damping: 22 } }}
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <div className="absolute inset-0" style={{ background: "linear-gradient(80deg, rgb(230,215,205) 0%, rgb(255,203,162) 100%)" }} />
                <img src={imgLavora} alt="Lavora" className="absolute inset-0 w-full h-full object-contain object-bottom p-4 md:p-6 lg:p-8" style={{ mixBlendMode: "multiply" }} />
              </div>
              <div className="absolute inset-0 group-hover:opacity-75 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 42%, transparent 65%)" }} />
              <div className="absolute bottom-0 inset-x-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: "linear-gradient(90deg,#fc6205,rgba(252,98,5,0))" }} />
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] text-[10px] tracking-[3px] uppercase mb-1">ARTIST</p>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white leading-none group-hover:text-[#fc6205] transition-colors duration-300 text-[22px] md:text-[32px] lg:text-[38px]">
                  LAVORA
                </h3>
              </div>
            </motion.div>
          </div>

          {/* ── MAMAN FVNDY + TBA × 2 — Support row ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

            {/* Maman Fvndy */}
            <motion.div
              initial={{ opacity: 0, y: 38 }}
              animate={lineup.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.65 }}
              className="rounded-2xl overflow-hidden border border-[#2a2520] relative cursor-pointer group h-[150px] md:h-[175px] lg:h-[200px]"
              whileHover={{ borderColor: "rgba(252,98,5,.5)", boxShadow: "0 0 28px rgba(252,98,5,.16)", transition: { type: "spring", stiffness: 300, damping: 22 } }}
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <div className="absolute inset-0 bg-[#f5f5f5]" />
                <img src={imgMamanFvndyLogo} alt="Maman Fvndy" className="absolute inset-0 w-full h-full object-contain object-center p-8 md:p-12 lg:p-16" style={{ mixBlendMode: "multiply" }} />
              </div>
              <div className="absolute inset-0 group-hover:opacity-75 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 48%, transparent 72%)" }} />
              <div className="absolute bottom-0 inset-x-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: "linear-gradient(90deg,#fc6205,rgba(252,98,5,0))" }} />
              <div className="absolute bottom-0 left-0 p-4 md:p-5">
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] text-[10px] tracking-[3px] uppercase mb-1">ARTIST</p>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white leading-none text-[20px] md:text-[26px] group-hover:text-[#fc6205] transition-colors duration-300">
                  MAMAN FVNDY
                </h3>
              </div>
            </motion.div>

            {/* TBA 1 & 2 */}
            {[0.76, 0.87].map((delay, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 38 }}
                animate={lineup.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay }}
                className="rounded-2xl border border-[#2a2520] bg-[#0d0c0b] relative flex flex-col justify-end p-4 md:p-5 overflow-hidden cursor-default group h-[150px] md:h-[175px] lg:h-[200px]"
                whileHover={{ borderColor: "rgba(252,98,5,.4)", backgroundColor: "#111", transition: { type: "spring", stiffness: 300, damping: 22 } }}
              >
                <div className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 font-['Sora',sans-serif] font-bold text-[80px] md:text-[120px] text-[#fc6205] leading-none opacity-[0.06] select-none pointer-events-none group-hover:opacity-[0.12] transition-opacity duration-300">?</div>
                <div className="absolute bottom-0 inset-x-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: "linear-gradient(90deg,#fc6205,rgba(252,98,5,0))" }} />
                <div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] text-[10px] tracking-[3px] uppercase mb-1">ARTIST</p>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#fc6205] text-[22px] md:text-[28px] leading-none">?</h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] md:text-[12px] text-white/40 mt-1">Segera Diumumkan</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <motion.button
              onClick={onBuyTicket}
              className="bg-[#fc6205] px-8 py-3.5 rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-black"
              whileHover={{ scale: 1.07, backgroundColor: "#e05500", boxShadow: "0 0 30px rgba(252,98,5,.5)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              Beli Tiket Sekarang
            </motion.button>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ══════════════════════════════════════════ */}
      <section ref={galleryRef} className="bg-[#0a0a0a] border-t border-[#111] py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto" ref={gallery.ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gallery.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#e15a08] text-[14px] tracking-[1.4px] uppercase mb-3">Gallery</p>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
              Moment Terbaik dari Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
            {/* Main large tile — 2×2 on md+, full-width on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={gallery.inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="col-span-2 md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden bg-[#111] aspect-[4/3] md:aspect-auto relative md:min-h-[320px] lg:min-h-[420px] group cursor-pointer"
              whileHover={{ scale: 1.015, transition: { type: "spring", stiffness: 200 } }}
            >
              <img src={imgThrowback} alt="Fourever Fest 2025" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/25 transition-colors duration-400" />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="bg-black/60 backdrop-blur-sm text-white text-[11px] md:text-[13px] px-3 py-1 md:py-1.5 rounded-full font-['Plus_Jakarta_Sans',sans-serif]">
                  Fourever Fest 2025
                </span>
              </div>
            </motion.div>

            {/* 4 concert photo tiles */}
            {[
              { src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", label: "Penonton Fest 2025", delay: 0.2 },
              { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", label: "Festival Crowd",      delay: 0.3 },
              { src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", label: "Stage Lights",       delay: 0.4 },
              { src: imgFestival,                                                                                                          label: "Suasana Festival",  delay: 0.5 },
            ].map(({ src, label, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={gallery.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay }}
                className="rounded-2xl overflow-hidden bg-[#111] aspect-video relative group cursor-pointer"
                whileHover={{ scale: 1.04, transition: { type: "spring", stiffness: 300, damping: 18 } }}
              >
                <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                <div
                  className="absolute bottom-0 inset-x-0 p-2 md:p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ background: "linear-gradient(to top,rgba(0,0,0,.8),transparent)" }}
                >
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] md:text-[12px] text-white/90">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE ═══════════════════════════════════════ */}
      <section ref={experienceRef} className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[1440px] mx-auto" ref={experience.ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={experience.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] text-[12px] tracking-[3px] uppercase mb-3">Experience</p>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white" style={{ fontSize: "clamp(28px,4vw,52px)" }}>
              Rasakan Pengalaman Luar Biasa
            </h2>
          </motion.div>

          {/* feature cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { icon: <Star size={24} />,  title: "Experience Zone", desc: "Duty Free Zone, Sight Experience, Food Experience, Airplane Mode Hearing & more", delay: 0.1 },
              { icon: <Music size={24} />, title: "1 Stage",          desc: "Main, Indie, Electronic, Acoustic",              delay: 0.2 },
              { icon: <Users size={24} />, title: "4 Artis",          desc: "Musisi lokal terbaik Indonesia",                 delay: 0.3 },
              { icon: <Clock size={24} />, title: "1 Hari",           desc: "18 Oktober 2026 hari penuh aksi",               delay: 0.4 },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={experience.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: card.delay }}
                className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 flex flex-col items-center text-center group cursor-default"
                whileHover={{ y: -7, borderColor: "rgba(252,98,5,.3)", boxShadow: "0 20px 40px rgba(0,0,0,.4),0 0 20px rgba(252,98,5,.1)", transition: { type: "spring", stiffness: 280, damping: 20 } }}
              >
                <motion.div
                  className="bg-[rgba(252,98,5,.1)] text-[#fc6205] rounded-full w-14 h-14 flex items-center justify-center mb-4"
                  whileHover={{ backgroundColor: "rgba(252,98,5,.22)" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div whileHover={{ rotate: [0,-12,12,0] }} transition={{ duration: 0.4 }}>
                    {card.icon}
                  </motion.div>
                </motion.div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-white mb-2 group-hover:text-[#fc6205] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/40 leading-snug">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={experience.inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative rounded-2xl overflow-hidden group"
            whileHover={{ boxShadow: "0 0 40px rgba(252,98,5,.2)" }}
          >
            <img src={imgFestival} alt="Festival" className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
            <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16">
              <div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] text-[12px] tracking-[3px] uppercase mb-2">Jangan sampai ketinggalan</p>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[36px] text-white leading-tight">
                  Tiket Tersedia<br />Sekarang
                </h3>
              </div>
              <div className="hidden md:flex gap-3">
                <motion.button
                  onClick={onBuyTicket}
                  className="bg-[#fc6205] px-8 py-4 rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-black"
                  whileHover={{ scale: 1.07, boxShadow: "0 0 30px rgba(252,98,5,.6)" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 380, damping: 18 }}
                >
                  Beli Tiket
                </motion.button>
                <motion.button
                  className="border border-white/30 px-8 py-4 rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[16px] text-white"
                  whileHover={{ borderColor: "rgba(255,255,255,.7)", backgroundColor: "rgba(255,255,255,.06)" }}
                  whileTap={{ scale: 0.96 }}
                >
                  Info Lengkap
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SPONSORS ═════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-14 md:py-20 px-4 md:px-6">
        <div className="max-w-[1440px] mx-auto" ref={sponsors.ref}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={sponsors.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-14"
          >
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fc6205] text-[11px] md:text-[12px] tracking-[3px] uppercase mb-2">
              Official Partners &amp; Sponsors
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/30">
              Didukung oleh brand-brand terkemuka
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-20">

            {/* ── Coca-Cola ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={sponsors.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 18 } }}
            >
              <div
                className="rounded-2xl flex items-center justify-center p-4 md:p-6 w-56 h-28 md:w-64 md:h-32 border border-white/10 group-hover:border-[#c0000a]/60 transition-all duration-300 select-none bg-white"
                style={{
                  boxShadow: "0 4px 28px rgba(244,0,9,0.15)",
                }}
              >
                <img src={logoCocaCola} alt="Coca-Cola" className="w-full h-full object-contain" />
              </div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] md:text-[11px] text-white/30 tracking-[1.5px] uppercase text-center">Official Beverage</p>
            </motion.div>

            {/* ── Sampoerna ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={sponsors.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 18 } }}
            >
              <div
                className="rounded-2xl flex items-center justify-center p-4 md:p-6 w-56 h-28 md:w-64 md:h-32 border border-white/10 group-hover:border-[#c8102e]/40 transition-all duration-300 select-none bg-white"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                }}
              >
                <img src={logoSampoerna} alt="Sampoerna" className="w-full h-full object-contain scale-[1.7] md:scale-[1.8]" />
              </div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] md:text-[11px] text-white/30 tracking-[1.5px] uppercase text-center">Official Sponsor</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══════════════════════════════════════════ */}
      <footer className="bg-[#080808] border-t border-[#1a1a1a] px-6 py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={imgLogo} alt="Fourever Management" className="h-16 object-contain object-left mb-4" />
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/40 max-w-xs leading-relaxed">
                Festival musik eksklusif yang menawarkan pengalaman tak terlupakan bagi setiap audiens.
              </p>
            </div>
            <div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] text-white tracking-[1px] uppercase mb-4">Navigation</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Home",       action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
                  { label: "Lineup",     action: () => scrollTo(lineupRef) },
                  { label: "Gallery",    action: () => scrollTo(galleryRef) },
                  { label: "Experience", action: () => scrollTo(experienceRef) },
                ].map(({ label, action }) => (
                  <motion.button
                    key={label}
                    onClick={action}
                    className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/40 text-left w-fit"
                    whileHover={{ color: "rgba(255,255,255,.8)", x: 4 }}
                    transition={{ type: "spring", stiffness: 380 }}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] text-white tracking-[1px] uppercase mb-4">Event Info</p>
              <div className="flex flex-col gap-2">
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/40">18 Oktober 2026</p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/40">Lapangan Candran</p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/40">Salatiga, Jawa Tengah</p>
                <motion.p
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#fc6205] cursor-pointer mt-2 w-fit"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 380 }}
                >
                  Hubungi Kami →
                </motion.p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#1a1a1a] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/20">© 2026 Fourever Management. All rights reserved.</p>
            <div className="flex gap-6">
              {["Instagram","Twitter","TikTok"].map((s) => (
                <motion.button
                  key={s}
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/30"
                  whileHover={{ color: "rgba(252,98,5,.85)", scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 380 }}
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
