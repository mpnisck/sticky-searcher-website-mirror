import PropTypes from "prop-types";

import sample from "../../sample.json";
import DeleteButton from "../shared/DeleteButton";
import SearchKeyword from "./SearchKeyword";
import SearchUrl from "./SearchUrl";
import { TotalKeywordButton } from "./TotalKeywordButton";

export default function HistoryItem({ keywords, onDragStart, onDrop }) {
  const data = sample;
  let siteUrl;
  let siteName;
  for (let i = 0; i < data.length; i++) {
    siteUrl = data[i].siteTitle;
  }
  for (let i = 0; i < data.length; i++) {
    siteName = data[i].url;
  }

  return (
    <div
      className="text-left w-[100%] shadow-md rounded-[10px]"
      onDrop={onDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      <div className="flex justify-center items-center gap-[10px] bg-none rounded-[10px] border px-[10px] ">
        <ul className="w-full grid grid-cols-1 items-center gap-y-[15px] py-[3rem] rounded-lg">
          {keywords.map((keywordItem, index) => (
            <li
              key={index}
              className="w-full flex flex-row justify-evenly items-center gap-[10px]"
              draggable
              onDragStart={(event) => onDragStart(event, keywordItem)}
            >
              <label
                htmlFor="yellow-checkbox"
                className="flex justify-center items-center m-[10px]"
              >
                <input
                  id="yellow-checkbox"
                  type="checkbox"
                  className="w-[20px] h-[20px]"
                />
              </label>
              <div>
                <div className="flex justify-between items-center gap-[30px] text-center">
                  <SearchUrl
                    title={siteUrl}
                    url={siteName}
                    time={"time"}
                  />
                </div>
                <div className="flex justify-center items-center gap-[15px]">
                  <SearchKeyword
                    keywords={keywordItem}
                    keywordsTotal={keywordItem.length}
                  />
                  <TotalKeywordButton />
                  <DeleteButton />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

HistoryItem.propTypes = {
  keywords: PropTypes.array.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};
