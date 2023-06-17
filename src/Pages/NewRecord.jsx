import { redirect, json } from "react-router-dom";
import RecordForm from "../components/RecordForm";

/**
 * Renders the NewRecord component.
 * @author Minh Hoang Tran - 041016957
 * @component
 */
const NewRecord = () => {
  return <RecordForm />;
};
export default NewRecord;

/**
 * Performs an action upon receiving a request to create a new record.
 * @author Minh Hoang Tran - 041016957
 * @async
 * @function action
 * @param {Object} request - The request object.
 * @returns {Object} Result object.
 * @property {string} [error] - Error message if something wrong happens during the request.
 */
export const action = async ({ request }) => {
  const formData = await request.formData();
  let res;
  try {
    // Sends a POST request with the form data to create a new record
    res = await fetch("http://localhost:3600/api/vegetable", {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    // Returns an error message if an error occurs during the fetch
    return { error: "Something wrong happened!" };
  }
  if (res.ok) {
    // Redirects to the home page if the response is successful
    return redirect("/");
  }
  // Returns an error message if the response is not successful
  return { error: "Something wrong happened!" };
};
