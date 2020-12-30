module.exports = {
  someSidebar: {
    'Getting Started': ['introduction', 'features', 'try', 'faq'],
    Serverless: ['serverless'],
    Install: [
      'install/architecture',
      'install/configuration',
      'install/authentication',
    ],
    Use: ['use/overview', 'use/querying'],
    Datasets: [
      {
        GitHub: [
          'github/overview',
          'github/issues',
          'github/repositories',
          'github/labels',
          'github/milestones',
          'github/projects',
          'github/prs',
          'github/releases',
          'github/vulnerabilities',
          'github/watchers',
          'github/import',
        ],
      },
      {
        CircleCI: [
          'circleci/envvars',
          'circleci/pipelines',
          'circleci/insights',
        ],
      },
      { Atlassian: ['atlassian/issues', 'atlassian/bambooruns'] },
      { Tests: ['tests/states'] },
    ],

    Develop: ['develop/getstarted'],
  },
};
