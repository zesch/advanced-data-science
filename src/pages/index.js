import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Typewriter from 'typewriter-effect';
import Introduction from './introduction.mdx';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

const shuffle = require('shuffle-array');



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const taglines = shuffle(siteConfig.customFields.taglines);

  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <span className={clsx('hero__subtitle', styles.typwriterWrapper)}>
        <Typewriter
          className="asdfasdfasdf"
          options={{
            strings: taglines,
            autoStart: true,
            loop: true,
            delay: 40,
            deleteSpeed: 20,
            pauseFor: 4000,
            skipAddStyles: true,
          }}
        />
        </span>
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