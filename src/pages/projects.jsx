import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { 
  Brain, 
  TrendingUp, 
  LineChart, 
  Music, 
  MessageSquare, 
  Leaf, 
  DollarSign, 
  Film, 
  Newspaper, 
  Home, 
  Activity, 
  Image 
} from 'lucide-react'

const projects = [
  // Featured ML Projects
  {
    name: 'Credit Card Fraud Detection',
    description:
      'Advanced anomaly detection system using ensemble methods to identify fraudulent transactions with 99.2% accuracy.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: DollarSign,
    category: 'Machine Learning',
  },
  {
    name: 'Customer Churn Prediction',
    description:
      'Predictive analytics model helping businesses identify at-risk customers using XGBoost and feature engineering.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: TrendingUp,
    category: 'Machine Learning',
  },
  {
    name: 'Time Series Sales Forecasting',
    description:
      'ARIMA and Prophet-based forecasting system for retail sales prediction with seasonal pattern analysis.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: LineChart,
    category: 'Machine Learning',
  },
  {
    name: 'Music Genre Classification',
    description:
      'Deep learning audio classifier using CNNs and spectrograms to categorize music across 10 genres.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: Music,
    category: 'Deep Learning',
  },
  {
    name: 'Sentiment Analysis Platform',
    description:
      'NLP pipeline for social media sentiment analysis using BERT transformers and real-time data processing.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: MessageSquare,
    category: 'NLP',
  },
  {
    name: 'Plant Disease Detection',
    description:
      'Computer vision system using ResNet50 for agricultural disease identification from leaf images.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: Leaf,
    category: 'Computer Vision',
  },
  {
    name: 'Loan Eligibility Predictor',
    description:
      'Risk assessment model using gradient boosting to automate loan approval decisions with explainable AI.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: DollarSign,
    category: 'Machine Learning',
  },
  {
    name: 'Movie Recommendation System',
    description:
      'Collaborative and content-based filtering system delivering personalized movie recommendations.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: Film,
    category: 'Machine Learning',
  },
  {
    name: 'Fake News Detection',
    description:
      'Text classification model using TF-IDF and ensemble methods to identify misinformation with high precision.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: Newspaper,
    category: 'NLP',
  },
  {
    name: 'Housing Price Prediction',
    description:
      'Regression model with advanced feature engineering for accurate real estate valuation predictions.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: Home,
    category: 'Machine Learning',
  },
  {
    name: 'Human Activity Recognition',
    description:
      'IoT sensor data analysis using LSTM networks for real-time activity classification from wearables.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: Activity,
    category: 'Deep Learning',
  },
  {
    name: 'Image Classification System',
    description:
      'Transfer learning implementation with MobileNet for efficient multi-class image recognition.',
    link: { href: 'https://github.com/Metaluv', label: 'github.com/Metaluv' },
    icon: Image,
    category: 'Computer Vision',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Jason Cardinal</title>
        <meta
          name="description"
          content="Machine learning and data science projects showcasing expertise in predictive analytics, deep learning, and AI applications."
        />
      </Head>
      <SimpleLayout
        title="Machine Learning & Data Science Portfolio"
        intro="A collection of my machine learning projects spanning computer vision, natural language processing, predictive analytics, and deep learning. Each project demonstrates practical applications of AI technologies to solve real-world problems, from fraud detection to recommendation systems."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                {project.icon && (
                  <project.icon className="h-6 w-6 text-cardinal-600 dark:text-cardinal-400" />
                )}
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              {project.category && (
                <span className="mt-2 inline-block rounded-full bg-cardinal-50 px-3 py-1 text-xs font-semibold text-cardinal-700 dark:bg-cardinal-500/10 dark:text-cardinal-400">
                  {project.category}
                </span>
              )}
              <Card.Description className="mt-2">{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-cardinal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
