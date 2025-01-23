import PropTypes from "prop-types";

import HistoryItem from "./HistoryItem";
import NewKeyword from "./NewKeyword";

export default function KeywordGroup({
  groupName,
  keywords,
  onDragStart,
  onDrop,
}) {
  return (
    <div className="newGroup">
      <NewKeyword keyword={groupName} />
      <div className="flex justify-center items-center">
        <HistoryItem
          groupName={groupName}
          keywords={keywords}
          onDragStart={onDragStart}
          onDrop={onDrop}
        />
      </div>
    </div>
  );
}

KeywordGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};
