const People = ({ onChange }) => {
  return (
    <div className="people-section">
      <label>Number of People</label>
      <input type="number" placeholder={1} onChange={onChange} />
    </div>
  );
};

export default People;
