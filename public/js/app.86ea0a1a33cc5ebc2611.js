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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(3);

__webpack_require__(8);

__webpack_require__(7);
__webpack_require__(5);
__webpack_require__(4);
__webpack_require__(6);

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': window.Laravel
    }
});

Number.prototype.padLeft = function (n, str) {
    return (this < 0 ? '-' : '') + Array(n - String(Math.abs(this)).length + 1).join(str || '0') + Math.abs(this);
};

$(function () {
    $('.ui.dropdown').not('.no-addition').dropdown({ allowAdditions: true });
    $('.ui.dropdown.no-addition').dropdown({ allowAdditions: false });

    $('.message .close').on('click', function () {
        $(this).closest('.message').transition('fade');
    });

    $('.ui.label').popup({
        hoverable: true,
        position: 'top left'
    });

    $('.menu .item').tab();

    $('body').on('click', '.check-import-btn', function () {
        var _this = this;
        $(_this).addClass('loading');
        $.ajax({
            method: 'GET',
            url: '/check/import',
            success: function success(data) {
                console.log(2);
                $(_this).removeClass('loading');
                modal.open(data.modal, window.check.import.save);
            }
        });
    }).on('click', '.add-phrase-btn', function () {
        var _this = this;
        $(_this).addClass('loading');

        $.ajax({
            method: 'GET',
            url: '/phrase',
            data: { tab: $(_this).parent().attr('data-tab') },
            success: function success(data) {
                $(_this).removeClass('loading');
                modal.open(data.modal, window.check.phrase.save);
            }
        });
    }).on('click', '.assessment-rating-btn', function () {
        var _this = this;
        $(_this).addClass('loading');
        $.ajax({
            method: 'GET',
            url: '/check/' + $(_this).attr('data-check') + '/assessment/create',
            data: {
                phrase: $(_this).attr('data-phrase'),
                check: $(_this).attr('data-check'),
                run: $(_this).attr('data-run'),
                runphrase: $(_this).attr('data-runphrase')
            },
            success: function success(data) {
                $(_this).removeClass('loading');
                modal.open(data.modal, window.check.assessment.save);
                $('.form.assessment.dialog .ui.rating').rating({ maxRating: 4, clearable: true }).on('mouseover', '.icon', function () {
                    $('.rating-text').css('display', 'none');
                    $('.rating-' + (1 + $(this).siblings('.selected').length)).css('display', 'inline-block');
                }).on('mouseout', '.icon', function () {
                    if ($(this).siblings('.active').length === 0 && !$(this).hasClass('active')) {
                        $('.rating-text').css('display', 'none');
                        $('.rating-no').css('display', 'inline-block');
                    }
                });
            }
        });
    }).on('click', '.assessment-rating-foreign-btn', function () {
        var _this = this;
        $(_this).addClass('loading');
        $.ajax({
            method: 'GET',
            url: '/foreign_assessment/create',
            data: {
                phrase: $(_this).attr('data-phrase'),
                check: $(_this).attr('data-check'),
                run: $(_this).attr('data-run'),
                runphrase: $(_this).attr('data-runphrase')
            },
            success: function success(data) {
                $(_this).removeClass('loading');
                modal.open(data.modal, window.check.foreign_assessment.save);
                $('.form.assessment.dialog .ui.rating').rating({ maxRating: 4, clearable: true }).on('mouseover', '.icon', function () {
                    $('.rating-text').css('display', 'none');
                    $('.rating-' + (1 + $(this).siblings('.selected').length)).css('display', 'inline-block');
                }).on('mouseout', '.icon', function () {
                    if ($(this).siblings('.active').length === 0 && !$(this).hasClass('active')) {
                        $('.rating-text').css('display', 'none');
                        $('.rating-no').css('display', 'inline-block');
                    }
                });
            }
        });
    }).on('click', '.assessment-delete-btn', function () {
        $(this).parent().parent().remove();
    }).on('click', '.assessment-edit-btn', function () {
        var _this = $(this);
        unique = _this.data('unique');
        $(_this).addClass('loading');

        var tab = $("input[name^='phrase[" + unique + "][tab]']").val();
        var statement = $("input[name^='phrase[" + unique + "][statement]']").val();
        var category = $("input[name^='phrase[" + unique + "][category]']").val();

        $.ajax({
            method: 'GET',
            url: '/phrase/edit',
            data: {
                tab: tab,
                statement: statement,
                category: category,
                unique: unique
            },
            success: function success(data) {
                $(_this).removeClass('loading');
                modal.open(data.modal, window.check.phrase.update);
            }
        });
    });

    $('.row.check').on('click', '.check-assign-btn', function () {
        var _this = this;
        var url = $(_this).data('url');

        $(_this).addClass('loading');
        $.ajax({
            method: 'GET',
            url: url,
            success: function success(data) {
                $(_this).removeClass('loading');
                modal.open(data.modal, window.check.assign.save);
                $('.tabular.menu .item').tab();
            }
        });
    });

    $('.row.check').on('click', '.check-foreign-assessment-btn', function () {
        var _this = this;
        var url = $(_this).data('url');

        $(_this).addClass('loading');
        $.ajax({
            method: 'GET',
            url: url,
            success: function success(data) {
                $(_this).removeClass('loading');
                modal.open(data.modal, window.check.invite.save);
                $('.tabular.menu .item').tab();
            }
        });
    });

    // Semantic UI - Accordion
    if ($('.ui.accordion').length > 0) {
        $('.ui.accordion').accordion();
    }

    // Semantic UI - Rating
    if ($('.ui.rating.disabled').length > 0) {
        $('.ui.rating.disabled').rating({ maxRating: 4 }).rating('disable', true);
    }

    // Help - Button
    $('.help-button').click(function (e) {
        e.preventDefault();
        $('.right.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');

        if ($('.right.sidebar .loading').length > 0) {
            return;
        }

        var url = $(this).attr('href');
        $('.right.sidebar').load('/help?url=' + url);
    });

    // Semantic UI - Popup
    $('[data-content]').popup({ position: 'top center' });

    // Mobile Navigation
    $('.navigation .ui.list .mobile').on('click', function () {
        if (!$(this).hasClass('opened')) {
            $(this).addClass('opened');
            $(this).find('i').removeClass('sidebar').addClass('angle double left');
            $(this).siblings('div').css('display', 'block');
            $(this).parents('.navigation').css('width', 220);
        } else {
            $(this).removeClass('opened');
            $(this).find('i').removeClass('angle double left').addClass('sidebar');
            $(this).siblings('div').css('display', 'none');
            $(this).parents('.navigation').css('width', '');
        }
    });

    $(window).on('resize', function () {
        var _ele = $('.navigation .ui.list .mobile');
        if ($(this).width() > 1200) {
            if (_ele.hasClass('opened')) {
                _ele.removeClass('opened');
            }
            _ele.siblings('div').css('display', 'block');
            _ele.find('i').removeClass('angle double left').addClass('sidebar');
            _ele.parents('.navigation').css('width', '');
        } else if (!_ele.hasClass('opened')) {
            _ele.siblings('div').css('display', 'none');
        }
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: variable @portfolioPrimaryColor is undefined\n @ D:\\www\\kompetenzcheck-neuentwicklung\\resources\\assets\\less\\globals\\site.less (line 63, column 9)\n near lines:\n     padding: 0;\n     color: @portfolioPrimaryColor;\n     text-decoration: none;\n    at runLoaders (D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\webpack\\lib\\NormalModule.js:192:19)\n    at D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less-loader\\index.js:68:16\n    at D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\render.js:33:38\n    at D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\parse.js:63:17\n    at Object.finish [as _finish] (D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\parser\\parser.js:183:28)\n    at Object._onSequencerEmpty (D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\visitors\\import-visitor.js:35:14)\n    at ImportSequencer.tryRun (D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\visitors\\import-sequencer.js:50:14)\n    at D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\visitors\\import-sequencer.js:19:25\n    at fileParsedFunc (D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\import-manager.js:50:17)\n    at D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\import-manager.js:113:21\n    at finish (D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\parser\\parser.js:183:28)\n    at Object.parse (D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\parser\\parser.js:191:24)\n    at loadFileCallback (D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\import-manager.js:112:64)\n    at D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less\\lib\\less\\import-manager.js:123:17\n    at D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\less-loader\\index.js:123:5\n    at next (D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\webpack\\lib\\dependencies\\LoaderPlugin.js:52:15)\n    at compilation.addModuleDependencies (D:\\www\\kompetenzcheck-neuentwicklung\\node_modules\\webpack\\lib\\dependencies\\LoaderPlugin.js:29:12)\n    at _combinedTickCallback (internal/process/next_tick.js:73:7)\n    at process._tickCallback (internal/process/next_tick.js:104:9)");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery = window.$ = window.jQuery = __webpack_require__(0);

__webpack_require__(10);

/** Dropzone */
window.Dropzone = __webpack_require__(9);
Dropzone.autoDiscover = false;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {window.check = {
    import: {
        save: function save(form) {
            $.ajax({
                method: 'POST',
                url: '/check/import',
                data: helper.prepareForm(form),
                success: function success(response) {
                    if (response.error) {
                        // ToDo: Anzeige der Fehlermeldung im Modal
                        alert(response.message);
                    } else {
                        $('.ui.modal').modal('hide');
                        window.location = response.route;
                    }
                }
            });
        }
    },

    assign: {
        save: function save(form) {
            $.ajax({
                method: 'POST',
                url: '/check/assign',
                data: helper.prepareForm(form),
                success: function success(response) {
                    $('.ui.modal').modal('hide');
                    window.location.reload();
                }
            });
        }
    },

    phrase: {
        save: function save(form) {
            $.ajax({
                method: 'POST',
                url: '/phrase',
                data: helper.prepareForm(form),
                success: function success(response) {
                    $('.ui.bottom.attached.active').append(response.view);
                    $('.ui.modal').modal('hide');
                },
                error: function error(data) {
                    // var errors =
                    var errors = data.responseJSON;
                    var errorsHtml = '<div class="ui negative message">';

                    $.each(errors, function (key, value) {
                        errorsHtml += '<li>' + value[0] + '</li>'; //showing only the first error.
                    });
                    errorsHtml += '</ul></di>';

                    $('#form-errors').html(errorsHtml);

                    $('.modal-save-btn').removeClass('loading');
                }
            });
        },
        update: function update(form) {
            $.ajax({
                method: 'POST',
                url: '/phrase/update',
                data: helper.prepareForm(form),
                success: function success(response) {
                    var uniqueClassSelector = ".unique-" + response.unique,
                        element = $(uniqueClassSelector);
                    if (element.length > 0) {
                        element.replaceWith(response.view);
                    }

                    $('.ui.modal').modal('hide');
                },
                error: function error(data) {
                    // var errors =
                    var errors = data.responseJSON;
                    var errorsHtml = '<div class="ui negative message">';

                    $.each(errors, function (key, value) {
                        errorsHtml += '<li>' + value[0] + '</li>'; //showing only the first error.
                    });
                    errorsHtml += '</ul></di>';

                    $('#form-errors').html(errorsHtml);

                    $('.modal-save-btn').removeClass('loading');
                }
            });
        }
    },

    assessment: {
        save: function save(form) {
            var data = helper.prepareForm(form);
            data['rating'] = $('.ui.colossal.bullseye.rating').rating('get rating');

            $.ajax({
                method: 'POST',
                url: '/check/' + data['check'] + '/assessment',
                data: data,
                success: function success(response) {
                    $('.ui.modal').modal('hide');

                    var button = $('a[data-phrase="' + data['phrase'] + '"][data-check="' + data['check'] + '"][data-run="' + data['run'] + '"]');

                    button.attr('data-runphrase', response.runphrase);
                    $(button.prev()).rating('disable', true).rating('set rating', data['rating']);
                }
            });
        }
    },

    foreign_assessment: {
        save: function save(form) {
            var data = helper.prepareForm(form);
            data['rating'] = $('.ui.colossal.bullseye.rating').rating('get rating');

            $.ajax({
                method: 'POST',
                url: '/foreign_assessment',
                data: data,
                success: function success(response) {
                    $('.ui.modal').modal('hide');

                    var button = $('a[data-phrase="' + data['phrase'] + '"][data-check="' + data['check'] + '"][data-run="' + data['run'] + '"]');

                    button.attr('data-runphrase', response.runphrase);
                    $(button.prev()).rating('disable', true).rating('set rating', data['rating']);
                }
            });
        }
    },

    invite: {
        save: function save(form) {
            var data = helper.prepareForm(form);
            $.ajax({
                method: 'POST',
                url: 'check/' + data['check'] + '/foreign_assessment/invite',
                data: data,
                success: function success(response) {
                    $('.ui.bottom.attached.active').append(response.view);
                    $('.ui.modal').modal('hide');
                },
                error: function error(response) {
                    // Check if there already is a msg and remove it
                    var _modalContent = $('.ui.modal > .content');
                    _modalContent.find('.ui.error.message').remove();

                    // Remove the Loading from button
                    $('.modal-save-btn.loading').removeClass('loading');

                    var _errors = [];
                    $.each(response.responseJSON, function (index, value) {
                        _errors.push(value);
                    });

                    _modalContent.prepend($('<div>').addClass('ui error message').append(_errors.join("<br />")));
                }
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {window.helper = {
    prepareForm: function prepareForm(form) {
        var data = {};
        $.each(form, function (i, obj) {
            data[obj.name] = obj.value;
        });
        return data;
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {window.modal = {
    open: function open(data, saveFunction) {
        if (data !== "") {
            $('.ui.modal > .header').html(data.header);
            $('.ui.modal > .content').html(data.content);
            $('.ui.modal > .actions').html(data.actions);

            if ($('.modal-abort-btn').length > 0) {
                $('.modal-abort-btn').on('click', function () {
                    $('.ui.modal').modal('hide');
                });
            }

            if ($('.modal-save-btn').length > 0) {
                $('.modal-save-btn').on('click', function () {
                    $(this).addClass('loading');
                    $('.ui.modal').find('form').each(function (index, element) {
                        if (typeof saveFunction === "function") {
                            saveFunction($(element).serializeArray());
                        }
                    });
                });

                $('.ui.modal').find('form').on('submit', function () {
                    $('.modal-save-btn').trigger('click');
                    return false;
                });
            }

            if ($('.modal-submit-btn').length > 0) {
                $('.modal-submit-btn').on('click', function () {
                    $(this).addClass('loading');
                    $('.ui.modal form').submit();
                });
                $('.ui.modal > .content').find('form').on('submit', function (e) {
                    e.stopPropagation();
                });
            }

            /** Enable Dropdown */
            $('.ui.dropdown').dropdown({ allowAdditions: true });

            /** Enable Checkbox */
            $('.ui.radio.checkbox').checkbox();
        }

        $('.ui.modal').modal('show');
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Semantic UI - Dropdown
$.fn.dropdown.settings.message = {
    addResult: '<b>{term}</b> hinzufügen',
    count: '{count} ausgewählt',
    maxSelections: 'Sie können maximal {maxCount} auswählen',
    noResults: 'Keine Einträge gefunden.',
    serverError: 'Fehler - Der Server hat nicht geantwortet.'
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* # Semantic UI - 2.2.9
* https://github.com/Semantic-Org/Semantic-UI
* http://www.semantic-ui.com/
*
* Copyright 2014 Contributors
* Released under the MIT license
* http://opensource.org/licenses/MIT
*
*/
!function (e, t, n, i) {
  e.site = e.fn.site = function (i) {
    var o,
        a,
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1),
        d = e.isPlainObject(i) ? e.extend(!0, {}, e.site.settings, i) : e.extend({}, e.site.settings),
        f = d.namespace,
        m = d.error,
        g = "module-" + f,
        v = e(n),
        p = v,
        h = this,
        b = p.data(g);return o = { initialize: function initialize() {
        o.instantiate();
      }, instantiate: function instantiate() {
        o.verbose("Storing instance of site", o), b = o, p.data(g, o);
      }, normalize: function normalize() {
        o.fix.console(), o.fix.requestAnimationFrame();
      }, fix: { console: function (_console) {
          function console() {
            return _console.apply(this, arguments);
          }

          console.toString = function () {
            return _console.toString();
          };

          return console;
        }(function () {
          o.debug("Normalizing window.console"), void 0 !== console && void 0 !== console.log || (o.verbose("Console not available, normalizing events"), o.disable.console()), void 0 !== console.group && void 0 !== console.groupEnd && void 0 !== console.groupCollapsed || (o.verbose("Console group not available, normalizing events"), t.console.group = function () {}, t.console.groupEnd = function () {}, t.console.groupCollapsed = function () {}), void 0 === console.markTimeline && (o.verbose("Mark timeline not available, normalizing events"), t.console.markTimeline = function () {});
        }), consoleClear: function consoleClear() {
          o.debug("Disabling programmatic console clearing"), t.console.clear = function () {};
        }, requestAnimationFrame: function requestAnimationFrame() {
          o.debug("Normalizing requestAnimationFrame"), void 0 === t.requestAnimationFrame && (o.debug("RequestAnimationFrame not available, normalizing event"), t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
            setTimeout(e, 0);
          });
        } }, moduleExists: function moduleExists(t) {
        return void 0 !== e.fn[t] && void 0 !== e.fn[t].settings;
      }, enabled: { modules: function modules(t) {
          var n = [];return t = t || d.modules, e.each(t, function (e, t) {
            o.moduleExists(t) && n.push(t);
          }), n;
        } }, disabled: { modules: function modules(t) {
          var n = [];return t = t || d.modules, e.each(t, function (e, t) {
            o.moduleExists(t) || n.push(t);
          }), n;
        } }, change: { setting: function setting(t, n, i, a) {
          i = "string" == typeof i ? "all" === i ? d.modules : [i] : i || d.modules, a = void 0 === a || a, e.each(i, function (i, r) {
            var s,
                l = !o.moduleExists(r) || e.fn[r].settings.namespace || !1;o.moduleExists(r) && (o.verbose("Changing default setting", t, n, r), e.fn[r].settings[t] = n, a && l && (s = e(":data(module-" + l + ")"), s.length > 0 && (o.verbose("Modifying existing settings", s), s[r]("setting", t, n))));
          });
        }, settings: function settings(t, n, i) {
          n = "string" == typeof n ? [n] : n || d.modules, i = void 0 === i || i, e.each(n, function (n, a) {
            var r;o.moduleExists(a) && (o.verbose("Changing default setting", t, a), e.extend(!0, e.fn[a].settings, t), i && f && (r = e(":data(module-" + f + ")"), r.length > 0 && (o.verbose("Modifying existing settings", r), r[a]("setting", t))));
          });
        } }, enable: { console: function console() {
          o.console(!0);
        }, debug: function debug(e, t) {
          e = e || d.modules, o.debug("Enabling debug for modules", e), o.change.setting("debug", !0, e, t);
        }, verbose: function verbose(e, t) {
          e = e || d.modules, o.debug("Enabling verbose debug for modules", e), o.change.setting("verbose", !0, e, t);
        } }, disable: { console: function console() {
          o.console(!1);
        }, debug: function debug(e, t) {
          e = e || d.modules, o.debug("Disabling debug for modules", e), o.change.setting("debug", !1, e, t);
        }, verbose: function verbose(e, t) {
          e = e || d.modules, o.debug("Disabling verbose debug for modules", e), o.change.setting("verbose", !1, e, t);
        } }, console: function console(e) {
        if (e) {
          if (void 0 === b.cache.console) return void o.error(m.console);o.debug("Restoring console function"), t.console = b.cache.console;
        } else o.debug("Disabling console function"), b.cache.console = t.console, t.console = { clear: function clear() {}, error: function error() {}, group: function group() {}, groupCollapsed: function groupCollapsed() {}, groupEnd: function groupEnd() {}, info: function info() {}, log: function log() {}, markTimeline: function markTimeline() {}, warn: function warn() {} };
      }, destroy: function destroy() {
        o.verbose("Destroying previous site for", p), p.removeData(g);
      }, cache: {}, setting: function setting(t, n) {
        if (e.isPlainObject(t)) e.extend(!0, d, t);else {
          if (void 0 === n) return d[t];d[t] = n;
        }
      }, internal: function internal(t, n) {
        if (e.isPlainObject(t)) e.extend(!0, o, t);else {
          if (void 0 === n) return o[t];o[t] = n;
        }
      }, debug: function debug() {
        d.debug && (d.performance ? o.performance.log(arguments) : (o.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), o.debug.apply(console, arguments)));
      }, verbose: function verbose() {
        d.verbose && d.debug && (d.performance ? o.performance.log(arguments) : (o.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), o.verbose.apply(console, arguments)));
      }, error: function error() {
        o.error = Function.prototype.bind.call(console.error, console, d.name + ":"), o.error.apply(console, arguments);
      }, performance: { log: function log(e) {
          var t, n, i;d.performance && (t = new Date().getTime(), i = r || t, n = t - i, r = t, s.push({ Element: h, Name: e[0], Arguments: [].slice.call(e, 1) || "", "Execution Time": n })), clearTimeout(o.performance.timer), o.performance.timer = setTimeout(o.performance.display, 500);
        }, display: function display() {
          var t = d.name + ":",
              n = 0;r = !1, clearTimeout(o.performance.timer), e.each(s, function (e, t) {
            n += t["Execution Time"];
          }), t += " " + n + "ms", (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
            console.log(t.Name + ": " + t["Execution Time"] + "ms");
          }), console.groupEnd()), s = [];
        } }, invoke: function invoke(t, n, i) {
        var r,
            s,
            l,
            c = b;return n = n || u, i = h || i, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, i) {
          var a = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
            if (void 0 !== c[a]) return s = c[a], !1;if (!e.isPlainObject(c[i]) || n == r) return void 0 !== c[i] ? (s = c[i], !1) : (o.error(m.method, t), !1);c = c[i];
          }
        })), e.isFunction(s) ? l = s.apply(i, n) : void 0 !== s && (l = s), e.isArray(a) ? a.push(l) : void 0 !== a ? a = [a, l] : void 0 !== l && (a = l), s;
      } }, c ? (void 0 === b && o.initialize(), o.invoke(l)) : (void 0 !== b && o.destroy(), o.initialize()), void 0 !== a ? a : this;
  }, e.site.settings = { name: "Site", namespace: "site", error: { console: "Console cannot be restored, most likely it was overwritten outside of module", method: "The method you called is not defined." }, debug: !1, verbose: !1, performance: !0, modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"], siteNamespace: "site", namespaceStub: { cache: {}, config: {}, sections: {}, section: {}, utilities: {} } }, e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (n) {
        return !!e.data(n, t);
      };
    }) : function (t, n, i) {
      return !!e.data(t, i[3]);
    } });
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.form = function (t) {
    var i,
        o = e(this),
        a = o.selector || "",
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = arguments[1],
        u = "string" == typeof l,
        d = [].slice.call(arguments, 1);return o.each(function () {
      var f,
          m,
          g,
          v,
          p,
          h,
          b,
          y,
          x,
          C,
          w,
          k,
          S,
          T,
          A,
          R,
          P,
          E,
          F,
          O = e(this),
          D = this,
          q = [],
          j = !1;F = { initialize: function initialize() {
          F.get.settings(), u ? (void 0 === E && F.instantiate(), F.invoke(l)) : (void 0 !== E && E.invoke("destroy"), F.verbose("Initializing form validation", O, y), F.bindEvents(), F.set.defaults(), F.instantiate());
        }, instantiate: function instantiate() {
          F.verbose("Storing instance of module", F), E = F, O.data(R, F);
        }, destroy: function destroy() {
          F.verbose("Destroying previous module", E), F.removeEvents(), O.removeData(R);
        }, refresh: function refresh() {
          F.verbose("Refreshing selector cache"), f = O.find(w.field), m = O.find(w.group), g = O.find(w.message), v = O.find(w.prompt), p = O.find(w.submit), h = O.find(w.clear), b = O.find(w.reset);
        }, submit: function submit() {
          F.verbose("Submitting form", O), O.submit();
        }, attachEvents: function attachEvents(t, n) {
          n = n || "submit", e(t).on("click" + P, function (e) {
            F[n](), e.preventDefault();
          });
        }, bindEvents: function bindEvents() {
          F.verbose("Attaching form events"), O.on("submit" + P, F.validate.form).on("blur" + P, w.field, F.event.field.blur).on("click" + P, w.submit, F.submit).on("click" + P, w.reset, F.reset).on("click" + P, w.clear, F.clear), y.keyboardShortcuts && O.on("keydown" + P, w.field, F.event.field.keydown), f.each(function () {
            var t = e(this),
                n = t.prop("type"),
                i = F.get.changeEvent(n, t);e(this).on(i + P, F.event.field.change);
          });
        }, clear: function clear() {
          f.each(function () {
            var t = e(this),
                n = t.parent(),
                i = t.closest(m),
                o = i.find(w.prompt),
                a = t.data(C.defaultValue) || "",
                r = n.is(w.uiCheckbox),
                s = n.is(w.uiDropdown);i.hasClass(k.error) && (F.verbose("Resetting error on field", i), i.removeClass(k.error), o.remove()), s ? (F.verbose("Resetting dropdown value", n, a), n.dropdown("clear")) : r ? t.prop("checked", !1) : (F.verbose("Resetting field value", t, a), t.val(""));
          });
        }, reset: function reset() {
          f.each(function () {
            var t = e(this),
                n = t.parent(),
                i = t.closest(m),
                o = i.find(w.prompt),
                a = t.data(C.defaultValue),
                r = n.is(w.uiCheckbox),
                s = n.is(w.uiDropdown),
                l = i.hasClass(k.error);void 0 !== a && (l && (F.verbose("Resetting error on field", i), i.removeClass(k.error), o.remove()), s ? (F.verbose("Resetting dropdown value", n, a), n.dropdown("restore defaults")) : r ? (F.verbose("Resetting checkbox value", n, a), t.prop("checked", a)) : (F.verbose("Resetting field value", t, a), t.val(a)));
          });
        }, determine: { isValid: function isValid() {
            var t = !0;return e.each(x, function (e, n) {
              F.validate.field(n, e, !0) || (t = !1);
            }), t;
          } }, is: { bracketedRule: function bracketedRule(e) {
            return e.type && e.type.match(y.regExp.bracket);
          }, empty: function empty(e) {
            return !e || 0 === e.length || (e.is('input[type="checkbox"]') ? !e.is(":checked") : F.is.blank(e));
          }, blank: function blank(t) {
            return "" === e.trim(t.val());
          }, valid: function valid(t) {
            var n = !0;return t ? (F.verbose("Checking if field is valid", t), F.validate.field(x[t], t, !1)) : (F.verbose("Checking if form is valid"), e.each(x, function (e, t) {
              F.is.valid(e) || (n = !1);
            }), n);
          } }, removeEvents: function removeEvents() {
          O.off(P), f.off(P), p.off(P), f.off(P);
        }, event: { field: { keydown: function keydown(t) {
              var n = e(this),
                  i = t.which,
                  o = n.is(w.input),
                  a = n.is(w.checkbox),
                  r = n.closest(w.uiDropdown).length > 0,
                  s = { enter: 13, escape: 27 };i == s.escape && (F.verbose("Escape key pressed blurring field"), n.blur()), t.ctrlKey || i != s.enter || !o || r || a || (j || (n.one("keyup" + P, F.event.field.keyup), F.submit(), F.debug("Enter pressed on input submitting form")), j = !0);
            }, keyup: function keyup() {
              j = !1;
            }, blur: function blur(t) {
              var n = e(this),
                  i = n.closest(m),
                  o = F.get.validation(n);i.hasClass(k.error) ? (F.debug("Revalidating field", n, o), o && F.validate.field(o)) : "blur" != y.on && "change" != y.on || o && F.validate.field(o);
            }, change: function change(t) {
              var n = e(this),
                  i = n.closest(m),
                  o = F.get.validation(n);o && ("change" == y.on || i.hasClass(k.error) && y.revalidate) && (clearTimeout(F.timer), F.timer = setTimeout(function () {
                F.debug("Revalidating field", n, F.get.validation(n)), F.validate.field(o);
              }, y.delay));
            } } }, get: { ancillaryValue: function ancillaryValue(e) {
            return !(!e.type || !e.value && !F.is.bracketedRule(e)) && (void 0 !== e.value ? e.value : e.type.match(y.regExp.bracket)[1] + "");
          }, ruleName: function ruleName(e) {
            return F.is.bracketedRule(e) ? e.type.replace(e.type.match(y.regExp.bracket)[0], "") : e.type;
          }, changeEvent: function changeEvent(e, t) {
            return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : F.get.inputEvent();
          }, inputEvent: function inputEvent() {
            return void 0 !== n.createElement("input").oninput ? "input" : void 0 !== n.createElement("input").onpropertychange ? "propertychange" : "keyup";
          }, prompt: function prompt(e, t) {
            var n,
                i,
                o,
                a = F.get.ruleName(e),
                r = F.get.ancillaryValue(e),
                s = e.prompt || y.prompt[a] || y.text.unspecifiedRule,
                l = s.search("{value}") !== -1,
                c = s.search("{name}") !== -1;return (c || l) && (i = F.get.field(t.identifier)), l && (s = s.replace("{value}", i.val())), c && (n = i.closest(w.group).find("label").eq(0), o = 1 == n.length ? n.text() : i.prop("placeholder") || y.text.unspecifiedField, s = s.replace("{name}", o)), s = s.replace("{identifier}", t.identifier), s = s.replace("{ruleValue}", r), e.prompt || F.verbose("Using default validation prompt for type", s, a), s;
          }, settings: function settings() {
            if (e.isPlainObject(t)) {
              var n,
                  i = Object.keys(t),
                  o = i.length > 0 && void 0 !== t[i[0]].identifier && void 0 !== t[i[0]].rules;o ? (y = e.extend(!0, {}, e.fn.form.settings, c), x = e.extend({}, e.fn.form.settings.defaults, t), F.error(y.error.oldSyntax, D), F.verbose("Extending settings from legacy parameters", x, y)) : (t.fields && (n = Object.keys(t.fields), ("string" == typeof t.fields[n[0]] || e.isArray(t.fields[n[0]])) && e.each(t.fields, function (n, i) {
                "string" == typeof i && (i = [i]), t.fields[n] = { rules: [] }, e.each(i, function (e, i) {
                  t.fields[n].rules.push({ type: i });
                });
              })), y = e.extend(!0, {}, e.fn.form.settings, t), x = e.extend({}, e.fn.form.settings.defaults, y.fields), F.verbose("Extending settings", x, y));
            } else y = e.fn.form.settings, x = e.fn.form.settings.defaults, F.verbose("Using default form validation", x, y);A = y.namespace, C = y.metadata, w = y.selector, k = y.className, S = y.regExp, T = y.error, R = "module-" + A, P = "." + A, E = O.data(R), F.refresh();
          }, field: function field(t) {
            return F.verbose("Finding field with identifier", t), t = F.escape.string(t), f.filter("#" + t).length > 0 ? f.filter("#" + t) : f.filter('[name="' + t + '"]').length > 0 ? f.filter('[name="' + t + '"]') : f.filter('[name="' + t + '[]"]').length > 0 ? f.filter('[name="' + t + '[]"]') : f.filter("[data-" + C.validate + '="' + t + '"]').length > 0 ? f.filter("[data-" + C.validate + '="' + t + '"]') : e("<input/>");
          }, fields: function fields(t) {
            var n = e();return e.each(t, function (e, t) {
              n = n.add(F.get.field(t));
            }), n;
          }, validation: function validation(t) {
            var n, i;return !!x && (e.each(x, function (e, o) {
              i = o.identifier || e, F.get.field(i)[0] == t[0] && (o.identifier = i, n = o);
            }), n || !1);
          }, value: function value(e) {
            var t,
                n = [];return n.push(e), t = F.get.values.call(D, n), t[e];
          }, values: function values(t) {
            var n = e.isArray(t) ? F.get.fields(t) : f,
                i = {};return n.each(function (t, n) {
              var o = e(n),
                  a = (o.prop("type"), o.prop("name")),
                  r = o.val(),
                  s = o.is(w.checkbox),
                  l = o.is(w.radio),
                  c = a.indexOf("[]") !== -1,
                  u = !!s && o.is(":checked");a && (c ? (a = a.replace("[]", ""), i[a] || (i[a] = []), s ? u ? i[a].push(r || !0) : i[a].push(!1) : i[a].push(r)) : l ? u && (i[a] = r) : i[a] = s ? !!u && (r || !0) : r);
            }), i;
          } }, has: { field: function field(e) {
            return F.verbose("Checking for existence of a field with identifier", e), e = F.escape.string(e), "string" != typeof e && F.error(T.identifier, e), f.filter("#" + e).length > 0 || f.filter('[name="' + e + '"]').length > 0 || f.filter("[data-" + C.validate + '="' + e + '"]').length > 0;
          } }, escape: { string: function string(e) {
            return e = String(e), e.replace(S.escape, "\\$&");
          } }, add: { prompt: function prompt(t, n) {
            var i = F.get.field(t),
                o = i.closest(m),
                a = o.children(w.prompt),
                r = 0 !== a.length;n = "string" == typeof n ? [n] : n, F.verbose("Adding field error state", t), o.addClass(k.error), y.inline && (r || (a = y.templates.prompt(n), a.appendTo(o)), a.html(n[0]), r ? F.verbose("Inline errors are disabled, no inline error added", t) : y.transition && void 0 !== e.fn.transition && O.transition("is supported") ? (F.verbose("Displaying error with css transition", y.transition), a.transition(y.transition + " in", y.duration)) : (F.verbose("Displaying error with fallback javascript animation"), a.fadeIn(y.duration)));
          }, errors: function errors(e) {
            F.debug("Adding form error messages", e), F.set.error(), g.html(y.templates.error(e));
          } }, remove: { prompt: function prompt(t) {
            var n = F.get.field(t),
                i = n.closest(m),
                o = i.children(w.prompt);i.removeClass(k.error), y.inline && o.is(":visible") && (F.verbose("Removing prompt for field", t), y.transition && void 0 !== e.fn.transition && O.transition("is supported") ? o.transition(y.transition + " out", y.duration, function () {
              o.remove();
            }) : o.fadeOut(y.duration, function () {
              o.remove();
            }));
          } }, set: { success: function success() {
            O.removeClass(k.error).addClass(k.success);
          }, defaults: function defaults() {
            f.each(function () {
              var t = e(this),
                  n = t.filter(w.checkbox).length > 0,
                  i = n ? t.is(":checked") : t.val();t.data(C.defaultValue, i);
            });
          }, error: function error() {
            O.removeClass(k.success).addClass(k.error);
          }, value: function value(e, t) {
            var n = {};return n[e] = t, F.set.values.call(D, n);
          }, values: function values(t) {
            e.isEmptyObject(t) || e.each(t, function (t, n) {
              var i,
                  o = F.get.field(t),
                  a = o.parent(),
                  r = e.isArray(n),
                  s = a.is(w.uiCheckbox),
                  l = a.is(w.uiDropdown),
                  c = o.is(w.radio) && s,
                  u = o.length > 0;u && (r && s ? (F.verbose("Selecting multiple", n, o), a.checkbox("uncheck"), e.each(n, function (e, t) {
                i = o.filter('[value="' + t + '"]'), a = i.parent(), i.length > 0 && a.checkbox("check");
              })) : c ? (F.verbose("Selecting radio value", n, o), o.filter('[value="' + n + '"]').parent(w.uiCheckbox).checkbox("check")) : s ? (F.verbose("Setting checkbox value", n, a), n === !0 ? a.checkbox("check") : a.checkbox("uncheck")) : l ? (F.verbose("Setting dropdown value", n, a), a.dropdown("set selected", n)) : (F.verbose("Setting field value", n, o), o.val(n)));
            });
          } }, validate: { form: function form(e, t) {
            var n = F.get.values();if (j) return !1;if (q = [], F.determine.isValid()) {
              if (F.debug("Form has no validation errors, submitting"), F.set.success(), t !== !0) return y.onSuccess.call(D, e, n);
            } else if (F.debug("Form has errors"), F.set.error(), y.inline || F.add.errors(q), void 0 !== O.data("moduleApi") && e.stopImmediatePropagation(), t !== !0) return y.onFailure.call(D, q, n);
          }, field: function field(t, n, i) {
            i = void 0 === i || i, "string" == typeof t && (F.verbose("Validating field", t), n = t, t = x[t]);var o = t.identifier || n,
                a = F.get.field(o),
                r = !!t.depends && F.get.field(t.depends),
                s = !0,
                l = [];return t.identifier || (F.debug("Using field name as identifier", o), t.identifier = o), a.prop("disabled") ? (F.debug("Field is disabled. Skipping", o), s = !0) : t.optional && F.is.blank(a) ? (F.debug("Field is optional and blank. Skipping", o), s = !0) : t.depends && F.is.empty(r) ? (F.debug("Field depends on another value that is not present or empty. Skipping", r), s = !0) : void 0 !== t.rules && e.each(t.rules, function (e, n) {
              F.has.field(o) && !F.validate.rule(t, n) && (F.debug("Field is invalid", o, n.type), l.push(F.get.prompt(n, t)), s = !1);
            }), s ? (i && (F.remove.prompt(o, l), y.onValid.call(a)), !0) : (i && (q = q.concat(l), F.add.prompt(o, l), y.onInvalid.call(a, l)), !1);
          }, rule: function rule(t, n) {
            var i = F.get.field(t.identifier),
                o = (n.type, i.val()),
                a = F.get.ancillaryValue(n),
                r = F.get.ruleName(n),
                s = y.rules[r];return e.isFunction(s) ? (o = void 0 === o || "" === o || null === o ? "" : e.trim(o + ""), s.call(i, o, a)) : void F.error(T.noRule, r);
          } }, setting: function setting(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, y, t);else {
            if (void 0 === n) return y[t];y[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, F, t);else {
            if (void 0 === n) return F[t];F[t] = n;
          }
        }, debug: function debug() {
          !y.silent && y.debug && (y.performance ? F.performance.log(arguments) : (F.debug = Function.prototype.bind.call(console.info, console, y.name + ":"), F.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !y.silent && y.verbose && y.debug && (y.performance ? F.performance.log(arguments) : (F.verbose = Function.prototype.bind.call(console.info, console, y.name + ":"), F.verbose.apply(console, arguments)));
        }, error: function error() {
          y.silent || (F.error = Function.prototype.bind.call(console.error, console, y.name + ":"), F.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;y.performance && (t = new Date().getTime(), i = r || t, n = t - i, r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: D, "Execution Time": n })), clearTimeout(F.performance.timer), F.performance.timer = setTimeout(F.performance.display, 500);
          }, display: function display() {
            var t = y.name + ":",
                n = 0;r = !1, clearTimeout(F.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", a && (t += " '" + a + "'"), o.length > 1 && (t += " (" + o.length + ")"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function invoke(t, n, o) {
          var a,
              r,
              s,
              l = E;return n = n || d, o = D || o, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] && (r = l[i], !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(o, n) : void 0 !== r && (s = r), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), r;
        } }, F.initialize();
    }), void 0 !== i ? i : this;
  }, e.fn.form.settings = { name: "Form", namespace: "form", debug: !1, verbose: !1, performance: !0, fields: !1, keyboardShortcuts: !0, on: "submit", inline: !1, delay: 200, revalidate: !0, transition: "scale", duration: 200, onValid: function onValid() {}, onInvalid: function onInvalid() {}, onSuccess: function onSuccess() {
      return !0;
    }, onFailure: function onFailure() {
      return !1;
    }, metadata: { defaultValue: "default", validate: "validate" }, regExp: { htmlID: /^[a-zA-Z][\w:.-]*$/g, bracket: /\[(.*)\]/i, decimal: /^\d+\.?\d*$/, email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, flags: /^\/(.*)\/(.*)?/, integer: /^\-?\d+$/, number: /^\-?\d*(\.\d+)?$/, url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i }, text: { unspecifiedRule: "Please enter a valid value", unspecifiedField: "This field" }, prompt: { empty: "{name} must have a value", checked: "{name} must be checked", email: "{name} must be a valid e-mail", url: "{name} must be a valid url", regExp: "{name} is not formatted correctly", integer: "{name} must be an integer", decimal: "{name} must be a decimal number", number: "{name} must be set to a number", is: '{name} must be "{ruleValue}"', isExactly: '{name} must be exactly "{ruleValue}"', not: '{name} cannot be set to "{ruleValue}"', notExactly: '{name} cannot be set to exactly "{ruleValue}"', contain: '{name} cannot contain "{ruleValue}"', containExactly: '{name} cannot contain exactly "{ruleValue}"', doesntContain: '{name} must contain  "{ruleValue}"', doesntContainExactly: '{name} must contain exactly "{ruleValue}"', minLength: "{name} must be at least {ruleValue} characters", length: "{name} must be at least {ruleValue} characters", exactLength: "{name} must be exactly {ruleValue} characters", maxLength: "{name} cannot be longer than {ruleValue} characters", match: "{name} must match {ruleValue} field", different: "{name} must have a different value than {ruleValue} field", creditCard: "{name} must be a valid credit card number", minCount: "{name} must have at least {ruleValue} choices", exactCount: "{name} must have exactly {ruleValue} choices", maxCount: "{name} must have {ruleValue} or less choices" }, selector: { checkbox: 'input[type="checkbox"], input[type="radio"]', clear: ".clear", field: "input, textarea, select", group: ".field", input: "input", message: ".error.message", prompt: ".prompt.label", radio: 'input[type="radio"]', reset: '.reset:not([type="reset"])', submit: '.submit:not([type="submit"])', uiCheckbox: ".ui.checkbox", uiDropdown: ".ui.dropdown" }, className: { error: "error", label: "ui prompt label", pressed: "down", success: "success" }, error: { identifier: "You must specify a string identifier for each field", method: "The method you called is not defined.", noRule: "There is no rule matching the one you specified", oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically." }, templates: { error: function error(t) {
        var n = '<ul class="list">';return e.each(t, function (e, t) {
          n += "<li>" + t + "</li>";
        }), n += "</ul>", e(n);
      }, prompt: function prompt(t) {
        return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0]);
      } }, rules: { empty: function empty(t) {
        return !(void 0 === t || "" === t || e.isArray(t) && 0 === t.length);
      }, checked: function checked() {
        return e(this).filter(":checked").length > 0;
      }, email: function email(t) {
        return e.fn.form.settings.regExp.email.test(t);
      }, url: function url(t) {
        return e.fn.form.settings.regExp.url.test(t);
      }, regExp: function regExp(t, n) {
        if (n instanceof RegExp) return t.match(n);var i,
            o = n.match(e.fn.form.settings.regExp.flags);return o && (n = o.length >= 2 ? o[1] : n, i = o.length >= 3 ? o[2] : ""), t.match(new RegExp(n, i));
      }, integer: function integer(t, n) {
        var i,
            o,
            a,
            r = e.fn.form.settings.regExp.integer;return n && ["", ".."].indexOf(n) === -1 && (n.indexOf("..") == -1 ? r.test(n) && (i = o = n - 0) : (a = n.split("..", 2), r.test(a[0]) && (i = a[0] - 0), r.test(a[1]) && (o = a[1] - 0))), r.test(t) && (void 0 === i || t >= i) && (void 0 === o || t <= o);
      }, decimal: function decimal(t) {
        return e.fn.form.settings.regExp.decimal.test(t);
      }, number: function number(t) {
        return e.fn.form.settings.regExp.number.test(t);
      }, is: function is(e, t) {
        return t = "string" == typeof t ? t.toLowerCase() : t, (e = "string" == typeof e ? e.toLowerCase() : e) == t;
      }, isExactly: function isExactly(e, t) {
        return e == t;
      }, not: function not(e, t) {
        return e = "string" == typeof e ? e.toLowerCase() : e, t = "string" == typeof t ? t.toLowerCase() : t, e != t;
      }, notExactly: function notExactly(e, t) {
        return e != t;
      }, contains: function contains(t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), t.search(new RegExp(n, "i")) !== -1;
      }, containsExactly: function containsExactly(t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), t.search(new RegExp(n)) !== -1;
      }, doesntContain: function doesntContain(t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), t.search(new RegExp(n, "i")) === -1;
      }, doesntContainExactly: function doesntContainExactly(t, n) {
        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), t.search(new RegExp(n)) === -1;
      }, minLength: function minLength(e, t) {
        return void 0 !== e && e.length >= t;
      }, length: function length(e, t) {
        return void 0 !== e && e.length >= t;
      }, exactLength: function exactLength(e, t) {
        return void 0 !== e && e.length == t;
      }, maxLength: function maxLength(e, t) {
        return void 0 !== e && e.length <= t;
      }, match: function match(t, n) {
        var i;e(this);return e('[data-validate="' + n + '"]').length > 0 ? i = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? i = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? i = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (i = e('[name="' + n + '[]"]')), void 0 !== i && t.toString() == i.toString();
      }, different: function different(t, n) {
        var i;e(this);return e('[data-validate="' + n + '"]').length > 0 ? i = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? i = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? i = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (i = e('[name="' + n + '[]"]')), void 0 !== i && t.toString() !== i.toString();
      }, creditCard: function creditCard(t, n) {
        var i,
            o,
            a = { visa: { pattern: /^4/, length: [16] }, amex: { pattern: /^3[47]/, length: [15] }, mastercard: { pattern: /^5[1-5]/, length: [16] }, discover: { pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/, length: [16] }, unionPay: { pattern: /^(62|88)/, length: [16, 17, 18, 19] }, jcb: { pattern: /^35(2[89]|[3-8][0-9])/, length: [16] }, maestro: { pattern: /^(5018|5020|5038|6304|6759|676[1-3])/, length: [12, 13, 14, 15, 16, 17, 18, 19] }, dinersClub: { pattern: /^(30[0-5]|^36)/, length: [14] }, laser: { pattern: /^(6304|670[69]|6771)/, length: [16, 17, 18, 19] }, visaElectron: { pattern: /^(4026|417500|4508|4844|491(3|7))/, length: [16] } },
            r = {},
            s = !1,
            l = "string" == typeof n && n.split(",");if ("string" == typeof t && 0 !== t.length) {
          if (l && (e.each(l, function (n, i) {
            (o = a[i]) && (r = { length: e.inArray(t.length, o.length) !== -1, pattern: t.search(o.pattern) !== -1 }, r.length && r.pattern && (s = !0));
          }), !s)) return !1;if (i = { number: e.inArray(t.length, a.unionPay.length) !== -1, pattern: t.search(a.unionPay.pattern) !== -1 }, i.number && i.pattern) return !0;for (var c = t.length, u = 0, d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], f = 0; c--;) {
            f += d[u][parseInt(t.charAt(c), 10)], u ^= 1;
          }return f % 10 == 0 && f > 0;
        }
      }, minCount: function minCount(e, t) {
        return 0 == t || (1 == t ? "" !== e : e.split(",").length >= t);
      }, exactCount: function exactCount(e, t) {
        return 0 == t ? "" === e : 1 == t ? "" !== e && e.search(",") === -1 : e.split(",").length == t;
      }, maxCount: function maxCount(e, t) {
        return 0 != t && (1 == t ? e.search(",") === -1 : e.split(",").length <= t);
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.accordion = function (n) {
    var i,
        o = e(this),
        a = new Date().getTime(),
        r = [],
        s = arguments[0],
        l = "string" == typeof s,
        c = [].slice.call(arguments, 1);t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;return o.each(function () {
      var u,
          d,
          f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.accordion.settings, n) : e.extend({}, e.fn.accordion.settings),
          m = f.className,
          g = f.namespace,
          v = f.selector,
          p = f.error,
          h = "." + g,
          b = "module-" + g,
          y = o.selector || "",
          x = e(this),
          C = x.find(v.title),
          w = x.find(v.content),
          k = this,
          S = x.data(b);d = { initialize: function initialize() {
          d.debug("Initializing", x), d.bind.events(), f.observeChanges && d.observeChanges(), d.instantiate();
        }, instantiate: function instantiate() {
          S = d, x.data(b, d);
        }, destroy: function destroy() {
          d.debug("Destroying previous instance", x), x.off(h).removeData(b);
        }, refresh: function refresh() {
          C = x.find(v.title), w = x.find(v.content);
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && (u = new MutationObserver(function (e) {
            d.debug("DOM tree modified, updating selector cache"), d.refresh();
          }), u.observe(k, { childList: !0, subtree: !0 }), d.debug("Setting up mutation observer", u));
        }, bind: { events: function events() {
            d.debug("Binding delegated events"), x.on(f.on + h, v.trigger, d.event.click);
          } }, event: { click: function click() {
            d.toggle.call(this);
          } }, toggle: function toggle(t) {
          var n = void 0 !== t ? "number" == typeof t ? C.eq(t) : e(t).closest(v.title) : e(this).closest(v.title),
              i = n.next(w),
              o = i.hasClass(m.animating),
              a = i.hasClass(m.active),
              r = a && !o,
              s = !a && o;d.debug("Toggling visibility of content", n), r || s ? f.collapsible ? d.close.call(n) : d.debug("Cannot close accordion content collapsing is disabled") : d.open.call(n);
        }, open: function open(t) {
          var n = void 0 !== t ? "number" == typeof t ? C.eq(t) : e(t).closest(v.title) : e(this).closest(v.title),
              i = n.next(w),
              o = i.hasClass(m.animating);if (i.hasClass(m.active) || o) return void d.debug("Accordion already open, skipping", i);d.debug("Opening accordion content", n), f.onOpening.call(i), f.exclusive && d.closeOthers.call(n), n.addClass(m.active), i.stop(!0, !0).addClass(m.animating), f.animateChildren && (void 0 !== e.fn.transition && x.transition("is supported") ? i.children().transition({ animation: "fade in", queue: !1, useFailSafe: !0, debug: f.debug, verbose: f.verbose, duration: f.duration }) : i.children().stop(!0, !0).animate({ opacity: 1 }, f.duration, d.resetOpacity)), i.slideDown(f.duration, f.easing, function () {
            i.removeClass(m.animating).addClass(m.active), d.reset.display.call(this), f.onOpen.call(this), f.onChange.call(this);
          });
        }, close: function close(t) {
          var n = void 0 !== t ? "number" == typeof t ? C.eq(t) : e(t).closest(v.title) : e(this).closest(v.title),
              i = n.next(w),
              o = i.hasClass(m.animating),
              a = i.hasClass(m.active),
              r = !a && o,
              s = a && o;!a && !r || s || (d.debug("Closing accordion content", i), f.onClosing.call(i), n.removeClass(m.active), i.stop(!0, !0).addClass(m.animating), f.animateChildren && (void 0 !== e.fn.transition && x.transition("is supported") ? i.children().transition({ animation: "fade out", queue: !1, useFailSafe: !0, debug: f.debug, verbose: f.verbose, duration: f.duration }) : i.children().stop(!0, !0).animate({ opacity: 0 }, f.duration, d.resetOpacity)), i.slideUp(f.duration, f.easing, function () {
            i.removeClass(m.animating).removeClass(m.active), d.reset.display.call(this), f.onClose.call(this), f.onChange.call(this);
          }));
        }, closeOthers: function closeOthers(t) {
          var n,
              i,
              o,
              a = void 0 !== t ? C.eq(t) : e(this).closest(v.title),
              r = a.parents(v.content).prev(v.title),
              s = a.closest(v.accordion),
              l = v.title + "." + m.active + ":visible",
              c = v.content + "." + m.active + ":visible";f.closeNested ? (n = s.find(l).not(r), o = n.next(w)) : (n = s.find(l).not(r), i = s.find(c).find(l).not(r), n = n.not(i), o = n.next(w)), n.length > 0 && (d.debug("Exclusive enabled, closing other content", n), n.removeClass(m.active), o.removeClass(m.animating).stop(!0, !0), f.animateChildren && (void 0 !== e.fn.transition && x.transition("is supported") ? o.children().transition({ animation: "fade out", useFailSafe: !0, debug: f.debug, verbose: f.verbose, duration: f.duration }) : o.children().stop(!0, !0).animate({ opacity: 0 }, f.duration, d.resetOpacity)), o.slideUp(f.duration, f.easing, function () {
            e(this).removeClass(m.active), d.reset.display.call(this);
          }));
        }, reset: { display: function display() {
            d.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style");
          }, opacity: function opacity() {
            d.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style");
          } }, setting: function setting(t, n) {
          if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (void 0 === n) return f[t];e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n;
          }
        }, internal: function internal(t, n) {
          if (d.debug("Changing internal", t, n), void 0 === n) return d[t];e.isPlainObject(t) ? e.extend(!0, d, t) : d[t] = n;
        }, debug: function debug() {
          !f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)));
        }, error: function error() {
          f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;f.performance && (t = new Date().getTime(), i = a || t, n = t - i, a = t, r.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: k, "Execution Time": n })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500);
          }, display: function display() {
            var t = f.name + ":",
                n = 0;a = !1, clearTimeout(d.performance.timer), e.each(r, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", y && (t += " '" + y + "'"), (void 0 !== console.group || void 0 !== console.table) && r.length > 0 && (console.groupCollapsed(t), console.table ? console.table(r) : e.each(r, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), r = [];
          } }, invoke: function invoke(t, n, o) {
          var a,
              r,
              s,
              l = S;return n = n || c, o = k || o, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] ? (r = l[i], !1) : (d.error(p.method, t), !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(o, n) : void 0 !== r && (s = r), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), r;
        } }, l ? (void 0 === S && d.initialize(), d.invoke(s)) : (void 0 !== S && S.invoke("destroy"), d.initialize());
    }), void 0 !== i ? i : this;
  }, e.fn.accordion.settings = { name: "Accordion", namespace: "accordion", silent: !1, debug: !1, verbose: !1, performance: !0, on: "click", observeChanges: !0, exclusive: !0, collapsible: !0, closeNested: !1, animateChildren: !0, duration: 350, easing: "easeOutQuad", onOpening: function onOpening() {}, onOpen: function onOpen() {}, onClosing: function onClosing() {}, onClose: function onClose() {}, onChange: function onChange() {}, error: { method: "The method you called is not defined" }, className: { active: "active", animating: "animating" }, selector: { accordion: ".accordion", title: ".title", trigger: ".title", content: ".content" } }, e.extend(e.easing, { easeOutQuad: function easeOutQuad(e, t, n, i, o) {
      return -i * (t /= o) * (t - 2) + n;
    } });
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.checkbox = function (i) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var a,
          f,
          m = e.extend(!0, {}, e.fn.checkbox.settings, i),
          g = m.className,
          v = m.namespace,
          p = m.selector,
          h = m.error,
          b = "." + v,
          y = "module-" + v,
          x = e(this),
          C = e(this).children(p.label),
          w = e(this).children(p.input),
          k = w[0],
          S = !1,
          T = !1,
          A = x.data(y),
          R = this;f = { initialize: function initialize() {
          f.verbose("Initializing checkbox", m), f.create.label(), f.bind.events(), f.set.tabbable(), f.hide.input(), f.observeChanges(), f.instantiate(), f.setup();
        }, instantiate: function instantiate() {
          f.verbose("Storing instance of module", f), A = f, x.data(y, f);
        }, destroy: function destroy() {
          f.verbose("Destroying module"), f.unbind.events(), f.show.input(), x.removeData(y);
        }, fix: { reference: function reference() {
            x.is(p.input) && (f.debug("Behavior called on <input> adjusting invoked element"), x = x.closest(p.checkbox), f.refresh());
          } }, setup: function setup() {
          f.set.initialLoad(), f.is.indeterminate() ? (f.debug("Initial value is indeterminate"), f.indeterminate()) : f.is.checked() ? (f.debug("Initial value is checked"), f.check()) : (f.debug("Initial value is unchecked"), f.uncheck()), f.remove.initialLoad();
        }, refresh: function refresh() {
          C = x.children(p.label), w = x.children(p.input), k = w[0];
        }, hide: { input: function input() {
            f.verbose("Modifying <input> z-index to be unselectable"), w.addClass(g.hidden);
          } }, show: { input: function input() {
            f.verbose("Modifying <input> z-index to be selectable"), w.removeClass(g.hidden);
          } }, observeChanges: function observeChanges() {
          "MutationObserver" in t && (a = new MutationObserver(function (e) {
            f.debug("DOM tree modified, updating selector cache"), f.refresh();
          }), a.observe(R, { childList: !0, subtree: !0 }), f.debug("Setting up mutation observer", a));
        }, attachEvents: function attachEvents(t, n) {
          var i = e(t);n = e.isFunction(f[n]) ? f[n] : f.toggle, i.length > 0 ? (f.debug("Attaching checkbox events to element", t, n), i.on("click" + b, n)) : f.error(h.notFound);
        }, event: { click: function click(t) {
            var n = e(t.target);return n.is(p.input) ? void f.verbose("Using default check action on initialized checkbox") : n.is(p.link) ? void f.debug("Clicking link inside checkbox, skipping toggle") : (f.toggle(), w.focus(), void t.preventDefault());
          }, keydown: function keydown(e) {
            var t = e.which,
                n = { enter: 13, space: 32, escape: 27 };t == n.escape ? (f.verbose("Escape key pressed blurring field"), w.blur(), T = !0) : e.ctrlKey || t != n.space && t != n.enter ? T = !1 : (f.verbose("Enter/space key pressed, toggling checkbox"), f.toggle(), T = !0);
          }, keyup: function keyup(e) {
            T && e.preventDefault();
          } }, check: function check() {
          f.should.allowCheck() && (f.debug("Checking checkbox", w), f.set.checked(), f.should.ignoreCallbacks() || (m.onChecked.call(k), m.onChange.call(k)));
        }, uncheck: function uncheck() {
          f.should.allowUncheck() && (f.debug("Unchecking checkbox"), f.set.unchecked(), f.should.ignoreCallbacks() || (m.onUnchecked.call(k), m.onChange.call(k)));
        }, indeterminate: function indeterminate() {
          if (f.should.allowIndeterminate()) return void f.debug("Checkbox is already indeterminate");f.debug("Making checkbox indeterminate"), f.set.indeterminate(), f.should.ignoreCallbacks() || (m.onIndeterminate.call(k), m.onChange.call(k));
        }, determinate: function determinate() {
          if (f.should.allowDeterminate()) return void f.debug("Checkbox is already determinate");f.debug("Making checkbox determinate"), f.set.determinate(), f.should.ignoreCallbacks() || (m.onDeterminate.call(k), m.onChange.call(k));
        }, enable: function enable() {
          if (f.is.enabled()) return void f.debug("Checkbox is already enabled");f.debug("Enabling checkbox"), f.set.enabled(), m.onEnable.call(k), m.onEnabled.call(k);
        }, disable: function disable() {
          if (f.is.disabled()) return void f.debug("Checkbox is already disabled");f.debug("Disabling checkbox"), f.set.disabled(), m.onDisable.call(k), m.onDisabled.call(k);
        }, get: { radios: function radios() {
            return e('input[name="' + f.get.name() + '"]').closest(p.checkbox);
          }, otherRadios: function otherRadios() {
            return f.get.radios().not(x);
          }, name: function name() {
            return w.attr("name");
          } }, is: { initialLoad: function initialLoad() {
            return S;
          }, radio: function radio() {
            return w.hasClass(g.radio) || "radio" == w.attr("type");
          }, indeterminate: function indeterminate() {
            return void 0 !== w.prop("indeterminate") && w.prop("indeterminate");
          }, checked: function checked() {
            return void 0 !== w.prop("checked") && w.prop("checked");
          }, disabled: function disabled() {
            return void 0 !== w.prop("disabled") && w.prop("disabled");
          }, enabled: function enabled() {
            return !f.is.disabled();
          }, determinate: function determinate() {
            return !f.is.indeterminate();
          }, unchecked: function unchecked() {
            return !f.is.checked();
          } }, should: { allowCheck: function allowCheck() {
            return f.is.determinate() && f.is.checked() && !f.should.forceCallbacks() ? (f.debug("Should not allow check, checkbox is already checked"), !1) : m.beforeChecked.apply(k) !== !1 || (f.debug("Should not allow check, beforeChecked cancelled"), !1);
          }, allowUncheck: function allowUncheck() {
            return f.is.determinate() && f.is.unchecked() && !f.should.forceCallbacks() ? (f.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : m.beforeUnchecked.apply(k) !== !1 || (f.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1);
          }, allowIndeterminate: function allowIndeterminate() {
            return f.is.indeterminate() && !f.should.forceCallbacks() ? (f.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : m.beforeIndeterminate.apply(k) !== !1 || (f.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1);
          }, allowDeterminate: function allowDeterminate() {
            return f.is.determinate() && !f.should.forceCallbacks() ? (f.debug("Should not allow determinate, checkbox is already determinate"), !1) : m.beforeDeterminate.apply(k) !== !1 || (f.debug("Should not allow determinate, beforeDeterminate cancelled"), !1);
          }, forceCallbacks: function forceCallbacks() {
            return f.is.initialLoad() && m.fireOnInit;
          }, ignoreCallbacks: function ignoreCallbacks() {
            return S && !m.fireOnInit;
          } }, can: { change: function change() {
            return !(x.hasClass(g.disabled) || x.hasClass(g.readOnly) || w.prop("disabled") || w.prop("readonly"));
          }, uncheck: function uncheck() {
            return "boolean" == typeof m.uncheckable ? m.uncheckable : !f.is.radio();
          } }, set: { initialLoad: function initialLoad() {
            S = !0;
          }, checked: function checked() {
            if (f.verbose("Setting class to checked"), x.removeClass(g.indeterminate).addClass(g.checked), f.is.radio() && f.uncheckOthers(), !f.is.indeterminate() && f.is.checked()) return void f.debug("Input is already checked, skipping input property change");f.verbose("Setting state to checked", k), w.prop("indeterminate", !1).prop("checked", !0), f.trigger.change();
          }, unchecked: function unchecked() {
            if (f.verbose("Removing checked class"), x.removeClass(g.indeterminate).removeClass(g.checked), !f.is.indeterminate() && f.is.unchecked()) return void f.debug("Input is already unchecked");f.debug("Setting state to unchecked"), w.prop("indeterminate", !1).prop("checked", !1), f.trigger.change();
          }, indeterminate: function indeterminate() {
            if (f.verbose("Setting class to indeterminate"), x.addClass(g.indeterminate), f.is.indeterminate()) return void f.debug("Input is already indeterminate, skipping input property change");f.debug("Setting state to indeterminate"), w.prop("indeterminate", !0), f.trigger.change();
          }, determinate: function determinate() {
            if (f.verbose("Removing indeterminate class"), x.removeClass(g.indeterminate), f.is.determinate()) return void f.debug("Input is already determinate, skipping input property change");f.debug("Setting state to determinate"), w.prop("indeterminate", !1);
          }, disabled: function disabled() {
            if (f.verbose("Setting class to disabled"), x.addClass(g.disabled), f.is.disabled()) return void f.debug("Input is already disabled, skipping input property change");f.debug("Setting state to disabled"), w.prop("disabled", "disabled"), f.trigger.change();
          }, enabled: function enabled() {
            if (f.verbose("Removing disabled class"), x.removeClass(g.disabled), f.is.enabled()) return void f.debug("Input is already enabled, skipping input property change");f.debug("Setting state to enabled"), w.prop("disabled", !1), f.trigger.change();
          }, tabbable: function tabbable() {
            f.verbose("Adding tabindex to checkbox"), void 0 === w.attr("tabindex") && w.attr("tabindex", 0);
          } }, remove: { initialLoad: function initialLoad() {
            S = !1;
          } }, trigger: { change: function change() {
            var e = n.createEvent("HTMLEvents"),
                t = w[0];t && (f.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e));
          } }, create: { label: function label() {
            w.prevAll(p.label).length > 0 ? (w.prev(p.label).detach().insertAfter(w), f.debug("Moving existing label", C)) : f.has.label() || (C = e("<label>").insertAfter(w), f.debug("Creating label", C));
          } }, has: { label: function label() {
            return C.length > 0;
          } }, bind: { events: function events() {
            f.verbose("Attaching checkbox events"), x.on("click" + b, f.event.click).on("keydown" + b, p.input, f.event.keydown).on("keyup" + b, p.input, f.event.keyup);
          } }, unbind: { events: function events() {
            f.debug("Removing events"), x.off(b);
          } }, uncheckOthers: function uncheckOthers() {
          var e = f.get.otherRadios();f.debug("Unchecking other radios", e), e.removeClass(g.checked);
        }, toggle: function toggle() {
          if (!f.can.change()) return void (f.is.radio() || f.debug("Checkbox is read-only or disabled, ignoring toggle"));f.is.indeterminate() || f.is.unchecked() ? (f.debug("Currently unchecked"), f.check()) : f.is.checked() && f.can.uncheck() && (f.debug("Currently checked"), f.uncheck());
        }, setting: function setting(t, n) {
          if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (void 0 === n) return m[t];e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (void 0 === n) return f[t];f[t] = n;
          }
        }, debug: function debug() {
          !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)));
        }, error: function error() {
          m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;m.performance && (t = new Date().getTime(), i = s || t, n = t - i, s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: R, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
          }, display: function display() {
            var t = m.name + ":",
                n = 0;s = !1, clearTimeout(f.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), (void 0 !== console.group || void 0 !== console.table) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, i) {
          var a,
              r,
              s,
              l = A;return n = n || d, i = R || i, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] ? (r = l[i], !1) : (f.error(h.method, t), !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(i, n) : void 0 !== r && (s = r), e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s), r;
        } }, u ? (void 0 === A && f.initialize(), f.invoke(c)) : (void 0 !== A && A.invoke("destroy"), f.initialize());
    }), void 0 !== o ? o : this;
  }, e.fn.checkbox.settings = { name: "Checkbox", namespace: "checkbox", silent: !1, debug: !1, verbose: !0, performance: !0, uncheckable: "auto", fireOnInit: !1, onChange: function onChange() {}, beforeChecked: function beforeChecked() {}, beforeUnchecked: function beforeUnchecked() {}, beforeDeterminate: function beforeDeterminate() {}, beforeIndeterminate: function beforeIndeterminate() {}, onChecked: function onChecked() {}, onUnchecked: function onUnchecked() {}, onDeterminate: function onDeterminate() {}, onIndeterminate: function onIndeterminate() {}, onEnable: function onEnable() {}, onDisable: function onDisable() {}, onEnabled: function onEnabled() {}, onDisabled: function onDisabled() {}, className: { checked: "checked", indeterminate: "indeterminate", disabled: "disabled", hidden: "hidden", radio: "radio", readOnly: "read-only" }, error: { method: "The method you called is not defined" }, selector: { checkbox: ".ui.checkbox", label: "label, .box", input: 'input[type="checkbox"], input[type="radio"]', link: "a[href]" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.dimmer = function (t) {
    var i,
        o = e(this),
        a = new Date().getTime(),
        r = [],
        s = arguments[0],
        l = "string" == typeof s,
        c = [].slice.call(arguments, 1);return o.each(function () {
      var u,
          d,
          f,
          m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings),
          g = m.selector,
          v = m.namespace,
          p = m.className,
          h = m.error,
          b = "." + v,
          y = "module-" + v,
          x = o.selector || "",
          C = "ontouchstart" in n.documentElement ? "touchstart" : "click",
          w = e(this),
          k = this,
          S = w.data(y);f = { preinitialize: function preinitialize() {
          f.is.dimmer() ? (d = w.parent(), u = w) : (d = w, u = f.has.dimmer() ? m.dimmerName ? d.find(g.dimmer).filter("." + m.dimmerName) : d.find(g.dimmer) : f.create(), f.set.variation());
        }, initialize: function initialize() {
          f.debug("Initializing dimmer", m), f.bind.events(), f.set.dimmable(), f.instantiate();
        }, instantiate: function instantiate() {
          f.verbose("Storing instance of module", f), S = f, w.data(y, S);
        }, destroy: function destroy() {
          f.verbose("Destroying previous module", u), f.unbind.events(), f.remove.variation(), d.off(b);
        }, bind: { events: function events() {
            "hover" == m.on ? d.on("mouseenter" + b, f.show).on("mouseleave" + b, f.hide) : "click" == m.on && d.on(C + b, f.toggle), f.is.page() && (f.debug("Setting as a page dimmer", d), f.set.pageDimmer()), f.is.closable() && (f.verbose("Adding dimmer close event", u), d.on(C + b, g.dimmer, f.event.click));
          } }, unbind: { events: function events() {
            w.removeData(y), d.off(b);
          } }, event: { click: function click(t) {
            f.verbose("Determining if event occured on dimmer", t), (0 === u.find(t.target).length || e(t.target).is(g.content)) && (f.hide(), t.stopImmediatePropagation());
          } }, addContent: function addContent(t) {
          var n = e(t);f.debug("Add content to dimmer", n), n.parent()[0] !== u[0] && n.detach().appendTo(u);
        }, create: function create() {
          var t = e(m.template.dimmer());return m.dimmerName && (f.debug("Creating named dimmer", m.dimmerName), t.addClass(m.dimmerName)), t.appendTo(d), t;
        }, show: function show(t) {
          t = e.isFunction(t) ? t : function () {}, f.debug("Showing dimmer", u, m), f.is.dimmed() && !f.is.animating() || !f.is.enabled() ? f.debug("Dimmer is already shown or disabled") : (f.animate.show(t), m.onShow.call(k), m.onChange.call(k));
        }, hide: function hide(t) {
          t = e.isFunction(t) ? t : function () {}, f.is.dimmed() || f.is.animating() ? (f.debug("Hiding dimmer", u), f.animate.hide(t), m.onHide.call(k), m.onChange.call(k)) : f.debug("Dimmer is not visible");
        }, toggle: function toggle() {
          f.verbose("Toggling dimmer visibility", u), f.is.dimmed() ? f.hide() : f.show();
        }, animate: { show: function show(t) {
            t = e.isFunction(t) ? t : function () {}, m.useCSS && void 0 !== e.fn.transition && u.transition("is supported") ? ("auto" !== m.opacity && f.set.opacity(), u.transition({ animation: m.transition + " in", queue: !1, duration: f.get.duration(), useFailSafe: !0, onStart: function onStart() {
                f.set.dimmed();
              }, onComplete: function onComplete() {
                f.set.active(), t();
              } })) : (f.verbose("Showing dimmer animation with javascript"), f.set.dimmed(), "auto" == m.opacity && (m.opacity = .8), u.stop().css({ opacity: 0, width: "100%", height: "100%" }).fadeTo(f.get.duration(), m.opacity, function () {
              u.removeAttr("style"), f.set.active(), t();
            }));
          }, hide: function hide(t) {
            t = e.isFunction(t) ? t : function () {}, m.useCSS && void 0 !== e.fn.transition && u.transition("is supported") ? (f.verbose("Hiding dimmer with css"), u.transition({ animation: m.transition + " out", queue: !1, duration: f.get.duration(), useFailSafe: !0, onStart: function onStart() {
                f.remove.dimmed();
              }, onComplete: function onComplete() {
                f.remove.active(), t();
              } })) : (f.verbose("Hiding dimmer with javascript"), f.remove.dimmed(), u.stop().fadeOut(f.get.duration(), function () {
              f.remove.active(), u.removeAttr("style"), t();
            }));
          } }, get: { dimmer: function dimmer() {
            return u;
          }, duration: function duration() {
            return "object" == _typeof(m.duration) ? f.is.active() ? m.duration.hide : m.duration.show : m.duration;
          } }, has: { dimmer: function dimmer() {
            return m.dimmerName ? w.find(g.dimmer).filter("." + m.dimmerName).length > 0 : w.find(g.dimmer).length > 0;
          } }, is: { active: function active() {
            return u.hasClass(p.active);
          }, animating: function animating() {
            return u.is(":animated") || u.hasClass(p.animating);
          }, closable: function closable() {
            return "auto" == m.closable ? "hover" != m.on : m.closable;
          }, dimmer: function dimmer() {
            return w.hasClass(p.dimmer);
          }, dimmable: function dimmable() {
            return w.hasClass(p.dimmable);
          }, dimmed: function dimmed() {
            return d.hasClass(p.dimmed);
          }, disabled: function disabled() {
            return d.hasClass(p.disabled);
          }, enabled: function enabled() {
            return !f.is.disabled();
          }, page: function page() {
            return d.is("body");
          }, pageDimmer: function pageDimmer() {
            return u.hasClass(p.pageDimmer);
          } }, can: { show: function show() {
            return !u.hasClass(p.disabled);
          } }, set: { opacity: function opacity(e) {
            var t = u.css("background-color"),
                n = t.split(","),
                i = n && 3 == n.length,
                o = n && 4 == n.length;e = 0 === m.opacity ? 0 : m.opacity || e, i || o ? (n[3] = e + ")", t = n.join(",")) : t = "rgba(0, 0, 0, " + e + ")", f.debug("Setting opacity to", e), u.css("background-color", t);
          }, active: function active() {
            u.addClass(p.active);
          }, dimmable: function dimmable() {
            d.addClass(p.dimmable);
          }, dimmed: function dimmed() {
            d.addClass(p.dimmed);
          }, pageDimmer: function pageDimmer() {
            u.addClass(p.pageDimmer);
          }, disabled: function disabled() {
            u.addClass(p.disabled);
          }, variation: function variation(e) {
            (e = e || m.variation) && u.addClass(e);
          } }, remove: { active: function active() {
            u.removeClass(p.active);
          }, dimmed: function dimmed() {
            d.removeClass(p.dimmed);
          }, disabled: function disabled() {
            u.removeClass(p.disabled);
          }, variation: function variation(e) {
            (e = e || m.variation) && u.removeClass(e);
          } }, setting: function setting(t, n) {
          if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (void 0 === n) return m[t];e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (void 0 === n) return f[t];f[t] = n;
          }
        }, debug: function debug() {
          !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)));
        }, error: function error() {
          m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;m.performance && (t = new Date().getTime(), i = a || t, n = t - i, a = t, r.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: k, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
          }, display: function display() {
            var t = m.name + ":",
                n = 0;a = !1, clearTimeout(f.performance.timer), e.each(r, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", x && (t += " '" + x + "'"), o.length > 1 && (t += " (" + o.length + ")"), (void 0 !== console.group || void 0 !== console.table) && r.length > 0 && (console.groupCollapsed(t), console.table ? console.table(r) : e.each(r, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), r = [];
          } }, invoke: function invoke(t, n, o) {
          var a,
              r,
              s,
              l = S;return n = n || c, o = k || o, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] ? (r = l[i], !1) : (f.error(h.method, t), !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(o, n) : void 0 !== r && (s = r), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), r;
        } }, f.preinitialize(), l ? (void 0 === S && f.initialize(), f.invoke(s)) : (void 0 !== S && S.invoke("destroy"), f.initialize());
    }), void 0 !== i ? i : this;
  }, e.fn.dimmer.settings = { name: "Dimmer", namespace: "dimmer", silent: !1, debug: !1, verbose: !1, performance: !0, dimmerName: !1, variation: !1, closable: "auto", useCSS: !0, transition: "fade", on: !1, opacity: "auto", duration: { show: 500, hide: 500 }, onChange: function onChange() {}, onShow: function onShow() {}, onHide: function onHide() {}, error: { method: "The method you called is not defined." }, className: { active: "active", animating: "animating", dimmable: "dimmable", dimmed: "dimmed", dimmer: "dimmer", disabled: "disabled", hide: "hide", pageDimmer: "page", show: "show" }, selector: { dimmer: "> .ui.dimmer", content: ".ui.dimmer > .content, .ui.dimmer > .content > .center" }, template: { dimmer: function dimmer() {
        return e("<div />").attr("class", "ui dimmer");
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.dropdown = function (i) {
    var o,
        a = e(this),
        r = e(n),
        s = a.selector || "",
        l = "ontouchstart" in n.documentElement,
        c = new Date().getTime(),
        u = [],
        d = arguments[0],
        f = "string" == typeof d,
        m = [].slice.call(arguments, 1);return a.each(function (g) {
      var v,
          p,
          h,
          b,
          y,
          x,
          C,
          w,
          k = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.dropdown.settings, i) : e.extend({}, e.fn.dropdown.settings),
          S = k.className,
          T = k.message,
          A = k.fields,
          R = k.keys,
          P = k.metadata,
          E = k.namespace,
          F = k.regExp,
          O = k.selector,
          D = k.error,
          q = k.templates,
          j = "." + E,
          z = "module-" + E,
          I = e(this),
          M = e(k.context),
          L = I.find(O.text),
          V = I.find(O.search),
          N = I.find(O.sizer),
          H = I.find(O.input),
          U = I.find(O.icon),
          W = I.prev().find(O.text).length > 0 ? I.prev().find(O.text) : I.prev(),
          B = I.children(O.menu),
          Q = B.find(O.item),
          X = !1,
          $ = !1,
          Y = !1,
          Z = this,
          K = I.data(z);w = { initialize: function initialize() {
          w.debug("Initializing dropdown", k), w.is.alreadySetup() ? w.setup.reference() : (w.setup.layout(), w.refreshData(), w.save.defaults(), w.restore.selected(), w.create.id(), w.bind.events(), w.observeChanges(), w.instantiate());
        }, instantiate: function instantiate() {
          w.verbose("Storing instance of dropdown", w), K = w, I.data(z, w);
        }, destroy: function destroy() {
          w.verbose("Destroying previous dropdown", I), w.remove.tabbable(), I.off(j).removeData(z), B.off(j), r.off(b), w.disconnect.menuObserver(), w.disconnect.selectObserver();
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && (x = new MutationObserver(w.event.select.mutation), C = new MutationObserver(w.event.menu.mutation), w.debug("Setting up mutation observer", x, C), w.observe.select(), w.observe.menu());
        }, disconnect: { menuObserver: function menuObserver() {
            C && C.disconnect();
          }, selectObserver: function selectObserver() {
            x && x.disconnect();
          } }, observe: { select: function select() {
            w.has.input() && x.observe(H[0], { childList: !0, subtree: !0 });
          }, menu: function menu() {
            w.has.menu() && C.observe(B[0], { childList: !0, subtree: !0 });
          } }, create: { id: function id() {
            y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, w.verbose("Creating unique id for element", y);
          }, userChoice: function userChoice(t) {
            var n, i, o;return !!(t = t || w.get.userValues()) && (t = e.isArray(t) ? t : [t], e.each(t, function (t, a) {
              w.get.item(a) === !1 && (o = k.templates.addition(w.add.variables(T.addResult, a)), i = e("<div />").html(o).attr("data-" + P.value, a).attr("data-" + P.text, a).addClass(S.addition).addClass(S.item), k.hideAdditions && i.addClass(S.hidden), n = void 0 === n ? i : n.add(i), w.verbose("Creating user choices for value", a, i));
            }), n);
          }, userLabels: function userLabels(t) {
            var n = w.get.userValues();n && (w.debug("Adding user labels", n), e.each(n, function (e, t) {
              w.verbose("Adding custom user value"), w.add.label(t, t);
            }));
          }, menu: function menu() {
            B = e("<div />").addClass(S.menu).appendTo(I);
          }, sizer: function sizer() {
            N = e("<span />").addClass(S.sizer).insertAfter(V);
          } }, search: function search(e) {
          e = void 0 !== e ? e : w.get.query(), w.verbose("Searching for query", e), w.has.minCharacters(e) ? w.filter(e) : w.hide();
        }, select: { firstUnfiltered: function firstUnfiltered() {
            w.verbose("Selecting first non-filtered element"), w.remove.selectedItem(), Q.not(O.unselectable).not(O.addition + O.hidden).eq(0).addClass(S.selected);
          }, nextAvailable: function nextAvailable(e) {
            e = e.eq(0);var t = e.nextAll(O.item).not(O.unselectable).eq(0),
                n = e.prevAll(O.item).not(O.unselectable).eq(0);t.length > 0 ? (w.verbose("Moving selection to", t), t.addClass(S.selected)) : (w.verbose("Moving selection to", n), n.addClass(S.selected));
          } }, setup: { api: function api() {
            var e = { debug: k.debug, urlData: { value: w.get.value(), query: w.get.query() }, on: !1 };w.verbose("First request, initializing API"), I.api(e);
          }, layout: function layout() {
            I.is("select") && (w.setup.select(), w.setup.returnedObject()), w.has.menu() || w.create.menu(), w.is.search() && !w.has.search() && (w.verbose("Adding search input"), V = e("<input />").addClass(S.search).prop("autocomplete", "off").insertBefore(L)), w.is.multiple() && w.is.searchSelection() && !w.has.sizer() && w.create.sizer(), k.allowTab && w.set.tabbable();
          }, select: function select() {
            var t = w.get.selectValues();w.debug("Dropdown initialized on a select", t), I.is("select") && (H = I), H.parent(O.dropdown).length > 0 ? (w.debug("UI dropdown already exists. Creating dropdown menu only"), I = H.closest(O.dropdown), w.has.menu() || w.create.menu(), B = I.children(O.menu), w.setup.menu(t)) : (w.debug("Creating entire dropdown from select"), I = e("<div />").attr("class", H.attr("class")).addClass(S.selection).addClass(S.dropdown).html(q.dropdown(t)).insertBefore(H), H.hasClass(S.multiple) && H.prop("multiple") === !1 && (w.error(D.missingMultiple), H.prop("multiple", !0)), H.is("[multiple]") && w.set.multiple(), H.prop("disabled") && (w.debug("Disabling dropdown"), I.addClass(S.disabled)), H.removeAttr("class").detach().prependTo(I)), w.refresh();
          }, menu: function menu(e) {
            B.html(q.menu(e, A)), Q = B.find(O.item);
          }, reference: function reference() {
            w.debug("Dropdown behavior was called on select, replacing with closest dropdown"), I = I.parent(O.dropdown), w.refresh(), w.setup.returnedObject(), f && (K = w, w.invoke(d));
          }, returnedObject: function returnedObject() {
            var e = a.slice(0, g),
                t = a.slice(g + 1);a = e.add(I).add(t);
          } }, refresh: function refresh() {
          w.refreshSelectors(), w.refreshData();
        }, refreshItems: function refreshItems() {
          Q = B.find(O.item);
        }, refreshSelectors: function refreshSelectors() {
          w.verbose("Refreshing selector cache"), L = I.find(O.text), V = I.find(O.search), H = I.find(O.input), U = I.find(O.icon), W = I.prev().find(O.text).length > 0 ? I.prev().find(O.text) : I.prev(), B = I.children(O.menu), Q = B.find(O.item);
        }, refreshData: function refreshData() {
          w.verbose("Refreshing cached metadata"), Q.removeData(P.text).removeData(P.value);
        }, clearData: function clearData() {
          w.verbose("Clearing metadata"), Q.removeData(P.text).removeData(P.value), I.removeData(P.defaultText).removeData(P.defaultValue).removeData(P.placeholderText);
        }, toggle: function toggle() {
          w.verbose("Toggling menu visibility"), w.is.active() ? w.hide() : w.show();
        }, show: function show(t) {
          if (t = e.isFunction(t) ? t : function () {}, !w.can.show() && w.is.remote() && (w.debug("No API results retrieved, searching before show"), w.queryRemote(w.get.query(), w.show)), w.can.show() && !w.is.active()) {
            if (w.debug("Showing dropdown"), !w.has.message() || w.has.maxSelections() || w.has.allResultsFiltered() || w.remove.message(), w.is.allFiltered()) return !0;k.onShow.call(Z) !== !1 && w.animate.show(function () {
              w.can.click() && w.bind.intent(), w.has.menuSearch() && w.focusSearch(), w.set.visible(), t.call(Z);
            });
          }
        }, hide: function hide(t) {
          t = e.isFunction(t) ? t : function () {}, w.is.active() && (w.debug("Hiding dropdown"), k.onHide.call(Z) !== !1 && w.animate.hide(function () {
            w.remove.visible(), t.call(Z);
          }));
        }, hideOthers: function hideOthers() {
          w.verbose("Finding other dropdowns to hide"), a.not(I).has(O.menu + "." + S.visible).dropdown("hide");
        }, hideMenu: function hideMenu() {
          w.verbose("Hiding menu  instantaneously"), w.remove.active(), w.remove.visible(), B.transition("hide");
        }, hideSubMenus: function hideSubMenus() {
          var e = B.children(O.item).find(O.menu);w.verbose("Hiding sub menus", e), e.transition("hide");
        }, bind: { events: function events() {
            l && w.bind.touchEvents(), w.bind.keyboardEvents(), w.bind.inputEvents(), w.bind.mouseEvents();
          }, touchEvents: function touchEvents() {
            w.debug("Touch device detected binding additional touch events"), w.is.searchSelection() || w.is.single() && I.on("touchstart" + j, w.event.test.toggle), B.on("touchstart" + j, O.item, w.event.item.mouseenter);
          }, keyboardEvents: function keyboardEvents() {
            w.verbose("Binding keyboard events"), I.on("keydown" + j, w.event.keydown), w.has.search() && I.on(w.get.inputEvent() + j, O.search, w.event.input), w.is.multiple() && r.on("keydown" + b, w.event.document.keydown);
          }, inputEvents: function inputEvents() {
            w.verbose("Binding input change events"), I.on("change" + j, O.input, w.event.change);
          }, mouseEvents: function mouseEvents() {
            w.verbose("Binding mouse events"), w.is.multiple() && I.on("click" + j, O.label, w.event.label.click).on("click" + j, O.remove, w.event.remove.click), w.is.searchSelection() ? (I.on("mousedown" + j, w.event.mousedown).on("mouseup" + j, w.event.mouseup).on("mousedown" + j, O.menu, w.event.menu.mousedown).on("mouseup" + j, O.menu, w.event.menu.mouseup).on("click" + j, O.icon, w.event.icon.click).on("focus" + j, O.search, w.event.search.focus).on("click" + j, O.search, w.event.search.focus).on("blur" + j, O.search, w.event.search.blur).on("click" + j, O.text, w.event.text.focus), w.is.multiple() && I.on("click" + j, w.event.click)) : ("click" == k.on ? I.on("click" + j, O.icon, w.event.icon.click).on("click" + j, w.event.test.toggle) : "hover" == k.on ? I.on("mouseenter" + j, w.delay.show).on("mouseleave" + j, w.delay.hide) : I.on(k.on + j, w.toggle), I.on("mousedown" + j, w.event.mousedown).on("mouseup" + j, w.event.mouseup).on("focus" + j, w.event.focus), w.has.menuSearch() ? I.on("blur" + j, O.search, w.event.search.blur) : I.on("blur" + j, w.event.blur)), B.on("mouseenter" + j, O.item, w.event.item.mouseenter).on("mouseleave" + j, O.item, w.event.item.mouseleave).on("click" + j, O.item, w.event.item.click);
          }, intent: function intent() {
            w.verbose("Binding hide intent event to document"), l && r.on("touchstart" + b, w.event.test.touch).on("touchmove" + b, w.event.test.touch), r.on("click" + b, w.event.test.hide);
          } }, unbind: { intent: function intent() {
            w.verbose("Removing hide intent event from document"), l && r.off("touchstart" + b).off("touchmove" + b), r.off("click" + b);
          } }, filter: function filter(e) {
          var t = void 0 !== e ? e : w.get.query(),
              n = function n() {
            w.is.multiple() && w.filterActive(), w.select.firstUnfiltered(), w.has.allResultsFiltered() ? k.onNoResults.call(Z, t) ? k.allowAdditions ? k.hideAdditions && (w.verbose("User addition with no menu, setting empty style"), w.set.empty(), w.hideMenu()) : (w.verbose("All items filtered, showing message", t), w.add.message(T.noResults)) : (w.verbose("All items filtered, hiding dropdown", t), w.hideMenu()) : (w.remove.empty(), w.remove.message()), k.allowAdditions && w.add.userSuggestion(e), w.is.searchSelection() && w.can.show() && w.is.focusedOnSearch() && w.show();
          };k.useLabels && w.has.maxSelections() || (k.apiSettings ? w.can.useAPI() ? w.queryRemote(t, function () {
            k.filterRemoteData && w.filterItems(t), n();
          }) : w.error(D.noAPI) : (w.filterItems(t), n()));
        }, queryRemote: function queryRemote(t, n) {
          var i = { errorDuration: !1, cache: "local", throttle: k.throttle, urlData: { query: t }, onError: function onError() {
              w.add.message(T.serverError), n();
            }, onFailure: function onFailure() {
              w.add.message(T.serverError), n();
            }, onSuccess: function onSuccess(e) {
              w.remove.message(), w.setup.menu({ values: e[A.remoteValues] }), n();
            } };I.api("get request") || w.setup.api(), i = e.extend(!0, {}, i, k.apiSettings), I.api("setting", i).api("query");
        }, filterItems: function filterItems(t) {
          var n = void 0 !== t ? t : w.get.query(),
              i = null,
              o = w.escape.string(n),
              a = new RegExp("^" + o, "igm");w.has.query() && (i = [], w.verbose("Searching for matching values", n), Q.each(function () {
            var t,
                o,
                r = e(this);if ("both" == k.match || "text" == k.match) {
              if (t = String(w.get.choiceText(r, !1)), t.search(a) !== -1) return i.push(this), !0;if ("exact" === k.fullTextSearch && w.exactSearch(n, t)) return i.push(this), !0;if (k.fullTextSearch === !0 && w.fuzzySearch(n, t)) return i.push(this), !0;
            }if ("both" == k.match || "value" == k.match) {
              if (o = String(w.get.choiceValue(r, t)), o.search(a) !== -1) return i.push(this), !0;if ("exact" === k.fullTextSearch && w.exactSearch(n, o)) return i.push(this), !0;if (k.fullTextSearch === !0 && w.fuzzySearch(n, o)) return i.push(this), !0;
            }
          })), w.debug("Showing only matched items", n), w.remove.filteredItem(), i && Q.not(i).addClass(S.filtered);
        }, fuzzySearch: function fuzzySearch(e, t) {
          var n = t.length,
              i = e.length;if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;if (i === n) return e === t;e: for (var o = 0, a = 0; o < i; o++) {
            for (var r = e.charCodeAt(o); a < n;) {
              if (t.charCodeAt(a++) === r) continue e;
            }return !1;
          }return !0;
        }, exactSearch: function exactSearch(e, t) {
          return e = e.toLowerCase(), t = t.toLowerCase(), t.indexOf(e) > -1;
        }, filterActive: function filterActive() {
          k.useLabels && Q.filter("." + S.active).addClass(S.filtered);
        }, focusSearch: function focusSearch(e) {
          w.has.search() && !w.is.focusedOnSearch() && (e ? (I.off("focus" + j, O.search), V.focus(), I.on("focus" + j, O.search, w.event.search.focus)) : V.focus());
        }, forceSelection: function forceSelection() {
          var e = Q.not(S.filtered).filter("." + S.selected).eq(0),
              t = Q.not(S.filtered).filter("." + S.active).eq(0),
              n = e.length > 0 ? e : t;if (n.length > 0 && !w.is.multiple()) return w.debug("Forcing partial selection to selected item", n), void w.event.item.click.call(n, {}, !0);k.allowAdditions ? (w.set.selected(w.get.query()), w.remove.searchTerm()) : w.remove.searchTerm();
        }, event: { change: function change() {
            Y || (w.debug("Input changed, updating selection"), w.set.selected());
          }, focus: function focus() {
            k.showOnFocus && !X && w.is.hidden() && !p && w.show();
          }, blur: function blur(e) {
            p = n.activeElement === this, X || p || (w.remove.activeLabel(), w.hide());
          }, mousedown: function mousedown() {
            w.is.searchSelection() ? h = !0 : X = !0;
          }, mouseup: function mouseup() {
            w.is.searchSelection() ? h = !1 : X = !1;
          }, click: function click(t) {
            e(t.target).is(I) && (w.is.focusedOnSearch() ? w.show() : w.focusSearch());
          }, search: { focus: function focus() {
              X = !0, w.is.multiple() && w.remove.activeLabel(), k.showOnFocus && w.search();
            }, blur: function blur(e) {
              p = n.activeElement === this, h || $ || p || (k.forceSelection && w.forceSelection(), w.hide()), h = !1;
            } }, icon: { click: function click(e) {
              w.toggle();
            } }, text: { focus: function focus(e) {
              X = !0, w.focusSearch();
            } }, input: function input(e) {
            (w.is.multiple() || w.is.searchSelection()) && w.set.filtered(), clearTimeout(w.timer), w.timer = setTimeout(w.search, k.delay.search);
          }, label: { click: function click(t) {
              var n = e(this),
                  i = I.find(O.label),
                  o = i.filter("." + S.active),
                  a = n.nextAll("." + S.active),
                  r = n.prevAll("." + S.active),
                  s = a.length > 0 ? n.nextUntil(a).add(o).add(n) : n.prevUntil(r).add(o).add(n);t.shiftKey ? (o.removeClass(S.active), s.addClass(S.active)) : t.ctrlKey ? n.toggleClass(S.active) : (o.removeClass(S.active), n.addClass(S.active)), k.onLabelSelect.apply(this, i.filter("." + S.active));
            } }, remove: { click: function click() {
              var t = e(this).parent();t.hasClass(S.active) ? w.remove.activeLabels() : w.remove.activeLabels(t);
            } }, test: { toggle: function toggle(e) {
              var t = w.is.multiple() ? w.show : w.toggle;w.is.bubbledLabelClick(e) || w.is.bubbledIconClick(e) || w.determine.eventOnElement(e, t) && e.preventDefault();
            }, touch: function touch(e) {
              w.determine.eventOnElement(e, function () {
                "touchstart" == e.type ? w.timer = setTimeout(function () {
                  w.hide();
                }, k.delay.touch) : "touchmove" == e.type && clearTimeout(w.timer);
              }), e.stopPropagation();
            }, hide: function hide(e) {
              w.determine.eventInModule(e, w.hide);
            } }, select: { mutation: function mutation(e) {
              w.debug("<select> modified, recreating menu"), w.setup.select();
            } }, menu: { mutation: function mutation(t) {
              var n = t[0],
                  i = e(n.addedNodes ? n.addedNodes[0] : !1),
                  o = e(n.removedNodes ? n.removedNodes[0] : !1),
                  a = i.add(o),
                  r = a.is(O.addition) || a.closest(O.addition).length > 0,
                  s = a.is(O.message) || a.closest(O.message).length > 0;r || s ? (w.debug("Updating item selector cache"), w.refreshItems()) : (w.debug("Menu modified, updating selector cache"), w.refresh());
            }, mousedown: function mousedown() {
              $ = !0;
            }, mouseup: function mouseup() {
              $ = !1;
            } }, item: { mouseenter: function mouseenter(t) {
              var n = e(t.target),
                  i = e(this),
                  o = i.children(O.menu),
                  a = i.siblings(O.item).children(O.menu),
                  r = o.length > 0;!(o.find(n).length > 0) && r && (clearTimeout(w.itemTimer), w.itemTimer = setTimeout(function () {
                w.verbose("Showing sub-menu", o), e.each(a, function () {
                  w.animate.hide(!1, e(this));
                }), w.animate.show(!1, o);
              }, k.delay.show), t.preventDefault());
            }, mouseleave: function mouseleave(t) {
              var n = e(this).children(O.menu);n.length > 0 && (clearTimeout(w.itemTimer), w.itemTimer = setTimeout(function () {
                w.verbose("Hiding sub-menu", n), w.animate.hide(!1, n);
              }, k.delay.hide));
            }, click: function click(t, n) {
              var i = e(this),
                  o = e(t ? t.target : ""),
                  a = i.find(O.menu),
                  r = w.get.choiceText(i),
                  s = w.get.choiceValue(i, r),
                  l = a.length > 0;a.find(o).length > 0 || l && !k.allowCategorySelection || (w.is.searchSelection() && (k.allowAdditions && w.remove.userAddition(), w.remove.searchTerm(), w.is.focusedOnSearch() || 1 == n || w.focusSearch(!0)), k.useLabels || (w.remove.filteredItem(), w.set.scrollPosition(i)), w.determine.selectAction.call(this, r, s));
            } }, document: { keydown: function keydown(e) {
              var t = e.which;if (w.is.inObject(t, R)) {
                var n = I.find(O.label),
                    i = n.filter("." + S.active),
                    o = (i.data(P.value), n.index(i)),
                    a = n.length,
                    r = i.length > 0,
                    s = i.length > 1,
                    l = 0 === o,
                    c = o + 1 == a,
                    u = w.is.searchSelection(),
                    d = w.is.focusedOnSearch(),
                    f = w.is.focused(),
                    m = d && 0 === w.get.caretPosition();if (u && !r && !d) return;t == R.leftArrow ? !f && !m || r ? r && (e.shiftKey ? w.verbose("Adding previous label to selection") : (w.verbose("Selecting previous label"), n.removeClass(S.active)), l && !s ? i.addClass(S.active) : i.prev(O.siblingLabel).addClass(S.active).end(), e.preventDefault()) : (w.verbose("Selecting previous label"), n.last().addClass(S.active)) : t == R.rightArrow ? (f && !r && n.first().addClass(S.active), r && (e.shiftKey ? w.verbose("Adding next label to selection") : (w.verbose("Selecting next label"), n.removeClass(S.active)), c ? u ? d ? n.removeClass(S.active) : w.focusSearch() : s ? i.next(O.siblingLabel).addClass(S.active) : i.addClass(S.active) : i.next(O.siblingLabel).addClass(S.active), e.preventDefault())) : t == R.deleteKey || t == R.backspace ? r ? (w.verbose("Removing active labels"), c && u && !d && w.focusSearch(), i.last().next(O.siblingLabel).addClass(S.active), w.remove.activeLabels(i), e.preventDefault()) : m && !r && t == R.backspace && (w.verbose("Removing last label on input backspace"), i = n.last().addClass(S.active), w.remove.activeLabels(i)) : i.removeClass(S.active);
              }
            } }, keydown: function keydown(e) {
            var t = e.which;if (w.is.inObject(t, R)) {
              var n,
                  i = Q.not(O.unselectable).filter("." + S.selected).eq(0),
                  o = B.children("." + S.active).eq(0),
                  a = i.length > 0 ? i : o,
                  r = a.length > 0 ? a.siblings(":not(." + S.filtered + ")").addBack() : B.children(":not(." + S.filtered + ")"),
                  s = a.children(O.menu),
                  l = a.closest(O.menu),
                  c = l.hasClass(S.visible) || l.hasClass(S.animating) || l.parent(O.menu).length > 0,
                  u = s.length > 0,
                  d = a.length > 0,
                  f = a.not(O.unselectable).length > 0,
                  m = t == R.delimiter && k.allowAdditions && w.is.multiple(),
                  g = k.allowAdditions && k.hideAdditions && (t == R.enter || m) && f;if (g && (w.verbose("Selecting item from keyboard shortcut", a), w.event.item.click.call(a, e), w.is.searchSelection() && w.remove.searchTerm()), w.is.visible()) {
                if ((t == R.enter || m) && (t == R.enter && d && u && !k.allowCategorySelection ? (w.verbose("Pressed enter on unselectable category, opening sub menu"), t = R.rightArrow) : f && (w.verbose("Selecting item from keyboard shortcut", a), w.event.item.click.call(a, e), w.is.searchSelection() && w.remove.searchTerm()), e.preventDefault()), d && (t == R.leftArrow && l[0] !== B[0] && (w.verbose("Left key pressed, closing sub-menu"), w.animate.hide(!1, l), a.removeClass(S.selected), l.closest(O.item).addClass(S.selected), e.preventDefault()), t == R.rightArrow && u && (w.verbose("Right key pressed, opening sub-menu"), w.animate.show(!1, s), a.removeClass(S.selected), s.find(O.item).eq(0).addClass(S.selected), e.preventDefault())), t == R.upArrow) {
                  if (n = d && c ? a.prevAll(O.item + ":not(" + O.unselectable + ")").eq(0) : Q.eq(0), r.index(n) < 0) return w.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();w.verbose("Up key pressed, changing active item"), a.removeClass(S.selected), n.addClass(S.selected), w.set.scrollPosition(n), k.selectOnKeydown && w.is.single() && w.set.selectedItem(n), e.preventDefault();
                }if (t == R.downArrow) {
                  if (n = d && c ? n = a.nextAll(O.item + ":not(" + O.unselectable + ")").eq(0) : Q.eq(0), 0 === n.length) return w.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();w.verbose("Down key pressed, changing active item"), Q.removeClass(S.selected), n.addClass(S.selected), w.set.scrollPosition(n), k.selectOnKeydown && w.is.single() && w.set.selectedItem(n), e.preventDefault();
                }t == R.pageUp && (w.scrollPage("up"), e.preventDefault()), t == R.pageDown && (w.scrollPage("down"), e.preventDefault()), t == R.escape && (w.verbose("Escape key pressed, closing dropdown"), w.hide());
              } else m && e.preventDefault(), t != R.downArrow || w.is.visible() || (w.verbose("Down key pressed, showing dropdown"), w.select.firstUnfiltered(), w.show(), e.preventDefault());
            } else w.has.search() || w.set.selectedLetter(String.fromCharCode(t));
          } }, trigger: { change: function change() {
            var e = n.createEvent("HTMLEvents"),
                t = H[0];t && (w.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e));
          } }, determine: { selectAction: function selectAction(t, n) {
            w.verbose("Determining action", k.action), e.isFunction(w.action[k.action]) ? (w.verbose("Triggering preset action", k.action, t, n), w.action[k.action].call(Z, t, n, this)) : e.isFunction(k.action) ? (w.verbose("Triggering user action", k.action, t, n), k.action.call(Z, t, n, this)) : w.error(D.action, k.action);
          }, eventInModule: function eventInModule(t, i) {
            var o = e(t.target),
                a = o.closest(n.documentElement).length > 0,
                r = o.closest(I).length > 0;return i = e.isFunction(i) ? i : function () {}, a && !r ? (w.verbose("Triggering event", i), i(), !0) : (w.verbose("Event occurred in dropdown, canceling callback"), !1);
          }, eventOnElement: function eventOnElement(t, i) {
            var o = e(t.target),
                a = o.closest(O.siblingLabel),
                r = n.body.contains(t.target),
                s = 0 === I.find(a).length,
                l = 0 === o.closest(B).length;return i = e.isFunction(i) ? i : function () {}, r && s && l ? (w.verbose("Triggering event", i), i(), !0) : (w.verbose("Event occurred in dropdown menu, canceling callback"), !1);
          } }, action: { nothing: function nothing() {}, activate: function activate(t, n, i) {
            if (n = void 0 !== n ? n : t, w.can.activate(e(i))) {
              if (w.set.selected(n, e(i)), w.is.multiple() && !w.is.allFiltered()) return;w.hideAndClear();
            }
          }, select: function select(t, n, i) {
            if (n = void 0 !== n ? n : t, w.can.activate(e(i))) {
              if (w.set.value(n, e(i)), w.is.multiple() && !w.is.allFiltered()) return;w.hideAndClear();
            }
          }, combo: function combo(t, n, i) {
            n = void 0 !== n ? n : t, w.set.selected(n, e(i)), w.hideAndClear();
          }, hide: function hide(e, t, n) {
            w.set.value(t, e), w.hideAndClear();
          } }, get: { id: function id() {
            return y;
          }, defaultText: function defaultText() {
            return I.data(P.defaultText);
          }, defaultValue: function defaultValue() {
            return I.data(P.defaultValue);
          }, placeholderText: function placeholderText() {
            return I.data(P.placeholderText) || "";
          }, text: function text() {
            return L.text();
          }, query: function query() {
            return e.trim(V.val());
          }, searchWidth: function searchWidth(e) {
            return e = void 0 !== e ? e : V.val(), N.text(e), Math.ceil(N.width() + 1);
          }, selectionCount: function selectionCount() {
            var t = w.get.values();return w.is.multiple() ? e.isArray(t) ? t.length : 0 : "" !== w.get.value() ? 1 : 0;
          }, transition: function transition(e) {
            return "auto" == k.transition ? w.is.upward(e) ? "slide up" : "slide down" : k.transition;
          }, userValues: function userValues() {
            var t = w.get.values();return !!t && (t = e.isArray(t) ? t : [t], e.grep(t, function (e) {
              return w.get.item(e) === !1;
            }));
          }, uniqueArray: function uniqueArray(t) {
            return e.grep(t, function (n, i) {
              return e.inArray(n, t) === i;
            });
          }, caretPosition: function caretPosition() {
            var e,
                t,
                i = V.get(0);return "selectionStart" in i ? i.selectionStart : n.selection ? (i.focus(), e = n.selection.createRange(), t = e.text.length, e.moveStart("character", -i.value.length), e.text.length - t) : void 0;
          }, value: function value() {
            var t = H.length > 0 ? H.val() : I.data(P.value),
                n = e.isArray(t) && 1 === t.length && "" === t[0];return void 0 === t || n ? "" : t;
          }, values: function values() {
            var e = w.get.value();return "" === e ? "" : !w.has.selectInput() && w.is.multiple() ? "string" == typeof e ? e.split(k.delimiter) : "" : e;
          }, remoteValues: function remoteValues() {
            var t = w.get.values(),
                n = !1;return t && ("string" == typeof t && (t = [t]), e.each(t, function (e, t) {
              var i = w.read.remoteData(t);w.verbose("Restoring value from session data", i, t), i && (n || (n = {}), n[t] = i);
            })), n;
          }, choiceText: function choiceText(t, n) {
            if (n = void 0 !== n ? n : k.preserveHTML, t) return t.find(O.menu).length > 0 && (w.verbose("Retrieving text of element with sub-menu"), t = t.clone(), t.find(O.menu).remove(), t.find(O.menuIcon).remove()), void 0 !== t.data(P.text) ? t.data(P.text) : n ? e.trim(t.html()) : e.trim(t.text());
          }, choiceValue: function choiceValue(t, n) {
            return n = n || w.get.choiceText(t), !!t && (void 0 !== t.data(P.value) ? String(t.data(P.value)) : "string" == typeof n ? e.trim(n.toLowerCase()) : String(n));
          }, inputEvent: function inputEvent() {
            var e = V[0];return !!e && (void 0 !== e.oninput ? "input" : void 0 !== e.onpropertychange ? "propertychange" : "keyup");
          }, selectValues: function selectValues() {
            var t = {};return t.values = [], I.find("option").each(function () {
              var n = e(this),
                  i = n.html(),
                  o = n.attr("disabled"),
                  a = void 0 !== n.attr("value") ? n.attr("value") : i;"auto" === k.placeholder && "" === a ? t.placeholder = i : t.values.push({ name: i, value: a, disabled: o });
            }), k.placeholder && "auto" !== k.placeholder && (w.debug("Setting placeholder value to", k.placeholder), t.placeholder = k.placeholder), k.sortSelect ? (t.values.sort(function (e, t) {
              return e.name > t.name ? 1 : -1;
            }), w.debug("Retrieved and sorted values from select", t)) : w.debug("Retrieved values from select", t), t;
          }, activeItem: function activeItem() {
            return Q.filter("." + S.active);
          }, selectedItem: function selectedItem() {
            var e = Q.not(O.unselectable).filter("." + S.selected);return e.length > 0 ? e : Q.eq(0);
          }, itemWithAdditions: function itemWithAdditions(e) {
            var t = w.get.item(e),
                n = w.create.userChoice(e);return n && n.length > 0 && (t = t.length > 0 ? t.add(n) : n), t;
          }, item: function item(t, n) {
            var i,
                o,
                a = !1;return t = void 0 !== t ? t : void 0 !== w.get.values() ? w.get.values() : w.get.text(), i = o ? t.length > 0 : void 0 !== t && null !== t, o = w.is.multiple() && e.isArray(t), n = "" === t || 0 === t || n || !1, i && Q.each(function () {
              var i = e(this),
                  r = w.get.choiceText(i),
                  s = w.get.choiceValue(i, r);if (null !== s && void 0 !== s) if (o) e.inArray(String(s), t) === -1 && e.inArray(r, t) === -1 || (a = a ? a.add(i) : i);else if (n) {
                if (w.verbose("Ambiguous dropdown value using strict type check", i, t), s === t || r === t) return a = i, !0;
              } else if (String(s) == String(t) || r == t) return w.verbose("Found select item by value", s, t), a = i, !0;
            }), a;
          } }, check: { maxSelections: function maxSelections(e) {
            return !k.maxSelections || (e = void 0 !== e ? e : w.get.selectionCount(), e >= k.maxSelections ? (w.debug("Maximum selection count reached"), k.useLabels && (Q.addClass(S.filtered), w.add.message(T.maxSelections)), !0) : (w.verbose("No longer at maximum selection count"), w.remove.message(), w.remove.filteredItem(), w.is.searchSelection() && w.filterItems(), !1));
          } }, restore: { defaults: function defaults() {
            w.clear(), w.restore.defaultText(), w.restore.defaultValue();
          }, defaultText: function defaultText() {
            var e = w.get.defaultText();e === w.get.placeholderText ? (w.debug("Restoring default placeholder text", e), w.set.placeholderText(e)) : (w.debug("Restoring default text", e), w.set.text(e));
          }, placeholderText: function placeholderText() {
            w.set.placeholderText();
          }, defaultValue: function defaultValue() {
            var e = w.get.defaultValue();void 0 !== e && (w.debug("Restoring default value", e), "" !== e ? (w.set.value(e), w.set.selected()) : (w.remove.activeItem(), w.remove.selectedItem()));
          }, labels: function labels() {
            k.allowAdditions && (k.useLabels || (w.error(D.labels), k.useLabels = !0), w.debug("Restoring selected values"), w.create.userLabels()), w.check.maxSelections();
          }, selected: function selected() {
            w.restore.values(), w.is.multiple() ? (w.debug("Restoring previously selected values and labels"), w.restore.labels()) : w.debug("Restoring previously selected values");
          }, values: function values() {
            w.set.initialLoad(), k.apiSettings && k.saveRemoteData && w.get.remoteValues() ? w.restore.remoteValues() : w.set.selected(), w.remove.initialLoad();
          }, remoteValues: function remoteValues() {
            var t = w.get.remoteValues();w.debug("Recreating selected from session data", t), t && (w.is.single() ? e.each(t, function (e, t) {
              w.set.text(t);
            }) : e.each(t, function (e, t) {
              w.add.label(e, t);
            }));
          } }, read: { remoteData: function remoteData(e) {
            var n;return void 0 === t.Storage ? void w.error(D.noStorage) : void 0 !== (n = sessionStorage.getItem(e)) && n;
          } }, save: { defaults: function defaults() {
            w.save.defaultText(), w.save.placeholderText(), w.save.defaultValue();
          }, defaultValue: function defaultValue() {
            var e = w.get.value();w.verbose("Saving default value as", e), I.data(P.defaultValue, e);
          }, defaultText: function defaultText() {
            var e = w.get.text();w.verbose("Saving default text as", e), I.data(P.defaultText, e);
          }, placeholderText: function placeholderText() {
            var e;k.placeholder !== !1 && L.hasClass(S.placeholder) && (e = w.get.text(), w.verbose("Saving placeholder text as", e), I.data(P.placeholderText, e));
          }, remoteData: function remoteData(e, n) {
            if (void 0 === t.Storage) return void w.error(D.noStorage);w.verbose("Saving remote data to session storage", n, e), sessionStorage.setItem(n, e);
          } }, clear: function clear() {
          w.is.multiple() && k.useLabels ? w.remove.labels() : (w.remove.activeItem(), w.remove.selectedItem()), w.set.placeholderText(), w.clearValue();
        }, clearValue: function clearValue() {
          w.set.value("");
        }, scrollPage: function scrollPage(e, t) {
          var n,
              i,
              o,
              a = t || w.get.selectedItem(),
              r = a.closest(O.menu),
              s = r.outerHeight(),
              l = r.scrollTop(),
              c = Q.eq(0).outerHeight(),
              u = Math.floor(s / c),
              d = (r.prop("scrollHeight"), "up" == e ? l - c * u : l + c * u),
              f = Q.not(O.unselectable);o = "up" == e ? f.index(a) - u : f.index(a) + u, n = "up" == e ? o >= 0 : o < f.length, i = n ? f.eq(o) : "up" == e ? f.first() : f.last(), i.length > 0 && (w.debug("Scrolling page", e, i), a.removeClass(S.selected), i.addClass(S.selected), k.selectOnKeydown && w.is.single() && w.set.selectedItem(i), r.scrollTop(d));
        }, set: { filtered: function filtered() {
            var e = w.is.multiple(),
                t = w.is.searchSelection(),
                n = e && t,
                i = t ? w.get.query() : "",
                o = "string" == typeof i && i.length > 0,
                a = w.get.searchWidth(),
                r = "" !== i;e && o && (w.verbose("Adjusting input width", a, k.glyphWidth), V.css("width", a)), o || n && r ? (w.verbose("Hiding placeholder text"), L.addClass(S.filtered)) : (!e || n && !r) && (w.verbose("Showing placeholder text"), L.removeClass(S.filtered));
          }, empty: function empty() {
            I.addClass(S.empty);
          }, loading: function loading() {
            I.addClass(S.loading);
          }, placeholderText: function placeholderText(e) {
            e = e || w.get.placeholderText(), w.debug("Setting placeholder text", e), w.set.text(e), L.addClass(S.placeholder);
          }, tabbable: function tabbable() {
            w.is.searchSelection() ? (w.debug("Added tabindex to searchable dropdown"), V.val("").attr("tabindex", 0), B.attr("tabindex", -1)) : (w.debug("Added tabindex to dropdown"), void 0 === I.attr("tabindex") && (I.attr("tabindex", 0), B.attr("tabindex", -1)));
          }, initialLoad: function initialLoad() {
            w.verbose("Setting initial load"), v = !0;
          }, activeItem: function activeItem(e) {
            k.allowAdditions && e.filter(O.addition).length > 0 ? e.addClass(S.filtered) : e.addClass(S.active);
          }, partialSearch: function partialSearch(e) {
            var t = w.get.query().length;V.val(e.substr(0, t));
          }, scrollPosition: function scrollPosition(e, t) {
            var n, i, o, a, r, s, l, c, u;e = e || w.get.selectedItem(), n = e.closest(O.menu), i = e && e.length > 0, t = void 0 !== t && t, e && n.length > 0 && i && (a = e.position().top, n.addClass(S.loading), s = n.scrollTop(), r = n.offset().top, a = e.offset().top, o = s - r + a, t || (l = n.height(), u = s + l < o + 5, c = o - 5 < s), w.debug("Scrolling to active item", o), (t || c || u) && n.scrollTop(o), n.removeClass(S.loading));
          }, text: function text(e) {
            "select" !== k.action && ("combo" == k.action ? (w.debug("Changing combo button text", e, W), k.preserveHTML ? W.html(e) : W.text(e)) : (e !== w.get.placeholderText() && L.removeClass(S.placeholder), w.debug("Changing text", e, L), L.removeClass(S.filtered), k.preserveHTML ? L.html(e) : L.text(e)));
          }, selectedItem: function selectedItem(e) {
            var t = w.get.choiceValue(e),
                n = w.get.choiceText(e, !1),
                i = w.get.choiceText(e, !0);w.debug("Setting user selection to item", e), w.remove.activeItem(), w.set.partialSearch(n), w.set.activeItem(e), w.set.selected(t, e), w.set.text(i);
          }, selectedLetter: function selectedLetter(t) {
            var n,
                i = Q.filter("." + S.selected),
                o = i.length > 0 && w.has.firstLetter(i, t),
                a = !1;o && (n = i.nextAll(Q).eq(0), w.has.firstLetter(n, t) && (a = n)), a || Q.each(function () {
              if (w.has.firstLetter(e(this), t)) return a = e(this), !1;
            }), a && (w.verbose("Scrolling to next value with letter", t), w.set.scrollPosition(a), i.removeClass(S.selected), a.addClass(S.selected), k.selectOnKeydown && w.is.single() && w.set.selectedItem(a));
          }, direction: function direction(e) {
            "auto" == k.direction ? w.is.onScreen(e) ? w.remove.upward(e) : w.set.upward(e) : "upward" == k.direction && w.set.upward(e);
          }, upward: function upward(e) {
            (e || I).addClass(S.upward);
          }, value: function value(e, t, n) {
            var i = w.escape.value(e),
                o = H.length > 0,
                a = (w.has.value(e), w.get.values()),
                r = void 0 !== e ? String(e) : e;if (o) {
              if (!k.allowReselection && r == a && (w.verbose("Skipping value update already same value", e, a), !w.is.initialLoad())) return;w.is.single() && w.has.selectInput() && w.can.extendSelect() && (w.debug("Adding user option", e), w.add.optionValue(e)), w.debug("Updating input value", i, a), Y = !0, H.val(i), k.fireOnInit === !1 && w.is.initialLoad() ? w.debug("Input native change event ignored on initial load") : w.trigger.change(), Y = !1;
            } else w.verbose("Storing value in metadata", i, H), i !== a && I.data(P.value, r);k.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("No callback on initial load", k.onChange) : k.onChange.call(Z, e, t, n);
          }, active: function active() {
            I.addClass(S.active);
          }, multiple: function multiple() {
            I.addClass(S.multiple);
          }, visible: function visible() {
            I.addClass(S.visible);
          }, exactly: function exactly(e, t) {
            w.debug("Setting selected to exact values"), w.clear(), w.set.selected(e, t);
          }, selected: function selected(t, n) {
            var i = w.is.multiple();(n = k.allowAdditions ? n || w.get.itemWithAdditions(t) : n || w.get.item(t)) && (w.debug("Setting selected menu item to", n), w.is.multiple() && w.remove.searchWidth(), w.is.single() ? (w.remove.activeItem(), w.remove.selectedItem()) : k.useLabels && w.remove.selectedItem(), n.each(function () {
              var t = e(this),
                  o = w.get.choiceText(t),
                  a = w.get.choiceValue(t, o),
                  r = t.hasClass(S.filtered),
                  s = t.hasClass(S.active),
                  l = t.hasClass(S.addition),
                  c = i && 1 == n.length;i ? !s || l ? (k.apiSettings && k.saveRemoteData && w.save.remoteData(o, a), k.useLabels ? (w.add.value(a, o, t), w.add.label(a, o, c), w.set.activeItem(t), w.filterActive(), w.select.nextAvailable(n)) : (w.add.value(a, o, t), w.set.text(w.add.variables(T.count)), w.set.activeItem(t))) : r || (w.debug("Selected active value, removing label"), w.remove.selected(a)) : (k.apiSettings && k.saveRemoteData && w.save.remoteData(o, a), w.set.text(o), w.set.value(a, o, t), t.addClass(S.active).addClass(S.selected));
            }));
          } }, add: { label: function label(t, n, i) {
            var o,
                a = w.is.searchSelection() ? V : L,
                r = w.escape.value(t);if (o = e("<a />").addClass(S.label).attr("data-" + P.value, r).html(q.label(r, n)), o = k.onLabelCreate.call(o, r, n), w.has.label(t)) return void w.debug("Label already exists, skipping", r);k.label.variation && o.addClass(k.label.variation), i === !0 ? (w.debug("Animating in label", o), o.addClass(S.hidden).insertBefore(a).transition(k.label.transition, k.label.duration)) : (w.debug("Adding selection label", o), o.insertBefore(a));
          }, message: function message(t) {
            var n = B.children(O.message),
                i = k.templates.message(w.add.variables(t));n.length > 0 ? n.html(i) : n = e("<div/>").html(i).addClass(S.message).appendTo(B);
          }, optionValue: function optionValue(t) {
            var n = w.escape.value(t);H.find('option[value="' + w.escape.string(n) + '"]').length > 0 || (w.disconnect.selectObserver(), w.is.single() && (w.verbose("Removing previous user addition"), H.find("option." + S.addition).remove()), e("<option/>").prop("value", n).addClass(S.addition).html(t).appendTo(H), w.verbose("Adding user addition as an <option>", t), w.observe.select());
          }, userSuggestion: function userSuggestion(e) {
            var t,
                n = B.children(O.addition),
                i = w.get.item(e),
                o = i && i.not(O.addition).length,
                a = n.length > 0;if (!k.useLabels || !w.has.maxSelections()) {
              if ("" === e || o) return void n.remove();a ? (n.data(P.value, e).data(P.text, e).attr("data-" + P.value, e).attr("data-" + P.text, e).removeClass(S.filtered), k.hideAdditions || (t = k.templates.addition(w.add.variables(T.addResult, e)), n.html(t)), w.verbose("Replacing user suggestion with new value", n)) : (n = w.create.userChoice(e), n.prependTo(B), w.verbose("Adding item choice to menu corresponding with user choice addition", n)), k.hideAdditions && !w.is.allFiltered() || n.addClass(S.selected).siblings().removeClass(S.selected), w.refreshItems();
            }
          }, variables: function variables(e, t) {
            var n,
                i,
                o = e.search("{count}") !== -1,
                a = e.search("{maxCount}") !== -1,
                r = e.search("{term}") !== -1;return w.verbose("Adding templated variables to message", e), o && (n = w.get.selectionCount(), e = e.replace("{count}", n)), a && (n = w.get.selectionCount(), e = e.replace("{maxCount}", k.maxSelections)), r && (i = t || w.get.query(), e = e.replace("{term}", i)), e;
          }, value: function value(t, n, i) {
            var o,
                a = w.get.values();if ("" === t) return void w.debug("Cannot select blank values from multiselect");e.isArray(a) ? (o = a.concat([t]), o = w.get.uniqueArray(o)) : o = [t], w.has.selectInput() ? w.can.extendSelect() && (w.debug("Adding value to select", t, o, H), w.add.optionValue(t)) : (o = o.join(k.delimiter), w.debug("Setting hidden input to delimited value", o, H)), k.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("Skipping onadd callback on initial load", k.onAdd) : k.onAdd.call(Z, t, n, i), w.set.value(o, t, n, i), w.check.maxSelections();
          } }, remove: { active: function active() {
            I.removeClass(S.active);
          }, activeLabel: function activeLabel() {
            I.find(O.label).removeClass(S.active);
          }, empty: function empty() {
            I.removeClass(S.empty);
          }, loading: function loading() {
            I.removeClass(S.loading);
          }, initialLoad: function initialLoad() {
            v = !1;
          }, upward: function upward(e) {
            (e || I).removeClass(S.upward);
          }, visible: function visible() {
            I.removeClass(S.visible);
          }, activeItem: function activeItem() {
            Q.removeClass(S.active);
          }, filteredItem: function filteredItem() {
            k.useLabels && w.has.maxSelections() || (k.useLabels && w.is.multiple() ? Q.not("." + S.active).removeClass(S.filtered) : Q.removeClass(S.filtered), w.remove.empty());
          }, optionValue: function optionValue(e) {
            var t = w.escape.value(e),
                n = H.find('option[value="' + w.escape.string(t) + '"]');n.length > 0 && n.hasClass(S.addition) && (x && (x.disconnect(), w.verbose("Temporarily disconnecting mutation observer")), n.remove(), w.verbose("Removing user addition as an <option>", t), x && x.observe(H[0], { childList: !0, subtree: !0 }));
          }, message: function message() {
            B.children(O.message).remove();
          }, searchWidth: function searchWidth() {
            V.css("width", "");
          }, searchTerm: function searchTerm() {
            w.verbose("Cleared search term"), V.val(""), w.set.filtered();
          }, userAddition: function userAddition() {
            Q.filter(O.addition).remove();
          }, selected: function selected(t, n) {
            if (!(n = k.allowAdditions ? n || w.get.itemWithAdditions(t) : n || w.get.item(t))) return !1;n.each(function () {
              var t = e(this),
                  n = w.get.choiceText(t),
                  i = w.get.choiceValue(t, n);w.is.multiple() ? k.useLabels ? (w.remove.value(i, n, t), w.remove.label(i)) : (w.remove.value(i, n, t), 0 === w.get.selectionCount() ? w.set.placeholderText() : w.set.text(w.add.variables(T.count))) : w.remove.value(i, n, t), t.removeClass(S.filtered).removeClass(S.active), k.useLabels && t.removeClass(S.selected);
            });
          }, selectedItem: function selectedItem() {
            Q.removeClass(S.selected);
          }, value: function value(e, t, n) {
            var i,
                o = w.get.values();w.has.selectInput() ? (w.verbose("Input is <select> removing selected option", e), i = w.remove.arrayValue(e, o), w.remove.optionValue(e)) : (w.verbose("Removing from delimited values", e), i = w.remove.arrayValue(e, o), i = i.join(k.delimiter)), k.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("No callback on initial load", k.onRemove) : k.onRemove.call(Z, e, t, n), w.set.value(i, t, n), w.check.maxSelections();
          }, arrayValue: function arrayValue(t, n) {
            return e.isArray(n) || (n = [n]), n = e.grep(n, function (e) {
              return t != e;
            }), w.verbose("Removed value from delimited string", t, n), n;
          }, label: function label(e, t) {
            var n = I.find(O.label),
                i = n.filter("[data-" + P.value + '="' + w.escape.string(e) + '"]');w.verbose("Removing label", i), i.remove();
          }, activeLabels: function activeLabels(e) {
            e = e || I.find(O.label).filter("." + S.active), w.verbose("Removing active label selections", e), w.remove.labels(e);
          }, labels: function labels(t) {
            t = t || I.find(O.label), w.verbose("Removing labels", t), t.each(function () {
              var t = e(this),
                  n = t.data(P.value),
                  i = void 0 !== n ? String(n) : n,
                  o = w.is.userValue(i);if (k.onLabelRemove.call(t, n) === !1) return void w.debug("Label remove callback cancelled removal");w.remove.message(), o ? (w.remove.value(i), w.remove.label(i)) : w.remove.selected(i);
            });
          }, tabbable: function tabbable() {
            w.is.searchSelection() ? (w.debug("Searchable dropdown initialized"), V.removeAttr("tabindex"), B.removeAttr("tabindex")) : (w.debug("Simple selection dropdown initialized"), I.removeAttr("tabindex"), B.removeAttr("tabindex"));
          } }, has: { menuSearch: function menuSearch() {
            return w.has.search() && V.closest(B).length > 0;
          }, search: function search() {
            return V.length > 0;
          }, sizer: function sizer() {
            return N.length > 0;
          }, selectInput: function selectInput() {
            return H.is("select");
          }, minCharacters: function minCharacters(e) {
            return !k.minCharacters || (e = void 0 !== e ? String(e) : String(w.get.query()), e.length >= k.minCharacters);
          }, firstLetter: function firstLetter(e, t) {
            var n, i;return !(!e || 0 === e.length || "string" != typeof t) && (n = w.get.choiceText(e, !1), t = t.toLowerCase(), i = String(n).charAt(0).toLowerCase(), t == i);
          }, input: function input() {
            return H.length > 0;
          }, items: function items() {
            return Q.length > 0;
          }, menu: function menu() {
            return B.length > 0;
          }, message: function message() {
            return 0 !== B.children(O.message).length;
          }, label: function label(e) {
            var t = w.escape.value(e);return I.find(O.label).filter("[data-" + P.value + '="' + w.escape.string(t) + '"]').length > 0;
          }, maxSelections: function maxSelections() {
            return k.maxSelections && w.get.selectionCount() >= k.maxSelections;
          }, allResultsFiltered: function allResultsFiltered() {
            var e = Q.not(O.addition);return e.filter(O.unselectable).length === e.length;
          }, userSuggestion: function userSuggestion() {
            return B.children(O.addition).length > 0;
          }, query: function query() {
            return "" !== w.get.query();
          }, value: function value(t) {
            var n = w.get.values();return !!(e.isArray(n) ? n && e.inArray(t, n) !== -1 : n == t);
          } }, is: { active: function active() {
            return I.hasClass(S.active);
          }, bubbledLabelClick: function bubbledLabelClick(t) {
            return e(t.target).is("select, input") && I.closest("label").length > 0;
          }, bubbledIconClick: function bubbledIconClick(t) {
            return e(t.target).closest(U).length > 0;
          }, alreadySetup: function alreadySetup() {
            return I.is("select") && I.parent(O.dropdown).length > 0 && 0 === I.prev().length;
          }, animating: function animating(e) {
            return e ? e.transition && e.transition("is animating") : B.transition && B.transition("is animating");
          }, disabled: function disabled() {
            return I.hasClass(S.disabled);
          }, focused: function focused() {
            return n.activeElement === I[0];
          }, focusedOnSearch: function focusedOnSearch() {
            return n.activeElement === V[0];
          }, allFiltered: function allFiltered() {
            return (w.is.multiple() || w.has.search()) && !(0 == k.hideAdditions && w.has.userSuggestion()) && !w.has.message() && w.has.allResultsFiltered();
          }, hidden: function hidden(e) {
            return !w.is.visible(e);
          }, initialLoad: function initialLoad() {
            return v;
          }, onScreen: function onScreen(e) {
            var t,
                n = e || B,
                i = !0,
                o = {};return n.addClass(S.loading), t = { context: { scrollTop: M.scrollTop(), height: M.outerHeight() }, menu: { offset: n.offset(), height: n.outerHeight() } }, o = { above: t.context.scrollTop <= t.menu.offset.top - t.menu.height, below: t.context.scrollTop + t.context.height >= t.menu.offset.top + t.menu.height }, o.below ? (w.verbose("Dropdown can fit in context downward", o), i = !0) : o.below || o.above ? (w.verbose("Dropdown cannot fit below, opening upward", o), i = !1) : (w.verbose("Dropdown cannot fit in either direction, favoring downward", o), i = !0), n.removeClass(S.loading), i;
          }, inObject: function inObject(t, n) {
            var i = !1;return e.each(n, function (e, n) {
              if (n == t) return i = !0, !0;
            }), i;
          }, multiple: function multiple() {
            return I.hasClass(S.multiple);
          }, remote: function remote() {
            return k.apiSettings && w.can.useAPI();
          }, single: function single() {
            return !w.is.multiple();
          }, selectMutation: function selectMutation(t) {
            var n = !1;return e.each(t, function (t, i) {
              if (i.target && e(i.target).is("select")) return n = !0, !0;
            }), n;
          }, search: function search() {
            return I.hasClass(S.search);
          }, searchSelection: function searchSelection() {
            return w.has.search() && 1 === V.parent(O.dropdown).length;
          }, selection: function selection() {
            return I.hasClass(S.selection);
          }, userValue: function userValue(t) {
            return e.inArray(t, w.get.userValues()) !== -1;
          }, upward: function upward(e) {
            return (e || I).hasClass(S.upward);
          }, visible: function visible(e) {
            return e ? e.hasClass(S.visible) : B.hasClass(S.visible);
          } }, can: { activate: function activate(e) {
            return !!k.useLabels || !w.has.maxSelections() || !(!w.has.maxSelections() || !e.hasClass(S.active));
          }, click: function click() {
            return l || "click" == k.on;
          }, extendSelect: function extendSelect() {
            return k.allowAdditions || k.apiSettings;
          }, show: function show() {
            return !w.is.disabled() && (w.has.items() || w.has.message());
          }, useAPI: function useAPI() {
            return void 0 !== e.fn.api;
          } }, animate: { show: function show(t, n) {
            var i,
                o = n || B,
                a = n ? function () {} : function () {
              w.hideSubMenus(), w.hideOthers(), w.set.active();
            };t = e.isFunction(t) ? t : function () {}, w.verbose("Doing menu show animation", o), w.set.direction(n), i = w.get.transition(n), w.is.selection() && w.set.scrollPosition(w.get.selectedItem(), !0), (w.is.hidden(o) || w.is.animating(o)) && ("none" == i ? (a(), o.transition("show"), t.call(Z)) : void 0 !== e.fn.transition && I.transition("is supported") ? o.transition({ animation: i + " in", debug: k.debug, verbose: k.verbose, duration: k.duration, queue: !0, onStart: a, onComplete: function onComplete() {
                t.call(Z);
              } }) : w.error(D.noTransition, i));
          }, hide: function hide(t, n) {
            var i = n || B,
                o = (n ? k.duration : k.duration, n ? function () {} : function () {
              w.can.click() && w.unbind.intent(), w.remove.active();
            }),
                a = w.get.transition(n);t = e.isFunction(t) ? t : function () {}, (w.is.visible(i) || w.is.animating(i)) && (w.verbose("Doing menu hide animation", i), "none" == a ? (o(), i.transition("hide"), t.call(Z)) : void 0 !== e.fn.transition && I.transition("is supported") ? i.transition({ animation: a + " out", duration: k.duration, debug: k.debug, verbose: k.verbose, queue: !0, onStart: o, onComplete: function onComplete() {
                "auto" == k.direction && w.remove.upward(n), t.call(Z);
              } }) : w.error(D.transition));
          } }, hideAndClear: function hideAndClear() {
          w.remove.searchTerm(), w.has.maxSelections() || (w.has.search() ? w.hide(function () {
            w.remove.filteredItem();
          }) : w.hide());
        }, delay: { show: function show() {
            w.verbose("Delaying show event to ensure user intent"), clearTimeout(w.timer), w.timer = setTimeout(w.show, k.delay.show);
          }, hide: function hide() {
            w.verbose("Delaying hide event to ensure user intent"), clearTimeout(w.timer), w.timer = setTimeout(w.hide, k.delay.hide);
          } }, escape: { value: function value(t) {
            var n = e.isArray(t),
                i = "string" == typeof t,
                o = !i && !n,
                a = i && t.search(F.quote) !== -1,
                r = [];return o || !a ? t : (w.debug("Encoding quote values for use in select", t), n ? (e.each(t, function (e, t) {
              r.push(t.replace(F.quote, "&quot;"));
            }), r) : t.replace(F.quote, "&quot;"));
          }, string: function string(e) {
            return e = String(e), e.replace(F.escape, "\\$&");
          } }, setting: function setting(t, n) {
          if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t);else {
            if (void 0 === n) return k[t];e.isPlainObject(k[t]) ? e.extend(!0, k[t], n) : k[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, w, t);else {
            if (void 0 === n) return w[t];w[t] = n;
          }
        }, debug: function debug() {
          !k.silent && k.debug && (k.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), w.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !k.silent && k.verbose && k.debug && (k.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), w.verbose.apply(console, arguments)));
        }, error: function error() {
          k.silent || (w.error = Function.prototype.bind.call(console.error, console, k.name + ":"), w.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;k.performance && (t = new Date().getTime(), i = c || t, n = t - i, c = t, u.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: Z, "Execution Time": n })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500);
          }, display: function display() {
            var t = k.name + ":",
                n = 0;c = !1, clearTimeout(w.performance.timer), e.each(u, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", s && (t += " '" + s + "'"), (void 0 !== console.group || void 0 !== console.table) && u.length > 0 && (console.groupCollapsed(t), console.table ? console.table(u) : e.each(u, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), u = [];
          } }, invoke: function invoke(t, n, i) {
          var a,
              r,
              s,
              l = K;return n = n || m, i = Z || i, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] ? (r = l[i], !1) : (w.error(D.method, t), !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(i, n) : void 0 !== r && (s = r), e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s), r;
        } }, f ? (void 0 === K && w.initialize(), w.invoke(d)) : (void 0 !== K && K.invoke("destroy"), w.initialize());
    }), void 0 !== o ? o : a;
  }, e.fn.dropdown.settings = { silent: !1, debug: !1, verbose: !1, performance: !0, on: "click", action: "activate", apiSettings: !1, selectOnKeydown: !0, minCharacters: 0, filterRemoteData: !1, saveRemoteData: !0, throttle: 200, context: t, direction: "auto", keepOnScreen: !0, match: "both", fullTextSearch: !1, placeholder: "auto", preserveHTML: !0, sortSelect: !1, forceSelection: !0, allowAdditions: !1, hideAdditions: !0, maxSelections: !1, useLabels: !0, delimiter: ",", showOnFocus: !0, allowReselection: !1, allowTab: !0, allowCategorySelection: !1, fireOnInit: !1, transition: "auto", duration: 200, glyphWidth: 1.037, label: { transition: "scale", duration: 200, variation: !1 }, delay: { hide: 300, show: 200, search: 20, touch: 50 }, onChange: function onChange(e, t, n) {}, onAdd: function onAdd(e, t, n) {}, onRemove: function onRemove(e, t, n) {}, onLabelSelect: function onLabelSelect(e) {}, onLabelCreate: function onLabelCreate(t, n) {
      return e(this);
    }, onLabelRemove: function onLabelRemove(e) {
      return !0;
    }, onNoResults: function onNoResults(e) {
      return !0;
    }, onShow: function onShow() {}, onHide: function onHide() {}, name: "Dropdown", namespace: "dropdown", message: { addResult: "Add <b>{term}</b>", count: "{count} selected", maxSelections: "Max {maxCount} selections", noResults: "No results found.", serverError: "There was an error contacting the server" }, error: { action: "You called a dropdown action that was not defined", alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown", labels: "Allowing user additions currently requires the use of labels.", missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values", method: "The method you called is not defined.", noAPI: "The API module is required to load resources remotely", noStorage: "Saving remote data requires session storage", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>" }, regExp: { escape: /[-[\]{}()*+?.,\\^$|#\s]/g, quote: /"/g }, metadata: { defaultText: "defaultText", defaultValue: "defaultValue", placeholderText: "placeholder", text: "text", value: "value" }, fields: { remoteValues: "results", values: "values", disabled: "disabled", name: "name", value: "value", text: "text" }, keys: { backspace: 8, delimiter: 188, deleteKey: 46, enter: 13, escape: 27, pageUp: 33, pageDown: 34, leftArrow: 37, upArrow: 38, rightArrow: 39, downArrow: 40 }, selector: { addition: ".addition", dropdown: ".ui.dropdown", hidden: ".hidden", icon: "> .dropdown.icon", input: '> input[type="hidden"], > select', item: ".item", label: "> .label", remove: "> .label > .delete.icon", siblingLabel: ".label", menu: ".menu", message: ".message", menuIcon: ".dropdown.icon", search: "input.search, .menu > .search > input, .menu input.search", sizer: "> input.sizer", text: "> .text:not(.icon)", unselectable: ".disabled, .filtered" }, className: { active: "active", addition: "addition", animating: "animating", disabled: "disabled", empty: "empty", dropdown: "ui dropdown", filtered: "filtered", hidden: "hidden transition", item: "item", label: "ui label", loading: "loading", menu: "menu", message: "message", multiple: "multiple", placeholder: "default", sizer: "sizer", search: "search", selected: "selected", selection: "selection", upward: "upward", visible: "visible" } }, e.fn.dropdown.settings.templates = { dropdown: function dropdown(t) {
      var n = t.placeholder || !1,
          i = (t.values, "");return i += '<i class="dropdown icon"></i>', i += t.placeholder ? '<div class="default text">' + n + "</div>" : '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function (e, t) {
        i += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>";
      }), i += "</div>";
    }, menu: function menu(t, n) {
      var i = t[n.values] || {},
          o = "";return e.each(i, function (e, t) {
        var i = t[n.text] ? 'data-text="' + t[n.text] + '"' : "";o += '<div class="' + (t[n.disabled] ? "disabled " : "") + 'item" data-value="' + t[n.value] + '"' + i + ">", o += t[n.name], o += "</div>";
      }), o;
    }, label: function label(e, t) {
      return t + '<i class="delete icon"></i>';
    }, message: function message(e) {
      return e;
    }, addition: function addition(e) {
      return e;
    } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.embed = function (n) {
    var i,
        o = e(this),
        a = o.selector || "",
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);return o.each(function () {
      var d,
          f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.embed.settings, n) : e.extend({}, e.fn.embed.settings),
          m = f.selector,
          g = f.className,
          v = f.sources,
          p = f.error,
          h = f.metadata,
          b = f.namespace,
          y = f.templates,
          x = "." + b,
          C = "module-" + b,
          w = (e(t), e(this)),
          k = w.find(m.placeholder),
          S = w.find(m.icon),
          T = w.find(m.embed),
          A = this,
          R = w.data(C);d = { initialize: function initialize() {
          d.debug("Initializing embed"), d.determine.autoplay(), d.create(), d.bind.events(), d.instantiate();
        }, instantiate: function instantiate() {
          d.verbose("Storing instance of module", d), R = d, w.data(C, d);
        }, destroy: function destroy() {
          d.verbose("Destroying previous instance of embed"), d.reset(), w.removeData(C).off(x);
        }, refresh: function refresh() {
          d.verbose("Refreshing selector cache"), k = w.find(m.placeholder), S = w.find(m.icon), T = w.find(m.embed);
        }, bind: { events: function events() {
            d.has.placeholder() && (d.debug("Adding placeholder events"), w.on("click" + x, m.placeholder, d.createAndShow).on("click" + x, m.icon, d.createAndShow));
          } }, create: function create() {
          d.get.placeholder() ? d.createPlaceholder() : d.createAndShow();
        }, createPlaceholder: function createPlaceholder(e) {
          var t = d.get.icon(),
              n = d.get.url();d.generate.embed(n);e = e || d.get.placeholder(), w.html(y.placeholder(e, t)), d.debug("Creating placeholder for embed", e, t);
        }, createEmbed: function createEmbed(t) {
          d.refresh(), t = t || d.get.url(), T = e("<div/>").addClass(g.embed).html(d.generate.embed(t)).appendTo(w), f.onCreate.call(A, t), d.debug("Creating embed object", T);
        }, changeEmbed: function changeEmbed(e) {
          T.html(d.generate.embed(e));
        }, createAndShow: function createAndShow() {
          d.createEmbed(), d.show();
        }, change: function change(e, t, n) {
          d.debug("Changing video to ", e, t, n), w.data(h.source, e).data(h.id, t), n ? w.data(h.url, n) : w.removeData(h.url), d.has.embed() ? d.changeEmbed() : d.create();
        }, reset: function reset() {
          d.debug("Clearing embed and showing placeholder"), d.remove.active(), d.remove.embed(), d.showPlaceholder(), f.onReset.call(A);
        }, show: function show() {
          d.debug("Showing embed"), d.set.active(), f.onDisplay.call(A);
        }, hide: function hide() {
          d.debug("Hiding embed"), d.showPlaceholder();
        }, showPlaceholder: function showPlaceholder() {
          d.debug("Showing placeholder image"), d.remove.active(), f.onPlaceholderDisplay.call(A);
        }, get: { id: function id() {
            return f.id || w.data(h.id);
          }, placeholder: function placeholder() {
            return f.placeholder || w.data(h.placeholder);
          }, icon: function icon() {
            return f.icon ? f.icon : void 0 !== w.data(h.icon) ? w.data(h.icon) : d.determine.icon();
          }, source: function source(e) {
            return f.source ? f.source : void 0 !== w.data(h.source) ? w.data(h.source) : d.determine.source();
          }, type: function type() {
            var e = d.get.source();return void 0 !== v[e] && v[e].type;
          }, url: function url() {
            return f.url ? f.url : void 0 !== w.data(h.url) ? w.data(h.url) : d.determine.url();
          } }, determine: { autoplay: function autoplay() {
            d.should.autoplay() && (f.autoplay = !0);
          }, source: function source(t) {
            var n = !1;return t = t || d.get.url(), t && e.each(v, function (e, i) {
              if (t.search(i.domain) !== -1) return n = e, !1;
            }), n;
          }, icon: function icon() {
            var e = d.get.source();return void 0 !== v[e] && v[e].icon;
          }, url: function url() {
            var e,
                t = f.id || w.data(h.id),
                n = f.source || w.data(h.source);return e = void 0 !== v[n] && v[n].url.replace("{id}", t), e && w.data(h.url, e), e;
          } }, set: { active: function active() {
            w.addClass(g.active);
          } }, remove: { active: function active() {
            w.removeClass(g.active);
          }, embed: function embed() {
            T.empty();
          } }, encode: { parameters: function parameters(e) {
            var t,
                n = [];for (t in e) {
              n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            }return n.join("&amp;");
          } }, generate: { embed: function embed(e) {
            d.debug("Generating embed html");var t,
                n,
                i = d.get.source();return e = d.get.url(e), e ? (n = d.generate.parameters(i), t = y.iframe(e, n)) : d.error(p.noURL, w), t;
          }, parameters: function parameters(t, n) {
            var i = v[t] && void 0 !== v[t].parameters ? v[t].parameters(f) : {};return n = n || f.parameters, n && (i = e.extend({}, i, n)), i = f.onEmbed(i), d.encode.parameters(i);
          } }, has: { embed: function embed() {
            return T.length > 0;
          }, placeholder: function placeholder() {
            return f.placeholder || w.data(h.placeholder);
          } }, should: { autoplay: function autoplay() {
            return "auto" === f.autoplay ? f.placeholder || void 0 !== w.data(h.placeholder) : f.autoplay;
          } }, is: { video: function video() {
            return "video" == d.get.type();
          } }, setting: function setting(t, n) {
          if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (void 0 === n) return f[t];e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, d, t);else {
            if (void 0 === n) return d[t];d[t] = n;
          }
        }, debug: function debug() {
          !f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)));
        }, error: function error() {
          f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;f.performance && (t = new Date().getTime(), i = r || t, n = t - i, r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: A, "Execution Time": n })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500);
          }, display: function display() {
            var t = f.name + ":",
                n = 0;r = !1, clearTimeout(d.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", a && (t += " '" + a + "'"), o.length > 1 && (t += " (" + o.length + ")"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function invoke(t, n, o) {
          var a,
              r,
              s,
              l = R;return n = n || u, o = A || o, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] ? (r = l[i], !1) : (d.error(p.method, t), !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(o, n) : void 0 !== r && (s = r), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), r;
        } }, c ? (void 0 === R && d.initialize(), d.invoke(l)) : (void 0 !== R && R.invoke("destroy"), d.initialize());
    }), void 0 !== i ? i : this;
  }, e.fn.embed.settings = { name: "Embed", namespace: "embed", silent: !1, debug: !1, verbose: !1, performance: !0, icon: !1, source: !1, url: !1, id: !1, autoplay: "auto", color: "#444444", hd: !0, brandedUI: !1, parameters: !1, onDisplay: function onDisplay() {}, onPlaceholderDisplay: function onPlaceholderDisplay() {}, onReset: function onReset() {}, onCreate: function onCreate(e) {}, onEmbed: function onEmbed(e) {
      return e;
    }, metadata: { id: "id", icon: "icon", placeholder: "placeholder", source: "source", url: "url" }, error: { noURL: "No URL specified", method: "The method you called is not defined" }, className: { active: "active", embed: "embed" }, selector: { embed: ".embed", placeholder: ".placeholder", icon: ".icon" }, sources: { youtube: { name: "youtube", type: "video", icon: "video play", domain: "youtube.com", url: "//www.youtube.com/embed/{id}", parameters: function parameters(e) {
          return { autohide: !e.brandedUI, autoplay: e.autoplay, color: e.color || void 0, hq: e.hd, jsapi: e.api, modestbranding: !e.brandedUI };
        } }, vimeo: { name: "vimeo", type: "video", icon: "video play", domain: "vimeo.com", url: "//player.vimeo.com/video/{id}", parameters: function parameters(e) {
          return { api: e.api, autoplay: e.autoplay, byline: e.brandedUI, color: e.color || void 0, portrait: e.brandedUI, title: e.brandedUI };
        } } }, templates: { iframe: function iframe(e, t) {
        var n = e;return t && (n += "?" + t), '<iframe src="' + n + '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
      }, placeholder: function placeholder(e, t) {
        var n = "";return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n;
      } }, api: !1, onPause: function onPause() {}, onPlay: function onPlay() {}, onStop: function onStop() {} };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.modal = function (i) {
    var o,
        a = e(this),
        r = e(t),
        s = e(n),
        l = e("body"),
        c = a.selector || "",
        u = new Date().getTime(),
        d = [],
        f = arguments[0],
        m = "string" == typeof f,
        g = [].slice.call(arguments, 1),
        v = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };return a.each(function () {
      var a,
          p,
          h,
          b,
          y,
          x,
          C,
          w,
          k,
          S = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.modal.settings, i) : e.extend({}, e.fn.modal.settings),
          T = S.selector,
          A = S.className,
          R = S.namespace,
          P = S.error,
          E = "." + R,
          F = "module-" + R,
          O = e(this),
          D = e(S.context),
          q = O.find(T.close),
          j = this,
          z = O.data(F);k = { initialize: function initialize() {
          k.verbose("Initializing dimmer", D), k.create.id(), k.create.dimmer(), k.refreshModals(), k.bind.events(), S.observeChanges && k.observeChanges(), k.instantiate();
        }, instantiate: function instantiate() {
          k.verbose("Storing instance of modal"), z = k, O.data(F, z);
        }, create: { dimmer: function dimmer() {
            var t = { debug: S.debug, dimmerName: "modals", duration: { show: S.duration, hide: S.duration } },
                n = e.extend(!0, t, S.dimmerSettings);if (S.inverted && (n.variation = void 0 !== n.variation ? n.variation + " inverted" : "inverted"), void 0 === e.fn.dimmer) return void k.error(P.dimmer);k.debug("Creating dimmer with settings", n), b = D.dimmer(n), S.detachable ? (k.verbose("Modal is detachable, moving content into dimmer"), b.dimmer("add content", O)) : k.set.undetached(), S.blurring && b.addClass(A.blurring), y = b.dimmer("get dimmer");
          }, id: function id() {
            C = (Math.random().toString(16) + "000000000").substr(2, 8), x = "." + C, k.verbose("Creating unique id for element", C);
          } }, destroy: function destroy() {
          k.verbose("Destroying previous modal"), O.removeData(F).off(E), r.off(x), y.off(x), q.off(E), D.dimmer("destroy");
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && (w = new MutationObserver(function (e) {
            k.debug("DOM tree modified, refreshing"), k.refresh();
          }), w.observe(j, { childList: !0, subtree: !0 }), k.debug("Setting up mutation observer", w));
        }, refresh: function refresh() {
          k.remove.scrolling(), k.cacheSizes(), k.set.screenHeight(), k.set.type(), k.set.position();
        }, refreshModals: function refreshModals() {
          p = O.siblings(T.modal), a = p.add(O);
        }, attachEvents: function attachEvents(t, n) {
          var i = e(t);n = e.isFunction(k[n]) ? k[n] : k.toggle, i.length > 0 ? (k.debug("Attaching modal events to element", t, n), i.off(E).on("click" + E, n)) : k.error(P.notFound, t);
        }, bind: { events: function events() {
            k.verbose("Attaching events"), O.on("click" + E, T.close, k.event.close).on("click" + E, T.approve, k.event.approve).on("click" + E, T.deny, k.event.deny), r.on("resize" + x, k.event.resize);
          } }, get: { id: function id() {
            return (Math.random().toString(16) + "000000000").substr(2, 8);
          } }, event: { approve: function approve() {
            if (S.onApprove.call(j, e(this)) === !1) return void k.verbose("Approve callback returned false cancelling hide");k.hide();
          }, deny: function deny() {
            if (S.onDeny.call(j, e(this)) === !1) return void k.verbose("Deny callback returned false cancelling hide");k.hide();
          }, close: function close() {
            k.hide();
          }, click: function click(t) {
            var i = e(t.target),
                o = i.closest(T.modal).length > 0,
                a = e.contains(n.documentElement, t.target);!o && a && (k.debug("Dimmer clicked, hiding all modals"), k.is.active() && (k.remove.clickaway(), S.allowMultiple ? k.hide() : k.hideAll()));
          }, debounce: function debounce(e, t) {
            clearTimeout(k.timer), k.timer = setTimeout(e, t);
          }, keyboard: function keyboard(e) {
            27 == e.which && (S.closable ? (k.debug("Escape key pressed hiding modal"), k.hide()) : k.debug("Escape key pressed, but closable is set to false"), e.preventDefault());
          }, resize: function resize() {
            b.dimmer("is active") && v(k.refresh);
          } }, toggle: function toggle() {
          k.is.active() || k.is.animating() ? k.hide() : k.show();
        }, show: function show(t) {
          t = e.isFunction(t) ? t : function () {}, k.refreshModals(), k.showModal(t);
        }, hide: function hide(t) {
          t = e.isFunction(t) ? t : function () {}, k.refreshModals(), k.hideModal(t);
        }, showModal: function showModal(t) {
          t = e.isFunction(t) ? t : function () {}, k.is.animating() || !k.is.active() ? (k.showDimmer(), k.cacheSizes(), k.set.position(), k.set.screenHeight(), k.set.type(), k.set.clickaway(), !S.allowMultiple && k.others.active() ? k.hideOthers(k.showModal) : (S.onShow.call(j), S.transition && void 0 !== e.fn.transition && O.transition("is supported") ? (k.debug("Showing modal with css animations"), O.transition({ debug: S.debug, animation: S.transition + " in", queue: S.queue, duration: S.duration, useFailSafe: !0, onComplete: function onComplete() {
              S.onVisible.apply(j), S.keyboardShortcuts && k.add.keyboardShortcuts(), k.save.focus(), k.set.active(), S.autofocus && k.set.autofocus(), t();
            } })) : k.error(P.noTransition))) : k.debug("Modal is already visible");
        }, hideModal: function hideModal(t, n) {
          if (t = e.isFunction(t) ? t : function () {}, k.debug("Hiding modal"), S.onHide.call(j, e(this)) === !1) return void k.verbose("Hide callback returned false cancelling hide");(k.is.animating() || k.is.active()) && (S.transition && void 0 !== e.fn.transition && O.transition("is supported") ? (k.remove.active(), O.transition({ debug: S.debug, animation: S.transition + " out", queue: S.queue, duration: S.duration, useFailSafe: !0, onStart: function onStart() {
              k.others.active() || n || k.hideDimmer(), S.keyboardShortcuts && k.remove.keyboardShortcuts();
            }, onComplete: function onComplete() {
              S.onHidden.call(j), k.restore.focus(), t();
            } })) : k.error(P.noTransition));
        }, showDimmer: function showDimmer() {
          b.dimmer("is animating") || !b.dimmer("is active") ? (k.debug("Showing dimmer"), b.dimmer("show")) : k.debug("Dimmer already visible");
        }, hideDimmer: function hideDimmer() {
          if (!b.dimmer("is animating") && !b.dimmer("is active")) return void k.debug("Dimmer is not visible cannot hide");b.dimmer("hide", function () {
            k.remove.clickaway(), k.remove.screenHeight();
          });
        }, hideAll: function hideAll(t) {
          var n = a.filter("." + A.active + ", ." + A.animating);t = e.isFunction(t) ? t : function () {}, n.length > 0 && (k.debug("Hiding all visible modals"), k.hideDimmer(), n.modal("hide modal", t));
        }, hideOthers: function hideOthers(t) {
          var n = p.filter("." + A.active + ", ." + A.animating);t = e.isFunction(t) ? t : function () {}, n.length > 0 && (k.debug("Hiding other modals", p), n.modal("hide modal", t, !0));
        }, others: { active: function active() {
            return p.filter("." + A.active).length > 0;
          }, animating: function animating() {
            return p.filter("." + A.animating).length > 0;
          } }, add: { keyboardShortcuts: function keyboardShortcuts() {
            k.verbose("Adding keyboard shortcuts"), s.on("keyup" + E, k.event.keyboard);
          } }, save: { focus: function focus() {
            h = e(n.activeElement).blur();
          } }, restore: { focus: function focus() {
            h && h.length > 0 && h.focus();
          } }, remove: { active: function active() {
            O.removeClass(A.active);
          }, clickaway: function clickaway() {
            S.closable && y.off("click" + x);
          }, bodyStyle: function bodyStyle() {
            "" === l.attr("style") && (k.verbose("Removing style attribute"), l.removeAttr("style"));
          }, screenHeight: function screenHeight() {
            k.debug("Removing page height"), l.css("height", "");
          }, keyboardShortcuts: function keyboardShortcuts() {
            k.verbose("Removing keyboard shortcuts"), s.off("keyup" + E);
          }, scrolling: function scrolling() {
            b.removeClass(A.scrolling), O.removeClass(A.scrolling);
          } }, cacheSizes: function cacheSizes() {
          var i = O.outerHeight();void 0 !== k.cache && 0 === i || (k.cache = { pageHeight: e(n).outerHeight(), height: i + S.offset, contextHeight: "body" == S.context ? e(t).height() : b.height() }), k.debug("Caching modal and container sizes", k.cache);
        }, can: { fit: function fit() {
            return k.cache.height + 2 * S.padding < k.cache.contextHeight;
          } }, is: { active: function active() {
            return O.hasClass(A.active);
          }, animating: function animating() {
            return O.transition("is supported") ? O.transition("is animating") : O.is(":visible");
          }, scrolling: function scrolling() {
            return b.hasClass(A.scrolling);
          }, modernBrowser: function modernBrowser() {
            return !(t.ActiveXObject || "ActiveXObject" in t);
          } }, set: { autofocus: function autofocus() {
            var e = O.find("[tabindex], :input").filter(":visible"),
                t = e.filter("[autofocus]"),
                n = t.length > 0 ? t.first() : e.first();n.length > 0 && n.focus();
          }, clickaway: function clickaway() {
            S.closable && y.on("click" + x, k.event.click);
          }, screenHeight: function screenHeight() {
            k.can.fit() ? l.css("height", "") : (k.debug("Modal is taller than page content, resizing page height"), l.css("height", k.cache.height + 2 * S.padding));
          }, active: function active() {
            O.addClass(A.active);
          }, scrolling: function scrolling() {
            b.addClass(A.scrolling), O.addClass(A.scrolling);
          }, type: function type() {
            k.can.fit() ? (k.verbose("Modal fits on screen"), k.others.active() || k.others.animating() || k.remove.scrolling()) : (k.verbose("Modal cannot fit on screen setting to scrolling"), k.set.scrolling());
          }, position: function position() {
            k.verbose("Centering modal on page", k.cache), k.can.fit() ? O.css({ top: "", marginTop: -(k.cache.height / 2) }) : O.css({ marginTop: "", top: s.scrollTop() });
          }, undetached: function undetached() {
            b.addClass(A.undetached);
          } }, setting: function setting(t, n) {
          if (k.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, S, t);else {
            if (void 0 === n) return S[t];e.isPlainObject(S[t]) ? e.extend(!0, S[t], n) : S[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, k, t);else {
            if (void 0 === n) return k[t];k[t] = n;
          }
        }, debug: function debug() {
          !S.silent && S.debug && (S.performance ? k.performance.log(arguments) : (k.debug = Function.prototype.bind.call(console.info, console, S.name + ":"), k.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !S.silent && S.verbose && S.debug && (S.performance ? k.performance.log(arguments) : (k.verbose = Function.prototype.bind.call(console.info, console, S.name + ":"), k.verbose.apply(console, arguments)));
        }, error: function error() {
          S.silent || (k.error = Function.prototype.bind.call(console.error, console, S.name + ":"), k.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;S.performance && (t = new Date().getTime(), i = u || t, n = t - i, u = t, d.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: j, "Execution Time": n })), clearTimeout(k.performance.timer), k.performance.timer = setTimeout(k.performance.display, 500);
          }, display: function display() {
            var t = S.name + ":",
                n = 0;u = !1, clearTimeout(k.performance.timer), e.each(d, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", c && (t += " '" + c + "'"), (void 0 !== console.group || void 0 !== console.table) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), d = [];
          } }, invoke: function invoke(t, n, i) {
          var a,
              r,
              s,
              l = z;return n = n || g, i = j || i, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] && (r = l[i], !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(i, n) : void 0 !== r && (s = r), e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s), r;
        } }, m ? (void 0 === z && k.initialize(), k.invoke(f)) : (void 0 !== z && z.invoke("destroy"), k.initialize());
    }), void 0 !== o ? o : this;
  }, e.fn.modal.settings = { name: "Modal", namespace: "modal", silent: !1, debug: !1, verbose: !1, performance: !0, observeChanges: !1, allowMultiple: !1, detachable: !0, closable: !0, autofocus: !0, inverted: !1, blurring: !1, dimmerSettings: { closable: !1, useCSS: !0 }, keyboardShortcuts: !0, context: "body", queue: !1, duration: 500, offset: 0, transition: "scale", padding: 50, onShow: function onShow() {}, onVisible: function onVisible() {}, onHide: function onHide() {
      return !0;
    }, onHidden: function onHidden() {}, onApprove: function onApprove() {
      return !0;
    }, onDeny: function onDeny() {
      return !0;
    }, selector: { close: "> .close", approve: ".actions .positive, .actions .approve, .actions .ok", deny: ".actions .negative, .actions .deny, .actions .cancel", modal: ".ui.modal" }, error: { dimmer: "UI Dimmer, a required component is not included in this page", method: "The method you called is not defined.", notFound: "The element you specified could not be found" }, className: { active: "active", animating: "animating", blurring: "blurring", scrolling: "scrolling", undetached: "undetached" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.nag = function (n) {
    var i,
        o = e(this),
        a = o.selector || "",
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);return o.each(function () {
      var o,
          d = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.nag.settings, n) : e.extend({}, e.fn.nag.settings),
          f = (d.className, d.selector),
          m = d.error,
          g = d.namespace,
          v = "." + g,
          p = g + "-module",
          h = e(this),
          b = (h.find(f.close), e(d.context ? d.context : "body")),
          y = this,
          x = h.data(p);t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;o = { initialize: function initialize() {
          o.verbose("Initializing element"), h.on("click" + v, f.close, o.dismiss).data(p, o), d.detachable && h.parent()[0] !== b[0] && h.detach().prependTo(b), d.displayTime > 0 && setTimeout(o.hide, d.displayTime), o.show();
        }, destroy: function destroy() {
          o.verbose("Destroying instance"), h.removeData(p).off(v);
        }, show: function show() {
          o.should.show() && !h.is(":visible") && (o.debug("Showing nag", d.animation.show), "fade" == d.animation.show ? h.fadeIn(d.duration, d.easing) : h.slideDown(d.duration, d.easing));
        }, hide: function hide() {
          o.debug("Showing nag", d.animation.hide), "fade" == d.animation.show ? h.fadeIn(d.duration, d.easing) : h.slideUp(d.duration, d.easing);
        }, onHide: function onHide() {
          o.debug("Removing nag", d.animation.hide), h.remove(), d.onHide && d.onHide();
        }, dismiss: function dismiss(e) {
          d.storageMethod && o.storage.set(d.key, d.value), o.hide(), e.stopImmediatePropagation(), e.preventDefault();
        }, should: { show: function show() {
            return d.persist ? (o.debug("Persistent nag is set, can show nag"), !0) : o.storage.get(d.key) != d.value.toString() ? (o.debug("Stored value is not set, can show nag", o.storage.get(d.key)), !0) : (o.debug("Stored value is set, cannot show nag", o.storage.get(d.key)), !1);
          } }, get: { storageOptions: function storageOptions() {
            var e = {};return d.expires && (e.expires = d.expires), d.domain && (e.domain = d.domain), d.path && (e.path = d.path), e;
          } }, clear: function clear() {
          o.storage.remove(d.key);
        }, storage: { set: function set(n, i) {
            var a = o.get.storageOptions();if ("localstorage" == d.storageMethod && void 0 !== t.localStorage) t.localStorage.setItem(n, i), o.debug("Value stored using local storage", n, i);else if ("sessionstorage" == d.storageMethod && void 0 !== t.sessionStorage) t.sessionStorage.setItem(n, i), o.debug("Value stored using session storage", n, i);else {
              if (void 0 === e.cookie) return void o.error(m.noCookieStorage);e.cookie(n, i, a), o.debug("Value stored using cookie", n, i, a);
            }
          }, get: function get(n, i) {
            var a;return "localstorage" == d.storageMethod && void 0 !== t.localStorage ? a = t.localStorage.getItem(n) : "sessionstorage" == d.storageMethod && void 0 !== t.sessionStorage ? a = t.sessionStorage.getItem(n) : void 0 !== e.cookie ? a = e.cookie(n) : o.error(m.noCookieStorage), "undefined" != a && "null" != a && void 0 !== a && null !== a || (a = void 0), a;
          }, remove: function remove(n) {
            var i = o.get.storageOptions();"localstorage" == d.storageMethod && void 0 !== t.localStorage ? t.localStorage.removeItem(n) : "sessionstorage" == d.storageMethod && void 0 !== t.sessionStorage ? t.sessionStorage.removeItem(n) : void 0 !== e.cookie ? e.removeCookie(n, i) : o.error(m.noStorage);
          } }, setting: function setting(t, n) {
          if (o.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, d, t);else {
            if (void 0 === n) return d[t];e.isPlainObject(d[t]) ? e.extend(!0, d[t], n) : d[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, o, t);else {
            if (void 0 === n) return o[t];o[t] = n;
          }
        }, debug: function debug() {
          !d.silent && d.debug && (d.performance ? o.performance.log(arguments) : (o.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), o.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !d.silent && d.verbose && d.debug && (d.performance ? o.performance.log(arguments) : (o.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), o.verbose.apply(console, arguments)));
        }, error: function error() {
          d.silent || (o.error = Function.prototype.bind.call(console.error, console, d.name + ":"), o.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;d.performance && (t = new Date().getTime(), i = r || t, n = t - i, r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: y, "Execution Time": n })), clearTimeout(o.performance.timer), o.performance.timer = setTimeout(o.performance.display, 500);
          }, display: function display() {
            var t = d.name + ":",
                n = 0;r = !1, clearTimeout(o.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", a && (t += " '" + a + "'"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function invoke(t, n, a) {
          var r,
              s,
              l,
              c = x;return n = n || u, a = y || a, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, i) {
            var a = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != r) c = c[a];else {
              if (void 0 !== c[a]) return s = c[a], !1;if (!e.isPlainObject(c[i]) || n == r) return void 0 !== c[i] ? (s = c[i], !1) : (o.error(m.method, t), !1);c = c[i];
            }
          })), e.isFunction(s) ? l = s.apply(a, n) : void 0 !== s && (l = s), e.isArray(i) ? i.push(l) : void 0 !== i ? i = [i, l] : void 0 !== l && (i = l), s;
        } }, c ? (void 0 === x && o.initialize(), o.invoke(l)) : (void 0 !== x && x.invoke("destroy"), o.initialize());
    }), void 0 !== i ? i : this;
  }, e.fn.nag.settings = { name: "Nag", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "Nag", persist: !1, displayTime: 0, animation: { show: "slide", hide: "slide" }, context: !1, detachable: !1, expires: 30, domain: !1, path: "/", storageMethod: "cookie", key: "nag", value: "dismiss", error: { noCookieStorage: "$.cookie is not included. A storage solution is required.", noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state", method: "The method you called is not defined." }, className: { bottom: "bottom", fixed: "fixed" }, selector: { close: ".close.icon" }, speed: 500, easing: "easeOutQuad", onHide: function onHide() {} }, e.extend(e.easing, { easeOutQuad: function easeOutQuad(e, t, n, i, o) {
      return -i * (t /= o) * (t - 2) + n;
    } });
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.popup = function (i) {
    var o,
        a = e(this),
        r = e(n),
        s = e(t),
        l = e("body"),
        c = a.selector || "",
        u = new Date().getTime(),
        d = [],
        f = arguments[0],
        m = "string" == typeof f,
        g = [].slice.call(arguments, 1);return a.each(function () {
      var a,
          v,
          p,
          h,
          b,
          y,
          x = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.popup.settings, i) : e.extend({}, e.fn.popup.settings),
          C = x.selector,
          w = x.className,
          k = x.error,
          S = x.metadata,
          T = x.namespace,
          A = "." + x.namespace,
          R = "module-" + T,
          P = e(this),
          E = e(x.context),
          F = e(x.scrollContext),
          O = e(x.boundary),
          D = x.target ? e(x.target) : P,
          q = 0,
          j = !1,
          z = !1,
          I = this,
          M = P.data(R);y = { initialize: function initialize() {
          y.debug("Initializing", P), y.createID(), y.bind.events(), !y.exists() && x.preserve && y.create(), x.observeChanges && y.observeChanges(), y.instantiate();
        }, instantiate: function instantiate() {
          y.verbose("Storing instance", y), M = y, P.data(R, M);
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && (p = new MutationObserver(y.event.documentChanged), p.observe(n, { childList: !0, subtree: !0 }), y.debug("Setting up mutation observer", p));
        }, refresh: function refresh() {
          x.popup ? a = e(x.popup).eq(0) : x.inline && (a = D.nextAll(C.popup).eq(0), x.popup = a), x.popup ? (a.addClass(w.loading), v = y.get.offsetParent(), a.removeClass(w.loading), x.movePopup && y.has.popup() && y.get.offsetParent(a)[0] !== v[0] && (y.debug("Moving popup to the same offset parent as activating element"), a.detach().appendTo(v))) : v = x.inline ? y.get.offsetParent(D) : y.has.popup() ? y.get.offsetParent(a) : l, v.is("html") && v[0] !== l[0] && (y.debug("Setting page as offset parent"), v = l), y.get.variation() && y.set.variation();
        }, reposition: function reposition() {
          y.refresh(), y.set.position();
        }, destroy: function destroy() {
          y.debug("Destroying previous module"), p && p.disconnect(), a && !x.preserve && y.removePopup(), clearTimeout(y.hideTimer), clearTimeout(y.showTimer), y.unbind.close(), y.unbind.events(), P.removeData(R);
        }, event: { start: function start(t) {
            var n = e.isPlainObject(x.delay) ? x.delay.show : x.delay;clearTimeout(y.hideTimer), z || (y.showTimer = setTimeout(y.show, n));
          }, end: function end() {
            var t = e.isPlainObject(x.delay) ? x.delay.hide : x.delay;clearTimeout(y.showTimer), y.hideTimer = setTimeout(y.hide, t);
          }, touchstart: function touchstart(e) {
            z = !0, y.show();
          }, resize: function resize() {
            y.is.visible() && y.set.position();
          }, documentChanged: function documentChanged(t) {
            [].forEach.call(t, function (t) {
              t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                (t == I || e(t).find(I).length > 0) && (y.debug("Element removed from DOM, tearing down events"), y.destroy());
              });
            });
          }, hideGracefully: function hideGracefully(t) {
            var i = e(t.target),
                o = e.contains(n.documentElement, t.target),
                a = i.closest(C.popup).length > 0;t && !a && o ? (y.debug("Click occurred outside popup hiding popup"), y.hide()) : y.debug("Click was inside popup, keeping popup open");
          } }, create: function create() {
          var t = y.get.html(),
              n = y.get.title(),
              i = y.get.content();t || i || n ? (y.debug("Creating pop-up html"), t || (t = x.templates.popup({ title: n, content: i })), a = e("<div/>").addClass(w.popup).data(S.activator, P).html(t), x.inline ? (y.verbose("Inserting popup element inline", a), a.insertAfter(P)) : (y.verbose("Appending popup element to body", a), a.appendTo(E)), y.refresh(), y.set.variation(), x.hoverable && y.bind.popup(), x.onCreate.call(a, I)) : 0 !== D.next(C.popup).length ? (y.verbose("Pre-existing popup found"), x.inline = !0, x.popup = D.next(C.popup).data(S.activator, P), y.refresh(), x.hoverable && y.bind.popup()) : x.popup ? (e(x.popup).data(S.activator, P), y.verbose("Used popup specified in settings"), y.refresh(), x.hoverable && y.bind.popup()) : y.debug("No content specified skipping display", I);
        }, createID: function createID() {
          b = (Math.random().toString(16) + "000000000").substr(2, 8), h = "." + b, y.verbose("Creating unique id for element", b);
        }, toggle: function toggle() {
          y.debug("Toggling pop-up"), y.is.hidden() ? (y.debug("Popup is hidden, showing pop-up"), y.unbind.close(), y.show()) : (y.debug("Popup is visible, hiding pop-up"), y.hide());
        }, show: function show(e) {
          if (e = e || function () {}, y.debug("Showing pop-up", x.transition), y.is.hidden() && (!y.is.active() || !y.is.dropdown())) {
            if (y.exists() || y.create(), x.onShow.call(a, I) === !1) return void y.debug("onShow callback returned false, cancelling popup animation");x.preserve || x.popup || y.refresh(), a && y.set.position() && (y.save.conditions(), x.exclusive && y.hideAll(), y.animate.show(e));
          }
        }, hide: function hide(e) {
          if (e = e || function () {}, y.is.visible() || y.is.animating()) {
            if (x.onHide.call(a, I) === !1) return void y.debug("onHide callback returned false, cancelling popup animation");y.remove.visible(), y.unbind.close(), y.restore.conditions(), y.animate.hide(e);
          }
        }, hideAll: function hideAll() {
          e(C.popup).filter("." + w.visible).each(function () {
            e(this).data(S.activator).popup("hide");
          });
        }, exists: function exists() {
          return !!a && (x.inline || x.popup ? y.has.popup() : a.closest(E).length >= 1);
        }, removePopup: function removePopup() {
          y.has.popup() && !x.popup && (y.debug("Removing popup", a), a.remove(), a = void 0, x.onRemove.call(a, I));
        }, save: { conditions: function conditions() {
            y.cache = { title: P.attr("title") }, y.cache.title && P.removeAttr("title"), y.verbose("Saving original attributes", y.cache.title);
          } }, restore: { conditions: function conditions() {
            return y.cache && y.cache.title && (P.attr("title", y.cache.title), y.verbose("Restoring original attributes", y.cache.title)), !0;
          } }, supports: { svg: function svg() {
            return void 0 === (typeof SVGGraphicsElement === "undefined" ? "undefined" : _typeof(SVGGraphicsElement));
          } }, animate: { show: function show(t) {
            t = e.isFunction(t) ? t : function () {}, x.transition && void 0 !== e.fn.transition && P.transition("is supported") ? (y.set.visible(), a.transition({ animation: x.transition + " in", queue: !1, debug: x.debug, verbose: x.verbose, duration: x.duration, onComplete: function onComplete() {
                y.bind.close(), t.call(a, I), x.onVisible.call(a, I);
              } })) : y.error(k.noTransition);
          }, hide: function hide(t) {
            if (t = e.isFunction(t) ? t : function () {}, y.debug("Hiding pop-up"), x.onHide.call(a, I) === !1) return void y.debug("onHide callback returned false, cancelling popup animation");x.transition && void 0 !== e.fn.transition && P.transition("is supported") ? a.transition({ animation: x.transition + " out", queue: !1, duration: x.duration, debug: x.debug, verbose: x.verbose, onComplete: function onComplete() {
                y.reset(), t.call(a, I), x.onHidden.call(a, I);
              } }) : y.error(k.noTransition);
          } }, change: { content: function content(e) {
            a.html(e);
          } }, get: { html: function html() {
            return P.removeData(S.html), P.data(S.html) || x.html;
          }, title: function title() {
            return P.removeData(S.title), P.data(S.title) || x.title;
          }, content: function content() {
            return P.removeData(S.content), P.data(S.content) || P.attr("title") || x.content;
          }, variation: function variation() {
            return P.removeData(S.variation), P.data(S.variation) || x.variation;
          }, popup: function popup() {
            return a;
          }, popupOffset: function popupOffset() {
            return a.offset();
          }, calculations: function calculations() {
            var e,
                n = D[0],
                i = O[0] == t,
                o = x.inline || x.popup && x.movePopup ? D.position() : D.offset(),
                r = i ? { top: 0, left: 0 } : O.offset(),
                l = {},
                c = i ? { top: s.scrollTop(), left: s.scrollLeft() } : { top: 0, left: 0 };return l = { target: { element: D[0], width: D.outerWidth(), height: D.outerHeight(), top: o.top, left: o.left, margin: {} }, popup: { width: a.outerWidth(), height: a.outerHeight() }, parent: { width: v.outerWidth(), height: v.outerHeight() }, screen: { top: r.top, left: r.left, scroll: { top: c.top, left: c.left }, width: O.width(), height: O.height() } }, x.setFluidWidth && y.is.fluid() && (l.container = { width: a.parent().outerWidth() }, l.popup.width = l.container.width), l.target.margin.top = x.inline ? parseInt(t.getComputedStyle(n).getPropertyValue("margin-top"), 10) : 0, l.target.margin.left = x.inline ? y.is.rtl() ? parseInt(t.getComputedStyle(n).getPropertyValue("margin-right"), 10) : parseInt(t.getComputedStyle(n).getPropertyValue("margin-left"), 10) : 0, e = l.screen, l.boundary = { top: e.top + e.scroll.top, bottom: e.top + e.scroll.top + e.height, left: e.left + e.scroll.left, right: e.left + e.scroll.left + e.width }, l;
          }, id: function id() {
            return b;
          }, startEvent: function startEvent() {
            return "hover" == x.on ? "mouseenter" : "focus" == x.on && "focus";
          }, scrollEvent: function scrollEvent() {
            return "scroll";
          }, endEvent: function endEvent() {
            return "hover" == x.on ? "mouseleave" : "focus" == x.on && "blur";
          }, distanceFromBoundary: function distanceFromBoundary(e, t) {
            var n,
                i,
                o = {};return t = t || y.get.calculations(), n = t.popup, i = t.boundary, e && (o = { top: e.top - i.top, left: e.left - i.left, right: i.right - (e.left + n.width), bottom: i.bottom - (e.top + n.height) }, y.verbose("Distance from boundaries determined", e, o)), o;
          }, offsetParent: function offsetParent(t) {
            var n = void 0 !== t ? t[0] : P[0],
                i = n.parentNode,
                o = e(i);if (i) for (var a = "none" === o.css("transform"), r = "static" === o.css("position"), s = o.is("html"); i && !s && r && a;) {
              i = i.parentNode, o = e(i), a = "none" === o.css("transform"), r = "static" === o.css("position"), s = o.is("html");
            }return o && o.length > 0 ? o : e();
          }, positions: function positions() {
            return { "top left": !1, "top center": !1, "top right": !1, "bottom left": !1, "bottom center": !1, "bottom right": !1, "left center": !1, "right center": !1 };
          }, nextPosition: function nextPosition(e) {
            var t = e.split(" "),
                n = t[0],
                i = t[1],
                o = { top: "bottom", bottom: "top", left: "right", right: "left" },
                a = { left: "center", center: "right", right: "left" },
                r = { "top left": "top center", "top center": "top right", "top right": "right center", "right center": "bottom right", "bottom right": "bottom center", "bottom center": "bottom left", "bottom left": "left center", "left center": "top left" },
                s = "top" == n || "bottom" == n,
                l = !1,
                c = !1,
                u = !1;return j || (y.verbose("All available positions available"), j = y.get.positions()), y.debug("Recording last position tried", e), j[e] = !0, "opposite" === x.prefer && (u = [o[n], i], u = u.join(" "), l = j[u] === !0, y.debug("Trying opposite strategy", u)), "adjacent" === x.prefer && s && (u = [n, a[i]], u = u.join(" "), c = j[u] === !0, y.debug("Trying adjacent strategy", u)), (c || l) && (y.debug("Using backup position", u), u = r[e]), u;
          } }, set: { position: function position(e, t) {
            if (0 === D.length || 0 === a.length) return void y.error(k.notFound);var n, i, o, r, s, l, c, u;if (t = t || y.get.calculations(), e = e || P.data(S.position) || x.position, n = P.data(S.offset) || x.offset, i = x.distanceAway, o = t.target, r = t.popup, s = t.parent, 0 === o.width && 0 === o.height && !y.is.svg(o.element)) return y.debug("Popup target is hidden, no action taken"), !1;switch (x.inline && (y.debug("Adding margin to calculation", o.margin), "left center" == e || "right center" == e ? (n += o.margin.top, i += -o.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (n += o.margin.left, i -= o.margin.top) : (n += o.margin.left, i += o.margin.top)), y.debug("Determining popup position from calculations", e, t), y.is.rtl() && (e = e.replace(/left|right/g, function (e) {
              return "left" == e ? "right" : "left";
            }), y.debug("RTL: Popup position updated", e)), q == x.maxSearchDepth && "string" == typeof x.lastResort && (e = x.lastResort), e) {case "top left":
                l = { top: "auto", bottom: s.height - o.top + i, left: o.left + n, right: "auto" };break;case "top center":
                l = { bottom: s.height - o.top + i, left: o.left + o.width / 2 - r.width / 2 + n, top: "auto", right: "auto" };break;case "top right":
                l = { bottom: s.height - o.top + i, right: s.width - o.left - o.width - n, top: "auto", left: "auto" };break;case "left center":
                l = { top: o.top + o.height / 2 - r.height / 2 + n, right: s.width - o.left + i, left: "auto", bottom: "auto" };break;case "right center":
                l = { top: o.top + o.height / 2 - r.height / 2 + n, left: o.left + o.width + i, bottom: "auto", right: "auto" };break;case "bottom left":
                l = { top: o.top + o.height + i, left: o.left + n, bottom: "auto", right: "auto" };break;case "bottom center":
                l = { top: o.top + o.height + i, left: o.left + o.width / 2 - r.width / 2 + n, bottom: "auto", right: "auto" };break;case "bottom right":
                l = { top: o.top + o.height + i, right: s.width - o.left - o.width - n, left: "auto", bottom: "auto" };}if (void 0 === l && y.error(k.invalidPosition, e), y.debug("Calculated popup positioning values", l), a.css(l).removeClass(w.position).addClass(e).addClass(w.loading), c = y.get.popupOffset(), u = y.get.distanceFromBoundary(c, t), y.is.offstage(u, e)) {
              if (y.debug("Position is outside viewport", e), q < x.maxSearchDepth) return q++, e = y.get.nextPosition(e), y.debug("Trying new position", e), !!a && y.set.position(e, t);if (!x.lastResort) return y.debug("Popup could not find a position to display", a), y.error(k.cannotPlace, I), y.remove.attempts(), y.remove.loading(), y.reset(), x.onUnplaceable.call(a, I), !1;y.debug("No position found, showing with last position");
            }return y.debug("Position is on stage", e), y.remove.attempts(), y.remove.loading(), x.setFluidWidth && y.is.fluid() && y.set.fluidWidth(t), !0;
          }, fluidWidth: function fluidWidth(e) {
            e = e || y.get.calculations(), y.debug("Automatically setting element width to parent width", e.parent.width), a.css("width", e.container.width);
          }, variation: function variation(e) {
            (e = e || y.get.variation()) && y.has.popup() && (y.verbose("Adding variation to popup", e), a.addClass(e));
          }, visible: function visible() {
            P.addClass(w.visible);
          } }, remove: { loading: function loading() {
            a.removeClass(w.loading);
          }, variation: function variation(e) {
            (e = e || y.get.variation()) && (y.verbose("Removing variation", e), a.removeClass(e));
          }, visible: function visible() {
            P.removeClass(w.visible);
          }, attempts: function attempts() {
            y.verbose("Resetting all searched positions"), q = 0, j = !1;
          } }, bind: { events: function events() {
            y.debug("Binding popup events to module"), "click" == x.on && P.on("click" + A, y.toggle), "hover" == x.on && P.on("touchstart" + A, y.event.touchstart), y.get.startEvent() && P.on(y.get.startEvent() + A, y.event.start).on(y.get.endEvent() + A, y.event.end), x.target && y.debug("Target set to element", D), s.on("resize" + h, y.event.resize);
          }, popup: function popup() {
            y.verbose("Allowing hover events on popup to prevent closing"), a && y.has.popup() && a.on("mouseenter" + A, y.event.start).on("mouseleave" + A, y.event.end);
          }, close: function close() {
            (x.hideOnScroll === !0 || "auto" == x.hideOnScroll && "click" != x.on) && F.one(y.get.scrollEvent() + h, y.event.hideGracefully), "hover" == x.on && z && (y.verbose("Binding popup close event to document"), r.on("touchstart" + h, function (e) {
              y.verbose("Touched away from popup"), y.event.hideGracefully.call(I, e);
            })), "click" == x.on && x.closable && (y.verbose("Binding popup close event to document"), r.on("click" + h, function (e) {
              y.verbose("Clicked away from popup"), y.event.hideGracefully.call(I, e);
            }));
          } }, unbind: { events: function events() {
            s.off(h), P.off(A);
          }, close: function close() {
            r.off(h), F.off(h);
          } }, has: { popup: function popup() {
            return a && a.length > 0;
          } }, is: { offstage: function offstage(t, n) {
            var i = [];return e.each(t, function (e, t) {
              t < -x.jitter && (y.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e));
            }), i.length > 0;
          }, svg: function svg(e) {
            return y.supports.svg() && e instanceof SVGGraphicsElement;
          }, active: function active() {
            return P.hasClass(w.active);
          }, animating: function animating() {
            return void 0 !== a && a.hasClass(w.animating);
          }, fluid: function fluid() {
            return void 0 !== a && a.hasClass(w.fluid);
          }, visible: function visible() {
            return void 0 !== a && a.hasClass(w.visible);
          }, dropdown: function dropdown() {
            return P.hasClass(w.dropdown);
          }, hidden: function hidden() {
            return !y.is.visible();
          }, rtl: function rtl() {
            return "rtl" == P.css("direction");
          } }, reset: function reset() {
          y.remove.visible(), x.preserve ? void 0 !== e.fn.transition && a.transition("remove transition") : y.removePopup();
        }, setting: function setting(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, x, t);else {
            if (void 0 === n) return x[t];x[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, y, t);else {
            if (void 0 === n) return y[t];y[t] = n;
          }
        }, debug: function debug() {
          !x.silent && x.debug && (x.performance ? y.performance.log(arguments) : (y.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), y.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !x.silent && x.verbose && x.debug && (x.performance ? y.performance.log(arguments) : (y.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), y.verbose.apply(console, arguments)));
        }, error: function error() {
          x.silent || (y.error = Function.prototype.bind.call(console.error, console, x.name + ":"), y.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;x.performance && (t = new Date().getTime(), i = u || t, n = t - i, u = t, d.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: I, "Execution Time": n })), clearTimeout(y.performance.timer), y.performance.timer = setTimeout(y.performance.display, 500);
          }, display: function display() {
            var t = x.name + ":",
                n = 0;u = !1, clearTimeout(y.performance.timer), e.each(d, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", c && (t += " '" + c + "'"), (void 0 !== console.group || void 0 !== console.table) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), d = [];
          } }, invoke: function invoke(t, n, i) {
          var a,
              r,
              s,
              l = M;return n = n || g, i = I || i, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] && (r = l[i], !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(i, n) : void 0 !== r && (s = r), e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s), r;
        } }, m ? (void 0 === M && y.initialize(), y.invoke(f)) : (void 0 !== M && M.invoke("destroy"), y.initialize());
    }), void 0 !== o ? o : this;
  }, e.fn.popup.settings = { name: "Popup", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "popup", observeChanges: !0, onCreate: function onCreate() {}, onRemove: function onRemove() {}, onShow: function onShow() {}, onVisible: function onVisible() {}, onHide: function onHide() {}, onUnplaceable: function onUnplaceable() {}, onHidden: function onHidden() {}, on: "hover", boundary: t, addTouchEvents: !0, position: "top left", variation: "", movePopup: !0, target: !1, popup: !1, inline: !1, preserve: !1, hoverable: !1, content: !1, html: !1, title: !1, closable: !0, hideOnScroll: "auto", exclusive: !1, context: "body", scrollContext: t, prefer: "opposite", lastResort: !1, delay: { show: 50, hide: 70 }, setFluidWidth: !0, duration: 200, transition: "scale", distanceAway: 0, jitter: 2, offset: 0, maxSearchDepth: 15, error: { invalidPosition: "The position you specified is not a valid position", cannotPlace: "Popup does not fit within the boundaries of the viewport", method: "The method you called is not defined.", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>", notFound: "The target or popup you specified does not exist on the page" }, metadata: { activator: "activator", content: "content", html: "html", offset: "offset", position: "position", title: "title", variation: "variation" }, className: { active: "active", animating: "animating", dropdown: "dropdown", fluid: "fluid", loading: "loading", popup: "ui popup", position: "top left center bottom right", visible: "visible" }, selector: { popup: ".ui.popup" }, templates: { escape: function escape(e) {
        var t = /[&<>"'`]/,
            n = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            i = function i(e) {
          return n[e];
        };return t.test(e) ? e.replace(/[&<>"'`]/g, i) : e;
      }, popup: function popup(t) {
        var n = "",
            i = e.fn.popup.settings.templates.escape;return void 0 !== (typeof t === "undefined" ? "undefined" : _typeof(t)) && (void 0 !== _typeof(t.title) && t.title && (t.title = i(t.title), n += '<div class="header">' + t.title + "</div>"), void 0 !== _typeof(t.content) && t.content && (t.content = i(t.content), n += '<div class="content">' + t.content + "</div>")), n;
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();void 0 !== t && t.Math == Math || ("undefined" != typeof self && self.Math == Math ? self : Function("return this")());e.fn.progress = function (t) {
    var i,
        o = e(this),
        a = o.selector || "",
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);return o.each(function () {
      var o,
          d,
          f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.progress.settings, t) : e.extend({}, e.fn.progress.settings),
          m = f.className,
          g = f.metadata,
          v = f.namespace,
          p = f.selector,
          h = f.error,
          b = "." + v,
          y = "module-" + v,
          x = e(this),
          C = e(this).find(p.bar),
          w = e(this).find(p.progress),
          k = e(this).find(p.label),
          S = this,
          T = x.data(y),
          A = !1;d = { initialize: function initialize() {
          d.debug("Initializing progress bar", f), d.set.duration(), d.set.transitionEvent(), d.read.metadata(), d.read.settings(), d.instantiate();
        }, instantiate: function instantiate() {
          d.verbose("Storing instance of progress", d), T = d, x.data(y, d);
        }, destroy: function destroy() {
          d.verbose("Destroying previous progress for", x), clearInterval(T.interval), d.remove.state(), x.removeData(y), T = void 0;
        }, reset: function reset() {
          d.remove.nextValue(), d.update.progress(0);
        }, complete: function complete() {
          (void 0 === d.percent || d.percent < 100) && (d.remove.progressPoll(), d.set.percent(100));
        }, read: { metadata: function metadata() {
            var e = { percent: x.data(g.percent), total: x.data(g.total), value: x.data(g.value) };e.percent && (d.debug("Current percent value set from metadata", e.percent), d.set.percent(e.percent)), e.total && (d.debug("Total value set from metadata", e.total), d.set.total(e.total)), e.value && (d.debug("Current value set from metadata", e.value), d.set.value(e.value), d.set.progress(e.value));
          }, settings: function settings() {
            f.total !== !1 && (d.debug("Current total set in settings", f.total), d.set.total(f.total)), f.value !== !1 && (d.debug("Current value set in settings", f.value), d.set.value(f.value), d.set.progress(d.value)), f.percent !== !1 && (d.debug("Current percent set in settings", f.percent), d.set.percent(f.percent));
          } }, bind: { transitionEnd: function transitionEnd(e) {
            var t = d.get.transitionEnd();C.one(t + b, function (t) {
              clearTimeout(d.failSafeTimer), e.call(this, t);
            }), d.failSafeTimer = setTimeout(function () {
              C.triggerHandler(t);
            }, f.duration + f.failSafeDelay), d.verbose("Adding fail safe timer", d.timer);
          } }, increment: function increment(e) {
          var t, n;d.has.total() ? (t = d.get.value(), e = e || 1, n = t + e) : (t = d.get.percent(), e = e || d.get.randomValue(), n = t + e, 100, d.debug("Incrementing percentage by", t, n)), n = d.get.normalizedValue(n), d.set.progress(n);
        }, decrement: function decrement(e) {
          var t,
              n,
              i = d.get.total();i ? (t = d.get.value(), e = e || 1, n = t - e, d.debug("Decrementing value by", e, t)) : (t = d.get.percent(), e = e || d.get.randomValue(), n = t - e, d.debug("Decrementing percentage by", e, t)), n = d.get.normalizedValue(n), d.set.progress(n);
        }, has: { progressPoll: function progressPoll() {
            return d.progressPoll;
          }, total: function total() {
            return d.get.total() !== !1;
          } }, get: { text: function text(e) {
            var t = d.value || 0,
                n = d.total || 0,
                i = A ? d.get.displayPercent() : d.percent || 0,
                o = d.total > 0 ? n - t : 100 - i;return e = e || "", e = e.replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i), d.verbose("Adding variables to progress bar text", e), e;
          }, normalizedValue: function normalizedValue(e) {
            if (e < 0) return d.debug("Value cannot decrement below 0"), 0;if (d.has.total()) {
              if (e > d.total) return d.debug("Value cannot increment above total", d.total), d.total;
            } else if (e > 100) return d.debug("Value cannot increment above 100 percent"), 100;return e;
          }, updateInterval: function updateInterval() {
            return "auto" == f.updateInterval ? f.duration : f.updateInterval;
          }, randomValue: function randomValue() {
            return d.debug("Generating random increment percentage"), Math.floor(Math.random() * f.random.max + f.random.min);
          }, numericValue: function numericValue(e) {
            return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") && +e.replace(/[^\d.]/g, "") : e;
          }, transitionEnd: function transitionEnd() {
            var e,
                t = n.createElement("element"),
                i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (e in i) {
              if (void 0 !== t.style[e]) return i[e];
            }
          }, displayPercent: function displayPercent() {
            var e = C.width(),
                t = x.width(),
                n = parseInt(C.css("min-width"), 10),
                i = e > n ? e / t * 100 : d.percent;return f.precision > 0 ? Math.round(i * (10 * f.precision)) / (10 * f.precision) : Math.round(i);
          }, percent: function percent() {
            return d.percent || 0;
          }, value: function value() {
            return d.nextValue || d.value || 0;
          }, total: function total() {
            return d.total || !1;
          } }, create: { progressPoll: function progressPoll() {
            d.progressPoll = setTimeout(function () {
              d.update.toNextValue(), d.remove.progressPoll();
            }, d.get.updateInterval());
          } }, is: { complete: function complete() {
            return d.is.success() || d.is.warning() || d.is.error();
          }, success: function success() {
            return x.hasClass(m.success);
          }, warning: function warning() {
            return x.hasClass(m.warning);
          }, error: function error() {
            return x.hasClass(m.error);
          }, active: function active() {
            return x.hasClass(m.active);
          }, visible: function visible() {
            return x.is(":visible");
          } }, remove: { progressPoll: function progressPoll() {
            d.verbose("Removing progress poll timer"), d.progressPoll && (clearTimeout(d.progressPoll), delete d.progressPoll);
          }, nextValue: function nextValue() {
            d.verbose("Removing progress value stored for next update"), delete d.nextValue;
          }, state: function state() {
            d.verbose("Removing stored state"), delete d.total, delete d.percent, delete d.value;
          }, active: function active() {
            d.verbose("Removing active state"), x.removeClass(m.active);
          }, success: function success() {
            d.verbose("Removing success state"), x.removeClass(m.success);
          }, warning: function warning() {
            d.verbose("Removing warning state"), x.removeClass(m.warning);
          }, error: function error() {
            d.verbose("Removing error state"), x.removeClass(m.error);
          } }, set: { barWidth: function barWidth(e) {
            e > 100 ? d.error(h.tooHigh, e) : e < 0 ? d.error(h.tooLow, e) : (C.css("width", e + "%"), x.attr("data-percent", parseInt(e, 10)));
          }, duration: function duration(e) {
            e = e || f.duration, e = "number" == typeof e ? e + "ms" : e, d.verbose("Setting progress bar transition duration", e), C.css({ "transition-duration": e });
          }, percent: function percent(e) {
            e = "string" == typeof e ? +e.replace("%", "") : e, e = f.precision > 0 ? Math.round(e * (10 * f.precision)) / (10 * f.precision) : Math.round(e), d.percent = e, d.has.total() || (d.value = f.precision > 0 ? Math.round(e / 100 * d.total * (10 * f.precision)) / (10 * f.precision) : Math.round(e / 100 * d.total * 10) / 10, f.limitValues && (d.value = d.value > 100 ? 100 : d.value < 0 ? 0 : d.value)), d.set.barWidth(e), d.set.labelInterval(), d.set.labels(), f.onChange.call(S, e, d.value, d.total);
          }, labelInterval: function labelInterval() {
            var t = function t() {
              d.verbose("Bar finished animating, removing continuous label updates"), clearInterval(d.interval), A = !1, d.set.labels();
            };clearInterval(d.interval), d.bind.transitionEnd(t), A = !0, d.interval = setInterval(function () {
              e.contains(n.documentElement, S) || (clearInterval(d.interval), A = !1), d.set.labels();
            }, f.framerate);
          }, labels: function labels() {
            d.verbose("Setting both bar progress and outer label text"), d.set.barLabel(), d.set.state();
          }, label: function label(e) {
            (e = e || "") && (e = d.get.text(e), d.verbose("Setting label to text", e), k.text(e));
          }, state: function state(e) {
            e = void 0 !== e ? e : d.percent, 100 === e ? f.autoSuccess && !(d.is.warning() || d.is.error() || d.is.success()) ? (d.set.success(), d.debug("Automatically triggering success at 100%")) : (d.verbose("Reached 100% removing active state"), d.remove.active(), d.remove.progressPoll()) : e > 0 ? (d.verbose("Adjusting active progress bar label", e), d.set.active()) : (d.remove.active(), d.set.label(f.text.active));
          }, barLabel: function barLabel(e) {
            void 0 !== e ? w.text(d.get.text(e)) : "ratio" == f.label && d.total ? (d.verbose("Adding ratio to bar label"), w.text(d.get.text(f.text.ratio))) : "percent" == f.label && (d.verbose("Adding percentage to bar label"), w.text(d.get.text(f.text.percent)));
          }, active: function active(e) {
            e = e || f.text.active, d.debug("Setting active state"), f.showActivity && !d.is.active() && x.addClass(m.active), d.remove.warning(), d.remove.error(), d.remove.success(), e = f.onLabelUpdate("active", e, d.value, d.total), e && d.set.label(e), d.bind.transitionEnd(function () {
              f.onActive.call(S, d.value, d.total);
            });
          }, success: function success(e) {
            e = e || f.text.success || f.text.active, d.debug("Setting success state"), x.addClass(m.success), d.remove.active(), d.remove.warning(), d.remove.error(), d.complete(), f.text.success ? (e = f.onLabelUpdate("success", e, d.value, d.total), d.set.label(e)) : (e = f.onLabelUpdate("active", e, d.value, d.total), d.set.label(e)), d.bind.transitionEnd(function () {
              f.onSuccess.call(S, d.total);
            });
          }, warning: function warning(e) {
            e = e || f.text.warning, d.debug("Setting warning state"), x.addClass(m.warning), d.remove.active(), d.remove.success(), d.remove.error(), d.complete(), e = f.onLabelUpdate("warning", e, d.value, d.total), e && d.set.label(e), d.bind.transitionEnd(function () {
              f.onWarning.call(S, d.value, d.total);
            });
          }, error: function error(e) {
            e = e || f.text.error, d.debug("Setting error state"), x.addClass(m.error), d.remove.active(), d.remove.success(), d.remove.warning(), d.complete(), e = f.onLabelUpdate("error", e, d.value, d.total), e && d.set.label(e), d.bind.transitionEnd(function () {
              f.onError.call(S, d.value, d.total);
            });
          }, transitionEvent: function transitionEvent() {
            o = d.get.transitionEnd();
          }, total: function total(e) {
            d.total = e;
          }, value: function value(e) {
            d.value = e;
          }, progress: function progress(e) {
            d.has.progressPoll() ? (d.debug("Updated within interval, setting next update to use new value", e), d.set.nextValue(e)) : (d.debug("First update in progress update interval, immediately updating", e), d.update.progress(e), d.create.progressPoll());
          }, nextValue: function nextValue(e) {
            d.nextValue = e;
          } }, update: { toNextValue: function toNextValue() {
            var e = d.nextValue;e && (d.debug("Update interval complete using last updated value", e), d.update.progress(e), d.remove.nextValue());
          }, progress: function progress(e) {
            var t;e = d.get.numericValue(e), e === !1 && d.error(h.nonNumeric, e), e = d.get.normalizedValue(e), d.has.total() ? (d.set.value(e), t = e / d.total * 100, d.debug("Calculating percent complete from total", t), d.set.percent(t)) : (t = e, d.debug("Setting value to exact percentage value", t), d.set.percent(t));
          } }, setting: function setting(t, n) {
          if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (void 0 === n) return f[t];e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, d, t);else {
            if (void 0 === n) return d[t];d[t] = n;
          }
        }, debug: function debug() {
          !f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)));
        }, error: function error() {
          f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;f.performance && (t = new Date().getTime(), i = r || t, n = t - i, r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: S, "Execution Time": n })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500);
          }, display: function display() {
            var t = f.name + ":",
                n = 0;r = !1, clearTimeout(d.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", a && (t += " '" + a + "'"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function invoke(t, n, o) {
          var a,
              r,
              s,
              l = T;return n = n || u, o = S || o, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] ? (r = l[i], !1) : (d.error(h.method, t), !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(o, n) : void 0 !== r && (s = r), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), r;
        } }, c ? (void 0 === T && d.initialize(), d.invoke(l)) : (void 0 !== T && T.invoke("destroy"), d.initialize());
    }), void 0 !== i ? i : this;
  }, e.fn.progress.settings = { name: "Progress", namespace: "progress", silent: !1, debug: !1, verbose: !1, performance: !0, random: { min: 2, max: 5 }, duration: 300, updateInterval: "auto", autoSuccess: !0, showActivity: !0, limitValues: !0, label: "percent", precision: 0, framerate: 1e3 / 30, percent: !1, total: !1, value: !1, failSafeDelay: 100, onLabelUpdate: function onLabelUpdate(e, t, n, i) {
      return t;
    }, onChange: function onChange(e, t, n) {}, onSuccess: function onSuccess(e) {}, onActive: function onActive(e, t) {}, onError: function onError(e, t) {}, onWarning: function onWarning(e, t) {}, error: { method: "The method you called is not defined.", nonNumeric: "Progress value is non numeric", tooHigh: "Value specified is above 100%", tooLow: "Value specified is below 0%" }, regExp: { variable: /\{\$*[A-z0-9]+\}/g }, metadata: { percent: "percent", total: "total", value: "value" }, selector: { bar: "> .bar", label: "> .label", progress: ".bar > .progress" }, text: { active: !1, error: !1, success: !1, warning: !1, percent: "{percent}%", ratio: "{value} of {total}" }, className: { active: "active", error: "error", success: "success", warning: "warning" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.rating = function (t) {
    var n,
        i = e(this),
        o = i.selector || "",
        a = new Date().getTime(),
        r = [],
        s = arguments[0],
        l = "string" == typeof s,
        c = [].slice.call(arguments, 1);return i.each(function () {
      var u,
          d,
          f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.rating.settings, t) : e.extend({}, e.fn.rating.settings),
          m = f.namespace,
          g = f.className,
          v = f.metadata,
          p = f.selector,
          h = (f.error, "." + m),
          b = "module-" + m,
          y = this,
          x = e(this).data(b),
          C = e(this),
          w = C.find(p.icon);d = { initialize: function initialize() {
          d.verbose("Initializing rating module", f), 0 === w.length && d.setup.layout(), f.interactive ? d.enable() : d.disable(), d.set.initialLoad(), d.set.rating(d.get.initialRating()), d.remove.initialLoad(), d.instantiate();
        }, instantiate: function instantiate() {
          d.verbose("Instantiating module", f), x = d, C.data(b, d);
        }, destroy: function destroy() {
          d.verbose("Destroying previous instance", x), d.remove.events(), C.removeData(b);
        }, refresh: function refresh() {
          w = C.find(p.icon);
        }, setup: { layout: function layout() {
            var t = d.get.maxRating(),
                n = e.fn.rating.settings.templates.icon(t);d.debug("Generating icon html dynamically"), C.html(n), d.refresh();
          } }, event: { mouseenter: function mouseenter() {
            var t = e(this);t.nextAll().removeClass(g.selected), C.addClass(g.selected), t.addClass(g.selected).prevAll().addClass(g.selected);
          }, mouseleave: function mouseleave() {
            C.removeClass(g.selected), w.removeClass(g.selected);
          }, click: function click() {
            var t = e(this),
                n = d.get.rating(),
                i = w.index(t) + 1;("auto" == f.clearable ? 1 === w.length : f.clearable) && n == i ? d.clearRating() : d.set.rating(i);
          } }, clearRating: function clearRating() {
          d.debug("Clearing current rating"), d.set.rating(0);
        }, bind: { events: function events() {
            d.verbose("Binding events"), C.on("mouseenter" + h, p.icon, d.event.mouseenter).on("mouseleave" + h, p.icon, d.event.mouseleave).on("click" + h, p.icon, d.event.click);
          } }, remove: { events: function events() {
            d.verbose("Removing events"), C.off(h);
          }, initialLoad: function initialLoad() {
            u = !1;
          } }, enable: function enable() {
          d.debug("Setting rating to interactive mode"), d.bind.events(), C.removeClass(g.disabled);
        }, disable: function disable() {
          d.debug("Setting rating to read-only mode"), d.remove.events(), C.addClass(g.disabled);
        }, is: { initialLoad: function initialLoad() {
            return u;
          } }, get: { initialRating: function initialRating() {
            return void 0 !== C.data(v.rating) ? (C.removeData(v.rating), C.data(v.rating)) : f.initialRating;
          }, maxRating: function maxRating() {
            return void 0 !== C.data(v.maxRating) ? (C.removeData(v.maxRating), C.data(v.maxRating)) : f.maxRating;
          }, rating: function rating() {
            var e = w.filter("." + g.active).length;return d.verbose("Current rating retrieved", e), e;
          } }, set: { rating: function rating(e) {
            var t = e - 1 >= 0 ? e - 1 : 0,
                n = w.eq(t);C.removeClass(g.selected), w.removeClass(g.selected).removeClass(g.active), e > 0 && (d.verbose("Setting current rating to", e), n.prevAll().addBack().addClass(g.active)), d.is.initialLoad() || f.onRate.call(y, e);
          }, initialLoad: function initialLoad() {
            u = !0;
          } }, setting: function setting(t, n) {
          if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (void 0 === n) return f[t];e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, d, t);else {
            if (void 0 === n) return d[t];d[t] = n;
          }
        }, debug: function debug() {
          !f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)));
        }, error: function error() {
          f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;f.performance && (t = new Date().getTime(), i = a || t, n = t - i, a = t, r.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: y, "Execution Time": n })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500);
          }, display: function display() {
            var t = f.name + ":",
                n = 0;a = !1, clearTimeout(d.performance.timer), e.each(r, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", o && (t += " '" + o + "'"), i.length > 1 && (t += " (" + i.length + ")"), (void 0 !== console.group || void 0 !== console.table) && r.length > 0 && (console.groupCollapsed(t), console.table ? console.table(r) : e.each(r, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), r = [];
          } }, invoke: function invoke(t, i, o) {
          var a,
              r,
              s,
              l = x;return i = i || c, o = y || o, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] && (r = l[i], !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(o, i) : void 0 !== r && (s = r), e.isArray(n) ? n.push(s) : void 0 !== n ? n = [n, s] : void 0 !== s && (n = s), r;
        } }, l ? (void 0 === x && d.initialize(), d.invoke(s)) : (void 0 !== x && x.invoke("destroy"), d.initialize());
    }), void 0 !== n ? n : this;
  }, e.fn.rating.settings = { name: "Rating", namespace: "rating", slent: !1, debug: !1, verbose: !1, performance: !0, initialRating: 0, interactive: !0, maxRating: 4, clearable: "auto", fireOnInit: !1, onRate: function onRate(e) {}, error: { method: "The method you called is not defined", noMaximum: "No maximum rating specified. Cannot generate HTML automatically" }, metadata: { rating: "rating", maxRating: "maxRating" }, className: { active: "active", disabled: "disabled", selected: "selected", loading: "loading" }, selector: { icon: ".icon" }, templates: { icon: function icon(e) {
        for (var t = 1, n = ""; t <= e;) {
          n += '<i class="icon"></i>', t++;
        }return n;
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.search = function (i) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return e(this).each(function () {
      var f,
          m = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.search.settings, i) : e.extend({}, e.fn.search.settings),
          g = m.className,
          v = m.metadata,
          p = m.regExp,
          h = m.fields,
          b = m.selector,
          y = m.error,
          x = m.namespace,
          C = "." + x,
          w = x + "-module",
          k = e(this),
          S = k.find(b.prompt),
          T = k.find(b.searchButton),
          A = k.find(b.results),
          R = k.find(b.result),
          P = k.find(b.category),
          E = this,
          F = k.data(w),
          O = !1,
          D = !1;f = { initialize: function initialize() {
          f.verbose("Initializing module"), f.determine.searchFields(), f.bind.events(), f.set.type(), f.create.results(), f.instantiate();
        }, instantiate: function instantiate() {
          f.verbose("Storing instance of module", f), F = f, k.data(w, f);
        }, destroy: function destroy() {
          f.verbose("Destroying instance"), k.off(C).removeData(w);
        }, refresh: function refresh() {
          f.debug("Refreshing selector cache"), S = k.find(b.prompt), T = k.find(b.searchButton), P = k.find(b.category), A = k.find(b.results), R = k.find(b.result);
        }, refreshResults: function refreshResults() {
          A = k.find(b.results), R = k.find(b.result);
        }, bind: { events: function events() {
            f.verbose("Binding events to search"), m.automatic && (k.on(f.get.inputEvent() + C, b.prompt, f.event.input), S.attr("autocomplete", "off")), k.on("focus" + C, b.prompt, f.event.focus).on("blur" + C, b.prompt, f.event.blur).on("keydown" + C, b.prompt, f.handleKeyboard).on("click" + C, b.searchButton, f.query).on("mousedown" + C, b.results, f.event.result.mousedown).on("mouseup" + C, b.results, f.event.result.mouseup).on("click" + C, b.result, f.event.result.click);
          } }, determine: { searchFields: function searchFields() {
            i && void 0 !== i.searchFields && (m.searchFields = i.searchFields);
          } }, event: { input: function input() {
            clearTimeout(f.timer), f.timer = setTimeout(f.query, m.searchDelay);
          }, focus: function focus() {
            f.set.focus(), m.searchOnFocus && f.has.minimumCharacters() && f.query(function () {
              f.can.show() && f.showResults();
            });
          }, blur: function blur(e) {
            var t = n.activeElement === this,
                i = function i() {
              f.cancel.query(), f.remove.focus(), f.timer = setTimeout(f.hideResults, m.hideDelay);
            };t || (D = !1, f.resultsClicked ? (f.debug("Determining if user action caused search to close"), k.one("click.close" + C, b.results, function (e) {
              if (f.is.inMessage(e) || O) return void S.focus();O = !1, f.is.animating() || f.is.hidden() || i();
            })) : (f.debug("Input blurred without user action, closing results"), i()));
          }, result: { mousedown: function mousedown() {
              f.resultsClicked = !0;
            }, mouseup: function mouseup() {
              f.resultsClicked = !1;
            }, click: function click(n) {
              f.debug("Search result selected");var i = e(this),
                  o = i.find(b.title).eq(0),
                  a = i.is("a[href]") ? i : i.find("a[href]").eq(0),
                  r = a.attr("href") || !1,
                  s = a.attr("target") || !1,
                  l = (o.html(), o.length > 0 && o.text()),
                  c = f.get.results(),
                  u = i.data(v.result) || f.get.result(l, c);if (e.isFunction(m.onSelect) && m.onSelect.call(E, u, c) === !1) return f.debug("Custom onSelect callback cancelled default select action"), void (O = !0);f.hideResults(), l && f.set.value(l), r && (f.verbose("Opening search link found in result", a), "_blank" == s || n.ctrlKey ? t.open(r) : t.location.href = r);
            } } }, handleKeyboard: function handleKeyboard(e) {
          var t,
              n = k.find(b.result),
              i = k.find(b.category),
              o = n.filter("." + g.active),
              a = n.index(o),
              r = n.length,
              s = o.length > 0,
              l = e.which,
              c = { backspace: 8, enter: 13, escape: 27, upArrow: 38, downArrow: 40 };if (l == c.escape && (f.verbose("Escape key pressed, blurring search field"), f.hideResults(), D = !0), f.is.visible()) {
            if (l == c.enter) {
              if (f.verbose("Enter key pressed, selecting active result"), n.filter("." + g.active).length > 0) return f.event.result.click.call(n.filter("." + g.active), e), e.preventDefault(), !1;
            } else l == c.upArrow && s ? (f.verbose("Up key pressed, changing active result"), t = a - 1 < 0 ? a : a - 1, i.removeClass(g.active), n.removeClass(g.active).eq(t).addClass(g.active).closest(i).addClass(g.active), e.preventDefault()) : l == c.downArrow && (f.verbose("Down key pressed, changing active result"), t = a + 1 >= r ? a : a + 1, i.removeClass(g.active), n.removeClass(g.active).eq(t).addClass(g.active).closest(i).addClass(g.active), e.preventDefault());
          } else l == c.enter && (f.verbose("Enter key pressed, executing query"), f.query(), f.set.buttonPressed(), S.one("keyup", f.remove.buttonFocus));
        }, setup: { api: function api(t, n) {
            var i = { debug: m.debug, on: !1, cache: !0, action: "search", urlData: { query: t }, onSuccess: function onSuccess(e) {
                f.parse.response.call(E, e, t), n();
              }, onFailure: function onFailure() {
                f.displayMessage(y.serverError), n();
              }, onAbort: function onAbort(e) {}, onError: f.error };e.extend(!0, i, m.apiSettings), f.verbose("Setting up API request", i), k.api(i);
          } }, can: { useAPI: function useAPI() {
            return void 0 !== e.fn.api;
          }, show: function show() {
            return f.is.focused() && !f.is.visible() && !f.is.empty();
          }, transition: function transition() {
            return m.transition && void 0 !== e.fn.transition && k.transition("is supported");
          } }, is: { animating: function animating() {
            return A.hasClass(g.animating);
          }, hidden: function hidden() {
            return A.hasClass(g.hidden);
          }, inMessage: function inMessage(t) {
            if (t.target) {
              var i = e(t.target);return e.contains(n.documentElement, t.target) && i.closest(b.message).length > 0;
            }
          }, empty: function empty() {
            return "" === A.html();
          }, visible: function visible() {
            return A.filter(":visible").length > 0;
          }, focused: function focused() {
            return S.filter(":focus").length > 0;
          } }, get: { inputEvent: function inputEvent() {
            var e = S[0];return void 0 !== e && void 0 !== e.oninput ? "input" : void 0 !== e && void 0 !== e.onpropertychange ? "propertychange" : "keyup";
          }, value: function value() {
            return S.val();
          }, results: function results() {
            return k.data(v.results);
          }, result: function result(t, n) {
            var i = ["title", "id"],
                o = !1;return t = void 0 !== t ? t : f.get.value(), n = void 0 !== n ? n : f.get.results(), "category" === m.type ? (f.debug("Finding result that matches", t), e.each(n, function (n, a) {
              if (e.isArray(a.results) && (o = f.search.object(t, a.results, i)[0])) return !1;
            })) : (f.debug("Finding result in results object", t), o = f.search.object(t, n, i)[0]), o || !1;
          } }, select: { firstResult: function firstResult() {
            f.verbose("Selecting first result"), R.first().addClass(g.active);
          } }, set: { focus: function focus() {
            k.addClass(g.focus);
          }, loading: function loading() {
            k.addClass(g.loading);
          }, value: function value(e) {
            f.verbose("Setting search input value", e), S.val(e);
          }, type: function type(e) {
            e = e || m.type, "category" == m.type && k.addClass(m.type);
          }, buttonPressed: function buttonPressed() {
            T.addClass(g.pressed);
          } }, remove: { loading: function loading() {
            k.removeClass(g.loading);
          }, focus: function focus() {
            k.removeClass(g.focus);
          }, buttonPressed: function buttonPressed() {
            T.removeClass(g.pressed);
          } }, query: function query(t) {
          t = e.isFunction(t) ? t : function () {};var n = f.get.value(),
              i = f.read.cache(n);t = t || function () {}, f.has.minimumCharacters() ? (i ? (f.debug("Reading result from cache", n), f.save.results(i.results), f.addResults(i.html), f.inject.id(i.results), t()) : (f.debug("Querying for", n), e.isPlainObject(m.source) || e.isArray(m.source) ? (f.search.local(n), t()) : f.can.useAPI() ? f.search.remote(n, t) : (f.error(y.source), t())), m.onSearchQuery.call(E, n)) : f.hideResults();
        }, search: { local: function local(e) {
            var t,
                n = f.search.object(e, m.content);f.set.loading(), f.save.results(n), f.debug("Returned local search results", n), t = f.generateResults({ results: n }), f.remove.loading(), f.addResults(t), f.inject.id(n), f.write.cache(e, { html: t, results: n });
          }, remote: function remote(t, n) {
            n = e.isFunction(n) ? n : function () {}, k.api("is loading") && k.api("abort"), f.setup.api(t, n), k.api("query");
          }, object: function object(t, n, i) {
            var o = [],
                a = [],
                r = t.toString().replace(p.escape, "\\$&"),
                s = new RegExp(p.beginsWith + r, "i"),
                l = function l(t, n) {
              var i = e.inArray(n, o) == -1,
                  r = e.inArray(n, a) == -1;i && r && t.push(n);
            };return n = n || m.source, i = void 0 !== i ? i : m.searchFields, e.isArray(i) || (i = [i]), void 0 === n || n === !1 ? (f.error(y.source), []) : (e.each(i, function (i, r) {
              e.each(n, function (e, n) {
                "string" == typeof n[r] && (n[r].search(s) !== -1 ? l(o, n) : m.searchFullText && f.fuzzySearch(t, n[r]) && l(a, n));
              });
            }), e.merge(o, a));
          } }, fuzzySearch: function fuzzySearch(e, t) {
          var n = t.length,
              i = e.length;if ("string" != typeof e) return !1;if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;if (i === n) return e === t;e: for (var o = 0, a = 0; o < i; o++) {
            for (var r = e.charCodeAt(o); a < n;) {
              if (t.charCodeAt(a++) === r) continue e;
            }return !1;
          }return !0;
        }, parse: { response: function response(e, t) {
            var n = f.generateResults(e);f.verbose("Parsing server response", e), void 0 !== e && void 0 !== t && void 0 !== e[h.results] && (f.addResults(n), f.inject.id(e[h.results]), f.write.cache(t, { html: n, results: e[h.results] }), f.save.results(e[h.results]));
          } }, cancel: { query: function query() {
            f.can.useAPI() && k.api("abort");
          } }, has: { minimumCharacters: function minimumCharacters() {
            return f.get.value().length >= m.minCharacters;
          }, results: function results() {
            return 0 !== A.length && "" != A.html();
          } }, clear: { cache: function cache(e) {
            var t = k.data(v.cache);e ? e && t && t[e] && (f.debug("Removing value from cache", e), delete t[e], k.data(v.cache, t)) : (f.debug("Clearing cache", e), k.removeData(v.cache));
          } }, read: { cache: function cache(e) {
            var t = k.data(v.cache);return !!m.cache && (f.verbose("Checking cache for generated html for query", e), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && void 0 !== t[e] && t[e]);
          } }, create: { id: function id(e, t) {
            var n,
                i,
                o = e + 1;return void 0 !== t ? (n = String.fromCharCode(97 + t), i = n + o, f.verbose("Creating category result id", i)) : (i = o, f.verbose("Creating result id", i)), i;
          }, results: function results() {
            0 === A.length && (A = e("<div />").addClass(g.results).appendTo(k));
          } }, inject: { result: function result(e, t, n) {
            f.verbose("Injecting result into results");var i = void 0 !== n ? A.children().eq(n).children(b.result).eq(t) : A.children(b.result).eq(t);f.verbose("Injecting results metadata", i), i.data(v.result, e);
          }, id: function id(t) {
            f.debug("Injecting unique ids into results");var n = 0,
                i = 0;return "category" === m.type ? e.each(t, function (t, o) {
              i = 0, e.each(o.results, function (e, t) {
                var a = o.results[e];void 0 === a.id && (a.id = f.create.id(i, n)), f.inject.result(a, i, n), i++;
              }), n++;
            }) : e.each(t, function (e, n) {
              var o = t[e];void 0 === o.id && (o.id = f.create.id(i)), f.inject.result(o, i), i++;
            }), t;
          } }, save: { results: function results(e) {
            f.verbose("Saving current search results to metadata", e), k.data(v.results, e);
          } }, write: { cache: function cache(e, t) {
            var n = void 0 !== k.data(v.cache) ? k.data(v.cache) : {};m.cache && (f.verbose("Writing generated html to cache", e, t), n[e] = t, k.data(v.cache, n));
          } }, addResults: function addResults(t) {
          if (e.isFunction(m.onResultsAdd) && m.onResultsAdd.call(A, t) === !1) return f.debug("onResultsAdd callback cancelled default action"), !1;t ? (A.html(t), f.refreshResults(), m.selectFirstResult && f.select.firstResult(), f.showResults()) : f.hideResults(function () {
            A.empty();
          });
        }, showResults: function showResults(t) {
          t = e.isFunction(t) ? t : function () {}, D || !f.is.visible() && f.has.results() && (f.can.transition() ? (f.debug("Showing results with css animations"), A.transition({ animation: m.transition + " in", debug: m.debug, verbose: m.verbose, duration: m.duration, onComplete: function onComplete() {
              t();
            }, queue: !0 })) : (f.debug("Showing results with javascript"), A.stop().fadeIn(m.duration, m.easing)), m.onResultsOpen.call(A));
        }, hideResults: function hideResults(t) {
          t = e.isFunction(t) ? t : function () {}, f.is.visible() && (f.can.transition() ? (f.debug("Hiding results with css animations"), A.transition({ animation: m.transition + " out", debug: m.debug, verbose: m.verbose, duration: m.duration, onComplete: function onComplete() {
              t();
            }, queue: !0 })) : (f.debug("Hiding results with javascript"), A.stop().fadeOut(m.duration, m.easing)), m.onResultsClose.call(A));
        }, generateResults: function generateResults(t) {
          f.debug("Generating html from response", t);var n = m.templates[m.type],
              i = e.isPlainObject(t[h.results]) && !e.isEmptyObject(t[h.results]),
              o = e.isArray(t[h.results]) && t[h.results].length > 0,
              a = "";return i || o ? (m.maxResults > 0 && (i ? "standard" == m.type && f.error(y.maxResults) : t[h.results] = t[h.results].slice(0, m.maxResults)), e.isFunction(n) ? a = n(t, h) : f.error(y.noTemplate, !1)) : m.showNoResults && (a = f.displayMessage(y.noResults, "empty")), m.onResults.call(E, t), a;
        }, displayMessage: function displayMessage(e, t) {
          return t = t || "standard", f.debug("Displaying message", e, t), f.addResults(m.templates.message(e, t)), m.templates.message(e, t);
        }, setting: function setting(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (void 0 === n) return m[t];m[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (void 0 === n) return f[t];f[t] = n;
          }
        }, debug: function debug() {
          !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)));
        }, error: function error() {
          m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;m.performance && (t = new Date().getTime(), i = s || t, n = t - i, s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: E, "Execution Time": n })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
          }, display: function display() {
            var t = m.name + ":",
                n = 0;s = !1, clearTimeout(f.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (void 0 !== console.group || void 0 !== console.table) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, i) {
          var a,
              r,
              s,
              l = F;return n = n || d, i = E || i, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] && (r = l[i], !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(i, n) : void 0 !== r && (s = r), e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s), r;
        } }, u ? (void 0 === F && f.initialize(), f.invoke(c)) : (void 0 !== F && F.invoke("destroy"), f.initialize());
    }), void 0 !== o ? o : this;
  }, e.fn.search.settings = { name: "Search", namespace: "search", silent: !1, debug: !1, verbose: !1, performance: !0, type: "standard", minCharacters: 1, selectFirstResult: !1, apiSettings: !1, source: !1, searchOnFocus: !0, searchFields: ["title", "description"], displayField: "", searchFullText: !0, automatic: !0, hideDelay: 0, searchDelay: 200, maxResults: 7, cache: !0, showNoResults: !0, transition: "scale", duration: 200, easing: "easeOutExpo", onSelect: !1, onResultsAdd: !1, onSearchQuery: function onSearchQuery(e) {}, onResults: function onResults(e) {}, onResultsOpen: function onResultsOpen() {}, onResultsClose: function onResultsClose() {}, className: { animating: "animating", active: "active", empty: "empty", focus: "focus", hidden: "hidden", loading: "loading", results: "results", pressed: "down" }, error: { source: "Cannot search. No source used, and Semantic API module was not included", noResults: "Your search returned no results", logging: "Error in debug logging, exiting.", noEndpoint: "No search endpoint was specified", noTemplate: "A valid template name was not specified.", serverError: "There was an issue querying the server.", maxResults: "Results must be an array to use maxResults setting", method: "The method you called is not defined." }, metadata: { cache: "cache", results: "results", result: "result" }, regExp: { escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, beginsWith: "(?:s|^)" }, fields: { categories: "results", categoryName: "name", categoryResults: "results", description: "description", image: "image", price: "price", results: "results", title: "title", url: "url", action: "action", actionText: "text", actionURL: "url" }, selector: { prompt: ".prompt", searchButton: ".search.button", results: ".results", message: ".results > .message", category: ".category", result: ".result", title: ".title, .name" }, templates: { escape: function escape(e) {
        var t = /[&<>"'`]/,
            n = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            i = function i(e) {
          return n[e];
        };return t.test(e) ? e.replace(/[&<>"'`]/g, i) : e;
      }, message: function message(e, t) {
        var n = "";return void 0 !== e && void 0 !== t && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n;
      }, category: function category(t, n) {
        var i = "";e.fn.search.settings.templates.escape;return void 0 !== t[n.categoryResults] && (e.each(t[n.categoryResults], function (t, o) {
          void 0 !== o[n.results] && o.results.length > 0 && (i += '<div class="category">', void 0 !== o[n.categoryName] && (i += '<div class="name">' + o[n.categoryName] + "</div>"), e.each(o.results, function (e, t) {
            i += t[n.url] ? '<a class="result" href="' + t[n.url] + '">' : '<a class="result">', void 0 !== t[n.image] && (i += '<div class="image"> <img src="' + t[n.image] + '"></div>'), i += '<div class="content">', void 0 !== t[n.price] && (i += '<div class="price">' + t[n.price] + "</div>"), void 0 !== t[n.title] && (i += '<div class="title">' + t[n.title] + "</div>"), void 0 !== t[n.description] && (i += '<div class="description">' + t[n.description] + "</div>"), i += "</div>", i += "</a>";
          }), i += "</div>");
        }), t[n.action] && (i += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), i);
      }, standard: function standard(t, n) {
        var i = "";return void 0 !== t[n.results] && (e.each(t[n.results], function (e, t) {
          i += t[n.url] ? '<a class="result" href="' + t[n.url] + '">' : '<a class="result">', void 0 !== t[n.image] && (i += '<div class="image"> <img src="' + t[n.image] + '"></div>'), i += '<div class="content">', void 0 !== t[n.price] && (i += '<div class="price">' + t[n.price] + "</div>"), void 0 !== t[n.title] && (i += '<div class="title">' + t[n.title] + "</div>"), void 0 !== t[n.description] && (i += '<div class="description">' + t[n.description] + "</div>"), i += "</div>", i += "</a>";
        }), t[n.action] && (i += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), i);
      } } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.shape = function (i) {
    var o,
        a = e(this),
        r = (e("body"), new Date().getTime()),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1),
        d = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };return a.each(function () {
      var t,
          f,
          m,
          g = a.selector || "",
          v = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.shape.settings, i) : e.extend({}, e.fn.shape.settings),
          p = v.namespace,
          h = v.selector,
          b = v.error,
          y = v.className,
          x = "." + p,
          C = "module-" + p,
          w = e(this),
          k = w.find(h.sides),
          S = w.find(h.side),
          T = !1,
          A = this,
          R = w.data(C);m = { initialize: function initialize() {
          m.verbose("Initializing module for", A), m.set.defaultSide(), m.instantiate();
        }, instantiate: function instantiate() {
          m.verbose("Storing instance of module", m), R = m, w.data(C, R);
        }, destroy: function destroy() {
          m.verbose("Destroying previous module for", A), w.removeData(C).off(x);
        }, refresh: function refresh() {
          m.verbose("Refreshing selector cache for", A), w = e(A), k = e(this).find(h.shape), S = e(this).find(h.side);
        }, repaint: function repaint() {
          m.verbose("Forcing repaint event");var e = k[0] || n.createElement("div");e.offsetWidth;
        }, animate: function animate(e, n) {
          m.verbose("Animating box with properties", e), n = n || function (e) {
            m.verbose("Executing animation callback"), void 0 !== e && e.stopPropagation(), m.reset(), m.set.active();
          }, v.beforeChange.call(f[0]), m.get.transitionEvent() ? (m.verbose("Starting CSS animation"), w.addClass(y.animating), k.css(e).one(m.get.transitionEvent(), n), m.set.duration(v.duration), d(function () {
            w.addClass(y.animating), t.addClass(y.hidden);
          })) : n();
        }, queue: function queue(e) {
          m.debug("Queueing animation of", e), k.one(m.get.transitionEvent(), function () {
            m.debug("Executing queued animation"), setTimeout(function () {
              w.shape(e);
            }, 0);
          });
        }, reset: function reset() {
          m.verbose("Animating states reset"), w.removeClass(y.animating).attr("style", "").removeAttr("style"), k.attr("style", "").removeAttr("style"), S.attr("style", "").removeAttr("style").removeClass(y.hidden), f.removeClass(y.animating).attr("style", "").removeAttr("style");
        }, is: { complete: function complete() {
            return S.filter("." + y.active)[0] == f[0];
          }, animating: function animating() {
            return w.hasClass(y.animating);
          } }, set: { defaultSide: function defaultSide() {
            t = w.find("." + v.className.active), f = t.next(h.side).length > 0 ? t.next(h.side) : w.find(h.side).first(), T = !1, m.verbose("Active side set to", t), m.verbose("Next side set to", f);
          }, duration: function duration(e) {
            e = e || v.duration, e = "number" == typeof e ? e + "ms" : e, m.verbose("Setting animation duration", e), (v.duration || 0 === v.duration) && k.add(S).css({ "-webkit-transition-duration": e, "-moz-transition-duration": e, "-ms-transition-duration": e, "-o-transition-duration": e, "transition-duration": e });
          }, currentStageSize: function currentStageSize() {
            var e = w.find("." + v.className.active),
                t = e.outerWidth(!0),
                n = e.outerHeight(!0);w.css({ width: t, height: n });
          }, stageSize: function stageSize() {
            var e = w.clone().addClass(y.loading),
                t = e.find("." + v.className.active),
                n = T ? e.find(h.side).eq(T) : t.next(h.side).length > 0 ? t.next(h.side) : e.find(h.side).first(),
                i = "next" == v.width ? n.outerWidth(!0) : "initial" == v.width ? w.width() : v.width,
                o = "next" == v.height ? n.outerHeight(!0) : "initial" == v.height ? w.height() : v.height;t.removeClass(y.active), n.addClass(y.active), e.insertAfter(w), e.remove(), "auto" != v.width && (w.css("width", i + v.jitter), m.verbose("Specifying width during animation", i)), "auto" != v.height && (w.css("height", o + v.jitter), m.verbose("Specifying height during animation", o));
          }, nextSide: function nextSide(e) {
            T = e, f = S.filter(e), T = S.index(f), 0 === f.length && (m.set.defaultSide(), m.error(b.side)), m.verbose("Next side manually set to", f);
          }, active: function active() {
            m.verbose("Setting new side to active", f), S.removeClass(y.active), f.addClass(y.active), v.onChange.call(f[0]), m.set.defaultSide();
          } }, flip: { up: function up() {
            if (m.is.complete() && !m.is.animating() && !v.allowRepeats) return void m.debug("Side already visible", f);if (m.is.animating()) m.queue("flip up");else {
              m.debug("Flipping up", f);var e = m.get.transform.up();m.set.stageSize(), m.stage.above(), m.animate(e);
            }
          }, down: function down() {
            if (m.is.complete() && !m.is.animating() && !v.allowRepeats) return void m.debug("Side already visible", f);if (m.is.animating()) m.queue("flip down");else {
              m.debug("Flipping down", f);var e = m.get.transform.down();m.set.stageSize(), m.stage.below(), m.animate(e);
            }
          }, left: function left() {
            if (m.is.complete() && !m.is.animating() && !v.allowRepeats) return void m.debug("Side already visible", f);if (m.is.animating()) m.queue("flip left");else {
              m.debug("Flipping left", f);var e = m.get.transform.left();m.set.stageSize(), m.stage.left(), m.animate(e);
            }
          }, right: function right() {
            if (m.is.complete() && !m.is.animating() && !v.allowRepeats) return void m.debug("Side already visible", f);if (m.is.animating()) m.queue("flip right");else {
              m.debug("Flipping right", f);var e = m.get.transform.right();m.set.stageSize(), m.stage.right(), m.animate(e);
            }
          }, over: function over() {
            if (m.is.complete() && !m.is.animating() && !v.allowRepeats) return void m.debug("Side already visible", f);m.is.animating() ? m.queue("flip over") : (m.debug("Flipping over", f), m.set.stageSize(), m.stage.behind(), m.animate(m.get.transform.over()));
          }, back: function back() {
            if (m.is.complete() && !m.is.animating() && !v.allowRepeats) return void m.debug("Side already visible", f);m.is.animating() ? m.queue("flip back") : (m.debug("Flipping back", f), m.set.stageSize(), m.stage.behind(), m.animate(m.get.transform.back()));
          } }, get: { transform: { up: function up() {
              var e = { y: -((t.outerHeight(!0) - f.outerHeight(!0)) / 2), z: -(t.outerHeight(!0) / 2) };return { transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(-90deg)" };
            }, down: function down() {
              var e = { y: -((t.outerHeight(!0) - f.outerHeight(!0)) / 2), z: -(t.outerHeight(!0) / 2) };return { transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(90deg)" };
            }, left: function left() {
              var e = { x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2), z: -(t.outerWidth(!0) / 2) };return { transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(90deg)" };
            }, right: function right() {
              var e = { x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2), z: -(t.outerWidth(!0) / 2) };return { transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(-90deg)" };
            }, over: function over() {
              return { transform: "translateX(" + { x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2) }.x + "px) rotateY(180deg)" };
            }, back: function back() {
              return { transform: "translateX(" + { x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2) }.x + "px) rotateY(-180deg)" };
            } }, transitionEvent: function transitionEvent() {
            var e,
                t = n.createElement("element"),
                i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (e in i) {
              if (void 0 !== t.style[e]) return i[e];
            }
          }, nextSide: function nextSide() {
            return t.next(h.side).length > 0 ? t.next(h.side) : w.find(h.side).first();
          } }, stage: { above: function above() {
            var e = { origin: (t.outerHeight(!0) - f.outerHeight(!0)) / 2, depth: { active: f.outerHeight(!0) / 2, next: t.outerHeight(!0) / 2 } };m.verbose("Setting the initial animation position as above", f, e), k.css({ transform: "translateZ(-" + e.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)" }), f.addClass(y.animating).css({ top: e.origin + "px", transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)" });
          }, below: function below() {
            var e = { origin: (t.outerHeight(!0) - f.outerHeight(!0)) / 2, depth: { active: f.outerHeight(!0) / 2, next: t.outerHeight(!0) / 2 } };m.verbose("Setting the initial animation position as below", f, e), k.css({ transform: "translateZ(-" + e.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)" }), f.addClass(y.animating).css({ top: e.origin + "px", transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)" });
          }, left: function left() {
            var e = { active: t.outerWidth(!0), next: f.outerWidth(!0) },
                n = { origin: (e.active - e.next) / 2, depth: { active: e.next / 2, next: e.active / 2 } };m.verbose("Setting the initial animation position as left", f, n), k.css({ transform: "translateZ(-" + n.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)" }), f.addClass(y.animating).css({ left: n.origin + "px", transform: "rotateY(-90deg) translateZ(" + n.depth.next + "px)" });
          }, right: function right() {
            var e = { active: t.outerWidth(!0), next: f.outerWidth(!0) },
                n = { origin: (e.active - e.next) / 2, depth: { active: e.next / 2, next: e.active / 2 } };m.verbose("Setting the initial animation position as left", f, n), k.css({ transform: "translateZ(-" + n.depth.active + "px)" }), t.css({ transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)" }), f.addClass(y.animating).css({ left: n.origin + "px", transform: "rotateY(90deg) translateZ(" + n.depth.next + "px)" });
          }, behind: function behind() {
            var e = { active: t.outerWidth(!0), next: f.outerWidth(!0) },
                n = { origin: (e.active - e.next) / 2, depth: { active: e.next / 2, next: e.active / 2 } };m.verbose("Setting the initial animation position as behind", f, n), t.css({ transform: "rotateY(0deg)" }), f.addClass(y.animating).css({ left: n.origin + "px", transform: "rotateY(-180deg)" });
          } }, setting: function setting(t, n) {
          if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, v, t);else {
            if (void 0 === n) return v[t];e.isPlainObject(v[t]) ? e.extend(!0, v[t], n) : v[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, m, t);else {
            if (void 0 === n) return m[t];m[t] = n;
          }
        }, debug: function debug() {
          !v.silent && v.debug && (v.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), m.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !v.silent && v.verbose && v.debug && (v.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), m.verbose.apply(console, arguments)));
        }, error: function error() {
          v.silent || (m.error = Function.prototype.bind.call(console.error, console, v.name + ":"), m.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;v.performance && (t = new Date().getTime(), i = r || t, n = t - i, r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: A, "Execution Time": n })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500);
          }, display: function display() {
            var t = v.name + ":",
                n = 0;r = !1, clearTimeout(m.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", g && (t += " '" + g + "'"), a.length > 1 && (t += " (" + a.length + ")"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function invoke(t, n, i) {
          var a,
              r,
              s,
              l = R;return n = n || u, i = A || i, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] && (r = l[i], !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(i, n) : void 0 !== r && (s = r), e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s), r;
        } }, c ? (void 0 === R && m.initialize(), m.invoke(l)) : (void 0 !== R && R.invoke("destroy"), m.initialize());
    }), void 0 !== o ? o : this;
  }, e.fn.shape.settings = { name: "Shape", silent: !1, debug: !1, verbose: !1, jitter: 0, performance: !0, namespace: "shape", width: "initial", height: "initial", beforeChange: function beforeChange() {}, onChange: function onChange() {}, allowRepeats: !1, duration: !1, error: { side: "You tried to switch to a side that does not exist.", method: "The method you called is not defined" }, className: { animating: "animating", hidden: "hidden", loading: "loading", active: "active" }, selector: { sides: ".sides", side: ".side" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.sidebar = function (i) {
    var o,
        a = e(this),
        r = e(t),
        s = e(n),
        l = e("html"),
        c = e("head"),
        u = a.selector || "",
        d = new Date().getTime(),
        f = [],
        m = arguments[0],
        g = "string" == typeof m,
        v = [].slice.call(arguments, 1),
        p = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
      setTimeout(e, 0);
    };return a.each(function () {
      var a,
          h,
          b,
          y,
          x,
          C,
          w = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.sidebar.settings, i) : e.extend({}, e.fn.sidebar.settings),
          k = w.selector,
          S = w.className,
          T = w.namespace,
          A = w.regExp,
          R = w.error,
          P = "." + T,
          E = "module-" + T,
          F = e(this),
          O = e(w.context),
          D = F.children(k.sidebar),
          q = O.children(k.fixed),
          j = O.children(k.pusher),
          z = this,
          I = F.data(E);C = { initialize: function initialize() {
          C.debug("Initializing sidebar", i), C.create.id(), x = C.get.transitionEvent(), C.is.ios() && C.set.ios(), w.delaySetup ? p(C.setup.layout) : C.setup.layout(), p(function () {
            C.setup.cache();
          }), C.instantiate();
        }, instantiate: function instantiate() {
          C.verbose("Storing instance of module", C), I = C, F.data(E, C);
        }, create: { id: function id() {
            b = (Math.random().toString(16) + "000000000").substr(2, 8), h = "." + b, C.verbose("Creating unique id for element", b);
          } }, destroy: function destroy() {
          C.verbose("Destroying previous module for", F), F.off(P).removeData(E), C.is.ios() && C.remove.ios(), O.off(h), r.off(h), s.off(h);
        }, event: { clickaway: function clickaway(e) {
            var t = j.find(e.target).length > 0 || j.is(e.target),
                n = O.is(e.target);t && (C.verbose("User clicked on dimmed page"), C.hide()), n && (C.verbose("User clicked on dimmable context (scaled out page)"), C.hide());
          }, touch: function touch(e) {}, containScroll: function containScroll(e) {
            z.scrollTop <= 0 && (z.scrollTop = 1), z.scrollTop + z.offsetHeight >= z.scrollHeight && (z.scrollTop = z.scrollHeight - z.offsetHeight - 1);
          }, scroll: function scroll(t) {
            0 === e(t.target).closest(k.sidebar).length && t.preventDefault();
          } }, bind: { clickaway: function clickaway() {
            C.verbose("Adding clickaway events to context", O), w.closable && O.on("click" + h, C.event.clickaway).on("touchend" + h, C.event.clickaway);
          }, scrollLock: function scrollLock() {
            w.scrollLock && (C.debug("Disabling page scroll"), r.on("DOMMouseScroll" + h, C.event.scroll)), C.verbose("Adding events to contain sidebar scroll"), s.on("touchmove" + h, C.event.touch), F.on("scroll" + P, C.event.containScroll);
          } }, unbind: { clickaway: function clickaway() {
            C.verbose("Removing clickaway events from context", O), O.off(h);
          }, scrollLock: function scrollLock() {
            C.verbose("Removing scroll lock from page"), s.off(h), r.off(h), F.off("scroll" + P);
          } }, add: { inlineCSS: function inlineCSS() {
            var t,
                n = C.cache.width || F.outerWidth(),
                i = C.cache.height || F.outerHeight(),
                o = C.is.rtl(),
                r = C.get.direction(),
                s = { left: n, right: -n, top: i, bottom: -i };o && (C.verbose("RTL detected, flipping widths"), s.left = -n, s.right = n), t = "<style>", "left" === r || "right" === r ? (C.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + r + ".sidebar ~ .fixed, .ui.visible." + r + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + s[r] + "px, 0, 0);           transform: translate3d(" + s[r] + "px, 0, 0); }") : "top" !== r && "bottom" != r || (t += " .ui.visible." + r + ".sidebar ~ .fixed, .ui.visible." + r + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + s[r] + "px, 0);           transform: translate3d(0, " + s[r] + "px, 0); }"), C.is.ie() && ("left" === r || "right" === r ? (C.debug("Adding CSS rules for animation distance", n), t += " body.pushable > .ui.visible." + r + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + s[r] + "px, 0, 0);           transform: translate3d(" + s[r] + "px, 0, 0); }") : "top" !== r && "bottom" != r || (t += " body.pushable > .ui.visible." + r + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + s[r] + "px, 0);           transform: translate3d(0, " + s[r] + "px, 0); }"), t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), t += "</style>", a = e(t).appendTo(c), C.debug("Adding sizing css to head", a);
          } }, refresh: function refresh() {
          C.verbose("Refreshing selector cache"), O = e(w.context), D = O.children(k.sidebar), j = O.children(k.pusher), q = O.children(k.fixed), C.clear.cache();
        }, refreshSidebars: function refreshSidebars() {
          C.verbose("Refreshing other sidebars"), D = O.children(k.sidebar);
        }, repaint: function repaint() {
          C.verbose("Forcing repaint event"), z.style.display = "none";z.offsetHeight;z.scrollTop = z.scrollTop, z.style.display = "";
        }, setup: { cache: function cache() {
            C.cache = { width: F.outerWidth(), height: F.outerHeight(), rtl: "rtl" == F.css("direction") };
          }, layout: function layout() {
            0 === O.children(k.pusher).length && (C.debug("Adding wrapper element for sidebar"), C.error(R.pusher), j = e('<div class="pusher" />'), O.children().not(k.omitted).not(D).wrapAll(j), C.refresh()), 0 !== F.nextAll(k.pusher).length && F.nextAll(k.pusher)[0] === j[0] || (C.debug("Moved sidebar to correct parent element"), C.error(R.movedSidebar, z), F.detach().prependTo(O), C.refresh()), C.clear.cache(), C.set.pushable(), C.set.direction();
          } }, attachEvents: function attachEvents(t, n) {
          var i = e(t);n = e.isFunction(C[n]) ? C[n] : C.toggle, i.length > 0 ? (C.debug("Attaching sidebar events to element", t, n), i.on("click" + P, n)) : C.error(R.notFound, t);
        }, show: function show(t) {
          if (t = e.isFunction(t) ? t : function () {}, C.is.hidden()) {
            if (C.refreshSidebars(), w.overlay && (C.error(R.overlay), w.transition = "overlay"), C.refresh(), C.othersActive()) if (C.debug("Other sidebars currently visible"), w.exclusive) {
              if ("overlay" != w.transition) return void C.hideOthers(C.show);C.hideOthers();
            } else w.transition = "overlay";C.pushPage(function () {
              t.call(z), w.onShow.call(z);
            }), w.onChange.call(z), w.onVisible.call(z);
          } else C.debug("Sidebar is already visible");
        }, hide: function hide(t) {
          t = e.isFunction(t) ? t : function () {}, (C.is.visible() || C.is.animating()) && (C.debug("Hiding sidebar", t), C.refreshSidebars(), C.pullPage(function () {
            t.call(z), w.onHidden.call(z);
          }), w.onChange.call(z), w.onHide.call(z));
        }, othersAnimating: function othersAnimating() {
          return D.not(F).filter("." + S.animating).length > 0;
        }, othersVisible: function othersVisible() {
          return D.not(F).filter("." + S.visible).length > 0;
        }, othersActive: function othersActive() {
          return C.othersVisible() || C.othersAnimating();
        }, hideOthers: function hideOthers(e) {
          var t = D.not(F).filter("." + S.visible),
              n = t.length,
              i = 0;e = e || function () {}, t.sidebar("hide", function () {
            ++i == n && e();
          });
        }, toggle: function toggle() {
          C.verbose("Determining toggled direction"), C.is.hidden() ? C.show() : C.hide();
        }, pushPage: function pushPage(t) {
          var n,
              i,
              _o,
              a = C.get.transition(),
              r = "overlay" === a || C.othersActive() ? F : j;t = e.isFunction(t) ? t : function () {}, "scale down" == w.transition && C.scrollToTop(), C.set.transition(a), C.repaint(), n = function n() {
            C.bind.clickaway(), C.add.inlineCSS(), C.set.animating(), C.set.visible();
          }, i = function i() {
            C.set.dimmed();
          }, _o = function o(e) {
            e.target == r[0] && (r.off(x + h, _o), C.remove.animating(), C.bind.scrollLock(), t.call(z));
          }, r.off(x + h), r.on(x + h, _o), p(n), w.dimPage && !C.othersVisible() && p(i);
        }, pullPage: function pullPage(t) {
          var n,
              _i,
              o = C.get.transition(),
              a = "overlay" == o || C.othersActive() ? F : j;t = e.isFunction(t) ? t : function () {}, C.verbose("Removing context push state", C.get.direction()), C.unbind.clickaway(), C.unbind.scrollLock(), n = function n() {
            C.set.transition(o), C.set.animating(), C.remove.visible(), w.dimPage && !C.othersVisible() && j.removeClass(S.dimmed);
          }, _i = function i(e) {
            e.target == a[0] && (a.off(x + h, _i), C.remove.animating(), C.remove.transition(), C.remove.inlineCSS(), ("scale down" == o || w.returnScroll && C.is.mobile()) && C.scrollBack(), t.call(z));
          }, a.off(x + h), a.on(x + h, _i), p(n);
        }, scrollToTop: function scrollToTop() {
          C.verbose("Scrolling to top of page to avoid animation issues"), y = e(t).scrollTop(), F.scrollTop(0), t.scrollTo(0, 0);
        }, scrollBack: function scrollBack() {
          C.verbose("Scrolling back to original page position"), t.scrollTo(0, y);
        }, clear: { cache: function cache() {
            C.verbose("Clearing cached dimensions"), C.cache = {};
          } }, set: { ios: function ios() {
            l.addClass(S.ios);
          }, pushed: function pushed() {
            O.addClass(S.pushed);
          }, pushable: function pushable() {
            O.addClass(S.pushable);
          }, dimmed: function dimmed() {
            j.addClass(S.dimmed);
          }, active: function active() {
            F.addClass(S.active);
          }, animating: function animating() {
            F.addClass(S.animating);
          }, transition: function transition(e) {
            e = e || C.get.transition(), F.addClass(e);
          }, direction: function direction(e) {
            e = e || C.get.direction(), F.addClass(S[e]);
          }, visible: function visible() {
            F.addClass(S.visible);
          }, overlay: function overlay() {
            F.addClass(S.overlay);
          } }, remove: { inlineCSS: function inlineCSS() {
            C.debug("Removing inline css styles", a), a && a.length > 0 && a.remove();
          }, ios: function ios() {
            l.removeClass(S.ios);
          }, pushed: function pushed() {
            O.removeClass(S.pushed);
          }, pushable: function pushable() {
            O.removeClass(S.pushable);
          }, active: function active() {
            F.removeClass(S.active);
          }, animating: function animating() {
            F.removeClass(S.animating);
          }, transition: function transition(e) {
            e = e || C.get.transition(), F.removeClass(e);
          }, direction: function direction(e) {
            e = e || C.get.direction(), F.removeClass(S[e]);
          }, visible: function visible() {
            F.removeClass(S.visible);
          }, overlay: function overlay() {
            F.removeClass(S.overlay);
          } }, get: { direction: function direction() {
            return F.hasClass(S.top) ? S.top : F.hasClass(S.right) ? S.right : F.hasClass(S.bottom) ? S.bottom : S.left;
          }, transition: function transition() {
            var e,
                t = C.get.direction();return e = C.is.mobile() ? "auto" == w.mobileTransition ? w.defaultTransition.mobile[t] : w.mobileTransition : "auto" == w.transition ? w.defaultTransition.computer[t] : w.transition, C.verbose("Determined transition", e), e;
          }, transitionEvent: function transitionEvent() {
            var e,
                t = n.createElement("element"),
                i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (e in i) {
              if (void 0 !== t.style[e]) return i[e];
            }
          } }, is: { ie: function ie() {
            var e = !t.ActiveXObject && "ActiveXObject" in t,
                n = "ActiveXObject" in t;return e || n;
          }, ios: function ios() {
            var e = navigator.userAgent,
                t = e.match(A.ios),
                n = e.match(A.mobileChrome);return !(!t || n) && (C.verbose("Browser was found to be iOS", e), !0);
          }, mobile: function mobile() {
            var e = navigator.userAgent;return e.match(A.mobile) ? (C.verbose("Browser was found to be mobile", e), !0) : (C.verbose("Browser is not mobile, using regular transition", e), !1);
          }, hidden: function hidden() {
            return !C.is.visible();
          }, visible: function visible() {
            return F.hasClass(S.visible);
          }, open: function open() {
            return C.is.visible();
          }, closed: function closed() {
            return C.is.hidden();
          }, vertical: function vertical() {
            return F.hasClass(S.top);
          }, animating: function animating() {
            return O.hasClass(S.animating);
          }, rtl: function rtl() {
            return void 0 === C.cache.rtl && (C.cache.rtl = "rtl" == F.css("direction")), C.cache.rtl;
          } }, setting: function setting(t, n) {
          if (C.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, w, t);else {
            if (void 0 === n) return w[t];e.isPlainObject(w[t]) ? e.extend(!0, w[t], n) : w[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, C, t);else {
            if (void 0 === n) return C[t];C[t] = n;
          }
        }, debug: function debug() {
          !w.silent && w.debug && (w.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, w.name + ":"), C.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !w.silent && w.verbose && w.debug && (w.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, w.name + ":"), C.verbose.apply(console, arguments)));
        }, error: function error() {
          w.silent || (C.error = Function.prototype.bind.call(console.error, console, w.name + ":"), C.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;w.performance && (t = new Date().getTime(), i = d || t, n = t - i, d = t, f.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: z, "Execution Time": n })), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 500);
          }, display: function display() {
            var t = w.name + ":",
                n = 0;d = !1, clearTimeout(C.performance.timer), e.each(f, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", u && (t += " '" + u + "'"), (void 0 !== console.group || void 0 !== console.table) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), f = [];
          } }, invoke: function invoke(t, n, i) {
          var a,
              r,
              s,
              l = I;return n = n || v, i = z || i, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] ? (r = l[i], !1) : (C.error(R.method, t), !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(i, n) : void 0 !== r && (s = r), e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s), r;
        } }, g ? (void 0 === I && C.initialize(), C.invoke(m)) : (void 0 !== I && C.invoke("destroy"), C.initialize());
    }), void 0 !== o ? o : this;
  }, e.fn.sidebar.settings = { name: "Sidebar", namespace: "sidebar", silent: !1, debug: !1, verbose: !1, performance: !0, transition: "auto", mobileTransition: "auto", defaultTransition: { computer: { left: "uncover", right: "uncover", top: "overlay", bottom: "overlay" }, mobile: { left: "uncover", right: "uncover", top: "overlay", bottom: "overlay" } }, context: "body", exclusive: !1, closable: !0, dimPage: !0, scrollLock: !1, returnScroll: !1, delaySetup: !1, duration: 500, onChange: function onChange() {}, onShow: function onShow() {}, onHide: function onHide() {}, onHidden: function onHidden() {}, onVisible: function onVisible() {}, className: { active: "active", animating: "animating", dimmed: "dimmed", ios: "ios", pushable: "pushable", pushed: "pushed", right: "right", top: "top", left: "left", bottom: "bottom", visible: "visible" }, selector: { fixed: ".fixed", omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed", pusher: ".pusher", sidebar: ".ui.sidebar" }, regExp: { ios: /(iPad|iPhone|iPod)/g, mobileChrome: /(CriOS)/g, mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g }, error: { method: "The method you called is not defined.", pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element", movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag", overlay: "The overlay setting is no longer supported, use animation: overlay", notFound: "There were no elements that matched the specified selector" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.sticky = function (i) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);return a.each(function () {
      var a,
          f,
          m,
          g,
          v,
          p = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.sticky.settings, i) : e.extend({}, e.fn.sticky.settings),
          h = p.className,
          b = p.namespace,
          y = p.error,
          x = "." + b,
          C = "module-" + b,
          w = e(this),
          k = e(t),
          S = e(p.scrollContext),
          T = (w.selector, w.data(C)),
          A = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
        setTimeout(e, 0);
      },
          R = this;v = { initialize: function initialize() {
          v.determineContainer(), v.determineContext(), v.verbose("Initializing sticky", p, a), v.save.positions(), v.checkErrors(), v.bind.events(), p.observeChanges && v.observeChanges(), v.instantiate();
        }, instantiate: function instantiate() {
          v.verbose("Storing instance of module", v), T = v, w.data(C, v);
        }, destroy: function destroy() {
          v.verbose("Destroying previous instance"), v.reset(), m && m.disconnect(), g && g.disconnect(), k.off("load" + x, v.event.load).off("resize" + x, v.event.resize), S.off("scrollchange" + x, v.event.scrollchange), w.removeData(C);
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && (m = new MutationObserver(v.event.documentChanged), g = new MutationObserver(v.event.changed), m.observe(n, { childList: !0, subtree: !0 }), g.observe(R, { childList: !0, subtree: !0 }), g.observe(f[0], { childList: !0, subtree: !0 }), v.debug("Setting up mutation observer", g));
        }, determineContainer: function determineContainer() {
          a = p.container ? e(p.container) : w.offsetParent();
        }, determineContext: function determineContext() {
          if (f = p.context ? e(p.context) : a, 0 === f.length) return void v.error(y.invalidContext, p.context, w);
        }, checkErrors: function checkErrors() {
          if (v.is.hidden() && v.error(y.visible, w), v.cache.element.height > v.cache.context.height) return v.reset(), void v.error(y.elementSize, w);
        }, bind: { events: function events() {
            k.on("load" + x, v.event.load).on("resize" + x, v.event.resize), S.off("scroll" + x).on("scroll" + x, v.event.scroll).on("scrollchange" + x, v.event.scrollchange);
          } }, event: { changed: function changed(e) {
            clearTimeout(v.timer), v.timer = setTimeout(function () {
              v.verbose("DOM tree modified, updating sticky menu", e), v.refresh();
            }, 100);
          }, documentChanged: function documentChanged(t) {
            [].forEach.call(t, function (t) {
              t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                (t == R || e(t).find(R).length > 0) && (v.debug("Element removed from DOM, tearing down events"), v.destroy());
              });
            });
          }, load: function load() {
            v.verbose("Page contents finished loading"), A(v.refresh);
          }, resize: function resize() {
            v.verbose("Window resized"), A(v.refresh);
          }, scroll: function scroll() {
            A(function () {
              S.triggerHandler("scrollchange" + x, S.scrollTop());
            });
          }, scrollchange: function scrollchange(e, t) {
            v.stick(t), p.onScroll.call(R);
          } }, refresh: function refresh(e) {
          v.reset(), p.context || v.determineContext(), e && v.determineContainer(), v.save.positions(), v.stick(), p.onReposition.call(R);
        }, supports: { sticky: function sticky() {
            var t = e("<div/>");t[0];return t.addClass(h.supported), t.css("position").match("sticky");
          } }, save: { lastScroll: function lastScroll(e) {
            v.lastScroll = e;
          }, elementScroll: function elementScroll(e) {
            v.elementScroll = e;
          }, positions: function positions() {
            var e = { height: S.height() },
                t = { margin: { top: parseInt(w.css("margin-top"), 10), bottom: parseInt(w.css("margin-bottom"), 10) }, offset: w.offset(), width: w.outerWidth(), height: w.outerHeight() },
                n = { offset: f.offset(), height: f.outerHeight() };a.outerHeight();v.is.standardScroll() || (v.debug("Non-standard scroll. Removing scroll offset from element offset"), e.top = S.scrollTop(), e.left = S.scrollLeft(), t.offset.top += e.top, n.offset.top += e.top, t.offset.left += e.left, n.offset.left += e.left), v.cache = { fits: t.height < e.height, scrollContext: { height: e.height }, element: { margin: t.margin, top: t.offset.top - t.margin.top, left: t.offset.left, width: t.width, height: t.height, bottom: t.offset.top + t.height }, context: { top: n.offset.top, height: n.height, bottom: n.offset.top + n.height } }, v.set.containerSize(), v.set.size(), v.stick(), v.debug("Caching element positions", v.cache);
          } }, get: { direction: function direction(e) {
            var t = "down";return e = e || S.scrollTop(), void 0 !== v.lastScroll && (v.lastScroll < e ? t = "down" : v.lastScroll > e && (t = "up")), t;
          }, scrollChange: function scrollChange(e) {
            return e = e || S.scrollTop(), v.lastScroll ? e - v.lastScroll : 0;
          }, currentElementScroll: function currentElementScroll() {
            return v.elementScroll ? v.elementScroll : v.is.top() ? Math.abs(parseInt(w.css("top"), 10)) || 0 : Math.abs(parseInt(w.css("bottom"), 10)) || 0;
          }, elementScroll: function elementScroll(e) {
            e = e || S.scrollTop();var t = v.cache.element,
                n = v.cache.scrollContext,
                i = v.get.scrollChange(e),
                o = t.height - n.height + p.offset,
                a = v.get.currentElementScroll(),
                r = a + i;return a = v.cache.fits || r < 0 ? 0 : r > o ? o : r;
          } }, remove: { lastScroll: function lastScroll() {
            delete v.lastScroll;
          }, elementScroll: function elementScroll(e) {
            delete v.elementScroll;
          }, offset: function offset() {
            w.css("margin-top", "");
          } }, set: { offset: function offset() {
            v.verbose("Setting offset on element", p.offset), w.css("margin-top", p.offset);
          }, containerSize: function containerSize() {
            var e = a.get(0).tagName;"HTML" === e || "body" == e ? v.determineContainer() : Math.abs(a.outerHeight() - v.cache.context.height) > p.jitter && (v.debug("Context has padding, specifying exact height for container", v.cache.context.height), a.css({ height: v.cache.context.height }));
          }, minimumSize: function minimumSize() {
            var e = v.cache.element;a.css("min-height", e.height);
          }, scroll: function scroll(e) {
            v.debug("Setting scroll on element", e), v.elementScroll != e && (v.is.top() && w.css("bottom", "").css("top", -e), v.is.bottom() && w.css("top", "").css("bottom", e));
          }, size: function size() {
            0 !== v.cache.element.height && 0 !== v.cache.element.width && (R.style.setProperty("width", v.cache.element.width + "px", "important"), R.style.setProperty("height", v.cache.element.height + "px", "important"));
          } }, is: { standardScroll: function standardScroll() {
            return S[0] == t;
          }, top: function top() {
            return w.hasClass(h.top);
          }, bottom: function bottom() {
            return w.hasClass(h.bottom);
          }, initialPosition: function initialPosition() {
            return !v.is.fixed() && !v.is.bound();
          }, hidden: function hidden() {
            return !w.is(":visible");
          }, bound: function bound() {
            return w.hasClass(h.bound);
          }, fixed: function fixed() {
            return w.hasClass(h.fixed);
          } }, stick: function stick(e) {
          var t = e || S.scrollTop(),
              n = v.cache,
              i = n.fits,
              o = n.element,
              a = n.scrollContext,
              r = n.context,
              s = v.is.bottom() && p.pushing ? p.bottomOffset : p.offset,
              e = { top: t + s, bottom: t + s + a.height },
              l = (v.get.direction(e.top), i ? 0 : v.get.elementScroll(e.top)),
              c = !i;0 !== o.height && (v.is.initialPosition() ? e.top >= r.bottom ? (v.debug("Initial element position is bottom of container"), v.bindBottom()) : e.top > o.top && (o.height + e.top - l >= r.bottom ? (v.debug("Initial element position is bottom of container"), v.bindBottom()) : (v.debug("Initial element position is fixed"), v.fixTop())) : v.is.fixed() ? v.is.top() ? e.top <= o.top ? (v.debug("Fixed element reached top of container"), v.setInitialPosition()) : o.height + e.top - l >= r.bottom ? (v.debug("Fixed element reached bottom of container"), v.bindBottom()) : c && (v.set.scroll(l), v.save.lastScroll(e.top), v.save.elementScroll(l)) : v.is.bottom() && (e.bottom - o.height <= o.top ? (v.debug("Bottom fixed rail has reached top of container"), v.setInitialPosition()) : e.bottom >= r.bottom ? (v.debug("Bottom fixed rail has reached bottom of container"), v.bindBottom()) : c && (v.set.scroll(l), v.save.lastScroll(e.top), v.save.elementScroll(l))) : v.is.bottom() && (e.top <= o.top ? (v.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"), v.setInitialPosition()) : p.pushing ? v.is.bound() && e.bottom <= r.bottom && (v.debug("Fixing bottom attached element to bottom of browser."), v.fixBottom()) : v.is.bound() && e.top <= r.bottom - o.height && (v.debug("Fixing bottom attached element to top of browser."), v.fixTop())));
        }, bindTop: function bindTop() {
          v.debug("Binding element to top of parent container"), v.remove.offset(), w.css({ left: "", top: "", marginBottom: "" }).removeClass(h.fixed).removeClass(h.bottom).addClass(h.bound).addClass(h.top), p.onTop.call(R), p.onUnstick.call(R);
        }, bindBottom: function bindBottom() {
          v.debug("Binding element to bottom of parent container"), v.remove.offset(), w.css({ left: "", top: "" }).removeClass(h.fixed).removeClass(h.top).addClass(h.bound).addClass(h.bottom), p.onBottom.call(R), p.onUnstick.call(R);
        }, setInitialPosition: function setInitialPosition() {
          v.debug("Returning to initial position"), v.unfix(), v.unbind();
        }, fixTop: function fixTop() {
          v.debug("Fixing element to top of page"), v.set.minimumSize(), v.set.offset(), w.css({ left: v.cache.element.left, bottom: "", marginBottom: "" }).removeClass(h.bound).removeClass(h.bottom).addClass(h.fixed).addClass(h.top), p.onStick.call(R);
        }, fixBottom: function fixBottom() {
          v.debug("Sticking element to bottom of page"), v.set.minimumSize(), v.set.offset(), w.css({ left: v.cache.element.left, bottom: "", marginBottom: "" }).removeClass(h.bound).removeClass(h.top).addClass(h.fixed).addClass(h.bottom), p.onStick.call(R);
        }, unbind: function unbind() {
          v.is.bound() && (v.debug("Removing container bound position on element"), v.remove.offset(), w.removeClass(h.bound).removeClass(h.top).removeClass(h.bottom));
        }, unfix: function unfix() {
          v.is.fixed() && (v.debug("Removing fixed position on element"), v.remove.offset(), w.removeClass(h.fixed).removeClass(h.top).removeClass(h.bottom), p.onUnstick.call(R));
        }, reset: function reset() {
          v.debug("Resetting elements position"), v.unbind(), v.unfix(), v.resetCSS(), v.remove.offset(), v.remove.lastScroll();
        }, resetCSS: function resetCSS() {
          w.css({ width: "", height: "" }), a.css({ height: "" });
        }, setting: function setting(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, p, t);else {
            if (void 0 === n) return p[t];p[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, v, t);else {
            if (void 0 === n) return v[t];v[t] = n;
          }
        }, debug: function debug() {
          !p.silent && p.debug && (p.performance ? v.performance.log(arguments) : (v.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), v.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !p.silent && p.verbose && p.debug && (p.performance ? v.performance.log(arguments) : (v.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), v.verbose.apply(console, arguments)));
        }, error: function error() {
          p.silent || (v.error = Function.prototype.bind.call(console.error, console, p.name + ":"), v.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;p.performance && (t = new Date().getTime(), i = s || t, n = t - i, s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: R, "Execution Time": n })), clearTimeout(v.performance.timer), v.performance.timer = setTimeout(v.performance.display, 0);
          }, display: function display() {
            var t = p.name + ":",
                n = 0;s = !1, clearTimeout(v.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), (void 0 !== console.group || void 0 !== console.table) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, i) {
          var a,
              r,
              s,
              l = T;return n = n || d, i = R || i, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] && (r = l[i], !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(i, n) : void 0 !== r && (s = r), e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s), r;
        } }, u ? (void 0 === T && v.initialize(), v.invoke(c)) : (void 0 !== T && T.invoke("destroy"), v.initialize());
    }), void 0 !== o ? o : this;
  }, e.fn.sticky.settings = { name: "Sticky", namespace: "sticky", silent: !1, debug: !1, verbose: !0, performance: !0, pushing: !1, context: !1, container: !1, scrollContext: t, offset: 0, bottomOffset: 0, jitter: 5, observeChanges: !1, onReposition: function onReposition() {}, onScroll: function onScroll() {}, onStick: function onStick() {}, onUnstick: function onUnstick() {}, onTop: function onTop() {}, onBottom: function onBottom() {}, error: { container: "Sticky element must be inside a relative container", visible: "Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.", method: "The method you called is not defined.", invalidContext: "Context specified does not exist", elementSize: "Sticky element is larger than its container, cannot create sticky." }, className: { bound: "bound", fixed: "fixed", supported: "native", top: "top", bottom: "bottom" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.tab = function (i) {
    var o,
        a = e(e.isFunction(this) ? t : this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1),
        f = !1;return a.each(function () {
      var m,
          g,
          v,
          p,
          h,
          b,
          y = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.tab.settings, i) : e.extend({}, e.fn.tab.settings),
          x = y.className,
          C = y.metadata,
          w = y.selector,
          k = y.error,
          S = "." + y.namespace,
          T = "module-" + y.namespace,
          A = e(this),
          R = {},
          P = !0,
          E = 0,
          F = this,
          O = A.data(T);h = { initialize: function initialize() {
          h.debug("Initializing tab menu item", A), h.fix.callbacks(), h.determineTabs(), h.debug("Determining tabs", y.context, g), y.auto && h.set.auto(), h.bind.events(), y.history && !f && (h.initializeHistory(), f = !0), h.instantiate();
        }, instantiate: function instantiate() {
          h.verbose("Storing instance of module", h), O = h, A.data(T, h);
        }, destroy: function destroy() {
          h.debug("Destroying tabs", A), A.removeData(T).off(S);
        }, bind: { events: function events() {
            e.isWindow(F) || (h.debug("Attaching tab activation events to element", A), A.on("click" + S, h.event.click));
          } }, determineTabs: function determineTabs() {
          var t;"parent" === y.context ? (A.closest(w.ui).length > 0 ? (t = A.closest(w.ui), h.verbose("Using closest UI element as parent", t)) : t = A, m = t.parent(), h.verbose("Determined parent element for creating context", m)) : y.context ? (m = e(y.context), h.verbose("Using selector for tab context", y.context, m)) : m = e("body"), y.childrenOnly ? (g = m.children(w.tabs), h.debug("Searching tab context children for tabs", m, g)) : (g = m.find(w.tabs), h.debug("Searching tab context for tabs", m, g));
        }, fix: { callbacks: function callbacks() {
            e.isPlainObject(i) && (i.onTabLoad || i.onTabInit) && (i.onTabLoad && (i.onLoad = i.onTabLoad, delete i.onTabLoad, h.error(k.legacyLoad, i.onLoad)), i.onTabInit && (i.onFirstLoad = i.onTabInit, delete i.onTabInit, h.error(k.legacyInit, i.onFirstLoad)), y = e.extend(!0, {}, e.fn.tab.settings, i));
          } }, initializeHistory: function initializeHistory() {
          if (h.debug("Initializing page state"), void 0 === e.address) return h.error(k.state), !1;if ("state" == y.historyType) {
            if (h.debug("Using HTML5 to manage state"), y.path === !1) return h.error(k.path), !1;e.address.history(!0).state(y.path);
          }e.address.bind("change", h.event.history.change);
        }, event: { click: function click(t) {
            var n = e(this).data(C.tab);void 0 !== n ? (y.history ? (h.verbose("Updating page state", t), e.address.value(n)) : (h.verbose("Changing tab", t), h.changeTab(n)), t.preventDefault()) : h.debug("No tab specified");
          }, history: { change: function change(t) {
              var n = t.pathNames.join("/") || h.get.initialPath(),
                  i = y.templates.determineTitle(n) || !1;h.performance.display(), h.debug("History change event", n, t), b = t, void 0 !== n && h.changeTab(n), i && e.address.title(i);
            } } }, refresh: function refresh() {
          v && (h.debug("Refreshing tab", v), h.changeTab(v));
        }, cache: { read: function read(e) {
            return void 0 !== e && R[e];
          }, add: function add(e, t) {
            e = e || v, h.debug("Adding cached content for", e), R[e] = t;
          }, remove: function remove(e) {
            e = e || v, h.debug("Removing cached content for", e), delete R[e];
          } }, set: { auto: function auto() {
            var t = "string" == typeof y.path ? y.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";h.verbose("Setting up automatic tab retrieval from server", t), e.isPlainObject(y.apiSettings) ? y.apiSettings.url = t : y.apiSettings = { url: t };
          }, loading: function loading(e) {
            var t = h.get.tabElement(e);t.hasClass(x.loading) || (h.verbose("Setting loading state for", t), t.addClass(x.loading).siblings(g).removeClass(x.active + " " + x.loading), t.length > 0 && y.onRequest.call(t[0], e));
          }, state: function state(t) {
            e.address.value(t);
          } }, changeTab: function changeTab(n) {
          var i = t.history && t.history.pushState,
              o = i && y.ignoreFirstLoad && P,
              a = y.auto || e.isPlainObject(y.apiSettings),
              r = a && !o ? h.utilities.pathToArray(n) : h.get.defaultPathArray(n);n = h.utilities.arrayToPath(r), e.each(r, function (t, i) {
            var s,
                l,
                c,
                u,
                d = r.slice(0, t + 1),
                f = h.utilities.arrayToPath(d),
                g = h.is.tab(f),
                w = t + 1 == r.length,
                S = h.get.tabElement(f);if (h.verbose("Looking for tab", i), g) {
              if (h.verbose("Tab was found", i), v = f, p = h.utilities.filterArray(r, d), w ? u = !0 : (l = r.slice(0, t + 2), c = h.utilities.arrayToPath(l), (u = !h.is.tab(c)) && h.verbose("Tab parameters found", l)), u && a) return o ? (h.debug("Ignoring remote content on first tab load", f), P = !1, h.cache.add(n, S.html()), h.activate.all(f), y.onFirstLoad.call(S[0], f, p, b), y.onLoad.call(S[0], f, p, b)) : (h.activate.navigation(f), h.fetch.content(f, n)), !1;h.debug("Opened local tab", f), h.activate.all(f), h.cache.read(f) || (h.cache.add(f, !0), h.debug("First time tab loaded calling tab init"), y.onFirstLoad.call(S[0], f, p, b)), y.onLoad.call(S[0], f, p, b);
            } else {
              if (n.search("/") != -1 || "" === n) return h.error(k.missingTab, A, m, f), !1;if (s = e("#" + n + ', a[name="' + n + '"]'), f = s.closest("[data-tab]").data(C.tab), S = h.get.tabElement(f), s && s.length > 0 && f) return h.debug("Anchor link used, opening parent tab", S, s), S.hasClass(x.active) || setTimeout(function () {
                h.scrollTo(s);
              }, 0), h.activate.all(f), h.cache.read(f) || (h.cache.add(f, !0), h.debug("First time tab loaded calling tab init"), y.onFirstLoad.call(S[0], f, p, b)), y.onLoad.call(S[0], f, p, b), !1;
            }
          });
        }, scrollTo: function scrollTo(t) {
          var i = !!(t && t.length > 0) && t.offset().top;i !== !1 && (h.debug("Forcing scroll to an in-page link in a hidden tab", i, t), e(n).scrollTop(i));
        }, update: { content: function content(t, n, i) {
            var o = h.get.tabElement(t),
                a = o[0];i = void 0 !== i ? i : y.evaluateScripts, "string" == typeof y.cacheType && "dom" == y.cacheType.toLowerCase() && "string" != typeof n ? o.empty().append(e(n).clone(!0)) : i ? (h.debug("Updating HTML and evaluating inline scripts", t, n), o.html(n)) : (h.debug("Updating HTML", t, n), a.innerHTML = n);
          } }, fetch: { content: function content(t, n) {
            var i,
                o,
                a = h.get.tabElement(t),
                r = { dataType: "html", encodeParameters: !1, on: "now", cache: y.alwaysRefresh, headers: { "X-Remote": !0 }, onSuccess: function onSuccess(e) {
                "response" == y.cacheType && h.cache.add(n, e), h.update.content(t, e), t == v ? (h.debug("Content loaded", t), h.activate.tab(t)) : h.debug("Content loaded in background", t), y.onFirstLoad.call(a[0], t, p, b), y.onLoad.call(a[0], t, p, b), y.loadOnce ? h.cache.add(n, !0) : "string" == typeof y.cacheType && "dom" == y.cacheType.toLowerCase() && a.children().length > 0 ? setTimeout(function () {
                  var e = a.children().clone(!0);e = e.not("script"), h.cache.add(n, e);
                }, 0) : h.cache.add(n, a.html());
              }, urlData: { tab: n } },
                s = a.api("get request") || !1,
                l = s && "pending" === s.state();n = n || t, o = h.cache.read(n), y.cache && o ? (h.activate.tab(t), h.debug("Adding cached content", n), y.loadOnce || ("once" == y.evaluateScripts ? h.update.content(t, o, !1) : h.update.content(t, o)), y.onLoad.call(a[0], t, p, b)) : l ? (h.set.loading(t), h.debug("Content is already loading", n)) : void 0 !== e.api ? (i = e.extend(!0, {}, y.apiSettings, r), h.debug("Retrieving remote content", n, i), h.set.loading(t), a.api(i)) : h.error(k.api);
          } }, activate: { all: function all(e) {
            h.activate.tab(e), h.activate.navigation(e);
          }, tab: function tab(e) {
            var t = h.get.tabElement(e),
                n = "siblings" == y.deactivate ? t.siblings(g) : g.not(t),
                i = t.hasClass(x.active);h.verbose("Showing tab content for", t), i || (t.addClass(x.active), n.removeClass(x.active + " " + x.loading), t.length > 0 && y.onVisible.call(t[0], e));
          }, navigation: function navigation(e) {
            var t = h.get.navElement(e),
                n = "siblings" == y.deactivate ? t.siblings(a) : a.not(t),
                i = t.hasClass(x.active);h.verbose("Activating tab navigation for", t, e), i || (t.addClass(x.active), n.removeClass(x.active + " " + x.loading));
          } }, deactivate: { all: function all() {
            h.deactivate.navigation(), h.deactivate.tabs();
          }, navigation: function navigation() {
            a.removeClass(x.active);
          }, tabs: function tabs() {
            g.removeClass(x.active + " " + x.loading);
          } }, is: { tab: function tab(e) {
            return void 0 !== e && h.get.tabElement(e).length > 0;
          } }, get: { initialPath: function initialPath() {
            return a.eq(0).data(C.tab) || g.eq(0).data(C.tab);
          }, path: function path() {
            return e.address.value();
          }, defaultPathArray: function defaultPathArray(e) {
            return h.utilities.pathToArray(h.get.defaultPath(e));
          }, defaultPath: function defaultPath(e) {
            var t = a.filter("[data-" + C.tab + '^="' + e + '/"]').eq(0),
                n = t.data(C.tab) || !1;if (n) {
              if (h.debug("Found default tab", n), E < y.maxDepth) return E++, h.get.defaultPath(n);h.error(k.recursion);
            } else h.debug("No default tabs found for", e, g);return E = 0, e;
          }, navElement: function navElement(e) {
            return e = e || v, a.filter("[data-" + C.tab + '="' + e + '"]');
          }, tabElement: function tabElement(e) {
            var t, n, i, o;return e = e || v, i = h.utilities.pathToArray(e), o = h.utilities.last(i), t = g.filter("[data-" + C.tab + '="' + e + '"]'), n = g.filter("[data-" + C.tab + '="' + o + '"]'), t.length > 0 ? t : n;
          }, tab: function tab() {
            return v;
          } }, utilities: { filterArray: function filterArray(t, n) {
            return e.grep(t, function (t) {
              return e.inArray(t, n) == -1;
            });
          }, last: function last(t) {
            return !!e.isArray(t) && t[t.length - 1];
          }, pathToArray: function pathToArray(e) {
            return void 0 === e && (e = v), "string" == typeof e ? e.split("/") : [e];
          }, arrayToPath: function arrayToPath(t) {
            return !!e.isArray(t) && t.join("/");
          } }, setting: function setting(t, n) {
          if (h.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, y, t);else {
            if (void 0 === n) return y[t];e.isPlainObject(y[t]) ? e.extend(!0, y[t], n) : y[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, h, t);else {
            if (void 0 === n) return h[t];h[t] = n;
          }
        }, debug: function debug() {
          !y.silent && y.debug && (y.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, y.name + ":"), h.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !y.silent && y.verbose && y.debug && (y.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, y.name + ":"), h.verbose.apply(console, arguments)));
        }, error: function error() {
          y.silent || (h.error = Function.prototype.bind.call(console.error, console, y.name + ":"), h.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;y.performance && (t = new Date().getTime(), i = s || t, n = t - i, s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: F, "Execution Time": n })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 500);
          }, display: function display() {
            var t = y.name + ":",
                n = 0;s = !1, clearTimeout(h.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), (void 0 !== console.group || void 0 !== console.table) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, i) {
          var a,
              r,
              s,
              l = O;return n = n || d, i = F || i, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] ? (r = l[i], !1) : (h.error(k.method, t), !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(i, n) : void 0 !== r && (s = r), e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s), r;
        } }, u ? (void 0 === O && h.initialize(), h.invoke(c)) : (void 0 !== O && O.invoke("destroy"), h.initialize());
    }), void 0 !== o ? o : this;
  }, e.tab = function () {
    e(t).tab.apply(this, arguments);
  }, e.fn.tab.settings = { name: "Tab", namespace: "tab", silent: !1, debug: !1, verbose: !1, performance: !0, auto: !1, history: !1, historyType: "hash", path: !1, context: !1, childrenOnly: !1, maxDepth: 25, deactivate: "siblings", alwaysRefresh: !1, cache: !0, loadOnce: !1, cacheType: "response", ignoreFirstLoad: !1, apiSettings: !1, evaluateScripts: "once", onFirstLoad: function onFirstLoad(e, t, n) {}, onLoad: function onLoad(e, t, n) {}, onVisible: function onVisible(e, t, n) {}, onRequest: function onRequest(e, t, n) {}, templates: { determineTitle: function determineTitle(e) {} }, error: { api: "You attempted to load content without API module", method: "The method you called is not defined", missingTab: "Activated tab cannot be found. Tabs are case-sensitive.", noContent: "The tab you specified is missing a content url.", path: "History enabled, but no path was specified", recursion: "Max recursive depth reached", legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.", legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code", state: "History requires Asual's Address library <https://github.com/asual/jquery-address>" }, metadata: { tab: "tab", loaded: "loaded", promise: "promise" }, className: { loading: "loading", active: "active" }, selector: { tabs: ".ui.tab", ui: ".ui" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.transition = function () {
    var i,
        o = e(this),
        a = o.selector || "",
        r = new Date().getTime(),
        s = [],
        l = arguments,
        c = l[0],
        u = [].slice.call(arguments, 1),
        d = "string" == typeof c;t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;return o.each(function (t) {
      var f,
          m,
          g,
          v,
          p,
          h,
          b,
          y,
          x,
          C = e(this),
          w = this;x = { initialize: function initialize() {
          f = x.get.settings.apply(w, l), v = f.className, g = f.error, p = f.metadata, y = "." + f.namespace, b = "module-" + f.namespace, m = C.data(b) || x, h = x.get.animationEndEvent(), d && (d = x.invoke(c)), d === !1 && (x.verbose("Converted arguments into settings object", f), f.interval ? x.delay(f.animate) : x.animate(), x.instantiate());
        }, instantiate: function instantiate() {
          x.verbose("Storing instance of module", x), m = x, C.data(b, m);
        }, destroy: function destroy() {
          x.verbose("Destroying previous module for", w), C.removeData(b);
        }, refresh: function refresh() {
          x.verbose("Refreshing display type on next animation"), delete x.displayType;
        }, forceRepaint: function forceRepaint() {
          x.verbose("Forcing element repaint");var e = C.parent(),
              t = C.next();0 === t.length ? C.detach().appendTo(e) : C.detach().insertBefore(t);
        }, repaint: function repaint() {
          x.verbose("Repainting element");w.offsetWidth;
        }, delay: function delay(e) {
          var n,
              i,
              a = x.get.animationDirection();a || (a = x.can.transition() ? x.get.direction() : "static"), e = void 0 !== e ? e : f.interval, n = "auto" == f.reverse && a == v.outward, i = n || 1 == f.reverse ? (o.length - t) * f.interval : t * f.interval, x.debug("Delaying animation by", i), setTimeout(x.animate, i);
        }, animate: function animate(e) {
          if (f = e || f, !x.is.supported()) return x.error(g.support), !1;if (x.debug("Preparing animation", f.animation), x.is.animating()) {
            if (f.queue) return !f.allowRepeats && x.has.direction() && x.is.occurring() && x.queuing !== !0 ? x.debug("Animation is currently occurring, preventing queueing same animation", f.animation) : x.queue(f.animation), !1;if (!f.allowRepeats && x.is.occurring()) return x.debug("Animation is already occurring, will not execute repeated animation", f.animation), !1;x.debug("New animation started, completing previous early", f.animation), m.complete();
          }x.can.animate() ? x.set.animating(f.animation) : x.error(g.noAnimation, f.animation, w);
        }, reset: function reset() {
          x.debug("Resetting animation to beginning conditions"), x.remove.animationCallbacks(), x.restore.conditions(), x.remove.animating();
        }, queue: function queue(e) {
          x.debug("Queueing animation of", e), x.queuing = !0, C.one(h + ".queue" + y, function () {
            x.queuing = !1, x.repaint(), x.animate.apply(this, f);
          });
        }, complete: function complete(e) {
          x.debug("Animation complete", f.animation), x.remove.completeCallback(), x.remove.failSafe(), x.is.looping() || (x.is.outward() ? (x.verbose("Animation is outward, hiding element"), x.restore.conditions(), x.hide()) : x.is.inward() ? (x.verbose("Animation is outward, showing element"), x.restore.conditions(), x.show()) : (x.verbose("Static animation completed"), x.restore.conditions(), f.onComplete.call(w)));
        }, force: { visible: function visible() {
            var e = C.attr("style"),
                t = x.get.userStyle(),
                n = x.get.displayType(),
                i = t + "display: " + n + " !important;",
                o = C.css("display"),
                a = void 0 === e || "" === e;o !== n ? (x.verbose("Overriding default display to show element", n), C.attr("style", i)) : a && C.removeAttr("style");
          }, hidden: function hidden() {
            var e = C.attr("style"),
                t = C.css("display"),
                n = void 0 === e || "" === e;"none" === t || x.is.hidden() ? n && C.removeAttr("style") : (x.verbose("Overriding default display to hide element"), C.css("display", "none"));
          } }, has: { direction: function direction(t) {
            var n = !1;return t = t || f.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function (e, t) {
              t !== v.inward && t !== v.outward || (n = !0);
            })), n;
          }, inlineDisplay: function inlineDisplay() {
            var t = C.attr("style") || "";return e.isArray(t.match(/display.*?;/, ""));
          } }, set: { animating: function animating(e) {
            var t;x.remove.completeCallback(), e = e || f.animation, t = x.get.animationClass(e), x.save.animation(t), x.force.visible(), x.remove.hidden(), x.remove.direction(), x.start.animation(t);
          }, duration: function duration(e, t) {
            t = t || f.duration, ((t = "number" == typeof t ? t + "ms" : t) || 0 === t) && (x.verbose("Setting animation duration", t), C.css({ "animation-duration": t }));
          }, direction: function direction(e) {
            e = e || x.get.direction(), e == v.inward ? x.set.inward() : x.set.outward();
          }, looping: function looping() {
            x.debug("Transition set to loop"), C.addClass(v.looping);
          }, hidden: function hidden() {
            C.addClass(v.transition).addClass(v.hidden);
          }, inward: function inward() {
            x.debug("Setting direction to inward"), C.removeClass(v.outward).addClass(v.inward);
          }, outward: function outward() {
            x.debug("Setting direction to outward"), C.removeClass(v.inward).addClass(v.outward);
          }, visible: function visible() {
            C.addClass(v.transition).addClass(v.visible);
          } }, start: { animation: function animation(e) {
            e = e || x.get.animationClass(), x.debug("Starting tween", e), C.addClass(e).one(h + ".complete" + y, x.complete), f.useFailSafe && x.add.failSafe(), x.set.duration(f.duration), f.onStart.call(w);
          } }, save: { animation: function animation(e) {
            x.cache || (x.cache = {}), x.cache.animation = e;
          }, displayType: function displayType(e) {
            "none" !== e && C.data(p.displayType, e);
          }, transitionExists: function transitionExists(t, n) {
            e.fn.transition.exists[t] = n, x.verbose("Saving existence of transition", t, n);
          } }, restore: { conditions: function conditions() {
            var e = x.get.currentAnimation();e && (C.removeClass(e), x.verbose("Removing animation class", x.cache)), x.remove.duration();
          } }, add: { failSafe: function failSafe() {
            var e = x.get.duration();x.timer = setTimeout(function () {
              C.triggerHandler(h);
            }, e + f.failSafeDelay), x.verbose("Adding fail safe timer", x.timer);
          } }, remove: { animating: function animating() {
            C.removeClass(v.animating);
          }, animationCallbacks: function animationCallbacks() {
            x.remove.queueCallback(), x.remove.completeCallback();
          }, queueCallback: function queueCallback() {
            C.off(".queue" + y);
          }, completeCallback: function completeCallback() {
            C.off(".complete" + y);
          }, display: function display() {
            C.css("display", "");
          }, direction: function direction() {
            C.removeClass(v.inward).removeClass(v.outward);
          }, duration: function duration() {
            C.css("animation-duration", "");
          }, failSafe: function failSafe() {
            x.verbose("Removing fail safe timer", x.timer), x.timer && clearTimeout(x.timer);
          }, hidden: function hidden() {
            C.removeClass(v.hidden);
          }, visible: function visible() {
            C.removeClass(v.visible);
          }, looping: function looping() {
            x.debug("Transitions are no longer looping"), x.is.looping() && (x.reset(), C.removeClass(v.looping));
          }, transition: function transition() {
            C.removeClass(v.visible).removeClass(v.hidden);
          } }, get: { settings: function settings(t, n, i) {
            return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e.extend(!0, {}, e.fn.transition.settings, t) : "function" == typeof i ? e.extend({}, e.fn.transition.settings, { animation: t, onComplete: i, duration: n }) : "string" == typeof n || "number" == typeof n ? e.extend({}, e.fn.transition.settings, { animation: t, duration: n }) : "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? e.extend({}, e.fn.transition.settings, n, { animation: t }) : "function" == typeof n ? e.extend({}, e.fn.transition.settings, { animation: t, onComplete: n }) : e.extend({}, e.fn.transition.settings, { animation: t });
          }, animationClass: function animationClass(e) {
            var t = e || f.animation,
                n = x.can.transition() && !x.has.direction() ? x.get.direction() + " " : "";return v.animating + " " + v.transition + " " + n + t;
          }, currentAnimation: function currentAnimation() {
            return !(!x.cache || void 0 === x.cache.animation) && x.cache.animation;
          }, currentDirection: function currentDirection() {
            return x.is.inward() ? v.inward : v.outward;
          }, direction: function direction() {
            return x.is.hidden() || !x.is.visible() ? v.inward : v.outward;
          }, animationDirection: function animationDirection(t) {
            var n;return t = t || f.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function (e, t) {
              t === v.inward ? n = v.inward : t === v.outward && (n = v.outward);
            })), !!n && n;
          }, duration: function duration(e) {
            return e = e || f.duration, e === !1 && (e = C.css("animation-duration") || 0), "string" == typeof e ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e;
          }, displayType: function displayType(e) {
            return e = void 0 === e || e, f.displayType ? f.displayType : (e && void 0 === C.data(p.displayType) && x.can.transition(!0), C.data(p.displayType));
          }, userStyle: function userStyle(e) {
            return e = e || C.attr("style") || "", e.replace(/display.*?;/, "");
          }, transitionExists: function transitionExists(t) {
            return e.fn.transition.exists[t];
          }, animationStartEvent: function animationStartEvent() {
            var e,
                t = n.createElement("div"),
                i = { animation: "animationstart", OAnimation: "oAnimationStart", MozAnimation: "mozAnimationStart", WebkitAnimation: "webkitAnimationStart" };for (e in i) {
              if (void 0 !== t.style[e]) return i[e];
            }return !1;
          }, animationEndEvent: function animationEndEvent() {
            var e,
                t = n.createElement("div"),
                i = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "mozAnimationEnd", WebkitAnimation: "webkitAnimationEnd" };for (e in i) {
              if (void 0 !== t.style[e]) return i[e];
            }return !1;
          } }, can: { transition: function transition(t) {
            var n,
                i,
                o,
                a,
                r,
                s,
                l = f.animation,
                c = x.get.transitionExists(l),
                u = x.get.displayType(!1);if (void 0 === c || t) {
              if (x.verbose("Determining whether animation exists"), n = C.attr("class"), i = C.prop("tagName"), o = e("<" + i + " />").addClass(n).insertAfter(C), a = o.addClass(l).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css("animationName"), r = o.addClass(v.inward).css("animationName"), u || (u = o.attr("class", n).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"), x.verbose("Determining final display state", u), x.save.displayType(u)), o.remove(), a != r) x.debug("Direction exists for animation", l), s = !0;else {
                if ("none" == a || !a) return void x.debug("No animation defined in css", l);x.debug("Static animation found", l, u), s = !1;
              }x.save.transitionExists(l, s);
            }return void 0 !== c ? c : s;
          }, animate: function animate() {
            return void 0 !== x.can.transition();
          } }, is: { animating: function animating() {
            return C.hasClass(v.animating);
          }, inward: function inward() {
            return C.hasClass(v.inward);
          }, outward: function outward() {
            return C.hasClass(v.outward);
          }, looping: function looping() {
            return C.hasClass(v.looping);
          }, occurring: function occurring(e) {
            return e = e || f.animation, e = "." + e.replace(" ", "."), C.filter(e).length > 0;
          }, visible: function visible() {
            return C.is(":visible");
          }, hidden: function hidden() {
            return "hidden" === C.css("visibility");
          }, supported: function supported() {
            return h !== !1;
          } }, hide: function hide() {
          x.verbose("Hiding element"), x.is.animating() && x.reset(), w.blur(), x.remove.display(), x.remove.visible(), x.set.hidden(), x.force.hidden(), f.onHide.call(w), f.onComplete.call(w);
        }, show: function show(e) {
          x.verbose("Showing element", e), x.remove.hidden(), x.set.visible(), x.force.visible(), f.onShow.call(w), f.onComplete.call(w);
        }, toggle: function toggle() {
          x.is.visible() ? x.hide() : x.show();
        }, stop: function stop() {
          x.debug("Stopping current animation"), C.triggerHandler(h);
        }, stopAll: function stopAll() {
          x.debug("Stopping all animation"), x.remove.queueCallback(), C.triggerHandler(h);
        }, clear: { queue: function queue() {
            x.debug("Clearing animation queue"), x.remove.queueCallback();
          } }, enable: function enable() {
          x.verbose("Starting animation"), C.removeClass(v.disabled);
        }, disable: function disable() {
          x.debug("Stopping animation"), C.addClass(v.disabled);
        }, setting: function setting(t, n) {
          if (x.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);else {
            if (void 0 === n) return f[t];e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, x, t);else {
            if (void 0 === n) return x[t];x[t] = n;
          }
        }, debug: function debug() {
          !f.silent && f.debug && (f.performance ? x.performance.log(arguments) : (x.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), x.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !f.silent && f.verbose && f.debug && (f.performance ? x.performance.log(arguments) : (x.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), x.verbose.apply(console, arguments)));
        }, error: function error() {
          f.silent || (x.error = Function.prototype.bind.call(console.error, console, f.name + ":"), x.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;f.performance && (t = new Date().getTime(), i = r || t, n = t - i, r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: w, "Execution Time": n })), clearTimeout(x.performance.timer), x.performance.timer = setTimeout(x.performance.display, 500);
          }, display: function display() {
            var t = f.name + ":",
                n = 0;r = !1, clearTimeout(x.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", a && (t += " '" + a + "'"), o.length > 1 && (t += " (" + o.length + ")"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function invoke(t, n, o) {
          var a,
              r,
              s,
              l = m;return n = n || u, o = w || o, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] && (r = l[i], !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(o, n) : void 0 !== r && (s = r), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), void 0 !== r && r;
        } }, x.initialize();
    }), void 0 !== i ? i : this;
  }, e.fn.transition.exists = {}, e.fn.transition.settings = { name: "Transition", silent: !1, debug: !1, verbose: !1, performance: !0, namespace: "transition", interval: 0, reverse: "auto", onStart: function onStart() {}, onComplete: function onComplete() {}, onShow: function onShow() {}, onHide: function onHide() {}, useFailSafe: !0, failSafeDelay: 100, allowRepeats: !1, displayType: !1, animation: "fade", duration: !1, queue: !0, metadata: { displayType: "display" }, className: { animating: "animating", disabled: "disabled", hidden: "hidden", inward: "in", loading: "loading", looping: "looping", outward: "out", transition: "transition", visible: "visible" }, error: { noAnimation: "Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.", repeated: "That animation is already occurring, cancelling repeated animation", method: "The method you called is not defined", support: "This browser does not support CSS animations" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  var t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();e.api = e.fn.api = function (n) {
    var i,
        o = e(e.isFunction(this) ? t : this),
        a = o.selector || "",
        r = new Date().getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);return o.each(function () {
      var o,
          d,
          f,
          m,
          g,
          v = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.api.settings, n) : e.extend({}, e.fn.api.settings),
          p = v.namespace,
          h = v.metadata,
          b = v.selector,
          y = v.error,
          x = v.className,
          C = "." + p,
          w = "module-" + p,
          k = e(this),
          S = k.closest(b.form),
          T = v.stateContext ? e(v.stateContext) : k,
          A = this,
          R = T[0],
          P = k.data(w);g = { initialize: function initialize() {
          c || g.bind.events(), g.instantiate();
        }, instantiate: function instantiate() {
          g.verbose("Storing instance of module", g), P = g, k.data(w, P);
        }, destroy: function destroy() {
          g.verbose("Destroying previous module for", A), k.removeData(w).off(C);
        }, bind: { events: function events() {
            var e = g.get.event();e ? (g.verbose("Attaching API events to element", e), k.on(e + C, g.event.trigger)) : "now" == v.on && (g.debug("Querying API endpoint immediately"), g.query());
          } }, decode: { json: function json(e) {
            if (void 0 !== e && "string" == typeof e) try {
              e = JSON.parse(e);
            } catch (e) {}return e;
          } }, read: { cachedResponse: function cachedResponse(e) {
            var n;return void 0 === t.Storage ? void g.error(y.noStorage) : (n = sessionStorage.getItem(e), g.debug("Using cached response", e, n), n = g.decode.json(n));
          } }, write: { cachedResponse: function cachedResponse(n, i) {
            return i && "" === i ? void g.debug("Response empty, not caching", i) : void 0 === t.Storage ? void g.error(y.noStorage) : (e.isPlainObject(i) && (i = JSON.stringify(i)), sessionStorage.setItem(n, i), void g.verbose("Storing cached response for url", n, i));
          } }, query: function query() {
          if (g.is.disabled()) return void g.debug("Element is disabled API request aborted");if (g.is.loading()) {
            if (!v.interruptRequests) return void g.debug("Cancelling request, previous request is still pending");g.debug("Interrupting previous request"), g.abort();
          }if (v.defaultData && e.extend(!0, v.urlData, g.get.defaultData()), v.serializeForm && (v.data = g.add.formData(v.data)), (d = g.get.settings()) === !1) return g.cancelled = !0, void g.error(y.beforeSend);if (g.cancelled = !1, !(f = g.get.templatedURL()) && !g.is.mocked()) return void g.error(y.missingURL);if ((f = g.add.urlData(f)) || g.is.mocked()) {
            if (d.url = v.base + f, o = e.extend(!0, {}, v, { type: v.method || v.type, data: void 0, url: v.base + f, beforeSend: v.beforeXHR, success: function success() {}, failure: function failure() {}, complete: function complete() {} }), g.debug("Querying URL", o.url), g.verbose("Using AJAX settings", o), "local" === v.cache && g.read.cachedResponse(f)) return g.debug("Response returned from local cache"), g.request = g.create.request(), void g.request.resolveWith(R, [g.read.cachedResponse(f)]);v.throttle ? v.throttleFirstRequest || g.timer ? (g.debug("Throttling request", v.throttle), clearTimeout(g.timer), g.timer = setTimeout(function () {
              g.timer && delete g.timer, g.debug("Sending throttled request", void 0, o.method), g.send.request();
            }, v.throttle)) : (g.debug("Sending request", void 0, o.method), g.send.request(), g.timer = setTimeout(function () {}, v.throttle)) : (g.debug("Sending request", void 0, o.method), g.send.request());
          }
        }, should: { removeError: function removeError() {
            return v.hideError === !0 || "auto" === v.hideError && !g.is.form();
          } }, is: { disabled: function disabled() {
            return k.filter(b.disabled).length > 0;
          }, expectingJSON: function expectingJSON() {
            return "json" === v.dataType || "jsonp" === v.dataType;
          }, form: function form() {
            return k.is("form") || T.is("form");
          }, mocked: function mocked() {
            return v.mockResponse || v.mockResponseAsync || v.response || v.responseAsync;
          }, input: function input() {
            return k.is("input");
          }, loading: function loading() {
            return !!g.request && "pending" == g.request.state();
          }, abortedRequest: function abortedRequest(e) {
            return e && void 0 !== e.readyState && 0 === e.readyState ? (g.verbose("XHR request determined to be aborted"), !0) : (g.verbose("XHR request was not aborted"), !1);
          }, validResponse: function validResponse(t) {
            return g.is.expectingJSON() && e.isFunction(v.successTest) ? (g.debug("Checking JSON returned success", v.successTest, t), v.successTest(t) ? (g.debug("Response passed success test", t), !0) : (g.debug("Response failed success test", t), !1)) : (g.verbose("Response is not JSON, skipping validation", v.successTest, t), !0);
          } }, was: { cancelled: function cancelled() {
            return g.cancelled || !1;
          }, succesful: function succesful() {
            return g.request && "resolved" == g.request.state();
          }, failure: function failure() {
            return g.request && "rejected" == g.request.state();
          }, complete: function complete() {
            return g.request && ("resolved" == g.request.state() || "rejected" == g.request.state());
          } }, add: { urlData: function urlData(t, n) {
            var i, o;return t && (i = t.match(v.regExp.required), o = t.match(v.regExp.optional), n = n || v.urlData, i && (g.debug("Looking for required URL variables", i), e.each(i, function (i, o) {
              var a = o.indexOf("$") !== -1 ? o.substr(2, o.length - 3) : o.substr(1, o.length - 2),
                  r = e.isPlainObject(n) && void 0 !== n[a] ? n[a] : void 0 !== k.data(a) ? k.data(a) : void 0 !== T.data(a) ? T.data(a) : n[a];if (void 0 === r) return g.error(y.requiredParameter, a, t), t = !1, !1;g.verbose("Found required variable", a, r), r = v.encodeParameters ? g.get.urlEncodedValue(r) : r, t = t.replace(o, r);
            })), o && (g.debug("Looking for optional URL variables", i), e.each(o, function (i, o) {
              var a = o.indexOf("$") !== -1 ? o.substr(3, o.length - 4) : o.substr(2, o.length - 3),
                  r = e.isPlainObject(n) && void 0 !== n[a] ? n[a] : void 0 !== k.data(a) ? k.data(a) : void 0 !== T.data(a) ? T.data(a) : n[a];void 0 !== r ? (g.verbose("Optional variable Found", a, r), t = t.replace(o, r)) : (g.verbose("Optional variable not found", a), t = t.indexOf("/" + o) !== -1 ? t.replace("/" + o, "") : t.replace(o, ""));
            }))), t;
          }, formData: function formData(t) {
            var n,
                i = void 0 !== e.fn.serializeObject,
                o = i ? S.serializeObject() : S.serialize();return t = t || v.data, n = e.isPlainObject(t), n ? i ? (g.debug("Extending existing data with form data", t, o), t = e.extend(!0, {}, t, o)) : (g.error(y.missingSerialize), g.debug("Cant extend data. Replacing data with form data", t, o), t = o) : (g.debug("Adding form data", o), t = o), t;
          } }, send: { request: function request() {
            g.set.loading(), g.request = g.create.request(), g.is.mocked() ? g.mockedXHR = g.create.mockedXHR() : g.xhr = g.create.xhr(), v.onRequest.call(R, g.request, g.xhr);
          } }, event: { trigger: function trigger(e) {
            g.query(), "submit" != e.type && "click" != e.type || e.preventDefault();
          }, xhr: { always: function always() {}, done: function done(t, n, i) {
              var o = this,
                  a = new Date().getTime() - m,
                  r = v.loadingDuration - a,
                  s = !!e.isFunction(v.onResponse) && (g.is.expectingJSON() ? v.onResponse.call(o, e.extend(!0, {}, t)) : v.onResponse.call(o, t));r = r > 0 ? r : 0, s && (g.debug("Modified API response in onResponse callback", v.onResponse, s, t), t = s), r > 0 && g.debug("Response completed early delaying state change by", r), setTimeout(function () {
                g.is.validResponse(t) ? g.request.resolveWith(o, [t, i]) : g.request.rejectWith(o, [i, "invalid"]);
              }, r);
            }, fail: function fail(e, t, n) {
              var i = this,
                  o = new Date().getTime() - m,
                  a = v.loadingDuration - o;a = a > 0 ? a : 0, a > 0 && g.debug("Response completed early delaying state change by", a), setTimeout(function () {
                g.is.abortedRequest(e) ? g.request.rejectWith(i, [e, "aborted", n]) : g.request.rejectWith(i, [e, "error", t, n]);
              }, a);
            } }, request: { done: function done(e, t) {
              g.debug("Successful API Response", e), "local" === v.cache && f && (g.write.cachedResponse(f, e), g.debug("Saving server response locally", g.cache)), v.onSuccess.call(R, e, k, t);
            }, complete: function complete(e, t) {
              var n, i;g.was.succesful() ? (i = e, n = t) : (n = e, i = g.get.responseFromXHR(n)), g.remove.loading(), v.onComplete.call(R, i, k, n);
            }, fail: function fail(e, t, n) {
              var i = g.get.responseFromXHR(e),
                  a = g.get.errorFromRequest(i, t, n);if ("aborted" == t) return g.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), v.onAbort.call(R, t, k, e), !0;"invalid" == t ? g.debug("JSON did not pass success test. A server-side error has most likely occurred", i) : "error" == t && void 0 !== e && (g.debug("XHR produced a server error", t, n), 200 != e.status && void 0 !== n && "" !== n && g.error(y.statusMessage + n, o.url), v.onError.call(R, a, k, e)), v.errorDuration && "aborted" !== t && (g.debug("Adding error state"), g.set.error(), g.should.removeError() && setTimeout(g.remove.error, v.errorDuration)), g.debug("API Request failed", a, e), v.onFailure.call(R, i, k, e);
            } } }, create: { request: function request() {
            return e.Deferred().always(g.event.request.complete).done(g.event.request.done).fail(g.event.request.fail);
          }, mockedXHR: function mockedXHR() {
            var t,
                n,
                i,
                o = v.mockResponse || v.response,
                a = v.mockResponseAsync || v.responseAsync;return i = e.Deferred().always(g.event.xhr.complete).done(g.event.xhr.done).fail(g.event.xhr.fail), o ? (e.isFunction(o) ? (g.debug("Using specified synchronous callback", o), n = o.call(R, d)) : (g.debug("Using settings specified response", o), n = o), i.resolveWith(R, [n, !1, { responseText: n }])) : e.isFunction(a) && (t = function t(e) {
              g.debug("Async callback returned response", e), e ? i.resolveWith(R, [e, !1, { responseText: e }]) : i.rejectWith(R, [{ responseText: e }, !1, !1]);
            }, g.debug("Using specified async response callback", a), a.call(R, d, t)), i;
          }, xhr: function xhr() {
            var t;return t = e.ajax(o).always(g.event.xhr.always).done(g.event.xhr.done).fail(g.event.xhr.fail), g.verbose("Created server request", t, o), t;
          } }, set: { error: function error() {
            g.verbose("Adding error state to element", T), T.addClass(x.error);
          }, loading: function loading() {
            g.verbose("Adding loading state to element", T), T.addClass(x.loading), m = new Date().getTime();
          } }, remove: { error: function error() {
            g.verbose("Removing error state from element", T), T.removeClass(x.error);
          }, loading: function loading() {
            g.verbose("Removing loading state from element", T), T.removeClass(x.loading);
          } }, get: { responseFromXHR: function responseFromXHR(t) {
            return !!e.isPlainObject(t) && (g.is.expectingJSON() ? g.decode.json(t.responseText) : t.responseText);
          }, errorFromRequest: function errorFromRequest(t, n, i) {
            return e.isPlainObject(t) && void 0 !== t.error ? t.error : void 0 !== v.error[n] ? v.error[n] : i;
          }, request: function request() {
            return g.request || !1;
          }, xhr: function xhr() {
            return g.xhr || !1;
          }, settings: function settings() {
            var t;return t = v.beforeSend.call(R, v), t && (void 0 !== t.success && (g.debug("Legacy success callback detected", t), g.error(y.legacyParameters, t.success), t.onSuccess = t.success), void 0 !== t.failure && (g.debug("Legacy failure callback detected", t), g.error(y.legacyParameters, t.failure), t.onFailure = t.failure), void 0 !== t.complete && (g.debug("Legacy complete callback detected", t), g.error(y.legacyParameters, t.complete), t.onComplete = t.complete)), void 0 === t && g.error(y.noReturnedValue), t === !1 ? t : void 0 !== t ? e.extend(!0, {}, t) : e.extend(!0, {}, v);
          }, urlEncodedValue: function urlEncodedValue(e) {
            var n = t.decodeURIComponent(e),
                i = t.encodeURIComponent(e);return n !== e ? (g.debug("URL value is already encoded, avoiding double encoding", e), e) : (g.verbose("Encoding value using encodeURIComponent", e, i), i);
          }, defaultData: function defaultData() {
            var t = {};return e.isWindow(A) || (g.is.input() ? t.value = k.val() : g.is.form() || (t.text = k.text())), t;
          }, event: function event() {
            return e.isWindow(A) || "now" == v.on ? (g.debug("API called without element, no events attached"), !1) : "auto" == v.on ? k.is("input") ? void 0 !== A.oninput ? "input" : void 0 !== A.onpropertychange ? "propertychange" : "keyup" : k.is("form") ? "submit" : "click" : v.on;
          }, templatedURL: function templatedURL(e) {
            if (e = e || k.data(h.action) || v.action || !1, f = k.data(h.url) || v.url || !1) return g.debug("Using specified url", f), f;if (e) {
              if (g.debug("Looking up url for action", e, v.api), void 0 === v.api[e] && !g.is.mocked()) return void g.error(y.missingAction, v.action, v.api);f = v.api[e];
            } else g.is.form() && (f = k.attr("action") || T.attr("action") || !1, g.debug("No url or action specified, defaulting to form action", f));return f;
          } }, abort: function abort() {
          var e = g.get.xhr();e && "resolved" !== e.state() && (g.debug("Cancelling API request"), e.abort());
        }, reset: function reset() {
          g.remove.error(), g.remove.loading();
        }, setting: function setting(t, n) {
          if (g.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, v, t);else {
            if (void 0 === n) return v[t];e.isPlainObject(v[t]) ? e.extend(!0, v[t], n) : v[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, g, t);else {
            if (void 0 === n) return g[t];g[t] = n;
          }
        }, debug: function debug() {
          !v.silent && v.debug && (v.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), g.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !v.silent && v.verbose && v.debug && (v.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), g.verbose.apply(console, arguments)));
        }, error: function error() {
          v.silent || (g.error = Function.prototype.bind.call(console.error, console, v.name + ":"), g.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;v.performance && (t = new Date().getTime(), i = r || t, n = t - i, r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", "Execution Time": n })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500);
          }, display: function display() {
            var t = v.name + ":",
                n = 0;r = !1, clearTimeout(g.performance.timer), e.each(s, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", a && (t += " '" + a + "'"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function invoke(t, n, o) {
          var a,
              r,
              s,
              l = P;return n = n || u, o = A || o, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] ? (r = l[i], !1) : (g.error(y.method, t), !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(o, n) : void 0 !== r && (s = r), e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s), r;
        } }, c ? (void 0 === P && g.initialize(), g.invoke(l)) : (void 0 !== P && P.invoke("destroy"), g.initialize());
    }), void 0 !== i ? i : this;
  }, e.api.settings = { name: "API", namespace: "api", debug: !1, verbose: !1, performance: !0, api: {}, cache: !0, interruptRequests: !0, on: "auto", stateContext: !1, loadingDuration: 0, hideError: "auto", errorDuration: 2e3, encodeParameters: !0, action: !1, url: !1, base: "", urlData: {}, defaultData: !0, serializeForm: !1, throttle: 0, throttleFirstRequest: !0, method: "get", data: {}, dataType: "json", mockResponse: !1, mockResponseAsync: !1, response: !1, responseAsync: !1, beforeSend: function beforeSend(e) {
      return e;
    }, beforeXHR: function beforeXHR(e) {}, onRequest: function onRequest(e, t) {}, onResponse: !1, onSuccess: function onSuccess(e, t) {}, onComplete: function onComplete(e, t) {}, onFailure: function onFailure(e, t) {}, onError: function onError(e, t) {}, onAbort: function onAbort(e, t) {}, successTest: !1, error: { beforeSend: "The before send function has aborted the request", error: "There was an error with your request", exitConditions: "API Request Aborted. Exit conditions met", JSONParse: "JSON could not be parsed during error handling", legacyParameters: "You are using legacy API success callback names", method: "The method you called is not defined", missingAction: "API action used but no url was defined", missingSerialize: "jquery-serialize-object is required to add form data to an existing data object", missingURL: "No URL specified for api event", noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.", noStorage: "Caching responses locally requires session storage", parseError: "There was an error parsing your request", requiredParameter: "Missing a required URL parameter: ", statusMessage: "Server gave an error: ", timeout: "Your request timed out" }, regExp: { required: /\{\$*[A-z0-9]+\}/g, optional: /\{\/\$*[A-z0-9]+\}/g }, className: { loading: "loading", error: "error" }, selector: { disabled: ".disabled", form: "form" }, metadata: { action: "action", url: "url" } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.state = function (t) {
    var i,
        o = e(this),
        a = o.selector || "",
        r = (n.documentElement, new Date().getTime()),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);return o.each(function () {
      var n,
          d = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.state.settings, t) : e.extend({}, e.fn.state.settings),
          f = d.error,
          m = d.metadata,
          g = d.className,
          v = d.namespace,
          p = d.states,
          h = d.text,
          b = "." + v,
          y = v + "-module",
          x = e(this),
          C = this,
          w = x.data(y);n = { initialize: function initialize() {
          n.verbose("Initializing module"), d.automatic && n.add.defaults(), d.context && "" !== a ? e(d.context).on(a, "mouseenter" + b, n.change.text).on(a, "mouseleave" + b, n.reset.text).on(a, "click" + b, n.toggle.state) : x.on("mouseenter" + b, n.change.text).on("mouseleave" + b, n.reset.text).on("click" + b, n.toggle.state), n.instantiate();
        }, instantiate: function instantiate() {
          n.verbose("Storing instance of module", n), w = n, x.data(y, n);
        }, destroy: function destroy() {
          n.verbose("Destroying previous module", w), x.off(b).removeData(y);
        }, refresh: function refresh() {
          n.verbose("Refreshing selector cache"), x = e(C);
        }, add: { defaults: function defaults() {
            var i = t && e.isPlainObject(t.states) ? t.states : {};e.each(d.defaults, function (t, o) {
              void 0 !== n.is[t] && n.is[t]() && (n.verbose("Adding default states", t, C), e.extend(d.states, o, i));
            });
          } }, is: { active: function active() {
            return x.hasClass(g.active);
          }, loading: function loading() {
            return x.hasClass(g.loading);
          }, inactive: function inactive() {
            return !x.hasClass(g.active);
          }, state: function state(e) {
            return void 0 !== g[e] && x.hasClass(g[e]);
          }, enabled: function enabled() {
            return !x.is(d.filter.active);
          }, disabled: function disabled() {
            return x.is(d.filter.active);
          }, textEnabled: function textEnabled() {
            return !x.is(d.filter.text);
          }, button: function button() {
            return x.is(".button:not(a, .submit)");
          }, input: function input() {
            return x.is("input");
          }, progress: function progress() {
            return x.is(".ui.progress");
          } }, allow: function allow(e) {
          n.debug("Now allowing state", e), p[e] = !0;
        }, disallow: function disallow(e) {
          n.debug("No longer allowing", e), p[e] = !1;
        }, allows: function allows(e) {
          return p[e] || !1;
        }, enable: function enable() {
          x.removeClass(g.disabled);
        }, disable: function disable() {
          x.addClass(g.disabled);
        }, setState: function setState(e) {
          n.allows(e) && x.addClass(g[e]);
        }, removeState: function removeState(e) {
          n.allows(e) && x.removeClass(g[e]);
        }, toggle: { state: function state() {
            var t;if (n.allows("active") && n.is.enabled()) {
              if (n.refresh(), void 0 !== e.fn.api) if (t = x.api("get request"), x.api("was cancelled")) n.debug("API Request cancelled by beforesend"), d.activateTest = function () {
                return !1;
              }, d.deactivateTest = function () {
                return !1;
              };else if (t) return void n.listenTo(t);n.change.state();
            }
          } }, listenTo: function listenTo(t) {
          n.debug("API request detected, waiting for state signal", t), t && (h.loading && n.update.text(h.loading), e.when(t).then(function () {
            "resolved" == t.state() ? (n.debug("API request succeeded"), d.activateTest = function () {
              return !0;
            }, d.deactivateTest = function () {
              return !0;
            }) : (n.debug("API request failed"), d.activateTest = function () {
              return !1;
            }, d.deactivateTest = function () {
              return !1;
            }), n.change.state();
          }));
        }, change: { state: function state() {
            n.debug("Determining state change direction"), n.is.inactive() ? n.activate() : n.deactivate(), d.sync && n.sync(), d.onChange.call(C);
          }, text: function text() {
            n.is.textEnabled() && (n.is.disabled() ? (n.verbose("Changing text to disabled text", h.hover), n.update.text(h.disabled)) : n.is.active() ? h.hover ? (n.verbose("Changing text to hover text", h.hover), n.update.text(h.hover)) : h.deactivate && (n.verbose("Changing text to deactivating text", h.deactivate), n.update.text(h.deactivate)) : h.hover ? (n.verbose("Changing text to hover text", h.hover), n.update.text(h.hover)) : h.activate && (n.verbose("Changing text to activating text", h.activate), n.update.text(h.activate)));
          } }, activate: function activate() {
          d.activateTest.call(C) && (n.debug("Setting state to active"), x.addClass(g.active), n.update.text(h.active), d.onActivate.call(C));
        }, deactivate: function deactivate() {
          d.deactivateTest.call(C) && (n.debug("Setting state to inactive"), x.removeClass(g.active), n.update.text(h.inactive), d.onDeactivate.call(C));
        }, sync: function sync() {
          n.verbose("Syncing other buttons to current state"), n.is.active() ? o.not(x).state("activate") : o.not(x).state("deactivate");
        }, get: { text: function text() {
            return d.selector.text ? x.find(d.selector.text).text() : x.html();
          }, textFor: function textFor(e) {
            return h[e] || !1;
          } }, flash: { text: function text(e, t, i) {
            var o = n.get.text();n.debug("Flashing text message", e, t), e = e || d.text.flash, t = t || d.flashDuration, i = i || function () {}, n.update.text(e), setTimeout(function () {
              n.update.text(o), i.call(C);
            }, t);
          } }, reset: { text: function text() {
            var e = h.active || x.data(m.storedText),
                t = h.inactive || x.data(m.storedText);n.is.textEnabled() && (n.is.active() && e ? (n.verbose("Resetting active text", e), n.update.text(e)) : t && (n.verbose("Resetting inactive text", e), n.update.text(t)));
          } }, update: { text: function text(e) {
            var t = n.get.text();e && e !== t ? (n.debug("Updating text", e), d.selector.text ? x.data(m.storedText, e).find(d.selector.text).text(e) : x.data(m.storedText, e).html(e)) : n.debug("Text is already set, ignoring update", e);
          } }, setting: function setting(t, i) {
          if (n.debug("Changing setting", t, i), e.isPlainObject(t)) e.extend(!0, d, t);else {
            if (void 0 === i) return d[t];e.isPlainObject(d[t]) ? e.extend(!0, d[t], i) : d[t] = i;
          }
        }, internal: function internal(t, i) {
          if (e.isPlainObject(t)) e.extend(!0, n, t);else {
            if (void 0 === i) return n[t];n[t] = i;
          }
        }, debug: function debug() {
          !d.silent && d.debug && (d.performance ? n.performance.log(arguments) : (n.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), n.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !d.silent && d.verbose && d.debug && (d.performance ? n.performance.log(arguments) : (n.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), n.verbose.apply(console, arguments)));
        }, error: function error() {
          d.silent || (n.error = Function.prototype.bind.call(console.error, console, d.name + ":"), n.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, i, o;d.performance && (t = new Date().getTime(), o = r || t, i = t - o, r = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: C, "Execution Time": i })), clearTimeout(n.performance.timer), n.performance.timer = setTimeout(n.performance.display, 500);
          }, display: function display() {
            var t = d.name + ":",
                i = 0;r = !1, clearTimeout(n.performance.timer), e.each(s, function (e, t) {
              i += t["Execution Time"];
            }), t += " " + i + "ms", a && (t += " '" + a + "'"), (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), s = [];
          } }, invoke: function invoke(t, o, a) {
          var r,
              s,
              l,
              c = w;return o = o || u, a = C || a, "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (i, o) {
            var a = i != r ? o + t[i + 1].charAt(0).toUpperCase() + t[i + 1].slice(1) : t;if (e.isPlainObject(c[a]) && i != r) c = c[a];else {
              if (void 0 !== c[a]) return s = c[a], !1;if (!e.isPlainObject(c[o]) || i == r) return void 0 !== c[o] ? (s = c[o], !1) : (n.error(f.method, t), !1);c = c[o];
            }
          })), e.isFunction(s) ? l = s.apply(a, o) : void 0 !== s && (l = s), e.isArray(i) ? i.push(l) : void 0 !== i ? i = [i, l] : void 0 !== l && (i = l), s;
        } }, c ? (void 0 === w && n.initialize(), n.invoke(l)) : (void 0 !== w && w.invoke("destroy"), n.initialize());
    }), void 0 !== i ? i : this;
  }, e.fn.state.settings = { name: "State", debug: !1, verbose: !1, namespace: "state", performance: !0, onActivate: function onActivate() {}, onDeactivate: function onDeactivate() {}, onChange: function onChange() {}, activateTest: function activateTest() {
      return !0;
    }, deactivateTest: function deactivateTest() {
      return !0;
    }, automatic: !0, sync: !1, flashDuration: 1e3, filter: { text: ".loading, .disabled", active: ".disabled" }, context: !1, error: { beforeSend: "The before send function has cancelled state change", method: "The method you called is not defined." }, metadata: { promise: "promise", storedText: "stored-text" }, className: { active: "active", disabled: "disabled", error: "error", loading: "loading", success: "success", warning: "warning" }, selector: { text: !1 }, defaults: { input: { disabled: !0, loading: !0, active: !0 }, button: { disabled: !0, loading: !0, active: !0 }, progress: { active: !0, success: !0, warning: !0, error: !0 } }, states: { active: !0, disabled: !0, error: !0, loading: !0, success: !0, warning: !0 }, text: { disabled: !1, flash: !1, hover: !1, active: !1, inactive: !1, activate: !1, deactivate: !1 } };
}(jQuery, window, document), function (e, t, n, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.visibility = function (i) {
    var o,
        a = e(this),
        r = a.selector || "",
        s = new Date().getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1),
        f = a.length,
        m = 0;return a.each(function () {
      var a,
          g,
          v,
          p,
          h = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.visibility.settings, i) : e.extend({}, e.fn.visibility.settings),
          b = h.className,
          y = h.namespace,
          x = h.error,
          C = h.metadata,
          w = "." + y,
          k = "module-" + y,
          S = e(t),
          T = e(this),
          A = e(h.context),
          R = (T.selector, T.data(k)),
          P = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
        setTimeout(e, 0);
      },
          E = this,
          F = !1;p = { initialize: function initialize() {
          p.debug("Initializing", h), p.setup.cache(), p.should.trackChanges() && ("image" == h.type && p.setup.image(), "fixed" == h.type && p.setup.fixed(), h.observeChanges && p.observeChanges(), p.bind.events()), p.save.position(), p.is.visible() || p.error(x.visible, T), h.initialCheck && p.checkVisibility(), p.instantiate();
        }, instantiate: function instantiate() {
          p.debug("Storing instance", p), T.data(k, p), R = p;
        }, destroy: function destroy() {
          p.verbose("Destroying previous module"), v && v.disconnect(), g && g.disconnect(), S.off("load" + w, p.event.load).off("resize" + w, p.event.resize), A.off("scroll" + w, p.event.scroll).off("scrollchange" + w, p.event.scrollchange), "fixed" == h.type && (p.resetFixed(), p.remove.placeholder()), T.off(w).removeData(k);
        }, observeChanges: function observeChanges() {
          "MutationObserver" in t && (g = new MutationObserver(p.event.contextChanged), v = new MutationObserver(p.event.changed), g.observe(n, { childList: !0, subtree: !0 }), v.observe(E, { childList: !0, subtree: !0 }), p.debug("Setting up mutation observer", v));
        }, bind: { events: function events() {
            p.verbose("Binding visibility events to scroll and resize"), h.refreshOnLoad && S.on("load" + w, p.event.load), S.on("resize" + w, p.event.resize), A.off("scroll" + w).on("scroll" + w, p.event.scroll).on("scrollchange" + w, p.event.scrollchange);
          } }, event: { changed: function changed(e) {
            p.verbose("DOM tree modified, updating visibility calculations"), p.timer = setTimeout(function () {
              p.verbose("DOM tree modified, updating sticky menu"), p.refresh();
            }, 100);
          }, contextChanged: function contextChanged(t) {
            [].forEach.call(t, function (t) {
              t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                (t == E || e(t).find(E).length > 0) && (p.debug("Element removed from DOM, tearing down events"), p.destroy());
              });
            });
          }, resize: function resize() {
            p.debug("Window resized"), h.refreshOnResize && P(p.refresh);
          }, load: function load() {
            p.debug("Page finished loading"), P(p.refresh);
          }, scroll: function scroll() {
            h.throttle ? (clearTimeout(p.timer), p.timer = setTimeout(function () {
              A.triggerHandler("scrollchange" + w, [A.scrollTop()]);
            }, h.throttle)) : P(function () {
              A.triggerHandler("scrollchange" + w, [A.scrollTop()]);
            });
          }, scrollchange: function scrollchange(e, t) {
            p.checkVisibility(t);
          } }, precache: function precache(t, i) {
          t instanceof Array || (t = [t]);for (var o = t.length, a = 0, r = [], s = n.createElement("img"), l = function l() {
            ++a >= t.length && e.isFunction(i) && i();
          }; o--;) {
            s = n.createElement("img"), s.onload = l, s.onerror = l, s.src = t[o], r.push(s);
          }
        }, enableCallbacks: function enableCallbacks() {
          p.debug("Allowing callbacks to occur"), F = !1;
        }, disableCallbacks: function disableCallbacks() {
          p.debug("Disabling all callbacks temporarily"), F = !0;
        }, should: { trackChanges: function trackChanges() {
            return u ? (p.debug("One time query, no need to bind events"), !1) : (p.debug("Callbacks being attached"), !0);
          } }, setup: { cache: function cache() {
            p.cache = { occurred: {}, screen: {}, element: {} };
          }, image: function image() {
            var e = T.data(C.src);e && (p.verbose("Lazy loading image", e), h.once = !0, h.observeChanges = !1, h.onOnScreen = function () {
              p.debug("Image on screen", E), p.precache(e, function () {
                p.set.image(e, function () {
                  m++, m == f && h.onAllLoaded.call(this), h.onLoad.call(this);
                });
              });
            });
          }, fixed: function fixed() {
            p.debug("Setting up fixed"), h.once = !1, h.observeChanges = !1, h.initialCheck = !0, h.refreshOnLoad = !0, i.transition || (h.transition = !1), p.create.placeholder(), p.debug("Added placeholder", a), h.onTopPassed = function () {
              p.debug("Element passed, adding fixed position", T), p.show.placeholder(), p.set.fixed(), h.transition && void 0 !== e.fn.transition && T.transition(h.transition, h.duration);
            }, h.onTopPassedReverse = function () {
              p.debug("Element returned to position, removing fixed", T), p.hide.placeholder(), p.remove.fixed();
            };
          } }, create: { placeholder: function placeholder() {
            p.verbose("Creating fixed position placeholder"), a = T.clone(!1).css("display", "none").addClass(b.placeholder).insertAfter(T);
          } }, show: { placeholder: function placeholder() {
            p.verbose("Showing placeholder"), a.css("display", "block").css("visibility", "hidden");
          } }, hide: { placeholder: function placeholder() {
            p.verbose("Hiding placeholder"), a.css("display", "none").css("visibility", "");
          } }, set: { fixed: function fixed() {
            p.verbose("Setting element to fixed position"), T.addClass(b.fixed).css({ position: "fixed", top: h.offset + "px", left: "auto", zIndex: h.zIndex }), h.onFixed.call(E);
          }, image: function image(t, n) {
            if (T.attr("src", t), h.transition) {
              if (void 0 !== e.fn.transition) {
                if (T.hasClass(b.visible)) return void p.debug("Transition already occurred on this image, skipping animation");T.transition(h.transition, h.duration, n);
              } else T.fadeIn(h.duration, n);
            } else T.show();
          } }, is: { onScreen: function onScreen() {
            return p.get.elementCalculations().onScreen;
          }, offScreen: function offScreen() {
            return p.get.elementCalculations().offScreen;
          }, visible: function visible() {
            return !(!p.cache || !p.cache.element) && !(0 === p.cache.element.width && 0 === p.cache.element.offset.top);
          } }, refresh: function refresh() {
          p.debug("Refreshing constants (width/height)"), "fixed" == h.type && p.resetFixed(), p.reset(), p.save.position(), h.checkOnRefresh && p.checkVisibility(), h.onRefresh.call(E);
        }, resetFixed: function resetFixed() {
          p.remove.fixed(), p.remove.occurred();
        }, reset: function reset() {
          p.verbose("Resetting all cached values"), e.isPlainObject(p.cache) && (p.cache.screen = {}, p.cache.element = {});
        }, checkVisibility: function checkVisibility(e) {
          p.verbose("Checking visibility of element", p.cache.element), !F && p.is.visible() && (p.save.scroll(e), p.save.calculations(), p.passed(), p.passingReverse(), p.topVisibleReverse(), p.bottomVisibleReverse(), p.topPassedReverse(), p.bottomPassedReverse(), p.onScreen(), p.offScreen(), p.passing(), p.topVisible(), p.bottomVisible(), p.topPassed(), p.bottomPassed(), h.onUpdate && h.onUpdate.call(E, p.get.elementCalculations()));
        }, passed: function passed(t, n) {
          var i = p.get.elementCalculations();if (t && n) h.onPassed[t] = n;else {
            if (void 0 !== t) return p.get.pixelsPassed(t) > i.pixelsPassed;i.passing && e.each(h.onPassed, function (e, t) {
              i.bottomVisible || i.pixelsPassed > p.get.pixelsPassed(e) ? p.execute(t, e) : h.once || p.remove.occurred(t);
            });
          }
        }, onScreen: function onScreen(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onOnScreen;if (e && (p.debug("Adding callback for onScreen", e), h.onOnScreen = e), t.onScreen ? p.execute(n, "onScreen") : h.once || p.remove.occurred("onScreen"), void 0 !== e) return t.onOnScreen;
        }, offScreen: function offScreen(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onOffScreen;if (e && (p.debug("Adding callback for offScreen", e), h.onOffScreen = e), t.offScreen ? p.execute(n, "offScreen") : h.once || p.remove.occurred("offScreen"), void 0 !== e) return t.onOffScreen;
        }, passing: function passing(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onPassing;if (e && (p.debug("Adding callback for passing", e), h.onPassing = e), t.passing ? p.execute(n, "passing") : h.once || p.remove.occurred("passing"), void 0 !== e) return t.passing;
        }, topVisible: function topVisible(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onTopVisible;if (e && (p.debug("Adding callback for top visible", e), h.onTopVisible = e), t.topVisible ? p.execute(n, "topVisible") : h.once || p.remove.occurred("topVisible"), void 0 === e) return t.topVisible;
        }, bottomVisible: function bottomVisible(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onBottomVisible;if (e && (p.debug("Adding callback for bottom visible", e), h.onBottomVisible = e), t.bottomVisible ? p.execute(n, "bottomVisible") : h.once || p.remove.occurred("bottomVisible"), void 0 === e) return t.bottomVisible;
        }, topPassed: function topPassed(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onTopPassed;if (e && (p.debug("Adding callback for top passed", e), h.onTopPassed = e), t.topPassed ? p.execute(n, "topPassed") : h.once || p.remove.occurred("topPassed"), void 0 === e) return t.topPassed;
        }, bottomPassed: function bottomPassed(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onBottomPassed;if (e && (p.debug("Adding callback for bottom passed", e), h.onBottomPassed = e), t.bottomPassed ? p.execute(n, "bottomPassed") : h.once || p.remove.occurred("bottomPassed"), void 0 === e) return t.bottomPassed;
        }, passingReverse: function passingReverse(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onPassingReverse;if (e && (p.debug("Adding callback for passing reverse", e), h.onPassingReverse = e), t.passing ? h.once || p.remove.occurred("passingReverse") : p.get.occurred("passing") && p.execute(n, "passingReverse"), void 0 !== e) return !t.passing;
        }, topVisibleReverse: function topVisibleReverse(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onTopVisibleReverse;if (e && (p.debug("Adding callback for top visible reverse", e), h.onTopVisibleReverse = e), t.topVisible ? h.once || p.remove.occurred("topVisibleReverse") : p.get.occurred("topVisible") && p.execute(n, "topVisibleReverse"), void 0 === e) return !t.topVisible;
        }, bottomVisibleReverse: function bottomVisibleReverse(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onBottomVisibleReverse;if (e && (p.debug("Adding callback for bottom visible reverse", e), h.onBottomVisibleReverse = e), t.bottomVisible ? h.once || p.remove.occurred("bottomVisibleReverse") : p.get.occurred("bottomVisible") && p.execute(n, "bottomVisibleReverse"), void 0 === e) return !t.bottomVisible;
        }, topPassedReverse: function topPassedReverse(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onTopPassedReverse;if (e && (p.debug("Adding callback for top passed reverse", e), h.onTopPassedReverse = e), t.topPassed ? h.once || p.remove.occurred("topPassedReverse") : p.get.occurred("topPassed") && p.execute(n, "topPassedReverse"), void 0 === e) return !t.onTopPassed;
        }, bottomPassedReverse: function bottomPassedReverse(e) {
          var t = p.get.elementCalculations(),
              n = e || h.onBottomPassedReverse;if (e && (p.debug("Adding callback for bottom passed reverse", e), h.onBottomPassedReverse = e), t.bottomPassed ? h.once || p.remove.occurred("bottomPassedReverse") : p.get.occurred("bottomPassed") && p.execute(n, "bottomPassedReverse"), void 0 === e) return !t.bottomPassed;
        }, execute: function execute(e, t) {
          var n = p.get.elementCalculations(),
              i = p.get.screenCalculations();e = e || !1, e && (h.continuous ? (p.debug("Callback being called continuously", t, n), e.call(E, n, i)) : p.get.occurred(t) || (p.debug("Conditions met", t, n), e.call(E, n, i))), p.save.occurred(t);
        }, remove: { fixed: function fixed() {
            p.debug("Removing fixed position"), T.removeClass(b.fixed).css({ position: "", top: "", left: "", zIndex: "" }), h.onUnfixed.call(E);
          }, placeholder: function placeholder() {
            p.debug("Removing placeholder content"), a && a.remove();
          }, occurred: function occurred(e) {
            if (e) {
              var t = p.cache.occurred;void 0 !== t[e] && t[e] === !0 && (p.debug("Callback can now be called again", e), p.cache.occurred[e] = !1);
            } else p.cache.occurred = {};
          } }, save: { calculations: function calculations() {
            p.verbose("Saving all calculations necessary to determine positioning"), p.save.direction(), p.save.screenCalculations(), p.save.elementCalculations();
          }, occurred: function occurred(e) {
            e && (void 0 !== p.cache.occurred[e] && p.cache.occurred[e] === !0 || (p.verbose("Saving callback occurred", e), p.cache.occurred[e] = !0));
          }, scroll: function scroll(e) {
            e = e + h.offset || A.scrollTop() + h.offset, p.cache.scroll = e;
          }, direction: function direction() {
            var e,
                t = p.get.scroll(),
                n = p.get.lastScroll();return e = t > n && n ? "down" : t < n && n ? "up" : "static", p.cache.direction = e, p.cache.direction;
          }, elementPosition: function elementPosition() {
            var e = p.cache.element,
                t = p.get.screenSize();return p.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = T.offset(), e.width = T.outerWidth(), e.height = T.outerHeight(), p.cache.element = e, e;
          }, elementCalculations: function elementCalculations() {
            var e = p.get.screenCalculations(),
                t = p.get.elementPosition();return h.includeMargin ? (t.margin = {}, t.margin.top = parseInt(T.css("margin-top"), 10), t.margin.bottom = parseInt(T.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topVisible = e.bottom >= t.top, t.topPassed = e.top >= t.top, t.bottomVisible = e.bottom >= t.bottom, t.bottomPassed = e.top >= t.bottom, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = t.topVisible && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), p.cache.element = t, p.verbose("Updated element calculations", t), t;
          }, screenCalculations: function screenCalculations() {
            var e = p.get.scroll();return p.save.direction(), p.cache.screen.top = e, p.cache.screen.bottom = e + p.cache.screen.height, p.cache.screen;
          }, screenSize: function screenSize() {
            p.verbose("Saving window position"), p.cache.screen = { height: A.height() };
          }, position: function position() {
            p.save.screenSize(), p.save.elementPosition();
          } }, get: { pixelsPassed: function pixelsPassed(e) {
            var t = p.get.elementCalculations();return e.search("%") > -1 ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10);
          }, occurred: function occurred(e) {
            return void 0 !== p.cache.occurred && (p.cache.occurred[e] || !1);
          }, direction: function direction() {
            return void 0 === p.cache.direction && p.save.direction(), p.cache.direction;
          }, elementPosition: function elementPosition() {
            return void 0 === p.cache.element && p.save.elementPosition(), p.cache.element;
          }, elementCalculations: function elementCalculations() {
            return void 0 === p.cache.element && p.save.elementCalculations(), p.cache.element;
          }, screenCalculations: function screenCalculations() {
            return void 0 === p.cache.screen && p.save.screenCalculations(), p.cache.screen;
          }, screenSize: function screenSize() {
            return void 0 === p.cache.screen && p.save.screenSize(), p.cache.screen;
          }, scroll: function scroll() {
            return void 0 === p.cache.scroll && p.save.scroll(), p.cache.scroll;
          }, lastScroll: function lastScroll() {
            return void 0 === p.cache.screen ? (p.debug("First scroll event, no last scroll could be found"), !1) : p.cache.screen.top;
          } }, setting: function setting(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, h, t);else {
            if (void 0 === n) return h[t];h[t] = n;
          }
        }, internal: function internal(t, n) {
          if (e.isPlainObject(t)) e.extend(!0, p, t);else {
            if (void 0 === n) return p[t];p[t] = n;
          }
        }, debug: function debug() {
          !h.silent && h.debug && (h.performance ? p.performance.log(arguments) : (p.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), p.debug.apply(console, arguments)));
        }, verbose: function verbose() {
          !h.silent && h.verbose && h.debug && (h.performance ? p.performance.log(arguments) : (p.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), p.verbose.apply(console, arguments)));
        }, error: function error() {
          h.silent || (p.error = Function.prototype.bind.call(console.error, console, h.name + ":"), p.error.apply(console, arguments));
        }, performance: { log: function log(e) {
            var t, n, i;h.performance && (t = new Date().getTime(), i = s || t, n = t - i, s = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: E, "Execution Time": n })), clearTimeout(p.performance.timer), p.performance.timer = setTimeout(p.performance.display, 500);
          }, display: function display() {
            var t = h.name + ":",
                n = 0;s = !1, clearTimeout(p.performance.timer), e.each(l, function (e, t) {
              n += t["Execution Time"];
            }), t += " " + n + "ms", r && (t += " '" + r + "'"), (void 0 !== console.group || void 0 !== console.table) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
              console.log(t.Name + ": " + t["Execution Time"] + "ms");
            }), console.groupEnd()), l = [];
          } }, invoke: function invoke(t, n, i) {
          var a,
              r,
              s,
              l = R;return n = n || d, i = E || i, "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (n, i) {
            var o = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(l[o]) && n != a) l = l[o];else {
              if (void 0 !== l[o]) return r = l[o], !1;if (!e.isPlainObject(l[i]) || n == a) return void 0 !== l[i] ? (r = l[i], !1) : (p.error(x.method, t), !1);l = l[i];
            }
          })), e.isFunction(r) ? s = r.apply(i, n) : void 0 !== r && (s = r), e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s), r;
        } }, u ? (void 0 === R && p.initialize(), R.save.scroll(), R.save.calculations(), p.invoke(c)) : (void 0 !== R && R.invoke("destroy"), p.initialize());
    }), void 0 !== o ? o : this;
  }, e.fn.visibility.settings = { name: "Visibility", namespace: "visibility", debug: !1, verbose: !1, performance: !0, observeChanges: !0, initialCheck: !0, refreshOnLoad: !0, refreshOnResize: !0, checkOnRefresh: !0, once: !0, continuous: !1, offset: 0, includeMargin: !1, context: t, throttle: !1, type: !1, zIndex: "10", transition: "fade in", duration: 1e3, onPassed: {}, onOnScreen: !1, onOffScreen: !1, onPassing: !1, onTopVisible: !1, onBottomVisible: !1, onTopPassed: !1, onBottomPassed: !1, onPassingReverse: !1, onTopVisibleReverse: !1, onBottomVisibleReverse: !1, onTopPassedReverse: !1, onBottomPassedReverse: !1, onLoad: function onLoad() {}, onAllLoaded: function onAllLoaded() {}, onFixed: function onFixed() {}, onUnfixed: function onUnfixed() {}, onUpdate: !1, onRefresh: function onRefresh() {}, metadata: { src: "src" }, className: { fixed: "fixed", placeholder: "placeholder", visible: "visible" }, error: { method: "The method you called is not defined.", visible: "Element is hidden, you must call refresh after element becomes visible" } };
}(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, module) {
/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

(function() {
  var Dropzone, Emitter, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  noop = function() {};

  Emitter = (function() {
    function Emitter() {}

    Emitter.prototype.addEventListener = Emitter.prototype.on;

    Emitter.prototype.on = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }
      this._callbacks[event].push(fn);
      return this;
    };

    Emitter.prototype.emit = function() {
      var args, callback, callbacks, event, _i, _len;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      this._callbacks = this._callbacks || {};
      callbacks = this._callbacks[event];
      if (callbacks) {
        for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
          callback = callbacks[_i];
          callback.apply(this, args);
        }
      }
      return this;
    };

    Emitter.prototype.removeListener = Emitter.prototype.off;

    Emitter.prototype.removeAllListeners = Emitter.prototype.off;

    Emitter.prototype.removeEventListener = Emitter.prototype.off;

    Emitter.prototype.off = function(event, fn) {
      var callback, callbacks, i, _i, _len;
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      }
      callbacks = this._callbacks[event];
      if (!callbacks) {
        return this;
      }
      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      }
      for (i = _i = 0, _len = callbacks.length; _i < _len; i = ++_i) {
        callback = callbacks[i];
        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      return this;
    };

    return Emitter;

  })();

  Dropzone = (function(_super) {
    var extend, resolveOption;

    __extends(Dropzone, _super);

    Dropzone.prototype.Emitter = Emitter;


    /*
    This is a list of all available events you can register on a dropzone object.
    
    You can register an event handler like this:
    
        dropzone.on("dragEnter", function() { });
     */

    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

    Dropzone.prototype.defaultOptions = {
      url: null,
      method: "post",
      withCredentials: false,
      parallelUploads: 2,
      uploadMultiple: false,
      maxFilesize: 256,
      paramName: "file",
      createImageThumbnails: true,
      maxThumbnailFilesize: 10,
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      filesizeBase: 1000,
      maxFiles: null,
      params: {},
      clickable: true,
      ignoreHiddenFiles: true,
      acceptedFiles: null,
      acceptedMimeTypes: null,
      autoProcessQueue: true,
      autoQueue: true,
      addRemoveLinks: false,
      previewsContainer: null,
      hiddenInputContainer: "body",
      capture: null,
      renameFilename: null,
      dictDefaultMessage: "Drop files here to upload",
      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
      dictInvalidFileType: "You can't upload files of this type.",
      dictResponseError: "Server responded with {{statusCode}} code.",
      dictCancelUpload: "Cancel upload",
      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
      dictRemoveFile: "Remove file",
      dictRemoveFileConfirmation: null,
      dictMaxFilesExceeded: "You can not upload any more files.",
      accept: function(file, done) {
        return done();
      },
      init: function() {
        return noop;
      },
      forceFallback: false,
      fallback: function() {
        var child, messageElement, span, _i, _len, _ref;
        this.element.className = "" + this.element.className + " dz-browser-not-supported";
        _ref = this.element.getElementsByTagName("div");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          child = _ref[_i];
          if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message";
            continue;
          }
        }
        if (!messageElement) {
          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
          this.element.appendChild(messageElement);
        }
        span = messageElement.getElementsByTagName("span")[0];
        if (span) {
          if (span.textContent != null) {
            span.textContent = this.options.dictFallbackMessage;
          } else if (span.innerText != null) {
            span.innerText = this.options.dictFallbackMessage;
          }
        }
        return this.element.appendChild(this.getFallbackForm());
      },
      resize: function(file) {
        var info, srcRatio, trgRatio;
        info = {
          srcX: 0,
          srcY: 0,
          srcWidth: file.width,
          srcHeight: file.height
        };
        srcRatio = file.width / file.height;
        info.optWidth = this.options.thumbnailWidth;
        info.optHeight = this.options.thumbnailHeight;
        if ((info.optWidth == null) && (info.optHeight == null)) {
          info.optWidth = info.srcWidth;
          info.optHeight = info.srcHeight;
        } else if (info.optWidth == null) {
          info.optWidth = srcRatio * info.optHeight;
        } else if (info.optHeight == null) {
          info.optHeight = (1 / srcRatio) * info.optWidth;
        }
        trgRatio = info.optWidth / info.optHeight;
        if (file.height < info.optHeight || file.width < info.optWidth) {
          info.trgHeight = info.srcHeight;
          info.trgWidth = info.srcWidth;
        } else {
          if (srcRatio > trgRatio) {
            info.srcHeight = file.height;
            info.srcWidth = info.srcHeight * trgRatio;
          } else {
            info.srcWidth = file.width;
            info.srcHeight = info.srcWidth / trgRatio;
          }
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        return info;
      },

      /*
      Those functions register themselves to the events on init and handle all
      the user interface specific stuff. Overwriting them won't break the upload
      but can break the way it's displayed.
      You can overwrite them if you don't like the default behavior. If you just
      want to add an additional event handler, register it on the dropzone object
      and don't overwrite those options.
       */
      drop: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragstart: noop,
      dragend: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragenter: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragover: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragleave: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      paste: noop,
      reset: function() {
        return this.element.classList.remove("dz-started");
      },
      addedfile: function(file) {
        var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
        if (this.element === this.previewsContainer) {
          this.element.classList.add("dz-started");
        }
        if (this.previewsContainer) {
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
          file.previewTemplate = file.previewElement;
          this.previewsContainer.appendChild(file.previewElement);
          _ref = file.previewElement.querySelectorAll("[data-dz-name]");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            node.textContent = this._renameFilename(file.name);
          }
          _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            node = _ref1[_j];
            node.innerHTML = this.filesize(file.size);
          }
          if (this.options.addRemoveLinks) {
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);
          }
          removeFileEvent = (function(_this) {
            return function(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                  return _this.removeFile(file);
                });
              } else {
                if (_this.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                    return _this.removeFile(file);
                  });
                } else {
                  return _this.removeFile(file);
                }
              }
            };
          })(this);
          _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
          _results = [];
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            removeLink = _ref2[_k];
            _results.push(removeLink.addEventListener("click", removeFileEvent));
          }
          return _results;
        }
      },
      removedfile: function(file) {
        var _ref;
        if (file.previewElement) {
          if ((_ref = file.previewElement) != null) {
            _ref.parentNode.removeChild(file.previewElement);
          }
        }
        return this._updateMaxFilesReachedClass();
      },
      thumbnail: function(file, dataUrl) {
        var thumbnailElement, _i, _len, _ref;
        if (file.previewElement) {
          file.previewElement.classList.remove("dz-file-preview");
          _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            thumbnailElement = _ref[_i];
            thumbnailElement.alt = file.name;
            thumbnailElement.src = dataUrl;
          }
          return setTimeout(((function(_this) {
            return function() {
              return file.previewElement.classList.add("dz-image-preview");
            };
          })(this)), 1);
        }
      },
      error: function(file, message) {
        var node, _i, _len, _ref, _results;
        if (file.previewElement) {
          file.previewElement.classList.add("dz-error");
          if (typeof message !== "String" && message.error) {
            message = message.error;
          }
          _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            _results.push(node.textContent = message);
          }
          return _results;
        }
      },
      errormultiple: noop,
      processing: function(file) {
        if (file.previewElement) {
          file.previewElement.classList.add("dz-processing");
          if (file._removeLink) {
            return file._removeLink.textContent = this.options.dictCancelUpload;
          }
        }
      },
      processingmultiple: noop,
      uploadprogress: function(file, progress, bytesSent) {
        var node, _i, _len, _ref, _results;
        if (file.previewElement) {
          _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            if (node.nodeName === 'PROGRESS') {
              _results.push(node.value = progress);
            } else {
              _results.push(node.style.width = "" + progress + "%");
            }
          }
          return _results;
        }
      },
      totaluploadprogress: noop,
      sending: noop,
      sendingmultiple: noop,
      success: function(file) {
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-success");
        }
      },
      successmultiple: noop,
      canceled: function(file) {
        return this.emit("error", file, "Upload canceled.");
      },
      canceledmultiple: noop,
      complete: function(file) {
        if (file._removeLink) {
          file._removeLink.textContent = this.options.dictRemoveFile;
        }
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-complete");
        }
      },
      completemultiple: noop,
      maxfilesexceeded: noop,
      maxfilesreached: noop,
      queuecomplete: noop,
      addedfiles: noop,
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>"
    };

    extend = function() {
      var key, object, objects, target, val, _i, _len;
      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      for (_i = 0, _len = objects.length; _i < _len; _i++) {
        object = objects[_i];
        for (key in object) {
          val = object[key];
          target[key] = val;
        }
      }
      return target;
    };

    function Dropzone(element, options) {
      var elementOptions, fallback, _ref;
      this.element = element;
      this.version = Dropzone.version;
      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
      this.clickableElements = [];
      this.listeners = [];
      this.files = [];
      if (typeof this.element === "string") {
        this.element = document.querySelector(this.element);
      }
      if (!(this.element && (this.element.nodeType != null))) {
        throw new Error("Invalid dropzone element.");
      }
      if (this.element.dropzone) {
        throw new Error("Dropzone already attached.");
      }
      Dropzone.instances.push(this);
      this.element.dropzone = this;
      elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
        return this.options.fallback.call(this);
      }
      if (this.options.url == null) {
        this.options.url = this.element.getAttribute("action");
      }
      if (!this.options.url) {
        throw new Error("No URL provided.");
      }
      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
      }
      if (this.options.acceptedMimeTypes) {
        this.options.acceptedFiles = this.options.acceptedMimeTypes;
        delete this.options.acceptedMimeTypes;
      }
      this.options.method = this.options.method.toUpperCase();
      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
        fallback.parentNode.removeChild(fallback);
      }
      if (this.options.previewsContainer !== false) {
        if (this.options.previewsContainer) {
          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
        } else {
          this.previewsContainer = this.element;
        }
      }
      if (this.options.clickable) {
        if (this.options.clickable === true) {
          this.clickableElements = [this.element];
        } else {
          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
        }
      }
      this.init();
    }

    Dropzone.prototype.getAcceptedFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.accepted) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getRejectedFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (!file.accepted) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getFilesWithStatus = function(status) {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status === status) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getQueuedFiles = function() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    };

    Dropzone.prototype.getUploadingFiles = function() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    };

    Dropzone.prototype.getAddedFiles = function() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    };

    Dropzone.prototype.getActiveFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.init = function() {
      var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }
      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }
      if (this.clickableElements.length) {
        setupHiddenFileInput = (function(_this) {
          return function() {
            if (_this.hiddenFileInput) {
              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
            }
            _this.hiddenFileInput = document.createElement("input");
            _this.hiddenFileInput.setAttribute("type", "file");
            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
              _this.hiddenFileInput.setAttribute("multiple", "multiple");
            }
            _this.hiddenFileInput.className = "dz-hidden-input";
            if (_this.options.acceptedFiles != null) {
              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
            }
            if (_this.options.capture != null) {
              _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
            }
            _this.hiddenFileInput.style.visibility = "hidden";
            _this.hiddenFileInput.style.position = "absolute";
            _this.hiddenFileInput.style.top = "0";
            _this.hiddenFileInput.style.left = "0";
            _this.hiddenFileInput.style.height = "0";
            _this.hiddenFileInput.style.width = "0";
            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
            return _this.hiddenFileInput.addEventListener("change", function() {
              var file, files, _i, _len;
              files = _this.hiddenFileInput.files;
              if (files.length) {
                for (_i = 0, _len = files.length; _i < _len; _i++) {
                  file = files[_i];
                  _this.addFile(file);
                }
              }
              _this.emit("addedfiles", files);
              return setupHiddenFileInput();
            });
          };
        })(this);
        setupHiddenFileInput();
      }
      this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
      _ref1 = this.events;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        eventName = _ref1[_i];
        this.on(eventName, this.options[eventName]);
      }
      this.on("uploadprogress", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("removedfile", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("canceled", (function(_this) {
        return function(file) {
          return _this.emit("complete", file);
        };
      })(this));
      this.on("complete", (function(_this) {
        return function(file) {
          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
            return setTimeout((function() {
              return _this.emit("queuecomplete");
            }), 0);
          }
        };
      })(this));
      noPropagation = function(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };
      this.listeners = [
        {
          element: this.element,
          events: {
            "dragstart": (function(_this) {
              return function(e) {
                return _this.emit("dragstart", e);
              };
            })(this),
            "dragenter": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.emit("dragenter", e);
              };
            })(this),
            "dragover": (function(_this) {
              return function(e) {
                var efct;
                try {
                  efct = e.dataTransfer.effectAllowed;
                } catch (_error) {}
                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                noPropagation(e);
                return _this.emit("dragover", e);
              };
            })(this),
            "dragleave": (function(_this) {
              return function(e) {
                return _this.emit("dragleave", e);
              };
            })(this),
            "drop": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.drop(e);
              };
            })(this),
            "dragend": (function(_this) {
              return function(e) {
                return _this.emit("dragend", e);
              };
            })(this)
          }
        }
      ];
      this.clickableElements.forEach((function(_this) {
        return function(clickableElement) {
          return _this.listeners.push({
            element: clickableElement,
            events: {
              "click": function(evt) {
                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                  _this.hiddenFileInput.click();
                }
                return true;
              }
            }
          });
        };
      })(this));
      this.enable();
      return this.options.init.call(this);
    };

    Dropzone.prototype.destroy = function() {
      var _ref;
      this.disable();
      this.removeAllFiles(true);
      if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    };

    Dropzone.prototype.updateTotalUploadProgress = function() {
      var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
      totalBytesSent = 0;
      totalBytes = 0;
      activeFiles = this.getActiveFiles();
      if (activeFiles.length) {
        _ref = this.getActiveFiles();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          file = _ref[_i];
          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }
      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    };

    Dropzone.prototype._getParamName = function(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    };

    Dropzone.prototype._renameFilename = function(name) {
      if (typeof this.options.renameFilename !== "function") {
        return name;
      }
      return this.options.renameFilename(name);
    };

    Dropzone.prototype.getFallbackForm = function() {
      var existingFallback, fields, fieldsString, form;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }
      fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    };

    Dropzone.prototype.getExistingFallback = function() {
      var fallback, getFallback, tagName, _i, _len, _ref;
      getFallback = function(elements) {
        var el, _i, _len;
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          el = elements[_i];
          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };
      _ref = ["div", "form"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tagName = _ref[_i];
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    };

    Dropzone.prototype.setupEventListeners = function() {
      var elementListeners, event, listener, _i, _len, _ref, _results;
      _ref = this.listeners;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elementListeners = _ref[_i];
        _results.push((function() {
          var _ref1, _results1;
          _ref1 = elementListeners.events;
          _results1 = [];
          for (event in _ref1) {
            listener = _ref1[event];
            _results1.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return _results1;
        })());
      }
      return _results;
    };

    Dropzone.prototype.removeEventListeners = function() {
      var elementListeners, event, listener, _i, _len, _ref, _results;
      _ref = this.listeners;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elementListeners = _ref[_i];
        _results.push((function() {
          var _ref1, _results1;
          _ref1 = elementListeners.events;
          _results1 = [];
          for (event in _ref1) {
            listener = _ref1[event];
            _results1.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return _results1;
        })());
      }
      return _results;
    };

    Dropzone.prototype.disable = function() {
      var file, _i, _len, _ref, _results;
      this.clickableElements.forEach(function(element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        _results.push(this.cancelUpload(file));
      }
      return _results;
    };

    Dropzone.prototype.enable = function() {
      this.clickableElements.forEach(function(element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    };

    Dropzone.prototype.filesize = function(size) {
      var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;
      selectedSize = 0;
      selectedUnit = "b";
      if (size > 0) {
        units = ['TB', 'GB', 'MB', 'KB', 'b'];
        for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {
          unit = units[i];
          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }
        selectedSize = Math.round(10 * selectedSize) / 10;
      }
      return "<strong>" + selectedSize + "</strong> " + selectedUnit;
    };

    Dropzone.prototype._updateMaxFilesReachedClass = function() {
      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    };

    Dropzone.prototype.drop = function(e) {
      var files, items;
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);
      files = e.dataTransfer.files;
      this.emit("addedfiles", files);
      if (files.length) {
        items = e.dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    };

    Dropzone.prototype.paste = function(e) {
      var items, _ref;
      if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {
        return;
      }
      this.emit("paste", e);
      items = e.clipboardData.items;
      if (items.length) {
        return this._addFilesFromItems(items);
      }
    };

    Dropzone.prototype.handleFiles = function(files) {
      var file, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        _results.push(this.addFile(file));
      }
      return _results;
    };

    Dropzone.prototype._addFilesFromItems = function(items) {
      var entry, item, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
          if (entry.isFile) {
            _results.push(this.addFile(item.getAsFile()));
          } else if (entry.isDirectory) {
            _results.push(this._addFilesFromDirectory(entry, entry.name));
          } else {
            _results.push(void 0);
          }
        } else if (item.getAsFile != null) {
          if ((item.kind == null) || item.kind === "file") {
            _results.push(this.addFile(item.getAsFile()));
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
      var dirReader, errorHandler, readEntries;
      dirReader = directory.createReader();
      errorHandler = function(error) {
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
      };
      readEntries = (function(_this) {
        return function() {
          return dirReader.readEntries(function(entries) {
            var entry, _i, _len;
            if (entries.length > 0) {
              for (_i = 0, _len = entries.length; _i < _len; _i++) {
                entry = entries[_i];
                if (entry.isFile) {
                  entry.file(function(file) {
                    if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                      return;
                    }
                    file.fullPath = "" + path + "/" + file.name;
                    return _this.addFile(file);
                  });
                } else if (entry.isDirectory) {
                  _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
                }
              }
              readEntries();
            }
            return null;
          }, errorHandler);
        };
      })(this);
      return readEntries();
    };

    Dropzone.prototype.accept = function(file, done) {
      if (file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    };

    Dropzone.prototype.addFile = function(file) {
      file.upload = {
        progress: 0,
        total: file.size,
        bytesSent: 0
      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);
      this._enqueueThumbnail(file);
      return this.accept(file, (function(_this) {
        return function(error) {
          if (error) {
            file.accepted = false;
            _this._errorProcessing([file], error);
          } else {
            file.accepted = true;
            if (_this.options.autoQueue) {
              _this.enqueueFile(file);
            }
          }
          return _this._updateMaxFilesReachedClass();
        };
      })(this));
    };

    Dropzone.prototype.enqueueFiles = function(files) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        this.enqueueFile(file);
      }
      return null;
    };

    Dropzone.prototype.enqueueFile = function(file) {
      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.processQueue();
            };
          })(this)), 0);
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    };

    Dropzone.prototype._thumbnailQueue = [];

    Dropzone.prototype._processingThumbnail = false;

    Dropzone.prototype._enqueueThumbnail = function(file) {
      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(((function(_this) {
          return function() {
            return _this._processThumbnailQueue();
          };
        })(this)), 0);
      }
    };

    Dropzone.prototype._processThumbnailQueue = function() {
      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }
      this._processingThumbnail = true;
      return this.createThumbnail(this._thumbnailQueue.shift(), (function(_this) {
        return function() {
          _this._processingThumbnail = false;
          return _this._processThumbnailQueue();
        };
      })(this));
    };

    Dropzone.prototype.removeFile = function(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);
      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    };

    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
      var file, _i, _len, _ref;
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      _ref = this.files.slice();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    };

    Dropzone.prototype.createThumbnail = function(file, callback) {
      var fileReader;
      fileReader = new FileReader;
      fileReader.onload = (function(_this) {
        return function() {
          if (file.type === "image/svg+xml") {
            _this.emit("thumbnail", file, fileReader.result);
            if (callback != null) {
              callback();
            }
            return;
          }
          return _this.createThumbnailFromUrl(file, fileReader.result, callback);
        };
      })(this);
      return fileReader.readAsDataURL(file);
    };

    Dropzone.prototype.createThumbnailFromUrl = function(file, imageUrl, callback, crossOrigin) {
      var img;
      img = document.createElement("img");
      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }
      img.onload = (function(_this) {
        return function() {
          var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
          file.width = img.width;
          file.height = img.height;
          resizeInfo = _this.options.resize.call(_this, file);
          if (resizeInfo.trgWidth == null) {
            resizeInfo.trgWidth = resizeInfo.optWidth;
          }
          if (resizeInfo.trgHeight == null) {
            resizeInfo.trgHeight = resizeInfo.optHeight;
          }
          canvas = document.createElement("canvas");
          ctx = canvas.getContext("2d");
          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;
          drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
          thumbnail = canvas.toDataURL("image/png");
          _this.emit("thumbnail", file, thumbnail);
          if (callback != null) {
            return callback();
          }
        };
      })(this);
      if (callback != null) {
        img.onerror = callback;
      }
      return img.src = imageUrl;
    };

    Dropzone.prototype.processQueue = function() {
      var i, parallelUploads, processingLength, queuedFiles;
      parallelUploads = this.options.parallelUploads;
      processingLength = this.getUploadingFiles().length;
      i = processingLength;
      if (processingLength >= parallelUploads) {
        return;
      }
      queuedFiles = this.getQueuedFiles();
      if (!(queuedFiles.length > 0)) {
        return;
      }
      if (this.options.uploadMultiple) {
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          }
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    };

    Dropzone.prototype.processFile = function(file) {
      return this.processFiles([file]);
    };

    Dropzone.prototype.processFiles = function(files) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.processing = true;
        file.status = Dropzone.UPLOADING;
        this.emit("processing", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }
      return this.uploadFiles(files);
    };

    Dropzone.prototype._getFilesWithXhr = function(xhr) {
      var file, files;
      return files = (function() {
        var _i, _len, _ref, _results;
        _ref = this.files;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          file = _ref[_i];
          if (file.xhr === xhr) {
            _results.push(file);
          }
        }
        return _results;
      }).call(this);
    };

    Dropzone.prototype.cancelUpload = function(file) {
      var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
      if (file.status === Dropzone.UPLOADING) {
        groupedFiles = this._getFilesWithXhr(file.xhr);
        for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {
          groupedFile = groupedFiles[_i];
          groupedFile.status = Dropzone.CANCELED;
        }
        file.xhr.abort();
        for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {
          groupedFile = groupedFiles[_j];
          this.emit("canceled", groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    resolveOption = function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (typeof option === 'function') {
        return option.apply(this, args);
      }
      return option;
    };

    Dropzone.prototype.uploadFile = function(file) {
      return this.uploadFiles([file]);
    };

    Dropzone.prototype.uploadFiles = function(files) {
      var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, method, option, progressObj, response, updateProgress, url, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      xhr = new XMLHttpRequest();
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.xhr = xhr;
      }
      method = resolveOption(this.options.method, files);
      url = resolveOption(this.options.url, files);
      xhr.open(method, url, true);
      xhr.withCredentials = !!this.options.withCredentials;
      response = null;
      handleError = (function(_this) {
        return function() {
          var _j, _len1, _results;
          _results = [];
          for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
            file = files[_j];
            _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          }
          return _results;
        };
      })(this);
      updateProgress = (function(_this) {
        return function(e) {
          var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
          if (e != null) {
            progress = 100 * e.loaded / e.total;
            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
              file = files[_j];
              file.upload = {
                progress: progress,
                total: e.total,
                bytesSent: e.loaded
              };
            }
          } else {
            allFilesFinished = true;
            progress = 100;
            for (_k = 0, _len2 = files.length; _k < _len2; _k++) {
              file = files[_k];
              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                allFilesFinished = false;
              }
              file.upload.progress = progress;
              file.upload.bytesSent = file.upload.total;
            }
            if (allFilesFinished) {
              return;
            }
          }
          _results = [];
          for (_l = 0, _len3 = files.length; _l < _len3; _l++) {
            file = files[_l];
            _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
          }
          return _results;
        };
      })(this);
      xhr.onload = (function(_this) {
        return function(e) {
          var _ref;
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          if (xhr.readyState !== 4) {
            return;
          }
          response = xhr.responseText;
          if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
            try {
              response = JSON.parse(response);
            } catch (_error) {
              e = _error;
              response = "Invalid JSON response from server.";
            }
          }
          updateProgress();
          if (!((200 <= (_ref = xhr.status) && _ref < 300))) {
            return handleError();
          } else {
            return _this._finished(files, response, e);
          }
        };
      })(this);
      xhr.onerror = (function(_this) {
        return function() {
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          return handleError();
        };
      })(this);
      progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
      progressObj.onprogress = updateProgress;
      headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };
      if (this.options.headers) {
        extend(headers, this.options.headers);
      }
      for (headerName in headers) {
        headerValue = headers[headerName];
        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }
      formData = new FormData();
      if (this.options.params) {
        _ref1 = this.options.params;
        for (key in _ref1) {
          value = _ref1[key];
          formData.append(key, value);
        }
      }
      for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
        file = files[_j];
        this.emit("sending", file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }
      if (this.element.tagName === "FORM") {
        _ref2 = this.element.querySelectorAll("input, textarea, select, button");
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          input = _ref2[_k];
          inputName = input.getAttribute("name");
          inputType = input.getAttribute("type");
          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            _ref3 = input.options;
            for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
              option = _ref3[_l];
              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
      for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
        formData.append(this._getParamName(i), files[i], this._renameFilename(files[i].name));
      }
      return this.submitRequest(xhr, formData, files);
    };

    Dropzone.prototype.submitRequest = function(xhr, formData, files) {
      return xhr.send(formData);
    };

    Dropzone.prototype._finished = function(files, responseText, e) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    Dropzone.prototype._errorProcessing = function(files, message, xhr) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    return Dropzone;

  })(Emitter);

  Dropzone.version = "4.3.0";

  Dropzone.options = {};

  Dropzone.optionsForElement = function(element) {
    if (element.getAttribute("id")) {
      return Dropzone.options[camelize(element.getAttribute("id"))];
    } else {
      return void 0;
    }
  };

  Dropzone.instances = [];

  Dropzone.forElement = function(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if ((element != null ? element.dropzone : void 0) == null) {
      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    }
    return element.dropzone;
  };

  Dropzone.autoDiscover = true;

  Dropzone.discover = function() {
    var checkElements, dropzone, dropzones, _i, _len, _results;
    if (document.querySelectorAll) {
      dropzones = document.querySelectorAll(".dropzone");
    } else {
      dropzones = [];
      checkElements = function(elements) {
        var el, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          el = elements[_i];
          if (/(^| )dropzone($| )/.test(el.className)) {
            _results.push(dropzones.push(el));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };
      checkElements(document.getElementsByTagName("div"));
      checkElements(document.getElementsByTagName("form"));
    }
    _results = [];
    for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
      dropzone = dropzones[_i];
      if (Dropzone.optionsForElement(dropzone) !== false) {
        _results.push(new Dropzone(dropzone));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

  Dropzone.isBrowserSupported = function() {
    var capableBrowser, regex, _i, _len, _ref;
    capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
      if (!("classList" in document.createElement("a"))) {
        capableBrowser = false;
      } else {
        _ref = Dropzone.blacklistedBrowsers;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          regex = _ref[_i];
          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      }
    } else {
      capableBrowser = false;
    }
    return capableBrowser;
  };

  without = function(list, rejectedItem) {
    var item, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      item = list[_i];
      if (item !== rejectedItem) {
        _results.push(item);
      }
    }
    return _results;
  };

  camelize = function(str) {
    return str.replace(/[\-_](\w)/g, function(match) {
      return match.charAt(1).toUpperCase();
    });
  };

  Dropzone.createElement = function(string) {
    var div;
    div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
  };

  Dropzone.elementInside = function(element, container) {
    if (element === container) {
      return true;
    }
    while (element = element.parentNode) {
      if (element === container) {
        return true;
      }
    }
    return false;
  };

  Dropzone.getElement = function(el, name) {
    var element;
    if (typeof el === "string") {
      element = document.querySelector(el);
    } else if (el.nodeType != null) {
      element = el;
    }
    if (element == null) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
    }
    return element;
  };

  Dropzone.getElements = function(els, name) {
    var e, el, elements, _i, _j, _len, _len1, _ref;
    if (els instanceof Array) {
      elements = [];
      try {
        for (_i = 0, _len = els.length; _i < _len; _i++) {
          el = els[_i];
          elements.push(this.getElement(el, name));
        }
      } catch (_error) {
        e = _error;
        elements = null;
      }
    } else if (typeof els === "string") {
      elements = [];
      _ref = document.querySelectorAll(els);
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        el = _ref[_j];
        elements.push(el);
      }
    } else if (els.nodeType != null) {
      elements = [els];
    }
    if (!((elements != null) && elements.length)) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    }
    return elements;
  };

  Dropzone.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) {
      return accepted();
    } else if (rejected != null) {
      return rejected();
    }
  };

  Dropzone.isValidFile = function(file, acceptedFiles) {
    var baseMimeType, mimeType, validType, _i, _len;
    if (!acceptedFiles) {
      return true;
    }
    acceptedFiles = acceptedFiles.split(",");
    mimeType = file.type;
    baseMimeType = mimeType.replace(/\/.*$/, "");
    for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {
      validType = acceptedFiles[_i];
      validType = validType.trim();
      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
    return false;
  };

  if (typeof jQuery !== "undefined" && jQuery !== null) {
    jQuery.fn.dropzone = function(options) {
      return this.each(function() {
        return new Dropzone(this, options);
      });
    };
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Dropzone;
  } else {
    window.Dropzone = Dropzone;
  }

  Dropzone.ADDED = "added";

  Dropzone.QUEUED = "queued";

  Dropzone.ACCEPTED = Dropzone.QUEUED;

  Dropzone.UPLOADING = "uploading";

  Dropzone.PROCESSING = Dropzone.UPLOADING;

  Dropzone.CANCELED = "canceled";

  Dropzone.ERROR = "error";

  Dropzone.SUCCESS = "success";


  /*
  
  Bugfix for iOS 6 and 7
  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
  based on the work of https://github.com/stomita/ios-imagefile-megapixel
   */

  detectVerticalSquash = function(img) {
    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
    iw = img.naturalWidth;
    ih = img.naturalHeight;
    canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    data = ctx.getImageData(0, 0, 1, ih).data;
    sy = 0;
    ey = ih;
    py = ih;
    while (py > sy) {
      alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    ratio = py / ih;
    if (ratio === 0) {
      return 1;
    } else {
      return ratio;
    }
  };

  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio;
    vertSquashRatio = detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
  };


  /*
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   */

  contentLoaded = function(win, fn) {
    var add, doc, done, init, poll, pre, rem, root, top;
    done = false;
    top = true;
    doc = win.document;
    root = doc.documentElement;
    add = (doc.addEventListener ? "addEventListener" : "attachEvent");
    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
    pre = (doc.addEventListener ? "" : "on");
    init = function(e) {
      if (e.type === "readystatechange" && doc.readyState !== "complete") {
        return;
      }
      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
      if (!done && (done = true)) {
        return fn.call(win, e.type || e);
      }
    };
    poll = function() {
      var e;
      try {
        root.doScroll("left");
      } catch (_error) {
        e = _error;
        setTimeout(poll, 50);
        return;
      }
      return init("poll");
    };
    if (doc.readyState !== "complete") {
      if (doc.createEventObject && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (_error) {}
        if (top) {
          poll();
        }
      }
      doc[add](pre + "DOMContentLoaded", init, false);
      doc[add](pre + "readystatechange", init, false);
      return win[add](pre + "load", init, false);
    }
  };

  Dropzone._autoDiscoverFunction = function() {
    if (Dropzone.autoDiscover) {
      return Dropzone.discover();
    }
  };

  contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(11)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {!function(e,t,a,n){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.calendar=function(t){var o,r=e(this),i=r.selector||"",l=(new Date).getTime(),s=[],d=arguments[0],u="string"==typeof d,p=[].slice.call(arguments,1);return r.each(function(){var r,c,f=e.isPlainObject(t)?e.extend(!0,{},e.fn.calendar.settings,t):e.extend({},e.fn.calendar.settings),h=f.className,g=f.namespace,m=f.selector,v=f.formatter,y=f.parser,D=f.metadata,b=f.error,C="."+g,M="module-"+g,w=e(this),x=w.find(m.input),k=w.find(m.popup),T=w.find(m.activator),F=this,H=w.data(M),O=!1,I=!1;c={initialize:function(){c.debug("Initializing calendar for",F),r=c.get.isTouch(),c.setup.popup(),c.setup.inline(),c.setup.input(),c.setup.date(),c.create.calendar(),c.bind.events(),c.instantiate()},instantiate:function(){c.verbose("Storing instance of calendar"),H=c,w.data(M,H)},destroy:function(){c.verbose("Destroying previous calendar for",F),w.removeData(M),c.unbind.events()},setup:{popup:function(){if(!f.inline&&(T.length||(T=w.children().first(),T.length))){if(e.fn.popup===n)return void c.error(b.popup);k.length||(k=e("<div/>").addClass(h.popup).prependTo(T.parent())),k.addClass(h.calendar);var t=f.onVisible,a=f.onHidden;x.length||(k.attr("tabindex","0"),t=function(){return c.focus(),f.onVisible.apply(k,arguments)},a=function(){return c.blur(),f.onHidden.apply(k,arguments)});var o=function(){return c.set.focusDate(c.get.date()),c.set.mode(f.startMode),f.onShow.apply(k,arguments)},r=f.on||(x.length?"focus":"click"),i=e.extend({},f.popupOptions,{popup:k,on:r,hoverable:"hover"===r,onShow:o,onVisible:t,onHide:f.onHide,onHidden:a});c.popup(i)}},inline:function(){T.length&&!f.inline||(k=e("<div/>").addClass(h.calendar).appendTo(w),x.length||k.attr("tabindex","0"))},input:function(){f.touchReadonly&&x.length&&r&&x.prop("readonly",!0)},date:function(){if(x.length){var e=x.val(),t=y.date(e,f);c.set.date(t,f.formatInput,!1)}}},create:{calendar:function(){var t,a,n,o,r,i,l,s=c.get.mode(),d=new Date,u=c.get.date(),p=c.get.focusDate(),g=p||u||f.initialDate||d;g=c.helper.dateInRange(g),p||(p=g,c.set.focusDate(p,!1,!1));var m="year"===s,y="month"===s,b="day"===s,C="hour"===s,M="minute"===s,w="time"===f.type,x=Math.max(f.multiMonth,1),T=b?c.get.monthOffset():0,F=g.getMinutes(),H=g.getHours(),O=g.getDate(),I=g.getMonth()+T,N=g.getFullYear(),Y=b?7:C?4:3,E=7===Y?"seven":4===Y?"four":"three",R=b||C?6:4,A=b?x:1,j=k;for(j.empty(),A>1&&(l=e("<div/>").addClass(h.grid).appendTo(j)),o=0;o<A;o++){if(A>1){var S=e("<div/>").addClass(h.column).appendTo(l);j=S}var V=I+o,P=(new Date(N,V,1).getDay()-f.firstDayOfWeek%7+7)%7;if(!f.constantHeight&&b){var q=new Date(N,V+1,0).getDate()+P;R=Math.ceil(q/7)}var K=m?10:y?1:0,J=b?1:0,W=C||M?1:0,z=C||M?O:1,L=new Date(N-K,V-J,z-W,H),B=new Date(N+K,V+J,z+W,H),U=m?new Date(10*Math.ceil(N/10)-9,0,0):y?new Date(N,0,0):b?new Date(N,V,0):new Date(N,V,O,-1),Q=m?new Date(10*Math.ceil(N/10)+1,0,1):y?new Date(N+1,0,1):b?new Date(N,V+1,1):new Date(N,V,O+1),Z=e("<table/>").addClass(h.table).addClass(E+" column").addClass(s).appendTo(j);if(!w){var G=e("<thead/>").appendTo(Z);r=e("<tr/>").appendTo(G),i=e("<th/>").attr("colspan",""+Y).appendTo(r);var X=m||y?new Date(N,0,1):b?new Date(N,V,1):new Date(N,V,O,H,F),$=e("<span/>").addClass(h.link).appendTo(i);$.text(v.header(X,s,f));var _=y?f.disableYear?"day":"year":b?f.disableMonth?"year":"month":"day";if($.data(D.mode,_),0===o){var ee=e("<span/>").addClass(h.prev).appendTo(i);ee.data(D.focusDate,L),ee.toggleClass(h.disabledCell,!c.helper.isDateInRange(U,s)),e("<i/>").addClass(h.prevIcon).appendTo(ee)}if(o===A-1){var te=e("<span/>").addClass(h.next).appendTo(i);te.data(D.focusDate,B),te.toggleClass(h.disabledCell,!c.helper.isDateInRange(Q,s)),e("<i/>").addClass(h.nextIcon).appendTo(te)}if(b)for(r=e("<tr/>").appendTo(G),t=0;t<Y;t++)i=e("<th/>").appendTo(r),i.text(v.dayColumnHeader((t+f.firstDayOfWeek)%7,f))}var ae=e("<tbody/>").appendTo(Z);for(t=m?10*Math.ceil(N/10)-9:b?1-P:0,a=0;a<R;a++)for(r=e("<tr/>").appendTo(ae),n=0;n<Y;n++,t++){var ne=m?new Date(t,V,1,H,F):y?new Date(N,t,1,H,F):b?new Date(N,V,t,H,F):C?new Date(N,V,O,t):new Date(N,V,O,H,5*t),oe=m?t:y?f.text.monthsShort[t]:b?ne.getDate():v.time(ne,f,!0);i=e("<td/>").addClass(h.cell).appendTo(r),i.text(oe),i.data(D.date,ne);var re=b&&ne.getMonth()!==(V+12)%12,ie=re||!c.helper.isDateInRange(ne,s)||f.isDisabled(ne,s),le=c.helper.dateEqual(ne,u,s);i.toggleClass(h.adjacentCell,re),i.toggleClass(h.disabledCell,ie),i.toggleClass(h.activeCell,le&&!re),C||M||i.toggleClass(h.todayCell,!re&&c.helper.dateEqual(ne,d,s)),c.helper.dateEqual(ne,p,s)&&c.set.focusDate(ne,!1,!1)}if(f.today){var se=e("<tr/>").appendTo(ae),de=e("<td/>").attr("colspan",""+Y).addClass(h.today).appendTo(se);de.text(v.today(f)),de.data(D.date,d)}c.update.focus(!1,Z)}}},update:{focus:function(t,a){a=a||k;var n=c.get.mode(),o=c.get.date(),i=c.get.focusDate(),l=c.get.startDate(),s=c.get.endDate(),d=(t?i:null)||o||(r?null:i);a.find("td").each(function(){var t=e(this),a=t.data(D.date);if(a){var o=t.hasClass(h.disabledCell),u=t.hasClass(h.activeCell),p=t.hasClass(h.adjacentCell),f=c.helper.dateEqual(a,i,n),g=!!d&&(!!l&&c.helper.isDateInRange(a,n,l,d)||!!s&&c.helper.isDateInRange(a,n,d,s));t.toggleClass(h.focusCell,f&&(!r||O)&&!p),t.toggleClass(h.rangeCell,g&&!u&&!o)}})}},refresh:function(){c.create.calendar()},bind:{events:function(){k.on("mousedown"+C,c.event.mousedown),k.on("touchstart"+C,c.event.mousedown),k.on("mouseup"+C,c.event.mouseup),k.on("touchend"+C,c.event.mouseup),k.on("mouseover"+C,c.event.mouseover),x.length?(x.on("input"+C,c.event.inputChange),x.on("focus"+C,c.event.inputFocus),x.on("blur"+C,c.event.inputBlur),x.on("click"+C,c.event.inputClick),x.on("keydown"+C,c.event.keydown)):k.on("keydown"+C,c.event.keydown)}},unbind:{events:function(){k.off(C),x.length&&x.off(C)}},event:{mouseover:function(t){var a=e(t.target),n=a.data(D.date),o=1===t.buttons;n&&c.set.focusDate(n,!1,!0,o)},mousedown:function(t){x.length&&t.preventDefault(),O=t.type.indexOf("touch")>=0;var a=e(t.target),n=a.data(D.date);n&&c.set.focusDate(n,!1,!0,!0)},mouseup:function(t){c.focus(),t.preventDefault(),t.stopPropagation(),O=!1;var a=e(t.target),n=a.parent();(n.data(D.date)||n.data(D.focusDate)||n.data(D.mode))&&(a=n);var o=a.data(D.date),r=a.data(D.focusDate),i=a.data(D.mode);if(o){var l=a.hasClass(h.today);c.selectDate(o,l)}else r?c.set.focusDate(r):i&&c.set.mode(i)},keydown:function(e){if(27!==e.keyCode&&9!==e.keyCode||c.popup("hide"),c.popup("is visible"))if(37===e.keyCode||38===e.keyCode||39===e.keyCode||40===e.keyCode){var t=c.get.mode(),a="day"===t?7:"hour"===t?4:3,n=37===e.keyCode?-1:38===e.keyCode?-a:39==e.keyCode?1:a;n*="minute"===t?5:1;var o=c.get.focusDate()||c.get.date()||new Date,r=o.getFullYear()+("year"===t?n:0),i=o.getMonth()+("month"===t?n:0),l=o.getDate()+("day"===t?n:0),s=o.getHours()+("hour"===t?n:0),d=o.getMinutes()+("minute"===t?n:0),u=new Date(r,i,l,s,d);"time"===f.type&&(u=c.helper.mergeDateTime(o,u)),c.helper.isDateInRange(u,t)&&c.set.focusDate(u)}else if(13===e.keyCode){var t=c.get.mode(),p=c.get.focusDate();p&&!f.isDisabled(p,t)&&c.selectDate(p),e.preventDefault(),e.stopPropagation()}38!==e.keyCode&&40!==e.keyCode||(e.preventDefault(),c.popup("show"))},inputChange:function(){var e=x.val(),t=y.date(e,f);c.set.date(t,!1)},inputFocus:function(){k.addClass(h.active)},inputBlur:function(){if(k.removeClass(h.active),f.formatInput){var e=c.get.date(),t=v.datetime(e,f);x.val(t)}},inputClick:function(){c.popup("show")}},get:{date:function(){return w.data(D.date)||null},focusDate:function(){return w.data(D.focusDate)||null},startDate:function(){var e=c.get.calendarModule(f.startCalendar);return(e?e.get.date():w.data(D.startDate))||null},endDate:function(){var e=c.get.calendarModule(f.endCalendar);return(e?e.get.date():w.data(D.endDate))||null},monthOffset:function(){return w.data(D.monthOffset)||0},mode:function(){var t=w.data(D.mode)||f.startMode,a=c.get.validModes();return e.inArray(t,a)>=0?t:"time"===f.type?"hour":"month"===f.type?"month":"year"===f.type?"year":"day"},validModes:function(){var e=[];return"time"!==f.type&&(f.disableYear&&"year"!==f.type||e.push("year"),(!f.disableMonth&&"year"!==f.type||"month"===f.type)&&e.push("month"),f.type.indexOf("date")>=0&&e.push("day")),f.type.indexOf("time")>=0&&(e.push("hour"),f.disableMinute||e.push("minute")),e},isTouch:function(){try{return a.createEvent("TouchEvent"),!0}catch(e){return!1}},calendarModule:function(t){return t?(t instanceof e||(t=w.parent().children(t).first()),t.data(M)):null}},set:{date:function(e,t,a){t=t!==!1,a=a!==!1,e=c.helper.sanitiseDate(e),e=c.helper.dateInRange(e);var o=c.get.mode(),r=v.datetime(e,f);if(a&&f.onChange.call(F,e,r,o)===!1)return!1;if(c.set.focusDate(e),f.isDisabled(e,o))return!1;var i=c.get.endDate();i&&e&&e>i&&c.set.endDate(n),c.set.dataKeyValue(D.date,e),t&&x.length&&x.val(r)},startDate:function(e,t){e=c.helper.sanitiseDate(e);var a=c.get.calendarModule(f.startCalendar);a&&a.set.date(e),c.set.dataKeyValue(D.startDate,e,t)},endDate:function(e,t){e=c.helper.sanitiseDate(e);var a=c.get.calendarModule(f.endCalendar);a&&a.set.date(e),c.set.dataKeyValue(D.endDate,e,t)},focusDate:function(e,t,a,n){e=c.helper.sanitiseDate(e),e=c.helper.dateInRange(e);var o="day"===c.get.mode(),r=c.get.focusDate();if(o&&e&&r){var i=e.getFullYear()-r.getFullYear(),l=12*i+e.getMonth()-r.getMonth();if(l){var s=c.get.monthOffset()-l;c.set.monthOffset(s,!1)}}var d=c.set.dataKeyValue(D.focusDate,e,t);a=a!==!1&&d&&t===!1||I!=n,I=n,a&&c.update.focus(n)},monthOffset:function(e,t){var a=Math.max(f.multiMonth,1);e=Math.max(1-a,Math.min(0,e)),c.set.dataKeyValue(D.monthOffset,e,t)},mode:function(e,t){c.set.dataKeyValue(D.mode,e,t)},dataKeyValue:function(e,t,a){var n=w.data(e),o=n===t||n<=t&&n>=t;return t?w.data(e,t):w.removeData(e),a=a!==!1&&!o,a&&c.create.calendar(),!o}},selectDate:function(e,t){var a=c.get.mode(),n=t||"minute"===a||f.disableMinute&&"hour"===a||"date"===f.type&&"day"===a||"month"===f.type&&"month"===a||"year"===f.type&&"year"===a;if(n){var o=c.set.date(e)===!1;if(!o&&f.closable){c.popup("hide");var r=c.get.calendarModule(f.endCalendar);r&&(r.popup("show"),r.focus())}}else{var i="year"===a?f.disableMonth?"day":"month":"month"===a?"day":"day"===a?"hour":"minute";c.set.mode(i),"hour"===a||"day"===a&&c.get.date()?c.set.date(e):c.set.focusDate(e)}},changeDate:function(e){c.set.date(e)},clear:function(){c.set.date(n)},popup:function(){return T.popup.apply(T,arguments)},focus:function(){x.length?x.focus():k.focus()},blur:function(){x.length?x.blur():k.blur()},helper:{sanitiseDate:function(e){return e?(e instanceof Date||(e=y.date(""+e,f)),isNaN(e.getTime())?n:e):n},dateDiff:function(e,t,a){a=a||"day";var n="time"===f.type,o="year"===a,r=o||"month"===a,i="minute"===a,l=i||"hour"===a;return e=new Date(n?2e3:e.getFullYear(),n?0:o?0:e.getMonth(),n?1:r?1:e.getDate(),l?e.getHours():0,i?5*Math.floor(e.getMinutes()/5):0),t=new Date(n?2e3:t.getFullYear(),n?0:o?0:t.getMonth(),n?1:r?1:t.getDate(),l?t.getHours():0,i?5*Math.floor(t.getMinutes()/5):0),t.getTime()-e.getTime()},dateEqual:function(e,t,a){return!!e&&!!t&&0===c.helper.dateDiff(e,t,a)},isDateInRange:function(e,t,a,n){if(!a&&!n){var o=c.get.startDate();a=o&&f.minDate?new Date(Math.max(o,f.minDate)):o||f.minDate,n=f.maxDate}return a=a&&new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),5*Math.ceil(a.getMinutes()/5)),!(!e||a&&c.helper.dateDiff(e,a,t)>0||n&&c.helper.dateDiff(n,e,t)>0)},dateInRange:function(e,t,a){if(!t&&!a){var n=c.get.startDate();t=n&&f.minDate?new Date(Math.max(n,f.minDate)):n||f.minDate,a=f.maxDate}t=t&&new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),5*Math.ceil(t.getMinutes()/5));var o="time"===f.type;return e?t&&c.helper.dateDiff(e,t,"minute")>0?o?c.helper.mergeDateTime(e,t):t:a&&c.helper.dateDiff(a,e,"minute")>0?o?c.helper.mergeDateTime(e,a):a:e:e},mergeDateTime:function(e,t){return e&&t?new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes()):t}},setting:function(t,a){if(c.debug("Changing setting",t,a),e.isPlainObject(t))e.extend(!0,f,t);else{if(a===n)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],a):f[t]=a}},internal:function(t,a){return c.debug("Changing internal",t,a),a===n?c[t]:void(e.isPlainObject(t)?e.extend(!0,c,t):c[t]=a)},debug:function(){!f.silent&&f.debug&&(f.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,f.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),c.verbose.apply(console,arguments)))},error:function(){f.silent||(c.error=Function.prototype.bind.call(console.error,console,f.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,a,n;f.performance&&(t=(new Date).getTime(),n=l||t,a=t-n,l=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:F,"Execution Time":a})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var t=f.name+":",a=0;l=!1,clearTimeout(c.performance.timer),e.each(s,function(e,t){a+=t["Execution Time"]}),t+=" "+a+"ms",i&&(t+=" '"+i+"'"),(console.group!==n||console.table!==n)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,a,r){var i,l,s,d=H;return a=a||p,r=F||r,"string"==typeof t&&d!==n&&(t=t.split(/[\. ]/),i=t.length-1,e.each(t,function(a,o){var r=a!=i?o+t[a+1].charAt(0).toUpperCase()+t[a+1].slice(1):t;if(e.isPlainObject(d[r])&&a!=i)d=d[r];else{if(d[r]!==n)return l=d[r],!1;if(!e.isPlainObject(d[o])||a==i)return d[o]!==n?(l=d[o],!1):(c.error(b.method,t),!1);d=d[o]}})),e.isFunction(l)?s=l.apply(r,a):l!==n&&(s=l),e.isArray(o)?o.push(s):o!==n?o=[o,s]:s!==n&&(o=s),l}},u?(H===n&&c.initialize(),c.invoke(d)):(H!==n&&H.invoke("destroy"),c.initialize())}),o!==n?o:this},e.fn.calendar.settings={name:"Calendar",namespace:"calendar",silent:!1,debug:!1,verbose:!1,performance:!1,type:"datetime",firstDayOfWeek:0,constantHeight:!0,today:!1,closable:!0,monthFirst:!0,touchReadonly:!0,inline:!1,on:null,initialDate:null,startMode:!1,minDate:null,maxDate:null,ampm:!0,disableYear:!1,disableMonth:!1,disableMinute:!1,formatInput:!0,startCalendar:null,endCalendar:null,multiMonth:1,popupOptions:{position:"bottom left",lastResort:"bottom left",prefer:"opposite",hideOnScroll:!1},text:{days:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",now:"Now",am:"AM",pm:"PM"},formatter:{header:function(e,t,a){return"year"===t?a.formatter.yearHeader(e,a):"month"===t?a.formatter.monthHeader(e,a):"day"===t?a.formatter.dayHeader(e,a):"hour"===t?a.formatter.hourHeader(e,a):a.formatter.minuteHeader(e,a)},yearHeader:function(e,t){var a=10*Math.ceil(e.getFullYear()/10);return a-9+" - "+(a+2)},monthHeader:function(e,t){return e.getFullYear()},dayHeader:function(e,t){var a=t.text.months[e.getMonth()],n=e.getFullYear();return a+" "+n},hourHeader:function(e,t){return t.formatter.date(e,t)},minuteHeader:function(e,t){return t.formatter.date(e,t)},dayColumnHeader:function(e,t){return t.text.days[e]},datetime:function(e,t){if(!e)return"";var a="time"===t.type?"":t.formatter.date(e,t),n=t.type.indexOf("time")<0?"":t.formatter.time(e,t,!1),o="datetime"===t.type?" ":"";return a+o+n},date:function(e,t){if(!e)return"";var a=e.getDate(),n=t.text.months[e.getMonth()],o=e.getFullYear();return"year"===t.type?o:"month"===t.type?n+" "+o:(t.monthFirst?n+" "+a:a+" "+n)+", "+o},time:function(e,t,a){if(!e)return"";var n=e.getHours(),o=e.getMinutes(),r="";return t.ampm&&(r=" "+(n<12?t.text.am:t.text.pm),n=0===n?12:n>12?n-12:n),n+":"+(o<10?"0":"")+o+r},today:function(e){return"date"===e.type?e.text.today:e.text.now}},parser:{date:function(t,a){if(!t)return null;if(t=(""+t).trim().toLowerCase(),0===t.length)return null;var o,r,i,l=-1,s=-1,d=-1,u=-1,p=-1,c=n,f="time"===a.type,h=a.type.indexOf("time")<0,g=t.split(a.regExp.dateWords),m=t.split(a.regExp.dateNumbers);if(!h)for(c=e.inArray(a.text.am.toLowerCase(),g)>=0||!(e.inArray(a.text.pm.toLowerCase(),g)>=0)&&n,o=0;o<m.length;o++){var v=m[o];if(v.indexOf(":")>=0){if(s<0||l<0){var y=v.split(":");for(i=0;i<Math.min(2,y.length);i++)r=parseInt(y[i]),isNaN(r)&&(r=0),0===i?s=r%24:l=r%60}m.splice(o,1)}}if(!f){for(o=0;o<g.length;o++){var D=g[o];if(!(D.length<=0)){for(D=D.substring(0,Math.min(D.length,3)),r=0;r<a.text.months.length;r++){var b=a.text.months[r];if(b=b.substring(0,Math.min(D.length,Math.min(b.length,3))).toLowerCase(),b===D){u=r+1;break}}if(u>=0)break}}for(o=0;o<m.length;o++)if(r=parseInt(m[o]),!isNaN(r)&&r>59){p=r,m.splice(o,1);break}if(u<0)for(o=0;o<m.length;o++)if(i=o>1||a.monthFirst?o:1===o?0:1,r=parseInt(m[i]),!isNaN(r)&&1<=r&&r<=12){u=r,m.splice(i,1);break}for(o=0;o<m.length;o++)if(r=parseInt(m[o]),!isNaN(r)&&1<=r&&r<=31){d=r,m.splice(o,1);break}if(p<0)for(o=m.length-1;o>=0;o--)if(r=parseInt(m[o]),!isNaN(r)){r<99&&(r+=2e3),p=r,m.splice(o,1);break}}if(!h){if(s<0)for(o=0;o<m.length;o++)if(r=parseInt(m[o]),!isNaN(r)&&0<=r&&r<=23){s=r,m.splice(o,1);break}if(l<0)for(o=0;o<m.length;o++)if(r=parseInt(m[o]),!isNaN(r)&&0<=r&&r<=59){l=r,m.splice(o,1);break}}if(l<0&&s<0&&d<0&&u<0&&p<0)return null;l<0&&(l=0),s<0&&(s=0),d<0&&(d=1),u<0&&(u=1),p<0&&(p=(new Date).getFullYear()),c!==n&&(c?12===s&&(s=0):s<12&&(s+=12));var C=new Date(p,u-1,d,s,l);return C.getMonth()===u-1&&C.getFullYear()===p||(C=new Date(p,u,0,s,l)),isNaN(C.getTime())?null:C}},onChange:function(e,t,a){return!0},onShow:function(){},onVisible:function(){},onHide:function(){},onHidden:function(){},isDisabled:function(e,t){return!1},selector:{popup:".ui.popup",input:"input",activator:"input"},regExp:{dateWords:/[^A-Za-z\u00C0-\u024F]+/g,dateNumbers:/[^\d:]+/g},error:{popup:"UI Popup, a required component is not included in this page",method:"The method you called is not defined."},className:{calendar:"calendar",active:"active",popup:"ui popup",grid:"ui equal width grid",column:"column",table:"ui celled center aligned unstackable table",prev:"prev link",next:"next link",prevIcon:"chevron left icon",nextIcon:"chevron right icon",link:"link",cell:"link",disabledCell:"disabled",adjacentCell:"adjacent",activeCell:"active",rangeCell:"range",focusCell:"focus",todayCell:"today",today:"today link"},metadata:{date:"date",focusDate:"focusDate",startDate:"startDate",endDate:"endDate",mode:"mode",monthOffset:"monthOffset"}}}(jQuery,window,document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);