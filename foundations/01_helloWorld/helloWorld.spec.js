// spec file is a plain js file used for testing 
// which follows the principles of behavior-driven 
// development(BDD) and defines how code should 
// behave undedr various circumstances
const helloWorld = require('./helloWorld'); //imports code from js file

describe('Hello World', function() { //body of test
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
