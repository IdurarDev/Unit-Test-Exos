import chai from "chai";
const assert = chai.assert;
import { isEven } from "../katas/05_recursion/recursion.js"

describe('#isEven()', () => {
  it('Should this number is Even', () => {
    assert.equal(isEven(34), "Even", "This number is not correct")
  })
  it('Should this number is Odd', () => {
    assert.equal(isEven(31), "Odd", "This number is not correct")
  })
  it('Should this number is Negative Odd', () => {
    assert.equal(isEven(-31), "Odd", "This number is not correct")
  })
})