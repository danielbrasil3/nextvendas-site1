import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'



const Pagination = ({ currentPage, totalPages, onPageChange, sortedVendas }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
    
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
    
  const handlePageClick = (page) => {
      onPageChange(page);
  };
  return (
    <div className="flex items-center justify-between mx-4 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-600 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-800"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-600 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-800"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-300">
            Mostrando página <span className="font-light">{currentPage}</span> de <span className="font-light">{totalPages}</span>, com um total de <span className="font-light">{sortedVendas.length}</span> registros.
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 bg-blue-900 text-white ring-1 ring-inset ring-gray-600 hover:bg-blue-800 focus:z-20 focus:outline-offset-0 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="size-5" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold  text-white ring-1 ring-inset ring-gray-600 hover:bg-blue-800 focus:z-20 focus:outline-offset-0 ${page === currentPage ? 'bg-blue-600' : ''}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 bg-blue-900 text-white ring-1 ring-inset ring-gray-600 hover:bg-blue-800 focus:z-20 focus:outline-offset-0 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="size-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
