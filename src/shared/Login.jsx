import { Link } from "react-router-dom";

import imgUrl from "../assets/sticky-seacher-logo.png";

export default function Login() {
  return (
    <div className="border rounded-[20px] h-screen flex flex-col justify-center items-center shadow">
      <img
        src={imgUrl}
        alt="sticky-seacher-logo"
        className="block w-[25%]"
      />
      <h1 className="text-5xl font-thin mt-[30px] mb-[80px]">
        Sticky Searcher
      </h1>
      <Link
        to="/"
        className="block text-2xl w-[45%] h-[70px] leading-[70px] flex-col align-center border rounded-lg shadow"
      >
        Google Login
      </Link>
    </div>
  );
}
