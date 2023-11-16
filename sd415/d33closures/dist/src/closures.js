export { inArray, inBetween, makeArmy };
function inArray(arr) {
    return function (input) {
        return arr.includes(input);
    };
}
function inBetween(start, end) {
    return function (input) {
        return input >= start && input <= end;
    };
}
function makeArmy() {
    const army = [];
    for (let i = 0; i < 10; i++) {
        army[i] = (function (value) {
            return function () {
                return value;
            };
        })(i);
    }
    return army;
}
