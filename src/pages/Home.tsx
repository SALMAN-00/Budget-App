import React from 'react'

import IncomeWrapper from "../components/IncomeWrapper";
import ExpenseWrapper from "../components/ExpenseWrapper";
import SavingAmount from "../components/SavingAmount";
import Target from "../components/Target";
export default function Home() {
  return (
    <>
    <div>
    <div className="flex">
        <IncomeWrapper />
        <ExpenseWrapper />
      </div>
      <div className="flex">
      <SavingAmount/>
      <Target/>
      </div>
    </div>
    </>
    
  )
}
