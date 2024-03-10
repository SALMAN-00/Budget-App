import React from "react";

import IncomeForm from "./components/IncomeForm";
import Expense from "./components/Expense";
import Target from "./components/Target";
import SavingAmount from "./components/SavingAmount";

function App() {
  // create use state to store total income
  // create usestate to store total expense
  return (
    <>
    <div className="h-[100vh] w-[100vw] flex justify-center gap-3">
      <div className="flex flex-col justify-evenly">
      <div className="flex gap-10"> 
        <IncomeForm />
      <Expense />
      </div>
 <div className="flex gap-10">
      <Target />
      <SavingAmount />
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
