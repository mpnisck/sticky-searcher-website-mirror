import HistoryItem from "./HistoryItem";
import NewKeyword from "./NewKeyword";

export default function KeywordGroup() {
  return (
    <div>
      <NewKeyword Keyword="New Keyword Group" />
      <div className="flex justify-center items-center">
        <HistoryItem />
      </div>
    </div>
  );
}
