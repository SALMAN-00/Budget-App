import React, { useState } from "react";
export default function IncomForm(handleChangeSource , handleChangeAmount , handleChangeDate) {
  // declare type for Income
  type Income = {
    id : number
    source: string;
    amount: number;
    date: string;
  };
  const [income, setIncome] = useState<Income>({
    id: Date.now(),
    source: "",
    amount: 0,
    date: "",
  });

  const [incomes, setIncomes] = useState<Income[]>([]);
  
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newIncome:Income = {
      id:Date.now(),
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

   const handleDeleteIncome = (id: number) => {
    const updatedIncomes = incomes.filter(income => income.id !== id);
    setIncomes(updatedIncomes);
  };
{/*
  const handelEditIncome = (id: number) => {};
  // income[{source, amount, date}]
  // incomesArray.reduce()
*/}
  return (
    <>
      <div className="h-72 w-80 flex justify-center bg-slate-600">
        <form onSubmit={handelSubmit} className="">
          <div className=" flex flex-col gap-2">
            <label htmlFor="income-source">income source</label>
            <input
              type="text"
              id="income-source"
              placeholder="Salary"
              value={income.source}
              onChange={handleChangeSource}
            />

            <label htmlFor="amount-source">Amount of income</label>
            <input
              type="text"
              id="amount-source"
              value={income.amount}
              onChange={handleChangeAmount
              }
            />

            <label htmlFor="date-of-income">Date of income</label>
            <input
              type="date"
              id="date-of-income"
              value={income.date}
              onChange={handleChangeDate
              }
            />

            <button
              className="bg-green-500 rounded-md mt-2 w-28 py-1"
              type="submit"
            >
              Add income
            </button>

            {/* incomes is an array, if you want to render to UI , you have to use map()  */}
            {incomes.map(item => {
              console.log("item income when running for loop with map", item);

              return (
                <div
                  className="h-auto w-auto flex gap-10 bg-slate-400"
                >
                  <table className="table-fixed">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Source</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ID</td>
                        <td>{item.source}</td>
                        <td>{item.amount}</td>
                        <td>{item.date}</td>
                        <td className="flex justify-evenly">
                          <button
                            className="bg-red-500 rounded-md px-1 py2 text-center text-white"
                      
                          >
                            Delete
                          </button>{" "}
                          <button
                            className="bg-blue-500 rounded-md px-1 py2 text-center text-white"
                          
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>    
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
}
