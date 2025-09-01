import Head from 'next/head'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'

const services = [
  {
    name: 'Software Development',
    description:
      'Design and build reliable applications and APIs with a focus on clarity, maintainability, and delivery speed.',
    points: [
      'Architecture, code reviews, and roadmapping',
      'Backend APIs (Node.js, Python) and integrations',
      'CLI tools, data pipelines, and scripting',
      'Cloud-native patterns and deployment guidance',
    ],
  },
  {
    name: 'Data Science & AI',
    description:
      'Turn data into decisions with analytics, ML prototypes, and production-ready data workflows.',
    points: [
      'Exploratory analysis, dashboards, and KPIs',
      'Predictive modeling and rapid ML prototyping',
      'Data engineering and ETL/ELT pipeline design',
      'MLOps guidance and model evaluation',
    ],
  },
  {
    name: 'Web Development',
    description:
      'Modern, fast websites and web apps focused on usability, performance, and accessibility.',
    points: [
      'Next.js, React, Tailwind, and component systems',
      'Content modeling and CMS integration',
      'SEO, performance tuning, and accessibility',
      'Design implementation and responsive UX',
    ],
  },
  {
    name: 'Process Automation',
    description:
      'Automate repetitive tasks and connect systems to reduce errors and unlock team capacity.',
    points: [
      'Workflow design and orchestration',
      'APIs, webhooks, and system integrations',
      'Robust monitoring and alerting patterns',
      'Documentation and handoff for operators',
    ],
  },
  {
    name: 'Robotics & Embedded',
    description:
      'Prototype and validate robotics ideas—from sensors to control loops and field tests.',
    points: [
      'Sensor selection and data acquisition',
      'Control software and simulation-first testing',
      'Edge deployment and telemetry collection',
      'Safety, validation, and iteration plans',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Jason Cardinal</title>
        <meta
          name="description"
          content="Consulting services: software development, data science & AI, web development, automation, and robotics."
        />
      </Head>
      <SimpleLayout
        title="Consulting Services"
        intro="I help teams ship software, build data products, automate workflows, and prototype robotics systems. Engagements are pragmatic, outcomes-focused, and tailored to your constraints."
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {services.map((svc) => (
            <Card as="section" key={svc.name}>
              <Card.Title>{svc.name}</Card.Title>
              <Card.Description>
                <p className="mb-4">{svc.description}</p>
                <ul className="list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-400">
                  {svc.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Card.Description>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button href="mailto:j@cardinaltrading.co">Email me</Button>
          <Link
            href="/projects"
            className="text-sm font-medium text-teal-600 transition hover:text-teal-500 dark:text-teal-400"
          >
            See selected work →
          </Link>
        </div>
      </SimpleLayout>
    </>
  )
}

