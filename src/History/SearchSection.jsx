import PropTypes from "prop-types";

export default function SearchSection({ warningText, iconSrc }) {
  return (
    <>
      <div className="flex justify-between my-[20px] pb-[20px] border-b">
        <em className="block text-[#d71313] py-[5px]">{warningText}</em>
        <label
          htmlFor="text"
          className="w-[50%] border flex justify-between items-center rounded-full "
        >
          <input
            id="text"
            type="text"
            placeholder="텍스트를 입력해 주세요!"
            className="w-full h-[100%] rounded-full font-normal text-sm text-[#333] px-[15px]"
          />
          <button className="w-[10%] h-[30px] flex justify-center items-center">
            <img
              src={iconSrc}
              alt="input-search.png"
              className="w-[20px]"
            />
          </button>
        </label>
      </div>
    </>
  );
}

SearchSection.propTypes = {
  warningText: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
};
