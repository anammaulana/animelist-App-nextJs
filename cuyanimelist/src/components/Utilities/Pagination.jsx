const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
      // Scroll ke atas saat halaman berubah
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll untuk pengalaman yang lebih baik
      });
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 text-color-primary text-2xl font-mono py-4 px-3">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`transition-all hover:text-color-accent ${
          currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <p>
        {currentPage} of {totalPages}
      </p>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`transition-all hover:text-color-accent ${
          currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : ""
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
