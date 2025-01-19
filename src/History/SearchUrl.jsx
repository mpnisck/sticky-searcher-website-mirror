import PropTypes from "prop-types";

export default function SearchUrl({ title, url, time }) {
  return (
    <>
      <a
        href={title}
        className="flex items-center gap-[20px]"
        target="_blank"
      >
        <p className="w-[200px] truncate">{title}</p>
        <span className="text-[#aaa] truncate text-sm font-light">{url}</span>
      </a>
      <span className="w-[100px] text-[#aaa] text-sm">{time}</span>
    </>
  );
}

SearchUrl.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
