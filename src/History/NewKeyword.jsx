import PropTypes from "prop-types";

export default function NewKeyword({ keyword }) {
  return (
    <h3 className="text-left text-xl font-semibold py-[10px]">{keyword}</h3>
  );
}

NewKeyword.propTypes = {
  keyword: PropTypes.string.isRequired,
};
