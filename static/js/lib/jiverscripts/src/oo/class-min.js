this.jive=this.jive||{};jive.oo=jive.oo||{};jive.oo.Class=function(){};jive.oo.Class.extend=(function(){var b=Object.create||function(e){function d(){}d.prototype=e;return new d()};var a=false;return function c(h){var i=this["protected"]||{},g;a=true;var f=new this();var d=b(i);a=false;if(typeof h=="function"){h.call(f,d,i)}else{for(g in h){if(h.hasOwnProperty(g)){f[g]=h[g]}}}for(g in f){if(f.hasOwnProperty(g)){if(typeof f[g]!="function"){throw"Public members must be methods - public variables are not allowed: '"+g+"'"}else{if(typeof d[g]=="undefined"||!d.hasOwnProperty(g)){d[g]=f[g]}else{throw"Public and protected properties with the same name are not allowed: '"+g+"'"}}}}function e(){var j=this instanceof e?this:b(e.prototype),l,k=b(e["protected"]);function m(n){return function(){var o=k[n].apply(k,arguments);return o===k?j:o}}if(!a&&jive.oo._abstract){for(l in k){if(k[l]===jive.oo._abstract){throw"A class with abstract members cannot be instantiated: '"+l+"'"}}}if(!a){for(l in e.prototype){if(typeof e.prototype[l]=="function"&&typeof k[l]=="function"){j[l]=m(l)}}if(k.init){k.init.apply(k,arguments)}}return j}e.prototype=f;e["protected"]=d;e.definition=h;e.constructor=e;e.superclass=this;e.extend=c;return e}})();