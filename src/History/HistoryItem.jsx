import PropTypes from "prop-types";

import DeleteButton from "../shared/DeleteButton";
import SearchUrl from "./SearchUrl";
import { TotalKeywordButton } from "./TotalKeywordButton";

export default function HistoryItem({ history, onDragStart }) {
  return (
    <li
      className="flex flex-row justify-evenly w-[100%] items-center gap-[10px]"
      draggable
      onDragStart={() => onDragStart(history)}
    >
      <div className="flex justify-center items-center gap-[20px]">
        <div>
          <div className="flex items-center gap-[30px] text-left">
            <SearchUrl
              siteTitle={history.siteTitle}
              url={history.url}
              createdTime={history.createdTime}
            />
          </div>
          <div className="flex items-center gap-[15px]">
            <TotalKeywordButton history={history} />
          </div>
        </div>
        <DeleteButton />
      </div>
    </li>
  );
}

HistoryItem.propTypes = {
  history: PropTypes.object.isRequired,
  onDragStart: PropTypes.func.isRequired,
};
