import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function ChangeGroupName({ initialGroupName, addedGroupName }) {
  const [inputText, setInputText] = useState(initialGroupName);
  const [isChangeName, setIsChangeName] = useState(true);

  const defaultGroupName = addedGroupName[0].name;

  useEffect(() => {
    if (inputText === defaultGroupName) {
      setIsChangeName(false);
    }
  }, []);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleFixGroupName(event) {
    if (inputText.length === 0) {
      return;
    }

    if (event.key === "Enter") {
      addedGroupName[addedGroupName.length - 1].name = inputText;
      setIsChangeName(false);
    }
  }

  function handleChangeGroupName() {
    if (inputText === defaultGroupName) {
      return;
    }
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
};
