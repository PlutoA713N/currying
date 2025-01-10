var callAndApply = {
    caller: (obj, methd, ...args) => {
        methd.call(obj, ...args)
    },
    applier: (obj, methd, argsArray) => {
        methd.apply(obj, argsArray)
    }
};

module.exports = callAndApply;