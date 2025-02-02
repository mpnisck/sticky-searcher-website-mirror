import PropTypes from "prop-types";

import { useUserId } from "../context/userIdContext";
import { deleteHistory } from "../firebase/history";
import DeleteButton from "../shared/DeleteButton";
import SearchUrl from "./SearchUrl";
import { TotalKeywordButton } from "./TotalKeywordButton";

export default function HistoryItem({
  history,
  onDragStart,
  groupId,
  setHistoryGroups,
}) {
  const { userId } = useUserId();
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
        <DeleteButton
          onClick={() => {
            const targetHistoryId = history.id;
            deleteHistory(userId, groupId, targetHistoryId);
            setHistoryGroups((prevGroups) => {
              const updated = prevGroups.map((prevGroup) => {
                if (prevGroup.id === groupId) {
                  return {
                    ...prevGroup,
                    histories: prevGroup.histories.filter(
                      (history) => history.id !== targetHistoryId
                    ),
                  };
                } else {
                  return prevGroup;
                }
              });

              return updated;
            });
          }}
        />
      </div>
    </li>
  );
}

HistoryItem.propTypes = {
  history: PropTypes.object.isRequired,
  onDragStart: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  setHistoryGroups: PropTypes.func.isRequired,
};
