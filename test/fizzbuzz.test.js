import chai from "chai";
const assert = chai.assert;
import { fizzbuzz } from "../katas/02_fizzbuzz/fizzbuzz.js";

describe('#fizzbuzz()', () => {
  it("Return a number that is divisible by 3", () => {
    assert.equal(fizzbuzz(66), "Fizz", "A number is'nt divisible by 3")
  })
  it("Return a number that is divisible by 5", () => {
    assert.equal(fizzbuzz(5), "Buzz", "A number is'nt divisible by 5")
  })
  it("Return a number that is divisible by 3 and 5", () => {
    assert.equal(fizzbuzz(15),"FizzBuzz", "A number is'nt divisible by 3 and 5")
  })
  it("Return a string that is not divisible by 3 and 5", () => {
    assert.equal(fizzbuzz(7), '7', "A number is'nt divisible by 3 and 5")
  })
  it("Return a number that is not divisible by 3 and 5", () => {
    assert.notEqual(fizzbuzz(7), "Fizz", "A number is'nt divisible by 3 and 5")
  })
})