(window.webpackJsonp_wpify_custom_fields=window.webpackJsonp_wpify_custom_fields||[]).push([[14,2],{142:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),c=n(0),i=n(1),s=n(5),l=n.n(s),o=n(2),u=n.n(o),m=n(20),f=n(52),d=n(59),b=n(53),h=function(e){var t=e.className,n=e.attachment,a=void 0===n?{}:n,r=e.onDelete,i=e.length,s=void 0===i?1:i,o=a.attributes,u=function(e){var t=e.attributes,n=void 0===t?{}:t,a=e.size,r=void 0===a?"thumbnail":a,c=e.maxWidth,i=void 0===c?150:c,s=e.maxHeight,l=void 0===s?150:s,o=n&&n.sizes&&n.sizes[r]?n.sizes[r]:{url:n.icon,width:48,height:64},u=o.height>o.width?l/o.height:i/o.width;return o.width=o.width*u,o.height=o.height*u,o}({attributes:o,maxWidth:50,maxHeight:50});return Object(c.createElement)("div",{className:l()(t,"wcf-attachment"),key:e.id},s>1&&Object(c.createElement)(b.a,null),Object(c.createElement)("div",{className:"wcf-attachment__image"},u?Object(c.createElement)("img",{src:u.url,width:u.width,height:u.height}):Object(c.createElement)("img",{src:o.icon,width:48,height:64,alt:o.title})),Object(c.createElement)("div",{className:"wcf-attachment__description"},Object(c.createElement)("strong",null,Object(c.createElement)("a",{href:o.editLink,target:"_blank"},o.title)),Object(c.createElement)("br",null),"[",Object(c.createElement)("a",{href:o.url,target:"_blank"},o.filename),", ",o.filesizeHumanReadable,"]"),r&&Object(c.createElement)(d.a,{onClick:function(){return r(a)}}))};h.propTypes={className:u.a.string,attachment:u.a.object,onDelete:u.a.func,length:u.a.number};var p=h,O=n(7),j=n(60),g=n(3),v=n(4),y=function(e){var t=e.id,n=e.className,a=e.group_level,s=void 0===a?0:a,o=e.isMulti,u=void 0!==o&&o,d=e.attachment_type,b=e.onChange,h=e.description,y=Object(i.useMemo)((function(){var t=e.value;return e.generator&&(t=Object(v.applyFilters)("wcf_generator_"+e.generator,t,e)),(t=Array.isArray(t)?t:[t]).filter(Boolean).map((function(e){return parseInt(e,10)}))}),[e]),E=Object(i.useState)(y),w=r()(E,2),N=w[0],_=w[1],k=u?N.filter(Boolean):N.find(Boolean),x=Object(i.useRef)(),S=Object(i.useState)([]),I=r()(S,2),T=I[0],B=I[1],D=Object(O.f)(),W=window.wp,C=Object(i.useCallback)((function(){x.current.open()}),[]),z=Object(i.useCallback)((function(){var e=x.current.state().get("selection"),t=[];e.each((function(e){return t.push(e)})),B(t),_(t.map((function(e){return e.id})))}),[]),J=function(){var e=x.current.state().get("selection");N.forEach((function(t){var n=W.media.attachment(parseInt(t,10));n.fetch(),e.add(n?[n]:[])}))};Object(i.useEffect)((function(){x.current=W.media({title:u?Object(m.__)("Select attachments","wpify-custom-fields"):Object(m.__)("Select attachment","wpify-custom-fields"),multiple:u,library:{type:d}}),x.current.on("close",z),x.current.on("open",J);for(var e=[],t=0;t<N.length;t++){var n=W.media.attachment(N[t]);n.fetch({success:D}),e.push(n)}B(e),_(e.map((function(e){return e.id})))}),[]),Object(i.useEffect)((function(){b&&JSON.stringify(y)!==JSON.stringify(N)&&b(k)}),[y,k,N,b]);var M=function(e){_((function(t){return t.filter((function(t){return t!==e.id}))})),B((function(t){return t.filter((function(t){return t.id!==e.id}))}))};return Object(c.createElement)("div",{className:l()(n)},0===s&&Object(c.createElement)("input",{type:"hidden",name:t,value:JSON.stringify(k)}),u&&N.length>1?Object(c.createElement)("div",{className:"wcf-media-list"},Object(c.createElement)(j.a,{items:N.map(String),setItems:function(e){return _(e.map((function(e){return parseInt(e,10)})))},renderItem:function(e){var t=T.find((function(t){return t.id===parseInt(e,10)}));return t?Object(c.createElement)(g.a,{key:e},Object(c.createElement)(p,{attachment:t,onDelete:M,length:T.length})):null}})):T.find(Boolean)?Object(c.createElement)(g.a,null,Object(c.createElement)(p,{attachment:T.find(Boolean),onDelete:M})):null,Object(c.createElement)("div",{className:"wcf-media-buttons"},Object(c.createElement)(f.a,{onClick:C},Object(m.__)("Select media","wpify-custom-fields"))),h&&Object(c.createElement)(g.a,null,Object(c.createElement)("p",{dangerouslySetInnerHTML:{__html:h}})))};y.propTypes={className:u.a.string,id:u.a.string,value:u.a.any,group_level:u.a.number,isMulti:u.a.bool,attachment_type:u.a.string,onChange:u.a.func,description:u.a.string,generator:u.a.string},t.default=y},294:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),c=n(0),i=(n(1),n(142)),s=n(3);t.default=function(e){return Object(c.createElement)(s.a,null,Object(c.createElement)(i.default,r()({},e,{isMulti:!0})))}},52:function(e,t,n){"use strict";var a=n(6),r=n.n(a),c=n(48),i=n.n(c),s=n(0),l=(n(1),n(5)),o=n.n(l),u=n(2),m=["className"],f=function(e){var t=e.className,n=i()(e,m);return Object(s.createElement)("button",r()({type:"button",className:o()("button",t)},n))};f.propTypes={className:n.n(u).a.string},t.a=f},53:function(e,t,n){"use strict";var a=n(6),r=n.n(a),c=n(48),i=n.n(c),s=n(0),l=(n(1),n(2)),o=n.n(l),u=n(5),m=n.n(u),f=["className"],d=function(e){var t=e.className,n=i()(e,f);return Object(s.createElement)("button",r()({type:"button",className:m()(t,"wcf-button wcf-button--move")},n),Object(s.createElement)("svg",{width:10,height:10,viewBox:"0 0 10 10"},Object(s.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:0,y1:1,x2:10,y2:1}),Object(s.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:0,y1:5,x2:10,y2:5}),Object(s.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:0,y1:9,x2:10,y2:9})))};d.propTypes={className:o.a.string},t.a=d},59:function(e,t,n){"use strict";var a=n(6),r=n.n(a),c=n(48),i=n.n(c),s=n(0),l=(n(1),n(2)),o=n.n(l),u=n(5),m=n.n(u),f=["className"],d=function(e){var t=e.className,n=i()(e,f);return Object(s.createElement)("button",r()({type:"button",className:m()(t,"wcf-button wcf-button--delete")},n),Object(s.createElement)("svg",{width:10,height:10,viewBox:"0 0 10 10"},Object(s.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:1,y1:9,x2:9,y2:1}),Object(s.createElement)("line",{stroke:"#50575e",strokeWidth:2,x1:1,y1:1,x2:9,y2:9})))};d.propTypes={className:o.a.string},t.a=d},60:function(e,t,n){"use strict";var a=n(0),r=(n(1),n(2)),c=n.n(r),i=n(3),s=n(68),l=n(57),o=n(6),u=n.n(o),m=n(5),f=n.n(m),d=n(65),b=n(53),h=function(e){var t=e.id,n=e.children,r=e.className,c=Object(l.d)({id:t}),i=c.attributes,s=c.listeners,o=c.setNodeRef,m=c.transform,h=c.transition,p=c.isDragging,O={transform:d.a.Transform.toString(m),transition:h,position:"relative"};return Object(a.createElement)("div",u()({ref:o,style:O,faded:p.toString(),className:f()(r,"wcf-sortable-item")},e),n,Object(a.createElement)(b.a,u()({},i,s)))};h.propTypes={id:c.a.any,children:c.a.any,className:c.a.string};var p=h,O=function(e){var t=e.items,n=e.setItems,r=e.renderItem,c=Object(s.n)(Object(s.m)(s.d),Object(s.m)(s.c,{coordinateGetter:l.c}));return Array.isArray(t)?Object(a.createElement)(i.a,null,Object(a.createElement)(s.a,{sensors:c,collisionDetection:s.e,onDragEnd:function(e){var a=e.active,r=e.over;if(a.id!==r.id){var c=t.indexOf(a.id),i=t.indexOf(r.id);n(Object(l.b)(t,c,i))}}},Object(a.createElement)(l.a,{items:t},t.map((function(e,t){return Object(a.createElement)(p,{key:e,id:e,index:t},r(e,t))}))))):null};O.propTypes={items:c.a.array,setItems:c.a.func,renderItem:c.a.func},t.a=O}}]);