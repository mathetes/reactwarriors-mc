import React from "react";
import classNames from "classnames"; //A simple JavaScript utility for conditionally joining classNames together.
import styles from './moviePages.css';
 
const MoviePages = props => {

  const {page, updatePages, total_pages, btn} = props;

  const handleCLick = value => {
    if(value >= 1) {
    return event => {
      updatePages(value);
    }};
  };

  let toggleClass = classNames.bind(styles);

  const classNamesSwitcher = value => {
    return `page-item ${btn === value ? "active" : ""}`;
  }

  return (
    <div>
      <h2>All pages quality: {total_pages}</h2>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <span 
              className="page-link" 
              onClick={handleCLick(page - 1)}>
              Previous
            </span>
          </li>
          <li className="page-item">
            <span 
              className="page-link" 
              onClick={page}>
              {page}
            </span>
          </li>
          <li className="page-item active">
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
