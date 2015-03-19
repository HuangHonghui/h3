(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["h3"] = factory();
	else
		root["h3"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	
	var Url = __webpack_require__(1);

	module.exports = {
	    Url:Url
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(3);
	var queryStringParser = __webpack_require__(2);

	var qs2obj = function(){
	    if(location&&location.search){
	        return queryStringParser(location.search);
	    }
	};


	var obj2qs = function(obj){
	    var qs = [];
	    for(var key in obj){
	      if(utils.isArray(obj[key])){
	        obj[key].forEach(function(item,i){
	          qs.push(key+"="+item);
	        });
	      }else{
	        qs.push(key+"="+obj[key]);
	      }
	        
	    }
	    return encodeURI('?'+qs.join('&'));
	};

	var setQueryString = function(obj){
	    if(location&&location.search){
	        location.search = obj2qs(obj);
	    }
	}

	module.exports = {
	    queryStringParser:queryStringParser,
	    qs2obj:qs2obj,
	    obj2qs:obj2qs,
	    setQueryString:setQueryString
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 把 querystring 转成 object
	 change querystring to js object
	 https://github.com/hontas/queryStringParser/blob/master/js/queryStringParser.js#L8
	 
	 */

	function splitByQMark(str) {
	    var arr = str.split("?");
	    return arr[arr.length - 1];
	}

	var queryStringParser = function(queryString) {
	    if ("string" !== typeof queryString) {
	        throw new Error("Input parameter must be string");
	    }

	    var decodedString = decodeURIComponent(splitByQMark(queryString)),
	        ret = {};

	    // extract key/value-pairs
	    decodedString.split('&').forEach(function(keyVal) {
	        var keyValArr = keyVal.split('='),
	            key = keyValArr[0],
	            val = keyValArr[1],
	            oldVal = ret[key];

	//        if (/\+/.test(val)) {
	//            val = val.split("+");
	//        }

	        if (oldVal) {
	            var oldArr = Array.isArray(oldVal) ? oldVal : [oldVal];
	            val = oldArr.concat(val);
	        }

	        ret[key] = val;

	    });

	    return ret;
	};

	module.exports = queryStringParser;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = function(){
	    /**
	    @param obj
	     判断是否为数组
	    */
	    var isArray = Array.isArray || function(obj){
	        return toString.call(obj) === '[object Array]';
	    };
	    
	    return {
	        isArray:isArray
	    }
	    
	}();

/***/ }
/******/ ])
});
;