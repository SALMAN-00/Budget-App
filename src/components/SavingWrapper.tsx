import React, { ChangeEvent } from "react";

type SavingWrapperProps = {
  setSavingTarget: (key: number) => void;
  currentSaving: number;
};

export default function SavingWrapper({
  setSavingTarget,
  currentSaving,
}: SavingWrapperProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setSavingTarget(valueAsNumber);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <form className="flex flex-col space-y-2">
        <div>
          <label htmlFor="set-target" className="block text-sm font-medium text-gray-700">Set Target</label>
          <input type="number" id="set-target" onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <button type="reset" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Reset</button>
      </form>
      <div>
        <h1 className="text-lg font-semibold">Current Saving: {currentSaving}</h1>
        <h1 className="text-lg font-semibold">Target:</h1>
        <label htmlFor="progress" className="block text-sm font-medium text-gray-700">Progress:</label>
        <input type="range" id="progress" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
      </div>
    </div>
  );
}
