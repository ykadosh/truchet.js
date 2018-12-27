const fs = require('fs');
const {paths} = require('../webpack.constants');
const {render} = require(paths.docs + '/ssr/ssr');

const addAsset = (compilation, path, content) => {
    compilation.assets[path] = {
        source: () => content,
        size: () => Buffer.byteLength(content, 'utf8'),
    };
}

class GenerateHTML {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('GenerateHTML', (compilation, done) => {
            fs.readFile(paths.docs + '/index.template.html', 'utf8', (err, content) => {
                addAsset(compilation, 'index.html', content.replace('{{content}}', render()));
                done();
            });
        })
    }
}

module.exports = GenerateHTML;