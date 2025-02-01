import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import imgUrl from "../assets/sticky-seacher-logo.png";
import { useUserId } from "../context/userIdContext";
import { app } from "../firebase/firebase";
import { addNewUserAndDefaultGroup, getUser } from "../firebase/user";

export default function Login() {
  const { setUserId } = useUserId();
  const navigate = useNavigate();

  const auth = getAuth(app);
  const authData = async () => {
    const provider = new GoogleAuthProvider();

    const data = await signInWithPopup(auth, provider);

    const user = data.user;
    const email = user.email;
    const accessToken = user.accessToken;

    let userId = await getUser(email);
    if (!userId) {
      userId = await addNewUserAndDefaultGroup(email);
    }

    setUserId(userId);

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userAccessToken", accessToken);

    navigate("/");
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
