import PropTypes from "prop-types";

import ChangeGroupName from "./ChangeGroupName";
import HistoryItem from "./HistoryItem";

export default function KeywordGroup({
  addedGroupName,
  groupName,
  historyGroup,
  onDragStart,
  onDrop,
}) {
  return (
    <div className="newGroup">
      <ChangeGroupName
        initialGroupName={groupName}
        addedGroupName={addedGroupName}
      />
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
  addedGroupName: PropTypes.array.isRequired,
  groupName: PropTypes.string.isRequired,
  historyGroup: PropTypes.object.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};
