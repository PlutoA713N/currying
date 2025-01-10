const unary = (input1) => {
    return (input2) => {
        return input1 + input2;
    }
}

module.exports = unary;