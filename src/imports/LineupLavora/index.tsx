import imgImage13 from "./014d5904956dfcc274ad2ebdfb1edd3d3efa9719.png";
import imgImage12 from "./4cb0585c64525cc8603f6ebf77abad8ba5418207.png";
import { imgRectangle32 } from "./svg-71nys";

export default function LineupLavora({ className }: { className?: string }) {
  return (
    <div className={className || "h-[280px] relative w-[688px]"} data-name="lineup-lavora">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[688px_280px]" style={{ backgroundImage: "linear-gradient(82.6014deg, rgb(217, 217, 217) 0%, rgb(255, 203, 162) 100%)", maskImage: `url("${imgRectangle32}")` }} />
      <div className="absolute aspect-[3245/1405] left-[-9.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[62px_0px] mask-size-[688px_280px] right-[-9.01%] top-0" style={{ maskImage: `url("${imgRectangle32}")` }} data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
      <div className="absolute aspect-[900/528] left-[31.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-216.176px_-116.63px] mask-size-[688px_280px] right-[31.36%] top-[116.63px]" style={{ maskImage: `url("${imgRectangle32}")` }} data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[170.45%] left-0 max-w-none top-[-35.23%] w-full" src={imgImage12} />
        </div>
      </div>
    </div>
  );
}