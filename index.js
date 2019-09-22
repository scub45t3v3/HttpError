'use strict';

// Client Errors Errors
module.exports.BadRequest = require('./BadRequest');
module.exports.Unauthorized = require('./Unauthorized');
module.exports.PaymentRequired = require('./PaymentRequired');
module.exports.Forbidden = require('./Forbidden');
module.exports.NotFound = require('./NotFound');
module.exports.MethodNotAllowed = require('./MethodNotAllowed');
module.exports.NotAcceptable = require('./NotAcceptable');
module.exports.ProxyAuthenticationRequired = require('./ProxyAuthenticationRequired');
module.exports.RequestTimeout = require('./RequestTimeout');
module.exports.Conflict = require('./Conflict');
module.exports.Gone = require('./Gone');
module.exports.LengthRequired = require('./LengthRequired');
module.exports.PreconditionFailed = require('./PreconditionFailed');
module.exports.PayloadTooLarge = require('./PayloadTooLarge');
module.exports.URITooLong = require('./URITooLong');
module.exports.UnsupportedMediaType = require('./UnsupportedMediaType');
module.exports.RangeNotSatisfiable = require('./RangeNotSatisfiable');
module.exports.ExpectationFailed = require('./ExpectationFailed');
module.exports.IMATeapot = require('./IMATeapot');
module.exports.MisdirectedRequest = require('./MisdirectedRequest');
module.exports.UnprocessableEntity = require('./UnprocessableEntity');
module.exports.Locked = require('./Locked');
module.exports.FailedDependency = require('./FailedDependency');
module.exports.UpgradeRequired = require('./UpgradeRequired');
module.exports.PreconditionRequired = require('./PreconditionRequired');
module.exports.TooManyRequests = require('./TooManyRequests');
module.exports.RequestHeaderFieldsTooLarge = require('./RequestHeaderFieldsTooLarge');
module.exports.UnavailableForLegalReasons = require('./UnavailableForLegalReasons');

// Server Errors Classes
module.exports.InternalServerError = require('./InternalServerError');
module.exports.NotImplemented = require('./NotImplemented');
module.exports.BadGateway = require('./BadGateway');
module.exports.ServiceUnavailable = require('./ServiceUnavailable');
module.exports.GatewayTimeout = require('./GatewayTimeout');
module.exports.HTTPVersionNotSupported = require('./HTTPVersionNotSupported');
module.exports.VariantAlsoNegotiates = require('./VariantAlsoNegotiates');
module.exports.InsufficientStorage = require('./InsufficientStorage');
module.exports.LoopDetected = require('./LoopDetected');
module.exports.NotExtended = require('./NotExtended');
module.exports.NetworkAuthenticationRequired = require('./NetworkAuthenticationRequired');
module.exports.UnknownError = require('./UnknownError');

// Factories
module.exports.HttpError = require('./HttpError');
module.exports.ClientError = require('./ClientError');
module.exports.ServerError = require('./ServerError');