import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Button } from "@/components/ui/button"

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
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
      <p className="text-sm text-muted-foreground order-2 sm:order-1">
        Mostrando página <span className="font-medium">{currentPage}</span> de{" "}
        <span className="font-medium">{totalPages}</span>, com um total de{" "}
        <span className="font-medium">{sortedVendas.length}</span> registros.
      </p>
      <div className="flex items-center space-x-2 order-1 sm:order-2">
        <Button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          variant="outline"
          size="icon"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <div className="hidden sm:flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              onClick={() => handlePageClick(page)}
              variant={page === currentPage ? "default" : "outline"}
              size="icon"
            >
              {page}
            </Button>
          ))}
        </div>
        <div className="sm:hidden">
          <span className="text-sm font-medium">
            {currentPage} / {totalPages}
          </span>
        </div>
        <Button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          variant="outline"
          size="icon"
        >
          <ChevronRightIcon className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
};

export default Pagination;

