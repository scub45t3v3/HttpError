'use strict';

// include dependecies
const unit = require('unit.js');
const {
  HttpError,
  ClientError,
  ServerError,
  BadRequest,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  ProxyAuthenticationRequired,
  RequestTimeout,
  Conflict,
  Gone,
  LengthRequired,
  PreconditionFailed,
  PayloadTooLarge,
  URITooLong,
  UnsupportedMediaType,
  RangeNotSatisfiable,
  ExpectationFailed,
  IMATeapot,
  MisdirectedRequest,
  UnprocessableEntity,
  Locked,
  FailedDependency,
  UpgradeRequired,
  PreconditionRequired,
  TooManyRequests,
  RequestHeaderFieldsTooLarge,
  UnavailableForLegalReasons,
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

// describe HttpError
describe('HttpError', () => {
  it('should be a function', () => {
    unit
      .function(HttpError);
  }); // end it

  it('should return a new BadRequest when given 400', () => {
    unit
      .object(HttpError(400))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(BadRequest)
      .isEnumerable('code', 400)
      .isEnumerable('status', 'Bad Request')
      .isEnumerable('message', 'Please, correct your request and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new BadRequest when given "Bad Request"', () => {
    unit
      .object(HttpError('Bad Request'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(BadRequest)
      .isEnumerable('code', 400)
      .isEnumerable('status', 'Bad Request')
      .isEnumerable('message', 'Please, correct your request and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new BadRequest when given "BadRequest"', () => {
    unit
      .object(HttpError('BadRequest'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(BadRequest)
      .isEnumerable('code', 400)
      .isEnumerable('status', 'Bad Request')
      .isEnumerable('message', 'Please, correct your request and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Unauthorized when given 401', () => {
    unit
      .object(HttpError(401))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Unauthorized)
      .isEnumerable('code', 401)
      .isEnumerable('status', 'Unauthorized')
      .isEnumerable('message', 'Please, authenticate and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Unauthorized when given "Unauthorized"', () => {
    unit
      .object(HttpError('Unauthorized'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Unauthorized)
      .isEnumerable('code', 401)
      .isEnumerable('status', 'Unauthorized')
      .isEnumerable('message', 'Please, authenticate and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Unauthorized when given "Unauthorized"', () => {
    unit
      .object(HttpError('Unauthorized'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Unauthorized)
      .isEnumerable('code', 401)
      .isEnumerable('status', 'Unauthorized')
      .isEnumerable('message', 'Please, authenticate and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PaymentRequired when given 402', () => {
    unit
      .object(HttpError(402))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PaymentRequired)
      .isEnumerable('code', 402)
      .isEnumerable('status', 'Payment Required')
      .isEnumerable('message', 'Payment is required to use this service.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PaymentRequired when given "Payment Required"', () => {
    unit
      .object(HttpError('Payment Required'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PaymentRequired)
      .isEnumerable('code', 402)
      .isEnumerable('status', 'Payment Required')
      .isEnumerable('message', 'Payment is required to use this service.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PaymentRequired when given "PaymentRequired"', () => {
    unit
      .object(HttpError('PaymentRequired'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PaymentRequired)
      .isEnumerable('code', 402)
      .isEnumerable('status', 'Payment Required')
      .isEnumerable('message', 'Payment is required to use this service.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Forbidden when given 403', () => {
    unit
      .object(HttpError(403))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Forbidden)
      .isEnumerable('code', 403)
      .isEnumerable('status', 'Forbidden')
      .isEnumerable('message', 'You lack permission to preform this action.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Forbidden when given "Forbidden"', () => {
    unit
      .object(HttpError('Forbidden'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Forbidden)
      .isEnumerable('code', 403)
      .isEnumerable('status', 'Forbidden')
      .isEnumerable('message', 'You lack permission to preform this action.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Forbidden when given "Forbidden"', () => {
    unit
      .object(HttpError('Forbidden'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Forbidden)
      .isEnumerable('code', 403)
      .isEnumerable('status', 'Forbidden')
      .isEnumerable('message', 'You lack permission to preform this action.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotFound when given 404', () => {
    unit
      .object(HttpError(404))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(NotFound)
      .isEnumerable('code', 404)
      .isEnumerable('status', 'Not Found')
      .isEnumerable('message', 'The requested document was not found.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotFound when given "Not Found"', () => {
    unit
      .object(HttpError('Not Found'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(NotFound)
      .isEnumerable('code', 404)
      .isEnumerable('status', 'Not Found')
      .isEnumerable('message', 'The requested document was not found.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotFound when given "NotFound"', () => {
    unit
      .object(HttpError('NotFound'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(NotFound)
      .isEnumerable('code', 404)
      .isEnumerable('status', 'Not Found')
      .isEnumerable('message', 'The requested document was not found.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new MethodNotAllowed when given 405', () => {
    unit
      .object(HttpError(405))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(MethodNotAllowed)
      .isEnumerable('code', 405)
      .isEnumerable('status', 'Method Not Allowed')
      .isEnumerable('message', 'Please, check your request method and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new MethodNotAllowed when given "Method Not Allowed"', () => {
    unit
      .object(HttpError('Method Not Allowed'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(MethodNotAllowed)
      .isEnumerable('code', 405)
      .isEnumerable('status', 'Method Not Allowed')
      .isEnumerable('message', 'Please, check your request method and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new MethodNotAllowed when given "MethodNotAllowed"', () => {
    unit
      .object(HttpError('MethodNotAllowed'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(MethodNotAllowed)
      .isEnumerable('code', 405)
      .isEnumerable('status', 'Method Not Allowed')
      .isEnumerable('message', 'Please, check your request method and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotAcceptable when given 406', () => {
    unit
      .object(HttpError(406))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(NotAcceptable)
      .isEnumerable('code', 406)
      .isEnumerable('status', 'Not Acceptable')
      .isEnumerable('message', 'The requested document format is not supported.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotAcceptable when given "Not Acceptable"', () => {
    unit
      .object(HttpError('Not Acceptable'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(NotAcceptable)
      .isEnumerable('code', 406)
      .isEnumerable('status', 'Not Acceptable')
      .isEnumerable('message', 'The requested document format is not supported.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new NotAcceptable when given "NotAcceptable"', () => {
    unit
      .object(HttpError('NotAcceptable'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(NotAcceptable)
      .isEnumerable('code', 406)
      .isEnumerable('status', 'Not Acceptable')
      .isEnumerable('message', 'The requested document format is not supported.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new ProxyAuthenticationRequired when given 407', () => {
    unit
      .object(HttpError(407))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(ProxyAuthenticationRequired)
      .isEnumerable('code', 407)
      .isEnumerable('status', 'Proxy Authentication Required')
      .isEnumerable('message', 'Please, authenticate with the proxy server and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new ProxyAuthenticationRequired when given "Proxy Authentication Required"', () => {
    unit
      .object(HttpError('Proxy Authentication Required'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(ProxyAuthenticationRequired)
      .isEnumerable('code', 407)
      .isEnumerable('status', 'Proxy Authentication Required')
      .isEnumerable('message', 'Please, authenticate with the proxy server and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new ProxyAuthenticationRequired when given "ProxyAuthenticationRequired"', () => {
    unit
      .object(HttpError('ProxyAuthenticationRequired'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(ProxyAuthenticationRequired)
      .isEnumerable('code', 407)
      .isEnumerable('status', 'Proxy Authentication Required')
      .isEnumerable('message', 'Please, authenticate with the proxy server and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new RequestTimeout when given 408', () => {
    unit
      .object(HttpError(408))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(RequestTimeout)
      .isEnumerable('code', 408)
      .isEnumerable('status', 'Request Timeout')
      .isEnumerable('message', 'Sorry, it appears we are on break, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new RequestTimeout when given "Request Timeout"', () => {
    unit
      .object(HttpError('Request Timeout'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(RequestTimeout)
      .isEnumerable('code', 408)
      .isEnumerable('status', 'Request Timeout')
      .isEnumerable('message', 'Sorry, it appears we are on break, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new RequestTimeout when given "RequestTimeout"', () => {
    unit
      .object(HttpError('RequestTimeout'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(RequestTimeout)
      .isEnumerable('code', 408)
      .isEnumerable('status', 'Request Timeout')
      .isEnumerable('message', 'Sorry, it appears we are on break, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Conflict when given 409', () => {
    unit
      .object(HttpError(409))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Conflict)
      .isEnumerable('code', 409)
      .isEnumerable('status', 'Conflict')
      .isEnumerable('message', 'Houston, we have a conflict, please reload the resource and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Conflict when given "Conflict"', () => {
    unit
      .object(HttpError('Conflict'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Conflict)
      .isEnumerable('code', 409)
      .isEnumerable('status', 'Conflict')
      .isEnumerable('message', 'Houston, we have a conflict, please reload the resource and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Conflict when given "Conflict"', () => {
    unit
      .object(HttpError('Conflict'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Conflict)
      .isEnumerable('code', 409)
      .isEnumerable('status', 'Conflict')
      .isEnumerable('message', 'Houston, we have a conflict, please reload the resource and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Gone when given 410', () => {
    unit
      .object(HttpError(410))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Gone)
      .isEnumerable('code', 410)
      .isEnumerable('status', 'Gone')
      .isEnumerable('message', 'Sorry, but that resource has been removed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Gone when given "Gone"', () => {
    unit
      .object(HttpError('Gone'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Gone)
      .isEnumerable('code', 410)
      .isEnumerable('status', 'Gone')
      .isEnumerable('message', 'Sorry, but that resource has been removed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Gone when given "Gone"', () => {
    unit
      .object(HttpError('Gone'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Gone)
      .isEnumerable('code', 410)
      .isEnumerable('status', 'Gone')
      .isEnumerable('message', 'Sorry, but that resource has been removed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new LengthRequired when given 411', () => {
    unit
      .object(HttpError(411))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(LengthRequired)
      .isEnumerable('code', 411)
      .isEnumerable('status', 'Length Required')
      .isEnumerable('message', 'Please, correct the Length header and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new LengthRequired when given "Length Required"', () => {
    unit
      .object(HttpError('Length Required'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(LengthRequired)
      .isEnumerable('code', 411)
      .isEnumerable('status', 'Length Required')
      .isEnumerable('message', 'Please, correct the Length header and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new LengthRequired when given "LengthRequired"', () => {
    unit
      .object(HttpError('LengthRequired'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(LengthRequired)
      .isEnumerable('code', 411)
      .isEnumerable('status', 'Length Required')
      .isEnumerable('message', 'Please, correct the Length header and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PreconditionFailed when given 412', () => {
    unit
      .object(HttpError(412))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PreconditionFailed)
      .isEnumerable('code', 412)
      .isEnumerable('status', 'Precondition Failed')
      .isEnumerable('message', 'Sorry, it appears 1 or more preconditions on the request have changed, please correct and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PreconditionFailed when given "Precondition Failed"', () => {
    unit
      .object(HttpError('Precondition Failed'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PreconditionFailed)
      .isEnumerable('code', 412)
      .isEnumerable('status', 'Precondition Failed')
      .isEnumerable('message', 'Sorry, it appears 1 or more preconditions on the request have changed, please correct and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PreconditionFailed when given "PreconditionFailed"', () => {
    unit
      .object(HttpError('PreconditionFailed'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PreconditionFailed)
      .isEnumerable('code', 412)
      .isEnumerable('status', 'Precondition Failed')
      .isEnumerable('message', 'Sorry, it appears 1 or more preconditions on the request have changed, please correct and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PayloadTooLarge when given 413', () => {
    unit
      .object(HttpError(413))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PayloadTooLarge)
      .isEnumerable('code', 413)
      .isEnumerable('status', 'Payload Too Large')
      .isEnumerable('message', 'Request payload is too large and can not be processed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PayloadTooLarge when given "Payload Too Large"', () => {
    unit
      .object(HttpError('Payload Too Large'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PayloadTooLarge)
      .isEnumerable('code', 413)
      .isEnumerable('status', 'Payload Too Large')
      .isEnumerable('message', 'Request payload is too large and can not be processed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PayloadTooLarge when given "PayloadTooLarge"', () => {
    unit
      .object(HttpError('PayloadTooLarge'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PayloadTooLarge)
      .isEnumerable('code', 413)
      .isEnumerable('status', 'Payload Too Large')
      .isEnumerable('message', 'Request payload is too large and can not be processed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new URITooLong when given 414', () => {
    unit
      .object(HttpError(414))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(URITooLong)
      .isEnumerable('code', 414)
      .isEnumerable('status', 'URI Too Long')
      .isEnumerable('message', 'Request uri is too large and can not be processed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new URITooLong when given "URI Too Long"', () => {
    unit
      .object(HttpError('URI Too Long'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(URITooLong)
      .isEnumerable('code', 414)
      .isEnumerable('status', 'URI Too Long')
      .isEnumerable('message', 'Request uri is too large and can not be processed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new URITooLong when given "URITooLong"', () => {
    unit
      .object(HttpError('URITooLong'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(URITooLong)
      .isEnumerable('code', 414)
      .isEnumerable('status', 'URI Too Long')
      .isEnumerable('message', 'Request uri is too large and can not be processed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnsupportedMediaType when given 415', () => {
    unit
      .object(HttpError(415))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UnsupportedMediaType)
      .isEnumerable('code', 415)
      .isEnumerable('status', 'Unsupported Media Type')
      .isEnumerable('message', 'Please, try again with a different media format.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnsupportedMediaType when given "Unsupported Media Type"', () => {
    unit
      .object(HttpError('Unsupported Media Type'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UnsupportedMediaType)
      .isEnumerable('code', 415)
      .isEnumerable('status', 'Unsupported Media Type')
      .isEnumerable('message', 'Please, try again with a different media format.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnsupportedMediaType when given "UnsupportedMediaType"', () => {
    unit
      .object(HttpError('UnsupportedMediaType'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UnsupportedMediaType)
      .isEnumerable('code', 415)
      .isEnumerable('status', 'Unsupported Media Type')
      .isEnumerable('message', 'Please, try again with a different media format.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new RangeNotSatisfiable when given 416', () => {
    unit
      .object(HttpError(416))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(RangeNotSatisfiable)
      .isEnumerable('code', 416)
      .isEnumerable('status', 'Range Not Satisfiable')
      .isEnumerable('message', 'Requested range is not satisfiable, please check Range and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new RangeNotSatisfiable when given "Range Not Satisfiable"', () => {
    unit
      .object(HttpError('Range Not Satisfiable'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(RangeNotSatisfiable)
      .isEnumerable('code', 416)
      .isEnumerable('status', 'Range Not Satisfiable')
      .isEnumerable('message', 'Requested range is not satisfiable, please check Range and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new RangeNotSatisfiable when given "RangeNotSatisfiable"', () => {
    unit
      .object(HttpError('RangeNotSatisfiable'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(RangeNotSatisfiable)
      .isEnumerable('code', 416)
      .isEnumerable('status', 'Range Not Satisfiable')
      .isEnumerable('message', 'Requested range is not satisfiable, please check Range and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new ExpectationFailed when given 417', () => {
    unit
      .object(HttpError(417))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(ExpectationFailed)
      .isEnumerable('code', 417)
      .isEnumerable('status', 'Expectation Failed')
      .isEnumerable('message', 'Sorry, your expectation can not be meet, please check Expect and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new ExpectationFailed when given "Expectation Failed"', () => {
    unit
      .object(HttpError('Expectation Failed'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(ExpectationFailed)
      .isEnumerable('code', 417)
      .isEnumerable('status', 'Expectation Failed')
      .isEnumerable('message', 'Sorry, your expectation can not be meet, please check Expect and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new ExpectationFailed when given "ExpectationFailed"', () => {
    unit
      .object(HttpError('ExpectationFailed'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(ExpectationFailed)
      .isEnumerable('code', 417)
      .isEnumerable('status', 'Expectation Failed')
      .isEnumerable('message', 'Sorry, your expectation can not be meet, please check Expect and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new IMATeapot when given 418', () => {
    unit
      .object(HttpError(418))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(IMATeapot)
      .isEnumerable('code', 418)
      .isEnumerable('status', 'I\'m a teapot')
      .isEnumerable('message', 'Tip me over, and pour me out.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new IMATeapot when given "I\'m a teapot"', () => {
    unit
      .object(HttpError('I\'m a teapot'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(IMATeapot)
      .isEnumerable('code', 418)
      .isEnumerable('status', 'I\'m a teapot')
      .isEnumerable('message', 'Tip me over, and pour me out.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new IMATeapot when given "IMATeapot"', () => {
    unit
      .object(HttpError('IMATeapot'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(IMATeapot)
      .isEnumerable('code', 418)
      .isEnumerable('status', 'I\'m a teapot')
      .isEnumerable('message', 'Tip me over, and pour me out.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new MisdirectedRequest when given 421', () => {
    unit
      .object(HttpError(421))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(MisdirectedRequest)
      .isEnumerable('code', 421)
      .isEnumerable('status', 'Misdirected Request')
      .isEnumerable('message', 'Sorry, we got misdirected, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new MisdirectedRequest when given "Misdirected Request"', () => {
    unit
      .object(HttpError('Misdirected Request'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(MisdirectedRequest)
      .isEnumerable('code', 421)
      .isEnumerable('status', 'Misdirected Request')
      .isEnumerable('message', 'Sorry, we got misdirected, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new MisdirectedRequest when given "MisdirectedRequest"', () => {
    unit
      .object(HttpError('MisdirectedRequest'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(MisdirectedRequest)
      .isEnumerable('code', 421)
      .isEnumerable('status', 'Misdirected Request')
      .isEnumerable('message', 'Sorry, we got misdirected, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnprocessableEntity when given 422', () => {
    unit
      .object(HttpError(422))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UnprocessableEntity)
      .isEnumerable('code', 422)
      .isEnumerable('status', 'Unprocessable Entity')
      .isEnumerable('message', 'Sorry, it appears your document instructions are semantically erroneous.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnprocessableEntity when given "Unprocessable Entity"', () => {
    unit
      .object(HttpError('Unprocessable Entity'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UnprocessableEntity)
      .isEnumerable('code', 422)
      .isEnumerable('status', 'Unprocessable Entity')
      .isEnumerable('message', 'Sorry, it appears your document instructions are semantically erroneous.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnprocessableEntity when given "UnprocessableEntity"', () => {
    unit
      .object(HttpError('UnprocessableEntity'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UnprocessableEntity)
      .isEnumerable('code', 422)
      .isEnumerable('status', 'Unprocessable Entity')
      .isEnumerable('message', 'Sorry, it appears your document instructions are semantically erroneous.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Locked when given 423', () => {
    unit
      .object(HttpError(423))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Locked)
      .isEnumerable('code', 423)
      .isEnumerable('status', 'Locked')
      .isEnumerable('message', 'Document is currently locked, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Locked when given "Locked"', () => {
    unit
      .object(HttpError('Locked'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Locked)
      .isEnumerable('code', 423)
      .isEnumerable('status', 'Locked')
      .isEnumerable('message', 'Document is currently locked, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new Locked when given "Locked"', () => {
    unit
      .object(HttpError('Locked'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(Locked)
      .isEnumerable('code', 423)
      .isEnumerable('status', 'Locked')
      .isEnumerable('message', 'Document is currently locked, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new FailedDependency when given 424', () => {
    unit
      .object(HttpError(424))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(FailedDependency)
      .isEnumerable('code', 424)
      .isEnumerable('status', 'Failed Dependency')
      .isEnumerable('message', 'Sorry, it appears a dependent request has failed please retry previous dependent request and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new FailedDependency when given "Failed Dependency"', () => {
    unit
      .object(HttpError('Failed Dependency'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(FailedDependency)
      .isEnumerable('code', 424)
      .isEnumerable('status', 'Failed Dependency')
      .isEnumerable('message', 'Sorry, it appears a dependent request has failed please retry previous dependent request and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new FailedDependency when given "FailedDependency"', () => {
    unit
      .object(HttpError('FailedDependency'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(FailedDependency)
      .isEnumerable('code', 424)
      .isEnumerable('status', 'Failed Dependency')
      .isEnumerable('message', 'Sorry, it appears a dependent request has failed please retry previous dependent request and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UpgradeRequired when given 426', () => {
    unit
      .object(HttpError(426))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UpgradeRequired)
      .isEnumerable('code', 426)
      .isEnumerable('status', 'Upgrade Required')
      .isEnumerable('message', 'Please, upgrade and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UpgradeRequired when given "Upgrade Required"', () => {
    unit
      .object(HttpError('Upgrade Required'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UpgradeRequired)
      .isEnumerable('code', 426)
      .isEnumerable('status', 'Upgrade Required')
      .isEnumerable('message', 'Please, upgrade and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UpgradeRequired when given "UpgradeRequired"', () => {
    unit
      .object(HttpError('UpgradeRequired'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UpgradeRequired)
      .isEnumerable('code', 426)
      .isEnumerable('status', 'Upgrade Required')
      .isEnumerable('message', 'Please, upgrade and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PreconditionRequired when given 428', () => {
    unit
      .object(HttpError(428))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PreconditionRequired)
      .isEnumerable('code', 428)
      .isEnumerable('status', 'Precondition Required')
      .isEnumerable('message', 'Please, add preconditions to your request and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PreconditionRequired when given "Precondition Required"', () => {
    unit
      .object(HttpError('Precondition Required'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PreconditionRequired)
      .isEnumerable('code', 428)
      .isEnumerable('status', 'Precondition Required')
      .isEnumerable('message', 'Please, add preconditions to your request and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new PreconditionRequired when given "PreconditionRequired"', () => {
    unit
      .object(HttpError('PreconditionRequired'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(PreconditionRequired)
      .isEnumerable('code', 428)
      .isEnumerable('status', 'Precondition Required')
      .isEnumerable('message', 'Please, add preconditions to your request and try again.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new TooManyRequests when given 429', () => {
    unit
      .object(HttpError(429))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(TooManyRequests)
      .isEnumerable('code', 429)
      .isEnumerable('status', 'Too Many Requests')
      .isEnumerable('message', 'Sorry, you have exceeded your rate limit, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new TooManyRequests when given "Too Many Requests"', () => {
    unit
      .object(HttpError('Too Many Requests'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(TooManyRequests)
      .isEnumerable('code', 429)
      .isEnumerable('status', 'Too Many Requests')
      .isEnumerable('message', 'Sorry, you have exceeded your rate limit, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new TooManyRequests when given "TooManyRequests"', () => {
    unit
      .object(HttpError('TooManyRequests'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(TooManyRequests)
      .isEnumerable('code', 429)
      .isEnumerable('status', 'Too Many Requests')
      .isEnumerable('message', 'Sorry, you have exceeded your rate limit, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new RequestHeaderFieldsTooLarge when given 431', () => {
    unit
      .object(HttpError(431))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(RequestHeaderFieldsTooLarge)
      .isEnumerable('code', 431)
      .isEnumerable('status', 'Request Header Fields Too Large')
      .isEnumerable('message', 'Request header is too large and can not be processed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new RequestHeaderFieldsTooLarge when given "Request Header Fields Too Large"', () => {
    unit
      .object(HttpError('Request Header Fields Too Large'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(RequestHeaderFieldsTooLarge)
      .isEnumerable('code', 431)
      .isEnumerable('status', 'Request Header Fields Too Large')
      .isEnumerable('message', 'Request header is too large and can not be processed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new RequestHeaderFieldsTooLarge when given "RequestHeaderFieldsTooLarge"', () => {
    unit
      .object(HttpError('RequestHeaderFieldsTooLarge'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(RequestHeaderFieldsTooLarge)
      .isEnumerable('code', 431)
      .isEnumerable('status', 'Request Header Fields Too Large')
      .isEnumerable('message', 'Request header is too large and can not be processed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnavailableForLegalReasons when given 451', () => {
    unit
      .object(HttpError(451))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UnavailableForLegalReasons)
      .isEnumerable('code', 451)
      .isEnumerable('status', 'Unavailable For Legal Reasons')
      .isEnumerable('message', 'Due to legal reasons this resource has been removed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnavailableForLegalReasons when given "Unavailable For Legal Reasons"', () => {
    unit
      .object(HttpError('Unavailable For Legal Reasons'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UnavailableForLegalReasons)
      .isEnumerable('code', 451)
      .isEnumerable('status', 'Unavailable For Legal Reasons')
      .isEnumerable('message', 'Due to legal reasons this resource has been removed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new UnavailableForLegalReasons when given "UnavailableForLegalReasons"', () => {
    unit
      .object(HttpError('UnavailableForLegalReasons'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ClientError)
      .isInstanceOf(UnavailableForLegalReasons)
      .isEnumerable('code', 451)
      .isEnumerable('status', 'Unavailable For Legal Reasons')
      .isEnumerable('message', 'Due to legal reasons this resource has been removed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it

  it('should return a new InternalServerError when given 500', () => {
    unit
      .object(HttpError(500))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('Internal Server Error'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('InternalServerError'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError(501))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('Not Implemented'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('NotImplemented'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError(502))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('Bad Gateway'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('BadGateway'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError(503))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('Service Unavailable'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('ServiceUnavailable'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError(504))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('Gateway Timeout'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('GatewayTimeout'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError(505))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('HTTP Version Not Supported'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('HTTPVersionNotSupported'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError(506))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('Variant Also Negotiates'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('VariantAlsoNegotiates'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError(507))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('Insufficient Storage'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('InsufficientStorage'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError(508))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('Loop Detected'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('LoopDetected'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError(510))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('Not Extended'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('NotExtended'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError(511))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('Network Authentication Required'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('NetworkAuthenticationRequired'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError(520))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('Unknown Error'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
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
      .object(HttpError('UnknownError'))
      .isInstanceOf(Error)
      .isInstanceOf(HttpError)
      .isInstanceOf(ServerError)
      .isInstanceOf(UnknownError)
      .isEnumerable('code', 520)
      .isEnumerable('status', 'Unknown Error')
      .isEnumerable('message', 'Sorry, an unexpected error has occured, please try again later.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it
}); // end describe HttpError