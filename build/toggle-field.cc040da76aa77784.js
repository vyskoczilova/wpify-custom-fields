(window.webpackJsonp_wpify_custom_fields=window.webpackJsonp_wpify_custom_fields||[]).push([[30],{290:function(e,t,n){"use strict";n.r(t);var a=n(6),l=n.n(a),r=n(9),c=n.n(r),i=n(0),s=n(1),o=n.n(s),u=n(5),d=n.n(u),b=n(2),m=n.n(b),g=n(14),p=n(3),f=n(4),_=function(e){var t=e.id,n=e.htmlId,a=void 0===n?function(e){return e}:n,r=e.label,u=e.group_level,b=void 0===u?0:u,m=e.custom_attributes,_=void 0===m?{}:m,v=e.onChange,O=e.className,j=e.description,h=e.disabled,w=void 0!==h&&h,y=Object(s.useMemo)((function(){return e.generator?Object(f.applyFilters)("wcf_generator_"+e.generator,e.value,e):Boolean(e.value)}),[e]),E=Object(s.useState)(y),N=c()(E,2),S=N[0],C=N[1];Object(s.useEffect)((function(){v&&JSON.stringify(y)!==JSON.stringify(S)&&v(S)}),[v,y,S]);var I=Object(i.createElement)(p.a,null,Object(i.createElement)(g.ToggleControl,l()({id:a(t),checked:S,name:0===b&&t,onChange:function(e){w||C(e)},label:Object(i.createElement)("span",{dangerouslySetInnerHTML:{__html:r}}),className:d()(O),disabled:w},_)));return Object(i.createElement)(o.a.Fragment,null,0===b&&Object(i.createElement)("input",{type:"hidden",name:t,value:S?1:0}),w?Object(i.createElement)("div",{className:"wcf-toggle-disabled"},I):I,j&&Object(i.createElement)(p.a,null,Object(i.createElement)("p",{className:"description",dangerouslySetInnerHTML:{__html:j}})))};_.propTypes={className:m.a.string,id:m.a.string,htmlId:m.a.string,label:m.a.string,value:m.a.string,group_level:m.a.number,custom_attributes:m.a.object,onChange:m.a.func,description:m.a.string,disabled:m.a.bool,generator:m.a.string},t.default=_}}]);