'use strict';

const unit = require('unit.js');
const index = require('../index');

// describe index
describe('index', () => {
  it('should expose default classes', () => {
    unit
      .object(index)
      .hasProperties([
        'BadRequest',
        'Unauthorized',
        'PaymentRequired',
        'Forbidden',
        'NotFound',
        'MethodNotAllowed',
        'NotAcceptable',
        'ProxyAuthenticationRequired',
        'RequestTimeout',
        'Conflict',
        'Gone',
        'LengthRequired',
        'PreconditionFailed',
        'PayloadTooLarge',
        'URITooLong',
        'UnsupportedMediaType',
        'RangeNotSatisfiable',
        'ExpectationFailed',
        'IMATeapot',
        'MisdirectedRequest',
        'UnprocessableEntity',
        'Locked',
        'FailedDependency',
        'UpgradeRequired',
        'PreconditionRequired',
        'TooManyRequests',
        'RequestHeaderFieldsTooLarge',
        'UnavailableForLegalReasons',
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
        'HttpError',
        'ClientError',
        'ServerError',
      ]);
  }); // end it
}); // end describe index