/**
 * Input component renders an input field with a label.
 *@author Minh Hoang Tran - 041016957
 * @component
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the input field.
 * @returns {JSX.Element} The rendered Input component.
 */
const Input = ({ label, ...otherProps }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={otherProps.name} className="font-bold">
          {label}
        </label>
      )}
      <input
        id={otherProps.name}
        {...otherProps}
        className="border border-slate-300 rounded p-2"
      />
    </div>
  );
};

export default Input;
