import PropTypes from "prop-types";

function TotalKeywordButton({ Keyword = "..." }) {
  return (
    <button className="w-[20%] truncate shadow px-[3px] rounded-[5px]">
      {Keyword}
    </button>
  );
}

export default function SearchKeyword({ keywords, keywordsTotal }) {
  return (
    <>
      <p className="bg-[#333] text-[#fff] truncate border w-[100%] h-[40px] px-[3px] leading-[37px] text-sm text-center rounded-full">
        {keywords}
        <span className="inline text-[#333] text-xs bg-[#fff] p-[3px] ml-[5px] rounded-full">
          {keywordsTotal}
        </span>
      </p>
      <TotalKeywordButton />
    </>
  );
}

SearchKeyword.propTypes = {
  keywords: PropTypes.string.isRequired,
  keywordsTotal: PropTypes.number.isRequired,
};

TotalKeywordButton.propTypes = {
  Keyword: PropTypes.string.isRequired,
};
