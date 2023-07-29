import { useState } from "react";
import ResetBtn from "../resetBtn/ResetBtn";
import SelectTip from "../selectTip/SelectTip";
import TipAmount from "../tipAmount/TipAmount";
import TotalAmount from "../totalAmount/TotalAmount";
import InputField from "../inputField/InputField";

const Main = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(1);

  const handleTipChange = (tip) => {
    setTip(tip);
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
          <InputField label="Bill" className="bill-section" min="0" placeholder="0" handleInputChange={(e) => isFinite(parseInt(e.target.value) ? setBill(e.target.value) : setBill(0))} />
          <SelectTip onChange={handleTipChange} />
          <InputField label="Number of People" className="people-section" min="1" placeholder="1" handleInputChange={(e) => isFinite(parseInt(e.target.value) ? setPerson(e.target.value) : setPerson(1))} />
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
