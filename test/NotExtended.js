'use strict';

// include dependecies
const unit = require('unit.js');
const NotExtended = require('../NotExtended');
const {version} = require('../package');

// describe NotExtended
describe('NotExtended', () => {
  it('should be a function', () => {
    unit
      .function(NotExtended);
  }); // end it

  it('should return an instance of NotExtended', () => {
    unit
      .object(new NotExtended())
      .isInstanceOf(NotExtended)
      .isEnumerable('code', 510)
      .isEnumerable('status', 'Not Extended')
      .isEnumerable('message', 'The policy for accessing this resource has not been met by this request.')
      .isEnumerable('debug')
      .isEnumerable('cause')
      .hasProperty('VERSION', version);
  }); // end it

  it('should return an instaceof NotExtended without the new operator', () => {
    unit
      .object(NotExtended())
      .isInstanceOf(NotExtended)
      .isEnumerable('code', 510)
      .isEnumerable('status', 'Not Extended')
      .isEnumerable('message', 'The policy for accessing this resource has not been met by this request.')
      .isEnumerable('debug')
      .isEnumerable('cause')
      .hasProperty('VERSION', version);
  }); // end it

  // describe #VERSION
  describe('#VERSION', () => {
    it('should be a constant property', () => {
      const test = new NotExtended();

      unit
        .string(test.VERSION)
        .is(version);
    }); // end it
  });// end describe #VERSION

  // describe #code
  describe('#code', () => {
    it('should be a constant property', () => {
      const test = new NotExtended();

      unit
        .number(test.code)
        .is(510);
    }); // end it
  }); // end describe #code

  // describe #status
  describe('#status', () => {
    it('should be a constant property', () => {
      const test = new NotExtended();

      unit
        .string(test.status)
        .is('Not Extended');
    }); // end it
  }); // end describe #status

  // describe #message
  describe('#message', () => {
    it('should have a default message', () => {
      const test = new NotExtended();

      unit
        .string(test.message)
        .is('The policy for accessing this resource has not been met by this request.');
    }); // end it

    it('should accept falsy as the default message', () => {
      const test = new NotExtended();

      unit
        .string(test.message)
        .is('The policy for accessing this resource has not been met by this request.')
        .given(test.message = undefined)
        .string(test.message)
        .is('The policy for accessing this resource has not been met by this request.')
        .given(test.message = null)
        .string(test.message)
        .is('The policy for accessing this resource has not been met by this request.')
        .given(test.message = false)
        .string(test.message)
        .is('The policy for accessing this resource has not been met by this request.')
        .given(test.message = 0)
        .string(test.message)
        .is('The policy for accessing this resource has not been met by this request.')
        .given(test.message = '')
        .string(test.message)
        .is('The policy for accessing this resource has not been met by this request.')
        .given(test.message = '     ')
        .string(test.message)
        .is('The policy for accessing this resource has not been met by this request.');
    }); // end it

    it('should accept a string', () => {
      const test = new NotExtended();

      unit
        .given(test.message = 'Error')
        .string(test.message)
        .is('Error')
        .given(test.message = 'Invalid')
        .string(test.message)
        .is('Invalid')
        .given(test.message = 'Not Extended')
        .string(test.message)
        .is('Not Extended');
    }); // end it

    it('should accept stringifiable arrays', () => {
      const test = new NotExtended();

      unit
        .given(test.message = ['Bad', 'Request'])
        .string(test.message)
        .is('Bad,Request')
        .given(test.message = ['Not', 'Good'])
        .string(test.message)
        .is('Not,Good')
        .given(test.message = ['Invalid'])
        .string(test.message)
        .is('Invalid');
    }); // end it

    it('should accept numbers', () => {
      const test = new NotExtended();

      unit
        .given(test.message = 5)
        .string(test.message)
        .is('5')
        .given(test.message = -10)
        .string(test.message)
        .is('-10')
        .given(test.message = 0.4)
        .string(test.message)
        .is('0.4')
        .given(test.message = -4.2)
        .string(test.message)
        .is('-4.2');
    }); // end it

    it('should accept stringifiable objects', () => {
      const test = new NotExtended();

      unit
        .given(test.message = /asd/u)
        .string(test.message)
        .is('/asd/u')
        .given(test.message = [1, 2, 3])
        .string(test.message)
        .is('1,2,3')
        .given(test.message = {a: 5})
        .string(test.message)
        .is('[object Object]')
        .given(test.message = {
          toString: () => {
            return 'Hello';
          },
        })
        .string(test.message)
        .is('Hello');
    }); // end it
  }); // end describe #message

  // describe #getMessage
  describe('#getMessage', () => {
    it('should be a function', () => {
      const test = new NotExtended();

      unit
        .function(test.getMessage);
    }); // end it

    it('should return message', () => {
      const test = new NotExtended({
        message: 'Something happened.',
      });

      unit
        .string(test.getMessage())
        .is('Something happened.');
    }); // end it
  }); // end describe #getMessage

  // describe #setMessage
  describe('#setMessage', () => {
    it('should be a function', () => {
      const test = new NotExtended();

      unit
        .function(test.setMessage);
    }); // end it

    it('should set message and return this for chaining', () => {
      const test = new NotExtended();

      unit
        .object(test.setMessage('Bad things.'))
        .isInstanceOf(NotExtended)
        .hasProperty('message', 'Bad things.');
    }); // end it
  }); // end describe #setMessage

  // describe #getDebug
  describe('#getDebug', () => {
    it('should be a function', () => {
      const test = new NotExtended();

      unit
        .function(test.getDebug);
    }); // end it

    it('should return debug', () => {
      const test = new NotExtended({
        debug: 'Missing required parameters.',
      });

      unit
        .string(test.getDebug())
        .is('Missing required parameters.');
    }); // end it
  }); // end describe #getDebug

  // describe #setDebug
  describe('#setDebug', () => {
    it('should be a function', () => {
      const test = new NotExtended();

      unit
        .function(test.setDebug);
    }); // end it

    it('should set debug and return this for chaining', () => {
      const test = new NotExtended();

      unit
        .object(test.setDebug('Something happened.'))
        .isInstanceOf(NotExtended)
        .hasProperty('debug', 'Something happened.');
    }); // end it
  }); // end describe #setDebug

  // describe #getCause
  describe('#getCause', () => {
    it('should be a function', () => {
      const test = new NotExtended();

      unit
        .function(test.getCause);
    }); // end it

    it('should return cause', () => {
      const test = new NotExtended({
        cause: new Error('boom!'),
      });

      unit
        .object(test.getCause())
        .is(test.cause);
    }); // end it
  }); // end describe #getCause

  // describe #setCause
  describe('#setCause', () => {
    it('should be a function', () => {
      const test = new NotExtended();

      unit
        .function(test.setCause);
    }); // end it

    it('should set cause and return this for chaining', () => {
      const test = new NotExtended();
      const cause = new Error('boom!');

      unit
        .object(test.setCause(cause))
        .isInstanceOf(NotExtended)
        .hasProperty('cause', cause);
    }); // end it
  }); // end describe #setCause

  // describe #set
  describe('#set', () => {
    it('should be a function', () => {
      const test = new NotExtended();

      unit
        .function(test.set);
    }); // end it

    it('should do nothing when not given an iterable', () => {
      const test = new NotExtended();

      unit
        .given(test.set())
        .object(test)
        .isInstanceOf(NotExtended)
        .isEnumerable('code', 510)
        .isEnumerable('status', 'Not Extended')
        .isEnumerable('message', 'The policy for accessing this resource has not been met by this request.')
        .isEnumerable('debug')
        .isEnumerable('cause')
        .hasProperty('VERSION', version)
        .given(test.set(null))
        .object(test)
        .isInstanceOf(NotExtended)
        .isEnumerable('code', 510)
        .isEnumerable('status', 'Not Extended')
        .isEnumerable('message', 'The policy for accessing this resource has not been met by this request.')
        .isEnumerable('debug')
        .isEnumerable('cause')
        .hasProperty('VERSION', version)
        .given(test.set(5))
        .object(test)
        .isInstanceOf(NotExtended)
        .isEnumerable('code', 510)
        .isEnumerable('status', 'Not Extended')
        .isEnumerable('message', 'The policy for accessing this resource has not been met by this request.')
        .isEnumerable('debug')
        .isEnumerable('cause')
        .hasProperty('VERSION', version)
        .given(test.set(true))
        .object(test)
        .isInstanceOf(NotExtended)
        .isEnumerable('code', 510)
        .isEnumerable('status', 'Not Extended')
        .isEnumerable('message', 'The policy for accessing this resource has not been met by this request.')
        .isEnumerable('debug')
        .isEnumerable('cause')
        .hasProperty('VERSION', version);
    }); // end it

    it('should accept an object hash', () => {
      const test = new NotExtended();
      const opt = {
        message: 'Something meaningful for the user',
        debug: 'Something meaningful for the developer',
        cause: new Error('boom!'),
      };

      unit
        .object(test.set(opt))
        .hasProperty('message', opt.message)
        .hasProperty('debug', opt.debug)
        .hasProperty('cause', opt.cause);
    }); // end it

    it('should throw an error when given unacceptable keys iterable', () => {
      const test = new NotExtended();

      unit
        .error(() => {
          test.set({a: 5});
        })
        .error(() => {
          test.set('asd');
        })
        .error(() => {
          test.set([1, 2, 3]);
        });
    }); // end it
  }); // end describe #set

  // describe #get
  describe('#get', () => {
    it('should be a function', () => {
      const test = new NotExtended();

      unit
        .function(test.get);
    }); // end it

    it('should accept a list of argument names to return an object hash', () => {
      const test = new NotExtended();

      unit
        .object(test.get('code', 'status'))
        .hasProperty('code', 510)
        .hasProperty('status', 'Not Extended')
        .object(test.get(['code', 'status'], 'message', ['cause', ['debug']]))
        .hasProperty('code', 510)
        .hasProperty('status', 'Not Extended')
        .hasProperty('message', 'The policy for accessing this resource has not been met by this request.')
        .hasProperty('cause', undefined)
        .hasProperty('debug', undefined);
    }); // end it

    it('should not return argument names that do not exist', () => {
      const test = new NotExtended();

      unit
        .object(test.get('a', 'b', 'code'))
        .hasProperty('code', 510)
        .hasNotProperty('a')
        .hasNotProperty('b')
        .object(test.get('code', ['a', ['b'], 'c'], 'd'))
        .hasProperty('code', 510)
        .hasNotProperty('a')
        .hasNotProperty('b')
        .hasNotProperty('c')
        .hasNotProperty('d');
    }); // end it
  }); // end describe #get

  // describe #toJSON
  describe('#toJSON', () => {
    it('should be a function', () => {
      const test = new NotExtended();

      unit
        .function(test.toJSON);
    }); // end it

    it('should return a object for serialization', () => {
      const test = new NotExtended();

      unit
        .object(test.toJSON())
        .hasProperty('code', 510)
        .hasProperty('status', 'Not Extended')
        .hasProperty('message', 'The policy for accessing this resource has not been met by this request.')
        .hasProperty('debug', undefined)
        .hasProperty('cause', undefined)
        .given(test.debug = 'Missing required parameters.')
        .object(test.toJSON())
        .hasProperty('code', 510)
        .hasProperty('status', 'Not Extended')
        .hasProperty('message', 'The policy for accessing this resource has not been met by this request.')
        .hasProperty('debug', 'Missing required parameters.')
        .hasProperty('cause', undefined);
    }); // end it
  }); // end describe #toJSON

  // describe #toString
  describe('#toString', () => {
    it('should be a function', () => {
      const test = new NotExtended();

      unit
        .function(test.toString);
    }); // end it

    it('should return NotExtended: 510 Not Extended', () => {
      const test = new NotExtended();

      unit
        .string(test.toString())
        .is('NotExtended: 510 Not Extended');
    }); // end it
  }); // end describe #toString

  // describe #[Symbol.toStringTag]
  describe('#[Symbol.toStringTag]', () => {
    it('should return "@scuba-squad/notextended"', () => {
      const test = new NotExtended();

      unit
        .string(test[Symbol.toStringTag])
        .is('@scuba-squad/notextended');
    }); // end it

    it('should return "[object @scuba-squad/httperror]" for Object.prototype.toString.call', () => {
      const test = new NotExtended();

      unit
        .string(Object.prototype.toString.call(test))
        .is('[object @scuba-squad/notextended]');
    });// end it
  }); // end describe #[Symbol.toStringTag]
}); // end describe NotExtended