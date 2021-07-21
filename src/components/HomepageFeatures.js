import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Surviving without a GUI',
    Svg: require('../../static/img/undraw/primary/programmer.svg').default,
    HoverSvg: require('../../static/img/undraw/secondary/programmer.svg').default,
    to: '/docs/01/01',
    description: (
      <>
       Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </>
    ),
  },
  {
    title: 'Data handling using a shell',
    Svg: require('../../static/img/undraw/primary/hacker-mind.svg').default,
    HoverSvg: require('../../static/img/undraw/secondary/hacker-mind.svg').default,
    to: '/docs/02/01',
    description: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </>
    ),
  },
  {
    title: 'Data handling with scripts',
    Svg: require('../../static/img/undraw/primary/data-processing.svg').default,
    HoverSvg: require('../../static/img/undraw/secondary/data-processing.svg').default,
    to: '/docs/03/01',
    description: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
      </>
    ),
  },
  {
    title: 'Visualization & Analysis',
    Svg: require('../../static/img/undraw/primary/data.svg').default,
    HoverSvg: require('../../static/img/undraw/secondary/data.svg').default,
    to: '/docs/04/01',
    description: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
      </>
    ),
  },
  {
    title: 'Tooling',
    Svg: require('../../static/img/undraw/primary/server-push.svg').default,
    HoverSvg: require('../../static/img/undraw/secondary/server-push.svg').default,
    to: '/docs/05/01',
    description: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
      </>
    ),
  },
  {
    title: 'Meta',
    Svg: require('../../static/img/undraw/primary/new-ideas.svg').default,
    HoverSvg: require('../../static/img/undraw/secondary/new-ideas.svg').default,
    to: '/docs/06/01',
    description: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
      </>
    ),
  },
];

function Feature({Svg, HoverSvg, title, description,to}) {
  
  const [isHover, setHover] = useState(false)

  const toggleHover = () => {
    setHover(! isHover)
  }

  return (
    <div href="" className={clsx('col col--4 ')}>
      <Link className={clsx(styles.Link)} to={to}>
      <div className={clsx(styles.cardWrapper, 'padding-bottom--lg')}>
        
        <div className={clsx("card ", styles.FeatureCard, isHover && 'shadow--md')} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>

            <div className={clsx( "text--center")}>
              <Svg className={styles.featureSvg} alt={title} />

            
          </div>
          <div className="text--center padding-horiz--md">
            <h3 >{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        
      </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}