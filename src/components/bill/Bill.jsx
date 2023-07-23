const Bill = ({ onChange, label }) => {
  const handleInputChange = (e) => {
    const num = parseFloat(e.target.value);

    if (isNaN(num)) {
      onChange(0);
    } else {
      onChange(num);
    }
  };

  return (
    <div className="bill-section">
      <label>{label}</label>
      <input type="text" placeholder={0} maxLength={6} onInput={handleInputChange} />
    </div>
  );
};

export default Bill;
