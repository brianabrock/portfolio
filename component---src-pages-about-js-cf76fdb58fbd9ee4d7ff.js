(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(153),o=a(149);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement("h1",null,"About Page"),r.a.createElement(o.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(33),l=a.n(i);a.d(t,"a",function(){return l.a});a(150);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(55),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},153:function(e,t,a){"use strict";var n=a(151),r=a(0),c=a.n(r),o=a(4),i=a.n(o),l=a(149),u=a(7),s=a.n(u),d=(a(154),function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.headerScroll()},a.headerScroll=function(){var e=document.querySelector(".header");window.addEventListener("scroll",function(t){window.scrollY>200?e.classList.add("scrolled"):e.classList.remove("scrolled")})},a.render=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header-container"},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(l.a,{to:"/",style:{textDecoration:"none"}},this.props.siteTitle)),c.a.createElement("div",{className:"header-links"},c.a.createElement(l.a,{to:"/projects/"},"Projects"),c.a.createElement(l.a,{to:"/art/"},"Art"))))},t}(c.a.Component));d.propTypes={siteTitle:i.a.string},d.defaultProps={siteTitle:""};var m=d,p=function(){return c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by Allen Welch")},f=(a(155),function(e){var t=e.children;return c.a.createElement(l.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("main",null,t),c.a.createElement(p,null))},data:n})});f.propTypes={children:i.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-about-js-cf76fdb58fbd9ee4d7ff.js.map