import PropTypes from "prop-types";

import HistoryItem from "./HistoryItem";
import NewKeyword from "./NewKeyword";

export default function KeywordGroup({
  groupName,
  historyGroup,
  onDragStart,
  onDrop,
}) {
  return (
    <div className="newGroup">
      <NewKeyword groupName={groupName} />
      <div className="flex justify-center items-center">
        <div
          className="text-left w-[100%] shadow-md rounded-[10px]"
          onDrop={onDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          <div className="flex justify-center items-center gap-[10px] bg-none rounded-[10px] border px-[10px] ">
            <ul className="w-full grid grid-cols-1 items-center gap-y-[15px] py-[3rem] rounded-lg">
              {historyGroup.histories.map((history, historyIdex) => {
                return (
                  <HistoryItem
                    key={historyIdex}
                    history={history}
                    onDragStart={onDragStart}
                    onDrop={onDrop}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

KeywordGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  historyGroup: PropTypes.object.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};
