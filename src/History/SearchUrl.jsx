import PropTypes from "prop-types";

export default function SearchUrl({ url, urlName, time }) {
  return (
    <>
      <a
        href="#"
        className="flex items-center gap-[20px]"
      >
        <p className="w-[200px] truncate">{url}</p>
        <span className="text-[#aaa] truncate text-sm font-light">
          {urlName}
        </span>
      </a>
      <span className="w-[100px] text-[#aaa] text-sm">{time}</span>
    </>
  );
}

SearchUrl.propTypes = {
  url: PropTypes.string.isRequired,
  urlName: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
