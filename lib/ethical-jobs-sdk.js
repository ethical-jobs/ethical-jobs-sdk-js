(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['ethical-jobs-sdk'] = factory());
}(this, (function () { 'use strict';

var index$3 = function index(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index$5 = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [encode(key, opts), '[', index, ']'].join('') : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [encode(key, opts), '[]=', encode(value, opts)].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [encode(key, opts), '=', encode(value, opts)].join('');
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? index$3(value) : encodeURIComponent(value);
	}

	return value;
}

var stringify = function stringify(obj, opts) {
	var defaults$$1 = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = index$5(defaults$$1, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index$7 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
      cls.apply(this, arguments);
    }

    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
      constructor: {
        value: cls,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });

    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(ExtendableBuiltin, cls);
    } else {
      ExtendableBuiltin.__proto__ = cls;
    }

    return ExtendableBuiltin;
  }

  var ExtendableError = function (_extendableBuiltin2) {
    _inherits(ExtendableError, _extendableBuiltin2);

    function ExtendableError() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      _classCallCheck(this, ExtendableError);

      // extending Error is weird and does not propagate `message`
      var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));

      Object.defineProperty(_this, 'message', {
        configurable: true,
        enumerable: false,
        value: message,
        writable: true
      });

      Object.defineProperty(_this, 'name', {
        configurable: true,
        enumerable: false,
        value: _this.constructor.name,
        writable: true
      });

      if (Error.hasOwnProperty('captureStackTrace')) {
        Error.captureStackTrace(_this, _this.constructor);
        return _possibleConstructorReturn(_this);
      }

      Object.defineProperty(_this, 'stack', {
        configurable: true,
        enumerable: false,
        value: new Error(message).stack,
        writable: true
      });
      return _this;
    }

    return ExtendableError;
  }(_extendableBuiltin(Error));

  exports.default = ExtendableError;
  module.exports = exports['default'];
});

var ExtendableError = unwrapExports(index$7);

var ApiError = function (_ExtendableError) {
  inherits(ApiError, _ExtendableError);

  function ApiError(message, errors, statusCode) {
    var debug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    classCallCheck(this, ApiError);

    var _this = possibleConstructorReturn(this, (ApiError.__proto__ || Object.getPrototypeOf(ApiError)).call(this, message));

    _this.errors = errors;
    _this.statusCode = statusCode;
    _this.debug = debug;
    return _this;
  }

  return ApiError;
}(ExtendableError);

/**
 * Checks if structure is an ImmutableJS object
 * @param  {mixed}  maybeImmutable
 */
function isImmutable(maybeImmutable) {
  if (maybeImmutable) {
    return typeof maybeImmutable.toJS === 'function';
  }
  return false;
}

var index = new function () {
  var _this = this;

  ['auth', 'jobs', 'media'].forEach(function (helperNamespace) {
    _this[helperNamespace] = {};
  });

  /**
   * Determines current env
   * @return String
   */
  this.getEnvironment = function () {
    var env = void 0;
    if (typeof window !== 'undefined' && window.EJ_ENV) {
      env = window.EJ_ENV;
    } else {
      env = process.env.EJ_ENV || process.env.REACT_APP_EJ_ENV;
    }
    return env || 'production';
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.parseParams = function (params) {
    if (params instanceof FormData) {
      return params;
    }
    return isImmutable(params) ? JSON.stringify(params.toJS()) : JSON.stringify(params);
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.getHeaders = function (params) {
    if (params instanceof FormData) {
      return undefined;
    }
    var auth = localStorage.getItem('_token') ? 'Bearer ' + localStorage.getItem('_token') : '';
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': auth
    };
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.getParams = function () {
    var verb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
    var params = arguments[1];

    return {
      method: verb.toUpperCase(),
      timeout: 3500,
      body: verb.toUpperCase() === 'GET' ? null : _this.parseParams(params),
      headers: _this.getHeaders(params)
    };
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.getDomain = function () {
    var environment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    switch (environment.toLowerCase()) {
      default:
      case 'production':
        return 'http://api.ethicaljobs.com.au';
      case 'staging':
        return 'http://api.ethicalstaging.com.au';
      case 'development':
        return 'http://api.ethicaljobs.local';
    }
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.getRoute = function () {
    var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var verb = arguments[1];
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (verb.toUpperCase() === 'GET') {
      var parsedParams = isImmutable(params) ? params.toJS() : params;
      var queryString = stringify(parsedParams, { arrayFormat: 'bracket' });
      return route + (queryString.length ? '?' + queryString : '');
    } else {
      return route;
    }
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.parseJson = function (response) {
    return response.text().then(function (text) {
      var json = text ? JSON.parse(text) : {};
      return {
        status: response.status,
        ok: response.ok,
        json: json
      };
    });
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.checkStatus = function (response) {
    if (response.ok) {
      return response.json;
    } else {
      throw new ApiError(response.json.message, response.json.errors, response.json.statusCode, response.json.debug);
    }
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.checkForToken = function (response) {
    if (response && response.meta && response.meta.token) {
      localStorage.setItem('_token', response.meta.token);
    }
    return response;
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.dispatchRequest = function (verb, route, params) {
    var reqUrl = _this.getDomain(_this.environment) + _this.getRoute(route, verb, params);
    var reqParams = _this.getParams(verb, params);
    return fetch(reqUrl, reqParams).then(_this.parseJson).then(_this.checkStatus).then(_this.checkForToken);
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.link = function (route, params) {
    var stringifiedParams = '';
    if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' && Object.keys(params).length) {
      stringifiedParams = '?' + stringify(params);
    }
    return '' + _this.getDomain(_this.environment) + route + stringifiedParams;
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.initialize = function () {
    return _this.get('/', {});
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.exportUrl = function (resource, params) {
    return _this.link('/exports/csv/' + resource, params);
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.search = function (resource, params) {
    return _this.get('/search/' + resource, params);
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.archive = function (resource, id) {
    return _this.delete('/' + resource + '/' + id);
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.restore = function (resource, id) {
    return _this.patch('/' + resource + '/' + id, { deleted_at: null });
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.auth.login = function (params) {
    return _this.post('/users/token', params);
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.auth.logout = function () {
    return new Promise(function (resolve) {
      localStorage.removeItem('_token');
      resolve(true);
    });
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.auth.load = function () {
    var token = localStorage.getItem('_token');
    return _this.get('/users/token/' + token);
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.auth.recoverPassword = function (email) {
    return _this.post('/users/token/recover', { email: email });
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.auth.resetPassword = function (params) {
    return _this.post('/users/token/reset', params);
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.jobs.approve = function (id) {
    return _this.patch('/jobs/' + id, { status: 'APPROVED' });
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.jobs.expire = function (id) {
    return _this.patch('/jobs/' + id, { expires_at: new Date().getTime() });
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.media.upload = function (file) {
    var formData = new FormData();
    formData.append('media', file);
    return _this.post('/media', formData);
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.media.attach = function (file, resource, resourceId) {
    var formData = new FormData();
    formData.append('media', file);
    return _this.post('/media/' + resource + '/' + resourceId, formData);
  };

  /**
   * Javascript style DocBlock
   * @return XXX
   */
  this.media.delete = function (id) {
    return _this.delete('/media/' + id);
  };

  this.environment = this.getEnvironment();

  ['post', 'get', 'put', 'patch', 'delete'].forEach(function (verb) {
    _this[verb] = function (route, params) {
      return _this.dispatchRequest(verb, route, params);
    };
  });
}();

return index;

})));
//# sourceMappingURL=ethical-jobs-sdk.js.map