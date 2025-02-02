import PropTypes from "prop-types";

export default function AddGroupButton({ addGroup }) {
  function handleAddGroup() {
    addGroup("");
  }

  return (
    <>
      <button
        className="col-span-2 w-btnW btn rounded-full bg-primary text-subPrimary2"
        onClick={handleAddGroup}
      >
        Add Group +
      </button>
    </>
  );
}

AddGroupButton.propTypes = {
  addGroup: PropTypes.func.isRequired,
};
