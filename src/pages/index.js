import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import uniqueRandomArray from 'unique-random-array';
// import Typist from 'react-typist';
// import HomepageFeatures from '../components/HomepageFeatures';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {taglines} = siteConfig.customFields;
  const randomTagline = uniqueRandomArray(taglines);
  const [subtitle, setSubtitle] = useState(randomTagline());

  useEffect(()=>{
      const interval = setInterval(() => {
        setSubtitle(randomTagline);
      }, 5000)
      return () => clearInterval(interval);
  })

  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            lectures
          </Link>
          <Link
            className="button button--secondary button--outline button--lg margin-left--lg"
            to="/docs/">
            Unix Shell installation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}