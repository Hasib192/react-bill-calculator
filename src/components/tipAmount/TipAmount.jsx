const TipAmount = ({ tip, person }) => {
  const totalAmount = tip / person;
  return (
    <div className="tip-amount-section">
      <div className="tip-amount-section-title">
        <h4>Tip Amount</h4>
        <p>/ person</p>
      </div>
      <span className="span">${totalAmount.toFixed(2)}</span>
    </div>
  );
};

export default TipAmount;
