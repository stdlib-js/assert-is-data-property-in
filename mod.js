// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=void 0!==Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyDescriptor;var e,n=Object.prototype.hasOwnProperty;function o(t,r){return null!=t&&n.call(t,r)}e=t?function(t,e){var n;return null==t||void 0===(n=r(t,e))?null:n}:function(t,r){return o(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null};var u=e,i=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var c,f=Object.defineProperty,a=Object.prototype,p=a.toString,y=a.__defineGetter__,b=a.__defineSetter__,s=a.__lookupGetter__,v=a.__lookupSetter__;c=function(){try{return l({},"x",{}),!0}catch(t){return!1}}()?f:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===p.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===p.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(s.call(t,r)||v.call(t,r)?(n=t.__proto__,t.__proto__=a,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&y&&y.call(t,r,e.get),i&&b&&b.call(t,r,e.set),t};var d=c;function j(t,r,e){d(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"boolean"==typeof t}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return w&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var O="function"==typeof Symbol?Symbol.toStringTag:"";var h=g()?function(t){var r,e,n;if(null==t)return m.call(t);e=t[O],r=o(t,O);try{t[O]=void 0}catch(r){return m.call(t)}return n=m.call(t),r?t[O]=e:delete t[O],n}:function(t){return m.call(t)},S=Boolean.prototype.toString;var P=g();function A(t){return"object"==typeof t&&(t instanceof Boolean||(P?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function E(t){return _(t)||A(t)}function B(){return new Function("return this;")()}j(E,"isPrimitive",_),j(E,"isObject",A);var T="object"==typeof self?self:null,x="object"==typeof window?window:null,V="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},k="object"==typeof V?V:null;var C=function(t){if(arguments.length){if(!_(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return B()}if(T)return T;if(x)return x;if(k)return k;throw new Error("unexpected error. Unable to resolve global object.")}(),F=C.document&&C.document.childNodes,G=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var D,M=/^\s*function\s*([^(]*)/i;j(L,"REGEXP",M),D=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};var I=D;function N(t){return null!==t&&"object"==typeof t}var R=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!I(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(N);function U(t){var r,e,n,o;if(("Object"===(e=h(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=M.exec(n.toString()))return r[1]}return N(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}j(N,"isObjectLikeArray",R);var X="function"==typeof i||"object"==typeof G||"function"==typeof F?function(t){return U(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?U(t).toLowerCase():r};var q,z,H=Object.getPrototypeOf;z=Object.getPrototypeOf,q="function"===X(z)?H:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=q;function K(t){return null==t?null:(t=Object(t),J(t))}function Q(t,r){var e=function(t,r){var e,n;if(null==t)return null;n=Object(t);do{if(e=u(n,r))return e;n=K(n)}while(n);return null}(t,r);return null!==e&&"boolean"==typeof e.writable}export{Q as default};
//# sourceMappingURL=mod.js.map