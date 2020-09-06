import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import clsx from 'clsx';

const features = [
  {
    title: <>Explore and Search</>,
    imageUrl: 'img/zencrepes-explore.png',
    description: (
      <>
        Quickly find relevant elements based on selected facets, across multiple
        repositories and organizations.
      </>
    ),
  },
  {
    title: <>Scrum Operation</>,
    imageUrl: 'img/zencrepes-deliver.png',
    description: (
      <>
        Identify the amount of work left in a sprint, estimate completion based
        on past velocity, review repartition of open issues (by repo, label,
        assignee...).
      </>
    ),
  },
  {
    title: <>Consistency</>,
    imageUrl: 'img/zencrepes-list.png',
    description: (
      <>
        Ensure labels and milestones are consistent across multiple
        organizations and repositories, clean-up when necessary.
      </>
    ),
  },
  {
    title: <>Bulk updates with Safeguards</>,
    imageUrl: 'img/zencrepes-staging.png',
    description: (
      <>
        Pushing changes in bulk can be scary, ZenCrepes provides a staging area
        highlighting changes about to be made and require explicit user
        confirmation prior to submission.
      </>
    ),
  },
  {
    title: <>Query based</>,
    imageUrl: 'img/zencrepes-queries.png',
    description: (
      <>
        Everything is a query, filter down your results to the exact data you're
        interested in. Edit the{' '}
        <a
          href='https://arranger.readthedocs.io/en/latest/src/sqon.html'
          target='_blank'
        >
          SQON
        </a>{' '}
        query to customize your results even more.
      </>
    ),
  },
  {
    title: <>Network map</>,
    imageUrl: 'img/zencrepes-network.png',
    description: (
      <>
        Map our relations between Pull Requests and Issues to visually discover
        how things relate to each-other.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Agile analytics and management across GitHub organizations & repositories made easy!'
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className={clsx(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
            ZenCrepes fetches content from various sources (GitHub, CircleCI,
            Jira) and provides a high-level analytics platform across all of
            your team's data.
          </div>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
