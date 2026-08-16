const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR"
    }

    let sum = 0;

    // One option to determine min and max
    // let from = a < b ? a : b;
    // let to = a < b ? b : a;

    // Another version to determine min and max
    if(a > b) [a, b] = [b, a];

    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
