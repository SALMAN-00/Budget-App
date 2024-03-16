import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

type Expense = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

export default function ExpenseWrapper() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  console.log(expenses);
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  // editing
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editSource, setEditSource] = useState("");
  const [editAmount, setEditAmount] = useState(0);
  const [editDate, setEditDate] = useState("");

  const handleChangeSource = e => {
    setSource(e.target.value);
  };

  const handleChangeAmount = e => {
    setAmount(parseInt(e.target.value));
  };

  const handleChangeDate = e => {
    setDate(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newExpense = {
      id: expenses.length + 1,
      source: source,
      amount: amount,
      date: date || new Date().toLocaleDateString(),
    };
    setExpenses([...expenses, newExpense]);
    setSource("");
    setAmount(0);
    setDate("");
  };

  const handleDelete = (id: number) => {
    const updateExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updateExpenses);
  };

  const handleEdit = (expense: Expense) => {
    setEditingId(expense.id);
    setEditSource(expense.source);
    setEditAmount(expense.amount);
    setEditDate(expense.date);
  };

  const handleSaveEdit = () => {
    if (editingId === null) return;
    const updatedExpenses = expenses.map(expense => {
      if (expense.id === editingId) {
        return {
          ...expense,
          source: editSource,
          amount: editAmount,
          date: editDate,
        };
      }
      return expense;
    });
    setExpenses(updatedExpenses);
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditSource("");
    setEditAmount(0);
    setEditDate("");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ExpenseForm
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
            {expenses.map(item => (
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
  );
}
