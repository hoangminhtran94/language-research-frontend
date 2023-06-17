const Input = ({ label, ...otherProps }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold">{label}</label>
      <input {...otherProps} className="border border-slate-300 rounded p-2" />
    </div>
  );
};

export default Input;
