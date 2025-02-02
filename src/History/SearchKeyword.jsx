import PropTypes from "prop-types";

export default function SearchKeyword({ keyword, count }) {
  return (
    <>
      <p className="bg-subPrimary1 text-subPrimary2 truncate border h-[35px] px-[10px] leading-[33px] text-xs text-center rounded-md">
        {keyword}
        <span className="inline-block text-subPrimary1 text-xs bg-subPrimary2 w-[40px] px-[5px] py-[1px] ml-[10px] rounded-full">
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
