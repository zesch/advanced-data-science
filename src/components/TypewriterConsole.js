import React from 'react';
import styles from './TypewriterConsole.module.css';
import clsx from 'clsx';
import Typewriter from 'typewriter-effect';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
const shuffle = require('shuffle-array');


export default function TypewriterConsole(){
    const {siteConfig} = useDocusaurusContext();
    const taglines = shuffle(siteConfig.customFields.taglines);

    return (
        <div className={clsx('card shadow--tl', styles.card)}>
            <div className={clsx('card__header padding--sm', styles.card__header)}>
                <div className={clsx(styles.circle)}></div>
                <div className={clsx(styles.circle)}></div>
                <div className={clsx(styles.circle)}></div>
            </div>
            <div className="card__body">
            <div className={styles.directory}>
                Advanced-Data-Science:~
            </div>
            <Typewriter
            className="asdfasdfasdf"
            options={{
                strings: taglines,
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
                pauseFor: 2000,
                skipAddStyles: true,
                wrapperClassName: clsx(styles['Typewriter__wrapper']),
            }}
            />

            </div>
        </div>
    )
}

