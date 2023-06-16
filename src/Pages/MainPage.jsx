import { Link, useLoaderData, useFetcher } from "react-router-dom";
import Pagination from "../components/Pagination";
const MainPage = () => {
  const { records, recordLength } = useLoaderData();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex  justify-between">
        <div className="flex gap-3">
          <Link
            className="rounded border-green-600 text-green-600 border p-4 hover:scale-105 transition-all"
            to="/new"
          >
            New Report
          </Link>
          <Link
            className="rounded border-yellow-500 text-yellow-500 border p-4 hover:scale-105 transition-all"
            to="/view-new-report"
          >
            View new reports
          </Link>
          <Link
            className="rounded border-indigo-300 text-indigo-200 border p-4 hover:scale-105 transition-all"
            to="/"
          >
            Reload
          </Link>
        </div>
        <Pagination listLength={recordLength} />
      </div>
      <div className="">
        <ul className="text-sm border-slate-100 border  ">
          <li className="grid grid-cols-17 bg-black text-white  font-bold p-2 ">
            <span>Ref date</span>
            <span>GEO</span>
            <span>DGUID</span>
            <span>Type of product</span>
            <span>Type of storage</span>
            <span>UOM</span>
            <span>UOM ID</span>
            <span>Scalar Factor</span>
            <span>Scalar ID</span>
            <span>Vector</span>
            <span>Coordinate</span>
            <span>Value</span>
            <span>Status</span>
            <span>Symbol</span>
            <span>Terminated</span>
            <span>Decimals</span>
            <span></span>
          </li>
          {records.slice(0, 100).map((record, index) => (
            <li className="grid grid-cols-17 odd:bg-slate-50  p-2 " key={index}>
              <span>{record.REF_DATE}</span>
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
              <span className="flex flex-col">
                <button>Edit</button>
                <button>Delete</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MainPage;

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  let page = url.searchParams.get("page") ?? "1";
  let res;

  try {
    res = await fetch("http://localhost:3600/api/vegetable?page=" + page);
  } catch (error) {
    return [];
  }
  const data = await res.json();
  return data;
};
