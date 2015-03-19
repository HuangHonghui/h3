var utils = require('../utils');
var queryStringParser = require('./queryStringParser');

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