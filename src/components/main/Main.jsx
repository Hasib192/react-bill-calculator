import { useState } from "react";
import Bill from "../bill/Bill";
import People from "../people/People";
import ResetBtn from "../resetBtn/ResetBtn";
import SelectTip from "../selectTip/SelectTip";
import TipAmount from "../tipAmount/TipAmount";
import TotalAmount from "../totalAmount/TotalAmount";

const Main = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(1);

  const handleBillChange = (amount) => {
    setBill(amount);
  };

  const handleTipChange = (tip) => {
    setTip(tip);
  };

  const handlePersonChange = (e) => {
    setPerson(parseInt(e.target.value));
  };

  const resetAmount = () => {
    setBill(0);
    setTip(0);
    setPerson(1);
  };

  return (
    <main>
      <div className="card">
        <div className="card-body-left">
          <Bill onChange={handleBillChange} />
          <SelectTip onChange={handleTipChange} />
          <People onChange={handlePersonChange} />
        </div>
        <div className="card-body-right">
          <div className="result">
            <TotalAmount billAmount={bill} person={person} />
            <TipAmount tip={tip} person={person} />
            <ResetBtn resetAmount={resetAmount} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
