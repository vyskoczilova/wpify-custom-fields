(window.webpackJsonp_wpify_custom_fields=window.webpackJsonp_wpify_custom_fields||[]).push([[13,2],{138:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),i=n(0),r=n(1),s=n(5),l=n.n(s),u=n(2),o=n.n(u),m=n(20),f=n(50),b=n(57),h=n(56),d=function(e){var t=e.className,n=e.attachment,a=void 0===n?{}:n,c=e.onDelete,r=e.length,s=void 0===r?1:r,u=a.attributes,o=function(e){var t=e.attributes,n=void 0===t?{}:t,a=e.size,c=void 0===a?"thumbnail":a,i=e.maxWidth,r=void 0===i?150:i,s=e.maxHeight,l=void 0===s?150:s,u=n&&n.sizes&&n.sizes[c]?n.sizes[c]:{url:n.icon,width:48,height:64},o=u.height>u.width?l/u.height:r/u.width;return u.width=u.width*o,u.height=u.height*o,u}({attributes:u,maxWidth:50,maxHeight:50});return Object(i.createElement)("div",{className:l()(t,"wcf-attachment"),key:e.id},s>1&&Object(i.createElement)(h.a,null),Object(i.createElement)("div",{className:"wcf-attachment__image"},o?Object(i.createElement)("img",{src:o.url,width:o.width,height:o.height}):Object(i.createElement)("img",{src:u.icon,width:48,height:64,alt:u.title})),Object(i.createElement)("div",{className:"wcf-attachment__description"},Object(i.createElement)("strong",null,Object(i.createElement)("a",{href:u.editLink,target:"_blank"},u.title)),Object(i.createElement)("br",null),"[",Object(i.createElement)("a",{href:u.url,target:"_blank"},u.filename),", ",u.filesizeHumanReadable,"]"),c&&Object(i.createElement)(b.a,{onClick:function(){return c(a)}}))};d.propTypes={className:o.a.string,attachment:o.a.object,onDelete:o.a.func,length:o.a.number};var p=d,O=n(7),g=n(55),j=n(3),v=function(e){var t=e.id,n=e.value,a=e.className,s=e.group_level,u=void 0===s?0:s,o=e.isMulti,b=void 0!==o&&o,h=e.attachment_type,d=e.onChange,v=e.description,y=Object(r.useState)((Array.isArray(n)?n:[n]).filter(Boolean).map((function(e){return parseInt(e,10)}))),w=c()(y,2),E=w[0],N=w[1],_=b?E.filter(Boolean):E.find(Boolean),k=Object(r.useRef)(),x=Object(r.useState)([]),S=c()(x,2),C=S[0],T=S[1],W=Object(O.f)(),z=window.wp,B=Object(r.useCallback)((function(){k.current.open()}),[]),J=Object(r.useCallback)((function(){var e=k.current.state().get("selection"),t=[];e.each((function(e){return t.push(e)})),T(t),N(t.map((function(e){return e.id})))}),[]),H=function(){var e=k.current.state().get("selection");E.forEach((function(t){var n=z.media.attachment(parseInt(t,10));n.fetch(),e.add(n?[n]:[])}))};Object(r.useEffect)((function(){k.current=z.media({title:b?Object(m.__)("Select attachments","wpify-custom-fields"):Object(m.__)("Select attachment","wpify-custom-fields"),multiple:b,library:{type:h}}),k.current.on("close",J),k.current.on("open",H);for(var e=[],t=0;t<E.length;t++){var n=z.media.attachment(E[t]);n.fetch({success:W}),e.push(n)}T(e),N(e.map((function(e){return e.id})))}),[]),Object(r.useEffect)((function(){d&&JSON.stringify(n)!==JSON.stringify(_)&&d(_)}),[n,_,d]);var M=function(e){N((function(t){return t.filter((function(t){return t!==e.id}))})),T((function(t){return t.filter((function(t){return t.id!==e.id}))}))};return Object(i.createElement)("div",{className:l()(a)},0===u&&Object(i.createElement)("input",{type:"hidden",name:t,value:JSON.stringify(_)}),Object(i.createElement)("div",{className:"wcf-media-list"},Object(i.createElement)(g.a,{list:C||[],setList:function(e){T(e),N(e.map((function(e){return e.id})))}},C.map((function(e){return Object(i.createElement)(j.a,{key:e.id},Object(i.createElement)(p,{attachment:e,onDelete:M,length:C.length}))})))),Object(i.createElement)(f.a,{onClick:B},Object(m.__)("Select media","wpify-custom-fields")),v&&Object(i.createElement)(j.a,null,Object(i.createElement)("p",{dangerouslySetInnerHTML:{__html:v}})))};v.propTypes={className:o.a.string,id:o.a.string,value:o.a.oneOfType([o.a.array,o.a.string]),group_level:o.a.number,isMulti:o.a.bool,attachment_type:o.a.string,onChange:o.a.func,description:o.a.string},t.default=v},292:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=n(0),r=(n(1),n(138)),s=n(3);t.default=function(e){return Object(i.createElement)(s.a,null,Object(i.createElement)(r.default,c()({},e,{isMulti:!0})))}},50:function(e,t,n){"use strict";var a=n(6),c=n.n(a),i=n(46),r=n.n(i),s=n(0),l=(n(1),n(5)),u=n.n(l),o=n(2),m=function(e){var t=e.className,n=r()(e,["className"]);return Object(s.createElement)("button",c()({type:"button",className:u()("button",t)},n))};m.propTypes={className:n.n(o).a.string},t.a=m},55:function(e,t,n){"use strict";var a=n(6),c=n.n(a),i=n(0),r=(n(1),n(72)),s=n(3);t.a=function(e){return Object(i.createElement)(s.a,null,Object(i.createElement)(r.ReactSortable,c()({animation:150,handle:".wcf-button--move",ghostClass:"wcf-sortable-ghost",dragClass:"wcf-sortable-drag"},e)))}},56:function(e,t,n){"use strict";var a=n(6),c=n.n(a),i=n(46),r=n.n(i),s=n(0),l=(n(1),n(2)),u=n.n(l),o=n(5),m=n.n(o),f=function(e){var t=e.className,n=r()(e,["className"]);return Object(s.createElement)("button",c()({type:"button",className:m()(t,"wcf-button wcf-button--move")},n),Object(s.createElement)("svg",{width:10,height:10,viewBox:"0 0 10 10"},Object(s.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:0,y1:1,x2:10,y2:1}),Object(s.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:0,y1:5,x2:10,y2:5}),Object(s.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:0,y1:9,x2:10,y2:9})))};f.propTypes={className:u.a.string},t.a=f},57:function(e,t,n){"use strict";var a=n(6),c=n.n(a),i=n(46),r=n.n(i),s=n(0),l=(n(1),n(2)),u=n.n(l),o=n(5),m=n.n(o),f=function(e){var t=e.className,n=r()(e,["className"]);return Object(s.createElement)("button",c()({type:"button",className:m()(t,"wcf-button wcf-button--delete")},n),Object(s.createElement)("svg",{width:10,height:10,viewBox:"0 0 10 10"},Object(s.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:1,y1:9,x2:9,y2:1}),Object(s.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:1,y1:1,x2:9,y2:9})))};f.propTypes={className:u.a.string},t.a=f}}]);