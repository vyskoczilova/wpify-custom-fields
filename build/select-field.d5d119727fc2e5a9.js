(window.webpackJsonp_wpify_custom_fields=window.webpackJsonp_wpify_custom_fields||[]).push([[22],{137:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n.n(r),a=n(0),i=n(1),c=n.n(i),u=n(2),s=n.n(u),l=n(10),p=n.n(l),f=n(20),b=n(7),O=n(62),y=n(3),m=n(50),g=n(5),d=n.n(g);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t,n=e.id,r=e.value,c=e.onChange,u=void 0===c?function(){}:c,s=e.options,l=e.isMulti,p=void 0!==l&&l,g=e.url,j=e.nonce,h=e.method,w=void 0===h?"post":h,x=e.className,E=e.list_type,S=e.required,_=e.appContext.api,C=Object(i.useState)((t=r,Array.isArray(t)?t.map(String):t?[String(t)]:[])),N=o()(C,2),P=N[0],T=N[1],M=Object(i.useState)(""),k=o()(M,2),D=k[0],A=k[1],q=Object(b.e)({defaultValue:s||[]}),B=q.fetch,J=q.result,I=Object(i.useRef)(0);Object(i.useEffect)((function(){return window.clearTimeout(I.current),I.current=window.setTimeout((function(){if((""!==D||!s)&&E){var t=v(v({},e),{},{current_value:P&&P.filter(Boolean)||[],search:D});B({method:w,url:g,nonce:j,body:t})}}),500),function(){window.clearTimeout(I.current)}}),[B,D,e,_,s,E,P,w,g,j]),Object(i.useEffect)((function(){u(p?P:P.find(Boolean))}),[u,p,r,P]);var H=function(e){T(p?e?e.map((function(e){return String(e.value)})):[]:e?[String(e.value)]:[])};return Object(a.createElement)(y.a,null,Object(a.createElement)(O.a,{id:n,onChange:H,value:J&&J.filter((function(e){return P.includes(String(e.value))})),onInputChange:A,options:J&&J.map((function(e){return v(v({},e),{},{value:String(e.value)})})),isMulti:p,className:x,noOptionsMessage:function(){return""===D?Object(f.__)("Type to search","wpify-custom-fields"):void 0}}),!S&&Boolean(P.length)&&!p&&Object(a.createElement)(m.a,{className:d()("wcf-button wcf-button--icon"),style:{marginLeft:"10px"},onClick:function(){return H(p?[]:null)}},Object(a.createElement)("svg",{viewBox:"0 0 20 20",width:"20",height:"20"},Object(a.createElement)("line",{stroke:"currentColor",x1:"3",y1:"3",x2:"17",y2:"17"}),Object(a.createElement)("line",{stroke:"currentColor",x1:"3",y1:"17",x2:"17",y2:"3"}))))};h.propTypes={id:s.a.string,value:s.a.oneOfType([s.a.string,s.a.number]),onChange:s.a.func,options:s.a.array,required:s.a.bool,isMulti:s.a.bool,url:s.a.string,nonce:s.a.string,method:s.a.string,className:s.a.string,list_type:s.a.string,appContext:s.a.object};var w=h,x=function(e){var t=e.id,n=e.value,r=e.onChange,u=e.options,s=e.description,l=e.list_type,p=void 0===l?null:l,f=e.group_level,b=void 0===f?0:f,O=e.required,m=e.isMulti,g=void 0!==m&&m,d=e.className,j=e.appContext,v=j.api,h=Object(i.useState)(n),x=o()(h,2),E=x[0],S=x[1];return Object(i.useEffect)((function(){r&&JSON.stringify(n)!==JSON.stringify(E)&&r(E)}),[r,n,E]),Object(a.createElement)(c.a.Fragment,null,0===b&&Object(a.createElement)("input",{type:"hidden",name:t,value:g?JSON.stringify(Array.isArray(E)?E.filter(Boolean):[]):E}),Object(a.createElement)(y.a,null,Object(a.createElement)(w,{id:t,value:n,onChange:function(e){S(e)},options:u,list_type:p,required:O,isMulti:g,url:v.url+"/list",nonce:v.nonce,method:"post",className:d,appContext:j})),s&&Object(a.createElement)(y.a,null,Object(a.createElement)("p",{className:"description",dangerouslySetInnerHTML:{__html:s}})))};x.propTypes={className:s.a.string,id:s.a.string,value:s.a.oneOfType([s.a.string,s.a.number]),onChange:s.a.func,options:s.a.array,description:s.a.oneOfType([s.a.string,s.a.element]),list_type:s.a.string,group_level:s.a.number,required:s.a.bool,isMulti:s.a.bool,appContext:s.a.object},x.getHumanTitle=function(e,t){if(Array.isArray(e.options)){var n=e.options.find((function(e){return String(e.value)===String(t)}));if(n)return n.label}return t},t.default=x},46:function(e,t,n){var r=n(54);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.default=e.exports,e.exports.__esModule=!0},50:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(46),i=n.n(a),c=n(0),u=(n(1),n(5)),s=n.n(u),l=n(2),p=function(e){var t=e.className,n=i()(e,["className"]);return Object(c.createElement)("button",o()({type:"button",className:s()("button",t)},n))};p.propTypes={className:n.n(l).a.string},t.a=p},54:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},62:function(e,t,n){"use strict";var r=n(6),o=n.n(r),a=n(10),i=n.n(a),c=n(46),u=n.n(c),s=n(0),l=(n(1),n(2)),p=n.n(l),f=n(5),b=n.n(f),O=n(83),y=n(3);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.className,n=u()(e,["className"]);return Object(s.createElement)(y.a,null,Object(s.createElement)(O.a,o()({className:b()("wcf-select",t),styles:{control:function(e,t){var n=t.isFocused;return g(g({},e),{},{minHeight:"30px",borderColor:n?"#2271b1 !important":"#8c8f94",boxShadow:n?"0 0 0 1px #2271b1":"none",outline:n?"2px solid transparent":"none",borderRadius:"3px",maxWidth:"25em"})},valueContainer:function(e){return g(g({},e),{},{padding:"0 8px"})}}},n)))};d.propTypes={id:p.a.string,onChange:p.a.func,onInputChange:p.a.func,options:p.a.array,className:p.a.string},t.a=d}}]);