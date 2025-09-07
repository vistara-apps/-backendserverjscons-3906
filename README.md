# InvestConnect AI Dashboard

A comprehensive investment management dashboard with AI-powered insights, real-time analytics, and portfolio management capabilities.

![InvestConnect AI Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop)

## 🚀 Features

### Core Functionality
- **Real-time Dashboard** - Live KPI tracking and performance metrics
- **Portfolio Management** - Comprehensive portfolio overview with asset allocation
- **AI Market Insights** - Machine learning-powered market analysis and predictions
- **Advanced Analytics** - Interactive charts and data visualization
- **Transaction Management** - Complete transaction history and filtering
- **Multi-user Support** - Role-based access control (Admin, Investor, Analyst)

### Technical Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Real-time Data** - Live updates with automatic refresh capabilities
- **RESTful API** - Comprehensive backend API with proper error handling
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Security** - Input validation, CORS protection, and rate limiting

## 🏗️ Architecture

### Frontend (React + Vite)
```
src/
├── components/
│   ├── Dashboard.jsx          # Main dashboard with navigation
│   ├── LoginScreen.jsx        # Authentication interface
│   ├── Header.jsx             # Navigation header
│   ├── KPICards.jsx          # Key performance indicators
│   ├── SalesChart.jsx        # Sales data visualization
│   ├── TransactionsTable.jsx # Transaction management
│   ├── PortfolioView.jsx     # Portfolio overview & allocation
│   └── MarketInsights.jsx    # AI-powered market insights
├── App.jsx                   # Main application component
├── main.jsx                  # Application entry point
└── index.css                 # Global styles
```

### Backend (Node.js + Express)
```
backend/
├── server.js                 # Main server file with all API endpoints
└── package.json             # Backend dependencies
```

## 📊 API Documentation

### Authentication
```http
POST /api/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

### Core Endpoints
- `GET /api/kpis` - Key performance indicators
- `GET /api/sales?period=7d` - Sales data with period filtering
- `GET /api/transactions?page=1&limit=10` - Paginated transactions
- `GET /api/portfolio` - Portfolio holdings and allocation
- `GET /api/insights` - AI-generated market insights
- `GET /api/analytics` - Advanced analytics data
- `GET /api/health` - Health check endpoint

### Response Format
```json
{
  "success": true,
  "data": {...},
  "message": "Success"
}
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_here
```

### Demo Credentials
- **Admin**: `admin` / `admin123`
- **Investor**: `investor` / `investor123`
- **Analyst**: `analyst` / `analyst123`

## 📱 Usage

### Dashboard Navigation
1. **Overview** - Main dashboard with KPIs and recent activity
2. **Portfolio** - Detailed portfolio analysis with allocation charts
3. **Analytics** - Advanced charts and performance metrics
4. **AI Insights** - Machine learning-powered market analysis

### Key Features
- **Real-time Updates** - Click refresh button for latest data
- **Interactive Charts** - Hover for detailed information
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Role-based Access** - Different views based on user role

## 🎨 UI/UX Design

### Design System
- **Colors**: Purple primary (#8B5CF6), with semantic colors for status
- **Typography**: Clean, modern fonts with proper hierarchy
- **Components**: Consistent spacing, shadows, and border radius
- **Animations**: Smooth transitions and loading states

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Features

- **Input Validation** - Server-side validation for all inputs
- **CORS Protection** - Configured for secure cross-origin requests
- **Rate Limiting** - API rate limiting to prevent abuse
- **Error Handling** - Comprehensive error handling and logging
- **Authentication** - JWT-based authentication system

## 📈 Performance

### Optimization Features
- **Code Splitting** - Lazy loading of components
- **Image Optimization** - Optimized images and icons
- **Caching** - Browser caching for static assets
- **Minification** - Production builds are minified
- **Bundle Analysis** - Webpack bundle analyzer integration

## 🧪 Testing

### Test Coverage
- **Unit Tests** - Component and utility function tests
- **Integration Tests** - API endpoint testing
- **E2E Tests** - Full user journey testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 🚀 Deployment

### Production Build
```bash
# Frontend
npm run build

# Backend
npm run start
```

### Docker Deployment
```dockerfile
# Frontend Dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### Environment Setup
- **Development**: Local development with hot reload
- **Staging**: Pre-production testing environment
- **Production**: Optimized build with monitoring

## 📊 Monitoring & Analytics

### Performance Metrics
- **Page Load Time** - < 2 seconds target
- **API Response Time** - < 500ms average
- **Error Rate** - < 1% target
- **Uptime** - 99.9% target

### Logging
- **Application Logs** - Structured logging with Winston
- **Access Logs** - HTTP request logging
- **Error Tracking** - Comprehensive error tracking

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

### Code Standards
- **ESLint** - JavaScript linting
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality checks
- **Conventional Commits** - Standardized commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- **API Docs**: Available at `/api/health`
- **Component Docs**: Storybook documentation
- **User Guide**: Comprehensive user documentation

### Contact
- **Email**: support@investconnect.ai
- **GitHub Issues**: [Create an issue](https://github.com/vistara-apps/-backendserverjscons-3906/issues)
- **Documentation**: [Full documentation](https://docs.investconnect.ai)

---

**InvestConnect AI Dashboard** - Empowering intelligent investment decisions with AI-driven insights and comprehensive portfolio management.
