import DeleteButton from "../shared/DeleteButton";
import SearchKeyword from "./SearchKeyword";
import SearchUrl from "./SearchUrl";

export default function HistoryItem() {
  return (
    <div className="text-left w-[100%] shadow-md rounded-[10px]">
      <div className="flex jusityfy-center items-center gap-[10px] bg-none rounded-[10px] border px-[10px] ">
        <label
          htmlFor="yellow-checkbox"
          className="m-[10px]"
        >
          <input
            id="yellow-checkbox"
            type="checkbox"
            className="w-[20px] h-[20px]"
          />
        </label>
        <ul className="w-full grid grid-cols-1 items-center gap-y-[15px] py-[20px] rounded-lg">
          <li className="w-full flex justify-between items-center gap-[30px]">
            <SearchUrl
              title={"사용자의 검색환경을 개선해보자 🔎"}
              url={"github.com"}
              time={"오후 19:50"}
            />
          </li>
          <li className="w-full flex gap-[15px]">
            <SearchKeyword
              keywords={"keyword 1"}
              keywordsTotal={30}
            />
            <SearchKeyword
              keywords={"keyword 2"}
              keywordsTotal={10}
            />
            <SearchKeyword
              keywords={"keyword 3 keyword 1"}
              keywordsTotal={1}
            />
          </li>
        </ul>
        <DeleteButton />
      </div>
    </div>
  );
}
