import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Link to="/new">New Report</Link>
        <Link to="/view-new-report">View new reports</Link>
        <Link to="/">Reload</Link>
      </div>
    </div>
  );
};
export default MainPage;
