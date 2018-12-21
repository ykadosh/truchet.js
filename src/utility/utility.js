export const random = (from, to) => (
    Math.floor((Math.random() * Math.abs(to - from)) + Math.min(from, to))
);