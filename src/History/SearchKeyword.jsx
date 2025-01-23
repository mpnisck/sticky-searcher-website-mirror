import PropTypes from "prop-types";

export default function SearchKeyword({ keywords, keywordsTotal }) {
  return (
    <>
      <p className="bg-[#333] text-[#fff] truncate border w-[100%] h-[40px] px-[3px] leading-[37px] text-sm text-center rounded-full">
        {keywords}
        <span className="inline text-[#333] text-xs bg-[#fff] px-[5px] py-[1px] ml-[5px] rounded-full">
          {keywordsTotal}
        </span>
      </p>
    </>
  );
}

SearchKeyword.propTypes = {
  keywords: PropTypes.string,
  keywordsTotal: PropTypes.number,
  keyword: PropTypes.string,
};
