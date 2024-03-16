import React from "react";

import IncomeWrapper from "./components/IncomeWrapper";
import ExpenseWrapper from "./components/ExpenseWrapper";

export default function App() {
  return (
    <>
      <div className="flex">
        <IncomeWrapper />
        <ExpenseWrapper />
      </div>
    </>
  );
}
