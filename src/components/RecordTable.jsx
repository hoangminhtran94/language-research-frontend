import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
/**
 * Renders a table component to display records.
 * @author Minh Hoang Tran - 041016957
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.records - The list of records to be displayed.
 * @returns {JSX.Element} The rendered record table component.
 */
const RecordTable = ({ records }) => {
  if (records.length === 0) {
    return (
      <div className="h-[500px] rounded shadow-lg flex justify-center items-center text-xl font-bold">
        There is no record!
      </div>
    );
  }
  return (
    <div className="">
      <ul className="text-sm border-slate-100 border max-h-[800px] overflow-y-scroll">
        <ListHeader />
        {records.map((record, index) => (
          <ListItem key={index} record={record} />
        ))}
      </ul>
    </div>
  );
};

export default RecordTable;
