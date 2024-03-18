import React, { FormEvent, useState } from "react";

import IncomeWrapper, { Income } from "../components/IncomeWrapper";
import ExpenseWrapper, { Expense } from "../components/ExpenseWrapper";
import SavingWrapper from "../components/SavingWrapper";
import TransferAccountWrapper from "../components/TransferAccountWrapper";

export default function Home() {
  const [savingTarget, setSavingTarget] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [currentSaving, setCurrentSaving] = useState(0);
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [transferError, setTransferError] = useState("");
  const totalIncome = incomes.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const balance = totalIncome - totalExpenses - currentSaving;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (transferAmount <= balance) {
      setCurrentSaving(prevState => {
        return prevState + transferAmount;
      });
      setTransferError("");
    } else {
      setTransferError("not enough monye in balane!");
    }

    setTransferAmount(0);
    console.log("transferAmount: " + transferAmount);
    console.log("currentSaving: " + currentSaving);
  };
  const progress = (currentSaving / savingTarget) * 100 || 0;
  return (
    <>
      <div>
        <div className="flex">
          <IncomeWrapper incomes={incomes} setIncomes={setIncomes} />
          <ExpenseWrapper expenses={expenses} setExpenses={setExpenses} />
        </div>
        <div className="flex">
          <SavingWrapper
            setSavingTarget={setSavingTarget}
            currentSaving={currentSaving}
            savingTarget={savingTarget}
            progress={progress}
          />
          <h1>Balance: {balance}</h1>
          <TransferAccountWrapper
            setTransferAmount={setTransferAmount}
            handleSubmit={handleSubmit}
            transferAmount={transferAmount}
          />
          {transferError && <h1 className="text-red-500 ">{transferError}</h1>}
        </div>
      </div>
    </>
  );
}
