const logger = msg => {
    console.log(`Message : ${msg}`, ',', `Log Time : ${new Date()}`);
};

module.exports = logger;
