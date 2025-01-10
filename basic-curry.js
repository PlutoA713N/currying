const basicCurry = (arg1) => {
    let totalSum = 0

    if (arg1) {
        totalSum += arg1;
    }

    if (arg1 === undefined) return totalSum;

    const basicCurryTwo = (arg2) => {
        if (arg2 === undefined) {
            console.log({totalSum})
            return totalSum;
        }
        totalSum += arg2;
        return basicCurryTwo;
    }


    return basicCurryTwo;
}

basicCurry(1)(2)(3)()