import { useState } from "react";
import { ChevronLeft, Calendar, MapPin, Info } from "lucide-react";

import imgFoureverFest from "../../imports/FoureverTiket/517eb9ec35088cb06aa2dda95b2a4c655f1222b0.png";
import imgLogo from "../../imports/FoureverTiket/6e66bac3d72c7e0a19ffc30dc2e4501641f6b54f.png";

export type PaymentMode = "now" | "paylater";

export interface CartItem {
  type: "presale1" | "presale2" | "vip";
  qty: number;
  price: number;
  name: string;
}

interface Props {
  onBack: () => void;
  onProceed: (cart: CartItem[], mode: PaymentMode) => void;
}

const TICKETS = [
  { id: "presale1" as const, name: "Pre Sale 1", badge: "Early Bird", price: 100000, desc: "Akses penuh 2 hari festival", stock: 42, highlight: false },
  { id: "presale2" as const, name: "Pre Sale 2", badge: "Normal",     price: 200000, desc: "Akses penuh 2 hari festival", stock: 318, highlight: false },
  { id: "vip"      as const, name: "VIP Pass",   badge: "Eksklusif",  price: 500000, desc: "Akses VIP area + merchandise eksklusif", stock: 12, highlight: true },
];

function formatRp(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}

function QtyControl({ value, onChange, min = 0, max = 10 }: { value: number; onChange: (v: number) => void; min?: number; max?: number }) {
  return (
    <div className="bg-[#0d0c0b] border border-[#2a2520] rounded-full flex items-center gap-2 px-2.5 py-1.5 select-none">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className={`rounded-full size-7 flex items-center justify-center font-medium text-lg text-[#fc6205] transition ${value <= min ? "bg-[#1e1a17] opacity-30 cursor-not-allowed" : "bg-[#1e1a17] hover:bg-[#2a2520]"}`}
        disabled={value <= min}
      >−</button>
      <span className="w-5 text-center font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-[#fc6205]">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        className={`rounded-full size-7 flex items-center justify-center font-medium text-lg text-black transition ${value >= max ? "bg-[#1e1a17] opacity-30 cursor-not-allowed" : "bg-[#fc6205] hover:bg-[#e05500]"}`}
        disabled={value >= max}
      >+</button>
    </div>
  );
}

export function TicketPage({ onBack, onProceed }: Props) {
  const [quantities, setQuantities] = useState<Record<string, number>>({ presale1: 0, presale2: 0, vip: 0 });
  const [payLater, setPayLater] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [showWarning, setShowWarning] = useState(true);

  const totalQty = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = TICKETS.reduce((acc, t) => acc + quantities[t.id] * t.price, 0);
  const payNow = payLater ? Math.ceil(totalPrice / 2) : totalPrice;
  const payLaterAmt = payLater ? totalPrice - payNow : 0;

  const canProceed = totalQty > 0 && agreed;

  const handleProceed = () => {
    if (!canProceed) return;
    const cart: CartItem[] = TICKETS
      .filter((t) => quantities[t.id] > 0)
      .map((t) => ({ type: t.id, qty: quantities[t.id], price: t.price, name: t.name }));
    onProceed(cart, payLater ? "paylater" : "now");
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Navbar */}
      <nav className="bg-[rgba(8,8,8,0.95)] border-b border-[#1a1a1a] sticky top-0 z-40">
        <div className="max-w-[1440px] mx-auto px-6 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={onBack} className="flex items-center gap-2 text-white/50 hover:text-white/80 transition">
              <ChevronLeft size={16} />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14px]">Kembali</span>
            </button>
            <div>
              <p className="font-['Sora',sans-serif] font-extrabold text-[16px] leading-none">
                FOUREVER <span className="text-[#fc6205]">FEST</span>
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] text-white/30 mt-0.5">by fourever management</p>
            </div>
          </div>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/30">Pembelian Tiket</p>
        </div>
      </nav>

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT — event info + T&C */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Event banner */}
            <div className="rounded-2xl overflow-hidden relative h-[220px]">
              <img src={imgFoureverFest} alt="Fourever Fest" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-7 left-7">
                <h2 className="font-['Sora',sans-serif] font-extrabold text-[42px] text-[#fc6205] leading-none">Fourever Fest</h2>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[rgba(255,230,205,0.8)] mt-1">by Fourever Management</p>
              </div>
            </div>

            {/* Date & Location */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-[#1e1a17] border border-[#2e2925] rounded-full px-4 py-2.5">
                <Calendar size={14} className="text-[#906345]" />
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#ffe6cd]">18 Oktober 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1e1a17] border border-[#2e2925] rounded-full px-4 py-2.5">
                <MapPin size={14} className="text-[#906345]" />
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[13px] text-white">Lap. Candran, Salatiga</span>
              </div>
            </div>

            {/* About event */}
            <div className="flex flex-col gap-3">
              <h3 className="font-['Sora',sans-serif] font-semibold text-[20px] text-[#fc6205]">About the Event</h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-[rgba(255,230,205,0.7)] leading-relaxed">
                FOUREVER FEST 2026 adalah festival musik eksklusif yang menghadirkan pengalaman lepas landas terbaik. Dipersembahkan oleh Fourever Management, nikmati hari penuh penampilan artis lokal terbaik Indonesia di Lapangan Candran, Salatiga. Zona kuliner lebih dari 20 tenant, dan berbagai experience area yang tak terlupakan.
              </p>
            </div>

            {/* T&C */}
            <div className="bg-[#141210] border border-[#2a2520] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info size={18} className="text-[#fc6205]" />
                <h3 className="font-['Sora',sans-serif] font-semibold text-[20px] text-[#fc6205]">Syarat & Ketentuan</h3>
              </div>
              <ol className="flex flex-col gap-3">
                {[
                  "Event ini hanya untuk usia 18 tahun ke atas. KTP/identitas valid wajib ditunjukkan saat masuk.",
                  "Tiket bersifat non-refundable dan tidak dapat dipindahtangankan dalam kondisi apapun.",
                  "Makanan dan minuman dari luar area festival dilarang keras dibawa masuk.",
                  "Penyelenggara berhak menolak masuk kepada siapapun yang dalam kondisi mabuk atau berperilaku tidak pantas.",
                  "Tiket PayLater yang tidak dilunasi dalam 30 hari sejak pemesanan akan otomatis hangus.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[rgba(252,98,5,0.6)] shrink-0">{i + 1}.</span>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[rgba(255,230,205,0.6)] leading-relaxed">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT — ticket selection (sticky) */}
          <div className="w-full lg:w-[380px] lg:sticky lg:top-[88px] lg:self-start flex flex-col gap-4">
            {/* Ticket picker */}
            <div className="bg-[#141210] border border-[#2a2520] rounded-2xl p-6">
              <h3 className="font-['Sora',sans-serif] font-semibold text-[20px] text-[#fc6205] mb-5">Pilih Tiket</h3>

              <div className="flex flex-col gap-4">
                {TICKETS.map((t) => (
                  <div
                    key={t.id}
                    className={`rounded-[14px] p-4 border transition ${t.highlight && quantities[t.id] > 0 ? "bg-[rgba(252,98,5,0.06)] border-[rgba(252,98,5,0.3)]" : "bg-[#1a1714] border-[#2a2520]"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-[#ffe6cd]">{t.name}</span>
                          <span className="bg-[rgba(252,98,5,0.15)] text-[#fc6205] text-[10px] font-medium px-2 py-0.5 rounded-full tracking-[0.25px]">{t.badge}</span>
                        </div>
                        <p className="font-['Sora',sans-serif] font-bold text-[20px] text-[#fc6205] leading-tight">{formatRp(t.price)}</p>
                        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/30 mt-0.5">{t.desc}</p>
                        <p className={`font-['Plus_Jakarta_Sans',sans-serif] text-[11px] mt-1 ${t.stock <= 50 ? "text-[rgba(255,185,0,0.7)]" : "text-white/20"}`}>
                          Sisa {t.stock} tiket
                        </p>
                      </div>
                      <QtyControl
                        value={quantities[t.id]}
                        onChange={(v) => setQuantities((q) => ({ ...q, [t.id]: v }))}
                        max={Math.min(10, t.stock)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Order summary */}
              <div className="border-t border-[#2a2520] mt-5 pt-5 flex items-center justify-between">
                <div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[rgba(255,230,205,0.6)]">
                    {totalQty > 0 ? `${totalQty} tiket dipilih` : "Belum ada tiket dipilih"}
                  </p>
                  <p className="font-['Sora',sans-serif] font-bold text-[26px] text-[#fc6205] tracking-tight leading-tight">
                    {formatRp(totalPrice)}
                  </p>
                </div>
                {payLater && totalPrice > 0 && (
                  <div className="text-right">
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] text-white/40 uppercase tracking-[0.25px]">Bayar Sekarang</p>
                    <p className="font-['Sora',sans-serif] font-bold text-[18px] text-[#ffb900]">{formatRp(payNow)}</p>
                  </div>
                )}
              </div>

              {/* T&C checkbox */}
              <div className="mt-4">
                <label className="flex gap-3 items-start cursor-pointer">
                  <div
                    onClick={() => setAgreed(!agreed)}
                    className={`mt-0.5 shrink-0 w-5 h-5 rounded-[6px] border-2 flex items-center justify-center transition ${agreed ? "bg-[#fc6205] border-[#fc6205]" : "border-[#3a3530]"}`}
                  >
                    {agreed && <svg width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1 4.5L4.5 8L11 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[12px] text-white/40 leading-snug">
                    Saya telah membaca dan menyetujui syarat &amp; ketentuan yang berlaku.
                  </p>
                </label>
              </div>

              {/* Proceed button */}
              <button
                onClick={handleProceed}
                disabled={!canProceed}
                className={`w-full mt-4 rounded-[14px] h-14 font-['Sora',sans-serif] font-semibold text-[16px] transition ${canProceed ? "bg-[#fc6205] hover:bg-[#e05500] text-black drop-shadow-[0px_0px_15px_rgba(252,98,5,0.4)]" : "bg-[#2a2520] text-white/20 cursor-not-allowed"}`}
              >
                Lanjut ke Pembayaran
              </button>
            </div>

            {/* Pay Later option */}
            <div
              className="bg-[rgba(252,98,5,0.05)] border border-[rgba(252,98,5,0.4)] rounded-2xl p-5 cursor-pointer"
              onClick={() => setPayLater(!payLater)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="6.5" stroke="#FC6205" strokeWidth="1.33333"/>
                    <path d="M8 4V8L10.6667 9.33333" stroke="#FC6205" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-['Sora',sans-serif] font-semibold text-[15px] text-white">Bayar Nanti (PayLater)</span>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${payLater ? "bg-[#fc6205] border-[#fc6205]" : "border-[#3a3530]"}`}>
                  {payLater && <div className="w-2 h-2 rounded-full bg-black" />}
                </div>
              </div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[rgba(255,230,205,0.6)] leading-snug mb-3">
                Bayar <span className="font-semibold text-[#fc6205]">50% sekarang</span> dan lunasi sisa{" "}
                <span className="font-semibold text-[#fc6205]">50% dalam 30 hari</span>. Tiket langsung dikirimkan setelah pembayaran pertama berhasil.
              </p>

              {totalPrice > 0 && (
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-[#0d0c0b] border border-[#2a2520] rounded-[14px] p-3 text-center">
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] text-white/30 uppercase tracking-[0.25px]">Bayar Sekarang</p>
                    <p className="font-['Sora',sans-serif] font-bold text-[16px] text-[#fc6205] mt-1">{formatRp(payNow)}</p>
                  </div>
                  <div className="bg-[#0d0c0b] border border-[#2a2520] rounded-[14px] p-3 text-center">
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] text-white/30 uppercase tracking-[0.25px]">Sisa Bayar</p>
                    <p className="font-['Sora',sans-serif] font-bold text-[16px] text-white/60 mt-1">{formatRp(payLaterAmt)}</p>
                  </div>
                </div>
              )}

              {/* Warning */}
              {showWarning && (
                <div className="bg-[rgba(255,185,0,0.05)] border border-[rgba(255,185,0,0.2)] rounded-[14px] p-3 flex gap-2 items-start">
                  <svg className="shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M7.5 1.25L13.75 12.5H1.25L7.5 1.25Z" stroke="#FFB900" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 5V7.5" stroke="#FFB900" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 10H7.50625" stroke="#FFB900" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-[rgba(255,185,0,0.9)] leading-snug flex-1">
                    <span className="font-semibold">Perhatian:</span> Jika sisa pembayaran tidak dilunasi dalam{" "}
                    <span className="font-semibold">30 hari</span> sejak tanggal pemesanan, tiket Anda akan otomatis{" "}
                    <span className="text-[#ff6467]">hangus</span> dan pembayaran 50% pertama tidak dapat dikembalikan.
                  </p>
                  <button onClick={(e) => { e.stopPropagation(); setShowWarning(false); }} className="text-white/20 hover:text-white/40 shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="white" strokeOpacity="0.2" strokeWidth="1.16667" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
