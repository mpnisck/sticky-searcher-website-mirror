import PropTypes from "prop-types";
import { useState } from "react";

export default function NewKeywordButton({ addGroup }) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick() {
    addGroup(inputText);
    setInputText("");
  }

  return (
    <>
      <label
        htmlFor="text"
        className="w-[100%] flex justify-between items-center rounded-full"
      >
        <input
          onChange={handleChange}
          type="text"
          placeholder="키워드그룹을 생성해 주세요!"
          value={inputText}
          className="inline border w-full h-[50px] rounded-full font-normal text-sm text-[#333] px-[15px]"
        />
      </label>
      <button
        className="bg-[#333] text-[#fff] border w-[170px] h-[50px] rounded-[5px] my-[20px]"
        onClick={handleClick}
      >
        {" "}
        New Keyword +
      </button>
    </>
  );
}

NewKeywordButton.propTypes = {
  addGroup: PropTypes.string.isRequired,
};
