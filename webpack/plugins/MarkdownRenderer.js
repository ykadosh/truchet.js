const marked = require('marked');
const renderer = new marked.Renderer();

const encodeSpecialCharacters = string => {
    const chars = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '\'': '&apos;',
      '"': '&quot;',
    }
    return string.replace(/[&<>'"]/g, char => chars[char] || char);
  };
  
  renderer.code = (code, language) => {
    if (language && language.startsWith('example')) {
      return `<example id="${language.split(':')[1]}">${encodeSpecialCharacters(code)}</example>`;
    }
    return `<pre><code class="language-${language}">${encodeSpecialCharacters(code)}</code></pre>`;
  };

  module.exports = renderer;