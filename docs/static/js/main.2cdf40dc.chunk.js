(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(s.a)(e))})),o(""))},children:[Object(u.jsx)("h3",{children:"Write a category and hit ENTER :D"}),Object(u.jsxs)("h4",{children:["Current category :: ",c]}),Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){o(e.target.value)},placeholder:"Pets"})]})},j=n(10),d=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn animate__slower",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},l=n(6),b=n.n(l),f=n(8),m=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,a,r,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=9&api_key=zrE65QeG297xnvsvBATfWECzmBnxNEhP"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),1e3)}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h3",{className:"animate__animated animate__bounceIn animate__slow",children:t}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash animate__repeat-2",children:"Loading ..."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(u.jsx)(d,Object(j.a)({},e),e.id)}))})]})},h=function(e){var t=e.defaultCategories,n=Object(a.useState)(t),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Gif Expert App"}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{setCategories:s}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:c.map((function(e){return Object(u.jsx)(p,{category:e},e)}))})]})};h.defaultProps={defaultCategories:["Spider man"]};var O=h,x=(n(17),document.getElementById("root"));c.a.render(Object(u.jsx)(O,{}),x)}},[[18,1,2]]]);
//# sourceMappingURL=main.2cdf40dc.chunk.js.map