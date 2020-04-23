import React from "react";
import classNames from "classnames"; //A simple JavaScript utility for conditionally joining classNames together.

const MoviePages = props => {

  const {page, updatePages, total_pages} = props;

  const handleCLick = value => {
    if(value >= 1) {
    return event => {
      updatePages(value);
    }};
  };

  const activeClass = "active"; 
  const classNamesSwitcher = value => {
    
    if (activeClass===("active")) {
      return classNames("page-item")
    } else {
      return classNames("page-item active")
    }
  }

  return (
    <div>
      <h2>All pages quality: {total_pages}</h2>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={classNamesSwitcher(activeClass)}>
            <span 
              className="page-link"
              tabindex="-1"
              onClick={handleCLick(page - 1)}>
              Previous
            </span>
          </li>
          <li className="page-item">
            <span 
              className="page-link" 
              tabindex="-1"
              onClick={page}>
              {page}
            </span>
          </li>
          <li className={classNamesSwitcher(activeClass)}>
            <span
              className="page-link"
              onClick={handleCLick(page + 1)}>
              Next
            </span>
          </li>
        </ul>
      </nav>      
    </div>
  );
};

export default MoviePages;
