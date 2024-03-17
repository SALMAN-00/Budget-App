import React, { useState } from "react";

import IncomeForm from "./IncomeForm";

export type Income = {
  id: number;
  source: string;
  amount: number;
  date: string;
};
type IncomeWrapperProps = {
  incomes: Income[];
  setIncomes: React.Dispatch<React.SetStateAction<Income[]>>;
};
export default function IncomeWrapper({
  incomes,
  setIncomes,
}: IncomeWrapperProps) {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  // editing
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editSource, setEditSource] = useState("");
  const [editAmount, setEditAmount] = useState(0);
  const [editDate, setEditDate] = useState("");

  const handleChangeSource = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSource(e.target.value);
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newIncome = {
      id: incomes.length + 1,
      source: source,
      amount: amount,
      date: date || new Date().toLocaleDateString(),
    };
    setIncomes([...incomes, newIncome]);
    setSource("");
    setAmount(0);
    setDate("");
  };

  const handleDelete = (id: number) => {
    const updateIncomes = incomes.filter(income => income.id !== id);
    setIncomes(updateIncomes);
  };

  const handleEdit = (income: Income) => {
    setEditingId(income.id);
    setEditSource(income.source);
    setEditAmount(income.amount);
    setEditDate(income.date);
  };
  const handleSaveEdit = () => {
    if (editingId === null) return;

    const updatedIncomes = incomes.map(income => {
      if (income.id === editingId) {
        return {
          ...income,
          source: editSource,
          amount: editAmount,
          date: editDate,
        };
      }
      return income;
    });

    setIncomes(updatedIncomes);
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditSource("");
    setEditAmount(0);
    setEditDate("");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <IncomeForm
          handleChangeSource={handleChangeSource}
          handleChangeAmount={handleChangeAmount}
          handleChangeDate={handleChangeDate}
          handleSubmit={handleSubmit}
          sourceValue={source}
          amountValue={amount.toString()}
          dateValue={date}
        />
        <div className="mt-8 overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {incomes.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {editingId === item.id ? (
                      <input
                        type="text"
                        value={editSource}
                        onChange={e => setEditSource(e.target.value)}
                      />
                    ) : (
                      item.source
                    )}
                  </td>
                  <td>
                    {editingId === item.id ? (
                      <input
                        type="number"
                        value={editAmount.toString()}
                        onChange={e => setEditAmount(Number(e.target.value))}
                      />
                    ) : (
                      item.amount
                    )}
                  </td>
                  <td>
                    {editingId === item.id ? (
                      <input
                        type="date"
                        value={editDate}
                        onChange={e => setEditDate(e.target.value)}
                      />
                    ) : (
                      item.date
                    )}
                  </td>
                  <td className="flex justify-evenly">
                    {editingId === item.id ? (
                      <>
                        <button
                          className="bg-green-500 rounded-md px-1 py-2 text-center text-white"
                          onClick={handleSaveEdit}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-500 rounded-md px-1 py-2 text-center text-white"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="bg-red-500 rounded-md px-1 py-2 text-center text-white"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-blue-500 rounded-md px-1 py-2 text-center text-white"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
