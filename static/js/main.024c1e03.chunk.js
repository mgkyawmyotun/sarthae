(this.webpackJsonpserthae=this.webpackJsonpserthae||[]).push([[0],{10:function(t,e,c){t.exports={main:"main_main__3F37c"}},17:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var a=c(1),i=c.n(a),n=c(6),r=c.n(n),s=c(7),o=c.n(s),h=c(8),l=c(3),d=c.n(l),v=c(2),m=c.n(v),u=c(0);var f=function(){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){d()(".target_text").draggable({modifiers:[d.a.modifiers.restrictRect({restriction:"parent"})],listeners:{start:function(t){},end:function(t){var e=t.target.querySelector("p");e&&(e.textContent="moved a distance of "+Math.sqrt(Math.pow(t.pageX-t.x0,2)+Math.pow(t.pageY-t.y0,2)|0).toFixed(2)+"px")},move:function(t){var e=t.target,c=e.offsetWidth,a=(parseFloat(e.getAttribute("data-x"))||0)+t.dx,i=(parseFloat(e.getAttribute("data-y"))||0)+t.dy;e.style.transform="translate("+(a+c)+"px, "+i+"px)",e.setAttribute("data-x",a),e.setAttribute("data-y",i)}}}),function(){var t,e,c=document.querySelector(".target_image");d()(".target_image").resizable({edges:{top:!0,left:!0,bottom:!0,right:!0},modifiers:[d.a.modifiers.restrictSize({min:{width:100,height:100},max:{width:(null===c||void 0===c||null===(t=c.parentElement)||void 0===t?void 0:t.clientWidth)||500,height:(null===c||void 0===c||null===(e=c.parentElement)||void 0===e?void 0:e.clientHeight)||500}})],listeners:{move:function(t){var e=t.target.dataset,c=e.x,a=e.y;c=(parseFloat(c)||0)+t.deltaRect.left,a=(parseFloat(a)||0)+t.deltaRect.top,Object.assign(t.target.style,{width:"".concat(t.rect.width,"px"),height:"".concat(t.rect.height,"px"),transform:"translate(".concat(c,"px, ").concat(a,"px)")}),Object.assign(t.target.dataset,{x:c,y:a})}}})}()}),[]),Object(u.jsxs)("div",{className:m.a.editor,children:[Object(u.jsx)("div",{className:m.a.editor__main,children:Object(u.jsxs)("div",{ref:t,className:m.a.editor__frame,children:[Object(u.jsx)("img",{src:"https://source.unsplash.com/random/200x200",alt:"",className:"target_image"}),Object(u.jsx)("div",{className:"target_text",children:"Hell oWorld"})]})}),Object(u.jsx)("div",{className:m.a.editor_pannel,children:Object(u.jsx)("button",{onClick:function(){t&&t.current&&o.a.toBlob(t.current).then((function(t){Object(h.saveAs)(t)}))},children:"Generate"})})]})},j=c(9),g=c.n(j),x=c(5);var b=function(t){return Object(u.jsxs)("svg",Object(x.a)(Object(x.a)({width:"1em",height:"1em",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:[Object(u.jsx)("path",{fill:"#fff",d:"M0 0h128v128H0z"}),Object(u.jsx)("path",{d:"M35.516 60.508h-.26c-.93 0-1.395.499-1.395 1.496v2.992c0 .997.465 1.496 1.395 1.496h.26c.385-.752.577-1.75.577-2.992 0-1.243-.192-2.24-.577-2.992zm1.098 5.984h3.665c.93 0 1.395-.499 1.395-1.496v-2.992c0-.997-.465-1.496-1.395-1.496h-3.665c.273.828.41 1.826.41 2.992s-.137 2.163-.41 2.992zm4.595-8.976c1.55 0 2.326.997 2.326 2.992v5.984c0 1.995-.775 2.992-2.326 2.992h-6.883c-1.55 0-2.326-.997-2.326-2.992v-5.984c0-1.995.775-2.992 2.326-2.992h6.883z",fill:"#030303"}),Object(u.jsx)("path",{d:"M43.902 60.508c-.93 0-1.395.499-1.395 1.496l-1.861-1.496c0-1.995.775-2.992 2.326-2.992h6.883c1.55 0 2.326.997 2.326 2.992v5.984c0 1.995-.775 2.992-2.326 2.992h-4.372v-2.992h3.442c.93 0 1.395-.499 1.395-1.496v-2.992c0-.997-.465-1.496-1.395-1.496h-5.023zM63.6 65.456v-2.992c0-.997-.465-1.496-1.395-1.496h-5.023c-.93 0-1.395.499-1.395 1.496v2.992c0 .998.465 1.496 1.395 1.496h5.023c.93 0 1.396-.498 1.396-1.496zm1.861 0c0 .998.465 1.496 1.395 1.496h5.024c.93 0 1.395-.498 1.395-1.496v-2.992c0-.997-.465-1.496-1.395-1.496h-5.024c-.93 0-1.395.499-1.395 1.496v2.992zm-.93-7.066c.36-.276.825-.414 1.395-.414h6.884c1.55 0 2.325.998 2.325 2.992v5.984c0 1.995-.775 2.992-2.325 2.992h-6.884c-.57 0-1.035-.138-1.395-.414-.36.276-.825.414-1.396.414h-6.883c-1.55 0-2.326-.997-2.326-2.992v-5.984c0-1.995.775-2.992 2.326-2.992h6.883c.571 0 1.036.138 1.396.415zM87.326 64.996c0 .997.465 1.496 1.395 1.496h5.023c.93 0 1.395-.499 1.395-1.496v-2.992c0-.997-.465-1.496-1.395-1.496h-3.442v-2.992h4.372c1.55 0 2.326.997 2.326 2.992v5.984c0 1.995-.775 2.992-2.326 2.992h-6.883c-.57 0-1.036-.138-1.396-.414-.36.276-.824.414-1.395.414h-6.884c-.16 0-.316-.008-.465-.023v4.05c0 .998.465 1.497 1.396 1.497h14.697c.93 0 1.395-.499 1.395-1.496v-3.568H97v5.064C97 77.003 96.225 78 94.674 78H78.116c-1.55 0-2.325-.997-2.325-2.992V64.996h1.86c0 .997.465 1.496 1.396 1.496h5.023c.93 0 1.395-.499 1.395-1.496v-2.992c0-.997-.465-1.496-1.395-1.496h-5.023c-.93 0-1.396.499-1.396 1.496h-1.86v-1.496c0-1.995.775-2.992 2.325-2.992H85c1.55 0 2.326.997 2.326 2.992v4.488z",fill:"#030303"}),Object(u.jsx)("path",{d:"M92.412 70.578c1.24 0 1.332.767 1.332 2.301 0 1.534-.194 1.4-1.434 1.4s-1.55-.383-1.55-1.918c0-1.534.412-1.783 1.652-1.783zM90.581 50.762c-.93 0-1.395.422-1.395 1.266 0 .844.465 1.266 1.395 1.266h2.14v2.762h-3.07c-1.55 0-2.325-.998-2.325-2.992v-2.072c0-1.995.775-2.992 2.325-2.992h6.14c1.55 0 2.325.997 2.325 2.992l-1.86 1.036c0-.844-.465-1.266-1.395-1.266h-4.28z",fill:"#030303"}),Object(u.jsx)("path",{d:"M31 82h68M31 45h68",stroke:"#000",strokeWidth:4})]}))},p=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(b,{className:g.a.logo})})},_=c(10),O=c.n(_),w=function(){return Object(u.jsxs)("div",{className:O.a.main,children:[Object(u.jsx)(p,{}),Object(u.jsx)(f,{})]})},z=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(e){var c=e.getCLS,a=e.getFID,i=e.getFCP,n=e.getLCP,r=e.getTTFB;c(t),a(t),i(t),n(t),r(t)}))};c(17);r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),z()},2:function(t,e,c){t.exports={editor:"editor_editor__hL4ki",editor__frame:"editor_editor__frame__1R0DW",editor__image:"editor_editor__image__3m-fk"}},9:function(t,e,c){t.exports={logo:"header_logo__32lQu"}}},[[18,1,2]]]);
//# sourceMappingURL=main.024c1e03.chunk.js.map