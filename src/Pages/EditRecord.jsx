import RecordForm from "../components/RecordForm";
import { useLoaderData } from "react-router";
import { redirect } from "react-router-dom";

/**
 * Renders the EditRecord page.
 * @author Minh Hoang Tran - 041016957
 * @component
 */
const EditRecord = () => {
  /**
   * Retrieves the loaderData using the useLoaderData hook.
   */
  const loaderData = useLoaderData();

  /**
   * @author Minh Hoang Tran - 041016957
   * Checks if there is an error in the loaderData.
   * If an error exists, displays an error message.
   * Otherwise, renders the RecordForm component with the loaderData record.
   */
  if (loaderData.error) {
    return (
      <div className="h-[500px] flex justify-center items-center rounded shadow-md font-bold text-xl">
        {loaderData.error}
      </div>
    );
  }

  return <RecordForm record={loaderData.record} />;
};

export default EditRecord;

/**
 * Loader function that retrieves data for the EditRecord component.
 * @author Minh Hoang Tran - 041016957
 * @async
 * @param {Object} request - The request object containing the URL.
 * @param {Object} params - The parameters object containing the recordId parameter.
 * @returns {Object} - An object containing either the retrieved record or an error message.
 */
export const loader = async ({ request, params }) => {
  const recordId = params?.recordId;
  let res;

  try {
    // Fetches record from the API
    res = await fetch("http://localhost:3600/api/vegetable/" + recordId);
  } catch (error) {
    // Returns an error message if an error occurs during the fetch
    return { error: "Record not found" };
  }

  if (res.ok) {
    // Returns the retrieved record if the response is successful
    return { record: await res.json() };
  }

  // Returns an error message if the response is not successful
  return { error: "Record not found" };
};

/**
 * Action function that handles the form submission for the EditRecord component.
 * @author Minh Hoang Tran - 041016957
 * @async
 * @param {Object} request - The request object containing the form data.
 * @param {Object} params - The parameters object containing the recordId parameter.
 * @returns {Object} - An object containing either a redirect or an error message.
 */
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const recordId = params?.recordId;
  let res;

  try {
    // Sends a POST request with the form data to update the specified recordId
    res = await fetch("http://localhost:3600/api/vegetable/" + recordId, {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    // Returns an error message if an error occurs during the fetch
    return { error: "Something wrong happened!" };
  }

  if (res.ok) {
    // Redirects to the parent page if the response is successful
    return redirect("..");
  }

  // Returns an error message if the response is not successful
  return { error: "Something wrong happened!" };
};
