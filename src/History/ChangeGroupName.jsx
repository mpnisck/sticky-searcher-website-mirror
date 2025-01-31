import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { updateGroupName } from "../firebase/group";
import { USER_ID } from "./DragAndDrop";

export default function ChangeGroupName({
  initialGroupName,
  addedGroupName,
  setAddedGroupName,
}) {
  const [inputText, setInputText] = useState(initialGroupName);
  const [isChangeName, setIsChangeName] = useState(true);
  const [prevGroupName, setPrevGroupName] = useState("");

  const defaultGroupName = addedGroupName[0].name;
  const copiedPrevGroupName = [...addedGroupName];
  const findGroupIndex = copiedPrevGroupName.findIndex(
    (group) => group.name === prevGroupName
  );

  useEffect(() => {
    if (inputText === defaultGroupName) {
      setIsChangeName(false);
    }
  }, []);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  async function handleFixGroupName(event) {
    if (inputText.length === 0) {
      return;
    }

    if (event.key === "Enter") {
      copiedPrevGroupName[findGroupIndex].name = inputText;

      const groupId = copiedPrevGroupName[findGroupIndex].id;
      const groupName = copiedPrevGroupName[findGroupIndex].name;

      await updateGroupName(USER_ID, groupId, groupName);

      setAddedGroupName(copiedPrevGroupName);
      setIsChangeName(false);
    }
  }

  function handleChangeGroupName(event) {
    if (inputText === defaultGroupName) {
      return;
    }
    setPrevGroupName(event.target.innerText);
    setIsChangeName(true);
  }

  return (
    <>
      {isChangeName ? (
        <input
          type="text"
          placeholder="그룹명을 입력해주세요."
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleFixGroupName}
          className="input input-ghost w-full"
        />
      ) : (
        <div
          onClick={handleChangeGroupName}
          className="flex"
        >
          {inputText}
        </div>
      )}
    </>
  );
}

ChangeGroupName.propTypes = {
  initialGroupName: PropTypes.string.isRequired,
  addedGroupName: PropTypes.array.isRequired,
  setAddedGroupName: PropTypes.func.isRequired,
};
