(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),c=a(149),s=a(154),l=a(157),u=a(181),m=a.n(u),d=(a(184),a(151)),p=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.chartjs(),Object(d.a)()},a.chartjs=function(){var e=document.getElementById("life-chart");new m.a(e,{type:"doughnut",data:{labels:["this","that","the other","more stuff","other stuff"],datasets:[{label:"These things...",data:[12,19,3,14,7],backgroundColor:["rgba(0, 150, 0, .5)"]}]}})},a.render=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"home-page"},o.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),o.a.createElement("section",{className:"hero"}),o.a.createElement("section",{className:"content"},o.a.createElement("section",{className:"brief-text"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptate?")),o.a.createElement("section",{className:"intro-text"},o.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione, tempora nisi perspiciatis illum officia fugiat explicabo, voluptatum sunt corporis similique deserunt accusantium itaque sed rerum et quidem? Fuga delectus quaerat qui iure quae laudantium provident maxime nam dignissimos. Animi ",o.a.createElement(c.a,{className:"text-link",to:"/projects/"},"projects")," saepe, magnam consequatur repudiandae illum eligendi, est corrupti dolores rerum modi vitae similique sapiente quod non laudantium omnis ullam iste molestiae at tenetur mollitia veniam. Accusamus corporis eius alias architecto sunt, maiores doloribus maxime officiis, nihil ducimus eos suscipit doloremque cumque voluptatum inventore quidem mollitia labore necessitatibus cum culpa? Iste voluptate minus, quos dignissimos earum atque tempora obcaecati minima.")),o.a.createElement("section",{className:"followup-text"},o.a.createElement("div",{className:"chart"},o.a.createElement("canvas",{id:"life-chart",height:"400px",width:"400px"})),o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat eum recusandae molestias! Aspernatur, iure. Ipsa, vel quae placeat saepe magni eligendi ab ex quas, magnam officiis tempora recusandae dolorem exercitationem sapiente doloribus expedita omnis totam vero possimus labore sunt odio. Doloribus ",o.a.createElement(c.a,{className:"text-link",to:"/art/"},"art")," perspiciatis incidunt possimus facere rerum porro, asperiores, laboriosam laborum sint reiciendis dolore eius a praesentium, dolorem similique et quos vitae enim. Labore unde consectetur qui inventore ipsa assumenda cumque sed repellendus sunt tenetur! Quos obcaecati quaerat aut.")),o.a.createElement("section",{className:"skill-badges"},o.a.createElement("div",{className:"badge"},o.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""}),o.a.createElement("p",null,"Lorem ipsum dolor sit amet.")),o.a.createElement("div",{className:"badge"},o.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""}),o.a.createElement("p",null,"Lorem ipsum dolor sit amet.")),o.a.createElement("div",{className:"badge"},o.a.createElement("img",{src:"https://via.placeholder.com/150",alt:""}),o.a.createElement("p",null,"Lorem ipsum dolor sit amet."))),o.a.createElement("section",{className:"bottom-kickers"},o.a.createElement("div",{className:"kicker",id:"kicker1"},o.a.createElement("img",{src:"https://via.placeholder.com/300",alt:""}),o.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, quo?")),o.a.createElement("div",{className:"kicker",id:"kicker2"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, a."),o.a.createElement("img",{src:"https://via.placeholder.com/300C/O",alt:""}))))))},t}(o.a.Component);t.default=p},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(150);var l=n.a.createContext({}),u=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var r;e.exports=(r=a(153))&&r.default||r},151:function(e,t,a){"use strict";t.a=function(){console.log("testing");var e,t,a=window.innerHeight,r=document.querySelector(".header");console.log(r),document.querySelector(".home-page")&&(e=document.querySelectorAll(".text-link"),t=document.querySelectorAll(".kicker"),console.log(t),console.log(e)),document.querySelector(".projects-page")&&document.querySelectorAll(".project-tile").forEach(function(e){e.addEventListener("click",function(){var e=document.querySelector('.project[data-project="'+this.dataset.project+'"]');console.log(e),e.scrollIntoView({block:"center",behavior:"smooth"})})});window.addEventListener("scroll",function(e){var t=window.scrollY+.66*a,r=window.scrollY+a/2,n=window.scrollY+a;window.scrollY>200?document.querySelector(".header").classList.add("scrolled"):document.querySelector(".header").classList.remove("scrolled"),document.querySelector(".home-page")&&(document.querySelectorAll(".text-link").forEach(function(e,t){r>=e.offsetTop?e.classList.add("scrolled"):e.classList.remove("scrolled")}),document.querySelectorAll(".kicker").forEach(function(e,a){t>=e.offsetTop?e.classList.add("scrolled"):e.classList.remove("scrolled")})),document.querySelector(".art-page")&&document.querySelectorAll("img").forEach(function(e,t){e.offsetTop<n?e.classList.add("active"):e.classList.remove("active")})})}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),c=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,a){"use strict";var r=a(152),n=a(0),i=a.n(n),o=a(4),c=a.n(o),s=a(149),l=a(7),u=a.n(l),m=(a(155),a(151)),d=function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){Object(m.a)()},a.render=function(){return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"header-container"},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{textDecoration:"none"}},this.props.siteTitle)),i.a.createElement("div",{className:"header-links"},i.a.createElement(s.a,{to:"/projects/"},"Projects"),i.a.createElement(s.a,{to:"/art/"},"Art"))))},t}(i.a.Component);d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var p=d,f=function(){return i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by Allen Welch")},h=(a(156),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(f,null))},data:r})});h.propTypes={children:c.a.node.isRequired};t.a=h},157:function(e,t,a){"use strict";var r=a(158),n=a(0),i=a.n(n),o=a(4),c=a.n(o),s=a(159),l=a.n(s);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,c=e.title,s=r.data.site,u=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Briana Brock",description:"Web portfolio for Briana Brock. ",author:"Allen Welch"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-4595267f572f9574ca5a.js.map