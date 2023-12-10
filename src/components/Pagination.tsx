const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-3 mt-12">
      {pages.map((page, index) => {
        return (
          <button
            className={`bg-black text-white rounded-md px-2 py-1 hover:bg-cyan-600 hover:text-white border-white border-[2px] ${
              page === currentPage ? "bg-cyan-600 text-white" : ""
            }`}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
