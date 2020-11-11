import React from "react";

const Pagination = ({ placesPerPage, totalPlaces, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPlaces / placesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <span onClick={() => paginate(number)}>{number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

//Brad Traversy https://github.com/bradtraversy/simple_react_pagination/blob/master/src/components/Pagination.js
