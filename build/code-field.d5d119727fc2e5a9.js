(window.webpackJsonp_wpify_custom_fields=window.webpackJsonp_wpify_custom_fields||[]).push([[5],{291:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),c=n(9),i=n.n(c),s=n(0),o=n(1),u=n.n(o),l=n(5),d=n.n(l),f=n(3),m=n(2),p=n.n(m),b=u.a.forwardRef((function(e,t){var n=e.id,r=e.value,c=e.onChange,l=e.htmlId,m=void 0===l?function(e){return e}:l,p=e.description,b=e.custom_attributes,g=e.className,_=e.group_level,w=void 0===_?0:_,v=e.mode,O=void 0===v?null:v,j=Object(o.useRef)(),y=Object(o.useRef)(),h=Object(o.useState)(r),E=i()(h,2),N=E[0],J=E[1];t&&(t.current=j.current);var S=function(e){J(e.getValue())};Object(o.useEffect)((function(){if(j.current){var e=(window.wcf_code_editor_settings||{})[O]||null;y.current=wp.codeEditor.initialize(j.current,e),y.current.codemirror.on("change",S)}}),[O]),Object(o.useEffect)((function(){c&&JSON.stringify(r)!==JSON.stringify(N)&&c(N)}),[c,r,N]);var I=p?n+"-description":null;return Object(s.createElement)(u.a.Fragment,null,Object(s.createElement)("textarea",a()({ref:j,id:m(n),name:0===w&&n,"aria-describedby":p&&I,className:d()("large-text",g),rows:10,cols:50},b),N),p&&Object(s.createElement)(f.a,null,Object(s.createElement)("p",{className:"description",id:I,dangerouslySetInnerHTML:{__html:p}})))}));b.propTypes={id:p.a.string,value:p.a.string,onChange:p.a.func,htmlId:p.a.string,description:p.a.string,custom_attributes:p.a.object,className:p.a.string,group_level:p.a.number,mode:p.a.any},t.default=b}}]);