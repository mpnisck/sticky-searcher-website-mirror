import PropTypes from "prop-types";

export default function SearchKeyword({ keyword, count }) {
  return (
    <>
      <p className="bg-[#333] text-[#fff] truncate border w-[100%] h-[40px] px-[3px] leading-[37px] text-sm text-center rounded-full">
        {keyword}
        <span className="inline text-[#333] text-xs bg-[#fff] px-[5px] py-[1px] ml-[5px] rounded-full">
          {count}
        </span>
      </p>
    </>
  );
}

SearchKeyword.propTypes = {
  count: PropTypes.number,
  keyword: PropTypes.string,
};
