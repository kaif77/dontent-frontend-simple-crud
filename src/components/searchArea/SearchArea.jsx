import React, { useEffect, useState } from "react";

const SearchArea = ({ handleOnSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const reset = () => {
    setSearchText("");
  };

  useEffect(() => {
    handleOnSearch(searchText);
  }, [searchText]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Search Programmes"
              aria-label="Search"
              value={searchText}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-outline-secondary col-4 my-2 my-sm-0"
              onClick={reset}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchArea;
