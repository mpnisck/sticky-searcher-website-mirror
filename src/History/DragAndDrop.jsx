import { useRef, useState } from "react";

import NewKeywordButton from "../shared/NewKeywordButton";
import KeywordGroup from "./KeywordGroup";

export default function DragAndDrop() {
  const dragPosition = useRef();
  const [list, setList] = useState([
    { id: 0, name: "New Keyword Group", keywords: ["key", "key2"] },
  ]);

  const startDrag = (event, groupIndex, keyword) => {
    dragPosition.current = { groupIndex, keyword };
  };

  const drop = (event, groupIndex) => {
    event.preventDefault();

    const newList = [...list];
    const { groupIndex: dragGroupIndex, keyword } = dragPosition.current;

    newList[dragGroupIndex].keywords = newList[dragGroupIndex].keywords.filter(
      (notKeyword) => notKeyword !== keyword
    );
    newList[groupIndex].keywords.push(keyword);

    // 키워드의 카운트 -> 각각 정보를 map돎면서 순회
    dragPosition.current = null;
    setList(newList);
  };
  const newKeywordGroup = (groupName) => {
    const newGroupId = list.length + 1;

    if (groupName.trim() === false) {
      return null;
    }

    const newGroup = {
      id: newGroupId,
      name: groupName.trim(),
      keywords: [],
    };

    setList((prevList) => [...prevList, newGroup]);
  };

  return (
    <>
      <NewKeywordButton addGroup={newKeywordGroup} />
      {list.map((item, index) => (
        <KeywordGroup
          key={item.id}
          groupName={item.name}
          keywords={item.keywords}
          onDragStart={(event, keyword) => startDrag(event, index, keyword)}
          onDrop={(event) => drop(event, index)}
        />
      ))}
    </>
  );
}
