# HttpError

<a name="status"></a>
## Status
[![Build Status](https://github.com/scub45t3v3/httperror/workflows/CI/badge.svg?event=push)](https://github.com/scub45t3v3/httperror/actions)
[![Coverage Status](https://coveralls.io/repos/github/scub45t3v3/HttpError/badge.svg)](https://coveralls.io/github/scub45t3v3/HttpError)

<a name="toc"></a>
## Table of Content
  * [Status](#status)
  * [Purpose](#purpose)
  * [Installation](#installation)
  * [API](#api)
  * [Test](#test)
  * [License](#license)

<a name="purpose"></a>
## Purpose
HttpError class definition

<a name="installation"></a>
## Installation
Via [npm](https://www.npmjs.com/)

```bash
npm install @scuba-squad/http-error
```

<a name="api"></a>
## API
### `HttpError(name: number | string)`
**Added in:** v1.0.0

Factory method to get a HttpError class

**arguments:**
1. `name: number | string`

**returns:** HttpError

**throws:** TypeError

```javascript
const errors = require('@scuba-squad/http-error');
const notFound = errors.HttpError(404);

notFound instanceof Error; // true
notFound instanceof errors.HttpError; // true
notFound instanceof errors.ClientError; // true
notFound instanceof errors.ServerError; // false
notFound instanceof errors.NotFound; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const notFound = errors.HttpError('Not found');

notFound instanceof Error; // true
notFound instanceof errors.HttpError; // true
notFound instanceof errors.ClientError; // true
notFound instanceof errors.ServerError; // false
notFound instanceof errors.NotFound; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const notFound = errors.HttpError('notfound');

notFound instanceof Error; // true
notFound instanceof errors.HttpError; // true
notFound instanceof errors.ClientError; // true
notFound instanceof errors.ServerError; // false
notFound instanceof errors.NotFound; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const notFound = errors.HttpError('not-found');

notFound instanceof Error; // true
notFound instanceof errors.HttpError; // true
notFound instanceof errors.ClientError; // true
notFound instanceof errors.ServerError; // false
notFound instanceof errors.NotFound; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const notFound = errors.HttpError('not_found');

notFound instanceof Error; // true
notFound instanceof errors.HttpError; // true
notFound instanceof errors.ClientError; // true
notFound instanceof errors.ServerError; // false
notFound instanceof errors.NotFound; // true
```

### `ClientError(name: number | string)`
**Added in:** v1.0.0

Factory method to get a ClientError class

**arguments:**
1. `name: number | string`

**returns:** ClientError

**throws:** TypeError

```javascript
const errors = require('@scuba-squad/http-error');
const notFound = errors.ClientError(404);

notFound instanceof Error; // true
notFound instanceof errors.HttpError; // true
notFound instanceof errors.ClientError; // true
notFound instanceof errors.ServerError; // false
notFound instanceof errors.NotFound; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const notFound = errors.ClientError('Not found');

notFound instanceof Error; // true
notFound instanceof errors.HttpError; // true
notFound instanceof errors.ClientError; // true
notFound instanceof errors.ServerError; // false
notFound instanceof errors.NotFound; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const notFound = errors.ClientError('notfound');

notFound instanceof Error; // true
notFound instanceof errors.HttpError; // true
notFound instanceof errors.ClientError; // true
notFound instanceof errors.ServerError; // false
notFound instanceof errors.NotFound; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const notFound = errors.ClientError('not-found');

notFound instanceof Error; // true
notFound instanceof errors.HttpError; // true
notFound instanceof errors.ClientError; // true
notFound instanceof errors.ServerError; // false
notFound instanceof errors.NotFound; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const notFound = errors.ClientError('not_found');

notFound instanceof Error; // true
notFound instanceof errors.HttpError; // true
notFound instanceof errors.ClientError; // true
notFound instanceof errors.ServerError; // false
notFound instanceof errors.NotFound; // true
```

### `ServerError(name: number | string)`
**Added in:** v1.0.0

Factory method to get a ServerError class

**arguments:**
1. `name: number | string`

**returns:** ServerError

**throws:** TypeError

```javascript
const errors = require('@scuba-squad/http-error');
const internalServerError = errors.ServerError(500);

internalServerError instanceof Error; // true
internalServerError instanceof errors.HttpError; // true
internalServerError instanceof errors.ClientError; // false
internalServerError instanceof errors.ServerError; // true
internalServerError instanceof errors.InternalServerError; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const internalServerError = errors.ServerError('Internal Server Error');

internalServerError instanceof Error; // true
internalServerError instanceof errors.HttpError; // true
internalServerError instanceof errors.ClientError; // false
internalServerError instanceof errors.ServerError; // true
internalServerError instanceof errors.InternalServerError; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const internalServerError = errors.ServerError('internalservererror');

internalServerError instanceof Error; // true
internalServerError instanceof errors.HttpError; // true
internalServerError instanceof errors.ClientError; // false
internalServerError instanceof errors.ServerError; // true
internalServerError instanceof errors.InternalServerError; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const internalServerError = errors.ServerError('internal-server-error');

internalServerError instanceof Error; // true
internalServerError instanceof errors.HttpError; // true
internalServerError instanceof errors.ClientError; // false
internalServerError instanceof errors.ServerError; // true
internalServerError instanceof errors.InternalServerError; // true
```

```javascript
const errors = require('@scuba-squad/http-error');
const internalServerError = errors.ServerError('internal_server_error');

internalServerError instanceof Error; // true
internalServerError instanceof errors.HttpError; // true
internalServerError instanceof errors.ClientError; // false
internalServerError instanceof errors.ServerError; // true
internalServerError instanceof errors.InternalServerError; // true
```

### `BadRequest(opt?: {message?: string = 'Please, correct your request and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

BadRequest class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Please, correct your request and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {BadRequest} = require('@scuba-squad/http-errors');
const error = new BadRequest();

error instanceof BadRequest; // true
error.code; // 400
error.status; // Bad Request
error.message; // Please, correct your request and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {BadRequest} = require('@scuba-squad/http-errors');
const error = BadRequest();

error instanceof BadRequest; // true
error.code; // 400
error.status; // Bad Request
error.message; // Please, correct your request and try again.
```

### `Unauthorized(opt?: {message?: string = 'Please, authenticate and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

Unauthorized class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Please, authenticate and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {Unauthorized} = require('@scuba-squad/http-errors');
const error = new Unauthorized();

error instanceof Unauthorized; // true
error.code; // 401
error.status; // Unauthorized
error.message; // Please, authenticate and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {Unauthorized} = require('@scuba-squad/http-errors');
const error = Unauthorized();

error instanceof Unauthorized; // true
error.code; // 401
error.status; // Unauthorized
error.message; // Please, authenticate and try again.
```

### `PaymentRequired(opt?: {message?: string = 'Payment is required to use this service.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

PaymentRequired class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Payment is required to use this service.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {PaymentRequired} = require('@scuba-squad/http-errors');
const error = new PaymentRequired();

error instanceof PaymentRequired; // true
error.code; // 402
error.status; // Payment Required
error.message; // Payment is required to use this service.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {PaymentRequired} = require('@scuba-squad/http-errors');
const error = PaymentRequired();

error instanceof PaymentRequired; // true
error.code; // 402
error.status; // Payment Required
error.message; // Payment is required to use this service.
```

### `Forbidden(opt?: {message?: string = 'You lack permission to preform this action.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

Forbidden class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'You lack permission to preform this action.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {Forbidden} = require('@scuba-squad/http-errors');
const error = new Forbidden();

error instanceof Forbidden; // true
error.code; // 403
error.status; // Forbidden
error.message; // You lack permission to preform this action.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {Forbidden} = require('@scuba-squad/http-errors');
const error = Forbidden();

error instanceof Forbidden; // true
error.code; // 403
error.status; // Forbidden
error.message; // You lack permission to preform this action.
```

### `NotFound(opt?: {message?: string = 'The requested document was not found.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

NotFound class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'The requested document was not found.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {NotFound} = require('@scuba-squad/http-errors');
const error = new NotFound();

error instanceof NotFound; // true
error.code; // 404
error.status; // Not Found
error.message; // The requested document was not found.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {NotFound} = require('@scuba-squad/http-errors');
const error = NotFound();

error instanceof NotFound; // true
error.code; // 404
error.status; // Not Found
error.message; // The requested document was not found.
```

### `MethodNotAllowed(opt?: {message?: string = 'Please, check your request method and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

MethodNotAllowed class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Please, check your request method and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {MethodNotAllowed} = require('@scuba-squad/http-errors');
const error = new MethodNotAllowed();

error instanceof MethodNotAllowed; // true
error.code; // 405
error.status; // Method Not Allowed
error.message; // Please, check your request method and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {MethodNotAllowed} = require('@scuba-squad/http-errors');
const error = MethodNotAllowed();

error instanceof MethodNotAllowed; // true
error.code; // 405
error.status; // Method Not Allowed
error.message; // Please, check your request method and try again.
```

### `NotAcceptable(opt?: {message?: string = 'The requested document format is not supported.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

NotAcceptable class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'The requested document format is not supported.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {NotAcceptable} = require('@scuba-squad/http-errors');
const error = new NotAcceptable();

error instanceof NotAcceptable; // true
error.code; // 406
error.status; // Not Acceptable
error.message; // The requested document format is not supported.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {NotAcceptable} = require('@scuba-squad/http-errors');
const error = NotAcceptable();

error instanceof NotAcceptable; // true
error.code; // 406
error.status; // Not Acceptable
error.message; // The requested document format is not supported.
```

### `ProxyAuthenticationRequired(opt?: {message?: string = 'Please, authenticate with the proxy server and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

ProxyAuthenticationRequired class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Please, authenticate with the proxy server and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {ProxyAuthenticationRequired} = require('@scuba-squad/http-errors');
const error = new ProxyAuthenticationRequired();

error instanceof ProxyAuthenticationRequired; // true
error.code; // 407
error.status; // Proxy Authentication Required
error.message; // Please, authenticate with the proxy server and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {ProxyAuthenticationRequired} = require('@scuba-squad/http-errors');
const error = ProxyAuthenticationRequired();

error instanceof ProxyAuthenticationRequired; // true
error.code; // 407
error.status; // Proxy Authentication Required
error.message; // Please, authenticate with the proxy server and try again.
```

### `RequestTimeout(opt?: {message?: string = 'Sorry, it appears we are on break, please try again later.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

RequestTimeout class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, it appears we are on break, please try again later.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {RequestTimeout} = require('@scuba-squad/http-errors');
const error = new RequestTimeout();

error instanceof RequestTimeout; // true
error.code; // 408
error.status; // Request Timeout
error.message; // Sorry, it appears we are on break, please try again later.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {RequestTimeout} = require('@scuba-squad/http-errors');
const error = RequestTimeout();

error instanceof RequestTimeout; // true
error.code; // 408
error.status; // Request Timeout
error.message; // Sorry, it appears we are on break, please try again later.
```

### `Conflict(opt?: {message?: string = 'Houston, we have a conflict, please reload the resource and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

Conflict class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Houston, we have a conflict, please reload the resource and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {Conflict} = require('@scuba-squad/http-errors');
const error = new Conflict();

error instanceof Conflict; // true
error.code; // 409
error.status; // Conflict
error.message; // Houston, we have a conflict, please reload the resource and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {Conflict} = require('@scuba-squad/http-errors');
const error = Conflict();

error instanceof Conflict; // true
error.code; // 409
error.status; // Conflict
error.message; // Houston, we have a conflict, please reload the resource and try again.
```

### `Gone(opt?: {message?: string = 'Sorry, but that resource has been removed.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

Gone class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, but that resource has been removed.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {Gone} = require('@scuba-squad/http-errors');
const error = new Gone();

error instanceof Gone; // true
error.code; // 410
error.status; // Gone
error.message; // Sorry, but that resource has been removed.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {Gone} = require('@scuba-squad/http-errors');
const error = Gone();

error instanceof Gone; // true
error.code; // 410
error.status; // Gone
error.message; // Sorry, but that resource has been removed.
```

### `LengthRequired(opt?: {message?: string = 'Please, correct the Length header and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

LengthRequired class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Please, correct the Length header and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {LengthRequired} = require('@scuba-squad/http-errors');
const error = new LengthRequired();

error instanceof LengthRequired; // true
error.code; // 411
error.status; // Length Required
error.message; // Please, correct the Length header and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {LengthRequired} = require('@scuba-squad/http-errors');
const error = LengthRequired();

error instanceof LengthRequired; // true
error.code; // 411
error.status; // Length Required
error.message; // Please, correct the Length header and try again.
```

### `PreconditionFailed(opt?: {message?: string = 'Sorry, it appears 1 or more preconditions on the request have changed, please correct and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

PreconditionFailed class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, it appears 1 or more preconditions on the request have changed, please correct and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {PreconditionFailed} = require('@scuba-squad/http-errors');
const error = new PreconditionFailed();

error instanceof PreconditionFailed; // true
error.code; // 412
error.status; // Precondition Failed
error.message; // Sorry, it appears 1 or more preconditions on the request have changed, please correct and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {PreconditionFailed} = require('@scuba-squad/http-errors');
const error = PreconditionFailed();

error instanceof PreconditionFailed; // true
error.code; // 412
error.status; // Precondition Failed
error.message; // Sorry, it appears 1 or more preconditions on the request have changed, please correct and try again.
```

### `PayloadTooLarge(opt?: {message?: string = 'Request payload is too large and can not be processed.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

PayloadTooLarge class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Request payload is too large and can not be processed.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {PayloadTooLarge} = require('@scuba-squad/http-errors');
const error = new PayloadTooLarge();

error instanceof PayloadTooLarge; // true
error.code; // 413
error.status; // Payload Too Large
error.message; // Request payload is too large and can not be processed.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {PayloadTooLarge} = require('@scuba-squad/http-errors');
const error = PayloadTooLarge();

error instanceof PayloadTooLarge; // true
error.code; // 413
error.status; // Payload Too Large
error.message; // Request payload is too large and can not be processed.
```

### `URITooLong(opt?: {message?: string = 'Request uri is too large and can not be processed.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

URITooLong class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Request uri is too large and can not be processed.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {URITooLong} = require('@scuba-squad/http-errors');
const error = new URITooLong();

error instanceof URITooLong; // true
error.code; // 414
error.status; // URI Too Long
error.message; // Request uri is too large and can not be processed.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {URITooLong} = require('@scuba-squad/http-errors');
const error = URITooLong();

error instanceof URITooLong; // true
error.code; // 414
error.status; // URI Too Long
error.message; // Request uri is too large and can not be processed.
```

### `UnsupportedMediaType(opt?: {message?: string = 'Please, try again with a different media format.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

UnsupportedMediaType class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Please, try again with a different media format.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {UnsupportedMediaType} = require('@scuba-squad/http-errors');
const error = new UnsupportedMediaType();

error instanceof UnsupportedMediaType; // true
error.code; // 415
error.status; // Unsupported Media Type
error.message; // Please, try again with a different media format.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {UnsupportedMediaType} = require('@scuba-squad/http-errors');
const error = UnsupportedMediaType();

error instanceof UnsupportedMediaType; // true
error.code; // 415
error.status; // Unsupported Media Type
error.message; // Please, try again with a different media format.
```

### `RangeNotSatisfiable(opt?: {message?: string = 'Requested range is not satisfiable, please check Range and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

RangeNotSatisfiable class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Requested range is not satisfiable, please check Range and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {RangeNotSatisfiable} = require('@scuba-squad/http-errors');
const error = new RangeNotSatisfiable();

error instanceof RangeNotSatisfiable; // true
error.code; // 416
error.status; // Range Not Satisfiable
error.message; // Requested range is not satisfiable, please check Range and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {RangeNotSatisfiable} = require('@scuba-squad/http-errors');
const error = RangeNotSatisfiable();

error instanceof RangeNotSatisfiable; // true
error.code; // 416
error.status; // Range Not Satisfiable
error.message; // Requested range is not satisfiable, please check Range and try again.
```

### `ExpectationFailed(opt?: {message?: string = 'Sorry, your expectation can not be meet, please check Expect and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

ExpectationFailed class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, your expectation can not be meet, please check Expect and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {ExpectationFailed} = require('@scuba-squad/http-errors');
const error = new ExpectationFailed();

error instanceof ExpectationFailed; // true
error.code; // 417
error.status; // Expectation Failed
error.message; // Sorry, your expectation can not be meet, please check Expect and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {ExpectationFailed} = require('@scuba-squad/http-errors');
const error = ExpectationFailed();

error instanceof ExpectationFailed; // true
error.code; // 417
error.status; // Expectation Failed
error.message; // Sorry, your expectation can not be meet, please check Expect and try again.
```

### `IMATeapot(opt?: {message?: string = 'Tip me over, and pour me out.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

IMATeapot class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Tip me over, and pour me out.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {IMATeapot} = require('@scuba-squad/http-errors');
const error = new IMATeapot();

error instanceof IMATeapot; // true
error.code; // 418
error.status; // I\'m a teapot
error.message; // Tip me over, and pour me out.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {IMATeapot} = require('@scuba-squad/http-errors');
const error = IMATeapot();

error instanceof IMATeapot; // true
error.code; // 418
error.status; // I\'m a teapot
error.message; // Tip me over, and pour me out.
```

### `MisdirectedRequest(opt?: {message?: string = 'Sorry, we got misdirected, please try again later.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

MisdirectedRequest class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, we got misdirected, please try again later.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {MisdirectedRequest} = require('@scuba-squad/http-errors');
const error = new MisdirectedRequest();

error instanceof MisdirectedRequest; // true
error.code; // 421
error.status; // Misdirected Request
error.message; // Sorry, we got misdirected, please try again later.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {MisdirectedRequest} = require('@scuba-squad/http-errors');
const error = MisdirectedRequest();

error instanceof MisdirectedRequest; // true
error.code; // 421
error.status; // Misdirected Request
error.message; // Sorry, we got misdirected, please try again later.
```

### `UnprocessableEntity(opt?: {message?: string = 'Sorry, it appears your document instructions are semantically erroneous.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

UnprocessableEntity class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, it appears your document instructions are semantically erroneous.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {UnprocessableEntity} = require('@scuba-squad/http-errors');
const error = new UnprocessableEntity();

error instanceof UnprocessableEntity; // true
error.code; // 422
error.status; // Unprocessable Entity
error.message; // Sorry, it appears your document instructions are semantically erroneous.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {UnprocessableEntity} = require('@scuba-squad/http-errors');
const error = UnprocessableEntity();

error instanceof UnprocessableEntity; // true
error.code; // 422
error.status; // Unprocessable Entity
error.message; // Sorry, it appears your document instructions are semantically erroneous.
```

### `Locked(opt?: {message?: string = 'Document is currently locked, please try again later.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

Locked class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Document is currently locked, please try again later.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {Locked} = require('@scuba-squad/http-errors');
const error = new Locked();

error instanceof Locked; // true
error.code; // 423
error.status; // Locked
error.message; // Document is currently locked, please try again later.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {Locked} = require('@scuba-squad/http-errors');
const error = Locked();

error instanceof Locked; // true
error.code; // 423
error.status; // Locked
error.message; // Document is currently locked, please try again later.
```

### `FailedDependency(opt?: {message?: string = 'Sorry, it appears a dependent request has failed please retry previous dependent request and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

FailedDependency class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, it appears a dependent request has failed please retry previous dependent request and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {FailedDependency} = require('@scuba-squad/http-errors');
const error = new FailedDependency();

error instanceof FailedDependency; // true
error.code; // 424
error.status; // Failed Dependency
error.message; // Sorry, it appears a dependent request has failed please retry previous dependent request and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {FailedDependency} = require('@scuba-squad/http-errors');
const error = FailedDependency();

error instanceof FailedDependency; // true
error.code; // 424
error.status; // Failed Dependency
error.message; // Sorry, it appears a dependent request has failed please retry previous dependent request and try again.
```

### `UpgradeRequired(opt?: {message?: string = 'Please, upgrade and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

UpgradeRequired class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Please, upgrade and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {UpgradeRequired} = require('@scuba-squad/http-errors');
const error = new UpgradeRequired();

error instanceof UpgradeRequired; // true
error.code; // 426
error.status; // Upgrade Required
error.message; // Please, upgrade and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {UpgradeRequired} = require('@scuba-squad/http-errors');
const error = UpgradeRequired();

error instanceof UpgradeRequired; // true
error.code; // 426
error.status; // Upgrade Required
error.message; // Please, upgrade and try again.
```

### `PreconditionRequired(opt?: {message?: string = 'Please, add preconditions to your request and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

PreconditionRequired class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Please, add preconditions to your request and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {PreconditionRequired} = require('@scuba-squad/http-errors');
const error = new PreconditionRequired();

error instanceof PreconditionRequired; // true
error.code; // 428
error.status; // Precondition Required
error.message; // Please, add preconditions to your request and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {PreconditionRequired} = require('@scuba-squad/http-errors');
const error = PreconditionRequired();

error instanceof PreconditionRequired; // true
error.code; // 428
error.status; // Precondition Required
error.message; // Please, add preconditions to your request and try again.
```

### `TooManyRequests(opt?: {message?: string = 'Sorry, you have exceeded your rate limit, please try again later.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

TooManyRequests class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, you have exceeded your rate limit, please try again later.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {TooManyRequests} = require('@scuba-squad/http-errors');
const error = new TooManyRequests();

error instanceof TooManyRequests; // true
error.code; // 429
error.status; // Too Many Requests
error.message; // Sorry, you have exceeded your rate limit, please try again later.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {TooManyRequests} = require('@scuba-squad/http-errors');
const error = TooManyRequests();

error instanceof TooManyRequests; // true
error.code; // 429
error.status; // Too Many Requests
error.message; // Sorry, you have exceeded your rate limit, please try again later.
```

### `RequestHeaderFieldsTooLarge(opt?: {message?: string = 'Request header is too large and can not be processed.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

RequestHeaderFieldsTooLarge class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Request header is too large and can not be processed.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {RequestHeaderFieldsTooLarge} = require('@scuba-squad/http-errors');
const error = new RequestHeaderFieldsTooLarge();

error instanceof RequestHeaderFieldsTooLarge; // true
error.code; // 431
error.status; // Request Header Fields Too Large
error.message; // Request header is too large and can not be processed.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {RequestHeaderFieldsTooLarge} = require('@scuba-squad/http-errors');
const error = RequestHeaderFieldsTooLarge();

error instanceof RequestHeaderFieldsTooLarge; // true
error.code; // 431
error.status; // Request Header Fields Too Large
error.message; // Request header is too large and can not be processed.
```

### `UnavailableForLegalReasons(opt?: {message?: string = 'Due to legal reasons this resource has been removed.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

UnavailableForLegalReasons class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Due to legal reasons this resource has been removed.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {UnavailableForLegalReasons} = require('@scuba-squad/http-errors');
const error = new UnavailableForLegalReasons();

error instanceof UnavailableForLegalReasons; // true
error.code; // 451
error.status; // Unavailable For Legal Reasons
error.message; // Due to legal reasons this resource has been removed.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {UnavailableForLegalReasons} = require('@scuba-squad/http-errors');
const error = UnavailableForLegalReasons();

error instanceof UnavailableForLegalReasons; // true
error.code; // 451
error.status; // Unavailable For Legal Reasons
error.message; // Due to legal reasons this resource has been removed.
```

### `InternalServerError(opt?: {message?: string = 'Sorry, it appears we had an unexpected error, please try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

InternalServerError class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, it appears we had an unexpected error, please try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {InternalServerError} = require('@scuba-squad/http-errors');
const error = new InternalServerError();

error instanceof InternalServerError; // true
error.code; // 500
error.status; // Internal Server Error
error.message; // Sorry, it appears we had an unexpected error, please try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {InternalServerError} = require('@scuba-squad/http-errors');
const error = InternalServerError();

error instanceof InternalServerError; // true
error.code; // 500
error.status; // Internal Server Error
error.message; // Sorry, it appears we had an unexpected error, please try again.
```

### `NotImplemented(opt?: {message?: string = 'Sorry, this is not fully implemented, please try later.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

NotImplemented class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, this is not fully implemented, please try later.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {NotImplemented} = require('@scuba-squad/http-errors');
const error = new NotImplemented();

error instanceof NotImplemented; // true
error.code; // 501
error.status; // Not Implemented
error.message; // Sorry, this is not fully implemented, please try later.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {NotImplemented} = require('@scuba-squad/http-errors');
const error = NotImplemented();

error instanceof NotImplemented; // true
error.code; // 501
error.status; // Not Implemented
error.message; // Sorry, this is not fully implemented, please try later.
```

### `BadGateway(opt?: {message?: string = 'Sorry, It appears we received an error from another service that is needed to fulfill your request, please try again later.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

BadGateway class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, It appears we received an error from another service that is needed to fulfill your request, please try again later.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {BadGateway} = require('@scuba-squad/http-errors');
const error = new BadGateway();

error instanceof BadGateway; // true
error.code; // 502
error.status; // Bad Gateway
error.message; // Sorry, It appears we received an error from another service that is needed to fulfill your request, please try again later.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {BadGateway} = require('@scuba-squad/http-errors');
const error = BadGateway();

error instanceof BadGateway; // true
error.code; // 502
error.status; // Bad Gateway
error.message; // Sorry, It appears we received an error from another service that is needed to fulfill your request, please try again later.
```

### `ServiceUnavailable(opt?: {message?: string = 'Sorry, this service is currently unavailable, please try later.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

ServiceUnavailable class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, this service is currently unavailable, please try later.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {ServiceUnavailable} = require('@scuba-squad/http-errors');
const error = new ServiceUnavailable();

error instanceof ServiceUnavailable; // true
error.code; // 503
error.status; // Service Unavailable
error.message; // Sorry, this service is currently unavailable, please try later.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {ServiceUnavailable} = require('@scuba-squad/http-errors');
const error = ServiceUnavailable();

error instanceof ServiceUnavailable; // true
error.code; // 503
error.status; // Service Unavailable
error.message; // Sorry, this service is currently unavailable, please try later.
```

### `GatewayTimeout(opt?: {message?: string = 'Sorry, it appears another service is taking to long and we cannot wait any longer.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

GatewayTimeout class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, it appears another service is taking to long and we cannot wait any longer.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {GatewayTimeout} = require('@scuba-squad/http-errors');
const error = new GatewayTimeout();

error instanceof GatewayTimeout; // true
error.code; // 504
error.status; // Gateway Timeout
error.message; // Sorry, it appears another service is taking to long and we cannot wait any longer.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {GatewayTimeout} = require('@scuba-squad/http-errors');
const error = GatewayTimeout();

error instanceof GatewayTimeout; // true
error.code; // 504
error.status; // Gateway Timeout
error.message; // Sorry, it appears another service is taking to long and we cannot wait any longer.
```

### `HTTPVersionNotSupported(opt?: {message?: string = 'Please, try a diffrent protocol version and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

HTTPVersionNotSupported class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Please, try a diffrent protocol version and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {HTTPVersionNotSupported} = require('@scuba-squad/http-errors');
const error = new HTTPVersionNotSupported();

error instanceof HTTPVersionNotSupported; // true
error.code; // 505
error.status; // HTTP Version Not Supported
error.message; // Please, try a diffrent protocol version and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {HTTPVersionNotSupported} = require('@scuba-squad/http-errors');
const error = HTTPVersionNotSupported();

error instanceof HTTPVersionNotSupported; // true
error.code; // 505
error.status; // HTTP Version Not Supported
error.message; // Please, try a diffrent protocol version and try again.
```

### `VariantAlsoNegotiates(opt?: {message?: string = 'Sorry, it appears there is a misconfiguration on our end.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

VariantAlsoNegotiates class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, it appears there is a misconfiguration on our end.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {VariantAlsoNegotiates} = require('@scuba-squad/http-errors');
const error = new VariantAlsoNegotiates();

error instanceof VariantAlsoNegotiates; // true
error.code; // 506
error.status; // Variant Also Negotiates
error.message; // Sorry, it appears there is a misconfiguration on our end.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {VariantAlsoNegotiates} = require('@scuba-squad/http-errors');
const error = VariantAlsoNegotiates();

error instanceof VariantAlsoNegotiates; // true
error.code; // 506
error.status; // Variant Also Negotiates
error.message; // Sorry, it appears there is a misconfiguration on our end.
```

### `InsufficientStorage(opt?: {message?: string = 'Sorry, it appears we have no more room for storage.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

InsufficientStorage class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, it appears we have no more room for storage.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {InsufficientStorage} = require('@scuba-squad/http-errors');
const error = new InsufficientStorage();

error instanceof InsufficientStorage; // true
error.code; // 507
error.status; // Insufficient Storage
error.message; // Sorry, it appears we have no more room for storage.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {InsufficientStorage} = require('@scuba-squad/http-errors');
const error = InsufficientStorage();

error instanceof InsufficientStorage; // true
error.code; // 507
error.status; // Insufficient Storage
error.message; // Sorry, it appears we have no more room for storage.
```

### `LoopDetected(opt?: {message?: string = 'Sorry, We have detected an infintie loop and had to stop the request, please try again later.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

LoopDetected class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, We have detected an infintie loop and had to stop the request, please try again later.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {LoopDetected} = require('@scuba-squad/http-errors');
const error = new LoopDetected();

error instanceof LoopDetected; // true
error.code; // 508
error.status; // Loop Detected
error.message; // Sorry, We have detected an infintie loop and had to stop the request, please try again later.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {LoopDetected} = require('@scuba-squad/http-errors');
const error = LoopDetected();

error instanceof LoopDetected; // true
error.code; // 508
error.status; // Loop Detected
error.message; // Sorry, We have detected an infintie loop and had to stop the request, please try again later.
```

### `NotExtended(opt?: {message?: string = 'The policy for accessing this resource has not been met by this request.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

NotExtended class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'The policy for accessing this resource has not been met by this request.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {NotExtended} = require('@scuba-squad/http-errors');
const error = new NotExtended();

error instanceof NotExtended; // true
error.code; // 510
error.status; // Not Extended
error.message; // The policy for accessing this resource has not been met by this request.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {NotExtended} = require('@scuba-squad/http-errors');
const error = NotExtended();

error instanceof NotExtended; // true
error.code; // 510
error.status; // Not Extended
error.message; // The policy for accessing this resource has not been met by this request.
```

### `NetworkAuthenticationRequired(opt?: {message?: string = 'Please, authenticate with the network and try again.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

NetworkAuthenticationRequired class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Please, authenticate with the network and try again.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {NetworkAuthenticationRequired} = require('@scuba-squad/http-errors');
const error = new NetworkAuthenticationRequired();

error instanceof NetworkAuthenticationRequired; // true
error.code; // 511
error.status; // Network Authentication Required
error.message; // Please, authenticate with the network and try again.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {NetworkAuthenticationRequired} = require('@scuba-squad/http-errors');
const error = NetworkAuthenticationRequired();

error instanceof NetworkAuthenticationRequired; // true
error.code; // 511
error.status; // Network Authentication Required
error.message; // Please, authenticate with the network and try again.
```

### `UnknownError(opt?: {message?: string = 'Sorry, an unexpected error has occured, please try again later.', debug?: any, cause?: any} = {})`
**Added in:** v1.0.0

UnknownError class constructor

**arguments:**
1. `opt: object = {}`
  - `message?: string = 'Sorry, an unexpected error has occured, please try again later.'`
  - `debug?: any`
  - `cause?: any`

**returns:** BadRequest

```javascript
const {UnknownError} = require('@scuba-squad/http-errors');
const error = new UnknownError();

error instanceof UnknownError; // true
error.code; // 520
error.status; // Unknown Error
error.message; // Sorry, an unexpected error has occured, please try again later.
```

alternatively
* you can create an instance without the new keyword

```javascript
const {UnknownError} = require('@scuba-squad/http-errors');
const error = UnknownError();

error instanceof UnknownError; // true
error.code; // 520
error.status; // Unknown Error
error.message; // Sorry, an unexpected error has occured, please try again later.
```

<a name="test"></a>
## Test
[tests](TEST.md)
```bash
npm install
npm test
```

<a name="license"></a>
## License
[MIT](LICENSE)