import PropTypes from "prop-types";

import iconUrl from "../assets/delete_icon.png";

export default function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center hover:bg-[#eee] rounded-full text-Primary w-DelBtnW h-DelBtnH"
    >
      <img
        src={iconUrl}
        alt="sticky-seacher-logo"
        className="w-[25px]"
      />
    </button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
