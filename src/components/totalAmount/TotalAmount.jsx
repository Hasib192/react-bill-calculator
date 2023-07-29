const TotalAmount = ({ billAmount, person = 1 }) => {
  let totalAmount = billAmount / person;
  console.log(person);

  return (
    <div className="total-person-section">
      <div className="tip-amount-section-title">
        <h4>Bill</h4>
        <p>/ person</p>
      </div>
      <span className="span">${totalAmount.toFixed(2)}</span>
    </div>
  );
};

export default TotalAmount;
