export const calculator = {
    operand1: 0,
    operand2: 0,
    setValues: function (value1, value2) {
        this.operand1 = value1;
        this.operand2 = value2;
    },
    sum: function () {
        return this.operand1 + this.operand2;
    },
    mul: function () {
        return this.operand1 * this.operand2;
    },
};
