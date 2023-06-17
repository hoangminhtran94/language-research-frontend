import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { v4 } from "uuid";
/**
 * Renders a pagination component for navigating through a list of records.
 * @author Minh Hoang Tran - 041016957
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.listLength - The length of the list of records.
 * @param {function} [props.reload] - A function to reload the list of records (optional).
 * @returns {JSX.Element} The rendered pagination component.
 */
const Pagination = ({ listLength, reload }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    +searchParams.get("page") ? +searchParams.get("page") - 1 : 0
  );
  const numberOfPage = Math.ceil(+listLength / 100);

  useEffect(() => {
    if (searchParams.get("page") === "1" || !searchParams.get("page")) {
      setCurrentPage(0);
    }
  }, [searchParams]);

  useEffect(() => {
    setSearchParams((params) => {
      params.set("page", (currentPage + 1).toString());
      return params;
    });
  }, [currentPage, setSearchParams]);

  return (
    <div className="flex items-center gap-5 flex-1">
      <p className="font-bold flex-1 text-center">
        {`Current display records from ${currentPage * 100 + 1} to
        ${
          currentPage === numberOfPage - 1
            ? currentPage * 100 + (listLength - currentPage * 100)
            : currentPage * 100 + 100
        } in ${listLength} records`}
      </p>
      {+listLength > 100 && (
        <div className="flex gap-2 items-center min-w-[300px] justify-between">
          <button
            className="hover:scale-110 transition-all"
            onClick={() => {
              setCurrentPage((prev) => {
                if (prev === 0) {
                  return numberOfPage - 1;
                }
                return currentPage - 1;
              });
            }}
          >
            Previous
          </button>
          <ul className="flex gap-2">
            {currentPage >= 4 && <li>...</li>}
            {Array(numberOfPage)
              .fill()
              .map((_, index) => {
                if (Math.abs(index - currentPage) <= 3) {
                  return (
                    <li
                      onClick={() => {
                        setCurrentPage(index);
                      }}
                      className={`opacity-50 ${
                        currentPage === index &&
                        "font-bold scale-105 -translate-y-1 !opacity-100"
                      } cursor-pointer hover:scale-110 transition-all`}
                      key={v4()}
                    >
                      {index + 1}
                    </li>
                  );
                }
              })}
            {numberOfPage - currentPage > 4 && <li>...</li>}
          </ul>
          <button
            className="hover:scale-110 transition-all"
            onClick={() => {
              setCurrentPage((prev) => {
                if (prev === numberOfPage - 1) {
                  return 0;
                }
                return currentPage + 1;
              });
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
export default Pagination;
