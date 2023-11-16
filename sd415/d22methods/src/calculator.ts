

export const calculator = {
    operand1: 0,
    operand2: 0,
    setValues: function (value1: number, value2: number): void {
      this.operand1 = value1;
      this.operand2 = value2;
    },
    sum: function (): number {
      return this.operand1 + this.operand2;
    },
    mul: function (): number {
      return this.operand1 * this.operand2;
    },
  }; 
