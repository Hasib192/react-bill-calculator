const InputField = ({ label, className, placeholder, min, handleInputChange }) => {
  const handleKeyPress = (e) => {
    // Prevent typing of "-" and "+"
    if (e.key === "-" || e.key === "+") {
      e.preventDefault();
    }

    // Check length and prevent input if it exceeds 7 digits
    let str = " " + e.target.value;
    if (str.length > 7) {
      alert("Input cannot exceed 7 digits!");
      e.preventDefault();
    }
  };

  return (
    <div className={className}>
      <label>{label}</label>
      <input type="number" min={min} step="1" placeholder={placeholder} maxLength={6} onKeyDown={handleKeyPress} onChange={handleInputChange} />
    </div>
  );
};

export default InputField;
