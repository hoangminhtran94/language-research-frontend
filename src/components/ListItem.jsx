import { Link, useNavigate, useSearchParams } from "react-router-dom";
/**
 * Renders a single item in the list.
 * @author Minh Hoang Tran - 041016957
 * @component
 * @param {Object} record - The record object containing item details.
 */
const ListItem = ({ record }) => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  /**
   * Handles the delete operation for the item.
   * @author Minh Hoang Tran - 041016957
   * Deletes the item from the server and navigates back to the previous page.
   */
  const deleteHandler = async () => {
    try {
      await fetch("http://localhost:3600/api/vegetable/" + record.UUID, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
    const page = searchParams.get("page");
    const redirectPath = `/${page ? "?page=" + page : ""}`;
    return navigate(redirectPath);
  };

  return (
    <li className="grid grid-cols-17 odd:bg-slate-50 items-center  p-2 ">
      <span> {record.REF_DATE}</span>
      <span>{record.GEO}</span>
      <span>{record.DGUID}</span>
      <span>{record.type_of_product}</span>
      <span>{record.type_of_storage}</span>
      <span>{record.UOM}</span>
      <span>{record.UOM_ID}</span>
      <span>{record.SCALAR_FACTOR}</span>
      <span>{record.SCALAR_ID}</span>
      <span>{record.VECTOR}</span>
      <span>{record.COORDINATE}</span>
      <span>{record.VALUE}</span>
      <span>{record.STATUS}</span>
      <span>{record.SYMBOL}</span>
      <span>{record.TERMINATED}</span>
      <span>{record.DECIMALS}</span>
      <span className="flex flex-col gap-2">
        <Link
          to={`/${record.UUID}/edit`}
          className=" rounded p-2 bg-indigo-600 text-white text-center flex gap-2 justify-center items-center hover:bg-indigo-500 "
        >
          Edit
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <button
          onClick={deleteHandler}
          className="rounded p-2 bg-red-500 text-white flex justify-center gap-2 items-center hover:bg-red-400"
        >
          Delete
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.33 16.5H13.66"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 12.5H14.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </span>
    </li>
  );
};
/**
 * @author Minh Hoang Tran - 041016957
 */
export default ListItem;
