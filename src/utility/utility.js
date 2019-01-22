export const random = (from, to) => (
    Math.floor((Math.random() * Math.abs(to - from)) + Math.min(from, to))
);

export const getType = variable => (
    Object.prototype.toString.call(variable).replace(/(\[object |\])/g, '')
);

export const isObject = variable => (
    'Object' === getType(variable)
);

export const equals = (a, b) => {
    if (![a, b].every(isObject)) {
        return false;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length === bKeys.length) {
        return aKeys.every(key => (
            a[key] === b[key]
        ));
    }
    return false;
};