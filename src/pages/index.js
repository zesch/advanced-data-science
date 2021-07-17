import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Typewriter from 'typewriter-effect';
import Introduction from './introduction.mdx';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import TypewriterConsole from '@site/src/components/TypewriterConsole';

const shuffle = require('shuffle-array');



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const tagline = siteConfig.tagline;

  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <div className="row">
         <div className="col col--6">
          <h1 className="hero__title">{siteConfig.title}</h1>
            <p className={clsx('hero__subtitle')}>
              {tagline}
            </p>
            <div className={styles.buttons}>

                <Link
                  className="button button--primary button--lg margin-bottom--md margin-right--lg"
                  to="/docs/01/01/">
                  Lectures
                </Link>
                <Link
                  className="button button--secondary button--lg margin-bottom--md"
                  to="/setup/">
                  Setup
                </Link>

            </div>
         </div>
         <div className="col margin-top--lg">
          <TypewriterConsole />
         </div>
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
        <HomepageFeatures />
        <div className="container padding-top--lg padding-bottom--lg">
          <div className="markdown ">
          </div>
        </div>
      </main>
    </Layout>
  );
}