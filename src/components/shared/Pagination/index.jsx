import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import './index.scss';

const pagePagination = ({
  indexOfFirstPage,
  indexOfLastPage,
  currentPage,
  lastPage,
  prevPage,
  nextPage,
  totalCharacters
}) => {
  return (
    <div>
      <Pagination>
        <div className="pagination-count">
          {indexOfFirstPage} - {indexOfLastPage} of {totalCharacters}
        </div>
        <PageItem
          className="prev"
          onClick={prevPage}
          disabled={currentPage === indexOfFirstPage}
        >
          <i className="fas fa-chevron-left" />
        </PageItem>
        <PageItem
          className="next"
          onClick={nextPage}
          active={true}
          disabled={lastPage === currentPage}
        >
          <i className="fas fa-chevron-right" />
        </PageItem>
      </Pagination>
    </div>
  );
};

export default pagePagination;
