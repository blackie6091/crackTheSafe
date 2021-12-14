const randomizeHints = (questions) => questions.sort(() => Math.random() - 0.5);

module.exports = { randomizeHints };