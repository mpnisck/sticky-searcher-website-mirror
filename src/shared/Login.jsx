import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";

import imgUrl from "../assets/sticky-seacher-logo.png";
import { app } from "../firebase/firebase";

export default function Login() {
  const auth = getAuth(app);
  const authData = async () => {
    const provider = new GoogleAuthProvider();

    const data = await signInWithPopup(auth, provider);

    const user = data.user;
    const email = user.email;
    const accessToken = user.accessToken;

    localStorage.setItem("userEmail", email);
    localStorage.setItem("accessToken", accessToken);

    const userEmail = window.localStorage.getItem("userEmail");
    const userAccessToken = window.localStorage.getItem("accessToken");

    document.write(userEmail);
    document.write(userAccessToken);
  };

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
      <button
        onClick={authData}
        className="block text-2xl w-[45%] h-[70px] leading-[70px] flex-col align-center border rounded-lg shadow"
      >
        Google Login
      </button>
    </div>
  );
}
