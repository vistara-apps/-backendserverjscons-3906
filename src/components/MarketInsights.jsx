import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TrendingUp, TrendingDown, AlertCircle, Brain, Calendar } from 'lucide-react';

const MarketInsights = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/insights');
        setInsights(response.data);
      } catch (error) {
        console.error('Error fetching market insights:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  const getImpactIcon = (impact) => {
    switch (impact) {
      case 'positive':
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'negative':
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'positive':
        return 'border-green-200 bg-green-50';
      case 'negative':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-yellow-200 bg-yellow-50';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 80) return 'text-green-600 bg-green-100';
    if (confidence >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Brain className="w-6 h-6 text-purple-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">AI Market Insights</h2>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className={`border rounded-lg p-4 transition-all duration-200 hover:shadow-md ${getImpactColor(insight.impact)}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                {getImpactIcon(insight.impact)}
                <h3 className="text-lg font-medium text-gray-900 ml-2">
                  {insight.title}
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getConfidenceColor(insight.confidence)}`}>
                  {insight.confidence}% confidence
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(insight.date).toLocaleDateString()}
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              {insight.description}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Impact:</span>
                <span className={`text-sm font-medium capitalize ${
                  insight.impact === 'positive' ? 'text-green-600' :
                  insight.impact === 'negative' ? 'text-red-600' : 'text-yellow-600'
                }`}>
                  {insight.impact}
                </span>
              </div>
              
              <div className="w-full max-w-xs ml-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Confidence Level</span>
                  <span>{insight.confidence}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      insight.confidence >= 80 ? 'bg-green-500' :
                      insight.confidence >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${insight.confidence}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {insights.length === 0 && !loading && (
        <div className="text-center py-8">
          <Brain className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No market insights available at the moment.</p>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
          <div>
            <h4 className="text-sm font-medium text-blue-900 mb-1">
              AI-Powered Analysis
            </h4>
            <p className="text-sm text-blue-700">
              These insights are generated using advanced AI algorithms that analyze market trends, 
              news sentiment, and historical data patterns. Use them as part of your investment 
              research, but always conduct your own due diligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
