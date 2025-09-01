# Jason Cardinal Portfolio

Professional portfolio website showcasing expertise in software development, data science, machine learning, and consulting services.

🌐 **Live Site**: [https://cardinal-portfolio.vercel.app](https://cardinal-portfolio.vercel.app)

## Overview

This portfolio website highlights my work as a technology consultant specializing in:
- **Machine Learning & AI**: Deep learning, NLP, computer vision projects
- **Data Science**: Predictive analytics, time series forecasting, recommendation systems
- **Software Development**: Full-stack applications, automation solutions
- **Web Development**: Modern web applications using React/Next.js
- **Robotics & IoT**: Prototype development and sensor integration

## Features

- **Responsive Design**: Fully responsive layout optimized for all devices
- **Dark Mode**: Automatic theme switching with manual toggle
- **Project Showcase**: Detailed portfolio of machine learning and software projects
- **Professional Services**: Comprehensive service offerings page
- **Blog/Articles**: Technical writing and thought leadership content
- **About Section**: Professional background and expertise
- **Contact Integration**: Direct email contact functionality

## Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org) - React framework with SSG/SSR
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **UI Components**: [Headless UI](https://headlessui.dev) - Unstyled, accessible components
- **Content**: [MDX](https://mdxjs.com) - Markdown with JSX for articles
- **Deployment**: [Vercel](https://vercel.com) - Optimized hosting platform
- **Node Version**: 22.x

## Project Structure

```
cardinal_portfolio/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/         # Next.js pages and routes
│   │   ├── index.jsx     # Home page
│   │   ├── about.jsx     # About page
│   │   ├── services.jsx  # Services page
│   │   ├── projects.jsx  # ML/AI projects portfolio
│   │   ├── articles/     # Blog posts and articles
│   │   └── speaking.jsx  # Presentations page
│   ├── images/        # Static images and assets
│   ├── lib/          # Utility functions and helpers
│   └── styles/       # Global styles
├── public/           # Public assets
└── package.json      # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 22.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Metaluv/cardinal_portfolio.git
cd cardinal_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file for environment variables:
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Deployment

The site is configured for automatic deployment on Vercel:

1. Push changes to the `main` branch
2. Vercel automatically builds and deploys
3. Preview deployments are created for pull requests

### Manual Deployment

```bash
npm run build
npm run start
```

## Featured Projects

The portfolio showcases 12+ machine learning projects including:
- Credit Card Fraud Detection (99.2% accuracy)
- Customer Churn Prediction (XGBoost)
- Time Series Sales Forecasting (ARIMA/Prophet)
- Music Genre Classification (CNN/Spectrograms)
- Sentiment Analysis (BERT Transformers)
- Plant Disease Detection (ResNet50)
- And more...

## Customization

### Adding New Projects

Edit `src/pages/projects.jsx` to add new projects to the portfolio.

### Updating Services

Modify `src/pages/services.jsx` to update service offerings.

### Writing Articles

Add new MDX files to `src/pages/articles/` for blog posts.

### Styling

Tailwind CSS classes can be customized in `tailwind.config.js`.

## Contact

**Jason Cardinal**  
Email: j@cardinaltrading.co  
Location: Meadow Lake, Saskatchewan  
Company: Cardinal Trading Co.

## License

This project uses the Tailwind UI template and is subject to its [license](https://tailwindui.com/license).

## Acknowledgments

- Built with Next.js and Tailwind CSS
- Deployed on Vercel
- Original template from Tailwind UI