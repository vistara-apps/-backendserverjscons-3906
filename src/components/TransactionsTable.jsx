import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const TransactionsTable = ({ transactions }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Recent Transactions</h2>
        <p className="text-sm text-gray-600">Latest customer transactions</p>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{transaction.customer}</h3>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">${transaction.amount}</p>
              <p className="text-sm text-green-600">+${transaction.amount}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium">
          View all transactions
        </button>
      </div>
    </div>
  );
};

export default TransactionsTable;