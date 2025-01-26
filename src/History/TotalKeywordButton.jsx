import PropTypes from "prop-types";

import SearchKeyword from "./SearchKeyword";

export function TotalKeywordButton({ history }) {
  const numberOfKeywords = history.keywords.length;

  return (
    <div
      className={`${numberOfKeywords > 3 ? "collapse collapse-arrow bg-base-200" : "collapse bg-base-200"}`}
    >
      <input type="checkbox" />
      <div className="collapse-title flex">
        {history.keywords.map(({ keyword, count }, index) => {
          return (
            index < 3 && (
              <SearchKeyword
                key={index}
                keyword={keyword}
                count={count}
              />
            )
          );
        })}
      </div>
      <div className="collapse-content">
        <div className="flex">
          {history.keywords.map(({ keyword, count }, index) => {
            return (
              index >= 3 && (
                <SearchKeyword
                  key={index}
                  keyword={keyword}
                  count={count}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

TotalKeywordButton.propTypes = {
  history: PropTypes.object,
};
