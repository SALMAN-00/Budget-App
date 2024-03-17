import React from "react";

export default function SavingAmount() {
  return (
    <>
      <div className="">
        <h1>Current Balance: </h1>
        <label htmlFor="transfer-to-saving-account">
          Transfer to saving account
        </label>
        <input type="text" id="transfer-to-saving-account" />
        <button  className="bg-green-500 rounded-md mt-2 w-28 py-1" >Transfer</button>
      </div>
    </>
  );
}
