import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import KPICards from './KPICards';
import SalesChart from './SalesChart';
import TransactionsTable from './TransactionsTable';
import { RefreshCw } from 'lucide-react';

const Dashboard = ({ user, onLogout }) => {
  const [kpis, setKpis] = useState(null);
  const [salesData, setSalesData] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const [kpisRes, salesRes, transactionsRes] = await Promise.all([
        axios.get('http://localhost:5000/kpis'),
        axios.get('http://localhost:5000/sales'),
        axios.get('http://localhost:5000/transactions'),
      ]);

      setKpis(kpisRes.data);
      setSalesData(salesRes.data);
      setTransactions(transactionsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />
      
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user.username}!
              </h1>
              <p className="text-gray-600">Here's what's happening with your investments today.</p>
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="mt-4 sm:mt-0 flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>

          <div className="space-y-8">
            {kpis && <KPICards kpis={kpis} />}
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <SalesChart data={salesData} />
              </div>
              <div className="lg:col-span-1">
                <TransactionsTable transactions={transactions} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;