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

  const handleBillChange = (e) => {
    const num = parseFloat(e.target.value);

    if (isNaN(num)) {
      setBill(0);
    } else {
      setBill(num);
    }
  };

  const handlePeopleChange = (e) => {
    setPerson(parseInt(e.target.value));
  };

  const preventMinus = (e) => {
    if (e.key === "-") {
      e.preventDefault();
    }
  };

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
          <InputField label="Bill" className="bill-section" min="0" placeholder="0" handleBillChange={handleBillChange} preventMinus={preventMinus} />
          <SelectTip onChange={handleTipChange} />
          <InputField label="Number of People" className="people-section" min="1" placeholder="1" handlePeopleChange={handlePeopleChange} preventMinus={preventMinus} />
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
