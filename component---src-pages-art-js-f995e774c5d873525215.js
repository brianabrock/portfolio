(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(154),o=(a(149),a(168),a(169)),l=a.n(o),s=a(170),i=a.n(s),u=a(171),d=a.n(u),f=a(172),p=a.n(f),m=a(173),g=a.n(m),h=a(174),b=a.n(h),y=a(175),E=a.n(y),v=a(176),w=a.n(v),j=a(177),q=a.n(j),x=a(178),k=a.n(x),S=a(179),L=a.n(S),T=a(180),_=a.n(T),A=[l.a,i.a,d.a,p.a,g.a,b.a,E.a,w.a,q.a,k.a,L.a,_.a];console.log(A);var N;N=window.innerHeight,console.log(N),window.addEventListener("scroll",function(e){var t=window.scrollY+N;document.querySelectorAll("img").length,document.querySelectorAll("img").forEach(function(e,a){e.offsetTop<t?e.classList.add("active"):e.classList.remove("active")})});t.default=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"art-page"},r.a.createElement("section",{className:"hero"},r.a.createElement("h1",null,"Art...makes me happy")),r.a.createElement("section",{className:"description"},r.a.createElement("p",null,"Say a little something here about art...")),r.a.createElement("section",{className:"grid"},A.map(function(e,t){return r.a.createElement("img",{key:t,"data-key":t,className:"grid-item",src:e,alt:""})}))))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(150);var i=r.a.createContext({}),u=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},151:function(e,t,a){"use strict";t.a=function(){console.log("testing");var e,t,a=window.innerHeight,n=document.querySelector(".header");console.log(n),document.querySelector(".home-page")&&(e=document.querySelectorAll(".text-link"),t=document.querySelectorAll(".kicker"),console.log(t),console.log(e)),document.querySelector(".projects-page")&&(console.log("projects-page"),document.querySelectorAll(".project-tile").forEach(function(e){e.addEventListener("click",function(){var e=document.querySelector('.project[data-project="'+this.dataset.project+'"]');console.log(e),e.scrollIntoView({block:"center",behavior:"smooth"})})}));window.addEventListener("scroll",function(e){var t=window.scrollY+.66*a,n=window.scrollY+a/2;window.scrollY>200?document.querySelector(".header").classList.add("scrolled"):document.querySelector(".header").classList.remove("scrolled"),document.querySelector(".home-page")&&(document.querySelectorAll(".text-link").forEach(function(e,t){n>=e.offsetTop?e.classList.add("scrolled"):e.classList.remove("scrolled")}),document.querySelectorAll(".kicker").forEach(function(e,a){t>=e.offsetTop?e.classList.add("scrolled"):e.classList.remove("scrolled")}))})}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=a(55),s=a(2),i=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=i},154:function(e,t,a){"use strict";var n=a(152),r=a(0),c=a.n(r),o=a(4),l=a.n(o),s=a(149),i=a(7),u=a.n(i),d=(a(155),a(151)),f=function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){Object(d.a)()},a.render=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header-container"},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(s.a,{to:"/",style:{textDecoration:"none"}},this.props.siteTitle)),c.a.createElement("div",{className:"header-links"},c.a.createElement(s.a,{to:"/projects/"},"Projects"),c.a.createElement(s.a,{to:"/art/"},"Art"))))},t}(c.a.Component);f.propTypes={siteTitle:l.a.string},f.defaultProps={siteTitle:""};var p=f,m=function(){return c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by Allen Welch")},g=(a(156),function(e){var t=e.children;return c.a.createElement(s.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("main",null,t),c.a.createElement(m,null))},data:n})});g.propTypes={children:l.a.node.isRequired};t.a=g},169:function(e,t,a){e.exports=a.p+"static/rose-d881ac5d4b7d336cb1d9f8f67e303c33.jpg"},170:function(e,t,a){e.exports=a.p+"static/the_dock-83358376a6324f3dd36918c6dff43a35.jpg"},171:function(e,t,a){e.exports=a.p+"static/outoftheflame-5f3a937dc7a6aa68d1ae3c9d31b033be.jpg"},172:function(e,t,a){e.exports=a.p+"static/lighthouse_staircase-b5ac1aa7d4bd03b7b223dbcdfb2f026e.jpg"},173:function(e,t,a){e.exports=a.p+"static/phoenix_rising-fdff3dc89eb03be259630f6a3647dd14.jpg"},174:function(e,t,a){e.exports=a.p+"static/aftermath1-a6911fab8f2e8971b2f805f7e17eb5f0.jpg"},175:function(e,t,a){e.exports=a.p+"static/muscle_movement-3bf7ad9af2c9cfa63cdd2c5863b50031.jpg"},176:function(e,t,a){e.exports=a.p+"static/water_meets_the_sky-5ed603246ab0b5d9f10442722968ef7c.jpg"},177:function(e,t,a){e.exports=a.p+"static/rainbow_jesus-27283fa02ab78bbd59c0a414793a1403.jpg"},178:function(e,t,a){e.exports=a.p+"static/spiral_up2-fb5cea141de10987af4271ab4a7971c4.jpg"},179:function(e,t,a){e.exports=a.p+"static/self_portrait-9c66e9c5712455c5feaaeeb80840003e.png"},180:function(e,t,a){e.exports=a.p+"static/serenity_lake-0d7bfb6874c0393cafe20a4f09e27d1f.jpg"}}]);
//# sourceMappingURL=component---src-pages-art-js-f995e774c5d873525215.js.map