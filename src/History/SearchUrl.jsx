import PropTypes from "prop-types";

export default function SearchUrl({ siteTitle, url, createdTime }) {
  const options = {
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const currentDate = new Intl.DateTimeFormat("ko-KR", options).format(
    new Date(createdTime)
  );

  return (
    <>
      <a
        href={url}
        className="flex items-center gap-[20px]"
        target="_blank"
      >
        <p className="w-[160px] truncate">{siteTitle}</p>
        <span className="w-[120px] text-[#aaa] truncate text-sm font-light">
          {url}
        </span>
      </a>
      <span className="w-[120px] text-[#aaa] text-sm">{currentDate}</span>
    </>
  );
}

SearchUrl.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  createdTime: PropTypes.string.isRequired,
};
