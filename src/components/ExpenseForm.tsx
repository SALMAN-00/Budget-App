export default function ExpenseForm({
  handleChangeSource,
  handleChangeAmount,
  handleChangeDate,
  handleSubmit,
  sourceValue,
  amountValue,
  dateValue,
}) {
  return (
    <div className="max-w-xl mx-auto my-8">
    <h1 className="text-3xl">Expense</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="source" className="block text-sm font-medium text-gray-700">Source</label>
        <input
          type="text"
          id="source"
          value={sourceValue}
          onChange={handleChangeSource}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          id="amount"
          value={amountValue}
          onChange={handleChangeAmount}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          value={dateValue}
          onChange={handleChangeDate}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <button type="submit" className="mt-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Add Expense
      </button>
    </form>
  </div>
  );
}
