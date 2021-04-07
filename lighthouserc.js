module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      url: ['https://www.amazon.com/'],
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 1}],
        'categories:accessibility': ['error', {minScore: 1}],
        'categories:seo': ['warn', {minScore: 1}],
        'categories:pwa': ['error', {minScore: 1}],
        'categories:best-practices': ['warn', {minScore: 1}],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: 'reports/'
    },
  },
};
