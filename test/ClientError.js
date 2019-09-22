'use strict';

const unit = require('unit.js');
const {
  ClientError,
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
} = require('../index');

// describe ClientError
describe('ClientError', () => {
  it('should be a function', () => {
    unit
      .function(ClientError);
  }); // end it

  it('should return a new BadRequest when given 400', () => {
    unit
      .object(ClientError(400))
      .isInstanceOf(Error)
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
      .object(ClientError('Bad Request'))
      .isInstanceOf(Error)
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
      .object(ClientError('BadRequest'))
      .isInstanceOf(Error)
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
      .object(ClientError(401))
      .isInstanceOf(Error)
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
      .object(ClientError('Unauthorized'))
      .isInstanceOf(Error)
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
      .object(ClientError('Unauthorized'))
      .isInstanceOf(Error)
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
      .object(ClientError(402))
      .isInstanceOf(Error)
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
      .object(ClientError('Payment Required'))
      .isInstanceOf(Error)
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
      .object(ClientError('PaymentRequired'))
      .isInstanceOf(Error)
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
      .object(ClientError(403))
      .isInstanceOf(Error)
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
      .object(ClientError('Forbidden'))
      .isInstanceOf(Error)
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
      .object(ClientError('Forbidden'))
      .isInstanceOf(Error)
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
      .object(ClientError(404))
      .isInstanceOf(Error)
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
      .object(ClientError('Not Found'))
      .isInstanceOf(Error)
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
      .object(ClientError('NotFound'))
      .isInstanceOf(Error)
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
      .object(ClientError(405))
      .isInstanceOf(Error)
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
      .object(ClientError('Method Not Allowed'))
      .isInstanceOf(Error)
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
      .object(ClientError('MethodNotAllowed'))
      .isInstanceOf(Error)
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
      .object(ClientError(406))
      .isInstanceOf(Error)
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
      .object(ClientError('Not Acceptable'))
      .isInstanceOf(Error)
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
      .object(ClientError('NotAcceptable'))
      .isInstanceOf(Error)
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
      .object(ClientError(407))
      .isInstanceOf(Error)
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
      .object(ClientError('Proxy Authentication Required'))
      .isInstanceOf(Error)
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
      .object(ClientError('ProxyAuthenticationRequired'))
      .isInstanceOf(Error)
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
      .object(ClientError(408))
      .isInstanceOf(Error)
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
      .object(ClientError('Request Timeout'))
      .isInstanceOf(Error)
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
      .object(ClientError('RequestTimeout'))
      .isInstanceOf(Error)
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
      .object(ClientError(409))
      .isInstanceOf(Error)
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
      .object(ClientError('Conflict'))
      .isInstanceOf(Error)
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
      .object(ClientError('Conflict'))
      .isInstanceOf(Error)
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
      .object(ClientError(410))
      .isInstanceOf(Error)
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
      .object(ClientError('Gone'))
      .isInstanceOf(Error)
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
      .object(ClientError('Gone'))
      .isInstanceOf(Error)
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
      .object(ClientError(411))
      .isInstanceOf(Error)
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
      .object(ClientError('Length Required'))
      .isInstanceOf(Error)
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
      .object(ClientError('LengthRequired'))
      .isInstanceOf(Error)
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
      .object(ClientError(412))
      .isInstanceOf(Error)
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
      .object(ClientError('Precondition Failed'))
      .isInstanceOf(Error)
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
      .object(ClientError('PreconditionFailed'))
      .isInstanceOf(Error)
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
      .object(ClientError(413))
      .isInstanceOf(Error)
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
      .object(ClientError('Payload Too Large'))
      .isInstanceOf(Error)
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
      .object(ClientError('PayloadTooLarge'))
      .isInstanceOf(Error)
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
      .object(ClientError(414))
      .isInstanceOf(Error)
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
      .object(ClientError('URI Too Long'))
      .isInstanceOf(Error)
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
      .object(ClientError('URITooLong'))
      .isInstanceOf(Error)
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
      .object(ClientError(415))
      .isInstanceOf(Error)
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
      .object(ClientError('Unsupported Media Type'))
      .isInstanceOf(Error)
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
      .object(ClientError('UnsupportedMediaType'))
      .isInstanceOf(Error)
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
      .object(ClientError(416))
      .isInstanceOf(Error)
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
      .object(ClientError('Range Not Satisfiable'))
      .isInstanceOf(Error)
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
      .object(ClientError('RangeNotSatisfiable'))
      .isInstanceOf(Error)
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
      .object(ClientError(417))
      .isInstanceOf(Error)
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
      .object(ClientError('Expectation Failed'))
      .isInstanceOf(Error)
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
      .object(ClientError('ExpectationFailed'))
      .isInstanceOf(Error)
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
      .object(ClientError(418))
      .isInstanceOf(Error)
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
      .object(ClientError('I\'m a teapot'))
      .isInstanceOf(Error)
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
      .object(ClientError('IMATeapot'))
      .isInstanceOf(Error)
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
      .object(ClientError(421))
      .isInstanceOf(Error)
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
      .object(ClientError('Misdirected Request'))
      .isInstanceOf(Error)
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
      .object(ClientError('MisdirectedRequest'))
      .isInstanceOf(Error)
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
      .object(ClientError(422))
      .isInstanceOf(Error)
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
      .object(ClientError('Unprocessable Entity'))
      .isInstanceOf(Error)
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
      .object(ClientError('UnprocessableEntity'))
      .isInstanceOf(Error)
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
      .object(ClientError(423))
      .isInstanceOf(Error)
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
      .object(ClientError('Locked'))
      .isInstanceOf(Error)
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
      .object(ClientError('Locked'))
      .isInstanceOf(Error)
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
      .object(ClientError(424))
      .isInstanceOf(Error)
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
      .object(ClientError('Failed Dependency'))
      .isInstanceOf(Error)
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
      .object(ClientError('FailedDependency'))
      .isInstanceOf(Error)
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
      .object(ClientError(426))
      .isInstanceOf(Error)
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
      .object(ClientError('Upgrade Required'))
      .isInstanceOf(Error)
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
      .object(ClientError('UpgradeRequired'))
      .isInstanceOf(Error)
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
      .object(ClientError(428))
      .isInstanceOf(Error)
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
      .object(ClientError('Precondition Required'))
      .isInstanceOf(Error)
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
      .object(ClientError('PreconditionRequired'))
      .isInstanceOf(Error)
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
      .object(ClientError(429))
      .isInstanceOf(Error)
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
      .object(ClientError('Too Many Requests'))
      .isInstanceOf(Error)
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
      .object(ClientError('TooManyRequests'))
      .isInstanceOf(Error)
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
      .object(ClientError(431))
      .isInstanceOf(Error)
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
      .object(ClientError('Request Header Fields Too Large'))
      .isInstanceOf(Error)
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
      .object(ClientError('RequestHeaderFieldsTooLarge'))
      .isInstanceOf(Error)
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
      .object(ClientError(451))
      .isInstanceOf(Error)
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
      .object(ClientError('Unavailable For Legal Reasons'))
      .isInstanceOf(Error)
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
      .object(ClientError('UnavailableForLegalReasons'))
      .isInstanceOf(Error)
      .isInstanceOf(ClientError)
      .isInstanceOf(UnavailableForLegalReasons)
      .isEnumerable('code', 451)
      .isEnumerable('status', 'Unavailable For Legal Reasons')
      .isEnumerable('message', 'Due to legal reasons this resource has been removed.')
      .isEnumerable('debug')
      .isEnumerable('cause');
  }); // end it
}); // end describe ClientError