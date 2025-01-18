import PropTypes from "prop-types";

export default function SearchKeyword({ keywords }) {
  return (
    <p className="bg-[#333] text-[#fff] border w-[25%] h-[35px] leading-[33px] text-sm text-center rounded-full">
      {keywords}
    </p>
  );
}

SearchKeyword.propTypes = {
  keywords: PropTypes.string.isRequired,
};
