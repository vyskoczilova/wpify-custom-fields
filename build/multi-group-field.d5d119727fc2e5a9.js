(window.webpackJsonp_wpify_custom_fields=window.webpackJsonp_wpify_custom_fields||[]).push([[14],{10:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},299:function(e,t,n){"use strict";n.r(t);var r=n(61),o=n.n(r),a=n(9),c=n.n(a),l=n(0),i=n(1),u=n(2),s=n.n(u),p=n(5),f=n.n(p),m=n(20),d=n(50),b=n(6),y=n.n(b),g=n(10),v=n.n(g),O=n(7),_=n(57),j=n(56),h=n(3),w=n(4);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){var t=e.group_level,n=e.onChange,r=e.items,o=void 0===r?[]:r,a=e.value,c=e.htmlId,i=void 0===c?function(e){return e}:c,u=e.className,s=e.index,p=e.length,m=void 0===p?0:p,d=e.collapsed,b=void 0!==d&&d,g=e.toggleCollapsed,x=void 0===g?function(){return null}:g,N=e.appContext,k=function(e){var t=E(E({},a),e);n(t)},C=o.map((function(e){var t=a[e.id],n=Object(O.b)(e);return n.getHumanTitle?n.getHumanTitle(e,t):t})).find((function(e){return"string"==typeof e}))||"";return Object(l.createElement)("div",{className:f()("wcf-multi-group-row",u)},Object(l.createElement)("h4",{className:f()("wcf-multi-group-row__header")},m>0&&Object(l.createElement)(j.a,null),Object(l.createElement)("span",{className:f()("wcf-multi-group-row__title"),onClick:function(){return x()}},"#",s+1,": ",C),Object(l.createElement)(_.a,{onClick:function(){return n(null)}})),Object(l.createElement)("div",{className:f()("wcf-multi-group-row__content",{"wcf-multi-group-row__content--collapsed":b})},o.map((function(e){var n=Object(O.b)(e);return Object(l.createElement)("div",{key:e.id,className:f()("wcf-multi-group-row__content-item")},!Object(w.applyFilters)("wcf_field_without_label",!1,e.type)&&Object(l.createElement)(h.a,null,Object(l.createElement)("label",{className:f()("wcf-multi-group-row__content-item-label"),htmlFor:i(e.id),dangerouslySetInnerHTML:{__html:e.title}})),Object(l.createElement)(h.a,null,Object(l.createElement)(n,y()({},e,{id:e.id,htmlId:i,group_level:t,onChange:function(t){return k(v()({},e.id,t))},value:a[e.id],appContext:N}))))}))))};N.propTypes={index:s.a.number,group_level:s.a.number,onChange:s.a.func,items:s.a.array,value:s.a.object,htmlId:s.a.func,className:s.a.string,collapsed:s.a.bool,length:s.a.number,toggleCollapsed:s.a.func,appContext:s.a.object};var k,C=N,S=n(55),T=new Uint8Array(16);function P(){if(!k&&!(k="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return k(T)}for(var I=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,A=function(e){return"string"==typeof e&&I.test(e)},M=[],R=0;R<256;++R)M.push((R+256).toString(16).substr(1));var D=function(e,t,n){var r=(e=e||{}).random||(e.rng||P)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(M[e[t+0]]+M[e[t+1]]+M[e[t+2]]+M[e[t+3]]+"-"+M[e[t+4]]+M[e[t+5]]+"-"+M[e[t+6]]+M[e[t+7]]+"-"+M[e[t+8]]+M[e[t+9]]+"-"+M[e[t+10]]+M[e[t+11]]+M[e[t+12]]+M[e[t+13]]+M[e[t+14]]+M[e[t+15]]).toLowerCase();if(!A(n))throw TypeError("Stringified UUID is invalid");return n}(r)},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(O.a)(e).map((function(e){return delete e.__key,e}))},V=function(e){var t=e.group_level,n=void 0===t?0:t,r=e.onChange,a=e.id,u=e.items,s=void 0===u?[]:u,p=e.value,b=void 0===p?[]:p,y=e.className,g=e.appContext,v=Object(i.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)?Object(O.a)(e).map((function(e){return e.__key=D(),e})):[]}(b)),_=c()(v,2),j=_[0],w=_[1],x=Object(i.useState)(null),E=c()(x,2),N=E[0],k=E[1],T=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o()(j);null===t?n.splice(e,1):n[e]=t,w(n)}};return Object(i.useEffect)((function(){r&&JSON.stringify(b)!==JSON.stringify(J(j))&&r(J(j))}),[r,b,j]),Object(l.createElement)("div",{className:f()("wcf-multi-group",y)},0===n&&Object(l.createElement)("input",{type:"hidden",id:a,name:a,value:JSON.stringify(j)}),Object(l.createElement)(h.a,null,Object(l.createElement)(S.a,{list:j,setList:w},j.map((function(e,t){return Object(l.createElement)(h.a,{key:e.__key},Object(l.createElement)(C,{group_level:n+1,onChange:T(t),items:s,value:e,htmlId:function(e){return a+"_"+t+"_"+e},index:t,length:j.length,collapsed:e.__key!==N,toggleCollapsed:function(){return k(e.__key===N?null:e.__key)},appContext:g}))})))),Object(l.createElement)("div",{className:f()("wcf-multi-group__buttons")},Object(l.createElement)(d.a,{className:f()("button-secondary"),onClick:function(){var e=o()(j),t=D();e.push({__key:t}),w(e),k(t)}},Object(m.__)("Add","wpify-custom-fields"))))};V.propTypes={object_type:s.a.string,items:s.a.string,appContext:s.a.string,group_level:s.a.number,value:s.a.any,onChange:s.a.func,id:s.a.string,name:s.a.string,className:s.a.string},t.default=V},50:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(46),c=n.n(a),l=n(0),i=(n(1),n(5)),u=n.n(i),s=n(2),p=function(e){var t=e.className,n=c()(e,["className"]);return Object(l.createElement)("button",o()({type:"button",className:u()("button",t)},n))};p.propTypes={className:n.n(s).a.string},t.a=p},55:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(0),c=(n(1),n(72)),l=n(3);t.a=function(e){return Object(a.createElement)(l.a,null,Object(a.createElement)(c.ReactSortable,o()({animation:150,handle:".wcf-button--move",ghostClass:"wcf-sortable-ghost",dragClass:"wcf-sortable-drag"},e)))}},56:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(46),c=n.n(a),l=n(0),i=(n(1),n(2)),u=n.n(i),s=n(5),p=n.n(s),f=function(e){var t=e.className,n=c()(e,["className"]);return Object(l.createElement)("button",o()({type:"button",className:p()(t,"wcf-button wcf-button--move")},n),Object(l.createElement)("svg",{width:10,height:10,viewBox:"0 0 10 10"},Object(l.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:0,y1:1,x2:10,y2:1}),Object(l.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:0,y1:5,x2:10,y2:5}),Object(l.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:0,y1:9,x2:10,y2:9})))};f.propTypes={className:u.a.string},t.a=f},57:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(46),c=n.n(a),l=n(0),i=(n(1),n(2)),u=n.n(i),s=n(5),p=n.n(s),f=function(e){var t=e.className,n=c()(e,["className"]);return Object(l.createElement)("button",o()({type:"button",className:p()(t,"wcf-button wcf-button--delete")},n),Object(l.createElement)("svg",{width:10,height:10,viewBox:"0 0 10 10"},Object(l.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:1,y1:9,x2:9,y2:1}),Object(l.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:1,y1:1,x2:9,y2:9})))};f.propTypes={className:u.a.string},t.a=f},61:function(e,t,n){var r=n(69),o=n(70),a=n(21),c=n(71);e.exports=function(e){return r(e)||o(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},69:function(e,t,n){var r=n(22);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},70:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},71:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0}}]);