/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

// TODO: including these in blob-util.ts causes typedoc to generate docs for them,
/**
 * Convert a `Blob` to a binary string.
 *
 * Example:
 *
 * ```js
 * blobUtil.blobToBinaryString(blob).then(function (binaryString) {
 *   // success
 * }).catch(function (err) {
 *   // error
 * });
 * ```
 *
 * @param blob
 * @returns Promise that resolves with the binary string
 */
function blobToBinaryString(blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        var hasBinaryString = typeof reader.readAsBinaryString === 'function';
        reader.onloadend = function () {
            var result = reader.result || '';
            if (hasBinaryString) {
                return resolve(result);
            }
            resolve(arrayBufferToBinaryString(result));
        };
        reader.onerror = reject;
        if (hasBinaryString) {
            reader.readAsBinaryString(blob);
        }
        else {
            reader.readAsArrayBuffer(blob);
        }
    });
}
/**
 * Convert a `Blob` to a binary string.
 *
 * Example:
 *
 * ```js
 * blobUtil.blobToBase64String(blob).then(function (base64String) {
 *   // success
 * }).catch(function (err) {
 *   // error
 * });
 * ```
 *
 * @param blob
 * @returns Promise that resolves with the binary string
 */
function blobToBase64String(blob) {
    return blobToBinaryString(blob).then(btoa);
}
/**
 * Convert an `ArrayBuffer` to a binary string.
 *
 * Example:
 *
 * ```js
 * var myString = blobUtil.arrayBufferToBinaryString(arrayBuff)
 * ```
 *
 * @param buffer - array buffer
 * @returns binary string
 */
function arrayBufferToBinaryString(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var length = bytes.byteLength;
    var i = -1;
    while (++i < length) {
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var isFunction_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;

});

unwrapExports(isFunction_1);
var isFunction_2 = isFunction_1.isFunction;

var config = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};

});

unwrapExports(config);
var config_1 = config.config;

var hostReportError_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
exports.hostReportError = hostReportError;

});

unwrapExports(hostReportError_1);
var hostReportError_2 = hostReportError_1.hostReportError;

var Observer = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};

});

unwrapExports(Observer);
var Observer_1 = Observer.empty;

var isArray = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });

});

unwrapExports(isArray);
var isArray_1 = isArray.isArray;

var isObject_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;

});

unwrapExports(isObject_1);
var isObject_2 = isObject_1.isObject;

var errorObject = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorObject = { e: {} };

});

unwrapExports(errorObject);
var errorObject_1 = errorObject.errorObject;

var tryCatch_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject.errorObject.e = e;
        return errorObject.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;

});

unwrapExports(tryCatch_1);
var tryCatch_2 = tryCatch_1.tryCatch;

var UnsubscriptionError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;

});

unwrapExports(UnsubscriptionError);
var UnsubscriptionError_1 = UnsubscriptionError.UnsubscriptionError;

var Subscription_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });






var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject.errorObject.e instanceof UnsubscriptionError.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject.errorObject.e.errors) : [errorObject.errorObject.e]);
            }
        }
        if (isArray.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject.errorObject.e;
                        if (err instanceof UnsubscriptionError.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function') {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            this._parent = parent;
        }
        else if (!_parents) {
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError.UnsubscriptionError) ? err.errors : err); }, []);
}

});

unwrapExports(Subscription_1);
var Subscription_2 = Subscription_1.Subscription;

var rxSubscriber = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function')
    ? Symbol.for('rxSubscriber')
    : '@@rxSubscriber';
exports.$$rxSubscriber = exports.rxSubscriber;

});

unwrapExports(rxSubscriber);
var rxSubscriber_1 = rxSubscriber.rxSubscriber;
var rxSubscriber_2 = rxSubscriber.$$rxSubscriber;

var Subscriber_1 = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });






var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        _this._parentSubscription = null;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (isTrustedSubscriber(destinationOrNext)) {
                        var trustedSubscriber = destinationOrNext[rxSubscriber.rxSubscriber]();
                        _this.syncErrorThrowable = trustedSubscriber.syncErrorThrowable;
                        _this.destination = trustedSubscriber;
                        trustedSubscriber._addParentTeardownLogic(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
            this._unsubscribeParentSubscription();
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
            this._unsubscribeParentSubscription();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._addParentTeardownLogic = function (parentTeardownLogic) {
        if (parentTeardownLogic !== this) {
            this._parentSubscription = this.add(parentTeardownLogic);
        }
    };
    Subscriber.prototype._unsubscribeParentSubscription = function () {
        if (this._parentSubscription !== null) {
            this._parentSubscription.unsubscribe();
        }
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        this._parentSubscription = null;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
function isTrustedSubscriber(obj) {
    return obj instanceof Subscriber || ('_addParentTeardownLogic' in obj && obj[rxSubscriber.rxSubscriber]);
}

});

unwrapExports(Subscriber_1);
var Subscriber_2 = Subscriber_1.Subscriber;
var Subscriber_3 = Subscriber_1.SafeSubscriber;

var toSubscriber_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber.rxSubscriber]) {
            return nextOrObserver[rxSubscriber.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;

});

unwrapExports(toSubscriber_1);
var toSubscriber_2 = toSubscriber_1.toSubscriber;

var observable = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';

});

unwrapExports(observable);
var observable_1 = observable.observable;

var noop_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;

});

unwrapExports(noop_1);
var noop_2 = noop_1.noop;

var pipe_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;

});

unwrapExports(pipe_1);
var pipe_2 = pipe_1.pipe;
var pipe_3 = pipe_1.pipeFromArray;

var Observable_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable$$1 = new Observable();
        observable$$1.source = this;
        observable$$1.operator = operator;
        return observable$$1;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink._addParentTeardownLogic(this.source || (config.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}

});

unwrapExports(Observable_1);
console.log(Observable_1.Observable);
var Observable_2 = Observable_1.Observable;

/**
 * Library status codes
 */
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["Ok"] = "OK";
    StatusCodes["ResultIsNotValidJSON"] = "RESULT_IS_NOT_VALID_JSON";
    StatusCodes["TimedOut"] = "CONNECTION_TIMED_OUT";
})(StatusCodes || (StatusCodes = {}));
var ScanExchangerCodes;
(function (ScanExchangerCodes) {
    ScanExchangerCodes["Step01_RemoteCameraIsRequested"] = "STEP_1_REMOTE_CAMERA_IS_REQUESTED";
    ScanExchangerCodes["Step02_ExchangeLinkIsGenerated"] = "STEP_2_EXCHANGE_LINK_IS_GENERATED";
    ScanExchangerCodes["Step03_RemoteCameraIsPending"] = "STEP_3_REMOTE_CAMERA_IS_PENDING";
    ScanExchangerCodes["Step04_RemoteCameraIsOpen"] = "STEP_4_REMOTE_CAMERA_IS_OPEN";
    ScanExchangerCodes["Step05_ImageIsUploading"] = "STEP_5_IMAGE_IS_UPLOADING";
    ScanExchangerCodes["Step06_ImageIsProcessing"] = "STEP_6_IMAGE_IS_PROCESSING";
    ScanExchangerCodes["Step07_ResultIsAvailable"] = "STEP_7_RESULT_IS_AVAILABLE";
    ScanExchangerCodes["ErrorHappened"] = "ERROR_HAPPENED";
})(ScanExchangerCodes || (ScanExchangerCodes = {}));

var DEFAULT_ENDPOINT = 'https://api.honchomarkets.com/dev-lookups/document';

/**
 * HTTP layer with Microblink API
 */
var MicroblinkApi = /** @class */ (function () {
    function MicroblinkApi() {
        this.authorizationHeader = '';
        this.isExportImagesEnabled = false;
        this.activeRequests = [];
        this.userId = '';
        this.isDataPersistingEnabled = true;
        this.endpoint = DEFAULT_ENDPOINT;
    }
    /**
     * Terminate request session with aborting all pending responses
     */
    MicroblinkApi.prototype.TerminateAll = function () {
        this.activeRequests.forEach(function (activeRequest) {
            activeRequest.abort();
        });
        // Clear array of all active requests when every request is terminated (aborted)
        this.activeRequests = [];
    };
    /**
     * Change authorization header value
     */
    MicroblinkApi.prototype.SetAuthorization = function (authorizationHeader) {
        this.authorizationHeader = authorizationHeader;
    };
    /**
     * Change export images flag for next request
     * @param isExportImagesEnabled is flag which describes does API should return extracted images in next response
     */
    MicroblinkApi.prototype.SetExportImages = function (isExportImagesEnabled) {
        this.isExportImagesEnabled = isExportImagesEnabled;
    };
    /**
     * Change API endpoint
     * @param endpoint is API endpoint where Microblink API or Microblink API proxy is available
     */
    MicroblinkApi.prototype.SetEndpoint = function (endpoint) {
        this.endpoint = endpoint;
    };
    /**
     * Set user identificator which will be stored with uploaded image
     * @param userId is any string which unique identifies user who use SDK and upload any image to API
     */
    MicroblinkApi.prototype.SetUserId = function (userId) {
        this.userId = userId;
    };
    /**
     * When Authorization is not set it is available to disable persiting of uploaded data, by default it is enabled
     * this should be disabled for every page where GDPR is not implemented and this is ability to disable data persisting
     * on some demo pages
     * @param isEnabled is flag which describes should or should not API persist uploaded data, be default it is enabled
     */
    MicroblinkApi.prototype.SetIsDataPersistingEnabled = function (isEnabled) {
        this.isDataPersistingEnabled = isEnabled;
    };
    /**
     * Execute remote recognition
     * @param recognizers is string or array of strings on which image will be processed
     * @param imageBase64 is Base64 encoded image which should contain document for processing
     * @param uploadProgress (optional) is XHR event listener for image upload to show upload progress bar on UI
     */
    MicroblinkApi.prototype.Recognize = function (recognizers, imageBase64, uploadProgress) {
        var _this = this;
        console.log(Observable_2,'Observable_2');
        return Observable_2.create(function (observer) {
            // Image should be as Base64 encoded file
            var body = {
                imageBase64: imageBase64
            };
            // Recognizers could be one defined as string or multiple defined as string array
            if (typeof recognizers === 'string') {
                body['recognizer'] = recognizers;
            }
            else {
                body['recognizers'] = recognizers;
            }
            // Export images flag set if it is enabled
            if (_this.isExportImagesEnabled) {
                body['exportImages'] = true;
            }
            // Set userId if it is defined
            if (_this.userId) {
                body['userId'] = _this.userId;
            }
            // If it is set to FALSE then set disable data persisting flag
            if (_this.isDataPersistingEnabled === false) {
                body['disableDataPersisting'] = true;
            }
            // Body data should be send as stringified JSON and as Content-type=application/json
            var data = JSON.stringify(body);
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            if (uploadProgress) {
                // FIX: timeout should not be set, because some client can have really slow uplink
                // set timeout for file uploading
                xhr.timeout = 40000;
            }
            xhr.open('POST', _this.endpoint + '/recognize/execute');
            xhr.setRequestHeader('Content-Type', 'application/json');
            // When Authorization header is not set results will be masked on server-side
            if (_this.isAuthorizationHeaderValid) {
                xhr.setRequestHeader('Authorization', _this.authorizationHeader);
            }
            xhr.addEventListener('readystatechange', function () {
              console.log(this.readyState);
                if (this.readyState === 4) {
                    var responseBody = null;
                    try {
                        // Return result as parsed JSON object
                        responseBody = JSON.parse(this.responseText);
                        // OCR result will be available ony on status 200 OK, otherwise some problem is with backend or api key
                        if (this.status === 200) {
                            observer.next(responseBody);
                            observer.complete();
                        }
                        else {
                            observer.error(responseBody);
                        }
                    }
                    catch (err) {
                        if (uploadProgress && this.status === 0) {
                            responseBody = {
                                code: StatusCodes.TimedOut,
                                message: 'Connection timed out. Please try again.'
                            };
                        }
                        else {
                            responseBody = {
                                error: 'Result is not valid JSON',
                                code: StatusCodes.ResultIsNotValidJSON,
                                responseText: this.responseText
                            };
                        }
                        observer.error(responseBody);
                    }
                }
            });
            xhr.onerror = function (error) {
                observer.error(error);
            };
            if (uploadProgress) {
                xhr.upload.addEventListener('progress', uploadProgress, false);
                xhr.upload.addEventListener('load', uploadProgress, false);
            }
            xhr.send(data);
            // append the request to active stack
            _this.activeRequests.push(xhr);
        });
    };
    Object.defineProperty(MicroblinkApi.prototype, "isAuthorizationHeaderValid", {
        /**
         * Authorization header offline validator, just check for Authorization header format before sending it to the API
         */
        get: function () {
            if (this.authorizationHeader.startsWith('Bearer ') ||
                this.authorizationHeader.startsWith('bearer ') ||
                this.authorizationHeader.startsWith('Basic ') ||
                this.authorizationHeader.startsWith('basic ')) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return MicroblinkApi;
}());

/**
 * Helper for get detailed information from the frame of the image as RAW pixels array, with defined width and height
 */
var FrameHelper = /** @class */ (function () {
    function FrameHelper() {
    }
    /**
     * Get frame quality
     * @param pixelData is ImageData from `canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height)`
     */
    FrameHelper.getFrameQuality = function (pixelData) {
        return this.calculateFrameQuality(pixelData.data, pixelData.width, pixelData.height);
    };
    /**
     * Calculate frame quality
     * @param rgbaImgData is an RGB array (3n)=>RED, (3n+1)=>GREEN, (3n+2)=>BLUE, where n is pixel index in 2D grid
     * @param width is the frame horizontal dimension in pixels
     * @param height is the frame vertical dimension in pixels
     */
    FrameHelper.calculateFrameQuality = function (rgbaImgData, width, height) {
        var vertScanLineNum = 28;
        var horizScanLineNum = 20;
        var totalStrength = 0;
        var sampleNum = 0;
        for (var i = 0; i < vertScanLineNum; i++) {
            var distance = parseInt((width / (vertScanLineNum + 1)).toString(), 10);
            var col = parseInt((distance * i + distance / 2).toString(), 10);
            for (var row = 1; row < height - 1; row++) {
                var curPixel = this.getIntensity(rgbaImgData, row, col, width);
                var prevPixel = this.getIntensity(rgbaImgData, row - 1, col, width);
                var nextPixel = this.getIntensity(rgbaImgData, row + 1, col, width);
                var lastDiff = prevPixel - curPixel;
                var currDiff = curPixel - nextPixel;
                var secondDiff = currDiff - lastDiff;
                sampleNum += 1;
                totalStrength += secondDiff * secondDiff;
            }
        }
        for (var i = 0; i < horizScanLineNum; i++) {
            var distance = parseInt((height / (horizScanLineNum + 1)).toString(), 10);
            var row = parseInt((distance * i + distance / 2).toString(), 10);
            for (var col = 1; col < width - 1; col++) {
                var curPixel = this.getIntensity(rgbaImgData, row, col, width);
                var prevPixel = this.getIntensity(rgbaImgData, row, col - 1, width);
                var nextPixel = this.getIntensity(rgbaImgData, row, col + 1, width);
                var lastDiff = prevPixel - curPixel;
                var currDiff = curPixel - nextPixel;
                var secondDiff = currDiff - lastDiff;
                sampleNum += 1;
                totalStrength += secondDiff * secondDiff;
            }
        }
        var res = totalStrength / sampleNum;
        var qratio = parseFloat((width * height).toString()) / (640.0 * 480.0);
        if (qratio > 1.0) {
            if (qratio > 10.0)
                qratio = 10.0;
            res /= qratio;
        }
        else {
            res *= qratio;
        }
        return res;
    };
    /**
     * Get pixel intensity
     * @param rgbaImgData is an RGB array (3n)=>RED, (3n+1)=>GREEN, (3n+2)=>BLUE, where n is pixel index in 2D grid
     * @param row is an row of the pixel in the frame
     * @param col is na column of the pixel in the frame
     * @param width is the frame horizontal dimension in pixels
     */
    FrameHelper.getIntensity = function (rgbaImgData, row, col, width) {
        var baseIdx = (row * width + col) * 4;
        var r = rgbaImgData[baseIdx];
        var g = rgbaImgData[baseIdx + 1];
        var b = rgbaImgData[baseIdx + 2];
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    return FrameHelper;
}());

var FIRESTORE_COLLECTION_ID = 'scans';
// This should be in try/catch block because firebase could not be configured
// this is helper only for optional feature "Desktop to mobile"
try {
    // NOTE: avoid use of shortcut `firestore` instead of `firebase.firestore()` beacause this produce error in
    // Codepen and jsFiddle environment!
    var settings = { timestampsInSnapshots: true };
    firebase.firestore().settings(settings);
}
catch (e) {
    /* tslint:disable:no-empty */
}
var ScanExchangeHelper = /** @class */ (function () {
    function ScanExchangeHelper() {
    }
    /**
     * Create Firestore object for scan data exchanging
     * @param data is optional object with data which will be added to the created Firestore object
     */
    ScanExchangeHelper.createScanExchanger = function (data) {
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var scan;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scan = firebase
                            .firestore()
                            .collection(FIRESTORE_COLLECTION_ID)
                            .doc();
                        // Define default status STEP_01...
                        data.status = ScanExchangerCodes.Step01_RemoteCameraIsRequested;
                        // For easier scanId fetching append it to the document
                        data.scanId = scan.id;
                        // Wait until data is set
                        return [4 /*yield*/, scan.set(data)
                            // Return promise
                        ];
                    case 1:
                        // Wait until data is set
                        _a.sent();
                        // Return promise
                        return [2 /*return*/, scan];
                }
            });
        });
    };
    /**
     * Generate QR code as base64 image for specific URL
     * @param url is string
     */
    ScanExchangeHelper.generateQRCode = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var qrCodeAsBase64, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qrCodeAsBase64 = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, QRCode.toDataURL(url, {
                                errorCorrectionLevel: 'H',
                                type: 'image/png',
                                width: 1024,
                                margin: 4
                            })];
                    case 2:
                        qrCodeAsBase64 = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, qrCodeAsBase64];
                }
            });
        });
    };
    return ScanExchangeHelper;
}());

/**
 * @license crypto-ts
 * MIT license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Hex = /** @class */ (function () {
    function Hex() {
    }
    /**
     * Converts a word array to a hex string.
     *
     * \@example
     *
     *     let hexString = Hex.stringify(wordArray);
     * @param {?} wordArray The word array.
     *
     * @return {?} The hex string.
     *
     */
    Hex.stringify = /**
     * Converts a word array to a hex string.
     *
     * \@example
     *
     *     let hexString = Hex.stringify(wordArray);
     * @param {?} wordArray The word array.
     *
     * @return {?} The hex string.
     *
     */
    function (wordArray) {
        // Convert
        var /** @type {?} */ hexChars = [];
        for (var /** @type {?} */ i = 0; i < wordArray.sigBytes; i++) {
            var /** @type {?} */ bite = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            hexChars.push((bite >>> 4).toString(16));
            hexChars.push((bite & 0x0f).toString(16));
        }
        return hexChars.join('');
    };
    /**
     * Converts a hex string to a word array.
     *
     * \@example
     *
     *     let wordArray = Hex.parse(hexString);
     * @param {?} hexStr The hex string.
     *
     * @return {?} The word array.
     *
     */
    Hex.parse = /**
     * Converts a hex string to a word array.
     *
     * \@example
     *
     *     let wordArray = Hex.parse(hexString);
     * @param {?} hexStr The hex string.
     *
     * @return {?} The word array.
     *
     */
    function (hexStr) {
        // Shortcut
        var /** @type {?} */ hexStrLength = hexStr.length;
        // Convert
        var /** @type {?} */ words = [];
        for (var /** @type {?} */ i = 0; i < hexStrLength; i += 2) {
            words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
        }
        return new WordArray(words, hexStrLength / 2);
    };
    return Hex;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WordArray = /** @class */ (function () {
    /**
     * Initializes a newly created word array.
     *
     * @param words (Optional) An array of 32-bit words.
     * @param sigBytes (Optional) The number of significant bytes in the words.
     *
     * @example
     *
     *     let wordArray = new WordArray();
     *     let wordArray = new WordArray([0x00010203, 0x04050607]);
     *     let wordArray = new WordArray([0x00010203, 0x04050607], 6);
     */
    function WordArray(words, sigBytes) {
        this.words = words || [];
        if (sigBytes !== undefined) {
            this.sigBytes = sigBytes;
        }
        else {
            this.sigBytes = this.words.length * 4;
        }
    }
    /**
     * Creates a word array filled with random bytes.
     *
     * \@example
     *
     *     let wordArray = WordArray.random(16);
     * @param {?} nBytes The number of random bytes to generate.
     *
     * @return {?} The random word array.
     *
     */
    WordArray.random = /**
     * Creates a word array filled with random bytes.
     *
     * \@example
     *
     *     let wordArray = WordArray.random(16);
     * @param {?} nBytes The number of random bytes to generate.
     *
     * @return {?} The random word array.
     *
     */
    function (nBytes) {
        var /** @type {?} */ words = [];
        var /** @type {?} */ r = (function (m_w) {
            var /** @type {?} */ m_z = 0x3ade68b1;
            var /** @type {?} */ mask = 0xffffffff;
            return function () {
                m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
                m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
                var /** @type {?} */ result = ((m_z << 0x10) + m_w) & mask;
                result /= 0x100000000;
                result += 0.5;
                return result * (Math.random() > .5 ? 1 : -1);
            };
        });
        for (var /** @type {?} */ i = 0, /** @type {?} */ rcache = void 0; i < nBytes; i += 4) {
            var /** @type {?} */ _r = r((rcache || Math.random()) * 0x100000000);
            rcache = _r() * 0x3ade67b7;
            words.push((_r() * 0x100000000) | 0);
        }
        return new WordArray(words, nBytes);
    };
    /**
     * Converts this word array to a string.
     *
     * @param encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
     *
     * @return The stringified word array.
     *
     * @example
     *
     *     let string = wordArray + '';
     *     let string = wordArray.toString();
     *     let string = wordArray.toString(CryptoJS.enc.Utf8);
     */
    /**
     * Converts this word array to a string.
     *
     * \@example
     *
     *     let string = wordArray + '';
     *     let string = wordArray.toString();
     *     let string = wordArray.toString(CryptoJS.enc.Utf8);
     * @param {?=} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
     *
     * @return {?} The stringified word array.
     *
     */
    WordArray.prototype.toString = /**
     * Converts this word array to a string.
     *
     * \@example
     *
     *     let string = wordArray + '';
     *     let string = wordArray.toString();
     *     let string = wordArray.toString(CryptoJS.enc.Utf8);
     * @param {?=} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
     *
     * @return {?} The stringified word array.
     *
     */
    function (encoder) {
        return (encoder || Hex).stringify(this);
    };
    /**
     * Concatenates a word array to this word array.
     *
     * @param wordArray The word array to append.
     *
     * @return This word array.
     *
     * @example
     *
     *     wordArray1.concat(wordArray2);
     */
    /**
     * Concatenates a word array to this word array.
     *
     * \@example
     *
     *     wordArray1.concat(wordArray2);
     * @param {?} wordArray The word array to append.
     *
     * @return {?} This word array.
     *
     */
    WordArray.prototype.concat = /**
     * Concatenates a word array to this word array.
     *
     * \@example
     *
     *     wordArray1.concat(wordArray2);
     * @param {?} wordArray The word array to append.
     *
     * @return {?} This word array.
     *
     */
    function (wordArray) {
        // Clamp excess bits
        this.clamp();
        // Concat
        if (this.sigBytes % 4) {
            // Copy one byte at a time
            for (var /** @type {?} */ i = 0; i < wordArray.sigBytes; i++) {
                var /** @type {?} */ thatByte = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                this.words[(this.sigBytes + i) >>> 2] |= thatByte << (24 - ((this.sigBytes + i) % 4) * 8);
            }
        }
        else {
            // Copy one word at a time
            for (var /** @type {?} */ i = 0; i < wordArray.sigBytes; i += 4) {
                this.words[(this.sigBytes + i) >>> 2] = wordArray.words[i >>> 2];
            }
        }
        this.sigBytes += wordArray.sigBytes;
        // Chainable
        return this;
    };
    /**
     * Removes insignificant bits.
     *
     * @example
     *
     *     wordArray.clamp();
     */
    /**
     * Removes insignificant bits.
     *
     * \@example
     *
     *     wordArray.clamp();
     * @return {?}
     */
    WordArray.prototype.clamp = /**
     * Removes insignificant bits.
     *
     * \@example
     *
     *     wordArray.clamp();
     * @return {?}
     */
    function () {
        // Clamp
        this.words[this.sigBytes >>> 2] &= 0xffffffff << (32 - (this.sigBytes % 4) * 8);
        this.words.length = Math.ceil(this.sigBytes / 4);
    };
    /**
     * Creates a copy of this word array.
     *
     * @return The clone.
     *
     * @example
     *
     *     let clone = wordArray.clone();
     */
    /**
     * Creates a copy of this word array.
     *
     * \@example
     *
     *     let clone = wordArray.clone();
     * @return {?} The clone.
     *
     */
    WordArray.prototype.clone = /**
     * Creates a copy of this word array.
     *
     * \@example
     *
     *     let clone = wordArray.clone();
     * @return {?} The clone.
     *
     */
    function () {
        return new WordArray(this.words.slice(0), this.sigBytes);
    };
    return WordArray;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Latin1 = /** @class */ (function () {
    function Latin1() {
    }
    /**
     * Converts a word array to a Latin1 string.
     *
     * \@example
     *
     *     let latin1String = Latin1.stringify(wordArray);
     * @param {?} wordArray The word array.
     *
     * @return {?} The Latin1 string.
     *
     */
    Latin1.stringify = /**
     * Converts a word array to a Latin1 string.
     *
     * \@example
     *
     *     let latin1String = Latin1.stringify(wordArray);
     * @param {?} wordArray The word array.
     *
     * @return {?} The Latin1 string.
     *
     */
    function (wordArray) {
        // Convert
        var /** @type {?} */ latin1Chars = [];
        for (var /** @type {?} */ i = 0; i < wordArray.sigBytes; i++) {
            var /** @type {?} */ bite = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            latin1Chars.push(String.fromCharCode(bite));
        }
        return latin1Chars.join('');
    };
    /**
     * Converts a Latin1 string to a word array.
     *
     * \@example
     *
     *     let wordArray = Latin1.parse(latin1String);
     * @param {?} latin1Str The Latin1 string.
     *
     * @return {?} The word array.
     *
     */
    Latin1.parse = /**
     * Converts a Latin1 string to a word array.
     *
     * \@example
     *
     *     let wordArray = Latin1.parse(latin1String);
     * @param {?} latin1Str The Latin1 string.
     *
     * @return {?} The word array.
     *
     */
    function (latin1Str) {
        // Shortcut
        var /** @type {?} */ latin1StrLength = latin1Str.length;
        // Convert
        var /** @type {?} */ words = [];
        for (var /** @type {?} */ i = 0; i < latin1StrLength; i++) {
            words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
        }
        return new WordArray(words, latin1StrLength);
    };
    return Latin1;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Utf8 = /** @class */ (function () {
    function Utf8() {
    }
    /**
     * Converts a word array to a UTF-8 string.
     *
     * \@example
     *
     *     let utf8String = Utf8.stringify(wordArray);
     * @param {?} wordArray The word array.
     *
     * @return {?} The UTF-8 string.
     *
     */
    Utf8.stringify = /**
     * Converts a word array to a UTF-8 string.
     *
     * \@example
     *
     *     let utf8String = Utf8.stringify(wordArray);
     * @param {?} wordArray The word array.
     *
     * @return {?} The UTF-8 string.
     *
     */
    function (wordArray) {
        try {
            return decodeURIComponent(escape(Latin1.stringify(wordArray)));
        }
        catch (/** @type {?} */ e) {
            throw new Error('Malformed UTF-8 data');
        }
    };
    /**
     * Converts a UTF-8 string to a word array.
     *
     * \@example
     *
     *     let wordArray = Utf8.parse(utf8String);
     * @param {?} utf8Str The UTF-8 string.
     *
     * @return {?} The word array.
     *
     */
    Utf8.parse = /**
     * Converts a UTF-8 string to a word array.
     *
     * \@example
     *
     *     let wordArray = Utf8.parse(utf8String);
     * @param {?} utf8Str The UTF-8 string.
     *
     * @return {?} The word array.
     *
     */
    function (utf8Str) {
        return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
    };
    return Utf8;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
BufferedBlockAlgorithm = /** @class */ (function () {
    function BufferedBlockAlgorithm(cfg) {
        this._minBufferSize = 0;
        this.cfg = Object.assign({
            blockSize: 1
        }, cfg);
        // Initial values
        this._data = new WordArray();
        this._nDataBytes = 0;
    }
    /**
     * Resets this block algorithm's data buffer to its initial state.
     *
     * @example
     *
     *     bufferedBlockAlgorithm.reset();
     */
    /**
     * Resets this block algorithm's data buffer to its initial state.
     *
     * \@example
     *
     *     bufferedBlockAlgorithm.reset();
     * @return {?}
     */
    BufferedBlockAlgorithm.prototype.reset = /**
     * Resets this block algorithm's data buffer to its initial state.
     *
     * \@example
     *
     *     bufferedBlockAlgorithm.reset();
     * @return {?}
     */
    function () {
        // Initial values
        this._data = new WordArray();
        this._nDataBytes = 0;
    };
    /**
     * Adds new data to this block algorithm's buffer.
     *
     * @param data The data to append. Strings are converted to a WordArray using UTF-8.
     *
     * @example
     *
     *     bufferedBlockAlgorithm._append('data');
     *     bufferedBlockAlgorithm._append(wordArray);
     */
    /**
     * Adds new data to this block algorithm's buffer.
     *
     * \@example
     *
     *     bufferedBlockAlgorithm._append('data');
     *     bufferedBlockAlgorithm._append(wordArray);
     * @param {?} data The data to append. Strings are converted to a WordArray using UTF-8.
     *
     * @return {?}
     */
    BufferedBlockAlgorithm.prototype._append = /**
     * Adds new data to this block algorithm's buffer.
     *
     * \@example
     *
     *     bufferedBlockAlgorithm._append('data');
     *     bufferedBlockAlgorithm._append(wordArray);
     * @param {?} data The data to append. Strings are converted to a WordArray using UTF-8.
     *
     * @return {?}
     */
    function (data) {
        // Convert string to WordArray, else assume WordArray already
        if (typeof data === 'string') {
            data = Utf8.parse(data);
        }
        // Append
        this._data.concat(data);
        this._nDataBytes += data.sigBytes;
    };
    /**
     * Processes available data blocks.
     *
     * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
     *
     * @param doFlush Whether all blocks and partial blocks should be processed.
     *
     * @return The processed data.
     *
     * @example
     *
     *     let processedData = bufferedBlockAlgorithm._process();
     *     let processedData = bufferedBlockAlgorithm._process(!!'flush');
     */
    /**
     * Processes available data blocks.
     *
     * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
     *
     * \@example
     *
     *     let processedData = bufferedBlockAlgorithm._process();
     *     let processedData = bufferedBlockAlgorithm._process(!!'flush');
     * @param {?=} doFlush Whether all blocks and partial blocks should be processed.
     *
     * @return {?} The processed data.
     *
     */
    BufferedBlockAlgorithm.prototype._process = /**
     * Processes available data blocks.
     *
     * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
     *
     * \@example
     *
     *     let processedData = bufferedBlockAlgorithm._process();
     *     let processedData = bufferedBlockAlgorithm._process(!!'flush');
     * @param {?=} doFlush Whether all blocks and partial blocks should be processed.
     *
     * @return {?} The processed data.
     *
     */
    function (doFlush) {
        if (!this.cfg.blockSize) {
            throw new Error('missing blockSize in config');
        }
        // Shortcuts
        var /** @type {?} */ blockSizeBytes = this.cfg.blockSize * 4;
        // Count blocks ready
        var /** @type {?} */ nBlocksReady = this._data.sigBytes / blockSizeBytes;
        if (doFlush) {
            // Round up to include partial blocks
            nBlocksReady = Math.ceil(nBlocksReady);
        }
        else {
            // Round down to include only full blocks,
            // less the number of blocks that must remain in the buffer
            nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
        }
        // Count words ready
        var /** @type {?} */ nWordsReady = nBlocksReady * this.cfg.blockSize;
        // Count bytes ready
        var /** @type {?} */ nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
        // Process blocks
        var /** @type {?} */ processedWords;
        if (nWordsReady) {
            for (var /** @type {?} */ offset = 0; offset < nWordsReady; offset += this.cfg.blockSize) {
                // Perform concrete-algorithm logic
                this._doProcessBlock(this._data.words, offset);
            }
            // Remove processed words
            processedWords = this._data.words.splice(0, nWordsReady);
            this._data.sigBytes -= nBytesReady;
        }
        // Return processed words
        return new WordArray(processedWords, nBytesReady);
    };
    /**
     * Creates a copy of this object.
     *
     * @return The clone.
     *
     * @example
     *
     *     let clone = bufferedBlockAlgorithm.clone();
     */
    /**
     * Creates a copy of this object.
     *
     * \@example
     *
     *     let clone = bufferedBlockAlgorithm.clone();
     * @return {?} The clone.
     *
     */
    BufferedBlockAlgorithm.prototype.clone = /**
     * Creates a copy of this object.
     *
     * \@example
     *
     *     let clone = bufferedBlockAlgorithm.clone();
     * @return {?} The clone.
     *
     */
    function () {
        var /** @type {?} */ clone = this.constructor();
        for (var /** @type {?} */ attr in this) {
            if (this.hasOwnProperty(attr)) {
                clone[attr] = this[attr];
            }
        }
        clone._data = this._data.clone();
        return clone;
    };
    return BufferedBlockAlgorithm;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Base = /** @class */ (function () {
    function Base() {
    }
    return Base;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CipherParams = /** @class */ (function (_super) {
    __extends(CipherParams, _super);
    function CipherParams(cipherParams) {
        var _this = _super.call(this) || this;
        _this.ciphertext = cipherParams.ciphertext;
        _this.key = cipherParams.key;
        _this.iv = cipherParams.iv;
        _this.salt = cipherParams.salt;
        _this.algorithm = cipherParams.algorithm;
        _this.mode = cipherParams.mode;
        _this.padding = cipherParams.padding;
        _this.blockSize = cipherParams.blockSize;
        _this.formatter = cipherParams.formatter;
        return _this;
    }
    /**
     * @param {?} additionalParams
     * @return {?}
     */
    CipherParams.prototype.extend = /**
     * @param {?} additionalParams
     * @return {?}
     */
    function (additionalParams) {
        if (additionalParams.ciphertext !== undefined) {
            this.ciphertext = additionalParams.ciphertext;
        }
        if (additionalParams.key !== undefined) {
            this.key = additionalParams.key;
        }
        if (additionalParams.iv !== undefined) {
            this.iv = additionalParams.iv;
        }
        if (additionalParams.salt !== undefined) {
            this.salt = additionalParams.salt;
        }
        if (additionalParams.algorithm !== undefined) {
            this.algorithm = additionalParams.algorithm;
        }
        if (additionalParams.mode !== undefined) {
            this.mode = additionalParams.mode;
        }
        if (additionalParams.padding !== undefined) {
            this.padding = additionalParams.padding;
        }
        if (additionalParams.blockSize !== undefined) {
            this.blockSize = additionalParams.blockSize;
        }
        if (additionalParams.formatter !== undefined) {
            this.formatter = additionalParams.formatter;
        }
        return this;
    };
    /**
     * Converts this cipher params object to a string.
     *
     * @throws Error If neither the formatter nor the default formatter is set.
     *
     * \@example
     *
     *     let string = cipherParams + '';
     *     let string = cipherParams.toString();
     *     let string = cipherParams.toString(CryptoJS.format.OpenSSL);
     * @param {?=} formatter (Optional) The formatting strategy to use.
     *
     * @return {?} The stringified cipher params.
     *
     */
    CipherParams.prototype.toString = /**
     * Converts this cipher params object to a string.
     *
     * @throws Error If neither the formatter nor the default formatter is set.
     *
     * \@example
     *
     *     let string = cipherParams + '';
     *     let string = cipherParams.toString();
     *     let string = cipherParams.toString(CryptoJS.format.OpenSSL);
     * @param {?=} formatter (Optional) The formatting strategy to use.
     *
     * @return {?} The stringified cipher params.
     *
     */
    function (formatter) {
        if (formatter) {
            return formatter.stringify(this);
        }
        else if (this.formatter) {
            return this.formatter.stringify(this);
        }
        else {
            throw new Error('cipher needs a formatter to be able to convert the result into a string');
        }
    };
    return CipherParams;
}(Base));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Base64 = /** @class */ (function () {
    function Base64() {
    }
    /**
     * Converts a word array to a Base64 string.
     *
     * \@example
     *
     *     let base64String = Base64.stringify(wordArray);
     * @param {?} wordArray The word array.
     *
     * @return {?} The Base64 string.
     *
     */
    Base64.stringify = /**
     * Converts a word array to a Base64 string.
     *
     * \@example
     *
     *     let base64String = Base64.stringify(wordArray);
     * @param {?} wordArray The word array.
     *
     * @return {?} The Base64 string.
     *
     */
    function (wordArray) {
        // Clamp excess bits
        wordArray.clamp();
        // Convert
        var /** @type {?} */ base64Chars = [];
        for (var /** @type {?} */ i = 0; i < wordArray.sigBytes; i += 3) {
            var /** @type {?} */ byte1 = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            var /** @type {?} */ byte2 = (wordArray.words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
            var /** @type {?} */ byte3 = (wordArray.words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
            var /** @type {?} */ triplet = (byte1 << 16) | (byte2 << 8) | byte3;
            for (var /** @type {?} */ j = 0; (j < 4) && (i + j * 0.75 < wordArray.sigBytes); j++) {
                base64Chars.push(this._map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
            }
        }
        // Add padding
        var /** @type {?} */ paddingChar = this._map.charAt(64);
        if (paddingChar) {
            while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
            }
        }
        return base64Chars.join('');
    };
    /**
     * Converts a Base64 string to a word array.
     *
     * \@example
     *
     *     let wordArray = Base64.parse(base64String);
     * @param {?} base64Str The Base64 string.
     *
     * @return {?} The word array.
     *
     */
    Base64.parse = /**
     * Converts a Base64 string to a word array.
     *
     * \@example
     *
     *     let wordArray = Base64.parse(base64String);
     * @param {?} base64Str The Base64 string.
     *
     * @return {?} The word array.
     *
     */
    function (base64Str) {
        // Shortcuts
        var /** @type {?} */ base64StrLength = base64Str.length;
        if (this._reverseMap === undefined) {
            this._reverseMap = [];
            for (var /** @type {?} */ j = 0; j < this._map.length; j++) {
                this._reverseMap[this._map.charCodeAt(j)] = j;
            }
        }
        // Ignore padding
        var /** @type {?} */ paddingChar = this._map.charAt(64);
        if (paddingChar) {
            var /** @type {?} */ paddingIndex = base64Str.indexOf(paddingChar);
            if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
            }
        }
        // Convert
        return this.parseLoop(base64Str, base64StrLength, this._reverseMap);
    };
    /**
     * @param {?} base64Str
     * @param {?} base64StrLength
     * @param {?} reverseMap
     * @return {?}
     */
    Base64.parseLoop = /**
     * @param {?} base64Str
     * @param {?} base64StrLength
     * @param {?} reverseMap
     * @return {?}
     */
    function (base64Str, base64StrLength, reverseMap) {
        var /** @type {?} */ words = [];
        var /** @type {?} */ nBytes = 0;
        for (var /** @type {?} */ i = 0; i < base64StrLength; i++) {
            if (i % 4) {
                var /** @type {?} */ bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
                var /** @type {?} */ bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
                words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                nBytes++;
            }
        }
        return new WordArray(words, nBytes);
    };
    Base64._map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    Base64._reverseMap = undefined;
    return Base64;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OpenSSL = /** @class */ (function () {
    function OpenSSL() {
    }
    /**
     * Converts a cipher params object to an OpenSSL-compatible string.
     *
     * \@example
     *
     *     let openSSLString = OpenSSLFormatter.stringify(cipherParams);
     * @param {?} cipherParams The cipher params object.
     *
     * @return {?} The OpenSSL-compatible string.
     *
     */
    OpenSSL.stringify = /**
     * Converts a cipher params object to an OpenSSL-compatible string.
     *
     * \@example
     *
     *     let openSSLString = OpenSSLFormatter.stringify(cipherParams);
     * @param {?} cipherParams The cipher params object.
     *
     * @return {?} The OpenSSL-compatible string.
     *
     */
    function (cipherParams) {
        if (!cipherParams.ciphertext) {
            throw new Error('missing ciphertext in params');
        }
        // Shortcuts
        var /** @type {?} */ ciphertext = cipherParams.ciphertext;
        var /** @type {?} */ salt = cipherParams.salt;
        // Format
        var /** @type {?} */ wordArray;
        if (salt) {
            if (typeof salt === 'string') {
                throw new Error('salt is expected to be a WordArray');
            }
            wordArray = (new WordArray([0x53616c74, 0x65645f5f])).concat(salt).concat(ciphertext);
        }
        else {
            wordArray = ciphertext;
        }
        return wordArray.toString(Base64);
    };
    /**
     * Converts an OpenSSL-compatible string to a cipher params object.
     *
     * \@example
     *
     *     let cipherParams = OpenSSLFormatter.parse(openSSLString);
     * @param {?} openSSLStr The OpenSSL-compatible string.
     *
     * @return {?} The cipher params object.
     *
     */
    OpenSSL.parse = /**
     * Converts an OpenSSL-compatible string to a cipher params object.
     *
     * \@example
     *
     *     let cipherParams = OpenSSLFormatter.parse(openSSLString);
     * @param {?} openSSLStr The OpenSSL-compatible string.
     *
     * @return {?} The cipher params object.
     *
     */
    function (openSSLStr) {
        // Parse base64
        var /** @type {?} */ ciphertext = Base64.parse(openSSLStr);
        // Test for salt
        var /** @type {?} */ salt;
        if (ciphertext.words[0] === 0x53616c74 && ciphertext.words[1] === 0x65645f5f) {
            // Extract salt
            salt = new WordArray(ciphertext.words.slice(2, 4));
            // Remove salt from ciphertext
            ciphertext.words.splice(0, 4);
            ciphertext.sigBytes -= 16;
        }
        return new CipherParams({ ciphertext: ciphertext, salt: salt });
    };
    return OpenSSL;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SerializableCipher = /** @class */ (function () {
    function SerializableCipher() {
    }
    /**
     * Encrypts a message.
     *
     * \@example
     *
     *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
     *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
     *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, {
     *       iv: iv,
     *       format: CryptoJS.format.OpenSSL
     *     });
     * @param {?} cipher The cipher algorithm to use.
     * @param {?} message The message to encrypt.
     * @param {?} key The key.
     * @param {?=} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {?} A cipher params object.
     *
     */
    SerializableCipher.encrypt = /**
     * Encrypts a message.
     *
     * \@example
     *
     *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
     *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
     *     let ciphertextParams = SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, {
     *       iv: iv,
     *       format: CryptoJS.format.OpenSSL
     *     });
     * @param {?} cipher The cipher algorithm to use.
     * @param {?} message The message to encrypt.
     * @param {?} key The key.
     * @param {?=} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {?} A cipher params object.
     *
     */
    function (cipher, message, key, cfg) {
        // Apply config defaults
        var /** @type {?} */ config = Object.assign({}, this.cfg, cfg);
        // Encrypt
        var /** @type {?} */ encryptor = cipher.createEncryptor(key, config);
        var /** @type {?} */ ciphertext = encryptor.finalize(message);
        // Create and return serializable cipher params
        return new CipherParams({
            ciphertext: ciphertext,
            key: key,
            iv: encryptor.cfg.iv,
            algorithm: cipher,
            mode: (/** @type {?} */ (encryptor.cfg)).mode,
            padding: (/** @type {?} */ (encryptor.cfg)).padding,
            blockSize: encryptor.cfg.blockSize,
            formatter: config.format
        });
    };
    /**
     * Decrypts serialized ciphertext.
     *
     * \@example
     *
     *     let plaintext = SerializableCipher.decrypt(
     *         AESAlgorithm,
     *         formattedCiphertext,
     *         key, {
     *             iv: iv,
     *             format: CryptoJS.format.OpenSSL
     *         }
     *     );
     *
     *     let plaintext = SerializableCipher.decrypt(
     *         AESAlgorithm,
     *         ciphertextParams,
     *         key, {
     *             iv: iv,
     *             format: CryptoJS.format.OpenSSL
     *         }
     *     );
     * @param {?} cipher The cipher algorithm to use.
     * @param {?} ciphertext The ciphertext to decrypt.
     * @param {?} key The key.
     * @param {?=} optionalCfg
     * @return {?} The plaintext.
     *
     */
    SerializableCipher.decrypt = /**
     * Decrypts serialized ciphertext.
     *
     * \@example
     *
     *     let plaintext = SerializableCipher.decrypt(
     *         AESAlgorithm,
     *         formattedCiphertext,
     *         key, {
     *             iv: iv,
     *             format: CryptoJS.format.OpenSSL
     *         }
     *     );
     *
     *     let plaintext = SerializableCipher.decrypt(
     *         AESAlgorithm,
     *         ciphertextParams,
     *         key, {
     *             iv: iv,
     *             format: CryptoJS.format.OpenSSL
     *         }
     *     );
     * @param {?} cipher The cipher algorithm to use.
     * @param {?} ciphertext The ciphertext to decrypt.
     * @param {?} key The key.
     * @param {?=} optionalCfg
     * @return {?} The plaintext.
     *
     */
    function (cipher, ciphertext, key, optionalCfg) {
        // Apply config defaults
        var /** @type {?} */ cfg = Object.assign({}, this.cfg, optionalCfg);
        if (!cfg.format) {
            throw new Error('could not determine format');
        }
        // Convert string to CipherParams
        ciphertext = this._parse(ciphertext, cfg.format);
        if (!ciphertext.ciphertext) {
            throw new Error('could not determine ciphertext');
        }
        // Decrypt
        var /** @type {?} */ plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
        return plaintext;
    };
    /**
     * Converts serialized ciphertext to CipherParams,
     * else assumed CipherParams already and returns ciphertext unchanged.
     *
     * \@example
     *
     *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
     * @param {?} ciphertext The ciphertext.
     * @param {?} format The formatting strategy to use to parse serialized ciphertext.
     *
     * @return {?} The unserialized ciphertext.
     *
     */
    SerializableCipher._parse = /**
     * Converts serialized ciphertext to CipherParams,
     * else assumed CipherParams already and returns ciphertext unchanged.
     *
     * \@example
     *
     *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
     * @param {?} ciphertext The ciphertext.
     * @param {?} format The formatting strategy to use to parse serialized ciphertext.
     *
     * @return {?} The unserialized ciphertext.
     *
     */
    function (ciphertext, format) {
        if (typeof ciphertext === 'string') {
            return format.parse(ciphertext);
        }
        else {
            return ciphertext;
        }
    };
    SerializableCipher.cfg = {
        blockSize: 4,
        iv: new WordArray([]),
        format: OpenSSL
    };
    return SerializableCipher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
Hasher = /** @class */ (function (_super) {
    __extends(Hasher, _super);
    function Hasher(cfg) {
        var _this =
        // Apply config defaults
        _super.call(this, Object.assign({
            blockSize: 512 / 32
        }, cfg)) || this;
        // Set initial values
        // Set initial values
        _this.reset();
        return _this;
    }
    /**
     * Creates a shortcut function to a hasher's object interface.
     *
     * \@example
     *
     *     let SHA256 = Hasher._createHelper(SHA256);
     * @param {?} hasher The hasher to create a helper for.
     *
     * @return {?} The shortcut function.
     *
     */
    Hasher._createHelper = /**
     * Creates a shortcut function to a hasher's object interface.
     *
     * \@example
     *
     *     let SHA256 = Hasher._createHelper(SHA256);
     * @param {?} hasher The hasher to create a helper for.
     *
     * @return {?} The shortcut function.
     *
     */
    function (hasher) {
        /**
         * @param {?} message
         * @param {?=} cfg
         * @return {?}
         */
        function helper(message, cfg) {
            var /** @type {?} */ hasherClass = hasher;
            var /** @type {?} */ hasherInstance = new hasherClass(cfg);
            return hasherInstance.finalize(message);
        }
        return helper;
    };
    /**
     * Updates this hasher with a message.
     *
     * @param messageUpdate The message to append.
     *
     * @return This hasher.
     *
     * @example
     *
     *     hasher.update('message');
     *     hasher.update(wordArray);
     */
    /**
     * Updates this hasher with a message.
     *
     * \@example
     *
     *     hasher.update('message');
     *     hasher.update(wordArray);
     * @param {?} messageUpdate The message to append.
     *
     * @return {?} This hasher.
     *
     */
    Hasher.prototype.update = /**
     * Updates this hasher with a message.
     *
     * \@example
     *
     *     hasher.update('message');
     *     hasher.update(wordArray);
     * @param {?} messageUpdate The message to append.
     *
     * @return {?} This hasher.
     *
     */
    function (messageUpdate) {
        // Append
        this._append(messageUpdate);
        // Update the hash
        this._process();
        // Chainable
        return this;
    };
    /**
     * Finalizes the hash computation.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * \@example
     *
     *     let hash = hasher.finalize();
     *     let hash = hasher.finalize('message');
     *     let hash = hasher.finalize(wordArray);
     * @param {?} messageUpdate (Optional) A final message update.
     *
     * @return {?} The hash.
     *
     */
    Hasher.prototype.finalize = /**
     * Finalizes the hash computation.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * \@example
     *
     *     let hash = hasher.finalize();
     *     let hash = hasher.finalize('message');
     *     let hash = hasher.finalize(wordArray);
     * @param {?} messageUpdate (Optional) A final message update.
     *
     * @return {?} The hash.
     *
     */
    function (messageUpdate) {
        // Final message update
        if (messageUpdate) {
            this._append(messageUpdate);
        }
        // Perform concrete-hasher logic
        var /** @type {?} */ hash = this._doFinalize();
        return hash;
    };
    return Hasher;
}(BufferedBlockAlgorithm));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Constants table
var /** @type {?} */ T = [];
// Compute constants
for (var /** @type {?} */ i = 0; i < 64; i++) {
    T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
}
var MD5 = /** @class */ (function (_super) {
    __extends(MD5, _super);
    function MD5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?} x
     * @param {?} s
     * @param {?} t
     * @return {?}
     */
    MD5.FF = /**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?} x
     * @param {?} s
     * @param {?} t
     * @return {?}
     */
    function (a, b, c, d, x, s, t) {
        var /** @type {?} */ n = a + ((b & c) | (~b & d)) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?} x
     * @param {?} s
     * @param {?} t
     * @return {?}
     */
    MD5.GG = /**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?} x
     * @param {?} s
     * @param {?} t
     * @return {?}
     */
    function (a, b, c, d, x, s, t) {
        var /** @type {?} */ n = a + ((b & d) | (c & ~d)) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?} x
     * @param {?} s
     * @param {?} t
     * @return {?}
     */
    MD5.HH = /**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?} x
     * @param {?} s
     * @param {?} t
     * @return {?}
     */
    function (a, b, c, d, x, s, t) {
        var /** @type {?} */ n = a + (b ^ c ^ d) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?} x
     * @param {?} s
     * @param {?} t
     * @return {?}
     */
    MD5.II = /**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @param {?} x
     * @param {?} s
     * @param {?} t
     * @return {?}
     */
    function (a, b, c, d, x, s, t) {
        var /** @type {?} */ n = a + (c ^ (b | ~d)) + x + t;
        return ((n << s) | (n >>> (32 - s))) + b;
    };
    /**
     * @return {?}
     */
    MD5.prototype.reset = /**
     * @return {?}
     */
    function () {
        // reset core values
        _super.prototype.reset.call(this);
        this._hash = new WordArray([
            0x67452301, 0xefcdab89,
            0x98badcfe, 0x10325476
        ]);
    };
    /**
     * @param {?} M
     * @param {?} offset
     * @return {?}
     */
    MD5.prototype._doProcessBlock = /**
     * @param {?} M
     * @param {?} offset
     * @return {?}
     */
    function (M, offset) {
        // Swap endian
        for (var /** @type {?} */ i = 0; i < 16; i++) {
            // Shortcuts
            var /** @type {?} */ offset_i = offset + i;
            var /** @type {?} */ M_offset_i = M[offset_i];
            M[offset_i] = ((((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) |
                (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00));
        }
        // Shortcuts
        var /** @type {?} */ H = this._hash.words;
        var /** @type {?} */ M_offset_0 = M[offset + 0];
        var /** @type {?} */ M_offset_1 = M[offset + 1];
        var /** @type {?} */ M_offset_2 = M[offset + 2];
        var /** @type {?} */ M_offset_3 = M[offset + 3];
        var /** @type {?} */ M_offset_4 = M[offset + 4];
        var /** @type {?} */ M_offset_5 = M[offset + 5];
        var /** @type {?} */ M_offset_6 = M[offset + 6];
        var /** @type {?} */ M_offset_7 = M[offset + 7];
        var /** @type {?} */ M_offset_8 = M[offset + 8];
        var /** @type {?} */ M_offset_9 = M[offset + 9];
        var /** @type {?} */ M_offset_10 = M[offset + 10];
        var /** @type {?} */ M_offset_11 = M[offset + 11];
        var /** @type {?} */ M_offset_12 = M[offset + 12];
        var /** @type {?} */ M_offset_13 = M[offset + 13];
        var /** @type {?} */ M_offset_14 = M[offset + 14];
        var /** @type {?} */ M_offset_15 = M[offset + 15];
        // Working variables
        var /** @type {?} */ a = H[0];
        var /** @type {?} */ b = H[1];
        var /** @type {?} */ c = H[2];
        var /** @type {?} */ d = H[3];
        // Computation
        a = MD5.FF(a, b, c, d, M_offset_0, 7, T[0]);
        d = MD5.FF(d, a, b, c, M_offset_1, 12, T[1]);
        c = MD5.FF(c, d, a, b, M_offset_2, 17, T[2]);
        b = MD5.FF(b, c, d, a, M_offset_3, 22, T[3]);
        a = MD5.FF(a, b, c, d, M_offset_4, 7, T[4]);
        d = MD5.FF(d, a, b, c, M_offset_5, 12, T[5]);
        c = MD5.FF(c, d, a, b, M_offset_6, 17, T[6]);
        b = MD5.FF(b, c, d, a, M_offset_7, 22, T[7]);
        a = MD5.FF(a, b, c, d, M_offset_8, 7, T[8]);
        d = MD5.FF(d, a, b, c, M_offset_9, 12, T[9]);
        c = MD5.FF(c, d, a, b, M_offset_10, 17, T[10]);
        b = MD5.FF(b, c, d, a, M_offset_11, 22, T[11]);
        a = MD5.FF(a, b, c, d, M_offset_12, 7, T[12]);
        d = MD5.FF(d, a, b, c, M_offset_13, 12, T[13]);
        c = MD5.FF(c, d, a, b, M_offset_14, 17, T[14]);
        b = MD5.FF(b, c, d, a, M_offset_15, 22, T[15]);
        a = MD5.GG(a, b, c, d, M_offset_1, 5, T[16]);
        d = MD5.GG(d, a, b, c, M_offset_6, 9, T[17]);
        c = MD5.GG(c, d, a, b, M_offset_11, 14, T[18]);
        b = MD5.GG(b, c, d, a, M_offset_0, 20, T[19]);
        a = MD5.GG(a, b, c, d, M_offset_5, 5, T[20]);
        d = MD5.GG(d, a, b, c, M_offset_10, 9, T[21]);
        c = MD5.GG(c, d, a, b, M_offset_15, 14, T[22]);
        b = MD5.GG(b, c, d, a, M_offset_4, 20, T[23]);
        a = MD5.GG(a, b, c, d, M_offset_9, 5, T[24]);
        d = MD5.GG(d, a, b, c, M_offset_14, 9, T[25]);
        c = MD5.GG(c, d, a, b, M_offset_3, 14, T[26]);
        b = MD5.GG(b, c, d, a, M_offset_8, 20, T[27]);
        a = MD5.GG(a, b, c, d, M_offset_13, 5, T[28]);
        d = MD5.GG(d, a, b, c, M_offset_2, 9, T[29]);
        c = MD5.GG(c, d, a, b, M_offset_7, 14, T[30]);
        b = MD5.GG(b, c, d, a, M_offset_12, 20, T[31]);
        a = MD5.HH(a, b, c, d, M_offset_5, 4, T[32]);
        d = MD5.HH(d, a, b, c, M_offset_8, 11, T[33]);
        c = MD5.HH(c, d, a, b, M_offset_11, 16, T[34]);
        b = MD5.HH(b, c, d, a, M_offset_14, 23, T[35]);
        a = MD5.HH(a, b, c, d, M_offset_1, 4, T[36]);
        d = MD5.HH(d, a, b, c, M_offset_4, 11, T[37]);
        c = MD5.HH(c, d, a, b, M_offset_7, 16, T[38]);
        b = MD5.HH(b, c, d, a, M_offset_10, 23, T[39]);
        a = MD5.HH(a, b, c, d, M_offset_13, 4, T[40]);
        d = MD5.HH(d, a, b, c, M_offset_0, 11, T[41]);
        c = MD5.HH(c, d, a, b, M_offset_3, 16, T[42]);
        b = MD5.HH(b, c, d, a, M_offset_6, 23, T[43]);
        a = MD5.HH(a, b, c, d, M_offset_9, 4, T[44]);
        d = MD5.HH(d, a, b, c, M_offset_12, 11, T[45]);
        c = MD5.HH(c, d, a, b, M_offset_15, 16, T[46]);
        b = MD5.HH(b, c, d, a, M_offset_2, 23, T[47]);
        a = MD5.II(a, b, c, d, M_offset_0, 6, T[48]);
        d = MD5.II(d, a, b, c, M_offset_7, 10, T[49]);
        c = MD5.II(c, d, a, b, M_offset_14, 15, T[50]);
        b = MD5.II(b, c, d, a, M_offset_5, 21, T[51]);
        a = MD5.II(a, b, c, d, M_offset_12, 6, T[52]);
        d = MD5.II(d, a, b, c, M_offset_3, 10, T[53]);
        c = MD5.II(c, d, a, b, M_offset_10, 15, T[54]);
        b = MD5.II(b, c, d, a, M_offset_1, 21, T[55]);
        a = MD5.II(a, b, c, d, M_offset_8, 6, T[56]);
        d = MD5.II(d, a, b, c, M_offset_15, 10, T[57]);
        c = MD5.II(c, d, a, b, M_offset_6, 15, T[58]);
        b = MD5.II(b, c, d, a, M_offset_13, 21, T[59]);
        a = MD5.II(a, b, c, d, M_offset_4, 6, T[60]);
        d = MD5.II(d, a, b, c, M_offset_11, 10, T[61]);
        c = MD5.II(c, d, a, b, M_offset_2, 15, T[62]);
        b = MD5.II(b, c, d, a, M_offset_9, 21, T[63]);
        // Intermediate hash value
        H[0] = (H[0] + a) | 0;
        H[1] = (H[1] + b) | 0;
        H[2] = (H[2] + c) | 0;
        H[3] = (H[3] + d) | 0;
    };
    /**
     * @return {?}
     */
    MD5.prototype._doFinalize = /**
     * @return {?}
     */
    function () {
        // Shortcuts
        var /** @type {?} */ data = this._data;
        var /** @type {?} */ dataWords = data.words;
        var /** @type {?} */ nBitsTotal = this._nDataBytes * 8;
        var /** @type {?} */ nBitsLeft = data.sigBytes * 8;
        // Add padding
        dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
        var /** @type {?} */ nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
        var /** @type {?} */ nBitsTotalL = nBitsTotal;
        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = ((((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
            (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00));
        dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = ((((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
            (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00));
        data.sigBytes = (dataWords.length + 1) * 4;
        // Hash final blocks
        this._process();
        // Shortcuts
        var /** @type {?} */ hash = this._hash;
        var /** @type {?} */ H = hash.words;
        // Swap endian
        for (var /** @type {?} */ i = 0; i < 4; i++) {
            // Shortcut
            var /** @type {?} */ H_i = H[i];
            H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) |
                (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
        }
        // Return final computed hash
        return hash;
    };
    return MD5;
}(Hasher));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EvpKDF = /** @class */ (function () {
    /**
     * Initializes a newly created key derivation function.
     *
     * @param cfg (Optional) The configuration options to use for the derivation.
     *
     * @example
     *
     *     let kdf = EvpKDF.create();
     *     let kdf = EvpKDF.create({ keySize: 8 });
     *     let kdf = EvpKDF.create({ keySize: 8, iterations: 1000 });
     */
    function EvpKDF(cfg) {
        this.cfg = Object.assign({
            keySize: 128 / 32,
            hasher: MD5,
            iterations: 1
        }, cfg);
    }
    /**
     * Derives a key from a password.
     *
     * @param password The password.
     * @param salt A salt.
     *
     * @return The derived key.
     *
     * @example
     *
     *     let key = kdf.compute(password, salt);
     */
    /**
     * Derives a key from a password.
     *
     * \@example
     *
     *     let key = kdf.compute(password, salt);
     * @param {?} password The password.
     * @param {?} salt A salt.
     *
     * @return {?} The derived key.
     *
     */
    EvpKDF.prototype.compute = /**
     * Derives a key from a password.
     *
     * \@example
     *
     *     let key = kdf.compute(password, salt);
     * @param {?} password The password.
     * @param {?} salt A salt.
     *
     * @return {?} The derived key.
     *
     */
    function (password, salt) {
        // Init hasher
        var /** @type {?} */ hasher = new (/** @type {?} */ (this.cfg.hasher))();
        // Initial values
        var /** @type {?} */ derivedKey = new WordArray();
        // Generate key
        var /** @type {?} */ block;
        while (derivedKey.words.length < this.cfg.keySize) {
            if (block) {
                hasher.update(block);
            }
            block = hasher.update(password).finalize(salt);
            hasher.reset();
            // Iterations
            for (var /** @type {?} */ i = 1; i < this.cfg.iterations; i++) {
                block = hasher.finalize(block);
                hasher.reset();
            }
            derivedKey.concat(block);
        }
        derivedKey.sigBytes = this.cfg.keySize * 4;
        return derivedKey;
    };
    return EvpKDF;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OpenSSLKdf = /** @class */ (function () {
    function OpenSSLKdf() {
    }
    /**
     * Derives a key and IV from a password.
     *
     * \@example
     *
     *     let derivedParams = OpenSSL.execute('Password', 256/32, 128/32);
     *     let derivedParams = OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
     * @param {?} password The password to derive from.
     * @param {?} keySize The size in words of the key to generate.
     * @param {?} ivSize The size in words of the IV to generate.
     * @param {?=} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
     *
     * @return {?} A cipher params object with the key, IV, and salt.
     *
     */
    OpenSSLKdf.execute = /**
     * Derives a key and IV from a password.
     *
     * \@example
     *
     *     let derivedParams = OpenSSL.execute('Password', 256/32, 128/32);
     *     let derivedParams = OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
     * @param {?} password The password to derive from.
     * @param {?} keySize The size in words of the key to generate.
     * @param {?} ivSize The size in words of the IV to generate.
     * @param {?=} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
     *
     * @return {?} A cipher params object with the key, IV, and salt.
     *
     */
    function (password, keySize, ivSize, salt) {
        // Generate random salt
        if (!salt) {
            salt = WordArray.random(64 / 8);
        }
        // Derive key and IV
        var /** @type {?} */ key = (new EvpKDF({ keySize: keySize + ivSize })).compute(password, salt);
        // Separate key and IV
        var /** @type {?} */ iv = new WordArray(key.words.slice(keySize), ivSize * 4);
        key.sigBytes = keySize * 4;
        // Return params
        return new CipherParams({ key: key, iv: iv, salt: salt });
    };
    return OpenSSLKdf;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PasswordBasedCipher = /** @class */ (function () {
    function PasswordBasedCipher() {
    }
    /**
     * Encrypts a message using a password.
     *
     * \@example
     *
     *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(AES, message, 'password');
     *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(AES, message, 'password', { format: OpenSSL });
     * @param {?} cipher The cipher algorithm to use.
     * @param {?} message The message to encrypt.
     * @param {?} password The password.
     * @param {?=} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {?} A cipher params object.
     *
     */
    PasswordBasedCipher.encrypt = /**
     * Encrypts a message using a password.
     *
     * \@example
     *
     *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(AES, message, 'password');
     *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(AES, message, 'password', { format: OpenSSL });
     * @param {?} cipher The cipher algorithm to use.
     * @param {?} message The message to encrypt.
     * @param {?} password The password.
     * @param {?=} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {?} A cipher params object.
     *
     */
    function (cipher, message, password, cfg) {
        // Apply config defaults
        var /** @type {?} */ config = Object.assign({}, this.cfg, cfg);
        // Check if we have a kdf
        if (config.kdf === undefined) {
            throw new Error('missing kdf in config');
        }
        // Derive key and other params
        var /** @type {?} */ derivedParams = config.kdf.execute(password, cipher.keySize, cipher.ivSize);
        // Check if we have an IV
        if (derivedParams.iv !== undefined) {
            // Add IV to config
            config.iv = derivedParams.iv;
        }
        // Encrypt
        var /** @type {?} */ ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, config);
        // Mix in derived params
        return ciphertext.extend(derivedParams);
    };
    /**
     * Decrypts serialized ciphertext using a password.
     *
     * \@example
     *
     *     var plaintext = PasswordBasedCipher.decrypt(AES, formattedCiphertext, 'password', { format: OpenSSL });
     *     var plaintext = PasswordBasedCipher.decrypt(AES, ciphertextParams, 'password', { format: OpenSSL });
     * @param {?} cipher The cipher algorithm to use.
     * @param {?} ciphertext The ciphertext to decrypt.
     * @param {?} password The password.
     * @param {?=} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {?} The plaintext.
     *
     */
    PasswordBasedCipher.decrypt = /**
     * Decrypts serialized ciphertext using a password.
     *
     * \@example
     *
     *     var plaintext = PasswordBasedCipher.decrypt(AES, formattedCiphertext, 'password', { format: OpenSSL });
     *     var plaintext = PasswordBasedCipher.decrypt(AES, ciphertextParams, 'password', { format: OpenSSL });
     * @param {?} cipher The cipher algorithm to use.
     * @param {?} ciphertext The ciphertext to decrypt.
     * @param {?} password The password.
     * @param {?=} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {?} The plaintext.
     *
     */
    function (cipher, ciphertext, password, cfg) {
        // Apply config defaults
        var /** @type {?} */ config = Object.assign({}, this.cfg, cfg);
        // Check if we have a kdf
        if (config.format === undefined) {
            throw new Error('missing format in config');
        }
        // Convert string to CipherParams
        ciphertext = this._parse(ciphertext, config.format);
        // Check if we have a kdf
        if (config.kdf === undefined) {
            throw new Error('the key derivation function must be set');
        }
        // Derive key and other params
        var /** @type {?} */ derivedParams = config.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
        // Check if we have an IV
        if (derivedParams.iv !== undefined) {
            // Add IV to config
            config.iv = derivedParams.iv;
        }
        // Decrypt
        var /** @type {?} */ plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, config);
        return plaintext;
    };
    /**
     * Converts serialized ciphertext to CipherParams,
     * else assumed CipherParams already and returns ciphertext unchanged.
     *
     * \@example
     *
     *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
     * @param {?} ciphertext The ciphertext.
     * @param {?} format The formatting strategy to use to parse serialized ciphertext.
     *
     * @return {?} The unserialized ciphertext.
     *
     */
    PasswordBasedCipher._parse = /**
     * Converts serialized ciphertext to CipherParams,
     * else assumed CipherParams already and returns ciphertext unchanged.
     *
     * \@example
     *
     *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
     * @param {?} ciphertext The ciphertext.
     * @param {?} format The formatting strategy to use to parse serialized ciphertext.
     *
     * @return {?} The unserialized ciphertext.
     *
     */
    function (ciphertext, format) {
        if (typeof ciphertext === 'string') {
            return format.parse(ciphertext);
        }
        else {
            return ciphertext;
        }
    };
    PasswordBasedCipher.cfg = {
        blockSize: 4,
        iv: new WordArray([]),
        format: OpenSSL,
        kdf: OpenSSLKdf
    };
    return PasswordBasedCipher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var Cipher = /** @class */ (function (_super) {
    __extends(Cipher, _super);
    function Cipher(xformMode, key, cfg) {
        var _this =
        // Apply config defaults
        _super.call(this, Object.assign({
            blockSize: 1
        }, cfg)) || this;
        // Store transform mode and key
        // Store transform mode and key
        _this._xformMode = xformMode;
        _this._key = key;
        // Set initial values
        // Set initial values
        _this.reset();
        return _this;
    }
    /**
     * Creates this cipher in encryption mode.
     *
     * \@example
     *
     *     let cipher = AES.createEncryptor(keyWordArray, { iv: ivWordArray });
     * @param {?} key The key.
     * @param {?=} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {?} A cipher instance.
     *
     */
    Cipher.createEncryptor = /**
     * Creates this cipher in encryption mode.
     *
     * \@example
     *
     *     let cipher = AES.createEncryptor(keyWordArray, { iv: ivWordArray });
     * @param {?} key The key.
     * @param {?=} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {?} A cipher instance.
     *
     */
    function (key, cfg) {
        // workaround for typescript not being able to create a abstract creator function directly
        var /** @type {?} */ thisClass = this;
        return new thisClass(this._ENC_XFORM_MODE, key, cfg);
    };
    /**
     * Creates this cipher in decryption mode.
     *
     * \@example
     *
     *     let cipher = AES.createDecryptor(keyWordArray, { iv: ivWordArray });
     * @param {?} key The key.
     * @param {?=} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {?} A cipher instance.
     *
     */
    Cipher.createDecryptor = /**
     * Creates this cipher in decryption mode.
     *
     * \@example
     *
     *     let cipher = AES.createDecryptor(keyWordArray, { iv: ivWordArray });
     * @param {?} key The key.
     * @param {?=} cfg (Optional) The configuration options to use for this operation.
     *
     * @return {?} A cipher instance.
     *
     */
    function (key, cfg) {
        // workaround for typescript not being able to create a abstract creator function directly
        var /** @type {?} */ thisClass = this;
        return new thisClass(this._DEC_XFORM_MODE, key, cfg);
    };
    /**
     * Creates shortcut functions to a cipher's object interface.
     *
     * \@example
     *
     *     let AES = Cipher._createHelper(AESAlgorithm);
     * @param {?} cipher The cipher to create a helper for.
     *
     * @return {?} An object with encrypt and decrypt shortcut functions.
     *
     */
    Cipher._createHelper = /**
     * Creates shortcut functions to a cipher's object interface.
     *
     * \@example
     *
     *     let AES = Cipher._createHelper(AESAlgorithm);
     * @param {?} cipher The cipher to create a helper for.
     *
     * @return {?} An object with encrypt and decrypt shortcut functions.
     *
     */
    function (cipher) {
        /**
         * @param {?} message
         * @param {?} key
         * @param {?=} cfg
         * @return {?}
         */
        function encrypt(message, key, cfg) {
            if (typeof key === 'string') {
                return PasswordBasedCipher.encrypt(cipher, message, key, cfg);
            }
            else {
                return SerializableCipher.encrypt(cipher, message, key, cfg);
            }
        }
        /**
         * @param {?} ciphertext
         * @param {?} key
         * @param {?=} cfg
         * @return {?}
         */
        function decrypt(ciphertext, key, cfg) {
            if (typeof key === 'string') {
                return PasswordBasedCipher.decrypt(cipher, ciphertext, key, cfg);
            }
            else {
                return SerializableCipher.decrypt(cipher, ciphertext, key, cfg);
            }
        }
        return {
            encrypt: encrypt,
            decrypt: decrypt
        };
    };
    /**
     * Adds data to be encrypted or decrypted.
     *
     * \@example
     *
     *     let encrypted = cipher.process('data');
     *     let encrypted = cipher.process(wordArray);
     * @param {?} dataUpdate The data to encrypt or decrypt.
     *
     * @return {?} The data after processing.
     *
     */
    Cipher.prototype.process = /**
     * Adds data to be encrypted or decrypted.
     *
     * \@example
     *
     *     let encrypted = cipher.process('data');
     *     let encrypted = cipher.process(wordArray);
     * @param {?} dataUpdate The data to encrypt or decrypt.
     *
     * @return {?} The data after processing.
     *
     */
    function (dataUpdate) {
        // Append
        this._append(dataUpdate);
        // Process available blocks
        return this._process();
    };
    /**
     * Finalizes the encryption or decryption process.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * \@example
     *
     *     var encrypted = cipher.finalize();
     *     var encrypted = cipher.finalize('data');
     *     var encrypted = cipher.finalize(wordArray);
     * @param {?=} dataUpdate The final data to encrypt or decrypt.
     *
     * @return {?} The data after final processing.
     *
     */
    Cipher.prototype.finalize = /**
     * Finalizes the encryption or decryption process.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * \@example
     *
     *     var encrypted = cipher.finalize();
     *     var encrypted = cipher.finalize('data');
     *     var encrypted = cipher.finalize(wordArray);
     * @param {?=} dataUpdate The final data to encrypt or decrypt.
     *
     * @return {?} The data after final processing.
     *
     */
    function (dataUpdate) {
        // Final data update
        if (dataUpdate) {
            this._append(dataUpdate);
        }
        // Perform concrete-cipher logic
        var /** @type {?} */ finalProcessedData = this._doFinalize();
        return finalProcessedData;
    };
    /**
     * A constant representing encryption mode.
     */
    Cipher._ENC_XFORM_MODE = 1;
    /**
     * A constant representing decryption mode.
     */
    Cipher._DEC_XFORM_MODE = 2;
    /**
     * This cipher's key size. Default: 4 (128 bits / 32 Bits)
     */
    Cipher.keySize = 4;
    /**
     * This cipher's IV size. Default: 4 (128 bits / 32 Bits)
     */
    Cipher.ivSize = 4;
    return Cipher;
}(BufferedBlockAlgorithm));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
BlockCipherModeAlgorithm = /** @class */ (function () {
    function BlockCipherModeAlgorithm(cipher, iv) {
        this.init(cipher, iv);
    }
    /**
     * Initializes a newly created mode.
     *
     * \@example
     *
     *     var mode = CBC.Encryptor.create(cipher, iv.words);
     * @param {?} cipher A block cipher instance.
     * @param {?=} iv The IV words.
     *
     * @return {?}
     */
    BlockCipherModeAlgorithm.prototype.init = /**
     * Initializes a newly created mode.
     *
     * \@example
     *
     *     var mode = CBC.Encryptor.create(cipher, iv.words);
     * @param {?} cipher A block cipher instance.
     * @param {?=} iv The IV words.
     *
     * @return {?}
     */
    function (cipher, iv) {
        this._cipher = cipher;
        this._iv = iv;
    };
    return BlockCipherModeAlgorithm;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var BlockCipherMode = /** @class */ (function () {
    function BlockCipherMode() {
    }
    /**
     * Creates this mode for encryption.
     *
     * \@example
     *
     *     var mode = CBC.createEncryptor(cipher, iv.words);
     * @param {?} cipher A block cipher instance.
     * @param {?} iv The IV words.
     *
     * @return {?}
     */
    BlockCipherMode.createEncryptor = /**
     * Creates this mode for encryption.
     *
     * \@example
     *
     *     var mode = CBC.createEncryptor(cipher, iv.words);
     * @param {?} cipher A block cipher instance.
     * @param {?} iv The IV words.
     *
     * @return {?}
     */
    function (cipher, iv) {
        // workaround for typescript not being able to create a abstract creator function directly
        var /** @type {?} */ encryptorClass = this.Encryptor;
        return new encryptorClass(cipher, iv);
    };
    /**
     * Creates this mode for decryption.
     *
     * \@example
     *
     *     var mode = CBC.createDecryptor(cipher, iv.words);
     * @param {?} cipher A block cipher instance.
     * @param {?} iv The IV words.
     *
     * @return {?}
     */
    BlockCipherMode.createDecryptor = /**
     * Creates this mode for decryption.
     *
     * \@example
     *
     *     var mode = CBC.createDecryptor(cipher, iv.words);
     * @param {?} cipher A block cipher instance.
     * @param {?} iv The IV words.
     *
     * @return {?}
     */
    function (cipher, iv) {
        // workaround for typescript not being able to create a abstract creator function directly
        var /** @type {?} */ decryptorClass = this.Decryptor;
        return new decryptorClass(cipher, iv);
    };
    BlockCipherMode.Encryptor = BlockCipherModeAlgorithm;
    BlockCipherMode.Decryptor = BlockCipherModeAlgorithm;
    return BlockCipherMode;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CBCEncryptor = /** @class */ (function (_super) {
    __extends(CBCEncryptor, _super);
    function CBCEncryptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Processes the data block at offset.
     *
     * \@example
     *
     *     mode.processBlock(data.words, offset);
     * @param {?} words The data words to operate on.
     * @param {?} offset The offset where the block starts.
     *
     * @return {?}
     */
    CBCEncryptor.prototype.processBlock = /**
     * Processes the data block at offset.
     *
     * \@example
     *
     *     mode.processBlock(data.words, offset);
     * @param {?} words The data words to operate on.
     * @param {?} offset The offset where the block starts.
     *
     * @return {?}
     */
    function (words, offset) {
        // Check if we have a blockSize
        if (this._cipher.cfg.blockSize === undefined) {
            throw new Error('missing blockSize in cipher config');
        }
        // XOR and encrypt
        this.xorBlock(words, offset, this._cipher.cfg.blockSize);
        this._cipher.encryptBlock(words, offset);
        // Remember this block to use with next block
        this._prevBlock = words.slice(offset, offset + this._cipher.cfg.blockSize);
    };
    /**
     * @param {?} words
     * @param {?} offset
     * @param {?} blockSize
     * @return {?}
     */
    CBCEncryptor.prototype.xorBlock = /**
     * @param {?} words
     * @param {?} offset
     * @param {?} blockSize
     * @return {?}
     */
    function (words, offset, blockSize) {
        // Choose mixing block
        var /** @type {?} */ block;
        if (this._iv) {
            block = this._iv;
            // Remove IV for subsequent blocks
            this._iv = undefined;
        }
        else {
            block = this._prevBlock;
        }
        // block should never be undefined but we want to make typescript happy
        if (block !== undefined) {
            // XOR blocks
            for (var /** @type {?} */ i = 0; i < blockSize; i++) {
                words[offset + i] ^= block[i];
            }
        }
    };
    return CBCEncryptor;
}(BlockCipherModeAlgorithm));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CBCDecryptor = /** @class */ (function (_super) {
    __extends(CBCDecryptor, _super);
    function CBCDecryptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Processes the data block at offset.
     *
     * \@example
     *
     *     mode.processBlock(data.words, offset);
     * @param {?} words The data words to operate on.
     * @param {?} offset The offset where the block starts.
     *
     * @return {?}
     */
    CBCDecryptor.prototype.processBlock = /**
     * Processes the data block at offset.
     *
     * \@example
     *
     *     mode.processBlock(data.words, offset);
     * @param {?} words The data words to operate on.
     * @param {?} offset The offset where the block starts.
     *
     * @return {?}
     */
    function (words, offset) {
        // Check if we have a blockSize
        if (this._cipher.cfg.blockSize === undefined) {
            throw new Error('missing blockSize in cipher config');
        }
        // Remember this block to use with next block
        var /** @type {?} */ thisBlock = words.slice(offset, offset + this._cipher.cfg.blockSize);
        // Decrypt and XOR
        this._cipher.decryptBlock(words, offset);
        this.xorBlock(words, offset, this._cipher.cfg.blockSize);
        // This block becomes the previous block
        this._prevBlock = thisBlock;
    };
    /**
     * @param {?} words
     * @param {?} offset
     * @param {?} blockSize
     * @return {?}
     */
    CBCDecryptor.prototype.xorBlock = /**
     * @param {?} words
     * @param {?} offset
     * @param {?} blockSize
     * @return {?}
     */
    function (words, offset, blockSize) {
        // Choose mixing block
        var /** @type {?} */ block;
        if (this._iv) {
            block = this._iv;
            // Remove IV for subsequent blocks
            this._iv = undefined;
        }
        else {
            block = this._prevBlock;
        }
        // block should never be undefined but we want to make typescript happy
        if (block !== undefined) {
            // XOR blocks
            for (var /** @type {?} */ i = 0; i < blockSize; i++) {
                words[offset + i] ^= block[i];
            }
        }
    };
    return CBCDecryptor;
}(BlockCipherModeAlgorithm));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Cipher Block Chaining mode.
 * @abstract
 */
var CBC = /** @class */ (function (_super) {
    __extends(CBC, _super);
    function CBC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CBC.Encryptor = CBCEncryptor;
    CBC.Decryptor = CBCDecryptor;
    return CBC;
}(BlockCipherMode));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PKCS7 = /** @class */ (function () {
    function PKCS7() {
    }
    /**
     * Pads data using the algorithm defined in PKCS #5/7.
     *
     * \@example
     *
     *     PKCS7.pad(wordArray, 4);
     * @param {?} data The data to pad.
     * @param {?} blockSize The multiple that the data should be padded to.
     *
     * @return {?}
     */
    PKCS7.pad = /**
     * Pads data using the algorithm defined in PKCS #5/7.
     *
     * \@example
     *
     *     PKCS7.pad(wordArray, 4);
     * @param {?} data The data to pad.
     * @param {?} blockSize The multiple that the data should be padded to.
     *
     * @return {?}
     */
    function (data, blockSize) {
        // Shortcut
        var /** @type {?} */ blockSizeBytes = blockSize * 4;
        // Count padding bytes
        var /** @type {?} */ nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
        // Create padding word
        var /** @type {?} */ paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;
        // Create padding
        var /** @type {?} */ paddingWords = [];
        for (var /** @type {?} */ i = 0; i < nPaddingBytes; i += 4) {
            paddingWords.push(paddingWord);
        }
        var /** @type {?} */ padding = new WordArray(paddingWords, nPaddingBytes);
        // Add padding
        data.concat(padding);
    };
    /**
     * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
     *
     * \@example
     *
     *     PKCS7.unpad(wordArray);
     * @param {?} data The data to unpad.
     *
     * @return {?}
     */
    PKCS7.unpad = /**
     * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
     *
     * \@example
     *
     *     PKCS7.unpad(wordArray);
     * @param {?} data The data to unpad.
     *
     * @return {?}
     */
    function (data) {
        // Get number of padding bytes from last byte
        var /** @type {?} */ nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
        // Remove padding
        data.sigBytes -= nPaddingBytes;
    };
    return PKCS7;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
BlockCipher = /** @class */ (function (_super) {
    __extends(BlockCipher, _super);
    function BlockCipher(xformMode, key, cfg) {
        return _super.call(this, xformMode, key, Object.assign({
            // default: 128 / 32
            blockSize: 4,
            mode: CBC,
            padding: PKCS7
        }, cfg)) || this;
    }
    /**
     * @return {?}
     */
    BlockCipher.prototype.reset = /**
     * @return {?}
     */
    function () {
        // Reset cipher
        _super.prototype.reset.call(this);
        // Check if we have a blockSize
        if (this.cfg.mode === undefined) {
            throw new Error('missing mode in config');
        }
        // Reset block mode
        var /** @type {?} */ modeCreator;
        if (this._xformMode === (/** @type {?} */ (this.constructor))._ENC_XFORM_MODE) {
            modeCreator = this.cfg.mode.createEncryptor;
        }
        else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
            modeCreator = this.cfg.mode.createDecryptor;
            // Keep at least one block in the buffer for unpadding
            this._minBufferSize = 1;
        }
        if (this._mode && this._mode.__creator === modeCreator) {
            this._mode.init(this, this.cfg.iv && this.cfg.iv.words);
        }
        else {
            this._mode = modeCreator.call(this.cfg.mode, this, this.cfg.iv && this.cfg.iv.words);
            this._mode.__creator = modeCreator;
        }
    };
    /**
     * @param {?} words
     * @param {?} offset
     * @return {?}
     */
    BlockCipher.prototype._doProcessBlock = /**
     * @param {?} words
     * @param {?} offset
     * @return {?}
     */
    function (words, offset) {
        this._mode.processBlock(words, offset);
    };
    /**
     * @return {?}
     */
    BlockCipher.prototype._doFinalize = /**
     * @return {?}
     */
    function () {
        // Check if we have a padding strategy
        if (this.cfg.padding === undefined) {
            throw new Error('missing padding in config');
        }
        // Finalize
        var /** @type {?} */ finalProcessedBlocks;
        if (this._xformMode === (/** @type {?} */ (this.constructor))._ENC_XFORM_MODE) {
            // Check if we have a blockSize
            if (this.cfg.blockSize === undefined) {
                throw new Error('missing blockSize in config');
            }
            // Pad data
            this.cfg.padding.pad(this._data, this.cfg.blockSize);
            // Process final blocks
            finalProcessedBlocks = this._process(!!'flush');
        }
        else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
            // Process final blocks
            finalProcessedBlocks = this._process(!!'flush');
            // Unpad data
            this.cfg.padding.unpad(finalProcessedBlocks);
        }
        return finalProcessedBlocks;
    };
    return BlockCipher;
}(Cipher));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Define lookup tables
var /** @type {?} */ SBOX = [];
var /** @type {?} */ INV_SBOX = [];
var /** @type {?} */ SUB_MIX_0 = [];
var /** @type {?} */ SUB_MIX_1 = [];
var /** @type {?} */ SUB_MIX_2 = [];
var /** @type {?} */ SUB_MIX_3 = [];
var /** @type {?} */ INV_SUB_MIX_0 = [];
var /** @type {?} */ INV_SUB_MIX_1 = [];
var /** @type {?} */ INV_SUB_MIX_2 = [];
var /** @type {?} */ INV_SUB_MIX_3 = [];
// Compute lookup tables
(function () {
    // Compute double table
    var /** @type {?} */ d = [];
    for (var /** @type {?} */ i = 0; i < 256; i++) {
        if (i < 128) {
            d[i] = i << 1;
        }
        else {
            d[i] = (i << 1) ^ 0x11b;
        }
    }
    // Walk GF(2^8)
    var /** @type {?} */ x = 0;
    var /** @type {?} */ xi = 0;
    for (var /** @type {?} */ i = 0; i < 256; i++) {
        // Compute sbox
        var /** @type {?} */ sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
        sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
        SBOX[x] = sx;
        INV_SBOX[sx] = x;
        // Compute multiplication
        var /** @type {?} */ x2 = d[x];
        var /** @type {?} */ x4 = d[x2];
        var /** @type {?} */ x8 = d[x4];
        // Compute sub bytes, mix columns tables
        var /** @type {?} */ t = (d[sx] * 0x101) ^ (sx * 0x1010100);
        SUB_MIX_0[x] = (t << 24) | (t >>> 8);
        SUB_MIX_1[x] = (t << 16) | (t >>> 16);
        SUB_MIX_2[x] = (t << 8) | (t >>> 24);
        SUB_MIX_3[x] = t;
        // Compute inv sub bytes, inv mix columns tables
        t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
        INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
        INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
        INV_SUB_MIX_2[sx] = (t << 8) | (t >>> 24);
        INV_SUB_MIX_3[sx] = t;
        // Compute next counter
        if (!x) {
            x = xi = 1;
        }
        else {
            x = x2 ^ d[d[d[x8 ^ x2]]];
            xi ^= d[d[xi]];
        }
    }
}());
// Precomputed Rcon lookup
var /** @type {?} */ RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
var AES = /** @class */ (function (_super) {
    __extends(AES, _super);
    function AES(xformMode, key, cfg) {
        return _super.call(this, xformMode, key, cfg) || this;
    }
    /**
     * @return {?}
     */
    AES.prototype.reset = /**
     * @return {?}
     */
    function () {
        // reset core values
        _super.prototype.reset.call(this);
        // Skip reset of nRounds has been set before and key did not change
        if (this._nRounds && this._keyPriorReset === this._key) {
            return;
        }
        // Shortcuts
        var /** @type {?} */ key = this._keyPriorReset = this._key;
        var /** @type {?} */ keyWords = key.words;
        var /** @type {?} */ keySize = key.sigBytes / 4;
        // Compute number of rounds
        var /** @type {?} */ nRounds = this._nRounds = keySize + 6;
        // Compute number of key schedule rows
        var /** @type {?} */ ksRows = (nRounds + 1) * 4;
        // Compute key schedule
        var /** @type {?} */ keySchedule = this._keySchedule = [];
        for (var /** @type {?} */ ksRow = 0; ksRow < ksRows; ksRow++) {
            if (ksRow < keySize) {
                keySchedule[ksRow] = keyWords[ksRow];
            }
            else {
                var /** @type {?} */ t = keySchedule[ksRow - 1];
                if (!(ksRow % keySize)) {
                    // Rot word
                    t = (t << 8) | (t >>> 24);
                    // Sub word
                    t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                    // Mix Rcon
                    t ^= RCON[(ksRow / keySize) | 0] << 24;
                }
                else if (keySize > 6 && ksRow % keySize === 4) {
                    // Sub word
                    t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
                }
                keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
            }
        }
        // Compute inv key schedule
        var /** @type {?} */ invKeySchedule = this._invKeySchedule = [];
        for (var /** @type {?} */ invKsRow = 0; invKsRow < ksRows; invKsRow++) {
            var /** @type {?} */ ksRow = ksRows - invKsRow;
            var /** @type {?} */ t = void 0;
            if (invKsRow % 4) {
                t = keySchedule[ksRow];
            }
            else {
                t = keySchedule[ksRow - 4];
            }
            if (invKsRow < 4 || ksRow <= 4) {
                invKeySchedule[invKsRow] = t;
            }
            else {
                invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
                    INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
            }
        }
    };
    /**
     * @param {?} M
     * @param {?} offset
     * @return {?}
     */
    AES.prototype.encryptBlock = /**
     * @param {?} M
     * @param {?} offset
     * @return {?}
     */
    function (M, offset) {
        this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
    };
    /**
     * @param {?} M
     * @param {?} offset
     * @return {?}
     */
    AES.prototype.decryptBlock = /**
     * @param {?} M
     * @param {?} offset
     * @return {?}
     */
    function (M, offset) {
        // Swap 2nd and 4th rows
        var /** @type {?} */ t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
        this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
        // Inv swap 2nd and 4th rows
        t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
    };
    /**
     * @param {?} M
     * @param {?} offset
     * @param {?} keySchedule
     * @param {?} sub_mix_0
     * @param {?} sub_mix_1
     * @param {?} sub_mix_2
     * @param {?} sub_mix_3
     * @param {?} sbox
     * @return {?}
     */
    AES.prototype._doCryptBlock = /**
     * @param {?} M
     * @param {?} offset
     * @param {?} keySchedule
     * @param {?} sub_mix_0
     * @param {?} sub_mix_1
     * @param {?} sub_mix_2
     * @param {?} sub_mix_3
     * @param {?} sbox
     * @return {?}
     */
    function (M, offset, keySchedule, sub_mix_0, sub_mix_1, sub_mix_2, sub_mix_3, sbox) {
        // Get input, add round key
        var /** @type {?} */ s0 = M[offset] ^ keySchedule[0];
        var /** @type {?} */ s1 = M[offset + 1] ^ keySchedule[1];
        var /** @type {?} */ s2 = M[offset + 2] ^ keySchedule[2];
        var /** @type {?} */ s3 = M[offset + 3] ^ keySchedule[3];
        // Key schedule row counter
        var /** @type {?} */ ksRow = 4;
        // Rounds
        for (var /** @type {?} */ round = 1; round < this._nRounds; round++) {
            // Shift rows, sub bytes, mix columns, add round key
            var /** @type {?} */ t0 = sub_mix_0[s0 >>> 24] ^ sub_mix_1[(s1 >>> 16) & 0xff] ^ sub_mix_2[(s2 >>> 8) & 0xff] ^ sub_mix_3[s3 & 0xff] ^
                keySchedule[ksRow++];
            var /** @type {?} */ t1 = sub_mix_0[s1 >>> 24] ^ sub_mix_1[(s2 >>> 16) & 0xff] ^ sub_mix_2[(s3 >>> 8) & 0xff] ^ sub_mix_3[s0 & 0xff] ^
                keySchedule[ksRow++];
            var /** @type {?} */ t2 = sub_mix_0[s2 >>> 24] ^ sub_mix_1[(s3 >>> 16) & 0xff] ^ sub_mix_2[(s0 >>> 8) & 0xff] ^ sub_mix_3[s1 & 0xff] ^
                keySchedule[ksRow++];
            var /** @type {?} */ t3 = sub_mix_0[s3 >>> 24] ^ sub_mix_1[(s0 >>> 16) & 0xff] ^ sub_mix_2[(s1 >>> 8) & 0xff] ^ sub_mix_3[s2 & 0xff] ^
                keySchedule[ksRow++];
            // Update state
            s0 = t0;
            s1 = t1;
            s2 = t2;
            s3 = t3;
        }
        // Shift rows, sub bytes, add round key
        var /** @type {?} */ t0g = ((sbox[s0 >>> 24] << 24) | (sbox[(s1 >>> 16) & 0xff] << 16) | (sbox[(s2 >>> 8) & 0xff] << 8) | sbox[s3 & 0xff]) ^
            keySchedule[ksRow++];
        var /** @type {?} */ t1g = ((sbox[s1 >>> 24] << 24) | (sbox[(s2 >>> 16) & 0xff] << 16) | (sbox[(s3 >>> 8) & 0xff] << 8) | sbox[s0 & 0xff]) ^
            keySchedule[ksRow++];
        var /** @type {?} */ t2g = ((sbox[s2 >>> 24] << 24) | (sbox[(s3 >>> 16) & 0xff] << 16) | (sbox[(s0 >>> 8) & 0xff] << 8) | sbox[s1 & 0xff]) ^
            keySchedule[ksRow++];
        var /** @type {?} */ t3g = ((sbox[s3 >>> 24] << 24) | (sbox[(s0 >>> 16) & 0xff] << 16) | (sbox[(s1 >>> 8) & 0xff] << 8) | sbox[s2 & 0xff]) ^
            keySchedule[ksRow++];
        // Set output
        M[offset] = t0g;
        M[offset + 1] = t1g;
        M[offset + 2] = t2g;
        M[offset + 3] = t3g;
    };
    AES.keySize = 8;
    return AES;
}(BlockCipher));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Initialization and round constants tables
var /** @type {?} */ H = [];
var /** @type {?} */ K = [];
// Reusable object
var /** @type {?} */ W = [];
var SHA256 = /** @class */ (function (_super) {
    __extends(SHA256, _super);
    function SHA256() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    SHA256.prototype.reset = /**
     * @return {?}
     */
    function () {
        // reset core values
        _super.prototype.reset.call(this);
        this._hash = new WordArray(H.slice(0));
    };
    /**
     * @param {?} M
     * @param {?} offset
     * @return {?}
     */
    SHA256.prototype._doProcessBlock = /**
     * @param {?} M
     * @param {?} offset
     * @return {?}
     */
    function (M, offset) {
        // Shortcut
        var /** @type {?} */ Hl = this._hash.words;
        // Working variables
        var /** @type {?} */ a = Hl[0];
        var /** @type {?} */ b = Hl[1];
        var /** @type {?} */ c = Hl[2];
        var /** @type {?} */ d = Hl[3];
        var /** @type {?} */ e = Hl[4];
        var /** @type {?} */ f = Hl[5];
        var /** @type {?} */ g = Hl[6];
        var /** @type {?} */ h = Hl[7];
        // Computation
        for (var /** @type {?} */ i = 0; i < 64; i++) {
            if (i < 16) {
                W[i] = M[offset + i] | 0;
            }
            else {
                var /** @type {?} */ gamma0x = W[i - 15];
                var /** @type {?} */ gamma0 = ((gamma0x << 25) | (gamma0x >>> 7)) ^
                    ((gamma0x << 14) | (gamma0x >>> 18)) ^
                    (gamma0x >>> 3);
                var /** @type {?} */ gamma1x = W[i - 2];
                var /** @type {?} */ gamma1 = ((gamma1x << 15) | (gamma1x >>> 17)) ^
                    ((gamma1x << 13) | (gamma1x >>> 19)) ^
                    (gamma1x >>> 10);
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
            }
            var /** @type {?} */ ch = (e & f) ^ (~e & g);
            var /** @type {?} */ maj = (a & b) ^ (a & c) ^ (b & c);
            var /** @type {?} */ sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
            var /** @type {?} */ sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));
            var /** @type {?} */ t1 = h + sigma1 + ch + K[i] + W[i];
            var /** @type {?} */ t2 = sigma0 + maj;
            h = g;
            g = f;
            f = e;
            e = (d + t1) | 0;
            d = c;
            c = b;
            b = a;
            a = (t1 + t2) | 0;
        }
        // Intermediate hash value
        Hl[0] = (Hl[0] + a) | 0;
        Hl[1] = (Hl[1] + b) | 0;
        Hl[2] = (Hl[2] + c) | 0;
        Hl[3] = (Hl[3] + d) | 0;
        Hl[4] = (Hl[4] + e) | 0;
        Hl[5] = (Hl[5] + f) | 0;
        Hl[6] = (Hl[6] + g) | 0;
        Hl[7] = (Hl[7] + h) | 0;
    };
    /**
     * @return {?}
     */
    SHA256.prototype._doFinalize = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ nBitsTotal = this._nDataBytes * 8;
        var /** @type {?} */ nBitsLeft = this._data.sigBytes * 8;
        // Add padding
        this._data.words[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
        this._data.words[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
        this._data.words[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
        this._data.sigBytes = this._data.words.length * 4;
        // Hash final blocks
        this._process();
        // Return final computed hash
        return this._hash;
    };
    return SHA256;
}(Hasher));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ECBEncryptor = /** @class */ (function (_super) {
    __extends(ECBEncryptor, _super);
    function ECBEncryptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Processes the data block at offset.
     *
     * \@example
     *
     *     mode.processBlock(data.words, offset);
     * @param {?} words The data words to operate on.
     * @param {?} offset The offset where the block starts.
     *
     * @return {?}
     */
    ECBEncryptor.prototype.processBlock = /**
     * Processes the data block at offset.
     *
     * \@example
     *
     *     mode.processBlock(data.words, offset);
     * @param {?} words The data words to operate on.
     * @param {?} offset The offset where the block starts.
     *
     * @return {?}
     */
    function (words, offset) {
        this._cipher.encryptBlock(words, offset);
    };
    return ECBEncryptor;
}(BlockCipherModeAlgorithm));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ECBDecryptor = /** @class */ (function (_super) {
    __extends(ECBDecryptor, _super);
    function ECBDecryptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Processes the data block at offset.
     *
     * \@example
     *
     *     mode.processBlock(data.words, offset);
     * @param {?} words The data words to operate on.
     * @param {?} offset The offset where the block starts.
     *
     * @return {?}
     */
    ECBDecryptor.prototype.processBlock = /**
     * Processes the data block at offset.
     *
     * \@example
     *
     *     mode.processBlock(data.words, offset);
     * @param {?} words The data words to operate on.
     * @param {?} offset The offset where the block starts.
     *
     * @return {?}
     */
    function (words, offset) {
        this._cipher.decryptBlock(words, offset);
    };
    return ECBDecryptor;
}(BlockCipherModeAlgorithm));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Cipher Block Chaining mode.
 * @abstract
 */
var ECB = /** @class */ (function (_super) {
    __extends(ECB, _super);
    function ECB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ECB.Encryptor = ECBEncryptor;
    ECB.Decryptor = ECBDecryptor;
    return ECB;
}(BlockCipherMode));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ lib = {
    BlockCipher: BlockCipher,
    WordArray: WordArray,
    CipherParams: CipherParams,
    Hasher: Hasher,
    SerializableCipher: SerializableCipher,
    PasswordBasedCipher: PasswordBasedCipher
};
var /** @type {?} */ algo = {
    AES: AES,
    SHA256: SHA256
};
var /** @type {?} */ enc = {
    Utf8: Utf8,
    Hex: Hex
};
// HELPERS /////////////////////////////////////////////////////////////////////////////////////////
var /** @type {?} */ AES$1 = lib.BlockCipher._createHelper(algo.AES);
var /** @type {?} */ SHA256$1 = lib.Hasher._createHelper(algo.SHA256);

var CryptoHelper = /** @class */ (function () {
    function CryptoHelper() {
    }
    CryptoHelper.encrypt = function (data, secretKey) {
        var originalText = JSON.stringify(data);
        var cipherText = AES$1.encrypt(originalText, secretKey).toString();
        return cipherText;
    };
    CryptoHelper.decrypt = function (cipherText, secretKey) {
        var bytes = AES$1.decrypt(cipherText, secretKey);
        var originalText = bytes.toString(enc.Utf8);
        var data = JSON.parse(originalText);
        return data;
    };
    CryptoHelper.randomString = function (stringLength) {
        if (!stringLength) {
            stringLength = 128;
        }
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
        var randomString = '';
        for (var i = 0; i < stringLength; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomString += chars.substring(rnum, rnum + 1);
        }
        return randomString;
    };
    return CryptoHelper;
}());

// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
var Microblink = /** @class */ (function () {
    function Microblink() {
        this.recognizers = [];
        this.authorizationHeader = '';
        this.listeners = [];
        this.scanFrameQueue = [];
        this.API = new MicroblinkApi();
    }
    /**
     * Terminate all active requests (pending responses)
     */
    Microblink.prototype.TerminateActiveRequests = function () {
      console.log('TerminateActiveRequests');
        this.API.TerminateAll();
        // Clear scan frame queue if it is not empty
        this.scanFrameQueue = [];
    };
    /**
     * Register global success and/or error listener(s)
     */
    Microblink.prototype.RegisterListener = function (scanListener) {
      console.log('RegisterListener');
        this.listeners.push(scanListener);
    };
    /**
     * Scan file and get result from subscribed observable
     */
    Microblink.prototype.ScanFile = function (scanInputFile, uploadProgress) {
      console.log(scanInputFile, uploadProgress)
        return this.scan(scanInputFile.blob, true);
    };
    /**
     * Push file to SCAN queue, global listener(s) will handle the result
     */
    Microblink.prototype.SendFile = function (scanInputFile, uploadProgress) {
      console.log(scanInputFile, uploadProgress)
        // Call observable with empty callback because global listener will handle result
        // NOTE: error callback should be defined to handle Uncaught exception
        // tslint:disable-next-line:no-empty
        this.scan(scanInputFile.blob, true, uploadProgress).subscribe(function () { }, function () { });
    };
    /**
     * Push video frame to SCAN queue, global listener(s) will handle the result
     */
    Microblink.prototype.SendFrame = function (scanInputFrame) {
      console.log(scanInputFrame)
        // Get frame quality estimatior
        var frameQuality = FrameHelper.getFrameQuality(scanInputFrame.pixelData);
        // Add the frame with quality to the scan queue
        this.scanFrameQueue.push({ frame: scanInputFrame, quality: frameQuality });
        // Skip finding of best frame if queue is not full with enough number of frames
        if (this.scanFrameQueue.length < Microblink.fromHowManyFramesQualityCalculateBestFrame) {
            return;
        }
        // Find video frame with best quality
        var bestQuality = 0;
        var bestFrame;
        this.scanFrameQueue.forEach(function (scanFrame) {
            if (scanFrame.quality > bestQuality) {
                bestQuality = scanFrame.quality;
                bestFrame = scanFrame.frame;
            }
        });
        // Clear scan frame queue
        this.scanFrameQueue = [];
        console.log(bestFrame)
        if (bestFrame !== undefined) {
            // Call observable with empty callback because global listener will handle result
            // NOTE: error callback should be defined to handle Uncaught exception
            // tslint:disable-next-line:no-empty
            this.scan(bestFrame.blob, false).subscribe(function () { }, function () { });
        }
    };
    /**
     * Set recognizers which will be used in next SCAN(s)
     */
    Microblink.prototype.SetRecognizers = function (recognizers) {
      console.log('SetRecognizers');
        this.recognizers = recognizers;
    };
    /**
     * Get defined recognizers
     */
    Microblink.prototype.GetRecognizers = function () {
      console.log('GetRecognizers');
        return this.recognizers;
    };
    /**
     * Set authorization header value to authorize with https://api.microblink.com/recognize
     */
    Microblink.prototype.SetAuthorization = function (authorizationHeader) {
      console.log(authorizationHeader);
        this.authorizationHeader = authorizationHeader;
        this.API.SetAuthorization(authorizationHeader);
    };
    /**
     * Get defined authorization header
     */
    Microblink.prototype.GetAuthorization = function () {
      console.log('GetAuthorization');
        return this.authorizationHeader;
    };
    /**
     * Change export images flag for next request
     * @param isExportImagesEnabled is flag which describes does API should return extracted images in next response
     */
    Microblink.prototype.SetExportImages = function (isExportImagesEnabled) {
      console.log('SetExportImages');
        this.API.SetExportImages(isExportImagesEnabled);
    };
    /**
     * Set endpoint for next SCAN(s)
     * Default value is https://api.microblink.com/recognize
     * Endpoint should be changed when backend proxy which is credentials keeper is using as proxy between
     * Microblink SaaS API and frontend application which uses this library.
     */
    Microblink.prototype.SetEndpoint = function (endpoint) {
      console.log('SetEndpoint');
        this.API.SetEndpoint(endpoint);
    };
    /**
     * Set user identificator which will be stored with uploaded image
     * @param userId is any string which unique identifies user who use SDK and upload any image to API
     */
    Microblink.prototype.SetUserId = function (userId) {
      console.log('SetUserId');
        this.API.SetUserId(userId);
    };
    /**
     * When Authorization is not set it is available to disable persiting of uploaded data, by default it is enabled
     * this should be disabled for every page where GDPR is not implemented and this is ability to disable data persisting
     * on some demo pages
     * @param isEnabled is flag which describes should or should not API persist uploaded data, be default it is enabled
     */
    Microblink.prototype.SetIsDataPersistingEnabled = function (isEnabled) {
      console.log('SetIsDataPersistingEnabled');
        this.API.SetIsDataPersistingEnabled(isEnabled);
    };
    /**
     * Check is all requirement for desktop-to-mobile feature are available
     */
    Microblink.prototype.IsDesktopToMobileAvailable = function () {
      console.log('IsDesktopToMobileAvailable');
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.isDesktopToMobileAvailable()];
            });
        });
    };
    /**
     * Create object for exchange data for scan between devices
     * @param data is object with optional data which will be added to the ScanExchanger object
     */
    Microblink.prototype.CreateScanExchanger = function (data, onChange) {
      console.log(data, onChange);
        return __awaiter(this, void 0, void 0, function () {
            var secretKey, scanAsPromise, scan, unsubscribe;
            var _this = this;
            console.log(_this, '_this');
            return __generator(this, function (_a) {
              console.log(_a,'_a');
                switch (_a.label) {
                    case 0:
                        // Get recognizers and authorizationHeader from remote request
                        data.recognizers = this.recognizers;
                        data.authorizationHeader = this.authorizationHeader; // it is encrypted
                        console.log(data.authorizationHeader);
                        secretKey = CryptoHelper.randomString(32);
                        // Key should be part of object during creating shortUrl, Firebase Function will read key, generate link
                        // and delete key set in plain string
                        data.key = secretKey;
                        // Encrypt authorizationHeader
                        data.authorizationHeader = CryptoHelper.encrypt(data.authorizationHeader, secretKey);
                        scanAsPromise = ScanExchangeHelper.createScanExchanger(data);
                        return [4 /*yield*/, scanAsPromise
                            // Listen for data from Firestore
                        ];
                    case 1:
                        scan = _a.sent();
                        unsubscribe = scan.onSnapshot(function (scanDoc) { return __awaiter(_this, void 0, void 0, function () {
                          console.log('onSnapshot');
                          console.log(scanDoc.data())
                            var scanDocData, qrCodeAsBase64, scanResultDec;
                            return __generator(this, function (_a) {
                              console.log(_a.label);
                                switch (_a.label) {
                                    case 0:
                                        scanDocData = scanDoc.data();
                                        if (!(scanDocData.status === ScanExchangerCodes.Step02_ExchangeLinkIsGenerated &&
                                            scanDocData.shortLink)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, ScanExchangeHelper.generateQRCode(scanDocData.shortLink)];
                                    case 1:
                                        qrCodeAsBase64 = _a.sent();
                                        scanDocData.qrCodeAsBase64 = qrCodeAsBase64;
                                        console.log(scanDocData.qrCodeAsBase64);
                                        // var xhr = new XMLHttpRequest();
                                        // xhr.open('POST', _this.API.endpoint + '/recognize/execute');
                                        // xhr.setRequestHeader('Content-Type', 'application/json');
                                        // // When Authorization header is not set results will be masked on server-side
                                        // // if (_this.isAuthorizationHeaderValid) {
                                        //     xhr.setRequestHeader('Authorization', _this.authorizationHeader);
                                        // // }
                                        // xhr.addEventListener('readystatechange', function () {
                                        //   console.log('llll');
                                        // })
                                        _a.label = 2;
                                    case 2:
                                        if (scanDocData.status === ScanExchangerCodes.Step07_ResultIsAvailable &&
                                            scanDocData.result) {
                                            scanResultDec = CryptoHelper.decrypt(scanDocData.result, secretKey);
                                            // Notify success listeners
                                            this.notifyOnSuccessListeners({ result: scanResultDec, sourceBlob: null }, true);
                                            // After successfully read 'result', remove it from the Firestore
                                            scan.update({
                                                result: null
                                            });
                                            // External integrator should decide when to unsubscribe!
                                            // On Successful results, stop listening to changes
                                            // unsubscribe()
                                        }
                                        // Error handling
                                        if (scanDocData.status === ScanExchangerCodes.ErrorHappened && scanDocData.error) {
                                            // Notify error listeners
                                            this.notifyOnErrorListeners(scanDocData.error);
                                        }
                                        // Send onUpdate callback
                                        onChange(scanDocData);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        // Return scan object subscription to enable external unsubscribe
                        return [2 /*return*/, unsubscribe];
                }
            });
        });
    };
    Microblink.prototype.isDesktopToMobileAvailable = function () {
      console.log('isDesktopToMobileAvailable');
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // Try to fetch any document
                        return [4 /*yield*/, firebase
                                .app()
                                .firestore()
                                .doc('scans/any-document')
                                .get()];
                    case 1:
                        // Try to fetch any document
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        // Only if Firestore is not available then desktop-to-mobile is not available
                        if (err_1.name === 'FirebaseError' && err_1.code === 'unavailable') {
                            console.error('Microblink.SDK: feature desktop-to-mobile is not available because connection to the Firebase.Firestore is not available!');
                            return [2 /*return*/, false];
                        }
                        else {
                            console.log('IsDesktopToMobileAvailable.error', err_1);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Notify all global listeners when success scan is complete
     */
    Microblink.prototype.notifyOnSuccessListeners = function (scanOutput, isFileScan) {
      console.log('notifyOnSuccessListeners');
        var data = scanOutput.result.data;
        var isSuccessfulResponse = false;
        // check if it is fetched data array of results
        if (Array.isArray(data)) {
            data.forEach(function (resultItem) {
                if (resultItem.result) {
                    isSuccessfulResponse = true;
                }
            });
        }
        else {
            // otherwise it is returned result as object
            var result = data.result;
            if (result) {
                isSuccessfulResponse = true;
            }
        }
        // when success response is received then terminate active requests and return results
        if (isSuccessfulResponse || isFileScan) {
            // Active requests can only exists if it is video frame scan
            if (!isFileScan) {
                this.TerminateActiveRequests();
            }
            this.listeners.forEach(function (listener) {
                if (listener.onScanSuccess) {
                    listener.onScanSuccess(scanOutput);
                }
            });
        }
    };
    /**
     * Notify all global listeners when error happens, HTTP response status code is not equal to 200 or
     * base64 encode failed
     */
    Microblink.prototype.notifyOnErrorListeners = function (err) {
      console.log('notifyOnErrorListeners');
        this.TerminateActiveRequests();
        // Make silent if JSON is not prasable because this error will happen when request is aborted
        if (err.code === StatusCodes.ResultIsNotValidJSON) {
            return;
        }
        this.listeners.forEach(function (listener) {
            if (listener.onScanError) {
                listener.onScanError(err);
            }
        });
    };
    /**
     * Execute scan on Microblink API service
     */
    Microblink.prototype.scan = function (blob, isFileScan, uploadProgress) {
      console.log('scan');
      // console.log(blob, isFileScan, uploadProgress);
        var _this = this;
        console.log(_this);
        console.log(Observable_2);
        return Observable_2.create(function (observer) {
          console.log(observer);
            blobToBase64String(blob)
                .then(function (blobAsBase64String) {
                _this.API.Recognize(_this.recognizers, blobAsBase64String, uploadProgress).subscribe(function (result) {
                    var output = { sourceBlob: blob, result: result };
                    _this.notifyOnSuccessListeners(output, isFileScan);
                    observer.next(output);
                    observer.complete();
                }, function (err) {
                    if (err) {
                        _this.notifyOnErrorListeners(err);
                        observer.error(err);
                    }
                });
            })
                .catch(function (err) {
                _this.notifyOnErrorListeners(err);
                observer.error(err);
            });
        });
    };
    Microblink.fromHowManyFramesQualityCalculateBestFrame = 5;
    return Microblink;
}());

/**
 * Helper for detecting ScanInputFrame type
 */
function IsScanInputFrame(scanInput) {
  console.log('IsScanInputFrame');
    return !!scanInput.pixelData;
}
/**
 * NOTE: This is public SDK API, rename of this functions will produce backward incompatible API!
 */
var SDK;
(function (SDK_1) {
  console.log(SDK_1,'SDK_1');
    var SDK = new Microblink();
    /**
     * Scan image and get result from subscribed observable
     */
    function ScanImage(scanInput, uploadProgress) {
      console.log(scanInput, uploadProgress)
        return SDK.ScanFile(scanInput, uploadProgress);
    }
    SDK_1.ScanImage = ScanImage;
    /**
     * Register global listener success and/or error callback
     */
    function RegisterListener(scanListener) {
        SDK.RegisterListener(scanListener);
    }
    SDK_1.RegisterListener = RegisterListener;
    /**
     * Push image (file or video frame) to scanning queue, results will be handled by global listener(s)
     */
    function SendImage(scanInput, uploadProgress) {
      console.log(scanInput, uploadProgress)
        if (IsScanInputFrame(scanInput)) {
            return SDK.SendFrame(scanInput);
        }
        else {
            return SDK.SendFile(scanInput, uploadProgress);
        }
    }
    SDK_1.SendImage = SendImage;
    /**
     * Set recognizers which will be used in next request
     */
    function SetRecognizers(recognizers) {
      console.log('SetRecognizers');
        SDK.SetRecognizers(recognizers);
    }
    SDK_1.SetRecognizers = SetRecognizers;
    /**
     * Get recognizers which are defined in the SDK
     */
    // export function GetRecognizers(): string | string[] {
    //   return SDK.GetRecognizers()
    // }
    /**
     * Set authorization header which will be used in next request
     * @param authorizationHeader is authorization header with apiKey and apiSecret which should be generated
     * here: https://microblink.com/customer/api
     */
    function SetAuthorization(authorizationHeader) {
      console.log('SetAuthorization');
        SDK.SetAuthorization(authorizationHeader);
    }
    SDK_1.SetAuthorization = SetAuthorization;
    /**
     * Get authorization header which is defined in the SDK
     */
    // export function GetAuthorization(): string {
    //   return SDK.GetAuthorization()
    // }
    /**
     * Change export images flag for next request
     * @param isExportImagesEnabled is flag which describes does API should return extracted images in next response
     */
    function SetExportImages(isExportImagesEnabled) {
      console.log('SetExportImages');
        SDK.SetExportImages(isExportImagesEnabled);
    }
    SDK_1.SetExportImages = SetExportImages;
    /**
     * Set HTTP API endpoint for next request
     */
    function SetEndpoint(endpoint) {
      console.log('SetEndpoint');
        SDK.SetEndpoint(endpoint);
    }
    SDK_1.SetEndpoint = SetEndpoint;
    /**
     * Terminate all queued HTTP requests.
     * This is useful when images are sending from camera video stream in ms time periods and when successful
     * result is received then all pending requests could be terminated, this should be primary used for application
     * performance improvements, to break all HTTP connections which will return redundant results
     */
    function TerminateRequest() {
      console.log('TerminateRequest');
        SDK.TerminateActiveRequests();
    }
    SDK_1.TerminateRequest = TerminateRequest;
    /**
     * Set unique user ID which will be stored with uploaded image to associate image with user who uploaded the image
     * @param userId is string user identificator, recommended it to be an user's email because when delete request is sent by this email, all images associated with this email will be permanentally removed if it is stored on upload, not every image will be stored, this depends on other API key options
     */
    function SetUserId(userId) {
      console.log('SetUserId');
        SDK.SetUserId(userId);
    }
    SDK_1.SetUserId = SetUserId;
    /**
     * When Authorization is not set it is available to disable persiting of uploaded data, by default it is enabled
     * this should be disabled for every page where GDPR is not implemented and this is ability to disable data persisting
     * on some demo pages
     * @param isEnabled is flag which describes should or should not API persist uploaded data, be default it is enabled
     */
    function SetIsDataPersistingEnabled(isEnabled) {
      console.log('SetIsDataPersistingEnabled');
        SDK.SetIsDataPersistingEnabled(isEnabled);
    }
    SDK_1.SetIsDataPersistingEnabled = SetIsDataPersistingEnabled;
    /**
     * Get all SDK status codes
     */
    SDK_1.StatusCodes = StatusCodes;
    /**
     * Create object to exchange data between devices
     * @param data is object with ScanExchanger structure
     */
    function CreateScanExchanger(data, onUpdate) {
      console.log(data, onUpdate);
        if (data === void 0) { data = {}; }
        return SDK.CreateScanExchanger(data, onUpdate);
    }
    SDK_1.CreateScanExchanger = CreateScanExchanger;
    /**
     * Get all Scan exchanger status codes
     */
    SDK_1.ScanExchangerCodes = ScanExchangerCodes;
    /**
     * Decrypt protected object
     * @param dataEncrypted is encrypted object as string
     * @param key is secret key with which data will be decrypted
     */
    function Decrypt(dataEncrypted, key) {
      console.log('Decrypt');
        return CryptoHelper.decrypt(dataEncrypted, key);
    }
    SDK_1.Decrypt = Decrypt;
    /**
     * Protect plain object
     * @param data is plain object
     * @param key us secret key with which data will be encrypted
     */
    function Encrypt(data, key) {
      console.log('Encrypt');
        return CryptoHelper.encrypt(data, key);
    }
    SDK_1.Encrypt = Encrypt;
    /**
     * Check if all requirements for desktop-to-mobile feature are available
     */
    function IsDesktopToMobileAvailable() {
      console.log('IsDesktopToMobileAvailable');
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, SDK.IsDesktopToMobileAvailable()];
            });
        });
    }
    SDK_1.IsDesktopToMobileAvailable = IsDesktopToMobileAvailable;
})(SDK || (SDK = {}));

var templateHtml = "<style>:host{all:initial;contain:content;display:block;width:100%;height:100%;box-sizing:border-box;border-style:solid;--mb-widget-font-family:Helvetica,Tahoma,Verdana,Arial,sans-serif;--mb-default-font-color:black;--mb-btn-background-color:black;--mb-btn-background-color-hover:dimgrey;--mb-btn-flip-image-color:black;--mb-btn-cancel-color:black;--mb-btn-webcam-confirm-color:black;--mb-btn-webcam-retake-color:black;--mb-card-layout-border-color:black;--mb-json-color-null:#ff00ff;--mb-json-color-number:#ffc000;--mb-json-color-string:#008000;--mb-json-color-boolean:#0000FF;--mb-json-color-key:#ff0000;--mb-hem:1rem;font-family:var(--mb-widget-font-family);border-width:var(--mb-widget-border-width,0);border-color:var(--mb-widget-border-color,#000);font-size:var(--mb-hem);background-color:var(--mb-widget-background-color,transparent)}.container{height:100%;width:100%;margin:auto;box-sizing:border-box;position:relative}.font-0{font-size:0}.font-1{font-size:var(--mb-hem)}button{font-family:inherit;cursor:pointer;font-size:calc(.9 * var(--mb-hem));font-weight:500;line-height:1;padding:.7222222222em 0;user-select:none;border:1px solid transparent;outline:0;color:var(--mb-btn-font-color,#fff);background-color:var(--mb-btn-background-color);transition:color .15s ease-in-out,background-color .15s ease-in-out;width:calc(7.5 * var(--mb-hem));border-radius:var(--mb-btn-border-radius,5px)}button:hover{background-color:var(--mb-btn-background-color-hover)}#cameraBtnSeparator{margin:10px 0}button#flipBtn{background-color:transparent;background-size:auto;position:absolute;bottom:var(--mb-hem);right:var(--mb-hem);margin:0;padding:0;width:50px;height:50px;display:flex;justify-content:center;align-items:center}#flipBtn svg path{stroke:var(--mb-btn-flip-image-color)}#flipBtn svg .fill{fill:var(--mb-btn-flip-image-color)}button#cancelBtnLocalCamera,button#cancelBtnRemoteCamera{background-color:transparent;background-size:auto;position:absolute;top:var(--mb-hem);right:var(--mb-hem);margin:0;padding:0;width:50px;height:50px;display:flex;justify-content:center;align-items:center}#cancelBtnLocalCamera svg path,#cancelBtnRemoteCamera svg path{stroke:var(--mb-btn-cancel-color);fill:var(--mb-btn-cancel-color)}.intro{text-align:center}.inline{display:inline-block}.intro .inline{text-align:center;width:50%;height:100%;flex-direction:column;padding:0 10%;vertical-align:top;box-sizing:border-box}.tabs>.container{height:calc(100% - 56px)}.tab-container{background:var(--mb-tabs-background-color,#000);color:var(--mb-tabs-font-color,#fff);height:56px;display:none;margin:0;padding:0}.tabs .tab-container{display:flex;justify-content:space-around}.tab{text-align:center;line-height:56px;cursor:pointer}.tab label{display:inline-block;margin:auto;padding:0 calc(1.25 * var(--mb-hem));box-sizing:border-box;border-bottom:var(--mb-tabs-border-width,4px) solid transparent;height:56px;user-select:none;cursor:inherit}.tab.active label{color:var(--mb-tabs-active-color,var(--mb-tabs-hover-color,#ddd));border-bottom-color:var(--mb-tabs-active-color,var(--mb-tabs-hover-color,#ddd))}.tab:hover label{color:var(--mb-tabs-hover-color,var(--mb-tabs-active-color,#ddd));border-bottom-color:var(--mb-tabs-hover-color,var(--mb-tabs-active-color,#ddd))}.flex-center{display:flex;align-items:center;justify-content:center}.intro .flex-center{flex-direction:column;height:100%}.inline p{margin:0}.intro-label{color:var(--mb-alt-font-color,#000)}.intro .inline p{flex-basis:calc(3 * 1.2 * var(--mb-hem));line-height:1.2;margin-bottom:calc(50px - 1.2 * var(--mb-hem))}.intro .inline+.inline{border-image:linear-gradient(to bottom,transparent 15%,var(--mb-widget-border-color,#bdbdbd) 15%,var(--mb-widget-border-color,#bdbdbd) 85%,transparent 85%) 1;border-width:0 0 0 1px;border-style:solid}.intro .inline:only-child{width:100%}.dropzone *{pointer-events:none}.dropzone button{pointer-events:auto}.draghover{background-color:var(--mb-dropzone-hover-color,rgba(0,0,0,.25));cursor:copy}#file{display:none}.video{display:flex;justify-content:center}#flipBtn.flipped,video.flipped{-ms-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}video{height:100%}.confirm-image,.error-container,.pending-container,.permission{display:none;position:absolute;z-index:1000;top:0;bottom:0;left:0;right:0}.pending-container{background-color:var(--mb-loader-background-color,var(--mb-dialog-background-color,#fff));flex-direction:column;color:var(--mb-loader-font-color,var(--mb-dialog-font-color,#000))}.pending-container h2{font-size:calc(1.4 * var(--mb-hem));margin:calc(1.4 *var(--mb-hem)) 0 0;font-weight:500}.confirm-image.show,.error-container.show,.pending-container.show,.permission.show{display:flex;align-items:center;justify-content:center}.loader-img{display:block;position:relative;margin:0;text-align:center;font-size:0}.container.remote-camera{display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden}.container.remote-camera a{color:#000;font-weight:700}.error-container,.permission{background-color:var(--mb-dialog-background-color,#fff);color:var(--mb-dialog-font-color,#000);font-weight:500;font-size:calc(1.4 * var(--mb-hem));text-align:center}.error-container.show{flex-direction:column}.error-container p{margin:calc(2.5 * var(--mb-hem)) 0}.container.hidden{display:none}.hidden{display:none}.show{display:block}.container.main>*{display:none}.container.main>.active{display:block}.container.main>.image.active{display:block;overflow:hidden}.container.main>.json{padding:calc(.7 * var(--mb-hem)) calc(1.5 * var(--mb-hem));overflow:auto;font-size:calc(.9 * var(--mb-hem));line-height:calc(1.5 * var(--mb-hem));position:relative}.json>div{white-space:pre}.json .key{color:var(--mb-json-color-key)}.json .string{color:var(--mb-json-color-string)}.json .number{color:var(--mb-json-color-number)}.json .null{color:var(--mb-json-color-null)}.json .boolean{color:var(--mb-json-color-boolean)}#copyBtn{font-size:calc(.8 * var(--mb-hem));padding:0 calc(.8 * var(--mb-hem));line-height:calc(1.9 * var(--mb-hem));height:calc(1.9 * var(--mb-hem));box-sizing:content-box;width:auto;position:absolute;top:calc(1.5 * var(--mb-hem));right:calc(1.5 * var(--mb-hem))}.cpyTxtArea{position:absolute;left:-9999px;top:-9999px}.container.results{overflow:auto}.container.results caption{text-align:center;padding:var(--mb-hem) calc(2 * var(--mb-hem));font-weight:700;font-size:calc(1.2 * var(--mb-hem));color:var(--mb-default-font-color)}.results table{border-width:1px 0;border-style:solid;table-layout:fixed;width:100%;border-collapse:collapse;caption-side:top}.results table+table{margin-top:calc(1.5 * var(--mb-hem))}.results th{font-weight:700;background-color:var(--mb-table-header-background-color,#f2f2f2)}.results td,.results th{width:50%;word-break:break-word;word-wrap:break-word;border:1px solid #000;padding:calc(.8 * var(--mb-hem)) var(--mb-hem);box-sizing:border-box}.results td:first-child,.results th:first-child{border-left:0;text-transform:capitalize}.results td:last-child,.results th:last-child{border-right:0}.results td:last-child{font-weight:500;color:var(--mb-default-font-color)}.results .no-result{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;width:80%}.results .masked-label{text-align:center;margin:var(--mb-hem);line-height:1.5;font-weight:500}.confirm-image .image-container img,.container.image img{width:100%;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:100%;max-height:100%;object-fit:contain}#photoBtn{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#counter{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--mb-counter-background-color,rgba(0,0,0,.7));width:calc(8 * var(--mb-hem));height:calc(8 * var(--mb-hem));display:none;text-align:center;color:var(--mb-counter-font-color,#fff);font-size:calc(2.5 * var(--mb-hem));justify-content:center;align-items:center}.counter-number{margin:0;padding:0;font-weight:500;line-height:1;font-size:calc(4 * var(--mb-hem))}#counter.show{display:flex}#card-layout-rectangle{position:absolute;top:50%;left:50%;width:85.6mm;height:53.98mm;transform:translate(-50%,-50%);box-sizing:border-box;border:2px dashed var(--mb-card-layout-border-color);border-radius:3mm}#card-layout-rectangle-background{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiID8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxNDQwcHQiIGhlaWdodD0iOTAwcHQiIHZpZXdCb3g9IjAgMCAxNDQwIDkwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSIjMDAwMDAwNGQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAuMzAiIGQ9IiBNIDAuMDAgMC4wMCBMIDE0NDAuMDAgMC4wMCBMIDE0NDAuMDAgOTAwLjAwIEwgMC4wMCA5MDAuMDAgTCAwLjAwIDAuMDAgTSA1NjcuNTEgMzQ4LjQ3IEMgNTYyLjMxIDM0OS42MCA1NTguMjkgMzU0LjU1IDU1OC41OSAzNTkuOTQgQyA1NTguNTcgNDE5Ljk3IDU1OC41NyA0ODAuMDEgNTU4LjU5IDU0MC4wNSBDIDU1OC4xMSA1NDYuODIgNTY0LjU2IDU1Mi4yNiA1NzEuMDYgNTUxLjk5IEMgNjY4LjY4IDU1MS45OCA3NjYuMzAgNTUxLjk5IDg2My45MiA1NTEuOTkgQyA4NjcuNjEgNTUxLjg4IDg3MS41NCA1NTIuNTQgODc0Ljk2IDU1MC43NiBDIDg3OS4zMSA1NDkuMjUgODgyLjIxIDU0NC41NiA4ODIuMDAgNTQwLjA0IEMgODgxLjk3IDQ3OS42OSA4ODIuMDAgNDE5LjM1IDg4MS45OSAzNTkuMDEgQyA4ODEuODQgMzUyLjQzIDg3NS4yOCAzNDcuNjIgODY5LjAwIDM0OC4wMCBDIDc2OS42NyAzNDguMDMgNjcwLjM0IDM0OC4wMCA1NzEuMDAgMzQ4LjAxIEMgNTY5LjgxIDM0Ny45OCA1NjguNjQgMzQ4LjEzIDU2Ny41MSAzNDguNDcgWiIgLz48L2c+PC9zdmc+);background-position:center center;background-size:380mm;background-repeat:no-repeat;position:absolute;top:0;left:0;bottom:0;right:0}#exchange-link-as-QR img{max-height:300px}.container.root[max-width~=\"775px\"] .intro .inline{padding:0 5%}.container.root[max-width~=\"500px\"] .tab label{padding:0 calc(.5 * var(--mb-hem))}.container.root[max-width~=\"500px\"] .intro .inline{height:50%;width:100%;padding:0 15%}.container.root[max-width~=\"500px\"] .intro .inline+.inline{border-image:linear-gradient(to right,transparent 15%,var(--mb-widget-border-color,#bdbdbd) 15%,var(--mb-widget-border-color,#bdbdbd) 85%,transparent 85%) 1;border-width:1px 0 0 0}.container.root[max-width~=\"500px\"] .intro .inline:only-child{height:100%}.container.root[max-width~=\"500px\"] .intro .inline p{margin-bottom:calc(1.5 * var(--mb-hem))}.container.root[max-width~=\"500px\"] #copyBtn{position:relative;top:0;left:0;margin:calc(.9 * var(--mb-hem)) auto;display:block}@media only screen and (orientation:portrait){.confirm-image .image-container img,.container.image img{width:auto;height:100%}}.lds-ring{display:inline-block;position:relative;width:calc(5 * var(--mb-hem));height:calc(5 * var(--mb-hem))}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:calc(5 * var(--mb-hem));height:calc(5 * var(--mb-hem));border:6px solid;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:var(--mb-loader-font-color,var(--mb-dialog-font-color,#000)) transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}:host([webcam=off]) #cameraBtnSeparator,:host([webcam=off]) #cameraLocalBtn{display:none}#cameraBtnSeparator,#cameraLocalBtn{display:block}.confirm-image .image-container{width:100%;height:calc(100% - 66px);background-color:#fff;position:absolute;bottom:66px}.confirm-image .button-container{position:absolute;bottom:0;box-sizing:border-box;width:100%;height:66px;background-color:#fff;display:flex;justify-content:center;border-top:1px solid #d3d3d3}.confirm-image .button-container button{margin:10px}#webcamConfirmBtn{background-color:var(--mb-btn-webcam-confirm-color)}#webcamRetakeBtn{background-color:var(--mb-btn-webcam-retake-color)}</style> <div class=\"container root\" id=\"rootContainer\"> <div class=\"tab-container\"> <div class=\"tab\" id=\"introTab\"><label><slot name=\"tabs.retake\">RETAKE</slot></label></div> <div class=\"tab active\" id=\"resultsTab\"><label><slot name=\"tabs.results\">RESULTS</slot></label></div> <div class=\"tab\" id=\"imageTab\"><label><slot name=\"tabs.image\">IMAGE</slot></label></div> <div class=\"tab\" id=\"jsonTab\"><label><slot name=\"tabs.json\">JSON</slot></label></div> </div> <div class=\"container main\"> <div class=\"container intro font-0 active\"> <div class=\"inline font-1 dropzone\"> <div class=\"flex-center\"> <p class=\"intro-label\"><slot name=\"labels.dragDrop\">Drag and Drop<br>document here OR</slot></p> <p class=\"intro-label hidden\"><slot name=\"labels.nativeCamera\">Choose image from <br>device or camera app:</slot></p> <button type=\"button\" id=\"fileBtn\"><slot name=\"buttons.browse\">Browse</slot></button> <input type=\"file\" accept=\"image/png,image/gif,image/bmp,image/jpeg,image/x-png,image/vnd.wap.wbmp\" id=\"file\"> </div> </div> <div class=\"inline font-1\"> <div class=\"flex-center\"> <p class=\"intro-label\"><slot name=\"labels.cameraActivate\">Activate your camera to capture the ID document:</slot></p> <button type=\"button\" id=\"cameraRemoteBtn\"><slot name=\"buttons.cameraRemote\">Use remote phone camera</slot></button> <div id=\"cameraBtnSeparator\">OR</div> <button type=\"button\" id=\"cameraLocalBtn\"><slot name=\"buttons.cameraLocal\">Use web camera</slot></button> </div> </div> </div> <div class=\"container results\"></div> <div class=\"container image\"></div> <div class=\"container json\"> <button id=\"copyBtn\"><slot name=\"buttons.copy\">Copy to clipboard</slot></button> <div></div> </div> </div> <div class=\"container remote-camera\"> <h2 id=\"generating-exchange-link\"><slot name=\"labels.generatingExchangeLink\">Generating exchange link...</slot></h2> <h2 id=\"exchange-link-title\"><slot name=\"labels.exchangeLinkTitle\">Exchange link is</slot></h2> <button type=\"button\" id=\"cancelBtnRemoteCamera\"> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" width=\"30px\" height=\"30px\"> <path d=\"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z\"/> </svg> </button> <div class=\"loader-img\"> <slot name=\"loader-image\"> pr1 <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div> </slot> </div> <div id=\"exchange-link\"></div> <div id=\"exchange-link-as-QR\"></div> <p id=\"exchange-link-notes\"><slot name=\"labels.openLinkAtSmartphone\">Please open exchange link at the smartphone.</slot></p> <p id=\"exchange-link-remote-camera-is-pending\"><slot name=\"labels.remoteCameraIsPending\">Remote camera is pending...</slot></p> <p id=\"exchange-link-remote-camera-is-open\"><slot name=\"labels.remoteCameraIsOpen\">Remote camera is open...</slot></p> <p id=\"exchange-link-image-is-uploading\"><slot name=\"labels.imageIsUploading\">Image is uploading...</slot></p> <p id=\"exchange-link-image-is-processing\"><slot name=\"labels.imageIsProcessing\">Image is processing...</slot></p> <div id=\"exchange-link-with\"> <!-- TODO: add send link with email, SMS and copy to clipboard --> </div> </div> <div class=\"container video hidden\"> <video class=\"flipped\" id=\"video\" muted playsinline>Your browser does not support video tag.</video> <div id=\"card-layout-rectangle-background\"></div> <div id=\"card-layout-rectangle\"></div> <button type=\"button\" id=\"photoBtn\"><slot name=\"buttons.takePhoto\">TAKE A PHOTO</slot></button> <button type=\"button\" id=\"flipBtn\" class=\"flipped\"> <svg width=\"44\" height=\"35\" viewBox=\"0 0 44 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M22 7V35\" stroke-width=\"1.38744\" stroke-miterlimit=\"3.8637\" stroke-dasharray=\"1.39 2.77\"/> <path d=\"M38.8375 11.5471L27.2239 20.9999L38.8375 30.4527L38.8375 11.5471Z\" stroke-width=\"1.38744\"/> <path class=\"fill\" d=\"M5.16247 11.5471L16.7761 20.9999L5.16247 30.4527L5.16247 11.5471Z\" stroke-width=\"1.38744\"/> <path class=\"fill\" d=\"M21.4447 1.75C23.851 1.75 26.2572 2.975 28.1082 5.075L26.0721 7H31.625V1.75L29.4038 3.85C27.1827 1.4 24.4063 0 21.4447 0C17.9279 0 14.7812 1.75 12.375 5.075L13.8558 6.125C15.8918 3.325 18.4832 1.75 21.4447 1.75Z\"/> </svg> </button> <button type=\"button\" id=\"cancelBtnLocalCamera\"> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" width=\"30px\" height=\"30px\"> <path d=\"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z\"/> </svg> </button> <div id=\"counter\"> <p class=\"counter-number\"></p> </div> </div> <div class=\"pending-container\"> <div class=\"loader-img\"> <slot name=\"loader-image\"> pr2 <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div> </slot> </div> <h2><slot name=\"labels.uploading\">Uploading</slot>&nbsp;<span class=\"progress-bar-value\"></span></h2> <h2><slot name=\"labels.processing\">Processing</slot></h2> <h2><slot name=\"labels.analyzing\">Analyzing</slot></h2> <h2><slot name=\"labels.extracting\">Extracting data</slot></h2> <h2><slot name=\"labels.almostDone\">Almost done</slot></h2> <!--<div class=\"progress-bar\">\n      <div class=\"progress-bar-value\"></div>\n    </div> --> </div> <div class=\"error-container\"> <div class=\"hidden\"> <slot name=\"labels.errorMsg\">We're sorry, but something went wrong. Please try again.</slot> <slot name=\"labels.notFoundErrorMsg\">No camera was found on your device.</slot> <slot name=\"labels.notAllowedErrorMsg\">You have denied camera access permission.</slot> </div> <button type=\"button\" id=\"againBtn\"><slot name=\"buttons.tryAgain\">TRY AGAIN</slot></button> </div> <div class=\"permission\"> <p><slot name=\"labels.permissionMsg\">Enable camera please</slot></p> </div> <div class=\"confirm-image\"> <div class=\"image-container\"></div> <div class=\"button-container\"> <button type=\"button\" id=\"webcamConfirmBtn\"><slot name=\"buttons.confirm\">CONFIRM</slot></button> <button type=\"button\" id=\"webcamRetakeBtn\"><slot name=\"buttons.retake\">RETAKE</slot></button> </div> </div> </div> ";

/**
 * Copyright (c) 2013 Marc J. Schmidt

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 * */


var ResizeSensor = (function () {

	if (typeof window === "undefined") {
		return null;
	}

	var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		function (fn) {
			return window.setTimeout(fn, 20);
		};

	function forEachElement(elements, callback){
		var elementsType = Object.prototype.toString.call(elements);
		var isCollectionTyped = ('[object Array]' === elementsType
			|| ('[object NodeList]' === elementsType)
			|| ('[object HTMLCollection]' === elementsType)
			|| ('[object Object]' === elementsType)
			|| ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
			|| ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
		);
		var i = 0, j = elements.length;
		if (isCollectionTyped) {
			for (; i < j; i++) {
				callback(elements[i]);
			}
		} else {
			callback(elements);
		}
	}

	function getElementSize(element) {
		if (!element.getBoundingClientRect) {
			return {
				width: element.offsetWidth,
				height: element.offsetHeight
			}
		}
		var rect = element.getBoundingClientRect();
		return {
			width: Math.round(rect.width),
			height: Math.round(rect.height)
		}
	}

	var ResizeSensor = function(element, callback) {

		function EventQueue() {
			var q = [];
			this.add = function(ev) {
				q.push(ev);
			};
			var i, j;
			this.call = function(sizeInfo) {
				for (i = 0, j = q.length; i < j; i++) {
					q[i].call(this, sizeInfo);
				}
			};
			this.remove = function(ev) {
				var newQueue = [];
				for(i = 0, j = q.length; i < j; i++) {
					if(q[i] !== ev) newQueue.push(q[i]);
				}
				q = newQueue;
			};
			this.length = function() {
				return q.length;
			};
		}

		function attachResizeEvent(element, resized) {
			if (!element) return;
			if (element.resizedAttached) {
				element.resizedAttached.add(resized);
				return;
			}
			element.resizedAttached = new EventQueue();
			element.resizedAttached.add(resized);
			element.resizeSensor = document.createElement('div');
			element.resizeSensor.dir = 'ltr';
			element.resizeSensor.className = 'resize-sensor';
			var style = 'position: absolute; left: -10px; top: -10px; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%';
			var styleChild = 'position: absolute; left: 0; top: 0; transition: 0s;';
			element.resizeSensor.style.cssText = style;
			element.resizeSensor.innerHTML =
				'<div class="resize-sensor-expand" style="' + style + '">' +
				'<div style="' + styleChild + '"></div>' +
				'</div>' +
				'<div class="resize-sensor-shrink" style="' + style + '">' +
				'<div style="' + styleChild + ' width: 200%; height: 200%"></div>' +
				'</div>';
			element.appendChild(element.resizeSensor);

			var computedStyle = window.getComputedStyle(element);
			var position = computedStyle ? computedStyle.getPropertyValue('position') : null;
			if ('absolute' !== position && 'relative' !== position && 'fixed' !== position) {
				element.style.position = 'relative';
			}

			var expand = element.resizeSensor.childNodes[0];
			var expandChild = expand.childNodes[0];
			var shrink = element.resizeSensor.childNodes[1];

			var dirty, rafId;
			var size = getElementSize(element);
			var lastWidth = size.width;
			var lastHeight = size.height;
			var initialHiddenCheck = true;
			var lastAnimationFrame = 0;

			var resetExpandShrink = function () {
				expandChild.style.width = '100000px';
				expandChild.style.height = '100000px';

				expand.scrollLeft = 100000;
				expand.scrollTop = 100000;

				shrink.scrollLeft = 100000;
				shrink.scrollTop = 100000;
			};

			var reset = function() {
				if (initialHiddenCheck) {
          var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;
          if (invisible) {
            if (!lastAnimationFrame){
              lastAnimationFrame = requestAnimationFrame(function(){
                lastAnimationFrame = 0;
                reset();
              });
            }
            return;
          } else {
            initialHiddenCheck = false;
          }
				}
				resetExpandShrink();
			};
			element.resizeSensor.resetSensor = reset;

			var onResized = function() {
				rafId = 0;
				if (!dirty) return;

				lastWidth = size.width;
				lastHeight = size.height;

				if (element.resizedAttached) {
					element.resizedAttached.call(size);
				}
			};

			var onScroll = function() {
				size = getElementSize(element);
				dirty = size.width !== lastWidth || size.height !== lastHeight;

				if (dirty && !rafId) {
					rafId = requestAnimationFrame(onResized);
				}
				reset();
			};

			var addEvent = function(el, name, cb) {
				if (el.attachEvent) {
					el.attachEvent('on' + name, cb);
				} else {
					el.addEventListener(name, cb);
				}
			};

			addEvent(expand, 'scroll', onScroll);
			addEvent(shrink, 'scroll', onScroll);
			requestAnimationFrame(reset);
		}

    forEachElement(element, function(elem){
      attachResizeEvent(elem, callback);
    });

    this.detach = function(ev) {
      ResizeSensor.detach(element, ev);
    };

		this.reset = function() {
			element.resizeSensor.resetSensor();
		};
	};

	ResizeSensor.reset = function(element, ev) {
		forEachElement(element, function(elem){
			elem.resizeSensor.resetSensor();
		});
	};

	ResizeSensor.detach = function(element, ev) {
		forEachElement(element, function(elem){
			if (!elem) return;
			if(elem.resizedAttached && typeof ev === "function"){
				elem.resizedAttached.remove(ev);
				if(elem.resizedAttached.length()) return;
			}
			if (elem.resizeSensor) {
				if (elem.contains(elem.resizeSensor)) {
					elem.removeChild(elem.resizeSensor);
				}
				delete elem.resizeSensor;
				delete elem.resizedAttached;
			}
		});
	};
	return ResizeSensor;
})();

/**
 * @license
 *
 * Copyright (c) 2013 Marc J. Schmidt

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 * */

function ElementQueriesFactory(ResizeSensor, shadowRoot) {

	var ElementQueries = function () {

		var cssStyleElement;
		var allQueries = {};
		var idToSelectorMapping = [];

		function getEmSize(element) {
			if (!element) {
				element = document.documentElement;
			}
			var fontSize = window.getComputedStyle(element, null).fontSize;
			return parseFloat(fontSize) || 16;
		}

		function getElementSize(element) {
			if (!element.getBoundingClientRect) {
				return {
					width: element.offsetWidth,
					height: element.offsetHeight
				}
			}
			var rect = element.getBoundingClientRect();
			return {
				width: Math.round(rect.width),
				height: Math.round(rect.height)
			}
		}

		function convertToPx(element, value) {
			var numbers = value.split(/\d/);
			var units = numbers[numbers.length - 1];
			value = parseFloat(value);
			switch (units) {
				case "px":
					return value;
				case "em":
					return value * getEmSize(element);
				case "rem":
					return value * getEmSize();
				case "vw":
					return value * document.documentElement.clientWidth / 100;
				case "vh":
					return value * document.documentElement.clientHeight / 100;
				case "vmin":
				case "vmax":
					var vw = document.documentElement.clientWidth / 100;
					var vh = document.documentElement.clientHeight / 100;
					var chooser = Math[units === "vmin" ? "min" : "max"];
					return value * chooser(vw, vh);
				default:
					return value;
			}
		}

		function SetupInformation(element, id) {
			this.element = element;
			var key, option, elementSize, value, actualValue, attrValues, attrValue, attrName;
			var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];

			this.call = function () {
				elementSize = getElementSize(this.element);
				attrValues = {};

				for (key in allQueries[id]) {
					if (!allQueries[id].hasOwnProperty(key)) {
						continue;
					}
					option = allQueries[id][key];

					value = convertToPx(this.element, option.value);

					actualValue = option.property === 'width' ? elementSize.width : elementSize.height;
					attrName = option.mode + '-' + option.property;
					attrValue = '';

					if (option.mode === 'min' && actualValue >= value) {
						attrValue += option.value;
					}
					if (option.mode === 'max' && actualValue <= value) {
						attrValue += option.value;
					}
					if (!attrValues[attrName]) attrValues[attrName] = '';
					if (attrValue && -1 === (' ' + attrValues[attrName] + ' ').indexOf(' ' + attrValue + ' ')) {
						attrValues[attrName] += ' ' + attrValue;
					}
				}

				for (var k in attributes) {
					if (!attributes.hasOwnProperty(k)) continue;
					if (attrValues[attributes[k]]) {
						this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
					} else {
						this.element.removeAttribute(attributes[k]);
					}
				}
			};
		}

		function setupElement(element, id) {
			if (!element.elementQueriesSetupInformation) {
				element.elementQueriesSetupInformation = new SetupInformation(element, id);
			}
			if (!element.elementQueriesSensor) {
				element.elementQueriesSensor = new ResizeSensor(element, function () {
					element.elementQueriesSetupInformation.call();
				});
			}

			element.elementQueriesSetupInformation.call();
		}

		function queueQuery(selector, mode, property, value) {
			if (typeof(allQueries[selector]) === 'undefined') {
				allQueries[selector] = [];
				// add animation to trigger animationstart event, so we know exactly when a element appears in the DOM

				var id = idToSelectorMapping.length;
				cssStyleElement.innerHTML += '\n' + selector + ' {animation: 0.1s element-queries;}';
				cssStyleElement.innerHTML += '\n' + selector + ' > .resize-sensor {min-width: '+id+'px;}';
				idToSelectorMapping.push(selector);
			}
			allQueries[selector].push({
				mode: mode,
				property: property,
				value: value
			});
		}

		function getQuery(container) {
			var query;
			if (document.querySelectorAll) query = (container) ? container.querySelectorAll.bind(container) : shadowRoot ? shadowRoot.querySelectorAll.bind(shadowRoot) : document.querySelectorAll.bind(document);
			if (!query && 'undefined' !== typeof $$) query = $$;
			if (!query && 'undefined' !== typeof jQuery) query = jQuery;

			if (!query) {
				throw 'No document.querySelectorAll, jQuery or Mootools\'s $$ found.';
			}
			return query;
		}

		function findElementQueriesElements(container) {
			var query = getQuery(container);
			for (var selector in allQueries) if (allQueries.hasOwnProperty(selector)) {
				// find all elements based on the extract query selector from the element query rule
				var elements = query(selector, container);

				for (var i = 0, j = elements.length; i < j; i++) {
					setupElement(elements[i], selector);
				}
			}
		}

		function attachResponsiveImage(element) {
			var children = [];
			var rules = [];
			var sources = [];
			var defaultImageId = 0;
			var lastActiveImage = -1;
			var loadedImages = [];

			for (var i in element.children) {
				if (!element.children.hasOwnProperty(i)) continue;

				if (element.children[i].tagName && element.children[i].tagName.toLowerCase() === 'img') {
					children.push(element.children[i]);
					var minWidth = element.children[i].getAttribute('min-width') || element.children[i].getAttribute('data-min-width');
					//var minHeight = element.children[i].getAttribute('min-height') || element.children[i].getAttribute('data-min-height');
					var src = element.children[i].getAttribute('data-src') || element.children[i].getAttribute('url');
					sources.push(src);
					var rule = {
						minWidth: minWidth
					};
					rules.push(rule);
					if (!minWidth) {
						defaultImageId = children.length - 1;
						element.children[i].style.display = 'block';
					} else {
						element.children[i].style.display = 'none';
					}
				}
			}

			lastActiveImage = defaultImageId;

			function check() {
				var imageToDisplay = false, i;
				for (i in children) {
					if (!children.hasOwnProperty(i)) continue;

					if (rules[i].minWidth) {
						if (element.offsetWidth > rules[i].minWidth) {
							imageToDisplay = i;
						}
					}
				}

				if (!imageToDisplay) {
					imageToDisplay = defaultImageId;
				}
				if (lastActiveImage !== imageToDisplay) {
					if (!loadedImages[imageToDisplay]) {
						var image = new Image();
						image.onload = function () {
							children[imageToDisplay].src = sources[imageToDisplay];
							children[lastActiveImage].style.display = 'none';
							children[imageToDisplay].style.display = 'block';
							loadedImages[imageToDisplay] = true;
							lastActiveImage = imageToDisplay;
						};
						image.src = sources[imageToDisplay];
					} else {
						children[lastActiveImage].style.display = 'none';
						children[imageToDisplay].style.display = 'block';
						lastActiveImage = imageToDisplay;
					}
				} else {
					children[imageToDisplay].src = sources[imageToDisplay];
				}
			}
			element.resizeSensorInstance = new ResizeSensor(element, check);
			check();
		}

		function findResponsiveImages() {
			var query = getQuery();
			var elements = query('[data-responsive-image],[responsive-image]');
			for (var i = 0, j = elements.length; i < j; i++) {
				attachResponsiveImage(elements[i]);
			}
		}

		var regex = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi;
		var attrRegex = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;

		function extractQuery(css) {
			var match, smatch, attrs, attrMatch;
			css = css.replace(/'/g, '"');
			while (null !== (match = regex.exec(css))) {
				smatch = match[1] + match[3];
				attrs = match[2];
				while (null !== (attrMatch = attrRegex.exec(attrs))) {
					queueQuery(smatch, attrMatch[1], attrMatch[2], attrMatch[3]);
				}
			}
		}

		function readRules(rules) {
			var selector = '';
			if (!rules) {
				return;
			}
			if ('string' === typeof rules) {
				rules = rules.toLowerCase();
				if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
					extractQuery(rules);
				}
			} else {
				for (var i = 0, j = rules.length; i < j; i++) {
					if (1 === rules[i].type) {
						selector = rules[i].selectorText || rules[i].cssText;
						if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
							extractQuery(selector);
						} else if (-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
							extractQuery(selector);
						}
					} else if (4 === rules[i].type) {
						readRules(rules[i].cssRules || rules[i].rules);
					} else if (3 === rules[i].type) {
						if(rules[i].styleSheet.hasOwnProperty("cssRules")) {
							readRules(rules[i].styleSheet.cssRules);
						}
					}
				}
			}
		}

		var defaultCssInjected = false;

		this.init = function () {
			var animationStart = 'animationstart';
			if (typeof document.documentElement.style['webkitAnimationName'] !== 'undefined') {
				animationStart = 'webkitAnimationStart';
			} else if (typeof document.documentElement.style['MozAnimationName'] !== 'undefined') {
				animationStart = 'mozanimationstart';
			} else if (typeof document.documentElement.style['OAnimationName'] !== 'undefined') {
				animationStart = 'oanimationstart';
			}
			var root = shadowRoot || document.body;

			root.addEventListener(animationStart, function (e) {
				var element = e.target;
        var styles = element && window.getComputedStyle(element, null);
        var animationName = styles && styles.getPropertyValue('animation-name');
        var requiresSetup = animationName && (-1 !== animationName.indexOf('element-queries'));

				if (requiresSetup) {
					element.elementQueriesSensor = new ResizeSensor(element, function () {
						if (element.elementQueriesSetupInformation) {
							element.elementQueriesSetupInformation.call();
						}
					});

					var sensorStyles = window.getComputedStyle(element.resizeSensor, null);
					var id = sensorStyles.getPropertyValue('min-width');
					id = parseInt(id.replace('px', ''));
					setupElement(e.target, idToSelectorMapping[id]);
				}
			});
			root = shadowRoot || document;
			if (!defaultCssInjected) {
				cssStyleElement = document.createElement('style');
				cssStyleElement.type = 'text/css';
				cssStyleElement.innerHTML = '[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}';
				cssStyleElement.innerHTML += '\n@keyframes element-queries { 0% { visibility: inherit; } }';
				shadowRoot ? shadowRoot.appendChild(cssStyleElement) : document.getElementsByTagName('head')[0].appendChild(cssStyleElement);
        if (!root.styleSheets) {
          Array.prototype.forEach.call(root.querySelectorAll('style'), (style, i) => {
            let styleCpy = document.createElement('style');
            styleCpy.id = 'elemQueryStyleFix' + i;
            styleCpy.innerHTML = style.innerHTML;
            document.head.appendChild(styleCpy);
          });
          root = document;
        }
        for (var i = 0, j = root.styleSheets.length; i < j; i++) {
          try {
            if (root.styleSheets[i].href && 0 === root.styleSheets[i].href.indexOf('file://')) {
              console.log("CssElementQueries: unable to parse local css files, " + root.styleSheets[i].href);
            }
            readRules(root.styleSheets[i].cssRules || root.styleSheets[i].rules || root.styleSheets[i].cssText);
          } catch (e) {
          }
        }
        if(!root.styleSheets) {
          Array.prototype.forEach.call(document.head.querySelectorAll('style'), (style) => {
            if(style.id && style.id.indexOf('elemQueryStyleFix') === 0) {
              document.head.removeChild(style);
            }
          });
        }
      }
      defaultCssInjected = true;
			findResponsiveImages();
		};

		this.findElementQueriesElements = function (container) {
			findElementQueriesElements(container);
		};
		this.update = function () {
			this.init();
		};
	};

	ElementQueries.update = function () {
		ElementQueries.instance.update();
	};

	ElementQueries.detach = function (element) {
		if (element.elementQueriesSetupInformation) {
			element.elementQueriesSensor.detach();
			delete element.elementQueriesSetupInformation;
			delete element.elementQueriesSensor;
		} else if (element.resizeSensorInstance) {
			element.resizeSensorInstance.detach();
			delete element.resizeSensorInstance;
		}
	};

	ElementQueries.init = function () {
		if (!ElementQueries.instance) {
			ElementQueries.instance = new ElementQueries();
		}
		ElementQueries.instance.init();
	};

	var domLoaded = function (callback) {
    if(/loaded|complete/i.test(document.readyState)) {
      callback();
    }
		else if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', callback, false);
		}
		else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
			var DOMLoadTimer = setInterval(function () {
				if (/loaded|complete/i.test(document.readyState)) {
					callback();
					clearInterval(DOMLoadTimer);
				}
			}, 10);
		}
		else window.onload = callback;
	};
	ElementQueries.findElementQueriesElements = function (container) {
		ElementQueries.instance.findElementQueriesElements(container);
	};
	ElementQueries.listen = function () {
		domLoaded(ElementQueries.init);
	};
	return ElementQueries;
}

function escapeHtml(txt) {
  return typeof txt === "string" ? txt.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/\n/g, '\\n') : txt;
}

function labelFromCamelCase(value) {
  return value.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
}

function dateFromObject(object) {
  let { day, month, year } = object;
  if (day === null && month === null && year === null) return null;
  const number = "number";
  if (typeof day !== number || typeof month !== number || typeof year !== number) return object;
  let date = new Date(year, month - 1, day);
  // If day is 0 then this could be result from BLINK_CARD_FRONT for field validThru
  if (day === 0) {
    date = new Date(year, month, day);
  }
  let language = navigator.userLanguage || navigator.language || (navigator.languages && navigator.languages[0]);
  return date.toLocaleDateString(language ? language : undefined);
}

function isMobile() {
  return /Mobi|Android/.test(navigator.userAgent);
}

function isFirebaseAppConfigured() {
  try {
    firebase.app();
    return true;
  } catch (e) {
    return false;
  }
}

function isRemotePhoneCameraAvailable() {
  return isFirebaseAppConfigured();
}

function hasClass(elem, className) {
  return new RegExp(`(^|\\s)${String(className).trim()}($|\\s)`).test(elem.className);
}

function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ` ${className}`;
  }
  return elem;
}

function removeClass(elem, className) {
  elem.className = elem.className.replace(new RegExp(`(\\s|^)${String(className).split(' ').join('|')}(\\s|$)`, 'g'), ' ').trim();
  return elem;
}

function toggleClass(elem, className, add) {
  if (add === true) return addClass(elem, className);
  if (add === false) return removeClass(elem, className);
  return hasClass(elem, className) ? removeClass(elem, className) : addClass(elem, className);
}

const Microblink$1 = {
	SDK: SDK
};

// Default for desktop
let CARD_PADDING_FACTOR_TO_THE_COMPONENT = 0.6;
// At mobile it looks much better when it is almost at the edge of the component
if (isMobile()) {
  CARD_PADDING_FACTOR_TO_THE_COMPONENT = 0.9;
}

// Expose it to global window object
if (window) {
	window['Microblink'] = Microblink$1;
}

const ERR_UNSUPPORTED_TYPE = 'Unsupported file type';
const RESULT_MASKED = 'Please notice that your results are masked due to missing Authorization header';

//insert web components light polyfill for cross-browser compatibility
let script = document.createElement('script');
script.src = '//unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js';
script.addEventListener('load', function() {
  window.WebComponents.waitFor(defineComponent); //to make sure all polyfills are loaded
});
document.head.insertBefore(script, document.head.querySelector('script[src*="microblink."]'));

function defineComponent() {

  let template = document.createElement('template');
  template.innerHTML = templateHtml;

  class WebApi extends HTMLElement {

    static get observedAttributes() {
      return ['tabs', 'autoscroll', 'webcam'];
    }

    get tabs() { return this.hasAttribute('tabs'); }
    set tabs(value) { value === true ? this.setAttribute('tabs', '') : this.removeAttribute('tabs'); }

    get autoscroll() { return this.hasAttribute('autoscroll'); }
    set autoscroll(value) { value === true ? this.setAttribute('autoscroll', '') : this.removeAttribute('autoscroll'); }

    get webcam() { return this.getAttribute('webcam'); }
    set webcam(value) { value === false ? this.setAttribute('webcam', 'false') : this.removeAttribute('webcam'); }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.onScanError = this.onScanError.bind(this);
      this.onScanSuccess = this.onScanSuccess.bind(this);
      this.onScanProgress = this.onScanProgress.bind(this);
      this.startRecording = this.startRecording.bind(this);
      this.autoScrollListener = this.autoScrollListener.bind(this);
      this.getLocalization = this.getLocalization.bind(this);
      // Current active crypto key for scan protection
      this.currentScanSecretKey = null;
      // Subscription to the exchange object changes
      this.unsubscribeFromScanExchangerChanges = null;

      document.addEventListener('DOMContentLoaded', this.getLocalization);
      Microblink$1.SDK.RegisterListener(this);
    }

    connectedCallback() {
      if(this.shadowRoot.innerHTML) this.shadowRoot.innerHTML = '';
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.getElementById('fileBtn').addEventListener('click', () => this.shadowRoot.getElementById('file').click());
      this.shadowRoot.getElementById('file').addEventListener('click', function() { this.value = ''; });
      this.shadowRoot.getElementById('file').addEventListener('touchstart', function() { this.value = ''; });
      this.shadowRoot.getElementById('file').addEventListener('change', this.fileChosen.bind(this));
      this.shadowRoot.getElementById('againBtn').addEventListener('click', () => {
        this.restart();
        this.stopCamera();
        this.toggleError();
      });
      this.shadowRoot.getElementById('cancelBtnLocalCamera').addEventListener('click', () => {
        this.stopCamera();
      });
      this.shadowRoot.getElementById('cancelBtnRemoteCamera').addEventListener('click', () => {
        this.stopCamera();
      });
      document.addEventListener('keydown', (evt) => {
        evt = evt || window.event;
        if (evt.key === 'Escape') {
          this.stopCamera();
        }
      });
      this.shadowRoot.querySelector('.dropzone').addEventListener('dragover', event => event.preventDefault());
      this.shadowRoot.querySelector('.dropzone').addEventListener('drop', this.onDrop.bind(this));
      this.shadowRoot.querySelector('.dropzone').addEventListener('dragenter', this.onDragEnter.bind(this));
      this.shadowRoot.querySelector('.dropzone').addEventListener('dragleave', this.onDragLeave.bind(this));
      this.shadowRoot.getElementById('cameraLocalBtn').addEventListener('click', this.activateLocalCamera.bind(this));
      this.shadowRoot.getElementById('cameraRemoteBtn').addEventListener('click', this.activateRemoteCamera.bind(this));
      this.shadowRoot.querySelector('video').addEventListener('loadedmetadata', function() { this.play(); });
      this.shadowRoot.getElementById('photoBtn').addEventListener('click', () => this.startRecording());
      this.shadowRoot.getElementById('flipBtn').addEventListener('click', this.flipCamera.bind(this));
      let video = this.shadowRoot.getElementById('video');
      video.addEventListener('loadedmetadata', function() { this.controls = false; });
      video.addEventListener('play', () => {
        removeClass(this.shadowRoot.getElementById('photoBtn'), 'hidden');
      });

      Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.tab'), elem => {
        elem.addEventListener('click', () => {
          let tabId = elem.id;
          Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.tab'), elem => toggleClass(elem, 'active', tabId === elem.id));
          Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.main > .container'), elem => {
            toggleClass(elem, 'active', hasClass(elem, tabId.substring(0, tabId.length - 3)));
          });
        });
      });

      this.shadowRoot.getElementById('copyBtn').addEventListener('click', () => {
        let text = this.shadowRoot.querySelector('.main > .json > div').textContent;
        let textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.className += 'cpyTxtArea';
        this.shadowRoot.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        this.shadowRoot.removeChild(textarea);
      });
      this.checkWebRTCSupport();
      this.checkRemoteCameraSupport();
      this.adjustComponent(true);
      this.ElementQueries = ElementQueriesFactory(ResizeSensor, this.shadowRoot);
      this.ElementQueries.listen();
      window.addEventListener('resize', this.adjustComponent.bind(this));

      this.shadowRoot.getElementById('webcamConfirmBtn').addEventListener('click', () => {
        Microblink$1.SDK.SendImage(this.webcamImage, this.onScanProgress);
        this.toggleLoader(true);
        this.restart();
        this.stopCamera();
        removeClass(this.shadowRoot.querySelector('.confirm-image'), 'show');
      });
      this.shadowRoot.getElementById('webcamRetakeBtn').addEventListener('click', () => {
        this.activateLocalCamera();
        removeClass(this.shadowRoot.querySelector('.confirm-image'), 'show');
      });
      this.shadowRoot.querySelector('slot[name="loader-image"]').addEventListener('slotchange', event => {
        let loaderElements = event.target.assignedElements();
        if (loaderElements.length === 0) return;
        let loaderSlots = Array.prototype.map.call(this.shadowRoot.querySelectorAll('slot[name="loader-image"]'), el => el);
        loaderSlots.shift();
        loaderSlots.forEach(slot => {
          slot.innerHTML = '';
          loaderElements.forEach(element => slot.appendChild(element.cloneNode(true)));
        });
      });
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if(name === 'autoscroll') {
        window[(newValue !== null ? 'add' : 'remove') + 'EventListener']('scroll', this.autoScrollListener);
      }
    }

    adjustComponent(initial) {
      if (isMobile()) {
        this.style.height = `${window.innerHeight}px`;
        if(parseInt(getComputedStyle(this.parentNode).height) < window.innerHeight) {
          this.style.height = getComputedStyle(this.parentNode).height;
        }
        if (initial === true) {
          this.shadowRoot.getElementById('flipBtn').style.setProperty('display', 'none', 'important');
          this.shadowRoot.getElementById('cameraRemoteBtn').style.setProperty('display', 'none', 'important');
          this.shadowRoot.getElementById('cameraBtnSeparator').style.setProperty('display', 'none', 'important');
          this.shadowRoot.getElementById('cameraLocalBtn').innerHTML = this.shadowRoot.getElementById('cameraLocalBtn').innerHTML.replace('desktop', '').replace('web', '');
          Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('#flipBtn, .video video'), elem => toggleClass(elem, 'flipped'));
          Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.dropzone .intro-label'), elem => toggleClass(elem, 'hidden'));
        }
      }

      if (!isRemotePhoneCameraAvailable()) {
        this.shadowRoot.getElementById('cameraRemoteBtn').style.setProperty('display', 'none', 'important');
        this.shadowRoot.getElementById('cameraBtnSeparator').style.setProperty('display', 'none', 'important');
      }
    }

    autoScrollListener(event) {
      if (isMobile()) {
        if (this.autoScrollListener.previousPositionY === undefined) {
          this.autoScrollListener.previousPositionY = this.getBoundingClientRect().top;
        } else {
          let previousPositionY = this.autoScrollListener.previousPositionY;
          let positionY = this.getBoundingClientRect().top;
          this.autoScrollListener.previousPositionY = positionY;
          if (Math.abs(positionY) < 30 && Math.abs(previousPositionY) > Math.abs(positionY)) {
            event.preventDefault();
            if (!this.autoScrollListener.touchEventInit) {
              this.autoScrollListener.touchEventInit = true;
              document.body.style.setProperty('overflow', 'hidden', 'important');
              window.scrollTo(0, window.pageYOffset + this.getBoundingClientRect().top);
              let posIntervalId = setInterval(() => window.scrollTo(0, window.pageYOffset + this.getBoundingClientRect().top), 25);
              setTimeout(() => {
                clearInterval(posIntervalId);
                document.body.style.overflow = '';
                this.autoScrollListener.touchEventInit = false;
              }, 400);
            }
          }
        }
      }
    }

    checkWebRTCSupport() {
      if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
        let cameraLocalBtn = this.shadowRoot.getElementById('cameraLocalBtn');
        cameraLocalBtn.parentNode.removeChild(cameraLocalBtn);
        this.shadowRoot.getElementById('cameraBtnSeparator').style.setProperty('display', 'none', 'important');
      }
    }

    checkRemoteCameraSupport() {
      Microblink$1.SDK.IsDesktopToMobileAvailable().then(isAvailable => {
        if (!isAvailable) {
          this.shadowRoot.getElementById('cameraRemoteBtn').style.setProperty('display', 'none', 'important');
          this.shadowRoot.getElementById('cameraBtnSeparator').style.setProperty('display', 'none', 'important');
          if (!this.shadowRoot.getElementById('cameraLocalBtn')) {
            let cameraPart = this.shadowRoot.querySelector('.container.intro .inline + .inline');
            cameraPart.parentNode.removeChild(cameraPart);
          }
        }
      });
    }

    getLocalization() {
      let template = this.getElementsByClassName('localization')[0];
      if (template) {
        return new Promise(resolve => {
          let isJson = /\sjson\s/.test(` ${template.className} `);
          if (isJson) {
            try {
              this.handleJson(JSON.parse(template.content.textContent.trim().replace(/\\n/g, '<br/>')));
              resolve(true);
            } catch(exception) {
              resolve(false);
            }
          } else {
            let url = template.content.textContent;
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
              if (xhr.readyState === 4 && xhr.status === 200) {
                try {
                  this.handleJson(JSON.parse(xhr.responseText.trim().replace(/\\n/g, '<br/>')));
                  resolve(true);
                } catch (exception) {
                  resolve(false);
                }
              } else if (xhr.readyState === 4) {
                resolve(false);
              }

            };
            xhr.open('GET', url && url.trim(), true);
            xhr.send();
          }

        });
      } else
        return Promise.resolve(true);
    }

    handleJson(json) {
      let templateHtml$$1 = "";
      iterateJson(json, '');
      if (templateHtml$$1) {
        let template = document.createElement('template');
        template.innerHTML = templateHtml$$1;
        this.appendChild(template.content.cloneNode(true));
      }

      function iterateJson(jsonTree, name) {
        Object.keys(jsonTree).forEach(key => {
          if (jsonTree[key] instanceof Object) iterateJson(jsonTree[key], name ? (name + '.' + key) : key);
          else templateHtml$$1 += `<span slot="${name ? (name + '.' + key) : key}">${jsonTree[key]}</span>`;
        });
      }
    }

    injectStyleSheet(url) {
      if(url) {
        let link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        this.shadowRoot.insertBefore(link, this.shadowRoot.childNodes[1]);
      }
    }

    /*switchLocale() {
      let slotTargets =  this.querySelectorAll('[slot*=labels]'); //not live nodelist so it will work
      if (slotTargets && slotTargets.length) {
        Array.prototype.forEach.call(slotTargets, target => target.parentNode.removeChild(target));
      } else {
        this.getLocalization();
      }
    }
    */

    toggleLoader(show) {
      let loader = this.shadowRoot.querySelector('.pending-container');
      if(show) {
        this.shadowRoot.querySelector('.progress-bar-value').textContent = '0%';
        Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.pending-container h2'), elem => toggleClass(elem, 'hidden', !elem.matches(':first-of-type')));
        this.toggleTabs(false);
      }
      toggleClass(loader, 'show', show);
    }

    toggleError(show, message) {
      let errDialog = this.shadowRoot.querySelector('.error-container');
      Array.prototype.forEach.call(errDialog.querySelectorAll('p'), el => errDialog.removeChild(el));
      let element = document.createElement('p');
      if (show && message) {
        element.textContent = message;
      } else {
        element.textContent = errDialog.querySelector('slot[name="labels.errorMsg"]').textContent;
      }
      errDialog.insertBefore(element, errDialog.querySelector('button'));
      toggleClass(errDialog, 'show', show);
    }

    toggleTabs(show) {
      toggleClass(this.shadowRoot.querySelector('.container.root'), 'tabs', show);
      let tabTargets = this.shadowRoot.querySelectorAll('.main > .container');
      if(show === false) {
        Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.tab'), elem => toggleClass(elem, 'active', elem.id === 'resultsTab'));
        Array.prototype.forEach.call(tabTargets, elem => toggleClass(elem, 'active', hasClass(elem, 'intro')));
      } else if(show === true) {
        Array.prototype.forEach.call(tabTargets, elem => toggleClass(elem, 'active', hasClass(elem, 'results')));
      }
    }

    onDrop(event) {
      event.preventDefault();
      this.onDragLeave();
      let file;
      if (event.dataTransfer.items && event.dataTransfer.items[0]) {
        file = event.dataTransfer.items[0].getAsFile();
      } else {
        file = event.dataTransfer.files && event.dataTransfer.files[0];
      }
      if (file) {
        let supportedImageTypes = this.shadowRoot.getElementById('file').getAttribute('accept').split(',');
        if (file.type && supportedImageTypes.includes(file.type)) {
          this.setFile(file);
        } else {
          this.toggleError(true, ERR_UNSUPPORTED_TYPE);
          this.dispatchEvent('error', new Error(ERR_UNSUPPORTED_TYPE));
        }
      }
    }

    onDragEnter() {
      addClass(this.shadowRoot.querySelector('.dropzone'), 'draghover');
      this.shadowRoot.getElementById('fileBtn').style.pointerEvents = 'none';
    }

    onDragLeave() {
      removeClass(this.shadowRoot.querySelector('.dropzone'), 'draghover');
      this.shadowRoot.getElementById('fileBtn').style.pointerEvents = '';
    }

    fileChosen(event) {
      let file = event.target.files && event.target.files[0];
      if (file) this.setFile(file);
    }

    setFile(file) {
      console.log(file)
      if (file.size > 15 * 1024 * 1024) {
        this.toggleError(true, 'Maximum file size is 15 MB');
        this.dispatchEvent('error', 'Maximum file size is 15 MB');
        return;
      }
      this.toggleLoader(true);
      this.restart();
      Microblink$1.SDK.SendImage({ blob: file }, this.onScanProgress);
      this.enableResultShow = true;
    }

    async activateRemoteCamera() {

      if (this.unsubscribeFromScanExchangerChanges) {
        // On every new Remote Camera activation, unsubscribe from the previous listener if it is subscribed
        this.unsubscribeFromScanExchangerChanges();
      }

      this.toggleTabs(false);
      this.clearTabs();
      Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.root > .container'), elem => toggleClass(elem, 'hidden', !hasClass(elem, 'remote-camera')));

      const _shadowRoot = this.shadowRoot;
      const _enableResultShow = () => this.enableResultShow = true;

      _shadowRoot.getElementById('generating-exchange-link').style.setProperty('display', 'block');
      _shadowRoot.getElementById('exchange-link-title').style.setProperty('display', 'none', 'important');
      _shadowRoot.getElementById('exchange-link-notes').style.setProperty('display', 'none', 'important');
      _shadowRoot.getElementById('exchange-link-remote-camera-is-pending').style.setProperty('display', 'none', 'important');
      _shadowRoot.getElementById('exchange-link-remote-camera-is-open').style.setProperty('display', 'none', 'important');
      _shadowRoot.getElementById('exchange-link-image-is-uploading').style.setProperty('display', 'none', 'important');
      _shadowRoot.getElementById('exchange-link-image-is-processing').style.setProperty('display', 'none', 'important');
      _shadowRoot.querySelector('.remote-camera .loader-img').style.setProperty('display', 'block');
      _shadowRoot.getElementById('exchange-link').innerHTML = '';
      _shadowRoot.getElementById('exchange-link-as-QR').innerHTML = '';

      // Create Scan exchanger data object
      try {

        this.unsubscribeFromScanExchangerChanges = await Microblink$1.SDK.CreateScanExchanger({}, (scanDocData) => {
          console.log(scanDocData);

          // Listen for the changes on Scan exchanger object
          // console.log('scanDocData', scanDocData);

          // 1. Step01_RemoteCameraIsRequested
          // secret key is generated and store as plain string inside of the library

          // 2. get short link after create
          if (
            scanDocData.status === Microblink$1.SDK.ScanExchangerCodes.Step02_ExchangeLinkIsGenerated
            && scanDocData.shortLink
          ) {
            const exchangeLink = scanDocData.shortLink;
            _shadowRoot.getElementById('exchange-link').innerHTML = `<a href="${exchangeLink}" target="_blank" >${exchangeLink}</a>`;
            _shadowRoot.querySelector('.remote-camera .loader-img').style.setProperty('display', 'none', 'important');
            _shadowRoot.getElementById('exchange-link-title').style.setProperty('display', 'block');
            _shadowRoot.getElementById('exchange-link-notes').style.setProperty('display', 'block');
            _shadowRoot.getElementById('generating-exchange-link').style.setProperty('display', 'none', 'important');
            if (scanDocData.qrCodeAsBase64) {
              _shadowRoot.getElementById('exchange-link-as-QR').innerHTML = '<img src="' + scanDocData.qrCodeAsBase64 + '" />';
            }
          } else {
            _shadowRoot.getElementById('exchange-link-as-QR').innerHTML = '';
          }

          // 3. Remote camera page is prepared - waiting for user to open camera
          if (scanDocData.status === Microblink$1.SDK.ScanExchangerCodes.Step03_RemoteCameraIsPending) {
            _shadowRoot.getElementById('exchange-link').innerHTML = '';
            _shadowRoot.getElementById('exchange-link-title').style.setProperty('display', 'none', 'important');
            _shadowRoot.getElementById('exchange-link-notes').style.setProperty('display', 'none', 'important');
            _shadowRoot.getElementById('exchange-link-remote-camera-is-pending').style.setProperty('display', 'block');
          } else {
            _shadowRoot.getElementById('exchange-link-remote-camera-is-pending').style.setProperty('display', 'none', 'important');
          }

          // 4. Remote camera is open by user - waiting for shot
          if (scanDocData.status === Microblink$1.SDK.ScanExchangerCodes.Step04_RemoteCameraIsOpen) {
            _shadowRoot.getElementById('exchange-link-remote-camera-is-open').style.setProperty('display', 'block');
          } else {
            _shadowRoot.getElementById('exchange-link-remote-camera-is-open').style.setProperty('display', 'none', 'important');
          }

          // 5. Remote camera - shot is done and device is uploading image and server is processing image
          if (scanDocData.status === Microblink$1.SDK.ScanExchangerCodes.Step05_ImageIsUploading) {
            _shadowRoot.getElementById('exchange-link-image-is-uploading').style.setProperty('display', 'block');
            _shadowRoot.querySelector('.remote-camera .loader-img').style.setProperty('display', 'block');
          } else {
            _shadowRoot.getElementById('exchange-link-image-is-uploading').style.setProperty('display', 'none', 'important');
          }

          // 6. Remote camera - upload is done and waiting for the server to process image
          if (scanDocData.status === Microblink$1.SDK.ScanExchangerCodes.Step06_ImageIsProcessing) {
            _shadowRoot.getElementById('exchange-link-image-is-processing').style.setProperty('display', 'block');
            _shadowRoot.querySelector('.remote-camera .loader-img').style.setProperty('display', 'block');
          } else {
            _shadowRoot.getElementById('exchange-link-image-is-processing').style.setProperty('display', 'none', 'important');
          }

          // 7. Get result from exchabge object, result taken from Microblink API set by remote camera
          if (
            scanDocData.status === Microblink$1.SDK.ScanExchangerCodes.Step07_ResultIsAvailable &&
            scanDocData.result
          ) {
            _shadowRoot.querySelector('.remote-camera .loader-img').style.setProperty('display', 'none', 'important');
            _enableResultShow();
          }
        });
      } catch (e) {
        console.error('Microblink.SDK.CreateScanExchanger.error', e);
      }
    }

    activateLocalCamera() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.shadowRoot.getElementById('cameraLocalBtn').setAttribute('disabled', '');
        let constraints = { video: { width: { ideal: 3840 }, height: { ideal: 2160 }, facingMode: { ideal: 'environment' } } };
        let permissionTimeoutId = setTimeout(() => { permissionTimeoutId = null; this.permissionDialogPresent(); }, 1500); //this is "event" in case of browser's camera allow/block dialog
        navigator.mediaDevices.getUserMedia(constraints).then(stream => {
          this.permissionDialogAbsent(permissionTimeoutId);
          let video = this.shadowRoot.getElementById('video');
          video.controls = true;
          if ('srcObject' in video) {
            video.srcObject = stream;
          } else {
            video.src = URL.createObjectURL(stream);
          }
          setTimeout(() => {
            video.play().catch(() => {
              addClass(this.shadowRoot.getElementById('photoBtn'), 'hidden');
            });
          }, 0);

          this.toggleTabs(false);
          this.clearTabs();
          Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.root > .container'), elem => toggleClass(elem, 'hidden', !hasClass(elem, 'video')));

          // Rescale card-layout-rectangle and it's background to the component size
          // Get current values
          var componentWidth = this.shadowRoot.getElementById('rootContainer').offsetWidth;
          var componentHeight = this.shadowRoot.getElementById('rootContainer').offsetHeight;
          var cardLayoutRectangleWidth = this.shadowRoot.getElementById('card-layout-rectangle').offsetWidth;
          var cardLayoutRectangleHeight = this.shadowRoot.getElementById('card-layout-rectangle').offsetHeight;

          // Try to scale depends on the component's width
          var paddingFactor = CARD_PADDING_FACTOR_TO_THE_COMPONENT;
          var scaleFactor = (componentWidth / cardLayoutRectangleWidth) * paddingFactor;
          // Fallback to scale depends on the component height if card border is out of the component
          if ((cardLayoutRectangleHeight * scaleFactor) > (componentHeight * paddingFactor)) {
            scaleFactor = (componentHeight / cardLayoutRectangleHeight) * paddingFactor;
          }

          // Update UI
          this.shadowRoot.getElementById('card-layout-rectangle').style.zoom = scaleFactor;
          this.shadowRoot.getElementById('card-layout-rectangle-background').style.zoom = scaleFactor;

        }).catch(error => {
          this.permissionDialogAbsent(permissionTimeoutId);

          let errorMessage;
          switch(error.name) {
            case 'NotFoundError':
              errorMessage = this.shadowRoot.querySelector('slot[name="labels.notFoundErrorMsg"]').textContent;
              break;
            case 'NotAllowedError':
              errorMessage = this.shadowRoot.querySelector('slot[name="labels.notAllowedErrorMsg"]').textContent;
              break;
          }

          this.toggleError(true, errorMessage);
          this.dispatchEvent('error', new Error('Camera error: ' + error.name));
          console.log(error.name); //NotFoundError, NotAllowedError
        }).then(() => this.shadowRoot.getElementById('cameraLocalBtn').removeAttribute('disabled'));

      } else {
        console.log('WebRTC not supported by your browser'); //should we fallback to flash?
      }
    }

    flipCamera() {
      Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.video video, #flipBtn'), elem => toggleClass(elem, 'flipped'));
    }

    stopCamera() {
      let video = this.shadowRoot.getElementById('video');
      video.pause();
      if (video.srcObject) {
        video.srcObject.getTracks()[0].stop();
        video.srcObject = null;
      }
      else if (video.src) {
        if(video.captureStream || video.mozCaptureStream) {
          (video.captureStream || video.mozCaptureStream)().getTracks()[0].stop();
          URL.revokeObjectURL(video.src);
          video.src = null;
        }
      }
      video.load();
      Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.root > .container'), elem => toggleClass(elem, 'hidden', !hasClass(elem, 'main')));
    }

    startRecording() {
      console.log('startRecording');
      this.enableResultShow = false;
      let countdown = 3;
      addClass(this.shadowRoot.getElementById('photoBtn'), 'hidden');
      addClass(this.shadowRoot.getElementById('counter'), 'show');
      let numberNode = this.shadowRoot.querySelector('.counter-number');
      removeClass(numberNode, 'hidden');
      numberNode.textContent = String(countdown);
      let frames = [];
      let counterIntervalId = setInterval(() => {
        numberNode.textContent = String(--countdown);
        if (countdown === 1) {
          this.frameSendingIntervalId = setInterval(() => {
            this.captureFrameAndAddToArray(frames);
          }, 200);
        }
        if (countdown === 0) {
          clearInterval(counterIntervalId);
          clearInterval(this.frameSendingIntervalId);
          this.hideCounter();
          this.enableResultShow = true;

          // So that even the picture on 0 countdown mark would be included
          this.captureFrameAndAddToArray(frames).then(() => {
            let bestFrame = frames.reduce((prev, current) => (prev.frameQuality > current.frameQuality) ? prev : current);
            this.userImageConfirmation(bestFrame.data);
          });
        }
      }, 1000);
    }

    userImageConfirmation(scanInputFile) {
      console.log('userImageConfirmation');
      this.webcamImage = scanInputFile;
      let image = new Image();
      image.src = URL.createObjectURL(scanInputFile.blob);
      let imageContainerNode = this.shadowRoot.querySelector('.confirm-image .image-container');
      imageContainerNode.innerHTML = '';
      imageContainerNode.appendChild(image);
      addClass(this.shadowRoot.querySelector('.confirm-image'), 'show');
    }

    captureFrameAndAddToArray(frames) {
    console.log(frames)
      return new Promise(resolve => {
        this.captureFrame().then(data => {
          let frameQuality = FrameHelper.getFrameQuality(data.pixelData);
          delete data.pixelData; // So Microblink.SDK.SendImage will recognize it as ScanInputFile instead of ScanInputFrame
          frames.push({data, frameQuality});
          resolve();
        });
      });
    }

    captureFrame() {
      console.log('captureFrame');
      let video = this.shadowRoot.getElementById('video');
      let canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
      let pixelData = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
      return new Promise(resolve => {
        if (canvas.toBlob) {
          canvas.toBlob(blob => resolve({ blob, pixelData }), "image/jpeg", 0.95);
        } else {
          let binStr = atob(canvas.toDataURL("image/jpeg", 0.95).split(',')[1]), len = binStr.length, arr = new Uint8Array(len);
          Array.prototype.forEach.call(arr, (_, index) => arr[index] = binStr.charCodeAt(index));
          let blob = new Blob([arr], { type: "image/jpeg" });
          resolve({ blob, pixelData });
        }
      });
    }

    restart() {
      console.log('restart');
      this.toggleTabs(false);
      this.clearTabs();
      Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.root > .container'), elem => toggleClass(elem, 'hidden', !hasClass(elem, 'main')));
    }

    restartCounter() {
        console.log('restartCounter');
      removeClass(this.shadowRoot.getElementById('photoBtn'), 'hidden');
      removeClass(this.shadowRoot.getElementById('counter'), 'show');
      removeClass(this.shadowRoot.querySelector('.counter-number'), 'hidden');
    }

    hideCounter() {
      console.log('hideCounter');
      removeClass(this.shadowRoot.getElementById('counter'), 'show');
    }

    fillTabs(response) {
      console.log('fillTabs');
      const imageTabElement = this.shadowRoot.getElementById('imageTab');

      if (response.sourceBlob) {
        let image = new Image();
        image.src = URL.createObjectURL(response.sourceBlob);
        this.shadowRoot.querySelector('.main > .image').appendChild(image);
        imageTabElement.style.setProperty('display', 'block');
      } else {
        imageTabElement.style.setProperty('display', 'none', 'important');
      }

      this.fillResultTable(response.result);
      this.fillJson(response.result);
      this.toggleTabs(true);
    }

    fillResultTable(json) {
      console.log('fillResultTable');
      if (!json || !json.data) return;
      let data = json.data instanceof Array ? json.data : [json.data];
      let innerHtml = '';
      data.forEach(({ recognizer, result }) => {
        if (!result) return;
        innerHtml += `<table>
							<caption>${recognizer}</caption>
							<thead><tr>
								<th><slot name="labels.table.keys">Data field from the ID</slot></th>
								<th><slot name="labels.table.values">Value</slot></th>
							</tr></thead>
							<tbody>`;
        Object.keys(result).forEach(key => {
          innerHtml += `<tr><td>${labelFromCamelCase(key)}</td>
								  <td>${result[key] instanceof Object ? dateFromObject(result[key]) : escapeHtml(result[key])}</td>
							  </tr>`;
        });
        innerHtml += '</tbody></table>';
      });
      if (innerHtml) {
        if (json.summary.search(/Authorization header is missing/gi) !== -1) {
          innerHtml = `<p class="masked-label">${RESULT_MASKED}</p>${innerHtml}`;
        }
        this.shadowRoot.querySelector('.container.results').innerHTML = innerHtml;
      } else {
        this.shadowRoot.querySelector('.container.results').innerHTML = `<span class="no-result">
        Scanning is finished, but we could not extract the data. Please check if you uploaded the right document type.
      </span>`;
      }
    }

    fillJson(json) {
      console.log('fillJson');
      if(!json || JSON.stringify(json) === '{}' || JSON.stringify(json) === '[]') return;
      let jsonHtml = '';
      iterateJson(null, json, 0);
      jsonHtml = jsonHtml.slice(0, -1);
      this.shadowRoot.querySelector('.main > .json > div').innerHTML = jsonHtml;

      function iterateJson(key, value, depth) {
        let prefix = Array(depth + 1).join('     ');
        if (key !== null) {
          if (value === undefined) return;
          jsonHtml += `\n${prefix}<span class="key">"${escapeHtml(key)}"</span>: `;
        } else if (prefix.length) {
          jsonHtml += `\n${prefix}`;
        }
        switch(typeof value) {
          case "undefined": case "function": case "symbol": break;
          case "string":
            jsonHtml += `<span class="string">"${escapeHtml(value)}"</span>,`; break;
          case "number":
            jsonHtml += `<span class="number">${value}</span>,`; break;
          case "boolean":
            jsonHtml += `<span class="boolean">${value}</span>,`; break;
          default: {
            if (value === null) {
              jsonHtml += `<span class="null">${value}</span>,`;
            }
            else if (value instanceof Array) {
              jsonHtml += `[`;
              value.forEach(item => iterateJson(null, item, depth + 1));
              if (value.length) jsonHtml = jsonHtml.slice(0, -1);
              jsonHtml += `\n${prefix}],`;
            } else { //object
              jsonHtml += `{`;
              Object.keys(value).forEach(key => iterateJson(key, value[key], depth + 1));
              if (Object.keys(value).length) jsonHtml = jsonHtml.slice(0, -1);
              jsonHtml += `\n${prefix}},`;
            }
          }
        }
      }
    }

    clearTabs() {
      console.log('clearTabs');
      let image = this.shadowRoot.querySelector('.image image');
      if (image) URL.revokeObjectURL(image.src);
      Array.prototype.forEach.call(this.shadowRoot.querySelectorAll('.main > :not(.intro):not(.json)'), elem => elem.innerHTML = '');
      this.shadowRoot.querySelector('.main > .json > div').innerHTML = '';
    }

    onScanSuccess(response) {
      console.log(response)
      if (!response) return;
      this.clearTimers();
      let showIntervalId = setInterval(() => {
        if (this.enableResultShow) {
          clearInterval(showIntervalId);
          this.toggleLoader(false);
          this.stopCamera();
          this.restartCounter();
          if (this.tabs) this.fillTabs(response);
          this.dispatchEvent('resultReady', response);
        }
      }, 200);
    }

    onScanError(error) {
      console.log(error);
      if (this.unsubscribeFromScanExchangerChanges) {
        // If error happened then unsubscribe from the exchange object,
        // this will force user to create new exchange object
        this.unsubscribeFromScanExchangerChanges();
      }

      this.clearTimers();
      this.toggleLoader(false);
      this.stopCamera();
      this.restartCounter();
      this.toggleError(true, error && error.message);
      this.dispatchEvent('error', (error && error.message) || 'We\'re sorry, but something went wrong. Please try again.' );
    }

    clearTimers() {
      console.log('clearTimers');
      clearInterval(this.frameSendingIntervalId);
      clearTimeout(this.messageTimeoutId);
    }

    dispatchEvent(type, input) {
      console.log('dispatchEvent');
      input = input || {};
      let event;
      switch(type) {
        case 'resultReady':
          if (typeof CustomEvent === 'function') {
            event = new CustomEvent('resultReady', { detail: { result: input.result }, cancelable: true, bubbles: true });
          } else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent('resultReady', true, true, { result: input.result });
          }
          break;
        case 'error':
          if (typeof ErrorEvent === 'function') {
            event = new ErrorEvent('error', { cancelable: true, bubbles: true, message: input.message, error: input });
          } else {
            event = document.createEvent('ErrorEvent');
            event.initErrorEvent('error', true, true, input.message, null, null);
          }
          break;
        default: return;
      }
      super.dispatchEvent(event);
    }

    onScanProgress(progressEvent) {
      console.log('onScanProgress');
      let { loaded, total, lengthComputable } = progressEvent;
      let progressBar = this.shadowRoot.querySelector('.progress-bar-value');
      let isUploadBarHidden = hasClass(progressBar, 'hidden');
      if (lengthComputable) {
        if (isUploadBarHidden) {
          removeClass(progressBar, 'hidden');
        }
        progressBar.textContent = `${ Math.round((loaded/total) * 100) }%`;
        if (loaded === total) {
          setTimeout(() => this.changeLoaderMessage(), 200);
        }
      }
      else if(!isUploadBarHidden) {
        addClass(progressBar, 'hidden');
      }
    }

    changeLoaderMessage(cnt = 0) {
      console.log('changeLoaderMessage');
      let messages = this.shadowRoot.querySelectorAll('.pending-container h2');
      if (messages.length <= 1) return;
      Array.prototype.forEach.call(messages, elem => toggleClass(elem, 'hidden', !elem.matches(`:nth-of-type(${(cnt % (messages.length - 1)) + 2})`)));
      this.messageTimeoutId = setTimeout(() => this.changeLoaderMessage(++cnt), 1000 + Math.round(Math.random() * 3000));
    }

    permissionDialogPresent() {
      console.log('permissionDialogPresent');
      addClass(this.shadowRoot.querySelector('.permission'), 'show');
    }

    permissionDialogAbsent(timeoutId) {
      console.log('permissionDialogAbsent');
      timeoutId !== null ? clearTimeout(timeoutId) : removeClass(this.shadowRoot.querySelector('.permission'), 'show');
    }
  }
  customElements.define('microblink-ui-web', WebApi);
}
//# sourceMappingURL=microblink.js.map
