import { useState } from "react";
import Output from "./Output";

const Body = () => {
  const [isClicked, setClicked] = useState(false);
  const [input, setInput] = useState();
  const [out, setOut] = useState({
    cents: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  });

  const handleClick = () => {
    setClicked(true);
    let dollars = input;
    if (!dollars) {
      dollars = 0;
    }
    calculateCoins(dollars);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const calculateCoins = (dollars) => {
    let totalCents = dollars * 100;
    const totalMoney = totalCents;
    let quarter = Math.floor(totalCents / 25);
    totalCents -= 25 * quarter;
    let dime = Math.floor(totalCents / 10);
    totalCents -= 10 * dime;
    let nickel = Math.floor(totalCents / 5);
    let pennie = totalCents - 5 * nickel;

    setOut({
      cents: totalMoney,
      quarters: quarter,
      dimes: dime,
      nickels: nickel,
      pennies: pennie,
    });
  };

  return (
    <div className="text-center">
      <h4>
        Enter the number of <br />
        dollars
      </h4>

      <div className="result">
        <input
          value={input}
          onChange={handleChange}
          className="form-control inp"
        />
        <button
          onClick={handleClick}
          className="btn btn-success my-3"
          type="button"
        >
          Convert
        </button>

        {isClicked && <Output out={out} />}
      </div>
    </div>
  );
};

export default Body;
