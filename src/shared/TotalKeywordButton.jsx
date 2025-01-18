import PropTypes from "prop-types";

export default function TotalKeywordButton({ Keyword }) {
  return (
    <button className="w-[10%] truncate shadow px-[10px] rounded-[5px]">
      {Keyword}
    </button>
  );
}
TotalKeywordButton.propTypes = {
  Keyword: PropTypes.string.isRequired,
};
