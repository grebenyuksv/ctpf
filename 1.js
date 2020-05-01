const id = x => x;
const compose = (f, g) => x => g(f(x));

module.exports = { id, compose };
