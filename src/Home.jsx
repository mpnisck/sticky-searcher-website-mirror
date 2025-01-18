import { Link } from "react-router-dom";

import KeywordGroup from "./History/KeywordGroup";
import SearchSection from "./History/SearchSection";
import NewKeywordButton from "./shared/NewKeywordButton";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-start border shadow-md rounded-2xl pb-[20px]">
        <SearchSection />
        <div className="flex justify-center gap-[20px]">
          <KeywordGroup />
          <KeywordGroup />
        </div>
        <NewKeywordButton />
        <Link to="/empty">Empty</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}
