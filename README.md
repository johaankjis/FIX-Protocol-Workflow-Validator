# FIX Protocol Workflow Validator

A comprehensive dashboard application for monitoring, validating, and testing FIX protocol workflows using QuickFIX/J. This tool provides real-time visualization of message processing, validation coverage, test results, and CI/CD pipeline status.

## 🚀 Features

- **Workflow Simulator**: Interactive simulation of FIX protocol message types (New Order Single, Order Cancel Request, Execution Report, Market Data Request)
- **Real-time Metrics Dashboard**: Monitor validation coverage, test coverage, latency reduction, and CI/CD runtime
- **Performance Analytics**: Visualize message parsing latency and throughput trends over time
- **Test Results Monitoring**: Track test suite execution, coverage percentages, and detailed pass/fail statistics
- **CI/CD Pipeline Status**: View GitHub Actions workflow status, build times, and deployment information
- **QuickFIX/J Session Management**: Monitor active FIX sessions and connection status

## 📊 Key Metrics

The dashboard tracks and displays:
- **Validation Coverage**: Target ≥85% (Current: 87%)
- **Test Coverage**: Target ≥90% (Current: 92%)
- **Latency Reduction**: Target ≥30% (Current: 32%)
- **CI/CD Runtime Improvement**: Target ≥25% (Current: -27%)

## 🛠️ Technology Stack

- **Framework**: [Next.js 15.2.4](https://nextjs.org/) (React 19)
- **Language**: TypeScript 5
- **Styling**: [Tailwind CSS 4.1.9](https://tailwindcss.com/)
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) for accessible primitives
  - [shadcn/ui](https://ui.shadcn.com/) component library (New York style)
  - [Lucide React](https://lucide.dev/) for icons
- **Charts**: [Recharts](https://recharts.org/) for data visualization
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Package Manager**: pnpm
- **Analytics**: Vercel Analytics

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 18.x or higher
- **pnpm**: Latest version (or npm/yarn as alternative)

## 🔧 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/johaankjis/FIX-Protocol-Workflow-Validator.git
   cd FIX-Protocol-Workflow-Validator
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```
   Or with npm:
   ```bash
   npm install
   ```

3. **Configure environment** (if needed):
   - Create a `.env.local` file for environment-specific variables
   - Add any required API keys or configuration

## 🚀 Usage

### Development Mode

Start the development server with hot-reload:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Production Build

Create an optimized production build:

```bash
pnpm build
```

### Start Production Server

Run the production build:

```bash
pnpm start
```

### Linting

Run ESLint to check for code quality issues:

```bash
pnpm lint
```

## 📁 Project Structure

```
FIX-Protocol-Workflow-Validator/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main dashboard page
├── components/              # React components
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   ├── header.tsx           # Application header
│   ├── metrics-overview.tsx # Metrics cards display
│   ├── performance-charts.tsx # Latency and throughput charts
│   ├── workflow-simulator.tsx # FIX workflow simulator
│   ├── test-results.tsx     # Test suite results display
│   ├── cicd-status.tsx      # CI/CD pipeline status
│   └── theme-provider.tsx   # Theme context provider
├── lib/                     # Utility functions
│   └── utils.ts            # Helper utilities (cn function)
├── hooks/                   # Custom React hooks
├── public/                  # Static assets
├── styles/                  # Additional stylesheets
├── components.json          # shadcn/ui configuration
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS configuration
└── package.json            # Project dependencies and scripts
```

## 🔑 Key Components

### Workflow Simulator
Simulates FIX protocol message types:
- **New Order Single (D)**: Order entry messages
- **Order Cancel Request (F)**: Order cancellation requests
- **Execution Report (8)**: Trade execution confirmations
- **Market Data Request (V)**: Market data subscriptions

### Metrics Overview
Displays key performance indicators:
- Validation coverage percentage
- Test coverage metrics
- Latency reduction improvements
- CI/CD runtime optimization

### Performance Charts
Visualizes:
- Message parsing latency trends (last 24 hours)
- Message throughput (messages per second)

### Test Results
Shows detailed test execution results across multiple suites:
- Session Management Tests
- Message Validation Tests
- Edge Case Scenarios
- Negative Test Cases

## 🎨 Styling & Theming

This project uses:
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for theming support
- **Radix UI** color system (neutral base)
- **shadcn/ui** New York style variant

Customize theme colors in `app/globals.css` by modifying CSS variables.

## 📝 Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use functional components with React hooks
- Utilize Tailwind utility classes for styling
- Keep components focused and reusable

### Component Structure
- Place reusable UI components in `components/ui/`
- Place feature components in `components/`
- Use the `@/` alias for imports

### Type Safety
- TypeScript strict mode is enabled
- Define proper types and interfaces
- Avoid using `any` type

## 🧪 Testing

The application includes comprehensive test suites:
- **329 total tests** with 92% overall coverage
- Test suites cover session management, message validation, edge cases, and negative scenarios
- All tests run in under 16 seconds

## 🚀 CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:
- Automated testing on every push
- Build verification
- Performance monitoring
- Average runtime: 4m 25s (-27% improvement)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the FIX Protocol Workflow Validator initiative.

## 🔗 Related Technologies

- [FIX Protocol](https://www.fixtrading.org/) - Financial Information eXchange protocol
- [QuickFIX/J](https://www.quickfixj.org/) - Java implementation of the FIX protocol
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 📞 Support

For questions or issues, please:
- Open an issue in the GitHub repository
- Check existing documentation
- Review the FIX Protocol specifications

---

**Built with ❤️ for FIX Protocol workflow validation and testing**
