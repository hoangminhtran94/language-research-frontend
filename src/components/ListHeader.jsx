/**
 * Renders the table header .
 * @author Minh Hoang Tran - 041016957
 * @component
 */
const ListHeader = () => {
  return (
    <li className="grid grid-cols-17 bg-black text-white sticky top-0  items-center font-bold p-2 ">
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
  );
};
export default ListHeader;
