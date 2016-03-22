module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _notifier = __webpack_require__(2);

	var _notifier2 = _interopRequireDefault(_notifier);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var message = {
	  id: "123",
	  payload: {
	    Records: [{
	      EventSource: "aws:s3"
	    }]
	  }
	};
	var notifier = new _notifier2.default(message);
	notifier.includeNotifications();
	notifier.notify(function (result) {
	  console.log(result);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _fs = __webpack_require__(23);

	var _fs2 = _interopRequireDefault(_fs);

	var _message = __webpack_require__(24);

	var _message2 = _interopRequireDefault(_message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DIR_NAME = 'notifications';

	var Notifier = function () {
	  function Notifier(message) {
	    (0, _classCallCheck3.default)(this, Notifier);

	    this.message = new _message2.default(message);
	    this.notifications = [];
	  }

	  (0, _createClass3.default)(Notifier, [{
	    key: 'addNotification',
	    value: function addNotification(notification) {
	      this.notifications.push(notification);
	    }
	  }, {
	    key: 'includeNotifications',
	    value: function includeNotifications() {
	      var _this = this;

	      _fs2.default.readdirSync('./src/' + DIR_NAME).forEach(function (file) {
	        var Notification = __webpack_require__(26)("./" + DIR_NAME + '/' + file).default;
	        var notification = new Notification();
	        if (notification.match(_this.message)) {
	          _this.addNotification(notification);
	        }
	      });
	    }
	  }, {
	    key: 'notify',
	    value: function notify(callback) {
	      this.notifications.forEach(function (notification) {
	        notification.parse();
	        console.log(notification.webhook);
	      });

	      callback({ result: "done" });
	    }
	  }]);
	  return Notifier;
	}();

	exports.default = Notifier;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(5);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	var $Object = __webpack_require__(10).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(18), 'Object', {defineProperty: __webpack_require__(14).f});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(9)
	  , core      = __webpack_require__(10)
	  , ctx       = __webpack_require__(11)
	  , hide      = __webpack_require__(13)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(12);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(14)
	  , createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(18) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(15)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , toPrimitive    = __webpack_require__(21)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(18) && !__webpack_require__(19)(function(){
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16)
	  , document = __webpack_require__(9).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _jmespath = __webpack_require__(25);

	var _jmespath2 = _interopRequireDefault(_jmespath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Message = function () {
	  function Message(message) {
	    (0, _classCallCheck3.default)(this, Message);

	    this.messageId = message.id;
	    this.payload = message.payload;
	  }

	  (0, _createClass3.default)(Message, [{
	    key: 'contains',
	    value: function contains(regexp, jsonPath) {
	      return regexp.test(_jmespath2.default.search(this.payload, jsonPath));
	    }
	  }]);
	  return Message;
	}();

	exports.default = Message;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	(function(exports) {
	  "use strict";

	  function isArray(obj) {
	    if (obj !== null) {
	      return Object.prototype.toString.call(obj) === "[object Array]";
	    } else {
	      return false;
	    }
	  }

	  function isObject(obj) {
	    if (obj !== null) {
	      return Object.prototype.toString.call(obj) === "[object Object]";
	    } else {
	      return false;
	    }
	  }

	  function strictDeepEqual(first, second) {
	    // Check the scalar case first.
	    if (first === second) {
	      return true;
	    }

	    // Check if they are the same type.
	    var firstType = Object.prototype.toString.call(first);
	    if (firstType !== Object.prototype.toString.call(second)) {
	      return false;
	    }
	    // We know that first and second have the same type so we can just check the
	    // first type from now on.
	    if (isArray(first) === true) {
	      // Short circuit if they're not the same length;
	      if (first.length !== second.length) {
	        return false;
	      }
	      for (var i = 0; i < first.length; i++) {
	        if (strictDeepEqual(first[i], second[i]) === false) {
	          return false;
	        }
	      }
	      return true;
	    }
	    if (isObject(first) === true) {
	      // An object is equal if it has the same key/value pairs.
	      var keysSeen = {};
	      for (var key in first) {
	        if (hasOwnProperty.call(first, key)) {
	          if (strictDeepEqual(first[key], second[key]) === false) {
	            return false;
	          }
	          keysSeen[key] = true;
	        }
	      }
	      // Now check that there aren't any keys in second that weren't
	      // in first.
	      for (var key2 in second) {
	        if (hasOwnProperty.call(second, key2)) {
	          if (keysSeen[key2] !== true) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }
	    return false;
	  }

	  function isFalse(obj) {
	    // From the spec:
	    // A false value corresponds to the following values:
	    // Empty list
	    // Empty object
	    // Empty string
	    // False boolean
	    // null value

	    // First check the scalar values.
	    if (obj === "" || obj === false || obj === null) {
	        return true;
	    } else if (isArray(obj) && obj.length === 0) {
	        // Check for an empty array.
	        return true;
	    } else if (isObject(obj)) {
	        // Check for an empty object.
	        for (var key in obj) {
	            // If there are any keys, then
	            // the object is not empty so the object
	            // is not false.
	            if (obj.hasOwnProperty(key)) {
	              return false;
	            }
	        }
	        return true;
	    } else {
	        return false;
	    }
	  }

	  function objValues(obj) {
	    var keys = Object.keys(obj);
	    var values = [];
	    for (var i = 0; i < keys.length; i++) {
	      values.push(obj[keys[i]]);
	    }
	    return values;
	  }

	  function merge(a, b) {
	      var merged = {};
	      for (var key in a) {
	          merged[key] = a[key];
	      }
	      for (var key2 in b) {
	          merged[key2] = b[key2];
	      }
	      return merged;
	  }


	  // The "&", "[", "<", ">" tokens
	  // are not in basicToken because
	  // there are two token variants
	  // ("&&", "[?", "<=", ">=").  This is specially handled
	  // below.

	  var basicTokens = {
	    ".": "Dot",
	    "*": "Star",
	    ",": "Comma",
	    ":": "Colon",
	    "{": "Lbrace",
	    "}": "Rbrace",
	    "]": "Rbracket",
	    "(": "Lparen",
	    ")": "Rparen",
	    "@": "Current"
	  };

	  var identifierStart = {
	      a: true, b: true, c: true, d: true, e: true, f: true, g: true, h: true,
	      i: true, j: true, k: true, l: true, m: true, n: true, o: true, p: true,
	      q: true, r: true, s: true, t: true, u: true, v: true, w: true, x: true,
	      y: true, z: true, A: true, B: true, C: true, D: true, E: true, F: true,
	      G: true, H: true, I: true, J: true, K: true, L: true, M: true, N: true,
	      O: true, P: true, Q: true, R: true, S: true, T: true, U: true, V: true,
	      W: true, X: true, Y: true, Z: true, _: true
	  };

	  var operatorStartToken = {
	      "<": true,
	      ">": true,
	      "=": true,
	      "!": true
	  };

	  var numbers = {
	      0: true,
	      1: true,
	      2: true,
	      3: true,
	      4: true,
	      5: true,
	      6: true,
	      7: true,
	      8: true,
	      9: true,
	      "-": true
	  };

	  var identifierTrailing = merge(identifierStart, numbers);

	  var skipChars = {
	      " ": true,
	      "\t": true,
	      "\n": true
	  };


	  function Lexer() {
	  }
	  Lexer.prototype = {
	      tokenize: function(stream) {
	          var tokens = [];
	          this.current = 0;
	          var start;
	          var identifier;
	          var token;
	          while (this.current < stream.length) {
	              if (identifierStart[stream[this.current]] !== undefined) {
	                  start = this.current;
	                  identifier = this.consumeUnquotedIdentifier(stream);
	                  tokens.push({type: "UnquotedIdentifier",
	                               value: identifier,
	                               start: start});
	              } else if (basicTokens[stream[this.current]] !== undefined) {
	                  tokens.push({type: basicTokens[stream[this.current]],
	                              value: stream[this.current],
	                              start: this.current});
	                  this.current++;
	              } else if (numbers[stream[this.current]] !== undefined) {
	                  token = this.consumeNumber(stream);
	                  tokens.push(token);
	              } else if (stream[this.current] === "[") {
	                  // No need to increment this.current.  This happens
	                  // in consumeLBracket
	                  token = this.consumeLBracket(stream);
	                  tokens.push(token);
	              } else if (stream[this.current] === "\"") {
	                  start = this.current;
	                  identifier = this.consumeQuotedIdentifier(stream);
	                  tokens.push({type: "QuotedIdentifier",
	                               value: identifier,
	                               start: start});
	              } else if (stream[this.current] === "'") {
	                  start = this.current;
	                  identifier = this.consumeRawStringLiteral(stream);
	                  tokens.push({type: "Literal",
	                               value: identifier,
	                               start: start});
	              } else if (stream[this.current] === "`") {
	                  start = this.current;
	                  var literal = this.consumeLiteral(stream);
	                  tokens.push({type: "Literal",
	                               value: literal,
	                               start: start});
	              } else if (operatorStartToken[stream[this.current]] !== undefined) {
	                  tokens.push(this.consumeOperator(stream));
	              } else if (skipChars[stream[this.current]] !== undefined) {
	                  // Ignore whitespace.
	                  this.current++;
	              } else if (stream[this.current] === "&") {
	                  start = this.current;
	                  this.current++;
	                  if (stream[this.current] === "&") {
	                      this.current++;
	                      tokens.push({type: "And", value: "&&", start: start});
	                  } else {
	                      tokens.push({type: "Expref", value: "&", start: start});
	                  }
	              } else if (stream[this.current] === "|") {
	                  start = this.current;
	                  this.current++;
	                  if (stream[this.current] === "|") {
	                      this.current++;
	                      tokens.push({type: "Or", value: "||", start: start});
	                  } else {
	                      tokens.push({type: "Pipe", value: "|", start: start});
	                  }
	              } else {
	                  var error = new Error("Unknown character:" + stream[this.current]);
	                  error.name = "LexerError";
	                  throw error;
	              }
	          }
	          return tokens;
	      },

	      consumeUnquotedIdentifier: function(stream) {
	          var start = this.current;
	          this.current++;
	          while (identifierTrailing[stream[this.current]] !== undefined) {
	              this.current++;
	          }
	          return stream.slice(start, this.current);
	      },

	      consumeQuotedIdentifier: function(stream) {
	          var start = this.current;
	          this.current++;
	          var maxLength = stream.length;
	          while (stream[this.current] !== "\"" && this.current < maxLength) {
	              // You can escape a double quote and you can escape an escape.
	              var current = this.current;
	              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
	                                               stream[current + 1] === "\"")) {
	                  current += 2;
	              } else {
	                  current++;
	              }
	              this.current = current;
	          }
	          this.current++;
	          return JSON.parse(stream.slice(start, this.current));
	      },

	      consumeRawStringLiteral: function(stream) {
	          var start = this.current;
	          this.current++;
	          var maxLength = stream.length;
	          while (stream[this.current] !== "'" && this.current < maxLength) {
	              // You can escape a single quote and you can escape an escape.
	              var current = this.current;
	              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
	                                               stream[current + 1] === "'")) {
	                  current += 2;
	              } else {
	                  current++;
	              }
	              this.current = current;
	          }
	          this.current++;
	          var literal = stream.slice(start + 1, this.current - 1);
	          return literal.replace("\\'", "'");
	      },

	      consumeNumber: function(stream) {
	          var start = this.current;
	          this.current++;
	          var maxLength = stream.length;
	          while (numbers[stream[this.current]] !== undefined && this.current < maxLength) {
	              this.current++;
	          }
	          var value = parseInt(stream.slice(start, this.current));
	          return {type: "Number", value: value, start: start};
	      },

	      consumeLBracket: function(stream) {
	          var start = this.current;
	          this.current++;
	          if (stream[this.current] === "?") {
	              this.current++;
	              return {type: "Filter", value: "[?", start: start};
	          } else if (stream[this.current] === "]") {
	              this.current++;
	              return {type: "Flatten", value: "[]", start: start};
	          } else {
	              return {type: "Lbracket", value: "[", start: start};
	          }
	      },

	      consumeOperator: function(stream) {
	          var start = this.current;
	          var startingChar = stream[start];
	          this.current++;
	          if (startingChar === "!") {
	              if (stream[this.current] === "=") {
	                  this.current++;
	                  return {type: "NE", value: "!=", start: start};
	              } else {
	                return {type: "Not", value: "!", start: start};
	              }
	          } else if (startingChar === "<") {
	              if (stream[this.current] === "=") {
	                  this.current++;
	                  return {type: "LTE", value: "<=", start: start};
	              } else {
	                  return {type: "LT", value: "<", start: start};
	              }
	          } else if (startingChar === ">") {
	              if (stream[this.current] === "=") {
	                  this.current++;
	                  return {type: "GTE", value: ">=", start: start};
	              } else {
	                  return {type: "GT", value: ">", start: start};
	              }
	          } else if (startingChar === "=") {
	              if (stream[this.current] === "=") {
	                  this.current++;
	                  return {type: "EQ", value: "==", start: start};
	              }
	          }
	      },

	      consumeLiteral: function(stream) {
	          this.current++;
	          var start = this.current;
	          var maxLength = stream.length;
	          var literal;
	          while(stream[this.current] !== "`" && this.current < maxLength) {
	              // You can escape a literal char or you can escape the escape.
	              var current = this.current;
	              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
	                                               stream[current + 1] === "`")) {
	                  current += 2;
	              } else {
	                  current++;
	              }
	              this.current = current;
	          }
	          var literalString = stream.slice(start, this.current).trimLeft();
	          literalString = literalString.replace("\\`", "`");
	          if (this.looksLikeJSON(literalString)) {
	              literal = JSON.parse(literalString);
	          } else {
	              // Try to JSON parse it as "<literal>"
	              literal = JSON.parse("\"" + literalString + "\"");
	          }
	          // +1 gets us to the ending "`", +1 to move on to the next char.
	          this.current++;
	          return literal;
	      },

	      looksLikeJSON: function(literalString) {
	          var startingChars = "[{\"";
	          var jsonLiterals = ["true", "false", "null"];
	          var numberLooking = "-0123456789";

	          if (literalString === "") {
	              return false;
	          } else if (startingChars.indexOf(literalString[0]) >= 0) {
	              return true;
	          } else if (jsonLiterals.indexOf(literalString) >= 0) {
	              return true;
	          } else if (numberLooking.indexOf(literalString[0]) >= 0) {
	              try {
	                  JSON.parse(literalString);
	                  return true;
	              } catch (ex) {
	                  return false;
	              }
	          } else {
	              return false;
	          }
	      }
	  };


	  function Parser() {
	      this.bindingPower = {
	          "EOF": 0,
	          "UnquotedIdentifier": 0,
	          "QuotedIdentifier": 0,
	          "Rbracket": 0,
	          "Rparen": 0,
	          "Comma": 0,
	          "Rbrace": 0,
	          "Number": 0,
	          "Current": 0,
	          "Expref": 0,
	          "Pipe": 1,
	          "Or": 2,
	          "And": 3,
	          "EQ": 5,
	          "GT": 5,
	          "LT": 5,
	          "GTE": 5,
	          "LTE": 5,
	          "NE": 5,
	          "Flatten": 9,
	          "Star": 20,
	          "Filter": 21,
	          "Dot": 40,
	          "Not": 45,
	          "Lbrace": 50,
	          "Lbracket": 55,
	          "Lparen": 60
	      };
	  }

	  Parser.prototype = {
	      parse: function(expression) {
	          this.loadTokens(expression);
	          this.index = 0;
	          var ast = this.expression(0);
	          if (this.lookahead(0) !== "EOF") {
	              var t = this.lookaheadToken(0);
	              var error = new Error(
	                  "Unexpected token type: " + t.type + ", value: " + t.value);
	              error.name = "ParserError";
	              throw error;
	          }
	          return ast;
	      },

	      loadTokens: function(expression) {
	          var lexer = new Lexer();
	          var tokens = lexer.tokenize(expression);
	          tokens.push({type: "EOF", value: "", start: expression.length});
	          this.tokens = tokens;
	      },

	      expression: function(rbp) {
	          var leftToken = this.lookaheadToken(0);
	          this.advance();
	          var name = "nud" + leftToken.type;
	          var nudMethod = this[name] || this.errorToken;
	          var left = nudMethod.call(this, leftToken);
	          var currentToken = this.lookahead(0);
	          while (rbp < this.bindingPower[currentToken]) {
	              var ledMethod = this["led" + currentToken];
	              if (ledMethod === undefined) {
	                  this.errorToken(this.lookaheadToken(0));
	              }
	              this.advance();
	              left = ledMethod.call(this, left);
	              currentToken = this.lookahead(0);
	          }
	          return left;
	      },

	      lookahead: function(number) {
	          return this.tokens[this.index + number].type;
	      },

	      lookaheadToken: function(number) {
	          return this.tokens[this.index + number];
	      },

	      advance: function() {
	          this.index++;
	      },

	      match: function(tokenType) {
	          if (this.lookahead(0) === tokenType) {
	              this.advance();
	          } else {
	              var t = this.lookaheadToken(0);
	              var error = new Error("Expected " + tokenType + ", got: " + t.type);
	              error.name = "ParserError";
	              throw error;
	          }
	      },

	      errorToken: function(token) {
	          var error = new Error("Invalid token (" +
	                                token.type + "): \"" +
	                                token.value + "\"");
	          error.name = "ParserError";
	          throw error;
	      },

	      nudLiteral: function(token) {
	          return {type: "Literal", value: token.value};
	      },

	      nudUnquotedIdentifier: function(token) {
	          return {type: "Field", name: token.value};
	      },

	      nudExpref: function() {
	        var expression = this.expression(this.bindingPower.Expref);
	        return {type: "ExpressionReference", children: [expression]};
	      },

	      nudQuotedIdentifier: function(token) {
	          var node = {type: "Field", name: token.value};
	          if (this.lookahead(0) === "Lparen") {
	              throw new Error("Quoted identifier not allowed for function names.");
	          } else {
	              return node;
	          }
	      },

	      nudNot: function() {
	        var right = this.expression(this.bindingPower.Not);
	        return {type: "NotExpression", children: [right]};
	      },

	      ledOr: function(left) {
	        var right = this.expression(this.bindingPower.Or);
	        return {type: "OrExpression", children: [left, right]};
	      },

	      ledAnd: function(left) {
	        var right = this.expression(this.bindingPower.And);
	        return {type: "AndExpression", children: [left, right]};
	      },

	      ledPipe: function(left) {
	          var right = this.expression(this.bindingPower.Pipe);
	          return {type: "Pipe", children: [left, right]};
	      },

	      nudStar: function() {
	          var left = {type: "Identity"};
	          var right = null;
	          if (this.lookahead(0) === "Rbracket") {
	              // This can happen in a multiselect,
	              // [a, b, *]
	              right = {type: "Identity"};
	          } else {
	              right = this.parseProjectionRHS(this.bindingPower.Star);
	          }
	          return {type: "ValueProjection", children: [left, right]};
	      },

	      nudCurrent: function() {
	          return {type: "Current"};
	      },

	      nudLbracket: function() {
	          var right;
	          if (this.lookahead(0) === "Number" || this.lookahead(0) === "Colon") {
	              right = this.parseIndexExpression();
	              return this.projectIfSlice({type: "Identity"}, right);
	          } else if (this.lookahead(0) === "Star" &&
	                     this.lookahead(1) === "Rbracket") {
	              this.advance();
	              this.advance();
	              right = this.parseProjectionRHS(this.bindingPower.Star);
	              return {type: "Projection",
	                      children: [{type: "Identity"}, right]};
	          } else {
	              return this.parseMultiselectList();
	          }
	      },

	      parseIndexExpression: function() {
	          if (this.lookahead(0) === "Colon" || this.lookahead(1) === "Colon") {
	              return this.parseSliceExpression();
	          } else {
	              var node = {
	                  type: "Index",
	                  value: this.lookaheadToken(0).value};
	              this.advance();
	              this.match("Rbracket");
	              return node;
	          }
	      },

	      projectIfSlice: function(left, right) {
	          var indexExpr = {type: "IndexExpression", children: [left, right]};
	          if (right.type === "Slice") {
	              return {
	                  type: "Projection",
	                  children: [indexExpr, this.parseProjectionRHS(this.bindingPower.Star)]
	              };
	          } else {
	              return indexExpr;
	          }
	      },

	      parseSliceExpression: function() {
	          // [start:end:step] where each part is optional, as well as the last
	          // colon.
	          var parts = [null, null, null];
	          var index = 0;
	          var currentToken = this.lookahead(0);
	          while (currentToken !== "Rbracket" && index < 3) {
	              if (currentToken === "Colon") {
	                  index++;
	                  this.advance();
	              } else if (currentToken === "Number") {
	                  parts[index] = this.lookaheadToken(0).value;
	                  this.advance();
	              } else {
	                  var t = this.lookahead(0);
	                  var error = new Error("Syntax error, unexpected token: " +
	                                        t.value + "(" + t.type + ")");
	                  error.name = "Parsererror";
	                  throw error;
	              }
	              currentToken = this.lookahead(0);
	          }
	          this.match("Rbracket");
	          return {
	              type: "Slice",
	              children: parts
	          };
	      },

	      nudLbrace: function() {
	          return this.parseMultiselectHash();
	      },

	      ledDot: function(left) {
	          var rbp = this.bindingPower.Dot;
	          var right;
	          if (this.lookahead(0) !== "Star") {
	              right = this.parseDotRHS(rbp);
	              return {type: "Subexpression", children: [left, right]};
	          } else {
	              // Creating a projection.
	              this.advance();
	              right = this.parseProjectionRHS(rbp);
	              return {type: "ValueProjection", children: [left, right]};
	          }
	      },

	      nudFilter: function() {
	        return this.ledFilter({type: "Identity"});
	      },

	      ledFilter: function(left) {
	        var condition = this.expression(0);
	        var right;
	        this.match("Rbracket");
	        if (this.lookahead(0) === "Flatten") {
	          right = {type: "Identity"};
	        } else {
	          right = this.parseProjectionRHS(this.bindingPower.Filter);
	        }
	        return {type: "FilterProjection", children: [left, right, condition]};
	      },

	      ledEQ: function(left) {
	        return this.parseComparator(left, "EQ");
	      },

	      ledNE: function(left) {
	        return this.parseComparator(left, "NE");
	      },

	      ledGT: function(left) {
	        return this.parseComparator(left, "GT");
	      },

	      ledGTE: function(left) {
	        return this.parseComparator(left, "GTE");
	      },

	      ledLT: function(left) {
	        return this.parseComparator(left, "LT");
	      },

	      ledLTE: function(left) {
	        return this.parseComparator(left, "LTE");
	      },

	      parseComparator: function(left, comparator) {
	        var right = this.expression(this.bindingPower[comparator]);
	        return {type: "Comparator", name: comparator, children: [left, right]};
	      },

	      ledLbracket: function(left) {
	          var token = this.lookaheadToken(0);
	          var right;
	          if (token.type === "Number" || token.type === "Colon") {
	              right = this.parseIndexExpression();
	              return this.projectIfSlice(left, right);
	          } else {
	              this.match("Star");
	              this.match("Rbracket");
	              right = this.parseProjectionRHS(this.bindingPower.Star);
	              return {type: "Projection", children: [left, right]};
	          }
	      },

	      nudFlatten: function() {
	          var left = {type: "Flatten", children: [{type: "Identity"}]};
	          var right = this.parseProjectionRHS(this.bindingPower.Flatten);
	          return {type: "Projection", children: [left, right]};
	      },

	      ledFlatten: function(left) {
	          var leftNode = {type: "Flatten", children: [left]};
	          var rightNode = this.parseProjectionRHS(this.bindingPower.Flatten);
	          return {type: "Projection", children: [leftNode, rightNode]};
	      },

	      nudLparen: function() {
	        var args = [];
	        var expression;
	        while (this.lookahead(0) !== "Rparen") {
	          if (this.lookahead(0) === "Current") {
	            expression = {type: "Current"};
	            this.advance();
	          } else {
	            expression = this.expression(0);
	          }
	          args.push(expression);
	        }
	        this.match("Rparen");
	        return args[0];
	      },

	      ledLparen: function(left) {
	        var name = left.name;
	        var args = [];
	        var expression, node;
	        while (this.lookahead(0) !== "Rparen") {
	          if (this.lookahead(0) === "Current") {
	            expression = {type: "Current"};
	            this.advance();
	          } else {
	            expression = this.expression(0);
	          }
	          if (this.lookahead(0) === "Comma") {
	            this.match("Comma");
	          }
	          args.push(expression);
	        }
	        this.match("Rparen");
	        node = {type: "Function", name: name, children: args};
	        return node;
	      },

	      parseDotRHS: function(rbp) {
	          var lookahead = this.lookahead(0);
	          var exprTokens = ["UnquotedIdentifier", "QuotedIdentifier", "Star"];
	          if (exprTokens.indexOf(lookahead) >= 0) {
	              return this.expression(rbp);
	          } else if (lookahead === "Lbracket") {
	              this.match("Lbracket");
	              return this.parseMultiselectList();
	          } else if (lookahead === "Lbrace") {
	              this.match("Lbrace");
	              return this.parseMultiselectHash();
	          }
	      },

	      parseProjectionRHS: function(rbp) {
	          var right;
	          if (this.bindingPower[this.lookahead(0)] < 10) {
	              right = {type: "Identity"};
	          } else if (this.lookahead(0) === "Lbracket") {
	              right = this.expression(rbp);
	          } else if (this.lookahead(0) === "Filter") {
	              right = this.expression(rbp);
	          } else if (this.lookahead(0) === "Dot") {
	              this.match("Dot");
	              right = this.parseDotRHS(rbp);
	          } else {
	              var t = this.lookaheadToken(0);
	              var error = new Error("Sytanx error, unexpected token: " +
	                                    t.value + "(" + t.type + ")");
	              error.name = "ParserError";
	              throw error;
	          }
	          return right;
	      },

	      parseMultiselectList: function() {
	          var expressions = [];
	          while (this.lookahead(0) !== "Rbracket") {
	              var expression = this.expression(0);
	              expressions.push(expression);
	              if (this.lookahead(0) === "Comma") {
	                  this.match("Comma");
	                  if (this.lookahead(0) === "Rbracket") {
	                    throw new Error("Unexpected token Rbracket");
	                  }
	              }
	          }
	          this.match("Rbracket");
	          return {type: "MultiSelectList", children: expressions};
	      },

	      parseMultiselectHash: function() {
	        var pairs = [];
	        var identifierTypes = ["UnquotedIdentifier", "QuotedIdentifier"];
	        var keyToken, keyName, value, node;
	        for (;;) {
	          keyToken = this.lookaheadToken(0);
	          if (identifierTypes.indexOf(keyToken.type) < 0) {
	            throw new Error("Expecting an identifier token, got: " +
	                            keyToken.type);
	          }
	          keyName = keyToken.value;
	          this.advance();
	          this.match("Colon");
	          value = this.expression(0);
	          node = {type: "KeyValuePair", name: keyName, value: value};
	          pairs.push(node);
	          if (this.lookahead(0) === "Comma") {
	            this.match("Comma");
	          } else if (this.lookahead(0) === "Rbrace") {
	            this.match("Rbrace");
	            break;
	          }
	        }
	        return {type: "MultiSelectHash", children: pairs};
	      }
	  };


	  function TreeInterpreter(runtime) {
	    this.runtime = runtime;
	  }

	  TreeInterpreter.prototype = {
	      search: function(node, value) {
	          return this.visit(node, value);
	      },

	      visit: function(node, value) {
	          var visitMethod = this["visit" + node.type];
	          if (visitMethod === undefined) {
	              throw new Error("Unknown node type: " + node.type);
	          }
	          return visitMethod.call(this, node, value);
	      },

	      visitField: function(node, value) {
	          if (value === null ) {
	              return null;
	          } else if (isObject(value)) {
	              var field = value[node.name];
	              if (field === undefined) {
	                  return null;
	              } else {
	                  return field;
	              }
	          } else {
	            return null;
	          }
	      },

	      visitSubexpression: function(node, value) {
	          var result = this.visit(node.children[0], value);
	          for (var i = 1; i < node.children.length; i++) {
	              result = this.visit(node.children[1], result);
	              if (result === null) {
	                  return null;
	              }
	          }
	          return result;
	      },

	      visitIndexExpression: function(node, value) {
	        var left = this.visit(node.children[0], value);
	        var right = this.visit(node.children[1], left);
	        return right;
	      },

	      visitIndex: function(node, value) {
	        if (!isArray(value)) {
	          return null;
	        }
	        var index = node.value;
	        if (index < 0) {
	          index = value.length + index;
	        }
	        var result = value[index];
	        if (result === undefined) {
	          result = null;
	        }
	        return result;
	      },

	      visitSlice: function(node, value) {
	        if (!isArray(value)) {
	          return null;
	        }
	        var sliceParams = node.children.slice(0);
	        var computed = this.computeSliceParams(value.length, sliceParams);
	        var start = computed[0];
	        var stop = computed[1];
	        var step = computed[2];
	        var result = [];
	        var i;
	        if (step > 0) {
	            for (i = start; i < stop; i += step) {
	                result.push(value[i]);
	            }
	        } else {
	            for (i = start; i > stop; i += step) {
	                result.push(value[i]);
	            }
	        }
	        return result;
	      },

	      computeSliceParams: function(arrayLength, sliceParams) {
	        var start = sliceParams[0];
	        var stop = sliceParams[1];
	        var step = sliceParams[2];
	        var computed = [null, null, null];
	        if (step === null) {
	          step = 1;
	        } else if (step === 0) {
	          var error = new Error("Invalid slice, step cannot be 0");
	          error.name = "RuntimeError";
	          throw error;
	        }
	        var stepValueNegative = step < 0 ? true : false;

	        if (start === null) {
	            start = stepValueNegative ? arrayLength - 1 : 0;
	        } else {
	            start = this.capSliceRange(arrayLength, start, step);
	        }

	        if (stop === null) {
	            stop = stepValueNegative ? -1 : arrayLength;
	        } else {
	            stop = this.capSliceRange(arrayLength, stop, step);
	        }
	        computed[0] = start;
	        computed[1] = stop;
	        computed[2] = step;
	        return computed;
	      },

	      capSliceRange: function(arrayLength, actualValue, step) {
	          if (actualValue < 0) {
	              actualValue += arrayLength;
	              if (actualValue < 0) {
	                  actualValue = step < 0 ? -1 : 0;
	              }
	          } else if (actualValue >= arrayLength) {
	              actualValue = step < 0 ? arrayLength - 1 : arrayLength;
	          }
	          return actualValue;
	      },

	      visitProjection: function(node, value) {
	        // Evaluate left child.
	        var base = this.visit(node.children[0], value);
	        if (!isArray(base)) {
	          return null;
	        }
	        var collected = [];
	        for (var i = 0; i < base.length; i++) {
	          var current = this.visit(node.children[1], base[i]);
	          if (current !== null) {
	            collected.push(current);
	          }
	        }
	        return collected;
	      },

	      visitValueProjection: function(node, value) {
	        // Evaluate left child.
	        var base = this.visit(node.children[0], value);
	        if (!isObject(base)) {
	          return null;
	        }
	        var collected = [];
	        var values = objValues(base);
	        for (var i = 0; i < values.length; i++) {
	          var current = this.visit(node.children[1], values[i]);
	          if (current !== null) {
	            collected.push(current);
	          }
	        }
	        return collected;
	      },

	      visitFilterProjection: function(node, value) {
	        var base = this.visit(node.children[0], value);
	        if (!isArray(base)) {
	          return null;
	        }
	        var filtered = [];
	        var finalResults = [];
	        var matched, current;
	        for (var i = 0; i < base.length; i++) {
	          matched = this.visit(node.children[2], base[i]);
	          if (!isFalse(matched)) {
	            filtered.push(base[i]);
	          }
	        }
	        for (var j = 0; j < filtered.length; j++) {
	          current = this.visit(node.children[1], filtered[j]);
	          if (current !== null) {
	            finalResults.push(current);
	          }
	        }
	        return finalResults;
	      },

	      visitComparator: function(node, value) {
	        var first = this.visit(node.children[0], value);
	        var second = this.visit(node.children[1], value);
	        var result;
	        switch(node.name) {
	          case "EQ":
	            result = strictDeepEqual(first, second);
	            break;
	          case "NE":
	            result = !strictDeepEqual(first, second);
	            break;
	          case "GT":
	            result = first > second;
	            break;
	          case "GTE":
	            result = first >= second;
	            break;
	          case "LT":
	            result = first < second;
	            break;
	          case "LTE":
	            result = first <= second;
	            break;
	          default:
	            throw new Error("Unknown comparator: " + node.name);
	        }
	        return result;
	      },

	      visitFlatten: function(node, value) {
	        var original = this.visit(node.children[0], value);
	        if (!isArray(original)) {
	          return null;
	        }
	        var merged = [];
	        for (var i = 0; i < original.length; i++) {
	          var current = original[i];
	          if (isArray(current)) {
	            merged.push.apply(merged, current);
	          } else {
	            merged.push(current);
	          }
	        }
	        return merged;
	      },

	      visitIdentity: function(node, value) {
	        return value;
	      },

	      visitMultiSelectList: function(node, value) {
	        if (value === null) {
	          return null;
	        }
	        var collected = [];
	        for (var i = 0; i < node.children.length; i++) {
	            collected.push(this.visit(node.children[i], value));
	        }
	        return collected;
	      },

	      visitMultiSelectHash: function(node, value) {
	        if (value === null) {
	          return null;
	        }
	        var collected = {};
	        var child;
	        for (var i = 0; i < node.children.length; i++) {
	          child = node.children[i];
	          collected[child.name] = this.visit(child.value, value);
	        }
	        return collected;
	      },

	      visitOrExpression: function(node, value) {
	        var matched = this.visit(node.children[0], value);
	        if (isFalse(matched)) {
	            matched = this.visit(node.children[1], value);
	        }
	        return matched;
	      },

	      visitAndExpression: function(node, value) {
	        var first = this.visit(node.children[0], value);

	        if (isFalse(first) === true) {
	          return first;
	        }
	        return this.visit(node.children[1], value);
	      },

	      visitNotExpression: function(node, value) {
	        var first = this.visit(node.children[0], value);
	        return isFalse(first);
	      },

	      visitLiteral: function(node) {
	          return node.value;
	      },

	      visitPipe: function(node, value) {
	        var left = this.visit(node.children[0], value);
	        return this.visit(node.children[1], left);
	      },

	      visitCurrent: function(node, value) {
	          return value;
	      },

	      visitFunction: function(node, value) {
	        var resolvedArgs = [];
	        for (var i = 0; i < node.children.length; i++) {
	            resolvedArgs.push(this.visit(node.children[i], value));
	        }
	        return this.runtime.callFunction(node.name, resolvedArgs);
	      },

	      visitExpressionReference: function(node) {
	        var refNode = node.children[0];
	        // Tag the node with a specific attribute so the type
	        // checker verify the type.
	        refNode.jmespathType = "Expref";
	        return refNode;
	      }
	  };

	  function Runtime(interpreter) {
	    this.interpreter = interpreter;
	    this.functionTable = {
	        // name: [function, <signature>]
	        // The <signature> can be:
	        //
	        // {
	        //   args: [[type1, type2], [type1, type2]],
	        //   variadic: true|false
	        // }
	        //
	        // Each arg in the arg list is a list of valid types
	        // (if the function is overloaded and supports multiple
	        // types.  If the type is "any" then no type checking
	        // occurs on the argument.  Variadic is optional
	        // and if not provided is assumed to be false.
	        abs: {func: this.functionAbs, signature: [{types: ["number"]}]},
	        avg: {func: this.functionAvg, signature: [{types: ["array-number"]}]},
	        ceil: {func: this.functionCeil, signature: [{types: ["number"]}]},
	        contains: {
	            func: this.functionContains,
	            signature: [{types: ["string", "array"]}, {types: ["any"]}]},
	        "ends_with": {
	            func: this.functionEndsWith,
	            signature: [{types: ["string"]}, {types: ["string"]}]},
	        floor: {func: this.functionFloor, signature: [{types: ["number"]}]},
	        length: {
	            func: this.functionLength,
	            signature: [{types: ["string", "array", "object"]}]},
	        map: {
	            func: this.functionMap,
	            signature: [{types: ["expref"]}, {types: ["array"]}]},
	        max: {
	            func: this.functionMax,
	            signature: [{types: ["array-number", "array-string"]}]},
	        "merge": {
	            func: this.functionMerge,
	            signature: [{types: ["object"], variadic: true}]
	        },
	        "max_by": {
	          func: this.functionMaxBy,
	          signature: [{types: ["array"]}, {types: ["expref"]}]
	        },
	        sum: {func: this.functionSum, signature: [{types: ["array-number"]}]},
	        "starts_with": {
	            func: this.functionStartsWith,
	            signature: [{types: ["string"]}, {types: ["string"]}]},
	        min: {
	            func: this.functionMin,
	            signature: [{types: ["array-number", "array-string"]}]},
	        "min_by": {
	          func: this.functionMinBy,
	          signature: [{types: ["array"]}, {types: ["expref"]}]
	        },
	        type: {func: this.functionType, signature: [{types: ["any"]}]},
	        keys: {func: this.functionKeys, signature: [{types: ["object"]}]},
	        values: {func: this.functionValues, signature: [{types: ["object"]}]},
	        sort: {func: this.functionSort, signature: [{types: ["array-string", "array-number"]}]},
	        "sort_by": {
	          func: this.functionSortBy,
	          signature: [{types: ["array"]}, {types: ["expref"]}]
	        },
	        join: {
	            func: this.functionJoin,
	            signature: [
	                {types: ["string"]},
	                {types: ["array-string"]}
	            ]
	        },
	        reverse: {
	            func: this.functionReverse,
	            signature: [{types: ["string", "array"]}]},
	        "to_array": {func: this.functionToArray, signature: [{types: ["any"]}]},
	        "to_string": {func: this.functionToString, signature: [{types: ["any"]}]},
	        "to_number": {func: this.functionToNumber, signature: [{types: ["any"]}]},
	        "not_null": {
	            func: this.functionNotNull,
	            signature: [{types: ["any"], variadic: true}]
	        }
	    };
	  }

	  Runtime.prototype = {
	    callFunction: function(name, resolvedArgs) {
	      var functionEntry = this.functionTable[name];
	      if (functionEntry === undefined) {
	          throw new Error("Unknown function: " + name + "()");
	      }
	      this.validateArgs(name, resolvedArgs, functionEntry.signature);
	      return functionEntry.func.call(this, resolvedArgs);
	    },

	    validateArgs: function(name, args, signature) {
	        // Validating the args requires validating
	        // the correct arity and the correct type of each arg.
	        // If the last argument is declared as variadic, then we need
	        // a minimum number of args to be required.  Otherwise it has to
	        // be an exact amount.
	        var pluralized;
	        if (signature[signature.length - 1].variadic) {
	            if (args.length < signature.length) {
	                pluralized = signature.length === 1 ? " argument" : " arguments";
	                throw new Error("ArgumentError: " + name + "() " +
	                                "takes at least" + signature.length + pluralized +
	                                " but received " + args.length);
	            }
	        } else if (args.length !== signature.length) {
	            pluralized = signature.length === 1 ? " argument" : " arguments";
	            throw new Error("ArgumentError: " + name + "() " +
	                            "takes " + signature.length + pluralized +
	                            " but received " + args.length);
	        }
	        var currentSpec;
	        var actualType;
	        var typeMatched;
	        for (var i = 0; i < signature.length; i++) {
	            typeMatched = false;
	            currentSpec = signature[i].types;
	            actualType = this.getTypeName(args[i]);
	            for (var j = 0; j < currentSpec.length; j++) {
	                if (this.typeMatches(actualType, currentSpec[j], args[i])) {
	                    typeMatched = true;
	                    break;
	                }
	            }
	            if (!typeMatched) {
	                throw new Error("TypeError: " + name + "() " +
	                                "expected argument " + (i + 1) +
	                                " to be type " + currentSpec +
	                                " but received type " + actualType +
	                                " instead.");
	            }
	        }
	    },

	    typeMatches: function(actual, expected, argValue) {
	        if (expected === "any") {
	            return true;
	        }
	        if (expected.indexOf("array") === 0) {
	            // The expected type can either just be array,
	            // or it can require a specific subtype (array of numbers).
	            //
	            // The simplest case is if "array" with no subtype is specified.
	            if (expected === "array") {
	                return actual.indexOf("array") === 0;
	            } else if (actual.indexOf("array") === 0) {
	                // Otherwise we need to check subtypes.
	                // I think this has potential to be improved.
	                var subtype = expected.split("-")[1];
	                for (var i = 0; i < argValue.length; i++) {
	                    if (!this.typeMatches(
	                            this.getTypeName(argValue[i]), subtype,
	                                             argValue[i])) {
	                        return false;
	                    }
	                }
	                return true;
	            }
	        } else {
	            return actual === expected;
	        }
	    },
	    getTypeName: function(obj) {
	        switch (Object.prototype.toString.call(obj)) {
	            case "[object String]":
	              return "string";
	            case "[object Number]":
	              return "number";
	            case "[object Array]":
	              return "array";
	            case "[object Boolean]":
	              return "boolean";
	            case "[object Null]":
	              return "null";
	            case "[object Object]":
	              // Check if it's an expref.  If it has, it's been
	              // tagged with a jmespathType attr of 'Expref';
	              if (obj.jmespathType === "Expref") {
	                return "expref";
	              } else {
	                return "object";
	              }
	        }
	    },

	    functionStartsWith: function(resolvedArgs) {
	        return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0;
	    },

	    functionEndsWith: function(resolvedArgs) {
	        var searchStr = resolvedArgs[0];
	        var suffix = resolvedArgs[1];
	        return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;
	    },

	    functionReverse: function(resolvedArgs) {
	        var typeName = this.getTypeName(resolvedArgs[0]);
	        if (typeName === "string") {
	          var originalStr = resolvedArgs[0];
	          var reversedStr = "";
	          for (var i = originalStr.length - 1; i >= 0; i--) {
	              reversedStr += originalStr[i];
	          }
	          return reversedStr;
	        } else {
	          var reversedArray = resolvedArgs[0].slice(0);
	          reversedArray.reverse();
	          return reversedArray;
	        }
	    },

	    functionAbs: function(resolvedArgs) {
	      return Math.abs(resolvedArgs[0]);
	    },

	    functionCeil: function(resolvedArgs) {
	        return Math.ceil(resolvedArgs[0]);
	    },

	    functionAvg: function(resolvedArgs) {
	        var sum = 0;
	        var inputArray = resolvedArgs[0];
	        for (var i = 0; i < inputArray.length; i++) {
	            sum += inputArray[i];
	        }
	        return sum / inputArray.length;
	    },

	    functionContains: function(resolvedArgs) {
	        return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0;
	    },

	    functionFloor: function(resolvedArgs) {
	        return Math.floor(resolvedArgs[0]);
	    },

	    functionLength: function(resolvedArgs) {
	       if (!isObject(resolvedArgs[0])) {
	         return resolvedArgs[0].length;
	       } else {
	         // As far as I can tell, there's no way to get the length
	         // of an object without O(n) iteration through the object.
	         return Object.keys(resolvedArgs[0]).length;
	       }
	    },

	    functionMap: function(resolvedArgs) {
	      var mapped = [];
	      var interpreter = this.interpreter;
	      var exprefNode = resolvedArgs[0];
	      var elements = resolvedArgs[1];
	      for (var i = 0; i < elements.length; i++) {
	          mapped.push(interpreter.visit(exprefNode, elements[i]));
	      }
	      return mapped;
	    },

	    functionMerge: function(resolvedArgs) {
	      var merged = {};
	      for (var i = 0; i < resolvedArgs.length; i++) {
	        var current = resolvedArgs[i];
	        for (var key in current) {
	          merged[key] = current[key];
	        }
	      }
	      return merged;
	    },

	    functionMax: function(resolvedArgs) {
	      if (resolvedArgs[0].length > 0) {
	        var typeName = this.getTypeName(resolvedArgs[0][0]);
	        if (typeName === "number") {
	          return Math.max.apply(Math, resolvedArgs[0]);
	        } else {
	          var elements = resolvedArgs[0];
	          var maxElement = elements[0];
	          for (var i = 1; i < elements.length; i++) {
	              if (maxElement.localeCompare(elements[i]) < 0) {
	                  maxElement = elements[i];
	              }
	          }
	          return maxElement;
	        }
	      } else {
	          return null;
	      }
	    },

	    functionMin: function(resolvedArgs) {
	      if (resolvedArgs[0].length > 0) {
	        var typeName = this.getTypeName(resolvedArgs[0][0]);
	        if (typeName === "number") {
	          return Math.min.apply(Math, resolvedArgs[0]);
	        } else {
	          var elements = resolvedArgs[0];
	          var minElement = elements[0];
	          for (var i = 1; i < elements.length; i++) {
	              if (elements[i].localeCompare(minElement) < 0) {
	                  minElement = elements[i];
	              }
	          }
	          return minElement;
	        }
	      } else {
	        return null;
	      }
	    },

	    functionSum: function(resolvedArgs) {
	      var sum = 0;
	      var listToSum = resolvedArgs[0];
	      for (var i = 0; i < listToSum.length; i++) {
	        sum += listToSum[i];
	      }
	      return sum;
	    },

	    functionType: function(resolvedArgs) {
	        return this.getTypeName(resolvedArgs[0]);
	    },

	    functionKeys: function(resolvedArgs) {
	        return Object.keys(resolvedArgs[0]);
	    },

	    functionValues: function(resolvedArgs) {
	        var obj = resolvedArgs[0];
	        var keys = Object.keys(obj);
	        var values = [];
	        for (var i = 0; i < keys.length; i++) {
	            values.push(obj[keys[i]]);
	        }
	        return values;
	    },

	    functionJoin: function(resolvedArgs) {
	        var joinChar = resolvedArgs[0];
	        var listJoin = resolvedArgs[1];
	        return listJoin.join(joinChar);
	    },

	    functionToArray: function(resolvedArgs) {
	        if (this.getTypeName(resolvedArgs[0]) === "array") {
	            return resolvedArgs[0];
	        } else {
	            return [resolvedArgs[0]];
	        }
	    },

	    functionToString: function(resolvedArgs) {
	        if (this.getTypeName(resolvedArgs[0]) === "string") {
	            return resolvedArgs[0];
	        } else {
	            return JSON.stringify(resolvedArgs[0]);
	        }
	    },

	    functionToNumber: function(resolvedArgs) {
	        var typeName = this.getTypeName(resolvedArgs[0]);
	        var convertedValue;
	        if (typeName === "number") {
	            return resolvedArgs[0];
	        } else if (typeName === "string") {
	            convertedValue = +resolvedArgs[0];
	            if (!isNaN(convertedValue)) {
	                return convertedValue;
	            }
	        }
	        return null;
	    },

	    functionNotNull: function(resolvedArgs) {
	        for (var i = 0; i < resolvedArgs.length; i++) {
	            if (this.getTypeName(resolvedArgs[i]) !== "null") {
	                return resolvedArgs[i];
	            }
	        }
	        return null;
	    },

	    functionSort: function(resolvedArgs) {
	        var sortedArray = resolvedArgs[0].slice(0);
	        sortedArray.sort();
	        return sortedArray;
	    },

	    functionSortBy: function(resolvedArgs) {
	        var sortedArray = resolvedArgs[0].slice(0);
	        if (sortedArray.length === 0) {
	            return sortedArray;
	        }
	        var interpreter = this.interpreter;
	        var exprefNode = resolvedArgs[1];
	        var requiredType = this.getTypeName(
	            interpreter.visit(exprefNode, sortedArray[0]));
	        if (["number", "string"].indexOf(requiredType) < 0) {
	            throw new Error("TypeError");
	        }
	        var that = this;
	        // In order to get a stable sort out of an unstable
	        // sort algorithm, we decorate/sort/undecorate (DSU)
	        // by creating a new list of [index, element] pairs.
	        // In the cmp function, if the evaluated elements are
	        // equal, then the index will be used as the tiebreaker.
	        // After the decorated list has been sorted, it will be
	        // undecorated to extract the original elements.
	        var decorated = [];
	        for (var i = 0; i < sortedArray.length; i++) {
	          decorated.push([i, sortedArray[i]]);
	        }
	        decorated.sort(function(a, b) {
	          var exprA = interpreter.visit(exprefNode, a[1]);
	          var exprB = interpreter.visit(exprefNode, b[1]);
	          if (that.getTypeName(exprA) !== requiredType) {
	              throw new Error(
	                  "TypeError: expected " + requiredType + ", received " +
	                  that.getTypeName(exprA));
	          } else if (that.getTypeName(exprB) !== requiredType) {
	              throw new Error(
	                  "TypeError: expected " + requiredType + ", received " +
	                  that.getTypeName(exprB));
	          }
	          if (exprA > exprB) {
	            return 1;
	          } else if (exprA < exprB) {
	            return -1;
	          } else {
	            // If they're equal compare the items by their
	            // order to maintain relative order of equal keys
	            // (i.e. to get a stable sort).
	            return a[0] - b[0];
	          }
	        });
	        // Undecorate: extract out the original list elements.
	        for (var j = 0; j < decorated.length; j++) {
	          sortedArray[j] = decorated[j][1];
	        }
	        return sortedArray;
	    },

	    functionMaxBy: function(resolvedArgs) {
	      var exprefNode = resolvedArgs[1];
	      var resolvedArray = resolvedArgs[0];
	      var keyFunction = this.createKeyFunction(exprefNode, ["number", "string"]);
	      var maxNumber = -Infinity;
	      var maxRecord;
	      var current;
	      for (var i = 0; i < resolvedArray.length; i++) {
	        current = keyFunction(resolvedArray[i]);
	        if (current > maxNumber) {
	          maxNumber = current;
	          maxRecord = resolvedArray[i];
	        }
	      }
	      return maxRecord;
	    },

	    functionMinBy: function(resolvedArgs) {
	      var exprefNode = resolvedArgs[1];
	      var resolvedArray = resolvedArgs[0];
	      var keyFunction = this.createKeyFunction(exprefNode, ["number", "string"]);
	      var minNumber = Infinity;
	      var minRecord;
	      var current;
	      for (var i = 0; i < resolvedArray.length; i++) {
	        current = keyFunction(resolvedArray[i]);
	        if (current < minNumber) {
	          minNumber = current;
	          minRecord = resolvedArray[i];
	        }
	      }
	      return minRecord;
	    },

	    createKeyFunction: function(exprefNode, allowedTypes) {
	      var that = this;
	      var interpreter = this.interpreter;
	      var keyFunc = function(x) {
	        var current = interpreter.visit(exprefNode, x);
	        if (allowedTypes.indexOf(that.getTypeName(current)) < 0) {
	          var msg = "TypeError: expected one of " + allowedTypes +
	                    ", received " + that.getTypeName(current);
	          throw new Error(msg);
	        }
	        return current;
	      };
	      return keyFunc;
	    }

	  };

	  function compile(stream) {
	    var parser = new Parser();
	    var ast = parser.parse(stream);
	    return ast;
	  }

	  function tokenize(stream) {
	      var lexer = new Lexer();
	      return lexer.tokenize(stream);
	  }

	  function search(data, expression) {
	      var parser = new Parser();
	      // This needs to be improved.  Both the interpreter and runtime depend on
	      // each other.  The runtime needs the interpreter to support exprefs.
	      // There's likely a clean way to avoid the cyclic dependency.
	      var runtime = new Runtime();
	      var interpreter = new TreeInterpreter(runtime);
	      runtime.interpreter = interpreter;
	      var node = parser.parse(expression);
	      return interpreter.search(node, data);
	  }

	  exports.tokenize = tokenize;
	  exports.compile = compile;
	  exports.search = search;
	  exports.Parser = Parser;
	  exports.strictDeepEqual = strictDeepEqual;
	})( false ? this.jmespath = {} : exports);


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./index": 1,
		"./index.js": 1,
		"./message": 24,
		"./message.js": 24,
		"./notification": 27,
		"./notification.js": 27,
		"./notifications/ec2": 28,
		"./notifications/ec2.js": 28,
		"./notifications/s3": 91,
		"./notifications/s3.js": 91,
		"./notifier": 2,
		"./notifier.js": 2
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 26;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Notification = function () {
	  function Notification() {
	    (0, _classCallCheck3.default)(this, Notification);

	    this._emoji = ":ghost:";
	  }

	  (0, _createClass3.default)(Notification, [{
	    key: "parse",
	    value: function parse() {}
	  }, {
	    key: "emoji",
	    get: function get() {
	      return this._emoji;
	    },
	    set: function set(emoji) {
	      this._emoji = emoji;
	    }
	  }, {
	    key: "webhook",
	    get: function get() {
	      return {
	        emoji: this.emoji
	      };
	    }
	  }]);
	  return Notification;
	}();

	exports.default = Notification;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(29);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(40);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(83);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _notification = __webpack_require__(27);

	var _notification2 = _interopRequireDefault(_notification);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Notification) {
	  (0, _inherits3.default)(_class, _Notification);

	  function _class() {
	    (0, _classCallCheck3.default)(this, _class);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
	  }

	  (0, _createClass3.default)(_class, [{
	    key: "match",
	    value: function match(message) {
	      return message.contains(/aws:s3/, "Records[0].EventSource");
	    }
	  }, {
	    key: "parse",
	    value: function parse() {
	      this.emoji = ":aaaa:";
	    }
	  }]);
	  return _class;
	}(_notification2.default);

	exports.default = _class;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	module.exports = __webpack_require__(10).Object.getPrototypeOf;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(32)
	  , $getPrototypeOf = __webpack_require__(34);

	__webpack_require__(39)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(33);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(35)
	  , toObject    = __webpack_require__(32)
	  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(37)('keys')
	  , uid    = __webpack_require__(38);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(9)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(10)
	  , fails   = __webpack_require__(19);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(41);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(42);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(70);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(43), __esModule: true };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	__webpack_require__(66);
	module.exports = __webpack_require__(65)('iterator');

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(45)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(47)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(46)
	  , defined   = __webpack_require__(33);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(48)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(49)
	  , hide           = __webpack_require__(13)
	  , has            = __webpack_require__(35)
	  , Iterators      = __webpack_require__(50)
	  , $iterCreate    = __webpack_require__(51)
	  , setToStringTag = __webpack_require__(64)
	  , getPrototypeOf = __webpack_require__(34)
	  , ITERATOR       = __webpack_require__(65)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(52)
	  , descriptor     = __webpack_require__(22)
	  , setToStringTag = __webpack_require__(64)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(13)(IteratorPrototype, __webpack_require__(65)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(15)
	  , dPs         = __webpack_require__(53)
	  , enumBugKeys = __webpack_require__(62)
	  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(20)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(63).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(14)
	  , anObject = __webpack_require__(15)
	  , getKeys  = __webpack_require__(54);

	module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(55)
	  , enumBugKeys = __webpack_require__(62);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(35)
	  , toIObject    = __webpack_require__(56)
	  , arrayIndexOf = __webpack_require__(59)(false)
	  , IE_PROTO     = __webpack_require__(36)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(57)
	  , defined = __webpack_require__(33);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(58);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(56)
	  , toLength  = __webpack_require__(60)
	  , toIndex   = __webpack_require__(61);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(46)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(46)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9).document && document.documentElement;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(14).f
	  , has = __webpack_require__(35)
	  , TAG = __webpack_require__(65)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(37)('wks')
	  , uid        = __webpack_require__(38)
	  , Symbol     = __webpack_require__(9).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	var global        = __webpack_require__(9)
	  , hide          = __webpack_require__(13)
	  , Iterators     = __webpack_require__(50)
	  , TO_STRING_TAG = __webpack_require__(65)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(68)
	  , step             = __webpack_require__(69)
	  , Iterators        = __webpack_require__(50)
	  , toIObject        = __webpack_require__(56);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(47)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	__webpack_require__(82);
	module.exports = __webpack_require__(10).Symbol;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(9)
	  , core           = __webpack_require__(10)
	  , has            = __webpack_require__(35)
	  , DESCRIPTORS    = __webpack_require__(18)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(49)
	  , META           = __webpack_require__(73).KEY
	  , $fails         = __webpack_require__(19)
	  , shared         = __webpack_require__(37)
	  , setToStringTag = __webpack_require__(64)
	  , uid            = __webpack_require__(38)
	  , wks            = __webpack_require__(65)
	  , keyOf          = __webpack_require__(74)
	  , enumKeys       = __webpack_require__(75)
	  , isArray        = __webpack_require__(78)
	  , anObject       = __webpack_require__(15)
	  , toIObject      = __webpack_require__(56)
	  , toPrimitive    = __webpack_require__(21)
	  , createDesc     = __webpack_require__(22)
	  , _create        = __webpack_require__(52)
	  , gOPNExt        = __webpack_require__(79)
	  , $GOPD          = __webpack_require__(81)
	  , $DP            = __webpack_require__(14)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , replacer, $replacer;
	  while(arguments.length > i)args.push(arguments[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var BUGGY_JSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(80).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(77).f  = $propertyIsEnumerable
	  __webpack_require__(76).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(48)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	for(var symbols = (
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; ){
	  var key     = symbols[i++]
	    , Wrapper = core.Symbol
	    , sym     = wks(key);
	  if(!(key in Wrapper))dP(Wrapper, key, {value: USE_NATIVE ? sym : wrap(sym)});
	};

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	if(!QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild)setter = true;

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || BUGGY_JSON), 'JSON', {stringify: $stringify});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(38)('meta')
	  , isObject = __webpack_require__(16)
	  , has      = __webpack_require__(35)
	  , setDesc  = __webpack_require__(14).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(19)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(54)
	  , toIObject = __webpack_require__(56);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(54)
	  , gOPS    = __webpack_require__(76)
	  , pIE     = __webpack_require__(77);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 77 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(58);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(56)
	  , gOPN      = __webpack_require__(80).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(55)
	  , hiddenKeys = __webpack_require__(62).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(77)
	  , createDesc     = __webpack_require__(22)
	  , toIObject      = __webpack_require__(56)
	  , toPrimitive    = __webpack_require__(21)
	  , has            = __webpack_require__(35)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(18) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(84);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(88);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(41);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	module.exports = __webpack_require__(10).Object.setPrototypeOf;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(87).set});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(16)
	  , anObject = __webpack_require__(15);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(11)(Function.call, __webpack_require__(81).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	var $Object = __webpack_require__(10).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(52)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(29);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(40);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(83);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _notification = __webpack_require__(27);

	var _notification2 = _interopRequireDefault(_notification);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _class = function (_Notification) {
	  (0, _inherits3.default)(_class, _Notification);

	  function _class() {
	    (0, _classCallCheck3.default)(this, _class);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
	  }

	  (0, _createClass3.default)(_class, [{
	    key: 'match',
	    value: function match(message) {
	      return message.contains(/aws:s3/, 'Records[0].EventSource');
	    }
	  }, {
	    key: 'parse',
	    value: function parse() {
	      this.emoji = ':aaaa:';
	    }
	  }]);
	  return _class;
	}(_notification2.default);

	exports.default = _class;

/***/ }
/******/ ]);