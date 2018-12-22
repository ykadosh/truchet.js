const hasArg = arg => (
    process.argv.filter(a => a === `--${arg}`).length > 0
);

module.exports = {hasArg}