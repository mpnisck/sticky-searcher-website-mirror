import { useEffect, useRef, useState } from "react";

import { updateGroupsAndHistoriesAfterDragAndDrop } from "../firebase/afterDragAndDrop";
import { getHistoryGroups } from "../firebase/getHistoryGroups";
import { addEmptyGroup } from "../firebase/group";
import AddGroupButton from "../shared/AddGroupButton";
import KeywordGroup from "./KeywordGroup";

export const USER_ID = "ytednQbbXqiHSzbVK6Qw";

export default function DragAndDrop() {
  const dragPosition = useRef();
  const [historyGroups, setHistoryGroups] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function initHistoryGroups() {
      const groups = await getHistoryGroups(USER_ID);
      setHistoryGroups(groups);
    }

    if (!ignore) {
      initHistoryGroups();
    }

    return () => {
      ignore = true;
    };
  }, []);

  const startDrag = (historyGroupIndex, history) => {
    dragPosition.current = {
      historyGroupIndex: historyGroupIndex,
      history: history,
    };
  };

  async function drop(event, nextHistoryGroupIndex, historyGroups) {
    event.preventDefault();

    const newHistoryGroups = [...historyGroups];
    const { historyGroupIndex: prevHistoryGroupIndex, history: targetHistory } =
      dragPosition.current;

    newHistoryGroups[prevHistoryGroupIndex].histories = newHistoryGroups[
      prevHistoryGroupIndex
    ].histories.filter((history) => history !== targetHistory);

    newHistoryGroups[nextHistoryGroupIndex].histories.push(targetHistory);

    dragPosition.current = null;

    await updateGroupsAndHistoriesAfterDragAndDrop(USER_ID, newHistoryGroups);

    setHistoryGroups(newHistoryGroups);
  }

  async function createHistoryGroup(groupName) {
    const newGroupId = await addEmptyGroup(USER_ID, groupName);

    const newGroup = {
      id: newGroupId,
      name: groupName,
      histories: [],
    };

    setHistoryGroups((prev) => [...prev, newGroup]);
  }

  return (
    <>
      <AddGroupButton addGroup={createHistoryGroup} />
      {historyGroups.map((historyGroup, historyGroupIndex) => (
        <KeywordGroup
          key={historyGroup.id}
          addedGroupName={historyGroups}
          setAddedGroupName={setHistoryGroups}
          groupName={historyGroup.name}
          historyGroup={historyGroup}
          onDragStart={(history) => startDrag(historyGroupIndex, history)}
          onDrop={(event) => drop(event, historyGroupIndex, historyGroups)}
        />
      ))}
    </>
  );
}
