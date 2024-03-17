import React, { FormEvent } from "react";
import { ChangeEvent } from "react";

type TransferAccountProps = {
  setTransferAmount: (key: number) => void;
  handleSubmit:(key:FormEvent)=>void
  transferAmount : number
};
export default function TransferAccountWrapper({
  setTransferAmount,  
  handleSubmit,
  transferAmount,
}: TransferAccountProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setTransferAmount(valueAsNumber);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="transfer">Transfer to saving account</label>
            <input type="number" id="transfer"  onChange={handleChange} />
            <button type="submit">Transfer</button>
          </div>
        </form>
      </div>
    </>
  );
}
