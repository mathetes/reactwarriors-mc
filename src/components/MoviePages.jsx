import React from "react";

const MoviePages = props => {

  const {page, updatePages, total_pages} = props;

  const handleCLick = value => {
    return event => {
      updatePages(value);
    };
  };

  return (
    <div>
      <h2>All pages quality: {total_pages}</h2>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <span 
              class="page-link" 
              tabindex="-1"
              onClick={handleCLick(page - 1)}>
              Previous
            </span>
          </li>
          <li class="page-item">
            <span 
              class="page-link" 
              tabindex="-1"
              onClick={page}>
              {page}
            </span>
          </li>
          <li class="page-item">
            <span 
              class="page-link" 
              onClick={handleCLick(page +1)}>
              Next
            </span>
          </li>
        </ul>
      </nav>      
    </div>
  );
};

export default MoviePages;
