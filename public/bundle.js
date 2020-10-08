/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moment/locale sync recursive (es-us(\\.js)?)$":
/*!*********************************************************!*\
  !*** ./node_modules/moment/locale sync (es-us(\.js)?)$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive (es-us(\\.js)?)$";

/***/ }),

/***/ "./node_modules/moment/locale/es-us.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/es-us.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    var esUs = moment.defineLocale('es-us', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'MM/DD/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY h:mm A',
            LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return esUs;

})));


/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js

;(function (global, factory) {
     true ? module.exports = factory() :
    undefined
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                __webpack_require__("./node_modules/moment/locale sync recursive (es-us(\\.js)?)$")("./" + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return API; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _models_film__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/film */ "./src/models/film.js");
/* harmony import */ var _models_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/comment */ "./src/models/comment.js");





class API {
  constructor({endPoint, authorization}) {
    this._endPoint = endPoint;
    this._authorization = authorization;
  }

  getCards() {
    return this._load({url: `movies`})
      .then(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["toJSON"])
      .then(_models_film__WEBPACK_IMPORTED_MODULE_2__["default"].parseFilms);
  }

  syncCards({cards}) {
    return this._load({
      url: `movies/sync`,
      method: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Method"].POST,
      body: JSON.stringify(cards),
      headers: new Headers({'Content-Type': `application/json`}),
    })
      .then(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
  }

  updateCard({id, data}) {
    return this._load({
      url: `movies/${id}`,
      method: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Method"].PUT,
      body: JSON.stringify(data),
      headers: new Headers({'Content-Type': `application/json`}),
    })
      .then(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["toJSON"])
      .then(_models_film__WEBPACK_IMPORTED_MODULE_2__["default"].parseFilm);
  }

  getComments({id}) {
    return this._load({url: `comments/${id}`})
      .then(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["toJSON"])
      .then(_models_comment__WEBPACK_IMPORTED_MODULE_3__["default"].parseComments);
  }

  postComment({id, data}) {
    return this._load({
      url: `comments/${id}`,
      method: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Method"].POST,
      body: JSON.stringify(data),
      headers: new Headers({'Content-Type': `application/json`}),
    })
      .then(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
  }

  deleteComment({id}) {
    return this._load({url: `comments/${id}`, method: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Method"].DELETE});
  }

  _load({url, method = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Method"].GET, body = null, headers = new Headers()}) {
    headers.append(`Authorization`, this._authorization);

    return fetch(`${this._endPoint}/${url}`, {method, body, headers})
      .then(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["checkStatus"])
      .catch((err) => {
        throw new Error(`fetch error: ${err}`);
      });
  }
}


/***/ }),

/***/ "./src/components/abstract-component.js":
/*!**********************************************!*\
  !*** ./src/components/abstract-component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractComponent; });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");

class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstactComponent, only concrete one.`);
    }
    this._element = null;
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    if (this._element) {
      this._element = null;
    }
    return this._element;
  }

  getTemplate() {
    throw Error(`Abstract method not implemented`);
  }
}


/***/ }),

/***/ "./src/components/comments.js":
/*!************************************!*\
  !*** ./src/components/comments.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentsForm; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");





class CommentsForm extends _abstract_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(comments) {
    super();
    this._comments = comments;

    this._subscribeOnEvents();
  }

  getTemplate() {
    return `<section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._comments.length}</span></h3>

        <ul class="film-details__comments-list">
        ${this._comments.map((comment) => `<li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="${comment.emoji.source}" width="55" height="55" alt="emoji">
            </span>
            <div>
              <p class="film-details__comment-text">${comment.text}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${comment.author}</span>
                <span class="film-details__comment-day">${Object(_utils_functions__WEBPACK_IMPORTED_MODULE_2__["getCommentPublicationDate"])(comment.date)}</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>`).join(``)}
        </ul>

        <div class="film-details__new-comment">
          <div for="add-emoji" class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>
          
          <div class="film-details__emoji-list">
          ${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Emojis"].map((emoji) => `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="${emoji.id}" value="${emoji.value}">
        <label class="film-details__emoji-label" for="${emoji.id}">
        <img src="${emoji.source}" width="30" height="30" alt="emoji">
        </label>`).join(``)}
          </div>
        </div>
      </section>`;
  }

  _subscribeOnEvents() {
    this.getElement().querySelectorAll(`.film-details__emoji-label`).forEach((element) => {
      element.addEventListener(`click`, () => {
        const imageElement = element.querySelector(`img`);
        this.getElement().querySelector(`.film-details__add-emoji-label`).innerHTML = ``;
        this.getElement().querySelector(`.film-details__add-emoji-label`).appendChild(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_2__["createElement"])(`<img src="${imageElement.src}" width="55" height="55" alt="emoji">`));
      });
    });
  }
}


/***/ }),

/***/ "./src/components/film-card.js":
/*!*************************************!*\
  !*** ./src/components/film-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");



class FilmCard extends _abstract_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor({title, rating, year, duration, genre, poster, description, commentsAmount, inWatchlist, isWatched, isFavorite}) {
    super();
    this._title = title;
    this._rating = rating;
    this._year = year;
    this._duration = duration;
    this._genre = genre;
    this._poster = poster;
    this._description = description;
    this._commentsAmount = commentsAmount;
    this._inWatchlist = inWatchlist;
    this._isWatched = isWatched;
    this._isFavorite = isFavorite;
  }

  getTemplate() {
    return `<article class="film-card">
          <h3 class="film-card__title">${this._title}</h3>
          <p class="film-card__rating">${this._rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${this._year}</span>
            <span class="film-card__duration">${Math.floor(this._duration / 60)}h ${this._duration % 60}m</span>
            <span class="film-card__genre">${this._genre}</span>
          </p>
          <img src=${this._poster} alt="" class="film-card__poster">
          <p class="film-card__description">${this._description}</p>
          <a class="film-card__comments">${this._commentsAmount} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${this._inWatchlist ? `film-card__controls-item--active` : ``}" data-action="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Actions"].ADD_TO_WATCHLIST.TYPE}">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${this._isWatched ? `film-card__controls-item--active` : ``}" data-action="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Actions"].MARK_AS_WATCHED.TYPE}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${this._isFavorite ? `film-card__controls-item--active` : ``}" data-action="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Actions"].ADD_TO_FAVORITES.TYPE}">Mark as favorite</button>
          </form>
        </article>`;
  }
}


/***/ }),

/***/ "./src/components/film-details.js":
/*!****************************************!*\
  !*** ./src/components/film-details.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmDetails; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");



class FilmDetails extends _abstract_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(film) {
    super();
    Object.keys(film).forEach(function (key) {
      this[`_${key}`] = film[key];
    }.bind(this));
  }

  getTemplate() {
    return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="form-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${this._poster}" alt="">

          <p class="film-details__age">${this._age}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${this._title}</h3>
              <p class="film-details__title-original">Original: ${this._originalTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${this._rating}</p>
              <p class="film-details__user-rating">${(this._userRating && this._isWatched) ? `Your rate ${this._userRating}` : ``}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${this._director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${this._writers.join(`, `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${this._actors.join(`, `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${this._releaseDate}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${Math.floor(this._duration / 60)}h ${this._duration % 60}m</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${this._country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
              ${this._genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(``)}
              </td>
            </tr>
          </table>

          <p class="film-details__film-description">
            ${this._descriptionFull}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${this._inWatchlist ? `checked` : ``}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist" data-action="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Actions"].ADD_TO_WATCHLIST.TYPE}">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${this._isWatched ? `checked` : ``}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched" data-action="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Actions"].MARK_AS_WATCHED.TYPE}">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${this._isFavorite ? `checked` : ``}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite" data-action="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Actions"].ADD_TO_FAVORITES.TYPE}">Add to favorites</label>
      </section>
    </div>
    
    <div class="form-details__middle-container"></div>
    
    <div class="form-details__bottom-container"></div>
  </form>
</section>`;
  }
}


/***/ }),

/***/ "./src/components/films-list.js":
/*!**************************************!*\
  !*** ./src/components/films-list.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsList; });
/* harmony import */ var _abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component.js */ "./src/components/abstract-component.js");

class FilmsList extends _abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(isExtra, title) {
    super();
    this._isExtra = isExtra;
    this._title = title;
  }

  getTemplate() {
    return `<section class="films-list${this._isExtra ? `--extra` : ``}">
    <h2 class="films-list__title ${this._isExtra ? `` : `visually-hidden`}">${this._title}</h2>

    <div class="films-list__container">
      
    </div>
    
  </section>`;
  }
}


/***/ }),

/***/ "./src/components/films.js":
/*!*********************************!*\
  !*** ./src/components/films.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Films; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class Films extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<section class="films"></section>`;
  }
}


/***/ }),

/***/ "./src/components/loader.js":
/*!**********************************!*\
  !*** ./src/components/loader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class Loader extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }

  getTemplate() {
    return `<div class="loading-text no-result">Loading…</div>`;
  }
}


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");



class Menu extends _abstract_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(cards) {
    super();
    this._cards = cards;
  }

  getTemplate() {
    return `<nav class="main-navigation">
    <a href="#all" class="main-navigation__item" data-screen="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Screens"].FILMS.TYPE}" data-filter="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].ALL.TYPE}" >All movies</a>
    <a href="#watchlist" class="main-navigation__item" data-screen="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Screens"].FILMS.TYPE}" data-filter="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IN_WATCHLIST.TYPE}">Watchlist <span class="main-navigation__item-count">${this._cards.filter((card) => card.inWatchlist).length}</span></a>
    <a href="#history" class="main-navigation__item" data-screen="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Screens"].FILMS.TYPE}" data-filter="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IS_WATCHED.TYPE}">History <span class="main-navigation__item-count">${this._cards.filter((card) => card.isWatched).length}</span></a>
    <a href="#favorites" class="main-navigation__item" data-screen="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Screens"].FILMS.TYPE}" data-filter="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IS_FAVORITE.TYPE}">Favorites <span class="main-navigation__item-count">${this._cards.filter((card) => card.isFavorite).length}</span></a>
    <a href="#stats" class="main-navigation__item main-navigation__item--additional" data-screen="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Screens"].STATS.TYPE}">Stats</a>
  </nav>`;
  }
}


/***/ }),

/***/ "./src/components/no-films.js":
/*!************************************!*\
  !*** ./src/components/no-films.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoFilms; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class NoFilms extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<div class="no-result">There is no movies for your request.</div>`.trim();
  }
}


/***/ }),

/***/ "./src/components/profile.js":
/*!***********************************!*\
  !*** ./src/components/profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _components_abstract_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/abstract-component.js */ "./src/components/abstract-component.js");


class Profile extends _components_abstract_component_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(films) {
    super();
    this._films = films;
  }
  getTemplate() {
    return `<section class="header__profile profile">
              <p class="profile__rating">${Object(_utils_functions__WEBPACK_IMPORTED_MODULE_0__["getUserRank"])(this._films.filter((film) => film.isWatched).length)}</p>
              <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
            </section>`.trim();
  }
}


/***/ }),

/***/ "./src/components/search-no-result.js":
/*!********************************************!*\
  !*** ./src/components/search-no-result.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchNoResult; });
/* harmony import */ var _components_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/abstract-component.js */ "./src/components/abstract-component.js");


class SearchNoResult extends _components_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<div class="no-result">There is no movies for your request.</div>`;
  }
}


/***/ }),

/***/ "./src/components/search-result.js":
/*!*****************************************!*\
  !*** ./src/components/search-result.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchResult; });
/* harmony import */ var _components_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/abstract-component.js */ "./src/components/abstract-component.js");


class SearchResult extends _components_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(count) {
    super();
    this._count = count;
  }
  getTemplate() {
    return `<div class="result">
              <p class="result__text">Result <span class="result__count">${this._count}</span></p>
            </div>`;
  }
}


/***/ }),

/***/ "./src/components/search.js":
/*!**********************************!*\
  !*** ./src/components/search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _components_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/abstract-component */ "./src/components/abstract-component.js");


class Search extends _components_abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<form class="header__search search">
              <input type="text" name="search" class="search__field" placeholder="Search movies" value="">
              <svg fill="#7171D8" class="search__film-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                <path fill-rule="nonzero" d="M2 0v4.524h2.833V0h11.334v4.524H19V0h1v19h-1v-4.524h-2.833V19H4.833v-4.524H2V19H0V0h2zm0 7.238v4.524h2.833V7.238H2zm14.167 0v4.524H19V7.238h-2.833z"/>
              </svg>
              <button type="submit" class="visually-hidden">Search</button>
              <button class="search__reset" type="reset">Reset</button>
            </form>`.trim();
  }
}


/***/ }),

/***/ "./src/components/show-more-button.js":
/*!********************************************!*\
  !*** ./src/components/show-more-button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButton; });
/* harmony import */ var _components_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/abstract-component.js */ "./src/components/abstract-component.js");

class ShowMoreButton extends _components_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return `<button class="films-list__show-more">Show more</button>`;
  }
}


/***/ }),

/***/ "./src/components/sort.js":
/*!********************************!*\
  !*** ./src/components/sort.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class Sort extends _abstract_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  getTemplate() {
    return `<ul class="sort">
    <li><a href="#" data-sort-type="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_DEFAULT.TYPE}" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" data-sort-type="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_DATE.TYPE}" class="sort__button">Sort by date</a></li>
    <li><a href="#" data-sort-type="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_RATING.TYPE}" class="sort__button">Sort by rating</a></li>
  </ul>`;
  }
}


/***/ }),

/***/ "./src/components/statistic-text.js":
/*!******************************************!*\
  !*** ./src/components/statistic-text.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatisticsText; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class StatisticsText extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(cards) {
    super();
    this._cards = cards;
  }

  getTemplate() {
    return `<section class="footer__statistics">
    <p>${this._cards.length} movies inside</p>
  </section>`;
  }
}


/***/ }),

/***/ "./src/components/statistic.js":
/*!*************************************!*\
  !*** ./src/components/statistic.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Statistics; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");



class Statistics extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(cards) {
    super();
    this._cards = cards;
  }

  getTemplate() {
    return `<div>
     <ul class="statistic__text-list">
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">You watched</h4>
        <p class="statistic__item-text">${this._cards.filter((card) => card.isWatched).length} <span class="statistic__item-description">movies</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Total duration</h4>
        <p class="statistic__item-text">${Math.floor(this._cards.reduce((acc, card) => {
    if (card.isWatched) {
      acc = acc + card.duration;
    }
    return acc;
  }, 0) / 60)} <span class="statistic__item-description">h</span> ${this._cards.reduce((acc, card) => {
  if (card.isWatched) {
    acc = acc + card.duration;
  }
  return acc;
}, 0) % 60} <span class="statistic__item-description">m</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Top genre</h4>
        <p class="statistic__item-text">${this._getTopGenre()}</p>
      </li>
    </ul>
  
    <div class="statistic__chart-wrap">
      <canvas class="statistic__chart" width="1000"></canvas>
    </div>
</div>`;
  }

  _getTopGenre() {
    const watchedGenres = this._cards.reduce((acc, card) => {
      if (card.isWatched) {
        acc.push(card.genre);
      }

      return acc;
    }, []);
    const sortedGenres = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["countDuplicateElements"])(watchedGenres);

    return (Object.keys(sortedGenres).sort((a, b) => {
      return sortedGenres[b] - sortedGenres[a];
    }).shift() || `-`);
  }
}


/***/ }),

/***/ "./src/components/statsitic-filters.js":
/*!*********************************************!*\
  !*** ./src/components/statsitic-filters.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatisticFilters; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");




class StatisticFilters extends _abstract_component__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(cards) {
    super();
    this._cards = cards;
  }

  getTemplate() {
    return `<section class="statistic">
    <p class="statistic__rank">
      Your rank 
      <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35"> 
      <span class="statistic__rank-label">${Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["getUserRank"])(this._cards.filter((card) => card.isWatched).length)}</span>
    </p>
    <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
      <p class="statistic__filters-description">Show stats:</p>
  
      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" data-filter="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].ALL.TYPE}" checked>
      <label for="statistic-all-time" class="statistic__filters-label">All time</label>
  
      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today" data-filter="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].TODAY.TYPE}">
      <label for="statistic-today" class="statistic__filters-label">Today</label>
  
      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week" data-filter="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].WEEK.TYPE}">
      <label for="statistic-week" class="statistic__filters-label">Week</label>
  
      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month" data-filter="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].MONTH.TYPE}">
      <label for="statistic-month" class="statistic__filters-label">Month</label>
  
      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year" data-filter="${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].YEAR.TYPE}">
      <label for="statistic-year" class="statistic__filters-label">Year</label>
    </form>
  </section>`;
  }
}


/***/ }),

/***/ "./src/components/user-film-rating.js":
/*!********************************************!*\
  !*** ./src/components/user-film-rating.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserRank; });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class UserRank extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({title, poster}) {
    super();
    this._title = title;
    this._poster = poster;
  }

  getTemplate() {
    return `<section class="film-details__user-rating-wrap">
        <div class="film-details__user-rating-controls">
          <button class="film-details__watched-reset" type="button">Undo</button>
        </div>

        <div class="film-details__user-score">
          <div class="film-details__user-rating-poster">
            <img src="${this._poster}" alt="film-poster" class="film-details__user-rating-img">
          </div>

          <section class="film-details__user-rating-inner">
            <h3 class="film-details__user-rating-title">${this._title}</h3>

            <p class="film-details__user-rating-feelings">How you feel it?</p>

            <div class="film-details__user-rating-score">
              <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="1" id="rating-1">
              <label class="film-details__user-rating-label" for="rating-1">1</label>

              <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="2" id="rating-2">
              <label class="film-details__user-rating-label" for="rating-2">2</label>

              <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="3" id="rating-3">
              <label class="film-details__user-rating-label" for="rating-3">3</label>

              <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="4" id="rating-4">
              <label class="film-details__user-rating-label" for="rating-4">4</label>

              <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="5" id="rating-5">
              <label class="film-details__user-rating-label" for="rating-5">5</label>

              <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="6" id="rating-6">
              <label class="film-details__user-rating-label" for="rating-6">6</label>

              <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="7" id="rating-7">
              <label class="film-details__user-rating-label" for="rating-7">7</label>

              <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="8" id="rating-8">
              <label class="film-details__user-rating-label" for="rating-8">8</label>

              <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="9" id="rating-9">
              <label class="film-details__user-rating-label" for="rating-9">9</label>

            </div>
          </section>
        </div>
      </section>`;
  }
}


/***/ }),

/***/ "./src/controllers/comments.js":
/*!*************************************!*\
  !*** ./src/controllers/comments.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentsController; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/comments */ "./src/components/comments.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ "./src/provider.js");
/* harmony import */ var _models_comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/comment */ "./src/models/comment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);









class CommentsController {
  constructor(container, id, onEscKeyDown, onDataChange) {
    this._container = container;
    this._id = id;
    this._onEscKeyDown = onEscKeyDown;
    this._onDataChangeMain = onDataChange;

    this._commentsForm = new _components_comments__WEBPACK_IMPORTED_MODULE_2__["default"]([]);
    this._api = new _api__WEBPACK_IMPORTED_MODULE_3__["default"]({endPoint: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["END_POINT"], authorization: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["AUTHORIZATION"]});
    this._store = new _store__WEBPACK_IMPORTED_MODULE_4__["default"]({key: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["COMMENTS_STORE_KEY"], storage: localStorage});
    this._provider = new _provider__WEBPACK_IMPORTED_MODULE_5__["default"]({api: this._api, store: this._store, isOnline: _utils_functions__WEBPACK_IMPORTED_MODULE_1__["isOnline"]});
  }

  init() {
    this._renderCommentsForm();
  }

  _renderCommentsForm() {
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._commentsForm.getElement());
    this._commentsForm.removeElement();
    this._provider.getComments({id: this._id}).then((comments) => {
      this._commentsForm = new _components_comments__WEBPACK_IMPORTED_MODULE_2__["default"](comments);
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._commentsForm.getElement());
      const inputField = this._commentsForm.getElement().querySelector(`.film-details__comment-input`);
      const deleteButtons = this._commentsForm.getElement().querySelectorAll(`.film-details__comment-delete`);
      if (!Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["isOnline"])()) {
        inputField.disabled = true;
        deleteButtons.forEach((button) => {
          button.disabled = true;
        });
      } else {
        inputField.addEventListener(`keydown`, (evt) => this._onEnterKeydown(evt));
        inputField.addEventListener(`focus`, () => {
          document.removeEventListener(`keydown`, this._onEscKeyDown);
        });
        inputField.addEventListener(`blur`, () => {
          document.addEventListener(`keydown`, this._onEscKeyDown);
        });
        deleteButtons.forEach((button, index) => button.addEventListener(`click`, (evt) => {
          evt.preventDefault();
          this._onDeleteButtonClick(button, comments, index);
        }));
      }
    });
  }

  _onDataChange(card) {
    this._onDataChangeMain(card);
  }

  _onEnterKeydown(evt) {
    if ((evt.key === `Enter` && evt.metaKey) || (evt.key === `Enter` && evt.ctrlKey)) {
      const checkedInputElement = this._commentsForm.getElement().querySelector(`.film-details__emoji-item:checked`);
      const chosenEmoji = this._commentsForm.getElement().querySelector(`.film-details__add-emoji-label img`);

      if (!evt.target.value || !checkedInputElement) {
        return;
      }

      if (evt.target.classList.contains(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].INPUT)) {
        evt.target.classList.remove(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].INPUT);
      }

      evt.target.disabled = true;
      const newComment = {
        text: evt.target.value,
        date: moment__WEBPACK_IMPORTED_MODULE_7___default()(),
        emoji: {
          id: checkedInputElement.id,
        },
      };

      this._api.postComment({id: this._id, data: _models_comment__WEBPACK_IMPORTED_MODULE_6__["default"].toRAW(newComment)})
        .then(() => {
          evt.target.disabled = false;
          evt.target.value = ``;
          evt.target.blur();
          checkedInputElement.checked = false;
          Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(chosenEmoji);
          this._onDataChange(this._id);
          this._renderCommentsForm();
        })
        .catch(() => {
          evt.target.disabled = false;
          evt.target.classList.add(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].INPUT);
        });
    }
  }

  _onDeleteButtonClick(button, comments, index) {
    button.disabled = true;
    button.textContent = `Deleting…`;
    this._api.deleteComment({id: comments[index].id})
      .then(() => {
        button.disabled = false;
        button.textContent = `Delete`;
        this._onDataChange(this._id);
        this._renderCommentsForm();
      })
      .catch(() => {
        button.disabled = false;
        button.textContent = `Delete`;
      });
  }
}


/***/ }),

/***/ "./src/controllers/film-cards.js":
/*!***************************************!*\
  !*** ./src/controllers/film-cards.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCardsController; });
/* harmony import */ var _film__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film */ "./src/controllers/film.js");


class FilmCardsController {
  constructor(container, onDataChange) {
    this._container = container;
    this._onDataChangeMain = onDataChange;

    this._cards = [];
    this._subscriptions = [];
  }

  setFilmCards(cards) {
    this._cards = cards;
    this._subscriptions = [];
    this._container.innerHTML = ``;
    this._cards.forEach((card) => this._renderFilmCard(card));
  }

  addFilmCards(cards) {
    cards.forEach((card) => this._renderFilmCard(card));
    this._cards = this._cards.concat(cards);
  }

  _renderFilmCard(card) {
    const filmController = new _film__WEBPACK_IMPORTED_MODULE_0__["default"](this._container, card, this._onDataChange.bind(this), this._onChangeView.bind(this));
    filmController.init();
    this._subscriptions.push(filmController.setDefaultView.bind(filmController));
  }

  _onChangeView() {
    this._subscriptions.forEach((subscription) => subscription());
  }

  _onDataChange(id) {
    this._onDataChangeMain(this._cards.reduce((acc, card) => {
      if (card.id === id) {
        acc = card;
      }
      return acc;
    }, {}));
  }
}


/***/ }),

/***/ "./src/controllers/film.js":
/*!*********************************!*\
  !*** ./src/controllers/film.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmController; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments */ "./src/controllers/comments.js");
/* harmony import */ var _components_film_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/film-card */ "./src/components/film-card.js");
/* harmony import */ var _components_film_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/film-details */ "./src/components/film-details.js");
/* harmony import */ var _user_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-rating */ "./src/controllers/user-rating.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);








class FilmController {
  constructor(container, data, onDataChange, onChangeView) {
    this._container = container;
    this._data = data;
    this._onDataChange = onDataChange;
    this._onChangeView = onChangeView;

    this._filmCard = new _components_film_card__WEBPACK_IMPORTED_MODULE_3__["default"](this._data);
    this._filmDetails = new _components_film_details__WEBPACK_IMPORTED_MODULE_4__["default"](this._data);
  }

  init() {
    const hideFilmDetails = () => {
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._filmDetails.getElement());
      this._filmDetails.removeElement();
    };

    const renderCommentsForm = () => {
      const commentsContainer = this._filmDetails.getElement().querySelector(`.form-details__bottom-container`);
      const commentsController = new _comments__WEBPACK_IMPORTED_MODULE_2__["default"](commentsContainer, this._data.id, onEscKeyDown, this._onDataChange.bind(this));
      commentsController.init();
    };

    const userRatingFormController = new _user_rating__WEBPACK_IMPORTED_MODULE_5__["default"](this._filmDetails.getElement(), this._data, this._onDataChange.bind(this));
    userRatingFormController.init();
    let ratingFormShown;

    const showRatingForm = () => {
      userRatingFormController.show(this._data);
      ratingFormShown = true;
    };

    const hideRatingForm = () => {
      userRatingFormController.hide();
      ratingFormShown = false;
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        hideFilmDetails();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const onControlButtonClick = (evt) => {
      if (evt.target.tagName === `BUTTON`) {
        evt.preventDefault();
        evt.target.classList.toggle(`film-card__controls-item--active`);
      }

      switch (evt.target.dataset.action) {
        case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Actions"].ADD_TO_WATCHLIST.TYPE:
          this._data.inWatchlist = !this._data.inWatchlist;
          this._onDataChange(this._data.id);
          break;
        case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Actions"].MARK_AS_WATCHED.TYPE:
          this._data.isWatched = !this._data.isWatched;
          this._data.watchingDate = this._data.watchingDate ? null : moment__WEBPACK_IMPORTED_MODULE_6___default()().toISOString();

          if (ratingFormShown) {
            hideRatingForm();
          } else {
            showRatingForm();
          }

          this._onDataChange(this._data.id);
          break;
        case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Actions"].ADD_TO_FAVORITES.TYPE:
          this._data.isFavorite = !this._data.isFavorite;
          this._onDataChange(this._data.id);
          break;
      }
    };

    const onRenderFilmDetailsClick = () => {
      this._onChangeView();
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(document.body, this._filmDetails.getElement());
      renderCommentsForm();
      this._filmDetails.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
        hideFilmDetails();
        document.removeEventListener(`keydown`, onEscKeyDown);
      });
      document.addEventListener(`keydown`, onEscKeyDown);
      this._filmDetails.getElement().querySelector(`.film-details__controls`).addEventListener(`click`, (evt) => onControlButtonClick(evt));
    };

    if (this._data.isWatched) {
      showRatingForm();
    }

    this._filmCard.getElement().querySelectorAll(`.film-card__title, .film-card__poster, .film-card__comments`).forEach((element) => element.addEventListener(`click`, onRenderFilmDetailsClick));
    this._filmCard.getElement().querySelector(`.film-card__controls`).addEventListener(`click`, (evt) => onControlButtonClick(evt));
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._filmCard.getElement());
  }

  setDefaultView() {
    if (document.body.contains(this._filmDetails.getElement())) {
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._filmDetails.getElement());
      this._filmDetails.removeElement();
    }
  }
}


/***/ }),

/***/ "./src/controllers/menu.js":
/*!*********************************!*\
  !*** ./src/controllers/menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuController; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menu */ "./src/components/menu.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash.debounce'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





class MenuController {
  constructor(container, search, searchController, pageController, statisticsController) {
    this._container = container;
    this._search = search;
    this._searchController = searchController;
    this._pageController = pageController;
    this._statisticsController = statisticsController;

    this._cards = [];
    this._menu = new _components_menu__WEBPACK_IMPORTED_MODULE_2__["default"]([]);
    this._activeFilter = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].ALL;
    this._state = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["States"].VIEW;
    this._previousState = ``;
  }

  show(cards) {
    if (this._cards !== cards) {
      this._setFilmCards(cards);
    }

    this._menu.getElement().classList.remove(`visually-hidden`);
  }

  hide() {
    this._menu.getElement().classList.add(`visually-hidden`);
  }

  init() {
    this._renderMenu();
    const searchInputElement = this._search.getElement().querySelector(`input`);
    const searchResetElement = this._search.getElement().querySelector(`.search__reset`);
    searchInputElement.addEventListener(`keyup`, !(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash.debounce'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((evt) => {
      this._showSearchResults(evt);
    }, 300));
    searchResetElement.addEventListener(`click`, () => {
      this._hideSearchResults();
    });
  }

  getState() {
    return this._state;
  }

  _renderMenu() {
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._menu.getElement());
    this._menu.removeElement();
    this._menu = new _components_menu__WEBPACK_IMPORTED_MODULE_2__["default"](this._cards);
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._menu.getElement(), _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Position"].AFTERBEGIN);
    const activeFilterElement = this._menu.getElement().querySelector(`[data-filter="${this._activeFilter.TYPE}"]`);
    activeFilterElement.classList.add(`main-navigation__item--active`);
    this._menu.getElement().addEventListener(`click`, (evt) => this._onFilterLinkClick(evt));
  }

  _setFilmCards(cards) {
    this._cards = cards;
    this._renderMenu();
    this._pageController.show(this._cards.slice().filter(this._activeFilter.METHOD), false);
  }

  _onFilterLinkClick(evt) {
    evt.preventDefault();

    if ((evt.target.tagName !== `A`)) {
      return;
    }

    const activeClass = `main-navigation__item--active`;
    const activeFilterElement = this._menu.getElement().querySelector(`.${activeClass}`);
    activeFilterElement.classList.remove(activeClass);
    evt.target.classList.add(activeClass);

    switch (evt.target.dataset.filter) {
      case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].ALL.TYPE:
        this._activeFilter = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].ALL;
        this._pageController.show(this._cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].ALL.METHOD));
        break;
      case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IN_WATCHLIST.TYPE:
        this._activeFilter = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IN_WATCHLIST;
        this._pageController.show(this._cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IN_WATCHLIST.METHOD), false);
        break;
      case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IS_WATCHED.TYPE:
        this._activeFilter = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IS_WATCHED;
        this._pageController.show(this._cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IS_WATCHED.METHOD), false);
        break;
      case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IS_FAVORITE.TYPE:
        this._activeFilter = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IS_FAVORITE;
        this._pageController.show(this._cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Filters"].IS_FAVORITE.METHOD), false);
        break;
    }

    switch (evt.target.dataset.screen) {
      case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Screens"].FILMS.TYPE:
        this._searchController.hide();
        this._statisticsController.hide();
        this._state = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["States"].VIEW;
        break;
      case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Screens"].STATS.TYPE:
        this._pageController.hide();
        this._searchController.hide();
        this._statisticsController.show(this._cards);
        this._state = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["States"].STATISTIC;
        break;
    }
  }

  _showSearchResults(evt) {
    if (evt.target.value.length >= _utils_constants__WEBPACK_IMPORTED_MODULE_0__["MIN_SEARCH_STRING_LENGTH"]) {
      if (this._state !== _utils_constants__WEBPACK_IMPORTED_MODULE_0__["States"].SEARCH) {
        this._previousState = this._state;
      }

      this._state = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["States"].SEARCH;
      this._searchController.show(this._cards);
      this.hide();
      this._pageController.hide();
      this._statisticsController.hide();
    } else {
      this._hideSearchResults();
    }
  }

  _hideSearchResults() {
    this.show(this._cards);
    this._searchController.hide();
    this._state = this._previousState;

    switch (this._state) {
      case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["States"].VIEW:
        this._pageController.show(this._cards);
        break;
      case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["States"].STATISTIC:
        this._statisticsController.show(this._cards);
        break;
    }
  }
}


/***/ }),

/***/ "./src/controllers/page.js":
/*!*********************************!*\
  !*** ./src/controllers/page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageController; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _film_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./film-cards */ "./src/controllers/film-cards.js");
/* harmony import */ var _components_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sort */ "./src/components/sort.js");
/* harmony import */ var _components_films__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/films */ "./src/components/films.js");
/* harmony import */ var _components_films_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/films-list */ "./src/components/films-list.js");
/* harmony import */ var _components_no_films__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/no-films */ "./src/components/no-films.js");
/* harmony import */ var _components_show_more_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/show-more-button */ "./src/components/show-more-button.js");









class PageController {
  constructor(container, onDataChange) {
    this._container = container;
    this._onDataChangeMain = onDataChange;

    this._generalAmount = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["FILMS_AMOUNT"];
    this._categoryAmount = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["CATEGORY_FILMS_AMOUNT"];
    this._activeSort = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_DEFAULT;
    this._cards = [];
    this._sortedCards = [];
    this._sort = new _components_sort__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._films = new _components_films__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._generalFilmsList = new _components_films_list__WEBPACK_IMPORTED_MODULE_5__["default"](false, _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ListTitles"].GENERAL);
    this._topRatedFilmsList = new _components_films_list__WEBPACK_IMPORTED_MODULE_5__["default"](true, _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ListTitles"].TOP_RATED);
    this._mostCommentedFilmsList = new _components_films_list__WEBPACK_IMPORTED_MODULE_5__["default"](true, _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ListTitles"].MOST_COMMENTED);
    this._noFilms = new _components_no_films__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this._showMoreButton = new _components_show_more_button__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this._filmCardsController = new _film_cards__WEBPACK_IMPORTED_MODULE_2__["default"](null, this._onDataChange.bind(this));
  }

  show(cards, withCategories) {
    if (this._cards !== cards) {
      this._setFilmCards(cards, withCategories);
    }

    this._sort.getElement().classList.remove(`visually-hidden`);
    this._films.getElement().classList.remove(`visually-hidden`);
  }

  hide() {
    this._sort.getElement().classList.add(`visually-hidden`);
    this._films.getElement().classList.add(`visually-hidden`);
  }

  init() {
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._sort.getElement());
    this._sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
    this._sort.getElement().classList.add(`visually-hidden`);
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._films.getElement());
  }

  _renderGeneralFilmsList() {
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._generalFilmsList.getElement());
    this._generalFilmsList.removeElement();
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._films.getElement(), this._generalFilmsList.getElement(), _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Position"].AFTERBEGIN);
    const filmsListContainer = this._generalFilmsList.getElement().querySelector(`.films-list__container`);
    this._filmCardsController = new _film_cards__WEBPACK_IMPORTED_MODULE_2__["default"](filmsListContainer, this._onDataChange.bind(this));
    this._filmCardsController.setFilmCards(this._sortedCards.slice(0, this._generalAmount));

    if (!this._sortedCards.length) {
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._generalFilmsList.getElement(), this._noFilms.getElement());
    }
  }

  _renderCategoryFilmsLists() {
    if (this._cards.some((card) => Number(card.rating))) {
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._topRatedFilmsList.getElement());
      this._topRatedFilmsList.removeElement();
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._films.getElement(), this._topRatedFilmsList.getElement());
      const filmsListContainer = this._topRatedFilmsList.getElement().querySelector(`.films-list__container`);
      const cardsByRating = this._cards.slice().sort(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_RATING.METHOD);
      this._filmCardsController = new _film_cards__WEBPACK_IMPORTED_MODULE_2__["default"](filmsListContainer, this._onDataChange.bind(this));
      this._filmCardsController.setFilmCards(cardsByRating.slice(0, this._categoryAmount));
    }

    if (this._cards.some((card) => Number(card.commentsAmount))) {
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._mostCommentedFilmsList.getElement());
      this._mostCommentedFilmsList.removeElement();
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._films.getElement(), this._mostCommentedFilmsList.getElement());
      const filmsListContainer = this._mostCommentedFilmsList.getElement().querySelector(`.films-list__container`);
      const cardsByCommentsAmount = this._cards.slice().sort(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_COMMENTS.METHOD);
      this._filmCardsController = new _film_cards__WEBPACK_IMPORTED_MODULE_2__["default"](filmsListContainer, this._onDataChange.bind(this));
      this._filmCardsController.setFilmCards(cardsByCommentsAmount.slice(0, this._categoryAmount));
    }
  }

  _renderShowMoreButton() {
    if (this._sortedCards.length > this._generalAmount) {
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._showMoreButton.getElement());
      this._showMoreButton.removeElement();
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._generalFilmsList.getElement(), this._showMoreButton.getElement());
      this._showMoreButton.getElement().addEventListener(`click`, () => this._onShowMoreButtonClick());
    }

    if (this._generalAmount >= this._sortedCards.length) {
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._showMoreButton.getElement());
      this._showMoreButton.removeElement();
    }
  }

  _setFilmCards(cards, withCategories = true) {
    this._cards = cards;
    this._sortedCards = cards.slice().sort(this._activeSort.METHOD);
    this._renderGeneralFilmsList();
    this._renderShowMoreButton();

    if (withCategories) {
      this._renderCategoryFilmsLists();
    }
  }

  _onDataChange(card) {
    this._onDataChangeMain(card);
  }

  _onSortLinkClick(evt) {
    evt.preventDefault();

    if (evt.target.tagName !== `A`) {
      return;
    }

    const activeClass = `sort__button--active`;
    const activeSortElement = this._sort.getElement().querySelector(`.${activeClass}`);
    activeSortElement.classList.remove(activeClass);
    evt.target.classList.add(activeClass);

    switch (evt.target.dataset.sortType) {
      case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_DATE.TYPE:
        this._activeSort = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_DATE;
        this._setFilmCards(this._sortedCards);
        break;
      case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_RATING.TYPE:
        this._activeSort = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_RATING;
        this._setFilmCards(this._sortedCards);
        break;
      case _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_DEFAULT.TYPE:
        this._activeSort = _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Sorting"].BY_DEFAULT;
        this._setFilmCards(this._cards);
    }
  }

  _onShowMoreButtonClick() {
    const filmsListContainer = this._generalFilmsList.getElement().querySelector(`.films-list__container`);
    this._filmCardsController = new _film_cards__WEBPACK_IMPORTED_MODULE_2__["default"](filmsListContainer, this._onDataChange.bind(this));

    this._filmCardsController.addFilmCards(this._sortedCards.slice(this._generalAmount, (this._generalAmount + _utils_constants__WEBPACK_IMPORTED_MODULE_0__["FILMS_AMOUNT"])));
    this._generalAmount += _utils_constants__WEBPACK_IMPORTED_MODULE_0__["FILMS_AMOUNT"];
    this._setFilmCards(this._sortedCards);

    if (this._generalAmount >= this._sortedCards.length) {
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._showMoreButton.getElement());
      this._showMoreButton.removeElement();
    }
  }
}


/***/ }),

/***/ "./src/controllers/search.js":
/*!***********************************!*\
  !*** ./src/controllers/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchController; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _film_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./film-cards */ "./src/controllers/film-cards.js");
/* harmony import */ var _components_search_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/search-result */ "./src/components/search-result.js");
/* harmony import */ var _components_search_no_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/search-no-result */ "./src/components/search-no-result.js");
/* harmony import */ var _components_films_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/films-list */ "./src/components/films-list.js");







class SearchController {
  constructor(container, search, onDataChange) {
    this._container = container;
    this._search = search;
    this._onDataChangeMain = onDataChange;

    this._cards = [];
    this._searchResult = new _components_search_result__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._noResult = new _components_search_no_result__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._filmsList = new _components_films_list__WEBPACK_IMPORTED_MODULE_5__["default"](false, _utils_constants__WEBPACK_IMPORTED_MODULE_0__["ListTitles"].GENERAL);
  }

  show(cards) {
    this._setFilmCards(cards);
    this._searchResult.getElement().classList.remove(`visually-hidden`);
    this._noResult.getElement().classList.remove(`visually-hidden`);
    this._filmsList.getElement().classList.remove(`visually-hidden`);
  }

  hide() {
    this._searchResult.getElement().classList.add(`visually-hidden`);
    this._noResult.getElement().classList.add(`visually-hidden`);
    this._filmsList.getElement().classList.add(`visually-hidden`);
  }

  init() {
    this.hide();
    const searchInput = this._search.getElement().querySelector(`input`);
    searchInput.addEventListener(`keyup`, (evt) => {
      if (evt.target.value.length >= _utils_constants__WEBPACK_IMPORTED_MODULE_0__["MIN_SEARCH_STRING_LENGTH"]) {
        this._showSearchResult(this._filterCards(this._cards, evt.target.value));
      }
    });
  }

  _filterCards(cards, query) {
    return cards.slice().filter((card) => (card.title.includes(query) || card.title.toLowerCase().includes(query)));
  }

  _setFilmCards(cards) {
    this._cards = cards;
    const searchInput = this._search.getElement().querySelector(`input`);
    this._showSearchResult(this._filterCards(this._cards, searchInput.value));
  }

  _onDataChange(card) {
    this._onDataChangeMain(card);
  }

  _showSearchResult(cards) {
    if (this._searchResult) {
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._searchResult.getElement());
      this._searchResult.removeElement();
    }

    if (cards.length) {
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._noResult.getElement());
      this._noResult.removeElement();
      this._searchResult = new _components_search_result__WEBPACK_IMPORTED_MODULE_3__["default"](cards.length);
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._searchResult.getElement());
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._filmsList.getElement());
      const filmsListContainer = this._filmsList.getElement().querySelector(`.films-list__container`);
      const filmCardsController = new _film_cards__WEBPACK_IMPORTED_MODULE_2__["default"](filmsListContainer, this._onDataChange.bind(this));
      filmCardsController.setFilmCards(cards);
    } else {
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._filmsList.getElement());
      this._filmsList.removeElement();
      Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._noResult.getElement());
    }
  }
}


/***/ }),

/***/ "./src/controllers/statistics.js":
/*!***************************************!*\
  !*** ./src/controllers/statistics.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatisticsController; });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _components_statistic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/statistic */ "./src/components/statistic.js");
/* harmony import */ var _components_statsitic_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/statsitic-filters */ "./src/components/statsitic-filters.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'chartjs-plugin-datalabels'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");







class StatisticsController {
  constructor(container) {
    this._container = container;

    this._cards = [];
    this._statistics = new _components_statistic__WEBPACK_IMPORTED_MODULE_1__["default"](this._cards);
    this._filters = new _components_statsitic_filters__WEBPACK_IMPORTED_MODULE_2__["default"](this._cards);
  }

  show(cards) {
    if (cards !== this._cards) {
      this._renderFilters(cards);
      this._renderStatistics(cards);
      this._renderCharts(cards);
    }

    this._filters.getElement().classList.remove(`visually-hidden`);
    this._statistics.getElement().classList.remove(`visually-hidden`);
  }

  hide() {
    this._filters.getElement().classList.add(`visually-hidden`);
    this._statistics.getElement().classList.add(`visually-hidden`);
  }

  init() {
    this._renderFilters(this._cards);
    this._renderStatistics(this._cards);
    this._renderCharts(this._cards);
    this.hide();
  }

  _renderFilters(cards) {
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this._filters.getElement());
    this._filters.removeElement();
    this._filters = new _components_statsitic_filters__WEBPACK_IMPORTED_MODULE_2__["default"](cards);
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_0__["render"])(this._container, this._filters.getElement());
    const filterInputs = this._filters.getElement().querySelectorAll(`.statistic__filters-input`);
    filterInputs.forEach((input) => input.addEventListener(`change`, (evt) => this._onFilterInputChange(evt, cards)));
  }

  _renderStatistics(cards) {
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_0__["removeElement"])(this._statistics.getElement());
    this._statistics.removeElement();
    this._statistics = new _components_statistic__WEBPACK_IMPORTED_MODULE_1__["default"](cards);
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_0__["render"])(this._filters.getElement(), this._statistics.getElement());
  }

  _renderCharts(cards) {
    const chartCtx = this._statistics.getElement().querySelector(`.statistic__chart`);
    const watchedGenres = cards.reduce((acc, card) => {
      if (card.isWatched) {
        acc.push(card.genre);
      }

      return acc;
    }, []);
    const dataForChart = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_0__["countDuplicateElements"])(watchedGenres);
    return new !(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(chartCtx, {
      plugins: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'chartjs-plugin-datalabels'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
      type: `horizontalBar`,
      data: {
        labels: Object.keys(dataForChart).sort((a, b) => {
          return dataForChart[b] - dataForChart[a];
        }),
        datasets: [{
          data: Object.values(dataForChart).sort((a, b) => b - a),
          backgroundColor: `#ffe800`,
          datalabels: {
            anchor: `start`,
            align: `start`,
            offset: 50,
            color: `#ffffff`,
            font: {
              size: 16,
            },
            formatter: (value, context) => `${context.chart.data.labels[context.dataIndex]}           ${value}`,
          },
        }],
      },
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        layout: {
          padding: {
            left: 200,
          },
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
              stepSize: 1,
            },
          }],
          yAxes: [{
            display: false,
            barThickness: 25,
          }],
        },
      },
    });
  }

  _onFilterInputChange(evt, cards) {
    switch (evt.target.dataset.filter) {
      case `all`:
        this._renderStatistics(cards);
        this._renderCharts(cards);
        break;
      case `today`:
        this._renderStatistics(cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Filters"].TODAY.METHOD));
        this._renderCharts(cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Filters"].TODAY.METHOD));
        break;
      case `week`:
        this._renderStatistics(cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Filters"].WEEK.METHOD));
        this._renderCharts(cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Filters"].WEEK.METHOD));
        break;
      case `month`:
        this._renderStatistics(cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Filters"].MONTH.METHOD));
        this._renderCharts(cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Filters"].MONTH.METHOD));
        break;
      case `year`:
        this._renderStatistics(cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Filters"].YEAR.METHOD));
        this._renderCharts(cards.slice().filter(_utils_constants__WEBPACK_IMPORTED_MODULE_4__["Filters"].YEAR.METHOD));
        break;
    }
  }
}


/***/ }),

/***/ "./src/controllers/user-rating.js":
/*!****************************************!*\
  !*** ./src/controllers/user-rating.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserRankController; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _components_user_film_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/user-film-rating */ "./src/components/user-film-rating.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./src/api.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider */ "./src/provider.js");
/* harmony import */ var _models_film__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/film */ "./src/models/film.js");








class UserRankController {
  constructor(container, card, onDataChange) {
    this._container = container;
    this._card = card;
    this._onDataChange = onDataChange;

    this._userRatingForm = new _components_user_film_rating__WEBPACK_IMPORTED_MODULE_2__["default"](this._card);
    this._userRatingElement = this._container.querySelector(`.film-details__user-rating`);
    this._api = new _api__WEBPACK_IMPORTED_MODULE_3__["default"]({endPoint: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["END_POINT"], authorization: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["AUTHORIZATION"]});
    this._store = new _store__WEBPACK_IMPORTED_MODULE_4__["default"]({key: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["CARDS_STORE_KEY"], storage: localStorage});
    this._provider = new _provider__WEBPACK_IMPORTED_MODULE_5__["default"]({api: this._api, store: this._store, isOnline: _utils_functions__WEBPACK_IMPORTED_MODULE_1__["isOnline"]});
  }

  show(card) {
    if (this._card !== card) {
      this._setFilmCard(card);
    }

    if (this._card.userRating) {
      this._userRatingElement.textContent = `Your rate ${this._card.userRating}`;
    }

    this._userRatingForm.getElement().classList.remove(`visually-hidden`);
  }

  hide() {
    this._userRatingForm.getElement().classList.add(`visually-hidden`);
    this._resetUserRank();
  }

  init() {
    this._renderUserRankForm();
  }

  _renderUserRankForm() {
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._userRatingForm.getElement());
    this._userRatingForm.removeElement();
    this._userRatingForm = new _components_user_film_rating__WEBPACK_IMPORTED_MODULE_2__["default"](this._card);
    const ratingFormContainer = this._container.querySelector(`.form-details__middle-container`);
    Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(ratingFormContainer, this._userRatingForm.getElement());

    if (!this._card.isWatched) {
      this._userRatingForm.getElement().classList.add(`visually-hidden`);
    }

    const ratingInputs = this._userRatingForm.getElement().querySelectorAll(`.film-details__user-rating-input`);
    ratingInputs.forEach((input) => {
      input.addEventListener(`change`, (evt) => this._onRatingInputChange(evt));

      if (Number(input.value) === this._card.userRating) {
        input.checked = true;
      }
    });
    const undoButton = this._userRatingForm.getElement().querySelector(`.film-details__watched-reset`);
    undoButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this._resetUserRank();
    });
  }

  _setFilmCard(card) {
    this._card = card;
    this._renderUserRankForm();
  }

  _onRatingInputChange(evt) {
    this._userRatingElement.textContent = `Your rate ${evt.target.value}`;
    const errorInput = this._userRatingForm.getElement().querySelector(`.${_utils_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RATING_INPUT}`);

    if (errorInput) {
      errorInput.classList.remove(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RATING_INPUT);
    }

    if (this._userRatingForm.getElement().classList.contains(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RATING_FORM)) {
      this._userRatingForm.getElement().classList.remove(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RATING_FORM);
    }

    this._card.userRating = Number(evt.target.value);
    this._provider.updateCard({
      id: this._card.id,
      data: _models_film__WEBPACK_IMPORTED_MODULE_6__["default"].toRAW(this._card),
    })
      .then(() => {
        this._onDataChange(this._card.id);
      })
      .catch(() => {
        this._resetUserRank();
        const ratingInputLabel = this._userRatingForm.getElement().querySelector(`[for="${evt.target.id}"]`);
        ratingInputLabel.classList.add(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RATING_INPUT);
        this._userRatingForm.getElement().classList.add(_utils_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].RATING_FORM);
      });
  }

  _resetUserRank() {
    this._userRatingElement.textContent = ``;

    if (this._card.userRating) {
      this._card.userRating = 0;
      this._onDataChange(this._card.id);
    }

    const chosenRating = this._container.querySelector(`.film-details__user-rating-input:checked`);

    if (chosenRating) {
      chosenRating.checked = false;
    }
  }
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _controllers_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/menu */ "./src/controllers/menu.js");
/* harmony import */ var _controllers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/page */ "./src/controllers/page.js");
/* harmony import */ var _controllers_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/search */ "./src/controllers/search.js");
/* harmony import */ var _controllers_statistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/statistics */ "./src/controllers/statistics.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search */ "./src/components/search.js");
/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile */ "./src/components/profile.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/loader */ "./src/components/loader.js");
/* harmony import */ var _components_statistic_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/statistic-text */ "./src/components/statistic-text.js");
/* harmony import */ var _models_film__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/film */ "./src/models/film.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./provider */ "./src/provider.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store */ "./src/store.js");















const api = new _api__WEBPACK_IMPORTED_MODULE_11__["default"]({endPoint: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["END_POINT"], authorization: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["AUTHORIZATION"]});
const store = new _store__WEBPACK_IMPORTED_MODULE_13__["default"]({key: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["CARDS_STORE_KEY"], storage: localStorage});
const provider = new _provider__WEBPACK_IMPORTED_MODULE_12__["default"]({api, store, isOnline: _utils_functions__WEBPACK_IMPORTED_MODULE_1__["isOnline"]});
const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`.footer`);
const search = new _components_search__WEBPACK_IMPORTED_MODULE_6__["default"]();
const loader = new _components_loader__WEBPACK_IMPORTED_MODULE_8__["default"]();

const onDataChange = (update) => {
  provider.updateCard({
    id: update.id,
    data: _models_film__WEBPACK_IMPORTED_MODULE_10__["default"].toRAW(update),
  })
    .then(() => {
      provider.getCards()
        .then((updatedCards) => {
          renderPage(updatedCards);
        });
    });
};

const pageController = new _controllers_page__WEBPACK_IMPORTED_MODULE_3__["default"](mainElement, onDataChange);
const searchController = new _controllers_search__WEBPACK_IMPORTED_MODULE_4__["default"](mainElement, search, onDataChange);
const statisticsController = new _controllers_statistics__WEBPACK_IMPORTED_MODULE_5__["default"](mainElement, onDataChange);
const menuController = new _controllers_menu__WEBPACK_IMPORTED_MODULE_2__["default"](mainElement, search, searchController, pageController, statisticsController, onDataChange);

const renderPage = ((cards) => {
  Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(loader.getElement());
  loader.removeElement();

  const profileRating = new _components_profile__WEBPACK_IMPORTED_MODULE_7__["default"](cards);
  Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(headerElement.querySelector(`.profile`));
  Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(headerElement, profileRating.getElement());

  const statisticsText = new _components_statistic_text__WEBPACK_IMPORTED_MODULE_9__["default"](cards);
  Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(footerElement.querySelector(`.footer__statistics`));
  Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(footerElement, statisticsText.getElement());
  pageController.show(cards);
  menuController.show(cards);

  if (menuController.getState() === _utils_constants__WEBPACK_IMPORTED_MODULE_0__["States"].SEARCH) {
    searchController.show(cards);
    pageController.hide();
    menuController.hide();
  }
});

pageController.init();
searchController.init();
statisticsController.init();
menuController.init();

Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(headerElement, search.getElement());
Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["render"])(mainElement, loader.getElement());

window.addEventListener(`offline`, () => {
  document.title = `${document.title} [OFFLINE]`;
});
window.addEventListener(`online`, () => {
  document.title = document.title.split(` [OFFLINE]`)[0];
  provider.syncCards();
});

provider.getCards().then((cards) => renderPage(cards));


/***/ }),

/***/ "./src/models/comment.js":
/*!*******************************!*\
  !*** ./src/models/comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelComment; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");


class ModelComment {
  constructor(data) {
    this.id = data[`id`];
    this.text = data[`comment`];
    this.author = data[`author`];
    this.date = data[`date`];
    this.emoji = {
      id: data[`emotion`],
      source: _utils_constants__WEBPACK_IMPORTED_MODULE_0__["Emojis"].reduce((acc, emoji) => {
        if (emoji.id === data[`emotion`]) {
          acc = emoji.source;
        }

        return acc;
      }, ``),
    };
  }

  static parseComment(data) {
    return new ModelComment(data);
  }

  static parseComments(data) {
    return data.map(ModelComment.parseComment);
  }

  static toRAW(comment) {
    return {
      'comment': comment.text,
      'date': comment.date,
      'emotion': comment.emoji.id,
    };
  }
}


/***/ }),

/***/ "./src/models/film.js":
/*!****************************!*\
  !*** ./src/models/film.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModelFilm; });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



class ModelFilm {
  constructor(data) {
    this.id = data[`id`];
    this.title = data[`film_info`][`title`];
    this.rating = data[`film_info`][`total_rating`];
    this.year = moment__WEBPACK_IMPORTED_MODULE_1___default()(data[`film_info`][`release`][`date`]).format(`YYYY`);
    this.duration = data[`film_info`][`runtime`];
    this.genre = data[`film_info`][`genre`][0] || `No genre`;
    this.poster = data[`film_info`][`poster`];
    this.description = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_0__["trimFilmDescription"])(data[`film_info`][`description`]);
    this.descriptionFull = (data[`film_info`][`description`]);
    this.commentsAmount = data[`comments`].length;
    this.inWatchlist = data[`user_details`][`watchlist`];
    this.isWatched = data[`user_details`][`already_watched`];
    this.isFavorite = data[`user_details`][`favorite`];
    this.comments = data[`comments`];
    this.userRating = data[`user_details`][`already_watched`] ? data[`user_details`][`personal_rating`] : 0;
    this.watchingDate = data[`user_details`][`watching_date`];
    this.originalTitle = data[`film_info`][`alternative_title`];
    this.age = data[`film_info`][`age_rating`];
    this.director = data[`film_info`][`director`];
    this.writers = data[`film_info`][`writers`];
    this.actors = data[`film_info`][`actors`];
    this.releaseDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(data[`film_info`][`release`][`date`]).format(`DD MMMM YYYY`);
    this.country = data[`film_info`][`release`][`release_country`];
    this.genres = data[`film_info`][`genre`];
  }

  static parseFilm(data) {
    return new ModelFilm(data);
  }

  static parseFilms(data) {
    return data.map(ModelFilm.parseFilm);
  }

  static toRAW(film) {
    return {
      'id': film.id,
      'comments': film.comments,
      'film_info': {
        'title': film.title,
        'alternative_title': film.originalTitle,
        'total_rating': film.rating,
        'poster': film.poster,
        'age_rating': film.age,
        'director': film.director,
        'writers': [...film.writers],
        'actors': [...film.actors],
        'release': {
          'date': film.releaseDate,
          'release_country': film.country,
        },
        'runtime': film.duration,
        'genre': [...film.genres],
        'description': film.description,
      },
      'user_details': {
        'personal_rating': Number(film.userRating) || 0,
        'watchlist': film.inWatchlist,
        'already_watched': film.isWatched,
        'watching_date': moment__WEBPACK_IMPORTED_MODULE_1___default()(film.watchingDate).toISOString() || moment__WEBPACK_IMPORTED_MODULE_1___default()().toISOString(),
        'favorite': film.isFavorite,
      },
    };
  }
}


/***/ }),

/***/ "./src/provider.js":
/*!*************************!*\
  !*** ./src/provider.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Provider; });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _models_film__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/film */ "./src/models/film.js");
/* harmony import */ var _models_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/comment */ "./src/models/comment.js");




class Provider {
  constructor({api, store, isOnline}) {
    this._api = api;
    this._store = store;
    this._isOnline = isOnline;
  }

  getCards() {
    if (this._isOnline()) {
      return this._api.getCards()
        .then((cards) => {
          cards.map((card) => this._store.setItem({key: card.id, item: _models_film__WEBPACK_IMPORTED_MODULE_1__["default"].toRAW(card)}));
          return cards;
        });
    }

    const rawCardsMap = this._store.getAll();
    const rawCards = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_0__["getArrayFromObject"])(rawCardsMap);
    const cards = _models_film__WEBPACK_IMPORTED_MODULE_1__["default"].parseFilms(rawCards);
    return Promise.resolve(cards);
  }

  syncCards() {
    return this._api.syncCards({cards: Object(_utils_functions__WEBPACK_IMPORTED_MODULE_0__["getArrayFromObject"])(this._store.getAll())});
  }

  updateCard({id, data}) {
    if (this._isOnline()) {
      return this._api.updateCard({id, data})
        .then((card) => {
          this._store.setItem({key: card.id, item: _models_film__WEBPACK_IMPORTED_MODULE_1__["default"].toRAW(card)});
          return card;
        });
    }

    const card = data;
    this._store.setItem({key: card.id, item: card});
    return Promise.resolve(_models_film__WEBPACK_IMPORTED_MODULE_1__["default"].parseFilm(card));
  }

  getComments({id}) {
    if (this._isOnline()) {
      return this._api.getComments({id})
        .then((comments) => {
          this._store.setItem({key: id, item: comments.map((comment) => _models_comment__WEBPACK_IMPORTED_MODULE_2__["default"].toRAW(comment))});
          return comments;
        });
    }

    const rawCommentsMap = this._store.getAll();
    const rawComments = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_0__["getArrayFromObject"])(rawCommentsMap);
    const comments = rawComments.map((rawComment) => {
      _models_comment__WEBPACK_IMPORTED_MODULE_2__["default"].parseComments(rawComment);
    });
    return Promise.resolve(comments);
  }
}


/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Store; });
class Store {
  constructor({key, storage}) {
    this._storeKey = key;
    this._storage = storage;
  }

  setItem({key, item}) {
    const items = this.getAll();
    items[key] = item;
    this._storage.setItem(this._storeKey, JSON.stringify(items));
  }

  getItem({key}) {
    const items = this.getAll();
    return items[key];
  }

  getAll() {
    const emptyItems = {};
    const items = this._storage.getItem(this._storeKey);

    if (!items) {
      return emptyItems;
    }

    try {
      return JSON.parse(items);
    } catch (e) {
      return emptyItems;
    }
  }
}


/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: FILMS_AMOUNT, CATEGORY_FILMS_AMOUNT, MIN_SEARCH_STRING_LENGTH, AUTHORIZATION, END_POINT, CARDS_STORE_KEY, COMMENTS_STORE_KEY, Emojis, Description, UserRank, Position, ListTitles, Sorting, Actions, Screens, States, Filters, Method, ErrorTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILMS_AMOUNT", function() { return FILMS_AMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_FILMS_AMOUNT", function() { return CATEGORY_FILMS_AMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SEARCH_STRING_LENGTH", function() { return MIN_SEARCH_STRING_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHORIZATION", function() { return AUTHORIZATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_POINT", function() { return END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS_STORE_KEY", function() { return CARDS_STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENTS_STORE_KEY", function() { return COMMENTS_STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emojis", function() { return Emojis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRank", function() { return UserRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTitles", function() { return ListTitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorting", function() { return Sorting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screens", function() { return Screens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "States", function() { return States; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return Filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Method", function() { return Method; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorTypes", function() { return ErrorTypes; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);


const FILMS_AMOUNT = 5;
const CATEGORY_FILMS_AMOUNT = 2;
const MIN_SEARCH_STRING_LENGTH = 3;
const AUTHORIZATION = `Basic eo0w590ik29889a=${Math.random()}`;
const END_POINT = `https://htmlacademy-es-9.appspot.com/cinemaddict`;
const CARDS_STORE_KEY = `Cinemaddict Film Cards`;
const COMMENTS_STORE_KEY = `Cinemaddict Comments`;

const Emojis = [
  {
    id: `smile`,
    value: `sleeping`,
    source: `./images/emoji/smile.png`,
  },
  {
    id: `sleeping`,
    value: `neutral-face`,
    source: `./images/emoji/sleeping.png`,
  },
  {
    id: `puke`,
    value: `grinning`,
    source: `./images/emoji/puke.png`,
  },
  {
    id: `angry`,
    value: `grinning`,
    source: `./images/emoji/angry.png`
  }
];
const Description = {
  SENTENCES: {
    MIN: 1,
    MAX: 3,
  },
  LENGTH: {
    MAX: 140,
    TO_DISPLAY: 139,
  },
};
const UserRank = {
  MILESTONES: {
    ZERO: 0,
    FIRST: 1,
    SECOND: 10,
    THIRD: 11,
    FOURTH: 20,
  },
  TITLES: {
    FIRST: `Novice`,
    SECOND: `Fan`,
    THIRD: `Movie Buff`,
  },
};
const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};
const ListTitles = {
  GENERAL: `All movies. Upcoming`,
  TOP_RATED: `Top rated`,
  MOST_COMMENTED: `Most commented`,
};
const Sorting = {
  BY_DEFAULT: {
    TYPE: `default`,
    METHOD: undefined,
  },
  BY_DATE: {
    TYPE: `date`,
    METHOD: (a, b) => b.year - a.year,
  },
  BY_RATING: {
    TYPE: `rating`,
    METHOD: (a, b) => b.rating - a.rating,
  },
  BY_COMMENTS: {
    TYPE: `comments`,
    METHOD: (a, b) => b.commentsAmount - a.commentsAmount,
  },
};
const Actions = {
  ADD_TO_WATCHLIST: {
    TYPE: `add to watchlist`,
  },
  MARK_AS_WATCHED: {
    TYPE: `mark as watched`,
  },
  ADD_TO_FAVORITES: {
    TYPE: `add to favorites`,
  },
};
const Screens = {
  FILMS: {
    TYPE: `films`,
  },
  STATS: {
    TYPE: `stats`,
  },
};
const States = {
  VIEW: `view`,
  SEARCH: `search`,
  STATISTIC: `statistic`
};
const Filters = {
  ALL: {
    TYPE: `all`,
    METHOD: (n) => n,
  },
  IN_WATCHLIST: {
    TYPE: `in watchlist`,
    METHOD: (n) => n.inWatchlist,
  },
  IS_WATCHED: {
    TYPE: `is watched`,
    METHOD: (n) => n.isWatched,
  },
  IS_FAVORITE: {
    TYPE: `is favorite`,
    METHOD: (n) => n.isFavorite,
  },
  TODAY: {
    TYPE: `today`,
    METHOD: (n) => moment__WEBPACK_IMPORTED_MODULE_0___default()(n.watchingDate).isoWeekday() === moment__WEBPACK_IMPORTED_MODULE_0___default()().isoWeekday(),
  },
  WEEK: {
    TYPE: `week`,
    METHOD: (n) => moment__WEBPACK_IMPORTED_MODULE_0___default()(n.watchingDate).isoWeek() === moment__WEBPACK_IMPORTED_MODULE_0___default()().isoWeek(),
  },
  MONTH: {
    TYPE: `month`,
    METHOD: (n) => moment__WEBPACK_IMPORTED_MODULE_0___default()(n.watchingDate).month() === moment__WEBPACK_IMPORTED_MODULE_0___default()().month(),
  },
  YEAR: {
    TYPE: `year`,
    METHOD: (n) => moment__WEBPACK_IMPORTED_MODULE_0___default()(n.watchingDate).year() === moment__WEBPACK_IMPORTED_MODULE_0___default()().year(),
  },
};
const Method = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  DELETE: `DELETE`,
};
const ErrorTypes = {
  INPUT: `input-error`,
  RATING_FORM: `rating-form-error`,
  RATING_INPUT: `rating-input-error`,
};




/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/*! exports provided: createElement, render, removeElement, getUserRank, countDuplicateElements, checkStatus, toJSON, isOnline, getArrayFromObject, trimFilmDescription, getCommentPublicationDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElement", function() { return removeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserRank", function() { return getUserRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countDuplicateElements", function() { return countDuplicateElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStatus", function() { return checkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return toJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnline", function() { return isOnline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayFromObject", function() { return getArrayFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimFilmDescription", function() { return trimFilmDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentPublicationDate", function() { return getCommentPublicationDate; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/utils/constants.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const createElement = (template) => {
  const containerElement = document.createElement(`div`);
  containerElement.innerHTML = template;
  return containerElement.firstChild;
};
const render = (container, element, position = _constants__WEBPACK_IMPORTED_MODULE_0__["Position"].BEFOREEND) => {
  switch (position) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Position"].AFTERBEGIN:
      container.prepend(element);
      break;
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Position"].BEFOREEND:
      container.append(element);
      break;
  }
};
const removeElement = (element) => {
  if (element) {
    element.remove();
  }
};
const getUserRank = (amount) => {
  let rank;

  if (amount >= _constants__WEBPACK_IMPORTED_MODULE_0__["UserRank"].MILESTONES.FIRST && amount <= _constants__WEBPACK_IMPORTED_MODULE_0__["UserRank"].MILESTONES.SECOND) {
    rank = _constants__WEBPACK_IMPORTED_MODULE_0__["UserRank"].TITLES.FIRST;
    return rank;
  } else if (amount >= _constants__WEBPACK_IMPORTED_MODULE_0__["UserRank"].MILESTONES.THIRD && amount <= _constants__WEBPACK_IMPORTED_MODULE_0__["UserRank"].MILESTONES.FOURTH) {
    rank = _constants__WEBPACK_IMPORTED_MODULE_0__["UserRank"].TITLES.SECOND;
    return rank;
  } else if (amount === _constants__WEBPACK_IMPORTED_MODULE_0__["UserRank"].MILESTONES.ZERO) {
    rank = ``;
    return rank;
  }

  rank = _constants__WEBPACK_IMPORTED_MODULE_0__["UserRank"].TITLES.THIRD;
  return rank;
};
const countDuplicateElements = (list) => {
  let counts = {};
  list.forEach((element) => {
    counts[element] = (counts[element] || 0) + 1;
  });
  return counts;
};
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error(`${response.status}: ${response.statusText}`);
};
const toJSON = (response) => {
  return response.json();
};
const isOnline = () => {
  return window.navigator.onLine;
};
const getArrayFromObject = (object) => {
  return Object.keys(object).map((id) => object[id]);
};

const trimFilmDescription = (description) => {
  return description.length < _constants__WEBPACK_IMPORTED_MODULE_0__["Description"].LENGTH.MAX ? description : `${description.slice(0, _constants__WEBPACK_IMPORTED_MODULE_0__["Description"].LENGTH.TO_DISPLAY).trim()}…`;
};

const getCommentPublicationDate = (time) => {
  const inMinutes = moment__WEBPACK_IMPORTED_MODULE_1___default()().diff(time, `minutes`);
  switch (true) {
    case inMinutes < 1:
      return `now`;
    case inMinutes <= 3:
      return `a minute ago`;
    case inMinutes <= 59:
      return `a few minutes ago`;
    case inMinutes <= 119:
      return `an hour ago`;
    case inMinutes <= 1439:
      return `a few hours ago`;
    case inMinutes >= 1440:
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(time).fromNow();
  }
  return null;
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map