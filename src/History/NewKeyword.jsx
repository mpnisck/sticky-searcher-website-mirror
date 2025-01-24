import PropTypes from "prop-types";

export default function NewKeyword({ groupName }) {
  return (
    <h3 className="text-left text-xl font-semibold py-[10px]">{groupName}</h3>
  );
}

NewKeyword.propTypes = {
  groupName: PropTypes.string.isRequired,
};
