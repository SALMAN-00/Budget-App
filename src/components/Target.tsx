import React, { useState } from "react";

export default function Target() {
  const [target, setTarget] = useState(0);
  return (
    // 2 usestate to save data
    // 1 target
    // 2 progress = current / target
    <>
      <div className="h-72 w-72 flex flex-col justify-center bg-slate-600">
        <label htmlFor="set-target">Set target</label>
        <input
          type="text"
          id="set-target"
          value={target}
          onChange={e => setTarget(parseInt(e.target.value))}
        />
        <button  className="bg-green-500 rounded-md mt-2 w-28 py-1" type="reset">Reset</button>

        <p>Current saving: </p>
        <p>Target: {target}</p>
        <label htmlFor="progress">Progress</label>
        <input type="range" id="progress" />
      </div>
    </>
  );
}
