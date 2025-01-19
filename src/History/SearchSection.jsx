import PropTypes from "prop-types";

export default function SearchSection({ warningText, iconSrc }) {
  return (
    <div className="flex justify-between my-[20px] pb-[20px] border-b">
      <em className="block text-[#d71313] py-[5px]">{warningText}</em>
      <input
        type="text"
        placeholder="텍스트를 입력해 주세요!"
        className="w-[45%] border rounded-full text-sm text-[#333] px-[15px] relative"
      />
      <button className="w-[30px] h-[33px] absolute right-[85px]">
        <img
          src={iconSrc}
          alt="input-search.png"
          className="w-[20px]"
        />
      </button>
    </div>
  );
}

SearchSection.propTypes = {
  warningText: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
};
