import React, { useState } from "react";

export default function IncomForm() {
  // declare type for Income

  type Income = {
    source: string;
    amount: number;
    date: string;
  };
  const [income, setIncome] = useState<Income>({
    source: "",
    amount: 0,
    date: "",
  });
  const [incomes, setIncomes] = useState<Income[]>([]);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newIncome = {
      source: income.source,
      amount: income.amount,
      date: income.date,
    };
    setIncomes([...incomes, newIncome]);
    setIncome({
      source: "",
      amount: 0,
      date: "",
    });
  };

  return (
    <>
      <div className="container">
        <div>
          <form onSubmit={handelSubmit}>
            <div className="conatinerForm">
              <label htmlFor="income-source">income source</label>
              <input
                type="text"
                id="income-source"
                placeholder="Salary"
                value={income.source}
                onChange={e =>
                  setIncome(prev => ({ ...prev, source: e.target.value }))
                }
              />

              <label htmlFor="amount-source">Amount of income</label>
              <input
                type="text"
                id="amount-source"
                value={income.amount}
                onChange={e =>
                  setIncome(prev => ({
                    ...prev,
                    amount: parseInt(e.target.value),
                  }))
                }
              />

              <label htmlFor="date-of-income">Date of income</label>
              <input
                type="date"
                id="date-of-income"
                value={income.date}
                onChange={e =>
                  setIncome(prev => ({ ...prev, date: e.target.value }))
                }
              />

              <button type="submit">Add income</button>
    
              {/* incomes is an array, if you want to render to UI , you have to use map()  */}
              {incomes.map(item => {
                console.log("item income when running for loop with map", item);
                return (
                  <ul>
                    <li>{item.amount}</li>
                    <li>{item.source}</li>
                    <li>{item.date}</li>
                  </ul>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
