import Head from 'next/head'
import Header from '../components/header'
import Image from 'next/image'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='bg-image'></div>
      <Header />
      <section className={utilStyles.headingMd}>
        <p>Hello! I'm a software developer and student passionate about leveraging machine learning and object-oriented programming to improve human connections and solve real-world problems.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Work</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {/* <Image
        layout="fill"
        className="object-center object-cover pointer-events-none bg-image"
        src={require('../public/images/bg.jpg')}
        alt="Apple Macbook Background"
      /> */}
    </Layout>
  )
}