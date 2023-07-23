const TotalAmount = ({ billAmount, person }) => {
  const totalAmount = billAmount / person;

  return (
    <div className="total-person-section">
      <div className="tip-amount-section-title">
        <h4>Total</h4>
        <p>/ person</p>
      </div>
      <span className="span">${totalAmount.toFixed(2)}</span>
    </div>
  );
};

export default TotalAmount;
