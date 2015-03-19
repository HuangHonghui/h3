
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