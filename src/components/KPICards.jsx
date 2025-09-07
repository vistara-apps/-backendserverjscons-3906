import React from 'react';
import { TrendingUp, Users, DollarSign, BarChart3 } from 'lucide-react';

const KPICards = ({ kpis }) => {
  const cards = [
    {
      title: 'Total Sales',
      value: `$${kpis.totalSales.toLocaleString()}`,
      icon: DollarSign,
      change: '+12.5%',
      changeType: 'positive',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'Active Customers',
      value: kpis.activeCustomers.toLocaleString(),
      icon: Users,
      change: '+8.2%',
      changeType: 'positive',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Daily Revenue',
      value: `$${kpis.dailyRevenue.toLocaleString()}`,
      icon: TrendingUp,
      change: '+5.4%',
      changeType: 'positive',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'Growth Rate',
      value: '23.5%',
      icon: BarChart3,
      change: '+3.1%',
      changeType: 'positive',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                card.changeType === 'positive' 
                  ? 'text-green-700 bg-green-100' 
                  : 'text-red-700 bg-red-100'
              }`}>
                {card.change}
              </span>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">{card.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPICards;