import PropTypes from "prop-types";

export default function AddGroupButton({ addGroup }) {
  function handleAddGroup() {
    addGroup("");
  }

  return (
    <>
      <button
        className="bg-[#333] col-span-2 text-[#fff] border w-[170px] h-[50px] rounded-[5px] my-[20px]"
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
