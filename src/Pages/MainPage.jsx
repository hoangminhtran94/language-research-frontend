import { useLoaderData } from "react-router-dom";
import Pagination from "../components/Pagination";
import RecordTable from "../components/RecordTable";
const MainPage = () => {
  /**
   * @author Minh Hoang Tran - 041016957
   * Retrieves the records and recordLength data using a useLoaderData.
   */
  const { records, recordLength } = useLoaderData();
  return (
    <div className="flex flex-col gap-3">
      {recordLength > 0 && <Pagination listLength={recordLength} />}
      <RecordTable records={records} />
    </div>
  );
};
export default MainPage;

/**
 * Loader function that retrieves data for the MainPage component.
 * @author Minh Hoang Tran - 041016957
 * @async
 * @param {Object} request - The request object containing the URL.
 * @returns {Array} - An array of data retrieved from the API.
 */
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  //Get the page number from search params
  const page = url.searchParams.get("page") ?? "1";
  //Get the search params from the url and forward it to the server
  const searchValue = url.searchParams.get("search");

  let res;

  try {
    // Fetches data from the API based based on the page url when the page first loaded
    res = await fetch(
      `http://localhost:3600/api/vegetable?page=${page}${
        searchValue ? `&search=${searchValue}` : ""
      }`
    );
  } catch (error) {
    // Returns an empty array if an error occurs during the fetch
    return { records: [], recordLength: 0 };
  }
  // Parses the response into JSON format
  const data = await res.json();
  // Returns the retrieved data
  return data;
};
