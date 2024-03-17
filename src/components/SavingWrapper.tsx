import React, { ChangeEvent } from "react";
type SavingWrapperProps = {
  setSavingTarget: (key: number) => void;
  currentSaving: number
};
export default function SaveingWrapper({
  setSavingTarget,
  currentSaving,
}: SavingWrapperProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setSavingTarget(valueAsNumber);
  };
  return (
    <>
      <div>
        <form>
          <div>
            <label htmlFor="set-target">Set Target</label>
            <input type="number" id="set-target" onChange={handleChange} />
            <button type="reset">Reset</button>
          </div>
        </form>
        <h1>Current Saving: {currentSaving} </h1>
        <h1>Target: </h1>
        <label htmlFor="progress">Progress: </label>
        <input type="range" id="progress" />
      </div>
    </>
  );
}
