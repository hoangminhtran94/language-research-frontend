import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Pagination = ({ listLength }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    +searchParams.get("page") ? +searchParams.get("page") - 1 : 0
  );
  const numberOfPage = Math.ceil(+listLength / 100);
  useEffect(() => {
    setSearchParams((params) => {
      params.set("page", (currentPage + 1).toString());
      return params;
    });
  }, [currentPage, setSearchParams]);
  return (
    <div className="flex items-center gap-5">
      <p className="font-bold">
        {`Current display records from ${currentPage * 100 + 1} to
        ${currentPage * 100 + 100} in ${listLength} records`}
      </p>
      <div className="flex gap-2 items-center w-[300px] justify-between">
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
          {Array(numberOfPage)
            .fill()
            .map((_, index) => {
              if (Math.abs(index - currentPage) <= 3) {
                return (
                  <li
                    onClick={() => {
                      setCurrentPage(index);
                    }}
                    className={`${
                      currentPage === index && "font-bold"
                    } cursor-pointer hover:scale-110 transition-all`}
                    key={index}
                  >
                    {index + 1}
                  </li>
                );
              }
              return <></>;
            })}
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
    </div>
  );
};
export default Pagination;
