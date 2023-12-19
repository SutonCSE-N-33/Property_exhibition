/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Pagination = ({ sortProperties }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = sortProperties().slice(firstIndex, lastIndex);
  const npage = Math.ceil(sortProperties().length / recordsPerPage);
  const numbers = [...Array(npage).keys()].map(num => num + 1);

  useEffect(() => {
    if (currentPage > npage) {
      setCurrentPage(1);
    }
  }, [currentPage, npage]);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      <div className="mx-auto my-5">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                onClick={prePage}
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            {numbers.map(n => (
              <li key={n}>
                <a
                  href="#"
                  onClick={() => changeCPage(n)}
                  className={`${
                    n === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-500"
                  } border border-gray-300 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {n}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                onClick={nextPage}
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
