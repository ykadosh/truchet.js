const fs = require('fs');
const {paths} = require('../webpack.constants');
const marked = require('marked');
const renderer = require('./MarkdownRenderer');

const addAsset = (compilation, path, content) => {
    compilation.assets[path] = {
        source: () => content,
        size: () => Buffer.byteLength(content, 'utf8'),
    };
}

const read = filename => new Promise(resolve => {
    fs.readFile(filename, 'utf8', (err, content) => {
        resolve(content);
    });
});

class GenerateHTML {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('GenerateHTML', (compilation, done) => {
            Promise.all([
                read(paths.docs + '/src/index.html'),
                read(paths.docs + '/src/content/docs.md'),
            ]).then(([index, docs]) => {
                addAsset(compilation, 'index.html', index.replace('{{content}}', marked(docs)));
                done();
            });
        });
    }
}

module.exports = GenerateHTML;