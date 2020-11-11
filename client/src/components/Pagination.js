import React from "react";
import "./Pagination.css";

const Pagination = ({ placesPerPage, totalPlaces, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPlaces / placesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {/* <p>the current page is {currentPage}</p> */}
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage
                ? "page-number current-page"
                : "page-number"
            }
            onClick={() => paginate(number)}
          >
            <span
              className={number === currentPage ? "current-page" : "other-page"}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

//Brad Traversy https://github.com/bradtraversy/simple_react_pagination/blob/master/src/components/Pagination.js
