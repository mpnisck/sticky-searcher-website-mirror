import PropTypes from "prop-types";

import HistoryItem from "./HistoryItem";
import NewKeyword from "./NewKeyword";

export default function KeywordGroup({
  keyword,
  keywords,
  onDragStart,
  onDrop,
}) {
  return (
    <div>
      <NewKeyword keyword={keyword} />
      <div className="flex justify-center items-center">
        <HistoryItem
          keyword={keyword}
          keywords={keywords}
          onDragStart={onDragStart}
          onDrop={onDrop}
        />
      </div>
    </div>
  );
}

KeywordGroup.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};
