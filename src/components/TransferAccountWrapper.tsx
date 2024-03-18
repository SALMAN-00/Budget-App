import React, { FormEvent, ChangeEvent } from "react";

type TransferAccountProps = {
  setTransferAmount: (key: number) => void;
  handleSubmit: (key: FormEvent) => void;
  transferAmount: number;
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
    <div className="max-w-md mx-auto p-4 space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div>
          <label
            htmlFor="transfer"
            className="block text-sm font-medium text-gray-700"
          >
            Transfer to saving account
          </label>
          <input
            type="number"
            id="transfer"
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Transfer
        </button>
      </form>
    </div>
  );
}
