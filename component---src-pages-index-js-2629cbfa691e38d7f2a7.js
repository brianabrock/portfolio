(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{186:function(A,e,t){"use strict";t.r(e);var a=t(7),n=t.n(a),r=t(0),l=t.n(r),o=t(192),c=t(196),i=t(199),p=(t(208),t(203),t(204)),s=t.n(p),g=t(201),m=t.n(g),d=(t(205),t(206),t(232)),S=t.n(d),U=t(233),u=t.n(U),Q=t(234),k=t.n(Q),E=function(A){function e(){return A.apply(this,arguments)||this}n()(e,A);var t=e.prototype;return t.componentDidMount=function(){this.projectScroll()},t.projectScroll=function(){document.querySelectorAll(".project-tile").forEach(function(A){A.addEventListener("click",function(){var A=document.querySelector('.project[data-project="'+this.dataset.project+'"]');console.log(A),A.scrollIntoView({block:"center",behavior:"smooth"})})})},t.render=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"home-page"},l.a.createElement(i.a,{title:"Home",keywords:["gatsby","application","react"]}),l.a.createElement("section",{className:"hero"}),l.a.createElement("section",{className:"content"},l.a.createElement("section",{className:"brief-text"},l.a.createElement("p",null,"A creative thinker and artist dedicated to the user centered process of research and design")),l.a.createElement("section",{className:"intro-text"},l.a.createElement("p",null,"I'm an emerging UX Designer passionate about people, proficient with research, with a creative mind and spirit, and an eye for detail ready to create beautiful experiences. I'm pretty great at research including competative audits, user interviews based on demographics, synthesizing qualitative and quantitative data, and using all that information to start getting down to the beautiful design of an awesome product and experience. An artist at heart with a customer service background, I bring the dynamic combination of creativity and understanding to the design process of the user’s experience. See my latest ",l.a.createElement(o.a,{className:"text-link",to:"/projects/"},"projects")," and how I might be able to help your team on your next venture.")),l.a.createElement("section",{className:"projects-container"},l.a.createElement("article",{className:"project","data-project":"1"},l.a.createElement(o.a,{to:"/qoins"},l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:s.a,alt:""})),l.a.createElement("div",{className:"project-description"},l.a.createElement("h1",null,"Qoins"),l.a.createElement("p",null,"A financial management mobile app that rounds up your individual purchases and allows you to set up automatic payments to set money aside in order for you to pay off your debt faster")))),l.a.createElement("article",{className:"project","data-project":"2"},l.a.createElement(o.a,{to:"/recycleATL"},l.a.createElement("div",{className:"project-description"},l.a.createElement("h1",null,"Recycle ATL"),l.a.createElement("p",null,"Recycle ATL is what we call a passion project.  It comes out of my need to know where I can specifically recycle glass, since the city of Atlanta no longer recycles glass.  Not only that, but also for users living in locations that do not offer curbside recycling.")),l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:m.a,alt:""}))))),l.a.createElement("section",{className:"contact"},l.a.createElement("h1",{className:"title"},"Contact Me",l.a.createElement("span",{className:"contact-icons"},l.a.createElement("img",{src:k.a})),l.a.createElement("span",{className:"contact-icons"},l.a.createElement("img",{src:S.a})),l.a.createElement("span",{className:"contact-icons"},l.a.createElement("img",{src:u.a}))),l.a.createElement("ul",null,l.a.createElement("li",null,"Email: ",l.a.createElement("span",null,"brianasbrock@gmail.com")),l.a.createElement("li",null,"Phone: ",l.a.createElement("span",null,"770.845.2311")),l.a.createElement("li",null,"LinkedIn: ",l.a.createElement("span",null,"https://www.linkedin.com/in/briana-brock/")),l.a.createElement("li",null,"Twitter: ",l.a.createElement("span",null,"https://twitter.com/BrianaBW1")))))))},e}(l.a.Component);e.default=E},192:function(A,e,t){"use strict";t.d(e,"b",function(){return p});var a=t(0),n=t.n(a),r=t(4),l=t.n(r),o=t(33),c=t.n(o);t.d(e,"a",function(){return c.a});t(193);var i=n.a.createContext({}),p=function(A){return n.a.createElement(i.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},193:function(A,e,t){var a;A.exports=(a=t(195))&&a.default||a},194:function(A){A.exports={data:{site:{siteMetadata:{title:"Briana Brock"}}}}},195:function(A,e,t){"use strict";t.r(e);t(34);var a=t(0),n=t.n(a),r=t(4),l=t.n(r),o=t(60),c=t(2),i=function(A){var e=A.location,t=c.default.getResourcesForPathnameSync(e.pathname);return n.a.createElement(o.a,Object.assign({location:e,pageResources:t},t.json))};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},e.default=i},196:function(A,e,t){"use strict";var a=t(194),n=t(0),r=t.n(n),l=t(4),o=t.n(l),c=t(192),i=t(7),p=t.n(i),s=(t(197),function(A){function e(){return A.apply(this,arguments)||this}p()(e,A);var t=e.prototype;return t.componentDidMount=function(){this.headerScroll()},t.headerScroll=function(){var A=document.querySelector(".header");window.addEventListener("scroll",function(e){window.scrollY>200?A.classList.add("scrolled"):A.classList.remove("scrolled")})},t.render=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-container"},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(c.a,{to:"/",style:{textDecoration:"none"}},this.props.siteTitle)),r.a.createElement("div",{className:"header-links"},r.a.createElement(c.a,{to:"/projects/"},"Projects"),r.a.createElement(c.a,{to:"/art/"},"Art"))))},e}(r.a.Component));s.propTypes={siteTitle:o.a.string},s.defaultProps={siteTitle:""};var g=s,m=function(){return r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by Allen Welch")},d=(t(198),function(A){var e=A.children;return r.a.createElement(c.b,{query:"755544856",render:function(A){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{siteTitle:A.site.siteMetadata.title}),r.a.createElement("main",null,e),r.a.createElement(m,null))},data:a})});d.propTypes={children:o.a.node.isRequired};e.a=d},199:function(A,e,t){"use strict";var a=t(200),n=t(0),r=t.n(n),l=t(4),o=t.n(l),c=t(202),i=t.n(c);function p(A){var e=A.description,t=A.lang,n=A.meta,l=A.keywords,o=A.title,c=a.data.site,p=e||c.siteMetadata.description;return r.a.createElement(i.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:o},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:p}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(n)})}p.defaultProps={lang:"en",meta:[],keywords:[],description:""},p.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=p},200:function(A){A.exports={data:{site:{siteMetadata:{title:"Briana Brock",description:"Web portfolio for Briana Brock. ",author:"Allen Welch"}}}}},201:function(A,e,t){A.exports=t.p+"static/logo-0124936f7c907c06ba91360d66db3bef.png"},203:function(A,e,t){A.exports=t.p+"static/title1-fa703b18102f5fe78798d16352eb32f2.png"},204:function(A,e,t){A.exports=t.p+"static/title2-4afc7bc2ccd02a5c0203013533fa3fb1.png"},205:function(A,e,t){A.exports=t.p+"static/logo3-6a7c1e1e21babeda20f07482ccd69d48.png"},206:function(A,e){A.exports="data:image/png;base64,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"},232:function(A,e){A.exports="data:image/png;base64,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"},233:function(A,e,t){A.exports=t.p+"static/twitter-cf35c8d33baf57ddfff5bf4a635ae41d.png"},234:function(A,e){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-index-js-2629cbfa691e38d7f2a7.js.map