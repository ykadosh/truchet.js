const path = require('path');
const root = path.resolve(__dirname, '..');

const paths = {
    root,
    src: root + '/src',
    docs: root + '/docs'
}

module.exports = {paths};