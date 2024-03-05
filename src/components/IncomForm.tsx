import React, { useState } from "react";

export default function IncomForm() {

  const [income, setIncome] = useState({
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString(),
  });
  const [incomes, setIncomes] = useState([]);

  const handelSubmit = e => {
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
      date: new Date().toLocaleDateString(),
    });
  };

  return (
    <>
      <div className="container">
        <div>
          <form>
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
                  setIncome(prev => ({ ...prev, amount: e.target.value }))
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

              <button type="submit" onClick={handelSubmit}>
                Add income
              </button>
              {incomes}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
