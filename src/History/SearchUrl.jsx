import PropTypes from "prop-types";
import { useState } from "react";

export default function SearchUrl({ title, url }) {
  const [time, setTimer] = useState("00:00:00");
  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer(time);

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
      <span className="w-[120px] text-[#aaa] text-sm">{time}</span>
    </>
  );
}

SearchUrl.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
