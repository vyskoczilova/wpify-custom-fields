(window.webpackJsonp_wpify_custom_fields=window.webpackJsonp_wpify_custom_fields||[]).push([[17],{294:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),o=n(61),s=n.n(o),i=n(9),u=n.n(i),l=n(0),c=n(1),p=n.n(c),d=n(5),f=n.n(d),m=n(2),b=n.n(m),y=n(14),_=n(3),v=function(e){var t=e.id,n=e.htmlId,r=void 0===n?function(e){return e}:n,o=e.value,i=void 0===o?[]:o,d=e.group_level,m=void 0===d?0:d,b=e.custom_attributes,v=void 0===b?{}:b,g=e.onChange,x=e.className,h=e.description,O=e.options,j=void 0===O?[]:O,w=Object(c.useState)(Array.isArray(i)?i:[]),E=u()(w,2),S=E[0],A=E[1];Object(c.useEffect)((function(){g&&JSON.stringify(i)!==JSON.stringify(S)&&g(S)}),[g,i,S]);var N=function(e){return function(t){var n=s()(S),r=n.indexOf(e);t&&-1===r?n.push(e):!t&&r>-1&&n.splice(r,1),A(n)}};return Object(l.createElement)(p.a.Fragment,null,0===m&&Object(l.createElement)("input",{type:"hidden",name:t,value:JSON.stringify(S)}),h&&Object(l.createElement)(_.a,null,Object(l.createElement)("p",{className:"description",dangerouslySetInnerHTML:{__html:h},style:{marginBottom:"4px"}})),Array.isArray(j)&&j.map((function(e){return Object(l.createElement)(_.a,{key:t+"_"+e.value},Object(l.createElement)(y.ToggleControl,a()({id:r(t+"_"+e.value),checked:S.includes(e.value),onChange:N(e.value),label:Object(l.createElement)("span",{dangerouslySetInnerHTML:{__html:e.label}}),className:f()(x),disabled:e.disabled},v)))})))};v.propTypes={className:b.a.string,id:b.a.string,htmlId:b.a.string,value:b.a.array,group_level:b.a.number,custom_attributes:b.a.object,onChange:b.a.func,description:b.a.string,options:b.a.array},t.default=v},61:function(e,t,n){var r=n(69),a=n(70),o=n(21),s=n(71);e.exports=function(e){return r(e)||a(e)||o(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},69:function(e,t,n){var r=n(22);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},70:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},71:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0}}]);