hljs.registerLanguage('eiger', function(hljs) {
    return {
      contains: [
        {
          className: 'keyword',
          begin: '\\b(include|for|class|func|end|dataclass|if|while|then|to|do|else)\\b'
        },
        {
          className: 'string',
          begin: '"', end: '"',
          contains: [
            {
              className: 'escape',
              begin: '\\\\.', end: hljs.IMMEDIATE_RE
            }
          ]
        },
        {
          className: 'number',
          begin: '\\b\\d+\\b'
        },
        {
          className: 'comment',
          begin: '~',
          end: '\\n'
        },
        {
          className: 'function',
          begin: '(\\w+)(?=\\([a-zA-Z,]+\\))'
        },
        {
          className: 'identifier',
          begin: '(\\w+)'
        },
        {
          className: 'operator',
          begin: '(\\+|-|\\*|/|=|not|\\?\\=|\\!\\=|\\%|\\^)'
        }
      ]
    };
  });
  

hljs.highlightAll();
