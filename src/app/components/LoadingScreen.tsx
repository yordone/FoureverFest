import { useEffect, useState } from "react";
import imgLogo from "../../imports/FoureverLoading/42a618806e20fa45c5f99dc3a2dde1ee8f68a3dc.png";

interface Props {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const p = Math.min(100, Math.round((current / steps) * 100));
      setProgress(p);
      if (p >= 100) {
        clearInterval(timer);
        setTimeout(onComplete, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#080808] flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center gap-10 sm:gap-12 px-6">
        {/* Logo — smaller on phone, medium on tablet, full on desktop */}
        <img
          src={imgLogo}
          alt="Fourever Management"
          className="w-[160px] sm:w-[240px] md:w-[300px] lg:w-[380px] object-contain"
        />

        {/* Progress container — scales with logo */}
        <div className="flex flex-col gap-4 w-[200px] sm:w-[280px] md:w-[340px] lg:w-[380px]">
          {/* Track */}
          <div className="relative bg-[#1e1e1e] h-px rounded-full w-full overflow-visible">
            {/* Fill */}
            <div
              className="absolute top-0 left-0 h-px bg-[#fc6205] rounded-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
            {/* Glow dot */}
            <div
              className="absolute bg-[#fc6205] blur-[6px] opacity-70 rounded-full w-4 h-4 top-[-7.5px] transition-all duration-75"
              style={{ left: `calc(${progress}% - 8px)`, minLeft: 0 }}
            />
          </div>

          {/* Labels */}
          <div className="flex items-center justify-between w-full">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[9px] sm:text-[10px] md:text-[11px] text-white/20 tracking-[2.5px] uppercase">
              Memuat...
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] sm:text-[12px] text-[#fc6205] tracking-[1px]">
              {progress}%
            </p>
          </div>
        </div>
      </div>

      <p className="absolute bottom-8 sm:bottom-10 font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[9px] sm:text-[10px] md:text-[11px] text-white/15 tracking-[3px] uppercase">
        FOUREVER MANAGEMENT
      </p>
    </div>
  );
}
