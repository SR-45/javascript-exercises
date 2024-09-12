const sumAll = function (f, s) {
    let out = 0
    const start = Math.min(f, s)
    const end = Math.max(f, s)
    if (f > 0 && s > 0 && Number.isInteger(f) && Number.isInteger(s)) {


        for (let index = start; index <= end; index++) {
            out += index

        }
        return out

    }
    else { return "ERROR" };
}
// Do not edit below this line
module.exports = sumAll;
