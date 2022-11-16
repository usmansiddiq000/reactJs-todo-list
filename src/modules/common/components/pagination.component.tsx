import React from 'react';
import { DOTS } from '../constants';
import { usePagination } from '../hooks';
import { IPagination } from '../interfaces/pagination.interface';
const Pagination = ({ onPageChange,  totalCount, siblingCount = 1, currentPage, pageSize, }: IPagination) => {

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    if (currentPage === 0 || !paginationRange || paginationRange?.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(Number(currentPage) + 1);
    };

    const onPrevious = () => {
        onPageChange(Number(currentPage) - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul className='pagination mt-1'>
        <li
            className={`page-item cursor ${ currentPage === 1 ?  "disabled" : ""}`}
            onClick={onPrevious}
        >
            <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        {paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
            return <li key={index}>&#8230;</li>;
            }

            return (
            <li
                className={`page-item m-1 cursor ${  pageNumber === currentPage ?  "selected" : ""}`}
                onClick={() => onPageChange(Number(pageNumber))}
                key={index}
            >
                {pageNumber}
            </li>
            );
        })}
        <li
            className={`page-item cursor ${ currentPage === lastPage ?  "disabled" : ""}`}
            onClick={onNext}
        >
            <span className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </span>
        </li>
        </ul>
    );
};

export default Pagination;
