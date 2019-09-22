'use strict';

const unit = require('unit.js');
const server = require('../server');

// describe server
describe('server', () => {
  it('should expose default classes', () => {
    unit
      .object(server)
      .hasProperties([
        'InternalServerError',
        'NotImplemented',
        'BadGateway',
        'ServiceUnavailable',
        'GatewayTimeout',
        'HTTPVersionNotSupported',
        'VariantAlsoNegotiates',
        'InsufficientStorage',
        'LoopDetected',
        'NotExtended',
        'NetworkAuthenticationRequired',
        'UnknownError',
      ]);
  }); // end it
}); // end describe server