// Write your tests here!
const {polybius} = require('../src/polybius.js')
const expect = require('chai').expect

describe('Polybius', () => {
  it("thinkful", () => {
    const actual = polybius("thinkful");
    const expected = "4432423352125413"
    expect(actual).to.eql(expected)
  });
  it("Hello world", () => {
    const actual = polybius("Hello world")
    const expected = "3251131343 2543241341"
    expect(actual).to.eql(expected)
  });
  it("3251131343 2543241341", () => {
    const actual = polybius("3251131343 2543241341", false)
    const expected = "hello world"
    expect(actual).to.eql(expected)
  });
  it("4432423352125413", () => {
    const actual = polybius("4432423352125413", false)
    const expected = "th(i/j)nkful"
    expect(actual).to.eql(expected)
  });
  it("44324233521254134", () => {
    const actual = polybius("44324233521254134", false)
    const expected = false
    expect(actual).to.eql(expected)
  });
});
