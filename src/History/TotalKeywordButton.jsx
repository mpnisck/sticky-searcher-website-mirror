import PropTypes from "prop-types";

export function TotalKeywordButton({ keyword = "..." }) {
  return (
    <button className="w-[25%] truncate shadow p-[5px] rounded-[5px]">
      {keyword}
    </button>
  );
}

TotalKeywordButton.propTypes = {
  keyword: PropTypes.func,
};
