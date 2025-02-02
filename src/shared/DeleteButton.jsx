import iconUrl from "../assets/delete_icon.png";

export default function DeleteButton() {
  return (
    <button className="flex justify-center items-center hover:bg-[#eee] rounded-full text-Primary w-DelBtnW h-DelBtnH">
      <img
        src={iconUrl}
        alt="sticky-seacher-logo"
        className="w-[25px]"
      />
    </button>
  );
}
