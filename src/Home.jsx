import { Link } from "react-router-dom";

import KeywordGroup from "./History/KeywordGroup";
import SearchSection from "./History/SearchSection";
import imgUrl from "./assets/input-search.png";
import NewKeywordButton from "./shared/NewKeywordButton";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-start border shadow-md rounded-2xl pb-[20px] px-[20px]">
        <SearchSection
          warningText={"warning: 최대 50개까지 저장 가능합니다."}
          iconSrc={imgUrl}
        />
        <div className="grid grid-cols-2 justify-center gap-[20px]">
          <KeywordGroup />
          <KeywordGroup />
        </div>
        <NewKeywordButton />
        <Link to="/Initial">Initial</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}
