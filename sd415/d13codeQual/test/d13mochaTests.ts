import { assert } from "chai";
import { compoundInterest,calcDownpayment,sumDigits,multDigits,convertFahrenheit,calcDistance,isVowel } from "../src/app.js";

describe("test a compound interest", function () {
  it("tests $100 for 1 year at 10% monthly compound", function () {
    const exact = compoundInterest(100, 10, 1);
    assert.strictEqual(+exact.toFixed(2), 110.47);
  });
});

describe("test a down payment", function () {
  it("tests $40000 with 5% down payment", function () {
    assert.strictEqual(calcDownpayment(40000), 2000);
  });
});

describe("testing the sum of integer", function () {
  it("test 1234 input integers", function () {
    assert.strictEqual(sumDigits(1234), 10);
  });
  it("test 102 input integers", function () {
    assert.strictEqual(sumDigits(102), 3);
  });
});

describe("testing the multiple of integer", function () {
  it("test 1234 input integers", function () {
    assert.strictEqual(multDigits(1234), 24);
  });
  it("test 102 input integers", function () {
    assert.strictEqual(multDigits(8), 8);
  });
});

describe("testing converting temFahrenheit to temCelsius", function () {
  it("test 32 fahrenheit", function () {
    assert.strictEqual(convertFahrenheit(32), 0);
  });
  it("test 212 fahrenheit", function () {
    assert.strictEqual(convertFahrenheit(212), 100);
  });
});

describe("testing the distance between Co-ordinates", function () {
  it("test 0,0,5,5 co-ordinnates", function () {
    const exact = calcDistance(0, 0, 5, 5);
    assert.strictEqual(+exact.toFixed(2), 7.07);
  });
});

describe("isVowel", function () {
  it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
  });

  it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
  });
  it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
  });
  it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
  });
  it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
  });

  it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
  });

  it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
  });
});
