import { useRef, useState } from "react";

import KeywordGroup from "./KeywordGroup";

export default function DragAndDrop() {
  const dragPosition = useRef();
  const [list, setList] = useState([
    { id: 1, name: "Keyword 1", keywords: [] },
    { id: 2, name: "Keyword 2", keywords: ["keyword1", "keyword2"] },
    { id: 3, name: "Keyword 3", keywords: ["keyword3"] },
    { id: 4, name: "Keyword 4", keywords: ["keyword4", "keyword5"] },
    {
      id: 5,
      name: "Keyword 4",
      keywords: ["keyword6", "keyword7", "keyword8"],
    },
  ]);

  const dragStart = (event, groupIndex, keyword) => {
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

    dragPosition.current = null;
    setList(newList);
  };

  return (
    <>
      {list.map((item, index) => (
        <KeywordGroup
          key={item.id}
          keyword={item.name}
          keywords={item.keywords}
          onDragStart={(event, keyword) => dragStart(event, index, keyword)}
          onDrop={(event) => drop(event, index)}
        />
      ))}
    </>
  );
}
