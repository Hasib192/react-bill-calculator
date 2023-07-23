const SelectTip = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="tip-section">
      <h4>Select Tip %</h4>
      <div className="btn-grp">
        <button className="btn" value={5} onClick={handleChange}>
          5%
        </button>
        <button className="btn" value={10} onClick={handleChange}>
          10%
        </button>
        <button className="btn" value={15} onClick={handleChange}>
          15%
        </button>
        <button className="btn" value={25} onClick={handleChange}>
          25%
        </button>
        <button className="btn" value={50} onClick={handleChange}>
          50%
        </button>
        <input type="text" placeholder="Custom" onInput={handleChange} />
      </div>
    </div>
  );
};

export default SelectTip;
