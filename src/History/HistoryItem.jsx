import PropTypes from "prop-types";

import DeleteButton from "../shared/DeleteButton";
import SearchKeyword from "./SearchKeyword";
import SearchUrl from "./SearchUrl";
import { TotalKeywordButton } from "./TotalKeywordButton";

export default function HistoryItem({ history, onDragStart }) {
  return (
    <li
      className="w-full flex flex-row justify-evenly items-center gap-[10px]"
      draggable
      onDragStart={() => onDragStart(history)}
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
            siteTitle={history.siteTitle}
            url={history.url}
            createdTime={history.createdTime}
          />
        </div>
        <div className="flex justify-center items-center gap-[15px]">
          {history.keywords.map(({ keyword, count }, index) => {
            return (
              <SearchKeyword
                key={index}
                keyword={keyword}
                count={count}
              />
            );
          })}
          <TotalKeywordButton />
          <DeleteButton />
        </div>
      </div>
    </li>
  );
}

HistoryItem.propTypes = {
  history: PropTypes.object.isRequired,
  onDragStart: PropTypes.func.isRequired,
};
