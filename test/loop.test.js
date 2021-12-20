import chai from "chai";
const assert = chai.assert;
import { loop } from "../katas/01_loop-triangle/loop.js";

describe("#loop()", () => {
  // let test = loop()
  it('should seven sharp', () => {
    assert.equal(loop()[6], '#######', "A seven sharp is expected")
  })
  it('should a array', () => {
    assert.equal(loop()[0,1,2,3,4,5,6], "#" + "##" + "###" + "#", "A seven array is expected")
  })
  it('should a array length', () => {
    assert.equal(loop()[6], ["#######"], "A array length is expected")
  })
  it('should a first index is sharp', () => {
    assert.equal(loop()[2], "#" + "##", "A first index is not a sharp")
  })

})