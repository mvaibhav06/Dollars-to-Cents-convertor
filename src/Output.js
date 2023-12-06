import React from "react";

const Output = ({ out }) => {
  return (
    <div>
      <input
        className="form-control inp1"
        disabled
        value={`Total cents: ${out.cents}`}
      />
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Coins</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quarters (25 ¢)</td>
            <td>{out.quarters}</td>
          </tr>
          <tr>
            <td>Dimes (10 ¢)</td>
            <td>{out.dimes}</td>
          </tr>
          <tr>
            <td>Nickels (5 ¢)</td>
            <td>{out.nickels}</td>
          </tr>
          <tr>
            <td>Pennies (1 ¢)</td>
            <td>{out.pennies}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Output;
