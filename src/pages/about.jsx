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
import portraitImage from '@/images/profilepicture.png' // import the profile picture from the images folder

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
          content="I???m Jason Cardinal. I live in Saskatchewan, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I???m Jason Cardinal. I live in Saskatchewan, where I design the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I believe that people are at the heart of everythign we do. I am dedicated to empowering people by listening to them and understanding their needs, then providing them with the tools they need to succeed.
              </p>
              <p>
                I have a background in finance and technology, and I am currently working on a project to help people learn about the stock market. I recently graduated from the University of Saskatchewan with a Bachelor of Science degree, and I am currently working on Automation & Digital Agriculture.
              </p>
              <p>
                I spent enjoy spending time with my family, playing video games, and learning about new technologies. I also enjoy wakeboarding, snowboarding, and playing the guitar. I also have a passion for robotics, artificial intelligence, and I am drone pilot with a sRPAS VLOS certificate.
              </p>
              <p>
                Today, I???m the Community Navigator for Flying Dust First Nation and the founder of Cardinal Trading Co. & Emberstone Fusion Kitchen, where we are working on finding ways to help people enter the e-commerce space.
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
