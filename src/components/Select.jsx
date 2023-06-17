/**
 * Renders a select input component.
 * @author Minh Hoang Tran - 041016957
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the select input.
 * @param {Array} props.selectList - The list of options for the select input.
 * @param {string} props.defaultValue - The default selected option value.
 * @returns {JSX.Element} The rendered select input component.
 */

const Select = ({ label, selectList, defaultValue, ...otherProps }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={otherProps.name} className="font-bold">
        {label}
      </label>
      <select
        id={otherProps.name}
        {...otherProps}
        className="border border-slate-300 rounded p-2"
        defaultValue={defaultValue ?? ""}
      >
        <option value="">Please select an option</option>
        {selectList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
