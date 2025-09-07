# InvestConnect AI - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication

### Login
Authenticate a user and receive a JWT token.

**Endpoint:** `POST /api/login`

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 1,
    "username": "admin",
    "role": "admin",
    "email": "admin@investconnect.ai",
    "firstName": "John",
    "lastName": "Admin",
    "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  "token": "jwt_token_1_1725717530000"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

## User Management

### Get User Profile
Retrieve user profile information.

**Endpoint:** `GET /api/profile/:userId`

**Parameters:**
- `userId` (path parameter): User ID

**Response:**
```json
{
  "id": 1,
  "username": "admin",
  "role": "admin",
  "email": "admin@investconnect.ai",
  "firstName": "John",
  "lastName": "Admin",
  "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
}
```

## Dashboard Data

### Get KPIs
Retrieve key performance indicators.

**Endpoint:** `GET /api/kpis`

**Response:**
```json
{
  "totalSales": 2450000,
  "activeCustomers": 1847,
  "dailyRevenue": 12500,
  "monthlyGrowth": 15.8,
  "portfolioValue": 8750000,
  "totalInvestments": 156,
  "avgReturn": 12.4,
  "riskScore": 6.2
}
```

### Get Sales Data
Retrieve sales data with optional period filtering.

**Endpoint:** `GET /api/sales`

**Query Parameters:**
- `period` (optional): `7d` or `30d` (default: `7d`)

**Response:**
```json
[
  {
    "date": "2025-09-01",
    "sales": 11500,
    "investments": 22,
    "returns": 12.8
  },
  {
    "date": "2025-09-02",
    "sales": 10800,
    "investments": 19,
    "returns": 11.2
  }
]
```

### Get Transactions
Retrieve paginated transaction data with filtering options.

**Endpoint:** `GET /api/transactions`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `status` (optional): Filter by status (`completed`, `pending`, `processing`, `all`)
- `type` (optional): Filter by type (`investment`, `withdrawal`, `all`)

**Response:**
```json
{
  "transactions": [
    {
      "id": 1,
      "customer": "TechCorp Ventures",
      "amount": 125000,
      "date": "2025-09-07",
      "type": "investment",
      "status": "completed",
      "category": "Technology",
      "roi": 18.5
    }
  ],
  "total": 6,
  "page": 1,
  "totalPages": 1
}
```

## Portfolio Management

### Get Portfolio Data
Retrieve complete portfolio holdings and allocation.

**Endpoint:** `GET /api/portfolio`

**Response:**
```json
[
  {
    "id": 1,
    "name": "Tech Growth Fund",
    "value": 1250000,
    "allocation": 28.5,
    "performance": 18.2,
    "risk": "High",
    "category": "Technology"
  },
  {
    "id": 2,
    "name": "Healthcare Innovation",
    "value": 980000,
    "allocation": 22.3,
    "performance": 15.7,
    "risk": "Medium",
    "category": "Healthcare"
  }
]
```

## AI Insights

### Get Market Insights
Retrieve AI-generated market insights and predictions.

**Endpoint:** `GET /api/insights`

**Response:**
```json
[
  {
    "id": 1,
    "title": "AI Technology Sector Surge",
    "description": "Artificial Intelligence stocks showing strong momentum with 25% growth this quarter.",
    "impact": "positive",
    "confidence": 85,
    "date": "2025-09-07"
  },
  {
    "id": 2,
    "title": "Healthcare Innovation Opportunities",
    "description": "Biotech companies developing breakthrough treatments present high-growth potential.",
    "impact": "positive",
    "confidence": 78,
    "date": "2025-09-06"
  }
]
```

## Analytics

### Get Analytics Data
Retrieve comprehensive analytics and trends.

**Endpoint:** `GET /api/analytics`

**Response:**
```json
{
  "totalUsers": 3,
  "activeInvestments": 4,
  "averageInvestment": 119666.67,
  "topPerformingCategory": "Technology",
  "riskDistribution": {
    "low": 35,
    "medium": 45,
    "high": 20
  },
  "monthlyTrends": {
    "investments": [12, 15, 18, 22, 28, 31],
    "returns": [8.2, 9.1, 10.5, 11.8, 12.4, 13.7]
  }
}
```

## System

### Health Check
Check API health and status.

**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-09-07T14:48:50.000Z",
  "version": "1.0.0"
}
```

## Error Handling

### Standard Error Response
All endpoints return errors in the following format:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information (development only)"
}
```

### HTTP Status Codes
- `200` - Success
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication required)
- `404` - Not Found (resource doesn't exist)
- `500` - Internal Server Error

## Rate Limiting
- **Limit:** 100 requests per 15 minutes per IP
- **Headers:** Rate limit information included in response headers

## CORS Policy
- **Allowed Origins:** `http://localhost:3000`, `http://localhost:5173`
- **Allowed Methods:** GET, POST, PUT, DELETE, OPTIONS
- **Allowed Headers:** Content-Type, Authorization

## Data Models

### User
```typescript
interface User {
  id: number;
  username: string;
  role: 'admin' | 'investor' | 'analyst';
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}
```

### Transaction
```typescript
interface Transaction {
  id: number;
  customer: string;
  amount: number;
  date: string;
  type: 'investment' | 'withdrawal';
  status: 'completed' | 'pending' | 'processing';
  category: string;
  roi: number;
}
```

### Portfolio Item
```typescript
interface PortfolioItem {
  id: number;
  name: string;
  value: number;
  allocation: number;
  performance: number;
  risk: 'Low' | 'Medium' | 'High';
  category: string;
}
```

### Market Insight
```typescript
interface MarketInsight {
  id: number;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  date: string;
}
```

## Demo Data

### Test Users
1. **Admin User**
   - Username: `admin`
   - Password: `admin123`
   - Role: `admin`

2. **Investor User**
   - Username: `investor`
   - Password: `investor123`
   - Role: `investor`

3. **Analyst User**
   - Username: `analyst`
   - Password: `analyst123`
   - Role: `analyst`

## Security Considerations

### Input Validation
- All inputs are validated server-side
- SQL injection protection (when using database)
- XSS protection through proper encoding

### Authentication
- JWT tokens for session management
- Password hashing with bcrypt
- Secure token storage recommendations

### Best Practices
- Use HTTPS in production
- Implement proper logging
- Regular security audits
- Keep dependencies updated

## Development

### Local Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`
4. Server runs on `http://localhost:5000`

### Environment Variables
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_here
CORS_ORIGIN=http://localhost:3000
```

### Testing
```bash
# Run API tests
npm test

# Test specific endpoint
curl -X GET http://localhost:5000/api/health
```

---

For more information, visit the [main documentation](README.md) or contact support at support@investconnect.ai.
