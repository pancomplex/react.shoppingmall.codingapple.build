(this["webpackJsonpreact.shoppingmall.codingapple"]=this["webpackJsonpreact.shoppingmall.codingapple"]||[]).push([[0],{69:function(e,t,i){},94:function(e,t,i){},98:function(e,t,i){},99:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i.n(c),a=i(25),s=i.n(a),r=i(23),o=i(43),j=i(16),l=i(8),d=[{id:0,title:"White and Black",content:"Born in France",price:12e4,image:"https://codingapple1.github.io/shop/shoes1.jpg"},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4,image:"https://codingapple1.github.io/shop/shoes2.jpg"},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4,image:"https://codingapple1.github.io/shop/shoes3.jpg"}],b=i(109),h=i(106),p=i(110),u=i(108),O=(i(68),i(69),i(58)),m=i.n(O),x=i(104),g=i(105),f=i(1);var v=function(e){return Object(f.jsxs)(x.a,{md:4,style:{display:"flex",flexDirection:"column",alignItems:"center"},as:r.b,to:e.repository+"/detail/".concat(e.id),children:[Object(f.jsx)(g.a,{src:e.image,fluid:!0}),Object(f.jsx)("h4",{style:{fontWeight:"700"},children:e.title}),Object(f.jsxs)("p",{style:{margin:0},children:[e.content," & ",e.price]})]})},y=i(60),k=i(107);i(94);var S=function(e){var t=e.data,i=Object(c.useState)(!0),n=Object(j.a)(i,2),a=n[0],s=n[1],r=Object(c.useState)(!1),o=Object(j.a)(r,2),l=o[0],d=o[1];return Object(f.jsxs)("div",{className:"Main",children:[Object(f.jsxs)("div",{className:"jumbotron",children:[Object(f.jsx)("h1",{children:"20% Season Off"}),Object(f.jsxs)("p",{children:["Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",Object(f.jsx)("br",{})," Aspernatur pariatur velit possimus! Eveniet rem consequuntur,",Object(f.jsx)("br",{})," cupiditate aperiam omnis animi ullam dolore dolor aut dolores illum reiciendis.",Object(f.jsx)("br",{})," Architecto excepturi vitae aperiam."]}),Object(f.jsx)(y.a,{variant:"primary",children:"Learn more"})]}),Object(f.jsxs)(h.a,{className:"displayItems",children:[Object(f.jsx)(k.a,{children:t.map((function(t){return Object(f.jsx)(v,{id:t.id,title:t.title,content:t.content,price:t.price,image:t.image,repository:e.repository},t.id)}))}),a&&Object(f.jsx)(y.a,{variant:"primary",disabled:l,onClick:function(){d(!0),m.a.get("https://codingapple1.github.io/shop/data2.json").then((function(t){s(!1),e.itemsUpdate(t.data),d(!1)})).catch((function(e){console.err(e),d(!1)}))},children:l?"\ub85c\ub529\uc911...":"\ub354\ubcf4\uae30"})]})]})},I=i(111);var B=function(e){var t=e.data,i=Object(l.g)().id,n=Object(c.useState)(!0),a=Object(j.a)(n,2),s=a[0],r=a[1],o=Object(l.f)();console.log("Detail\ub80c\ub354\ub9c1 "),Object(c.useEffect)((function(){var e=setTimeout((function(){r(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var d=t.find((function(e){return e.id==i}));return Object(f.jsxs)(h.a,{children:[s&&Object(f.jsx)(I.a,{variant:"warning",style:{textAlign:"center"},children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."}),Object(f.jsxs)(k.a,{children:[Object(f.jsx)(x.a,{md:6,children:Object(f.jsx)("img",{src:d.image,width:"100%"})}),Object(f.jsxs)(x.a,{md:6,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(f.jsx)("h4",{children:d.title}),Object(f.jsx)("p",{children:d.content}),Object(f.jsxs)("p",{children:[d.price,"\uc6d0"]}),Object(f.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stocks[i]]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(y.a,{variant:"danger",onClick:function(){e.orderItem(i)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(f.jsx)(y.a,{variant:"danger",style:{marginLeft:5},onClick:function(){o.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})]})};var C=function(){var e=Object(c.useState)(d),t=Object(j.a)(e,2),i=t[0],n=t[1],a=Object(c.useState)([10,11,12]),s=Object(j.a)(a,2),O=s[0],m=s[1],x="/react.shoppingmall.codingapple.build";return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(b.a,{bg:"light",expand:"lg",children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(b.a.Brand,{as:r.b,to:x+"/",children:"ShoeShop"}),Object(f.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(p.a,{className:"me-auto",children:[Object(f.jsx)(p.a.Link,{as:r.b,to:x+"/",children:"Home"}),Object(f.jsx)(p.a.Link,{as:r.b,to:x+"/detail",children:"Detail"}),Object(f.jsxs)(u.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(f.jsx)(u.a.Item,{href:"#action/3.1",children:"Action"}),Object(f.jsx)(u.a.Item,{href:"#action/3.2",children:"Another action"}),Object(f.jsx)(u.a.Item,{href:"#action/3.3",children:"Something"}),Object(f.jsx)(u.a.Divider,{}),Object(f.jsx)(u.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:x+"/",children:Object(f.jsx)(S,{data:i,itemsUpdate:function(e){var t=[].concat(Object(o.a)(i),Object(o.a)(e));t.map((function(e){e.image||(e.image="https://codingapple1.github.io/shop/shoes".concat(e.id,".jpg"))})),n(t)},repository:x})}),Object(f.jsx)(l.a,{path:x+"/detail/:id",children:Object(f.jsx)(B,{data:i,stocks:O,orderItem:function(e){var t=Object(o.a)(O);t[e]--,console.log("order, id: "+e+", stocksArray: "+t),m(t),console.log("stocks: ",O)}})})]})]})},A=(i(98),function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,112)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),c(e),n(e),a(e),s(e)}))});s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(r.a,{children:Object(f.jsx)(C,{})})}),document.getElementById("root")),A()}},[[99,1,2]]]);
//# sourceMappingURL=main.ec135324.chunk.js.map