'use strict';

// include dependecies
const unit = require('unit.js');
const RequestHeaderFieldsTooLarge = require('../RequestHeaderFieldsTooLarge');
const {version} = require('../package');

// describe RequestHeaderFieldsTooLarge
describe('RequestHeaderFieldsTooLarge', () => {
  it('should be a function', () => {
    unit
      .function(RequestHeaderFieldsTooLarge);
  }); // end it

  it('should return an instance of RequestHeaderFieldsTooLarge', () => {
    unit
      .object(new RequestHeaderFieldsTooLarge())
      .isInstanceOf(RequestHeaderFieldsTooLarge)
      .isEnumerable('code', 431)
      .isEnumerable('status', 'Request Header Fields Too Large')
      .isEnumerable('message', 'Request header is too large and can not be processed.')
      .isEnumerable('debug')
      .isEnumerable('cause')
      .hasProperty('VERSION', version);
  }); // end it

  it('should return an instaceof RequestHeaderFieldsTooLarge without the new operator', () => {
    unit
      .object(RequestHeaderFieldsTooLarge())
      .isInstanceOf(RequestHeaderFieldsTooLarge)
      .isEnumerable('code', 431)
      .isEnumerable('status', 'Request Header Fields Too Large')
      .isEnumerable('message', 'Request header is too large and can not be processed.')
      .isEnumerable('debug')
      .isEnumerable('cause')
      .hasProperty('VERSION', version);
  }); // end it

  // describe #VERSION
  describe('#VERSION', () => {
    it('should be a constant property', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .string(test.VERSION)
        .is(version);
    }); // end it
  });// end describe #VERSION

  // describe #code
  describe('#code', () => {
    it('should be a constant property', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .number(test.code)
        .is(431);
    }); // end it
  }); // end describe #code

  // describe #code
  describe('#status', () => {
    it('should be a constant property', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .string(test.status)
        .is('Request Header Fields Too Large');
    }); // end it
  }); // end describe #status

  // describe #message
  describe('#message', () => {
    it('should have a default message', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .string(test.message)
        .is('Request header is too large and can not be processed.');
    }); // end it

    it('should accept falsy as the default message', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .string(test.message)
        .is('Request header is too large and can not be processed.')
        .given(test.message = undefined)
        .string(test.message)
        .is('Request header is too large and can not be processed.')
        .given(test.message = null)
        .string(test.message)
        .is('Request header is too large and can not be processed.')
        .given(test.message = false)
        .string(test.message)
        .is('Request header is too large and can not be processed.')
        .given(test.message = 0)
        .string(test.message)
        .is('Request header is too large and can not be processed.')
        .given(test.message = '')
        .string(test.message)
        .is('Request header is too large and can not be processed.')
        .given(test.message = '     ')
        .string(test.message)
        .is('Request header is too large and can not be processed.');
    }); // end it

    it('should accept a string', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .given(test.message = 'Error')
        .string(test.message)
        .is('Error')
        .given(test.message = 'Invalid')
        .string(test.message)
        .is('Invalid')
        .given(test.message = 'Request Header Fields Too Large')
        .string(test.message)
        .is('Request Header Fields Too Large');
    }); // end it

    it('should accept stringifiable arrays', () => {
      const test = new RequestHeaderFieldsTooLarge();

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
      const test = new RequestHeaderFieldsTooLarge();

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
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .given(test.message = /asd/)
        .string(test.message)
        .is('/asd/')
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
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .function(test.getMessage);
    }); // end it

    it('should return message', () => {
      const test = new RequestHeaderFieldsTooLarge({
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
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .function(test.setMessage);
    }); // end it

    it('should set message and return this for chaining', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .object(test.setMessage('Bad things.'))
        .isInstanceOf(RequestHeaderFieldsTooLarge)
        .hasProperty('message', 'Bad things.');
    }); // end it
  }); // end describe #setMessage

  // describe #getDebug
  describe('#getDebug', () => {
    it('should be a function', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .function(test.getDebug);
    }); // end it

    it('should return debug', () => {
      const test = new RequestHeaderFieldsTooLarge({
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
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .function(test.setDebug);
    }); // end it

    it('should set debug and return this for chaining', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .object(test.setDebug('Something happened.'))
        .isInstanceOf(RequestHeaderFieldsTooLarge)
        .hasProperty('debug', 'Something happened.');
    }); // end it
  }); // end describe #setDebug

  // describe #getCause
  describe('#getCause', () => {
    it('should be a function', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .function(test.getCause);
    }); // end it

    it('should return cause', () => {
      const test = new RequestHeaderFieldsTooLarge({
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
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .function(test.setCause);
    }); // end it

    it('should set cause and return this for chaining', () => {
      const test = new RequestHeaderFieldsTooLarge();
      const cause = new Error('boom!');

      unit
        .object(test.setCause(cause))
        .isInstanceOf(RequestHeaderFieldsTooLarge)
        .hasProperty('cause', cause);
    }); // end it
  }); // end describe #setCause

  // describe #set
  describe('#set', () => {
    it('should be a function', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .function(test.set);
    }); // end it

    it('should do nothing when not given an iterable', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .given(test.set())
        .object(test)
        .isInstanceOf(RequestHeaderFieldsTooLarge)
        .isEnumerable('code', 431)
        .isEnumerable('status', 'Request Header Fields Too Large')
        .isEnumerable('message', 'Request header is too large and can not be processed.')
        .isEnumerable('debug')
        .isEnumerable('cause')
        .hasProperty('VERSION', version)
        .given(test.set(null))
        .object(test)
        .isInstanceOf(RequestHeaderFieldsTooLarge)
        .isEnumerable('code', 431)
        .isEnumerable('status', 'Request Header Fields Too Large')
        .isEnumerable('message', 'Request header is too large and can not be processed.')
        .isEnumerable('debug')
        .isEnumerable('cause')
        .hasProperty('VERSION', version)
        .given(test.set(5))
        .object(test)
        .isInstanceOf(RequestHeaderFieldsTooLarge)
        .isEnumerable('code', 431)
        .isEnumerable('status', 'Request Header Fields Too Large')
        .isEnumerable('message', 'Request header is too large and can not be processed.')
        .isEnumerable('debug')
        .isEnumerable('cause')
        .hasProperty('VERSION', version)
        .given(test.set(true))
        .object(test)
        .isInstanceOf(RequestHeaderFieldsTooLarge)
        .isEnumerable('code', 431)
        .isEnumerable('status', 'Request Header Fields Too Large')
        .isEnumerable('message', 'Request header is too large and can not be processed.')
        .isEnumerable('debug')
        .isEnumerable('cause')
        .hasProperty('VERSION', version);
    }); // end it

    it('should accept an object hash', () => {
      const test = new RequestHeaderFieldsTooLarge();
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
      const test = new RequestHeaderFieldsTooLarge();

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
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .function(test.get);
    }); // end #get

    it('should accept a list of argument names to return an object hash', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .object(test.get('code', 'status'))
        .hasProperty('code', 431)
        .hasProperty('status', 'Request Header Fields Too Large')
        .object(test.get(['code', 'status'], 'message', ['cause', ['debug']]))
        .hasProperty('code', 431)
        .hasProperty('status', 'Request Header Fields Too Large')
        .hasProperty('message', 'Request header is too large and can not be processed.')
        .hasProperty('cause', undefined)
        .hasProperty('debug', undefined);
    }); // end it

    it('should not return argument names that do not exist', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .object(test.get('a', 'b', 'code'))
        .hasProperty('code', 431)
        .hasNotProperty('a')
        .hasNotProperty('b')
        .object(test.get('code', ['a', ['b'], 'c'], 'd'))
        .hasProperty('code', 431)
        .hasNotProperty('a')
        .hasNotProperty('b')
        .hasNotProperty('c')
        .hasNotProperty('d');
    }); // end it
  }); // end describe #get

  // describe #toJSON
  describe('#toJSON', () => {
    it('should be a function', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .function(test.toJSON);
    }); // end it

    it('should return a object for serialization', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .object(test.toJSON())
        .hasProperty('code', 431)
        .hasProperty('status', 'Request Header Fields Too Large')
        .hasProperty('message', 'Request header is too large and can not be processed.')
        .hasProperty('debug', undefined)
        .hasProperty('cause', undefined)
        .given(test.debug = 'Missing required parameters.')
        .object(test.toJSON())
        .hasProperty('code', 431)
        .hasProperty('status', 'Request Header Fields Too Large')
        .hasProperty('message', 'Request header is too large and can not be processed.')
        .hasProperty('debug', 'Missing required parameters.')
        .hasProperty('cause', undefined);
    });
  }); // end describe #toJSON

  // describe #toString
  describe('#toString', () => {
    it('should be a function', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .function(test.toString);
    }); // end it

    it('should return RequestHeaderFieldsTooLarge: 431 Request Header Fields Too Large', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .string(test.toString())
        .is('RequestHeaderFieldsTooLarge: 431 Request Header Fields Too Large');
    }); // end it
  }); // end describe #toString

  // describe #[Symbol.toStringTag]
  describe('#[Symbol.toStringTag]', () => {
    it('should return "@scuba-squad/requestheaderfieldstoolarge"', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .string(test[Symbol.toStringTag])
        .is('@scuba-squad/requestheaderfieldstoolarge');
    }); // end it

    it('should return "[object @scuba-squad/httperror]" for Object.prototype.toString.call', () => {
      const test = new RequestHeaderFieldsTooLarge();

      unit
        .string(Object.prototype.toString.call(test))
        .is('[object @scuba-squad/requestheaderfieldstoolarge]');
    });// end it
  }); // end describe #[Symbol.toStringTag]
}); // end describe RequestHeaderFieldsTooLarge