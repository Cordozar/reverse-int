module.exports = function reverse(n) {
    let n_abs = String(Math.abs(n));
    let res = "";
    for (let i = 0; i < n_abs.length; i = i + 1) {
        res = res + n_abs[n_abs.length - 1 - i];
    }
    return res;
};
