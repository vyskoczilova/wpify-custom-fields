(window.webpackJsonp_wpify_custom_fields=window.webpackJsonp_wpify_custom_fields||[]).push([[37],{297:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),c=n(9),i=n.n(c),s=n(0),u=n(1),l=n.n(u),o=n(2),f=n.n(o),d=n(5),m=n.n(d),p=n(265),b=n.n(p),g=n(3),y=function(e){var t=e.id,n=e.htmlId,r=void 0===n?function(e){return e}:n,c=e.value,o=e.onChange,f=e.description,d=e.custom_attributes,p=e.className,y=e.group_level,O=void 0===y?0:y,_=Object(u.useState)(c),w=i()(_,2),j=w[0],h=w[1],v=Object(u.useRef)(),E=Object(u.useRef)(),N=Object(u.useRef)(j),S=function(){h(E.current.querySelector(".ql-editor").innerHTML)};Object(u.useEffect)((function(){o&&JSON.stringify(c)!==JSON.stringify(j)&&o(j)}),[o,c,j]),Object(u.useEffect)((function(){v.current=new b.a(E.current,{theme:"snow"}),v.current.on("text-change",S)}),[]);var T=f?t+"-description":null;return Object(s.createElement)(l.a.Fragment,null,0===O&&Object(s.createElement)("input",{type:"hidden",name:t,value:j}),Object(s.createElement)("div",a()({ref:E,id:r(t),onChange:S,"aria-describedby":f&&T,className:m()("wcf-wysiwyg-field",p)},d,{dangerouslySetInnerHTML:{__html:N.current}})),f&&Object(s.createElement)(g.a,null,Object(s.createElement)("p",{className:"description",id:T,dangerouslySetInnerHTML:{__html:f}})))};y.propTypes={id:f.a.string,htmlId:f.a.func,value:f.a.string,onChange:f.a.func,description:f.a.oneOfType([f.a.string,f.a.element]),suffix:f.a.oneOfType([f.a.string,f.a.element]),custom_attributes:f.a.object,group_level:f.a.number,className:f.a.string,type:f.a.string},t.default=y}}]);