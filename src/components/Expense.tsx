import { log } from "console";
import React, { useState } from "react";
export default function Expense() {
  type Expense = {
    source: string;
    amount: number;
    date: string;
  };
  const [expense, setExpense] = useState({
    source: "",
    amount: 0,
    date: "",
  });

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newExpense = {
      source: expense.source,
      amount: expense.amount,
      date: expense.date,
    };
    setExpenses([...expenses, newExpense]);
    setExpense({
      source: "",
      amount: 0,
      date: "",
    });
  };
  return (
    <>
      <div className="h-72 w-72 flex justify-center bg-slate-600">
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-2">
            <label htmlFor="expense-source">Expense source</label>
            <input
              type="text"
              id="expense-source"
              placeholder="Phone bill"
              value={expense.source}
              onChange={e =>
                setExpense(prev => ({ ...prev, source: e.target.value }))
              }
            />

            <label htmlFor="amount-of-expense">Amount of expense</label>
            <input
              type="text"
              id="amount-of-expense"
              value={expense.amount}
              onChange={e =>
                setExpense(prev => ({
                  ...prev,
                  amount: parseInt(e.target.value),
                }))
              }
            />

            <label htmlFor="date-of-expense">Date of expense</label>
            <input
              type="date"
              id="date-of-expense"
              value={expense.date}
              onChange={e =>
                setExpense(prev => ({ ...prev, date: e.target.value }))
              }
            />

            <button  className="bg-green-500 rounded-md mt-2 w-28 py-1" type="submit" >Add expense</button>
            {expenses.map(item => {
              console.log("item expense running");
              return (
                <ul>
                  <li>{item.source}</li>
                  <li>{item.amount}</li>
                  <li>{item.date}</li>
                </ul>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
}
