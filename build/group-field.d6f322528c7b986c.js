(window.webpackJsonp_wpify_custom_fields=window.webpackJsonp_wpify_custom_fields||[]).push([[10],{10:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},299:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(9),c=n.n(o),i=n(0),l=n(1),p=n.n(l),u=n(2),s=n.n(u),b=n(8),f=n(3),O=n(6),g=n.n(O),j=n(5),m=n.n(j),y=n(4),v=n(7),_=function(e){var t=e.item,n=e.group_level,r=e.appContext,o=e.onChange,c=e.className,p=e.value,u=t.id,s=Object(l.useContext)(b.a).RowWrapper,O=Object(v.b)(t),j=Object(l.useCallback)((function(e){o(a()({},u,e))}),[u,o]);return Object(i.createElement)(s,{className:m()(c),item:t,group_level:n+1,htmlId:function(e){return u+"_"+e},withoutWrapper:Object(y.applyFilters)("wcf_field_without_wrapper",!1,t.type,n),withoutLabel:Object(y.applyFilters)("wcf_field_without_label",!1,t.type),withoutSection:Object(y.applyFilters)("wcf_field_without_section",!1,t.type)},Object(i.createElement)(f.a,null,Object(i.createElement)(O,g()({},t,{htmlId:function(e){return u+"_"+e},group_level:n+1,onChange:j,value:p,appContext:r}))))};_.propTypes={className:s.a.string,item:s.a.object,group_level:s.a.number,id:s.a.string,appContext:s.a.object,value:s.a.object,onChange:s.a.func};var d=_;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.group_level,n=void 0===t?0:t,r=e.onChange,a=e.id,o=e.items,u=e.value,s=void 0===u?{}:u,O=e.appContext,g=Object(l.useContext)(b.a).RootWrapper,j=Object(l.useState)(s),m=c()(j,2),y=m[0],v=m[1],_=Object(l.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=h(h({},y),e);JSON.stringify(t)!==JSON.stringify(y)&&v(t)}),[y]);return Object(l.useEffect)((function(){r&&JSON.stringify(s)!==JSON.stringify(y)&&r(y)}),[s,y,r]),Object(i.createElement)(p.a.Fragment,null,0===n&&Object(i.createElement)("input",{type:"hidden",id:a,name:a,value:JSON.stringify(y)}),Object(i.createElement)(f.a,null,Object(i.createElement)(g,{group_level:n+1},o.map((function(e){return Object(i.createElement)(d,{key:e.id,item:e,group_level:n,appContext:O,onChange:_,value:s[e.id]})})))))};C.propTypes={object_type:s.a.string,items:s.a.string,wcf:s.a.string,group_level:s.a.number,value:s.a.any,onChange:s.a.func,id:s.a.string,name:s.a.string,appContext:s.a.object},t.default=C}}]);