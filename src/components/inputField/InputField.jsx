import { useState } from "react";
const InputField = ({ label, className, placeholder, min, handleInputChange }) => {
  const [showWarning, setShowWarning] = useState(false);
  const handleKeyPress = (e) => {
    // Prevent typing of "-" and "+"
    if (e.key === "-" || e.key === "+") {
      e.preventDefault();
    }
  };

  const handleInput = (event) => {
    const inputText = event.target.value;
    if (inputText.length > 7) {
      event.target.value = inputText.slice(0, 7);
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  return (
    <div className={className}>
      <label>{label}</label>
      <input type="number" min={min} step="1" placeholder={placeholder} maxLength={6} onKeyDown={handleKeyPress} onInput={handleInput} onChange={handleInputChange} />
      {showWarning && (
        <small style={{ color: "red", fontSize: 12 }}>
          <em>Amount cannot exceed 7 digits</em>
        </small>
      )}
    </div>
  );
};

export default InputField;
