import imgImage10 from "./31a2132e713dfea28ff0f24d3be9218bfa6ad72f.png";
import imgImage8 from "./a1d87542f90bddcb0b3e609a293ab88f67bdb989.png";
import { imgRectangle32 } from "./svg-6oakw";

export default function ImageForrevenge({ className }: { className?: string }) {
  return (
    <div className={className || "h-[400px] relative w-[1392px]"} data-name="image-forrevenge">
      <div className="absolute inset-[0.92%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[1392px_392.638px]" style={{ backgroundImage: "linear-gradient(79.3883deg, rgb(217, 217, 217) 0%, rgb(196, 248, 255) 100%)", maskImage: `url("${imgRectangle32}")` }} />
      <div className="absolute aspect-[820/254] left-[54.09%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-753px_-116.319px] mask-size-[1392px_392.638px] right-[8.76%] top-[120px]" style={{ maskImage: `url("${imgRectangle32}")` }} data-name="image 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[403.15%] left-[-12.44%] max-w-none top-[-169.69%] w-[124.88%]" src={imgImage10} />
        </div>
      </div>
      <div className="absolute aspect-[1920/1080] left-[2.79%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-38.807px_3.681px] mask-size-[1392px_392.638px] right-[46.13%] top-0" style={{ maskImage: `url("${imgRectangle32}")` }} data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
    </div>
  );
}