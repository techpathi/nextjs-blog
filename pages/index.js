import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am Venkatapathi Raju. Let's talk all things MERN. I speak
          Javascript. I work in Infosys Limited as a Systems Engineer. I love ☕
          and 🚀🚀, to be precise, the Starship. 🔭 I’m currently working on
          MERN stack 🌱 I’m currently learning JavaScript data structures 💬 Ask
          me about tech, space travel, books and everything else.
        </p>
        <p>
          Know more about me at{' '}
          <a href='https://techpathi.dev'>techpathi.dev</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd}${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={'posts/' + id}>{title}</Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
