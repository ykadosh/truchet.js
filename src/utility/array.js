export const equals = (a, b) => (
    a.length === b.length && a.every((_, i) => a[i] === b[i])
);