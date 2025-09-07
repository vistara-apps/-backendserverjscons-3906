const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Enhanced user data with more realistic profiles
const users = [
  { 
    id: 1,
    username: 'admin', 
    password: 'admin123', 
    role: 'admin',
    email: 'admin@investconnect.ai',
    firstName: 'John',
    lastName: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  { 
    id: 2,
    username: 'investor', 
    password: 'investor123', 
    role: 'investor',
    email: 'investor@investconnect.ai',
    firstName: 'Sarah',
    lastName: 'Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  { 
    id: 3,
    username: 'analyst', 
    password: 'analyst123', 
    role: 'analyst',
    email: 'analyst@investconnect.ai',
    firstName: 'Michael',
    lastName: 'Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  }
];

// Enhanced KPI data with more metrics
const kpis = {
  totalSales: 2450000,
  activeCustomers: 1847,
  dailyRevenue: 12500,
  monthlyGrowth: 15.8,
  portfolioValue: 8750000,
  totalInvestments: 156,
  avgReturn: 12.4,
  riskScore: 6.2
};

// Enhanced sales data with more data points
const salesData = [
  { date: '2025-08-28', sales: 8200, investments: 12, returns: 9.2 },
  { date: '2025-08-29', sales: 9100, investments: 15, returns: 10.1 },
  { date: '2025-08-30', sales: 8800, investments: 11, returns: 8.9 },
  { date: '2025-08-31', sales: 10200, investments: 18, returns: 11.5 },
  { date: '2025-09-01', sales: 11500, investments: 22, returns: 12.8 },
  { date: '2025-09-02', sales: 10800, investments: 19, returns: 11.2 },
  { date: '2025-09-03', sales: 12200, investments: 25, returns: 13.4 },
  { date: '2025-09-04', sales: 11900, investments: 21, returns: 12.1 },
  { date: '2025-09-05', sales: 13100, investments: 28, returns: 14.2 },
  { date: '2025-09-06', sales: 12500, investments: 24, returns: 13.0 },
  { date: '2025-09-07', sales: 14200, investments: 31, returns: 15.1 }
];

// Enhanced transaction data
const transactions = [
  { 
    id: 1, 
    customer: 'TechCorp Ventures', 
    amount: 125000, 
    date: '2025-09-07',
    type: 'investment',
    status: 'completed',
    category: 'Technology',
    roi: 18.5
  },
  { 
    id: 2, 
    customer: 'Green Energy Fund', 
    amount: 89000, 
    date: '2025-09-06',
    type: 'investment',
    status: 'pending',
    category: 'Energy',
    roi: 12.3
  },
  { 
    id: 3, 
    customer: 'Healthcare Innovation', 
    amount: 156000, 
    date: '2025-09-05',
    type: 'investment',
    status: 'completed',
    category: 'Healthcare',
    roi: 22.1
  },
  { 
    id: 4, 
    customer: 'FinTech Solutions', 
    amount: 78000, 
    date: '2025-09-04',
    type: 'withdrawal',
    status: 'completed',
    category: 'Financial',
    roi: 15.7
  },
  { 
    id: 5, 
    customer: 'AI Robotics Ltd', 
    amount: 203000, 
    date: '2025-09-03',
    type: 'investment',
    status: 'completed',
    category: 'Technology',
    roi: 28.9
  },
  { 
    id: 6, 
    customer: 'Sustainable Agriculture', 
    amount: 67000, 
    date: '2025-09-02',
    type: 'investment',
    status: 'processing',
    category: 'Agriculture',
    roi: 9.4
  }
];

// Investment portfolio data
const portfolioData = [
  { 
    id: 1,
    name: 'Tech Growth Fund',
    value: 1250000,
    allocation: 28.5,
    performance: 18.2,
    risk: 'High',
    category: 'Technology'
  },
  { 
    id: 2,
    name: 'Healthcare Innovation',
    value: 980000,
    allocation: 22.3,
    performance: 15.7,
    risk: 'Medium',
    category: 'Healthcare'
  },
  { 
    id: 3,
    name: 'Green Energy ETF',
    value: 750000,
    allocation: 17.1,
    performance: 12.4,
    risk: 'Medium',
    category: 'Energy'
  },
  { 
    id: 4,
    name: 'Financial Services',
    value: 620000,
    allocation: 14.1,
    performance: 9.8,
    risk: 'Low',
    category: 'Financial'
  },
  { 
    id: 5,
    name: 'Real Estate REIT',
    value: 800000,
    allocation: 18.0,
    performance: 11.3,
    risk: 'Low',
    category: 'Real Estate'
  }
];

// Market insights data
const marketInsights = [
  {
    id: 1,
    title: 'AI Technology Sector Surge',
    description: 'Artificial Intelligence stocks showing strong momentum with 25% growth this quarter.',
    impact: 'positive',
    confidence: 85,
    date: '2025-09-07'
  },
  {
    id: 2,
    title: 'Healthcare Innovation Opportunities',
    description: 'Biotech companies developing breakthrough treatments present high-growth potential.',
    impact: 'positive',
    confidence: 78,
    date: '2025-09-06'
  },
  {
    id: 3,
    title: 'Energy Sector Volatility',
    description: 'Renewable energy markets experiencing short-term fluctuations due to policy changes.',
    impact: 'neutral',
    confidence: 72,
    date: '2025-09-05'
  },
  {
    id: 4,
    title: 'Interest Rate Impact',
    description: 'Federal Reserve decisions may affect growth stock valuations in coming months.',
    impact: 'negative',
    confidence: 68,
    date: '2025-09-04'
  }
];

// API Routes

// Authentication
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ 
      success: false, 
      message: 'Username and password are required' 
    });
  }
  
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    const { password, ...userWithoutPassword } = user;
    res.json({ 
      success: true, 
      user: userWithoutPassword,
      token: `jwt_token_${user.id}_${Date.now()}` // Mock JWT token
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid credentials' 
    });
  }
});

// User profile
app.get('/api/profile/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find(u => u.id === userId);
  
  if (user) {
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// KPIs
app.get('/api/kpis', (req, res) => {
  res.json(kpis);
});

// Sales data
app.get('/api/sales', (req, res) => {
  const { period = '7d' } = req.query;
  
  let filteredData = salesData;
  
  if (period === '30d') {
    // Return more data for 30-day period
    filteredData = salesData;
  } else if (period === '7d') {
    // Return last 7 days
    filteredData = salesData.slice(-7);
  }
  
  res.json(filteredData);
});

// Transactions
app.get('/api/transactions', (req, res) => {
  const { page = 1, limit = 10, status, type } = req.query;
  
  let filteredTransactions = transactions;
  
  // Filter by status
  if (status && status !== 'all') {
    filteredTransactions = filteredTransactions.filter(t => t.status === status);
  }
  
  // Filter by type
  if (type && type !== 'all') {
    filteredTransactions = filteredTransactions.filter(t => t.type === type);
  }
  
  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);
  
  res.json({
    transactions: paginatedTransactions,
    total: filteredTransactions.length,
    page: parseInt(page),
    totalPages: Math.ceil(filteredTransactions.length / limit)
  });
});

// Portfolio data
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// Market insights
app.get('/api/insights', (req, res) => {
  res.json(marketInsights);
});

// Analytics endpoint
app.get('/api/analytics', (req, res) => {
  const analytics = {
    totalUsers: users.length,
    activeInvestments: transactions.filter(t => t.status === 'completed').length,
    averageInvestment: transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length,
    topPerformingCategory: 'Technology',
    riskDistribution: {
      low: 35,
      medium: 45,
      high: 20
    },
    monthlyTrends: {
      investments: [12, 15, 18, 22, 28, 31],
      returns: [8.2, 9.1, 10.5, 11.8, 12.4, 13.7]
    }
  };
  
  res.json(analytics);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'API endpoint not found' 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 InvestConnect AI Server running on http://localhost:${PORT}`);
  console.log(`📊 API Documentation available at http://localhost:${PORT}/api/health`);
});

module.exports = app;
