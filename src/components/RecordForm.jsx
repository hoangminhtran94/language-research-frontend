import { Form, Link } from "react-router-dom";
import Select from "./Select";
import Input from "./Input";
const SELECTLIST = [
  "Alberta",
  "British Columbia",
  "Canada",
  "Manitoba",
  "Maritime provinces",
  "Ontario",
  "Quebec",
  "Saskatchewan",
];
/**
 * Renders a form component for creating or editing records.
 * @author Minh Hoang Tran - 041016957
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.record - The record data for editing (optional).
 * @returns {JSX.Element} The rendered record form component.
 */
const RecordForm = ({ record }) => {
  const mode = record ? "edit" : "new";

  return (
    <div className="p-5 rounded shadow-lg">
      <h1 className="text-center mb-3 font-bold">
        {mode === "new" ? "New Record" : "Edit Record"}
      </h1>
      <Form method="POST" className="flex flex-col gap-2">
        <Select
          required
          defaultValue={record?.GEO}
          name="GEO"
          selectList={SELECTLIST}
          label="Geo location"
        />
        <Input
          placeholder="Please enter the type of product"
          defaultValue={record?.type_of_product}
          name="type_of_product"
          label="Type of product"
          required
        />
        <Input
          type="number"
          defaultValue={+record?.VECTOR.slice(1)}
          placeholder="Please enter the vector"
          name="VECTOR"
          label="Vector"
          required
        />
        <Input
          placeholder="Please enter the cordinate"
          defaultValue={record?.COORDINATE}
          name="COORDINATE"
          label="Cordinate"
          required
        />
        <Input
          placeholder="Please enter the value"
          defaultValue={record?.VALUE}
          type="number"
          name="VALUE"
          label="Value"
          required
        />
        <div className="flex justify-center gap-3 mt-4">
          <Link
            to={".."}
            className=" text-center text-red-500 border border-red-500 flex-1 hover:bg-red-100 rounded p-3"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="text-green-700 border border-green-700 flex-1 hover:bg-green-100 rounded p-3 "
          >
            {mode === "new" ? "Submit" : "Save"}
          </button>
        </div>
      </Form>
    </div>
  );
};
/**
 * @author Minh Hoang Tran - 041016957
 */
export default RecordForm;
