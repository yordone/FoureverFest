import { useState } from "react";
import { ChevronLeft, Clock, AlertTriangle, CheckCircle, Copy, Check } from "lucide-react";
import type { CartItem, PaymentMode } from "./TicketPage";

interface Props {
  cart: CartItem[];
  mode: PaymentMode;
  onBack: () => void;
  onSuccess: () => void;
}

function formatRp(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}

export function PaymentPage({ cart, mode, onBack, onSuccess }: Props) {
  const [step, setStep] = useState<"confirm" | "paying" | "success">("confirm");
  const [copied, setCopied] = useState(false);
  const [method, setMethod] = useState<"transfer" | "qris" | "ewallet">("transfer");

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const payNow = mode === "paylater" ? Math.ceil(totalPrice / 2) : totalPrice;
  const payLater = mode === "paylater" ? totalPrice - payNow : 0;

  const VIRTUAL_ACCOUNT = "8800 0612 3456 7890";
  const DEADLINE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  const handleCopy = () => {
    navigator.clipboard.writeText(VIRTUAL_ACCOUNT.replace(/\s/g, "")).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePay = () => {
    setStep("paying");
    setTimeout(() => setStep("success"), 2200);
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center px-6">
        <div className="max-w-[480px] w-full flex flex-col items-center text-center">
          <div className="bg-[rgba(252,98,5,0.1)] rounded-full w-24 h-24 flex items-center justify-center mb-6 drop-shadow-[0px_0px_30px_rgba(252,98,5,0.4)]">
            <CheckCircle size={48} className="text-[#fc6205]" />
          </div>
          <h2 className="font-['Sora',sans-serif] font-bold text-[32px] text-white mb-2">Pembayaran Berhasil!</h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] text-white/60 mb-8 leading-relaxed">
            {mode === "paylater"
              ? `Pembayaran pertama ${formatRp(payNow)} berhasil. Tiket kamu sudah dikirim ke email. Lunasi sisa ${formatRp(payLater)} sebelum ${DEADLINE.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}.`
              : `Tiket kamu sudah berhasil dibeli! Konfirmasi telah dikirim ke emailmu.`
            }
          </p>

          {/* Ticket summary */}
          <div className="bg-[#141210] border border-[#2a2520] rounded-2xl w-full p-6 mb-8">
            <div className="border-b border-[#2a2520] pb-4 mb-4">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[12px] text-[#fc6205] tracking-[3px] uppercase mb-1">Konfirmasi Tiket</p>
              <h3 className="font-['Sora',sans-serif] font-extrabold text-[20px]">FOUREVER <span className="text-[#fc6205]">FEST</span></h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/40 mt-0.5">18 Oktober 2026 · Lap. Candran, Salatiga</p>
            </div>
            {cart.map((item) => (
              <div key={item.type} className="flex justify-between items-center py-2">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[rgba(255,230,205,0.7)]">
                  {item.name} × {item.qty}
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-white">{formatRp(item.price * item.qty)}</span>
              </div>
            ))}
            <div className="border-t border-[#2a2520] pt-4 mt-2 flex justify-between">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-white/60">Total Dibayar</span>
              <span className="font-['Sora',sans-serif] font-bold text-[18px] text-[#fc6205]">{formatRp(payNow)}</span>
            </div>
          </div>

          <button
            onClick={onSuccess}
            className="bg-[#fc6205] hover:bg-[#e05500] transition drop-shadow-[0px_0px_15px_rgba(252,98,5,0.4)] w-full py-4 rounded-[14px] font-['Sora',sans-serif] font-semibold text-[16px] text-black"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  if (step === "paying") {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-[#1a1a1a]" />
            <div className="absolute inset-0 rounded-full border-4 border-t-[#fc6205] animate-spin" />
          </div>
          <div className="text-center">
            <h3 className="font-['Sora',sans-serif] font-bold text-[24px] mb-2">Memproses Pembayaran</h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white/50">Mohon tunggu sebentar...</p>
          </div>
        </div>
      </div>
    );
  }

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
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/30">Pembayaran</p>
        </div>
      </nav>

      <div className="max-w-[900px] mx-auto px-6 py-10 flex flex-col lg:flex-row gap-8">
        {/* LEFT — payment method */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-['Sora',sans-serif] font-bold text-[24px] text-white">Metode Pembayaran</h2>

          {/* Method selector */}
          <div className="flex gap-3 flex-wrap">
            {[
              { id: "transfer" as const, label: "Transfer Bank" },
              { id: "qris" as const, label: "QRIS" },
              { id: "ewallet" as const, label: "E-Wallet" },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`px-5 py-2.5 rounded-[14px] border font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14px] transition ${method === m.id ? "bg-[rgba(252,98,5,0.1)] border-[rgba(252,98,5,0.4)] text-[#fc6205]" : "bg-[#141210] border-[#2a2520] text-white/50 hover:border-[#3a3530]"}`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Transfer info */}
          {method === "transfer" && (
            <div className="bg-[#141210] border border-[#2a2520] rounded-2xl p-6 flex flex-col gap-5">
              <div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/40 uppercase tracking-[2px] mb-2">Bank Tujuan</p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-white">BCA</p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/40 mt-0.5">a.n. Fourever Management</p>
              </div>
              <div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/40 uppercase tracking-[2px] mb-2">Nomor Virtual Account</p>
                <div className="flex items-center justify-between bg-[#0d0c0b] border border-[#2a2520] rounded-[14px] px-4 py-3">
                  <span className="font-['Sora',sans-serif] font-bold text-[20px] text-[#fc6205] tracking-wider">{VIRTUAL_ACCOUNT}</span>
                  <button onClick={handleCopy} className="text-white/40 hover:text-white/70 transition ml-3">
                    {copied ? <Check size={18} className="text-[#fc6205]" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
              <div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/40 uppercase tracking-[2px] mb-2">Jumlah Transfer</p>
                <p className="font-['Sora',sans-serif] font-bold text-[28px] text-[#fc6205]">{formatRp(payNow)}</p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/30 mt-1">Pastikan jumlah transfer tepat hingga angka terakhir</p>
              </div>
              <div className="flex items-center gap-2 text-[#ffb900]">
                <Clock size={14} />
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px]">Batas waktu pembayaran: <span className="font-semibold">24 jam</span></p>
              </div>
            </div>
          )}

          {/* QRIS */}
          {method === "qris" && (
            <div className="bg-[#141210] border border-[#2a2520] rounded-2xl p-6 flex flex-col items-center gap-4">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/40 text-center">Scan QR Code di bawah menggunakan aplikasi dompet digital atau mobile banking</p>
              <div className="bg-white rounded-2xl p-4 w-48 h-48 flex items-center justify-center">
                {/* QR placeholder */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="5" y="5" width="30" height="30" fill="none" stroke="#000" strokeWidth="4"/>
                  <rect x="15" y="15" width="10" height="10" fill="#000"/>
                  <rect x="65" y="5" width="30" height="30" fill="none" stroke="#000" strokeWidth="4"/>
                  <rect x="75" y="15" width="10" height="10" fill="#000"/>
                  <rect x="5" y="65" width="30" height="30" fill="none" stroke="#000" strokeWidth="4"/>
                  <rect x="15" y="75" width="10" height="10" fill="#000"/>
                  <rect x="45" y="5" width="10" height="10" fill="#000"/>
                  <rect x="45" y="25" width="10" height="10" fill="#000"/>
                  <rect x="5" y="45" width="10" height="10" fill="#000"/>
                  <rect x="25" y="45" width="10" height="10" fill="#000"/>
                  <rect x="45" y="45" width="10" height="10" fill="#000"/>
                  <rect x="65" y="45" width="10" height="10" fill="#000"/>
                  <rect x="85" y="45" width="10" height="10" fill="#000"/>
                  <rect x="65" y="65" width="10" height="10" fill="#000"/>
                  <rect x="85" y="65" width="10" height="10" fill="#000"/>
                  <rect x="65" y="85" width="10" height="10" fill="#000"/>
                  <rect x="45" y="65" width="10" height="10" fill="#000"/>
                  <rect x="45" y="85" width="10" height="10" fill="#000"/>
                </svg>
              </div>
              <p className="font-['Sora',sans-serif] font-bold text-[24px] text-[#fc6205]">{formatRp(payNow)}</p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/30 flex items-center gap-1">
                <Clock size={12} /> Kode QR berlaku selama <span className="font-semibold text-[#ffb900]">15 menit</span>
              </p>
            </div>
          )}

          {/* E-Wallet */}
          {method === "ewallet" && (
            <div className="bg-[#141210] border border-[#2a2520] rounded-2xl p-6 flex flex-col gap-4">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/40 uppercase tracking-[2px]">Pilih E-Wallet</p>
              {["GoPay", "OVO", "Dana", "ShopeePay"].map((ew) => (
                <label key={ew} className="flex items-center justify-between bg-[#1a1714] border border-[#2a2520] rounded-[14px] px-4 py-3 cursor-pointer hover:border-[#3a3530] transition">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[15px] text-white">{ew}</span>
                  <input type="radio" name="ewallet" className="accent-[#fc6205]" />
                </label>
              ))}
              <div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/40 mb-2">Nomor Telepon</p>
                <input
                  type="tel"
                  placeholder="08xx xxxx xxxx"
                  className="w-full bg-[#0d0c0b] border border-[#2a2520] rounded-[14px] px-4 py-3 font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-[rgba(252,98,5,0.5)]"
                />
              </div>
            </div>
          )}

          {/* PayLater note */}
          {mode === "paylater" && (
            <div className="bg-[rgba(252,98,5,0.05)] border border-[rgba(252,98,5,0.4)] rounded-2xl p-5">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/40 leading-relaxed">
                Dengan memilih PayLater, kamu setuju untuk melunasi sisa{" "}
                <span className="text-[#ffe6cd] font-semibold">{formatRp(payLater)}</span> paling lambat{" "}
                <span className="font-semibold text-[#fc6205]">
                  {DEADLINE.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                . Batas waktu pembayaran akan dikirimkan ke emailmu.
              </p>
            </div>
          )}

          {/* Pay button */}
          <button
            onClick={handlePay}
            className="bg-[#fc6205] hover:bg-[#e05500] transition drop-shadow-[0px_0px_15px_rgba(252,98,5,0.4)] w-full py-4 rounded-[14px] font-['Sora',sans-serif] font-semibold text-[16px] text-black"
          >
            {mode === "paylater" ? `Bayar Sekarang ${formatRp(payNow)}` : `Bayar ${formatRp(payNow)}`}
          </button>
        </div>

        {/* RIGHT — order summary */}
        <div className="w-full lg:w-[320px] lg:sticky lg:top-[88px] lg:self-start">
          <div className="bg-[#141210] border border-[#2a2520] rounded-2xl p-6">
            <h3 className="font-['Sora',sans-serif] font-semibold text-[18px] text-[#fc6205] mb-5">Ringkasan Pesanan</h3>

            <div className="flex flex-col gap-3 mb-4">
              {cart.map((item) => (
                <div key={item.type} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-[#ffe6cd]">{item.name}</p>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] text-white/40">× {item.qty} tiket</p>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-white shrink-0">{formatRp(item.price * item.qty)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#2a2520] pt-4 flex flex-col gap-3">
              <div className="flex justify-between">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/50">Subtotal ({totalQty} tiket)</span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-white">{formatRp(totalPrice)}</span>
              </div>
              {mode === "paylater" && (
                <>
                  <div className="flex justify-between">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/50">Bayar sekarang (50%)</span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#fc6205]">{formatRp(payNow)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-white/50">Sisa (30 hari)</span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#ffb900]">{formatRp(payLater)}</span>
                  </div>
                </>
              )}
              <div className="border-t border-[#2a2520] pt-3 flex justify-between">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-white">Total Sekarang</span>
                <span className="font-['Sora',sans-serif] font-bold text-[20px] text-[#fc6205]">{formatRp(payNow)}</span>
              </div>
            </div>

            <div className="mt-5 bg-[rgba(255,185,0,0.05)] border border-[rgba(255,185,0,0.15)] rounded-[14px] p-3 flex gap-2">
              <AlertTriangle size={14} className="text-[#ffb900] shrink-0 mt-0.5" />
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-[#ffb900]/70 leading-snug">
                Tiket akan dikirimkan ke email setelah pembayaran dikonfirmasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
