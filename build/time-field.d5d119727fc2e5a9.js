(window.webpackJsonp_wpify_custom_fields=window.webpackJsonp_wpify_custom_fields||[]).push([[27],{283:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),i=n(0),s=(n(1),n(5)),c=n.n(s),l=n(47),u=n(2),o=n.n(u),m=n(3),f=function(e){var t=e.className;return Object(i.createElement)(m.a,null,Object(i.createElement)(l.a,r()({},e,{type:"time",className:c()(t)})))};f.propTypes={className:o.a.string},t.default=f},47:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(9),s=n.n(i),c=n(0),l=n(1),u=n.n(l),o=n(2),m=n.n(o),f=n(3),p=u.a.forwardRef((function(e,t){var n=e.id,a=e.htmlId,i=void 0===a?function(e){return e}:a,o=e.value,m=e.onChange,p=e.description,d=e.suffix,b=e.custom_attributes,g=void 0===b?{}:b,v=e.group_level,y=void 0===v?0:v,O=e.className,_=e.type,w=Object(l.useState)(o),j=s()(w,2),N=j[0],h=j[1];Object(l.useEffect)((function(){m&&JSON.stringify(o)!==JSON.stringify(N)&&m(N)}),[m,o,N]);var E=p?n+"-description":null;return Object(c.createElement)(u.a.Fragment,null,Object(c.createElement)("input",r()({type:_,id:i(n),name:0===y&&n,value:N,onChange:function(e){h(e.target.value)},"aria-describedby":E,className:O,ref:t},g)),d&&" "+d,p&&Object(c.createElement)(f.a,null,Object(c.createElement)("p",{className:"description",id:E,dangerouslySetInnerHTML:{__html:p}})))}));p.propTypes={id:m.a.string,htmlId:m.a.func,value:m.a.string,onChange:m.a.func,description:m.a.oneOfType([m.a.string,m.a.element]),suffix:m.a.oneOfType([m.a.string,m.a.element]),custom_attributes:m.a.object,group_level:m.a.number,className:m.a.string,type:m.a.oneOf(["color","date","datetime-local","email","month","number","password","tel","text","time","url","week"])},t.a=p}}]);