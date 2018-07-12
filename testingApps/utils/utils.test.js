const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
  });

  it('should async square two numbers', (done) => {
    var res = utils.asyncSquare(2, (res) => {
      expect(res).toBe(4).toBeA('number');
      done();
    });
  });
});