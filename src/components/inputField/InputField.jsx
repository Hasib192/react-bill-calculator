const InputField = ({ label, className, placeholder, min, handleBillChange, preventMinus }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input type="number" min={min} step="1" placeholder={placeholder} onKeyPress={preventMinus} onChange={handleBillChange} />
    </div>
  );
};

export default InputField;
