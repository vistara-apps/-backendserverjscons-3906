import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import KPICards from './KPICards';
import SalesChart from './SalesChart';
import TransactionsTable from './TransactionsTable';
import PortfolioView from './PortfolioView';
import MarketInsights from './MarketInsights';
import { RefreshCw, BarChart3, PieChart, Brain, Home } from 'lucide-react';

const Dashboard = ({ user, onLogout }) => {
  const [kpis, setKpis] = useState(null);
  const [salesData, setSalesData] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const fetchData = async () => {
    try {
      const [kpisRes, salesRes, transactionsRes] = await Promise.all([
        axios.get('http://localhost:5000/api/kpis'),
        axios.get('http://localhost:5000/api/sales'),
        axios.get('http://localhost:5000/api/transactions'),
      ]);

      setKpis(kpisRes.data);
      setSalesData(salesRes.data);
      setTransactions(transactionsRes.data.transactions || transactionsRes.data);
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

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Home },
    { id: 'portfolio', name: 'Portfolio', icon: PieChart },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'insights', name: 'AI Insights', icon: Brain },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'portfolio':
        return <PortfolioView />;
      case 'analytics':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <SalesChart data={salesData} />
              </div>
              <div className="lg:col-span-1">
                <TransactionsTable transactions={transactions} />
              </div>
            </div>
          </div>
        );
      case 'insights':
        return <MarketInsights />;
      default:
        return (
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
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />
      
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user.firstName || user.username}!
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

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {tab.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
