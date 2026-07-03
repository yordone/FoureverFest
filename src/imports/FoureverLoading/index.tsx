import imgImageFoureverManagement from "./42a618806e20fa45c5f99dc3a2dde1ee8f68a3dc.png";

function ImageFoureverManagement() {
  return (
    <div className="h-[102.6px] relative shrink-0 w-[380px]" data-name="Image (fourever Management)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageFoureverManagement} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#fc6205] h-px left-0 rounded-[26843500px] top-0 w-[319.2px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[#fc6205] blur-[6px] left-[311.2px] opacity-70 rounded-[26843500px] size-[16px] top-[-7.5px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="bg-[#1e1e1e] h-px relative rounded-[26843500px] shrink-0 w-[380px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.2)] tracking-[2.5px] uppercase whitespace-nowrap">Memuat...</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#fc6205] text-[12px] tracking-[1px] whitespace-nowrap">84%</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[380px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-[380px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative size-full">
        <Container1 />
        <Container4 />
      </div>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[48px] items-center left-1/2 top-[calc(50%+0.3px)]" data-name="LoadingScreen">
      <ImageFoureverManagement />
      <Container />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#080808] h-[1023px] left-0 overflow-clip top-0 w-[1440px]" data-name="App">
      <p className="[word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16.5px] left-[calc(50%-96px)] text-[11px] text-[rgba(255,255,255,0.15)] top-[718.7px] tracking-[3px] uppercase whitespace-nowrap">FOUREVER MANAGEMENT</p>
      <LoadingScreen />
    </div>
  );
}

export default function FoureverLoading() {
  return (
    <div className="bg-white relative size-full" data-name="FOUREVER-LOADING">
      <App />
    </div>
  );
}