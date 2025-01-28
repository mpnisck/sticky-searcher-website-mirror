import { useRef, useState } from "react";

import sample from "../../sample.json";
import AddGroupButton from "../shared/AddGroupButton";
import KeywordGroup from "./KeywordGroup";

export default function DragAndDrop() {
  const dragPosition = useRef();
  const [historyGroups, setHistoryGroups] = useState([
    {
      id: 0,
      name: "New Keyword Group(default)",
      histories: sample,
    },
  ]);

  const startDrag = (historyGroupIndex, history) => {
    dragPosition.current = {
      historyGroupIndex: historyGroupIndex,
      history: history,
    };
  };

  const drop = (event, nextHistoryGroupIndex, historyGroups) => {
    event.preventDefault();

    const newHistoryGroups = [...historyGroups];
    const { historyGroupIndex: prevHistoryGroupIndex, history: targetHistory } =
      dragPosition.current;

    newHistoryGroups[prevHistoryGroupIndex].histories = newHistoryGroups[
      prevHistoryGroupIndex
    ].histories.filter((history) => history !== targetHistory);

    newHistoryGroups[nextHistoryGroupIndex].histories.push(targetHistory);

    dragPosition.current = null;
    setHistoryGroups(newHistoryGroups);
  };

  const createHistoryGroup = (groupName) => {
    const newGroupId = historyGroups.length + 1;

    if (groupName.trim() === false) {
      return null;
    }

    const newGroup = {
      id: newGroupId,
      name: groupName.trim(),
      histories: [],
    };

    setHistoryGroups((prev) => [...prev, newGroup]);
  };

  return (
    <>
      <AddGroupButton addGroup={createHistoryGroup} />
      {historyGroups.map((historyGroup, historyGroupIndex) => (
        <KeywordGroup
          key={historyGroup.id}
          changeGroupName={historyGroups}
          groupName={historyGroup.name}
          historyGroup={historyGroup}
          onDragStart={(history) => startDrag(historyGroupIndex, history)}
          onDrop={(event) => drop(event, historyGroupIndex, historyGroups)}
        />
      ))}
    </>
  );
}
