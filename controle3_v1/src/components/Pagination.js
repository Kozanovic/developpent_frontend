import { useState } from "react";

const Pagination = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div className="pagination-container">
      <div className="elements-container">
        {currentItems.map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Précédent
        </button>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Pagination;
