import imgUrl from "./assets/sticky-seacher-logo.png";

export default function Header() {
  return (
    <div className="flex flex-col justify-center pt-[50px]">
      <img
        src={imgUrl}
        alt="sticky-seacher-logo"
        className="block w-[10%]"
      />
      <h1 className="py-[20px] text-[2rem] text-left font-NEXON font-light text-subPrimary text-shadow-[1000]">
        Sticky Searcher
      </h1>
    </div>
  );
}
