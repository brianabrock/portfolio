(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+6TD":function(e,t,a){"use strict";var c=a("q1tI"),n=a.n(c),r=a("Wbzz"),o=a("oKh+"),l=a.n(o),i=a("FQsB"),s=a.n(i);a("PFCR");t.a=function(){return n.a.createElement("section",{className:"projects-container"},n.a.createElement("article",{className:"project","data-project":"1"},n.a.createElement(r.Link,{to:"/qoins"},n.a.createElement("div",{className:"project-image"},n.a.createElement("img",{src:l.a,alt:"qoins"})),n.a.createElement("div",{className:"project-description"},n.a.createElement("h1",null,"Qoins"),n.a.createElement("p",null,"A financial management mobile app that rounds up your individual purchases and allows you to set up automatic payments to set money aside in order for you to pay off your debt faster")))),n.a.createElement("article",{className:"project","data-project":"2"},n.a.createElement(r.Link,{to:"/recycleATL"},n.a.createElement("div",{className:"project-description"},n.a.createElement("h1",null,"Recycle ATL"),n.a.createElement("p",null,"Recycle ATL is what we call a passion project.  It comes out of my need to know where I can specifically recycle glass, since the city of Atlanta no longer recycles glass.  Not only that, but also for users living in locations that do not offer curbside recycling.")),n.a.createElement("div",{className:"project-image"},n.a.createElement("img",{src:s.a,alt:"recycle atl"})))),n.a.createElement("article",{className:"project","data-project":"3"},n.a.createElement(r.Link,{to:"/YayStack"},n.a.createElement("div",{className:"project-image"},n.a.createElement("img",{src:"https://thumbnails-photos.amazon.com/v1/thumbnail/whR6DYFsRKm2WfUgj7Yipg?viewBox=512%2C512&ownerId=A1VFC1KOR2FJO4",alt:"yaystack"})),n.a.createElement("div",{className:"project-description"},n.a.createElement("h1",null,"Yay Stack"),n.a.createElement("p",null,"This case study is a usability test for a mobile application to gauge interest and preferences from users before product launch.")))))}},"16l3":function(e,t,a){"use strict";a.r(t);var c=a("q1tI"),n=a.n(c),r=a("Bl7J"),o=a("+6TD"),l=(a("8Bty"),a("o178")),i=a.n(l),s=a("Lv01"),p=a.n(s);var m=function(e){var t,a;function c(){return e.apply(this,arguments)||this}a=e,(t=c).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=c.prototype;return l.componentDidMount=function(){this.projectScroll()},l.projectScroll=function(){document.querySelectorAll(".project-tile").forEach((function(e){e.addEventListener("click",(function(){var e=document.querySelector('.project[data-project="'+this.dataset.project+'"]');console.log(e),e.scrollIntoView({block:"center",behavior:"smooth"})}))}))},l.render=function(){return n.a.createElement(r.a,null,n.a.createElement("div",{className:"projects-page"},n.a.createElement("section",{className:"hero"}),n.a.createElement("section",{className:"project-tiles"},n.a.createElement("img",{className:"project-tile","data-project":"1",src:i.a,alt:"qoins"}),n.a.createElement("img",{className:"project-tile","data-project":"2",src:p.a,alt:"recycle atl"}),n.a.createElement("img",{className:"project-tile","data-project":"3",src:"https://thumbnails-photos.amazon.com/v1/thumbnail/whR6DYFsRKm2WfUgj7Yipg?viewBox=512%2C512&ownerId=A1VFC1KOR2FJO4",alt:"yay stack"})),n.a.createElement(o.a,null)))},c}(c.Component);t.default=m},"8Bty":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var c=a("PlB2"),n=a("q1tI"),r=a.n(n),o=a("Wbzz");a("DYpl");var l=function(e){var t,a;function c(){return e.apply(this,arguments)||this}a=e,(t=c).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=c.prototype;return n.componentDidMount=function(){this.headerScroll()},n.headerScroll=function(){var e=document.querySelector(".header");window.addEventListener("scroll",(function(t){window.scrollY>200?e.classList.add("scrolled"):e.classList.remove("scrolled")}))},n.render=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-container"},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(o.Link,{to:"/",style:{textDecoration:"none"}},this.props.siteTitle)),r.a.createElement("div",{className:"header-links"},r.a.createElement(o.Link,{to:"/projects/"},"Projects"),r.a.createElement(o.Link,{to:"/art/"},"Art"))))},c}(r.a.Component);l.defaultProps={siteTitle:""};var i=l,s=function(){return r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by Allen Welch")};a("PN8+"),t.a=function(e){var t=e.children;return r.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("main",null,t),r.a.createElement(s,null))},data:c})}},DYpl:function(e,t,a){},FQsB:function(e,t,a){e.exports=a.p+"static/logo-0124936f7c907c06ba91360d66db3bef.png"},Lv01:function(e,t,a){e.exports=a.p+"static/logo3-6a7c1e1e21babeda20f07482ccd69d48.png"},PFCR:function(e,t,a){},"PN8+":function(e,t,a){},PlB2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Briana Brock"}}}}')},o178:function(e,t,a){e.exports=a.p+"static/title1-fa703b18102f5fe78798d16352eb32f2.png"},"oKh+":function(e,t,a){e.exports=a.p+"static/title2-4afc7bc2ccd02a5c0203013533fa3fb1.png"}}]);
//# sourceMappingURL=component---src-pages-projects-js-1bb0939bd384a0d15466.js.map