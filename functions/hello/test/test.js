'use strict';

let should = require('should');
let context = {};
process.env = require('../.env_local.json');

describe('Hello', () => {
  let lambda = require("../index");
  lambda.process = process;

  it ('should have message as a property', (done) => {
    lambda.handle(require('./event.json'), context, (error, message) => {
      should.not.exist(error);
      should(message).have.property('hello').equal('world');
      done();
    });
  });
});
