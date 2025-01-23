import PropTypes from "prop-types";

import sample from "../../sample.json";

export default function SearchUrl() {
  const options = {
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const currentDate = new Intl.DateTimeFormat("ko-KR", options).format(
    new Date(new Date().toISOString())
  );

  const data = sample;

  const siteUrl = data[4].url;
  const siteTitle = data[4].siteTitle;

  return (
    <>
      <a
        href={siteUrl}
        className="flex items-center gap-[20px]"
        target="_blank"
      >
        <p className="w-[200px] truncate">{siteTitle}</p>
        <span className="w-[150px] text-[#aaa] truncate text-sm font-light">
          {siteUrl}
        </span>
      </a>
      <span className="w-[120px] text-[#aaa] text-sm">{currentDate}</span>
    </>
  );
}

SearchUrl.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
