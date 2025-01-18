import { Link } from "react-router";

import imgUrl from "../assets/emptyPage_search.png";

export default function Empty() {
  return (
    <Link to="/">
      <div className="emptyScreen flex flex-col h-screen shadow-lg border rounded-2xl justify-center items-center">
        <img
          src={imgUrl}
          alt="emptyPage_search.png"
          className="w-[10%]"
        />
        <p className="text-3xl font-thin py-[30px]">History를 추가해 주세요!</p>
      </div>
    </Link>
  );
}
