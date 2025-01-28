import PropTypes from "prop-types";
import { useState } from "react";

export default function ChangeGroupName({ defaultGroupName, changeGroupName }) {
  const [inputText, setInputText] = useState(defaultGroupName);
  const [isChangeName, setIsChangeName] = useState(true);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleFixGroupName(event) {
    if (event.key === "Enter") {
      changeGroupName[changeGroupName.length - 1].name = inputText;
      setIsChangeName(false);
    }
  }

  function handleChangeGroupName() {
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
  defaultGroupName: PropTypes.string.isRequired,
  changeGroupName: PropTypes.array.isRequired,
};
