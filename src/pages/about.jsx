import Image from 'next/image' // https://nextjs.org/docs/api-reference/next/image import the image component from the next/image module
import Head from 'next/head' // https://nextjs.org/docs/api-reference/next/head import the head component from the next/head module
import Link from 'next/link' // https://nextjs.org/docs/api-reference/next/link import the link component from the next/link module
import clsx from 'clsx' // import the clsx module to help with conditional class names

import { Container } from '@/components/Container' // import the container component from the components folder
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons' // import the social icons from the components folder
import ctcLogo from '@/images/logos/CTC_LOGO.svg' // import the business logo from the images folder

function SocialLink({ className, href, children, icon: Icon }) { // create a social link component that takes in a class name, href, children, and icon as props
  return ( // return the following jsx code to the page when the component is called in the page 
    <li className={clsx(className, 'flex')}>       {/** use the clsx module to conditionally add the class name to the li element if it is passed in as a prop*/}
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jason Cardinal</title>
        <meta
          name="description"
          content="Consultant based in Saskatchewan focused on software, data, web, automation, and robotics."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={ctcLogo}
                alt="Cardinal Trading Co."
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-white p-8 object-contain shadow-lg dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Jason Cardinal, a consultant helping teams deliver practical technology.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I believe technology should be useful, understandable, and respectful of real-world constraints. My work starts by listening, clarifying outcomes, and designing a path that balances speed with maintainability.
              </p>
              <p>
                My background spans software and data, automation and digital agriculture, and early robotics prototyping. I bring a hands-on, delivery-focused approach to each engagement, whether that’s a lightweight API, a data pipeline, or an automation that removes hours of manual work.
              </p>
              <p>
                Outside of work, I enjoy time with family, learning new tools and techniques, and staying active. I’m also a certified sRPAS VLOS drone pilot with a strong interest in sensing, autonomy, and field robotics.
              </p>
              <p>
                Today, I serve as Community Navigator for Flying Dust First Nation and lead Cardinal Trading Co., where I partner with organizations to build practical solutions that compound over time.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/Metaluv" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/cardinal-j/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:j@cardinaltrading.co"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                j@cardinaltrading.co
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
