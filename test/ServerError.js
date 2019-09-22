'use strict';

// include dependecies
const unit = require('unit.js');
const {
  ServerError,
  InternalServerError,
  NotImplemented,
  BadGateway,
  ServiceUnavailable,
  GatewayTimeout,
  HTTPVersionNotSupported,
  VariantAlsoNegotiates,
  InsufficientStorage,
  LoopDetected,
  NotExtended,
  NetworkAuthenticationRequired,
  UnknownError,
} = require('../index');

// describe ServerError
describe('ServerError', () => {
  it('should be a function', () => {
    unit
      .function(ServerError);
  }); // end it

  it('should return a new InternalServerError when given 500', () => {
    unit
      .object(ServerError(500))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(InternalServerError)
      .isEnumerable('code', 500)
      .isEnumerable('status', 'Internal Server Error')
      .isEnumerable('message', 'Sorry, it appears we had an unexpected error, please try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new InternalServerError when given "Internal Server Error"', () => {
    unit
      .object(ServerError('Internal Server Error'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(InternalServerError)
      .isEnumerable('code', 500)
      .isEnumerable('status', 'Internal Server Error')
      .isEnumerable('message', 'Sorry, it appears we had an unexpected error, please try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new InternalServerError when given "InternalServerError"', () => {
    unit
      .object(ServerError('InternalServerError'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(InternalServerError)
      .isEnumerable('code', 500)
      .isEnumerable('status', 'Internal Server Error')
      .isEnumerable('message', 'Sorry, it appears we had an unexpected error, please try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotImplemented when given 501', () => {
    unit
      .object(ServerError(501))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(NotImplemented)
      .isEnumerable('code', 501)
      .isEnumerable('status', 'Not Implemented')
      .isEnumerable('message', 'Sorry, this is not fully implemented, please try later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotImplemented when given "Not Implemented"', () => {
    unit
      .object(ServerError('Not Implemented'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(NotImplemented)
      .isEnumerable('code', 501)
      .isEnumerable('status', 'Not Implemented')
      .isEnumerable('message', 'Sorry, this is not fully implemented, please try later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotImplemented when given "NotImplemented"', () => {
    unit
      .object(ServerError('NotImplemented'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(NotImplemented)
      .isEnumerable('code', 501)
      .isEnumerable('status', 'Not Implemented')
      .isEnumerable('message', 'Sorry, this is not fully implemented, please try later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new BadGateway when given 502', () => {
    unit
      .object(ServerError(502))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(BadGateway)
      .isEnumerable('code', 502)
      .isEnumerable('status', 'Bad Gateway')
      .isEnumerable('message', 'Sorry, It appears we recieved an error from another service that is needed to fulfill your request, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new BadGateway when given "Bad Gateway"', () => {
    unit
      .object(ServerError('Bad Gateway'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(BadGateway)
      .isEnumerable('code', 502)
      .isEnumerable('status', 'Bad Gateway')
      .isEnumerable('message', 'Sorry, It appears we recieved an error from another service that is needed to fulfill your request, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new BadGateway when given "BadGateway"', () => {
    unit
      .object(ServerError('BadGateway'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(BadGateway)
      .isEnumerable('code', 502)
      .isEnumerable('status', 'Bad Gateway')
      .isEnumerable('message', 'Sorry, It appears we recieved an error from another service that is needed to fulfill your request, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new ServiceUnavailable when given 503', () => {
    unit
      .object(ServerError(503))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(ServiceUnavailable)
      .isEnumerable('code', 503)
      .isEnumerable('status', 'Service Unavailable')
      .isEnumerable('message', 'Sorry, this service is currently unavailable, please try later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new ServiceUnavailable when given "Service Unavailable"', () => {
    unit
      .object(ServerError('Service Unavailable'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(ServiceUnavailable)
      .isEnumerable('code', 503)
      .isEnumerable('status', 'Service Unavailable')
      .isEnumerable('message', 'Sorry, this service is currently unavailable, please try later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new ServiceUnavailable when given "ServiceUnavailable"', () => {
    unit
      .object(ServerError('ServiceUnavailable'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(ServiceUnavailable)
      .isEnumerable('code', 503)
      .isEnumerable('status', 'Service Unavailable')
      .isEnumerable('message', 'Sorry, this service is currently unavailable, please try later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new GatewayTimeout when given 504', () => {
    unit
      .object(ServerError(504))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(GatewayTimeout)
      .isEnumerable('code', 504)
      .isEnumerable('status', 'Gateway Timeout')
      .isEnumerable('message', 'Sorry, it appears another service is taking to long and we cannot wait any longer.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new GatewayTimeout when given "Gateway Timeout"', () => {
    unit
      .object(ServerError('Gateway Timeout'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(GatewayTimeout)
      .isEnumerable('code', 504)
      .isEnumerable('status', 'Gateway Timeout')
      .isEnumerable('message', 'Sorry, it appears another service is taking to long and we cannot wait any longer.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new GatewayTimeout when given "GatewayTimeout"', () => {
    unit
      .object(ServerError('GatewayTimeout'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(GatewayTimeout)
      .isEnumerable('code', 504)
      .isEnumerable('status', 'Gateway Timeout')
      .isEnumerable('message', 'Sorry, it appears another service is taking to long and we cannot wait any longer.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new HTTPVersionNotSupported when given 505', () => {
    unit
      .object(ServerError(505))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(HTTPVersionNotSupported)
      .isEnumerable('code', 505)
      .isEnumerable('status', 'HTTP Version Not Supported')
      .isEnumerable('message', 'Please, try a diffrent protocol version and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new HTTPVersionNotSupported when given "HTTP Version Not Supported"', () => {
    unit
      .object(ServerError('HTTP Version Not Supported'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(HTTPVersionNotSupported)
      .isEnumerable('code', 505)
      .isEnumerable('status', 'HTTP Version Not Supported')
      .isEnumerable('message', 'Please, try a diffrent protocol version and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new HTTPVersionNotSupported when given "HTTPVersionNotSupported"', () => {
    unit
      .object(ServerError('HTTPVersionNotSupported'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(HTTPVersionNotSupported)
      .isEnumerable('code', 505)
      .isEnumerable('status', 'HTTP Version Not Supported')
      .isEnumerable('message', 'Please, try a diffrent protocol version and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new VariantAlsoNegotiates when given 506', () => {
    unit
      .object(ServerError(506))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(VariantAlsoNegotiates)
      .isEnumerable('code', 506)
      .isEnumerable('status', 'Variant Also Negotiates')
      .isEnumerable('message', 'Sorry, it appears there is a misconfiguration on our end.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new VariantAlsoNegotiates when given "Variant Also Negotiates"', () => {
    unit
      .object(ServerError('Variant Also Negotiates'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(VariantAlsoNegotiates)
      .isEnumerable('code', 506)
      .isEnumerable('status', 'Variant Also Negotiates')
      .isEnumerable('message', 'Sorry, it appears there is a misconfiguration on our end.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new VariantAlsoNegotiates when given "VariantAlsoNegotiates"', () => {
    unit
      .object(ServerError('VariantAlsoNegotiates'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(VariantAlsoNegotiates)
      .isEnumerable('code', 506)
      .isEnumerable('status', 'Variant Also Negotiates')
      .isEnumerable('message', 'Sorry, it appears there is a misconfiguration on our end.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new InsufficientStorage when given 507', () => {
    unit
      .object(ServerError(507))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(InsufficientStorage)
      .isEnumerable('code', 507)
      .isEnumerable('status', 'Insufficient Storage')
      .isEnumerable('message', 'Sorry, it appears we have no more room for storage.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new InsufficientStorage when given "Insufficient Storage"', () => {
    unit
      .object(ServerError('Insufficient Storage'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(InsufficientStorage)
      .isEnumerable('code', 507)
      .isEnumerable('status', 'Insufficient Storage')
      .isEnumerable('message', 'Sorry, it appears we have no more room for storage.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new InsufficientStorage when given "InsufficientStorage"', () => {
    unit
      .object(ServerError('InsufficientStorage'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(InsufficientStorage)
      .isEnumerable('code', 507)
      .isEnumerable('status', 'Insufficient Storage')
      .isEnumerable('message', 'Sorry, it appears we have no more room for storage.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new LoopDetected when given 508', () => {
    unit
      .object(ServerError(508))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(LoopDetected)
      .isEnumerable('code', 508)
      .isEnumerable('status', 'Loop Detected')
      .isEnumerable('message', 'Sorry, We have detected an infintie loop and had to stop the request, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new LoopDetected when given "Loop Detected"', () => {
    unit
      .object(ServerError('Loop Detected'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(LoopDetected)
      .isEnumerable('code', 508)
      .isEnumerable('status', 'Loop Detected')
      .isEnumerable('message', 'Sorry, We have detected an infintie loop and had to stop the request, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new LoopDetected when given "LoopDetected"', () => {
    unit
      .object(ServerError('LoopDetected'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(LoopDetected)
      .isEnumerable('code', 508)
      .isEnumerable('status', 'Loop Detected')
      .isEnumerable('message', 'Sorry, We have detected an infintie loop and had to stop the request, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotExtended when given 510', () => {
    unit
      .object(ServerError(510))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(NotExtended)
      .isEnumerable('code', 510)
      .isEnumerable('status', 'Not Extended')
      .isEnumerable('message', 'The policy for accessing this resource has not been met by this request.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotExtended when given "Not Extended"', () => {
    unit
      .object(ServerError('Not Extended'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(NotExtended)
      .isEnumerable('code', 510)
      .isEnumerable('status', 'Not Extended')
      .isEnumerable('message', 'The policy for accessing this resource has not been met by this request.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotExtended when given "NotExtended"', () => {
    unit
      .object(ServerError('NotExtended'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(NotExtended)
      .isEnumerable('code', 510)
      .isEnumerable('status', 'Not Extended')
      .isEnumerable('message', 'The policy for accessing this resource has not been met by this request.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NetworkAuthenticationRequired when given 511', () => {
    unit
      .object(ServerError(511))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(NetworkAuthenticationRequired)
      .isEnumerable('code', 511)
      .isEnumerable('status', 'Network Authentication Required')
      .isEnumerable('message', 'Please, authenticate with the network and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NetworkAuthenticationRequired when given "Network Authentication Required"', () => {
    unit
      .object(ServerError('Network Authentication Required'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(NetworkAuthenticationRequired)
      .isEnumerable('code', 511)
      .isEnumerable('status', 'Network Authentication Required')
      .isEnumerable('message', 'Please, authenticate with the network and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NetworkAuthenticationRequired when given "NetworkAuthenticationRequired"', () => {
    unit
      .object(ServerError('NetworkAuthenticationRequired'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(NetworkAuthenticationRequired)
      .isEnumerable('code', 511)
      .isEnumerable('status', 'Network Authentication Required')
      .isEnumerable('message', 'Please, authenticate with the network and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnknownError when given 520', () => {
    unit
      .object(ServerError(520))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(UnknownError)
      .isEnumerable('code', 520)
      .isEnumerable('status', 'Unknown Error')
      .isEnumerable('message', 'Sorry, an unexpected error has occured, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnknownError when given "Unknown Error"', () => {
    unit
      .object(ServerError('Unknown Error'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(UnknownError)
      .isEnumerable('code', 520)
      .isEnumerable('status', 'Unknown Error')
      .isEnumerable('message', 'Sorry, an unexpected error has occured, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnknownError when given "UnknownError"', () => {
    unit
      .object(ServerError('UnknownError'))
      .isInstanceOf(Error)
      .isInstanceOf(ServerError)
      .isInstanceOf(UnknownError)
      .isEnumerable('code', 520)
      .isEnumerable('status', 'Unknown Error')
      .isEnumerable('message', 'Sorry, an unexpected error has occured, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it
}); // end describe ServerError