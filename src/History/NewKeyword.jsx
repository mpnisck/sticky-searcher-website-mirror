import PropTypes from "prop-types";

export default function NewKeyword({ Keyword }) {
  return (
    <h3 className="text-left text-xl font-semibold py-[10px]">{Keyword}</h3>
  );
}

NewKeyword.propTypes = {
  Keyword: PropTypes.string.isRequired,
};
