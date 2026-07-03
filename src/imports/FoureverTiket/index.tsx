import svgPaths from "./svg-089yl7h1fo";
import imgImageFoureverFest from "./517eb9ec35088cb06aa2dda95b2a4c655f1222b0.png";
import imgImage6 from "./6e66bac3d72c7e0a19ffc30dc2e4501641f6b54f.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon />
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">Kembali</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <span className="leading-[16px]">{`FOUREVER `}</span>
          <span className="leading-[16px] text-[#fc6205]">FEST</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[17px] relative shrink-0 w-[131.575px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.3)] whitespace-nowrap">by fourever management</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[131.575px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Button />
        <Container3 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.3)] whitespace-nowrap">Pembelian Tiket</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] relative size-full">
          <Container2 />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-[rgba(8,8,8,0.95)] relative shrink-0 w-full" data-name="Navigation">
      <div aria-hidden className="absolute border-[#1a1a1a] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[0.8px] px-[24px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function ImageFoureverFest() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="Image (FOUREVER FEST)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFoureverFest} />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.7)] h-[220px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.3)] w-[1087.2px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[220px] left-0 to-[rgba(0,0,0,0)] top-[0.2px] w-[1376px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[42px] relative shrink-0 text-[#fc6205] text-[42px] whitespace-nowrap">Fourever Fest</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[25px] relative shrink-0 w-[291.613px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,230,205,0.8)] whitespace-nowrap">by Fourever Management</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute left-[28px] top-[129px] w-[291.613px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[220px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageFoureverFest />
        <Container7 />
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M4.66667 1.16667V3.5" id="Vector" stroke="var(--stroke-0, #906345)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 1.16667V3.5" id="Vector_2" stroke="var(--stroke-0, #906345)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #906345)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #906345)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#ffe6cd] text-[13px] whitespace-nowrap">18 Oktober 2026</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#1e1a17] content-stretch flex gap-[8px] items-center px-[16.8px] py-[8.8px] relative rounded-[26843500px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#2e2925] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <Icon1 />
      <Text1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p19778e80} id="Vector" stroke="var(--stroke-0, #906345)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p37b99980} id="Vector_2" stroke="var(--stroke-0, #906345)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[13px] text-white whitespace-nowrap">Lap. Candran, Salatiga</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#1e1a17] content-stretch flex gap-[8px] items-center px-[16.8px] py-[8.8px] relative rounded-[26843500px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#2e2925] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <Icon2 />
      <Text2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 top-0">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[37.1px] relative shrink-0 w-[675.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame4 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Sora:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#fc6205] text-[20px] whitespace-nowrap">About the Event</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-[675.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24.375px] relative shrink-0 text-[15px] text-[rgba(255,230,205,0.7)] w-[676px] whitespace-pre-wrap">{`FOUREVER FEST 2026 adalah festival musik eksklusif yang menghadirkan pengalaman lepas landas terbaik. Dipersembahkan oleh Fourever Management, nikmati  hari penuh penampilan artis lokal terbaik Indonesia di Lapangan Candran, Salatiga.Zona kuliner lebih dari 20 tenant, dan berbagai experience area yang tak terlupakan.`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_887)" id="Icon">
          <path d={svgPaths.p3dc49580} id="Vector" stroke="var(--stroke-0, #FC6205)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 12V9" id="Vector_2" stroke="var(--stroke-0, #FC6205)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 6H9.0075" id="Vector_3" stroke="var(--stroke-0, #FC6205)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_887">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Sora:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#fc6205] text-[20px] whitespace-nowrap">{`Syarat & Ketentuan`}</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon3 />
        <Heading1 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(252,98,5,0.6)] whitespace-nowrap">1.</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Text3 />
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,230,205,0.6)] whitespace-nowrap">Event ini hanya untuk usia 18 tahun ke atas. KTP/identitas valid wajib ditunjukkan saat masuk.</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-[13px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(252,98,5,0.6)] whitespace-nowrap">2.</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[36.75px] relative shrink-0 w-[625.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[12px] relative size-full">
        <Text4 />
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,230,205,0.6)] whitespace-nowrap">Tiket bersifat non-refundable dan tidak dapat dipindahtangankan dalam kondisi apapun.</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-[13px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(252,98,5,0.6)] whitespace-nowrap">3.</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[36.75px] relative shrink-0 w-[625.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[12px] relative size-full">
        <Text5 />
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,230,205,0.6)] whitespace-nowrap">Makanan dan minuman dari luar area festival dilarang keras dibawa masuk.</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-[13px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(252,98,5,0.6)] whitespace-nowrap">4.</p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45.5px] items-start relative shrink-0 w-full" data-name="List Item">
      <Text6 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,230,205,0.6)] w-[601px]">Penyelenggara berhak menolak masuk kepada siapapun yang dalam kondisi mabuk atau berperilaku tidak pantas.</p>
    </div>
  );
}

function ListItemMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <ListItem3 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-[13px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(252,98,5,0.6)] whitespace-nowrap">5.</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[36.75px] relative shrink-0 w-[625.6px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[12px] relative size-full">
        <Text7 />
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,230,205,0.6)] whitespace-nowrap">Tiket PayLater yang tidak dilunasi dalam 30 hari sejak pemesanan akan otomatis hangus.</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-[625.6px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <ListItemMargin />
        <ListItem4 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#141210] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#2a2520] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24.8px] relative size-full">
        <Container17 />
        <List />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-[964px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function StickyPlaceholderTicketPage() {
  return <div className="h-[910.675px] relative shrink-0 w-[380px]" data-name="Sticky placeholder – TicketPage" />;
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Sora:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#fc6205] text-[20px] whitespace-nowrap">Pilih Tiket</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#ffe6cd] text-[14px] whitespace-nowrap">Pre Sale 1</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[rgba(252,98,5,0.15)] relative rounded-[26843500px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#fc6205] text-[10px] tracking-[0.25px] whitespace-nowrap">Early Bird</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[30px] relative shrink-0 w-[175.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#fc6205] text-[20px] whitespace-nowrap">Rp 100.000</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] whitespace-nowrap">Akses penuh 2 hari festival</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[175.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(255,185,0,0.7)] whitespace-nowrap">Sisa 42 tiket</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[175.2_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container24 />
        <Paragraph5 />
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[18px] items-center left-0 top-[-1px] w-[11.238px]" data-name="Text">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#fc6205] text-[18px] text-center whitespace-nowrap">−</p>
    </div>
  );
}

function TextMargin() {
  return (
    <div className="h-[17px] relative shrink-0 w-[11.238px]" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1e1a17] opacity-30 relative rounded-[26843500px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <TextMargin />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0 w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#fc6205] text-[14px] text-center whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[18px] items-center left-0 top-[-1px] w-[11.238px]" data-name="Text">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[18px] text-black text-center whitespace-nowrap">+</p>
    </div>
  );
}

function TextMargin1() {
  return (
    <div className="h-[17px] relative shrink-0 w-[11.238px]" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fc6205] relative rounded-[26843500px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <TextMargin1 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#0d0c0b] relative rounded-[26843500px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#2a2520] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[8.8px] py-[4.8px] relative size-full">
        <Button1 />
        <Text11 />
        <Button2 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container23 />
        <Container25 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#1a1714] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#2a2520] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16.8px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#ffe6cd] text-[14px] whitespace-nowrap">Pre Sale 2</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[rgba(252,98,5,0.15)] relative rounded-[26843500px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#fc6205] text-[10px] tracking-[0.25px] whitespace-nowrap">Normal</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text13 />
        <Text14 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[30px] relative shrink-0 w-[175.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#fc6205] text-[20px] whitespace-nowrap">Rp 200.000</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] whitespace-nowrap">Akses penuh 2 hari festival</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[175.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.2)] whitespace-nowrap">Sisa 318 tiket</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[175.2_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container29 />
        <Paragraph8 />
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[18px] items-center left-0 top-[-1px] w-[11.238px]" data-name="Text">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#fc6205] text-[18px] text-center whitespace-nowrap">−</p>
    </div>
  );
}

function TextMargin2() {
  return (
    <div className="h-[17px] relative shrink-0 w-[11.238px]" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text15 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#1e1a17] opacity-30 relative rounded-[26843500px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <TextMargin2 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="relative shrink-0 w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#fc6205] text-[14px] text-center whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30px] items-center justify-center left-[0.4px] top-[-1px] w-[27px]" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 size-[12px] text-[18px] text-black text-center">
        <p className="leading-[18px]">+</p>
      </div>
    </div>
  );
}

function TextMargin3() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Text17 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#fc6205] relative rounded-[26843500px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <TextMargin3 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#0d0c0b] relative rounded-[26843500px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#2a2520] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[8.8px] py-[4.8px] relative size-full">
        <Button3 />
        <Text16 />
        <Button4 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container28 />
        <Container30 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#1a1714] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#2a2520] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16.8px] relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#ffe6cd] text-[14px] whitespace-nowrap">VIP Pass</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[rgba(252,98,5,0.15)] relative rounded-[26843500px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#fc6205] text-[10px] tracking-[0.25px] whitespace-nowrap">Eksklusif</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text18 />
        <Text19 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[30px] relative shrink-0 w-[175.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[27.5px] relative shrink-0 text-[#fc6205] text-[20px] whitespace-nowrap">Rp 500.000</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0 w-[175.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] w-[176px]">Akses VIP area + merchandise eksklusif</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[175.2px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(255,185,0,0.7)] whitespace-nowrap">Sisa 12 tiket</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[175.2_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container34 />
        <Paragraph11 />
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[18px] items-center left-0 top-[-1px] w-[11.238px]" data-name="Text">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#fc6205] text-[18px] text-center whitespace-nowrap">−</p>
    </div>
  );
}

function TextMargin4() {
  return (
    <div className="h-[17px] relative shrink-0 w-[11.238px]" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text20 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1e1a17] opacity-30 relative rounded-[26843500px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <TextMargin4 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="relative shrink-0 w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#fc6205] text-[14px] text-center whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[18px] items-center left-0 top-[-1px] w-[11.238px]" data-name="Text">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[18px] text-black text-center whitespace-nowrap">+</p>
    </div>
  );
}

function TextMargin5() {
  return (
    <div className="h-[17px] relative shrink-0 w-[11.238px]" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text22 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#fc6205] relative rounded-[26843500px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <TextMargin5 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#0d0c0b] relative rounded-[26843500px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#2a2520] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[8.8px] py-[4.8px] relative size-full">
        <Button5 />
        <Text21 />
        <Button6 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Container33 />
        <Container35 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#1a1714] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#2a2520] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16.8px] relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[330.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[20px] relative size-full">
        <Container21 />
        <Container26 />
        <Container31 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[13px] text-[rgba(255,230,205,0.6)] whitespace-nowrap">Belum ada tiket dipilih</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] font-bold leading-[32.5px] relative shrink-0 text-[#fc6205] text-[26px] tracking-[-0.65px] whitespace-nowrap">Rp 0</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-[134.163px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[20.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#2a2520] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container37 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[20px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden className="absolute border-[#3a3530] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[19.5px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] w-[299px]">{`Saya telah membaca dan menyetujui syarat & ketentuan yang berlaku.`}</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Label">
      <ContainerMargin1 />
      <Text23 />
    </div>
  );
}

function LabelMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Label />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#2a2520] h-[56px] left-0 rounded-[14px] top-[16px] w-[330.4px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Sora:SemiBold',sans-serif] font-semibold leading-[24px] left-[165.39px] text-[16px] text-[rgba(255,255,255,0.2)] text-center top-[15.6px] whitespace-nowrap">Lanjut ke Pembayaran</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button7 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#141210] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#2a2520] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24.8px] relative size-full">
        <Heading2 />
        <Container20 />
        <ContainerMargin />
        <LabelMargin />
        <Container39 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_865)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #FC6205)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #FC6205)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_865">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Sora:SemiBold',sans-serif] font-semibold leading-[22.5px] relative shrink-0 text-[15px] text-white whitespace-nowrap">Bayar Nanti (PayLater)</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon4 />
        <Text24 />
      </div>
    </div>
  );
}

function Container44() {
  return <div className="bg-black relative rounded-[26843500px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container43() {
  return (
    <div className="bg-[#fc6205] relative rounded-[26843500px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden className="absolute border-[#fc6205] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.6px] relative size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="relative shrink-0 w-[338.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-[rgba(255,230,205,0.6)] w-[339px] whitespace-pre-wrap">
          <span className="leading-[21.125px] text-[13px]">{`Bayar `}</span>
          <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21.125px] text-[#fc6205] text-[13px]">50% sekarang</span>
          <span className="leading-[21.125px] text-[13px]">{` dan lunasi sisa `}</span>
          <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21.125px] text-[#fc6205] text-[13px]">50% dalam 30 hari</span>
          <span className="leading-[21.125px] text-[13px]">{`. Tiket hanya akan  dikirimkan setelah pembayaran kedua.`}</span>
        </p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_1_860)" id="Icon">
          <path d={svgPaths.p185087f0} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M7.5 5V7.5" id="Vector_2" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M7.5 10H7.50625" id="Vector_3" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_860">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="flex-[267.8_0_0] h-[78px] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[0px] text-[rgba(255,185,0,0.9)] w-[268px]">
          <span className="leading-[19.5px] text-[12px]">Perhatian:</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` Jika sisa pembayaran tidak dilunasi dalam `}</span>
          <span className="leading-[19.5px] text-[12px]">30 hari</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` sejak tanggal pemesanan, tiket Anda akan otomatis `}</span>
          <span className="leading-[19.5px] text-[#ff6467] text-[12px]">hangus</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[19.5px] text-[12px]">{` dan pembayaran 50% pertama tidak dapat dikembalikan.`}</span>
        </p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M10.5 3.5L3.5 10.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16667" />
          <path d="M3.5 3.5L10.5 10.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-full relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[rgba(255,185,0,0.05)] h-[103.6px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,185,0,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start p-[12.8px] relative size-full">
        <IconMargin />
        <Paragraph17 />
        <Button8 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[119.6px] relative shrink-0 w-[338.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[16px] relative rounded-[inherit] size-full">
        <Container46 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[rgba(252,98,5,0.05)] relative rounded-[16px] shrink-0 w-[380px]" data-name="Container">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(252,98,5,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[20.8px] relative size-full">
        <Container41 />
        <Paragraph16 />
        <Container45 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[380px]" data-name="Container">
      <Container19 />
      <Container40 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[985px] top-[40.2px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pt-[40px] relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <StickyPlaceholderTicketPage />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[1293px] relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[1366px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[32px] py-[40px] relative size-full">
        <Container6 />
        <Frame3 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="h-[72px] relative shrink-0 w-[266px]" data-name="image 6">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] w-[320px]">Festival musik eksklusif yang menawarkan pengalaman tak terlupakan bagi setiap audiens,</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col h-[180.5px] items-start left-0 top-0 w-[531.6px]" data-name="Container">
      <Container50 />
      <ParagraphMargin />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[19.5px] relative shrink-0 text-[13px] text-white tracking-[1px] uppercase whitespace-nowrap">Navigation</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] text-center whitespace-nowrap">Home</p>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pt-[16px] relative size-full">
        <Button9 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] text-center whitespace-nowrap">Lineup</p>
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pt-[8px] relative size-full">
        <Button10 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] text-center whitespace-nowrap">Gallery</p>
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pt-[8px] relative size-full">
        <Button11 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] text-center whitespace-nowrap">Experience</p>
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pt-[8px] relative size-full">
        <Button12 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] text-center whitespace-nowrap">About</p>
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center py-[8px] relative size-full">
        <Button13 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col h-[180.5px] items-start justify-center left-[860px] top-0 w-[245.8px]" data-name="Container">
      <Paragraph18 />
      <ButtonMargin />
      <ButtonMargin1 />
      <ButtonMargin2 />
      <ButtonMargin3 />
      <ButtonMargin4 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[19.5px] relative shrink-0 text-[13px] text-white tracking-[1px] uppercase whitespace-nowrap">Event Info</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">10 Juli 2026</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[29px] relative shrink-0 w-[245.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">Salatiga</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[29px] relative shrink-0 w-[245.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">Salatiga, Jawa Tengah</p>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[37px] relative shrink-0 w-[245.8px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#fc6205] text-[14px] w-[104px]">Hubungi Kami →</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-[245.8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Paragraph20 />
        <Paragraph21 />
        <Paragraph22 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col h-[180.5px] items-start left-[1145.8px] top-0 w-[245.8px]" data-name="Container">
      <Paragraph19 />
      <Container53 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[180.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container49 />
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.2)] whitespace-nowrap">© 2026 Fourever Management. All rights reserved.</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] text-center whitespace-nowrap">Instagram</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] text-center whitespace-nowrap">Twitter</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] text-center whitespace-nowrap">TikTok</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[18px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Button14 />
        <Button15 />
        <Button16 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[24.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#1a1a1a] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Paragraph24 />
      <Container55 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[48px] relative size-full">
        <Container54 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[64px] relative size-full">
        <Container48 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#080808] h-[400.1px] relative shrink-0 w-[1440px]" data-name="Footer">
      <div aria-hidden className="absolute border-[#1a1a1a] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[0.8px] relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#080808] h-[1739px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Navigation />
        <Container5 />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col h-[1828px] items-start min-h-[775.2000122070312px] overflow-clip relative shrink-0 w-full" data-name="App">
      <Container />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1934px] items-start left-[-10px] p-[10px] top-0 w-[1460px]">
      <App />
    </div>
  );
}

export default function FoureverTiket() {
  return (
    <div className="bg-[#0a0a0a] relative size-full" data-name="FOUREVER-tiket">
      <Frame />
    </div>
  );
}