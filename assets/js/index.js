(()=>{var e={9432:(e,t,n)=>{"use strict";n.d(t,{gs:()=>v,h_:()=>E});var r=n(107),a=n.n(r),i=n(756),l=n.n(i),o=n(9526),c=(n(3868),n(9667)),s=function(){return c.D0?"http://localhost:7071":"https://henrikbeckerapi.azurewebsites.net"},u="".concat(s(),"/api"),m=function(){var e=l()(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(window.henrikBeckerResume);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=l()(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/ping"));case 2:return t=e.sent,e.next=5,t.text();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=l()(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/ip"));case 2:return t=e.sent,e.next=5,t.text();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=l()(a().mark((function e(t){var n,r,i,l,o,c,s,m;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.from,r=t.name,i=t.message,l=t.captcha,o=t.trace,e.next=3,d();case 3:return c=e.sent,e.next=6,fetch("".concat(u,"/contact"),{headers:{"Content-Type":"application/json","X-DEBUG":o},method:"POST",body:JSON.stringify({name:r,from:n,message:i,captcha:l,address:c})});case 6:if(!((s=e.sent).status>=400)){e.next=12;break}return e.next=10,s.json();case 10:throw m=e.sent,{message:Object.keys(m).map((function(e,t){return m[e].join("\n")})).join("\n")};case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={apiHost:s,getIp:d,getProfile:m,sendContactForm:f,ping:p},g=(0,o.createContext)(h),v=function(e){var t=e.children;return o.createElement(g.Provider,{value:h},t)},E=function(){return(0,o.useContext)(g)}},9667:(e,t,n)=>{"use strict";n.d(t,{D0:()=>r,ZR:()=>a});var r="localhost"===document.location.hostname,a=function(){return{recaptchaSiteKey:"6LdN5lcaAAAAAHJKO0vadb6Xd9NseBkzePlMSh7d",isLocal:r}}},4673:(e,t,n)=>{"use strict";n.d(t,{r:()=>r,X:()=>a});var r=function(e){return 1===e.length?e.toUpperCase():e?"".concat(e.substr(0,1).toUpperCase()).concat(e.substr(1)):e},a=function(e){return e&&e.map?e:e?[e]:[]}},3868:(e,t,n)=>{"use strict";n.d(t,{T7:()=>r,am:()=>S,Un:()=>C});var r,a=n(107),i=n.n(a),l=n(8239),o=n.n(l),c=n(756),s=n.n(c),u=n(6739),m=n.n(u),p=n(9526),d=n(9432),f=n(4673),h=n(8086);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e[e.Novice=0]="Novice",e[e.Intermediate=1]="Intermediate",e[e.Advanced=2]="Advanced",e[e.Expert=3]="Expert"}(r||(r={}));var E,y,b,w,k,x,Z={summary:[],languages:[],skills:{},projects:[],employers:[],certifications:[],interests:[],recommendations:[]},O=(0,p.createContext)(Z),S=function(e){var t=e.onError,n=void 0===t?function(){}:t,r=e.onLoading,a=void 0===r?function(){}:r,l=e.children,o=(0,d.h_)().getProfile,c=(0,p.useState)(),u=m()(c,2),f=u[0],g=u[1],E=function(){var e=s()(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,o();case 4:t=e.sent,g(v({},t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(e.t0);case 11:return e.prev=11,a(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return(0,p.useEffect)((function(){E()}),[]),f?p.createElement(O.Provider,{value:f},l):p.createElement(h.Splash,{loading:!0})},C=(E="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel pulvinar nunc, id ultricies arcu. Etiam consequat dolor efficitur lobortis iaculis. Duis consequat malesuada elit gravida efficitur. Integer feugiat id sapien sed porttitor. Morbi egestas feugiat libero. Praesent consequat diam odio, at ullamcorper tortor gravida eu. Morbi ultrices, lectus eu sollicitudin pretium, nunc orci accumsan tortor, sit amet efficitur sapien mauris id turpis. Maecenas luctus finibus lorem eget porta. Duis condimentum efficitur lectus viverra pulvinar. Pellentesque ac tortor posuere, interdum diam id, rutrum odio.",y=function(e){return"2".concat("".concat(e+1).padStart(3,"0"))},b=function(e){return(0,f.r)(E.split(" ").slice(2*e,2*e+2).join(" "))},w=function(e){return e>0?"Roma":""},k=function(e){return"Jan ".concat(y(e))},x=function(e){return"".concat(0===e?"nunc":1===e?"":"Dec ".concat(y(e)))},v(v({},Z),{},{skills:{Languages:[{name:"C#",level:"Expert"},{name:"JavaScript",level:"Advanced"},{name:"TypeScript",level:"Advanced"},{name:"VB.Net",level:"Intermediate"}],Frameworks:[{name:"Asp.Net Core",level:"Expert"},{name:"Asp.Net",level:"Expert"},{name:"React",level:"Advanced"},{name:"KnockoutJS",level:"Intermediate"}],Methods:[{name:"Agile Methods",level:"Advanced"},{name:"Test Driven Development",level:"Expert"},{name:"Continuous Integration",level:"Advanced"},{name:"Continuous Deployment",level:"Advanced"}],Tools:[{name:"Azure",level:"Intermediate"},{name:"Azure DevOps",level:"Intermediate"},{name:"Octopus Deploy",level:"Advanced"},{name:"TeamCity",level:"Intermediate"}]},summary:E.split(". ").slice(0,3),projects:Array(12).fill(0).map((function(e,t){return{name:b(t),role:"Servus",location:w(t),from:k(t),to:x(t),summary:E.split(".").slice(2).join(".")}})),employers:Array(12).fill(0).map((function(e,t){return{name:(0,f.r)(b(t)),role:"Caesar",organization:"Romanus",summary:E.split(".").slice(2).join("."),from:k(t),to:x(t)}})),interests:E.split(" ").slice(0,5),languages:[{name:"Swedish",proficiency:"Native"},{name:"English",proficiency:"Fluent"}],recommendations:[{name:"Marcus Tullius Cicero",link:"https://en.wikipedia.org/wiki/Cicero",text:"Vos iustus have ut homo amat hoc"},{name:"Julius Caesar",link:"https://en.wikipedia.org/wiki/Julius_Caesar",text:"Ipse est ita stupenda"},{name:"Henrikus Beckerus",link:"https://www.henrikbecker.net",text:"Vos iustus have ut pretium eius"}]}),function(){return(0,p.useContext)(O)})},3224:(e,t,n)=>{"use strict";n.d(t,{C:()=>u});var r=n(1936),a=n(3717),i=n(2248),l=n(3948),o=n(3783),c=n(2386),s=n(9526),u=function(e){var t=e.open,n=void 0!==t&&t,u=e.onClose;return s.createElement(r.Z,{open:n,onClose:u},s.createElement(a.Z,null,s.createElement(i.Z,{variant:"body2",component:"div"},s.createElement(i.Z,{variant:"h6"},"Technologies used on this site:"),s.createElement(i.Z,{variant:"caption"},"Frontend"),s.createElement("ul",{style:{margin:0,padding:0,listStyle:"none"}},s.createElement("li",null,"React"),s.createElement("li",null,"TypeScript"),s.createElement("li",null,"Material UI"),s.createElement("li",null,"Storybook"),s.createElement("li",null,"Font Awesome"),s.createElement("li",null,"CSS"),s.createElement("li",null,"HTML (obviously...)")),s.createElement(i.Z,{variant:"caption"},"Hosting"),s.createElement("ul",{style:{margin:0,padding:0,listStyle:"none"}},s.createElement("li",null,"GitHub Pages")),"The source code can be found at:",s.createElement("br",null),s.createElement(l.Z,{onClick:u,href:"https://github.com/handiman/handiman.github.io"},"https://github.com/handiman/handiman.github.io"))),s.createElement(o.Z,null,s.createElement(c.Z,{variant:"contained",color:"primary",onClick:u},"Close")))}},9967:(e,t,n)=>{"use strict";var r=n(909),a=n(562),i=n(9526);(0,a.Z)((function(e){return(0,r.Z)({root:{"@media print":{display:"none"},position:"fixed",zIndex:1,left:0,top:"calc(100vh - ".concat(e.spacing(2)+2*e.typography.fontSize,"px)"),width:"100%",backgroundColor:"transparent",textAlign:"center",paddingBottom:e.spacing(2),fontSize:2*e.typography.fontSize,"& > i":{cursor:"pointer",opacity:.5,"&:hover":{opacity:1}}},disabled:{"& > i":{cursor:"default",opacity:.5,"&:hover":{opacity:.5}}}})}))((function(e){var t=e.onClick,n=e.disabled,r=e.classes;return i.createElement("div",{className:n?"".concat(r.root," ").concat(r.disabled):r.root},i.createElement("i",{className:"fas fa-angle-down",onClick:t}))}))},2782:(e,t,n)=>{"use strict";n.d(t,{t:()=>O,m:()=>S});var r=n(107),a=n.n(r),i=n(756),l=n.n(i),o=n(6739),c=n.n(o),s=n(9526),u=n(6777),m=n(909),p=n(1936),d=n(8487),f=n(3717),h=n(397),g=n(3783),v=n(2386),E=n(2248),y=n(1459),b=n(8922),w=n(562),k=n(9432),x=(0,n(9667).ZR)().recaptchaSiteKey,Z=function(e){return(0,m.Z)({root:{"& > div":{display:"block",marginBottom:e.spacing(1)}}})},O=(0,w.Z)(Z)((function(e){var t=e.title,n=e.classes,r=(0,s.createRef)(),i=(0,k.h_)().sendContactForm,o=(0,s.useState)(null),m=c()(o,2),p=m[0],d=m[1],f=(0,s.useState)(""),g=c()(f,2),w=g[0],Z=g[1],O=(0,s.useState)(""),S=c()(O,2),C=S[0],P=S[1],N=(0,s.useState)(""),j=c()(N,2),I=j[0],A=j[1],T=(0,s.useState)(""),L=c()(T,2),D=L[0],z=L[1],B=(0,s.useState)(!1),F=c()(B,2),M=F[0],R=F[1],W=(0,s.useState)(""),G=c()(W,2),H=G[0],_=G[1],V=(0,s.useState)(!1),U=c()(V,2),J=(U[0],U[1]),X=function(){var e=l()(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),e.prev=1,_(""),J(!0),e.next=6,i({name:w,from:C,message:I,captcha:p,trace:D});case 6:J(!1),R(!0),window.setTimeout(Y,2e3),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),_(e.t0.message),J(!1),R(!1);case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){J(!1),R(!1),Z(""),P(""),A(""),_("")};return s.createElement("form",{onSubmit:X,className:n.root},t&&s.createElement(E.Z,{variant:"h4",gutterBottom:!0},t),s.createElement(y.Z,{container:!0,spacing:4},s.createElement(y.Z,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6,component:b.Z},s.createElement(h.Z,{variant:"outlined",size:"small",name:"name",placeholder:"Your name",value:w,onChange:function(e){return Z(e.target.value)}}),s.createElement(h.Z,{variant:"outlined",size:"small",name:"from",placeholder:"Your e-mail address",value:C,onChange:function(e){return P(e.target.value)}}),s.createElement(h.Z,{variant:"outlined",size:"small",name:"message",placeholder:"Message",rows:5,value:I,onChange:function(e){return A(e.target.value)},multiline:!0}),s.createElement("input",{name:"trace",type:"hidden",value:D,onChange:function(e){return z(e.target.value)}})),s.createElement(y.Z,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6,component:b.Z},s.createElement("div",{className:"MuiInputBase-root"},s.createElement(u.Z,{ref:r,sitekey:x,onChange:d,size:"compact"})))),s.createElement(b.Z,null,s.createElement("div",{className:"MuiInputBase-root"},s.createElement(v.Z,{type:"submit",variant:"contained",color:"primary"},"Send"))),M&&s.createElement("div",null,"Message sent"),H&&s.createElement("div",null,H))})),S=(0,w.Z)(Z)((function(e){var t=e.open,n=e.onClose,r=e.title,i=e.classes,o=(0,s.createRef)(),m=(0,k.h_)().sendContactForm,E=(0,s.useState)(null),y=c()(E,2),b=y[0],w=y[1],Z=(0,s.useState)(""),O=c()(Z,2),S=O[0],C=O[1],P=(0,s.useState)(""),N=c()(P,2),j=N[0],I=N[1],A=(0,s.useState)(""),T=c()(A,2),L=T[0],D=T[1],z=(0,s.useState)(""),B=c()(z,2),F=B[0],M=B[1],R=(0,s.useState)(!1),W=c()(R,2),G=W[0],H=W[1],_=(0,s.useState)(!1),V=c()(_,2),U=(V[0],V[1]),J=function(){var e=l()(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),e.prev=1,M(""),U(!0),e.next=6,m({name:S,from:j,message:L,captcha:b});case 6:H(!0),U(!1),window.setTimeout((function(){X(),H(!1)}),1500),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),M(e.t0.message),U(!1),H(!1);case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){U(!1),H(!1),C(""),I(""),D(""),M(""),n()};return s.createElement(p.Z,{open:t,onClose:X,maxWidth:"md",fullWidth:!0},r&&s.createElement(d.Z,null,r),s.createElement(f.Z,null,s.createElement("form",{onSubmit:J,className:i.root},s.createElement(h.Z,{fullWidth:!0,variant:"outlined",size:"small",name:"name",placeholder:"Your name",value:S,onChange:function(e){return C(e.target.value)}}),s.createElement(h.Z,{fullWidth:!0,variant:"outlined",size:"small",name:"from",placeholder:"Your e-mail address",value:j,onChange:function(e){return I(e.target.value)}}),s.createElement(h.Z,{fullWidth:!0,variant:"outlined",size:"small",name:"message",placeholder:"Message",rows:5,value:L,onChange:function(e){return D(e.target.value)},multiline:!0}),s.createElement(u.Z,{ref:o,sitekey:x,onChange:w}))),s.createElement(g.Z,null,G&&s.createElement("span",null,"Message sent"),F&&s.createElement("div",null,F),s.createElement(v.Z,{onClick:J,variant:"contained",color:"primary"},"Send"),s.createElement(v.Z,{onClick:n,variant:"contained",color:"secondary"},"Cancel")))}))},370:(e,t,n)=>{"use strict";n.d(t,{$:()=>f});var r=n(9526),a=n(909),i=n(3334),l=n(3948),o=n(562),c=n(527),s=n(1637),u=n(5944),m=n(4673),p=n(8086),d="small",f=(0,o.Z)((function(e){return(0,a.Z)({root:{color:u.wL.White,paddingTop:e.spacing(5),paddingBottom:e.spacing(5),"& a":{color:"inherit"},"& form, > div, & > ul > li":{marginBottom:e.spacing(2)},"& li":{cursor:"pointer",display:"inline-block",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}},delimited:{"& li":{borderRightWidth:1,borderRightStyle:"solid","&:last-child":{borderRightStyle:"none"}}}})}))((function(e){var t=e.children,n=e.classes,a=e.onSelect,o=void 0===a?function(){}:a;return r.createElement(i.Z,{component:"footer",textAlign:"center",className:n.root},r.createElement(p.t,{title:"Contact Me"}),r.createElement("ul",null,r.createElement("li",null,r.createElement(l.Z,{href:"https://www.linkedin.com/in/prettygoodprogrammer","aria-label":"LinkedIn"},r.createElement(c.Z,{fontSize:d}))),r.createElement("li",null,r.createElement(l.Z,{href:"https://github.com/handiman","aria-label":"GitHub"},r.createElement(s.Z,{fontSize:d})))),r.createElement("ul",{className:n.delimited},(0,m.X)(t).map((function(e,t){var n;return null!==(n=e.props)&&void 0!==n&&n.title?r.createElement("li",{"aria-label":e.props.title,key:t,onClick:function(){return o(t)}},e.props.title):null}))),r.createElement("div",{className:n.delimited},r.createElement("span",null,"My resumé is also available in these formats: "),r.createElement("ul",{style:{display:"inline"}},r.createElement("li",null,r.createElement(l.Z,{href:"/assets/henrik-becker.pdf"},"PDF")),r.createElement("li",null,r.createElement(l.Z,{href:"/assets/henrik-becker.docx"},"Word")),r.createElement("li",null,r.createElement(l.Z,{href:"/assets/henrik-becker.txt"},"Markdown")))),r.createElement("div",null,"Copyright © ",(new Date).getFullYear()," Henrik Becker"),r.createElement("div",null,"Thanks for visiting!"))}))},8872:(e,t,n)=>{"use strict";n.d(t,{v:()=>m});var r=n(9526),a=n(909),i=n(3948),l=n(562),o=n(63),c=n(527),s=n(1637),u="small",m=(0,l.Z)((function(e){return(0,a.Z)({root:{"@media print":{display:"none"},mixBlendMode:"exclusion",position:"fixed",left:e.spacing(1),top:0,height:"100vh",display:"table","& div":{display:"table-cell",verticalAlign:"middle"},"& ul":{"& > li":{cursor:"pointer",textAlign:"center","& a, i":{color:"inherit"}}}}})}))((function(e){var t=e.classes,n=e.showContactForm;return r.createElement("div",{className:t.root},r.createElement("div",null,r.createElement("ul",null,r.createElement("li",{onClick:n,"aria-label":"Contact form",title:"Contact me"},r.createElement(o.Z,{fontSize:u})),r.createElement("li",null,r.createElement(i.Z,{href:"https://www.linkedin.com/in/prettygoodprogrammer","aria-label":"LinkedIn",title:"Look me up on LinkedIn",color:"inherit"},r.createElement(c.Z,{fontSize:u}))),r.createElement("li",null,r.createElement(i.Z,{href:"https://github.com/handiman","aria-label":"GitHub",title:"Check out how I code",color:"inherit"},r.createElement(s.Z,{fontSize:u}))))))}))},7841:(e,t,n)=>{"use strict";n.d(t,{T:()=>c});var r=n(909),a=n(3334),i=n(562),l=n(9526),o=(0,r.Z)({root:{width:"100%",minHeight:"100vh"},centerVertically:{display:"table",width:"100%",minHeight:"100vh","& > div":{display:"table-cell",verticalAlign:"middle"}}}),c=(0,i.Z)(o)((function(e){var t=e.children,n=e.classes,r=e.centerVertically,i=void 0!==r&&r,o=e.component,c=void 0===o?"div":o;return l.createElement(a.Z,{component:c,className:n.root},l.createElement("div",{className:i?n.centerVertically:""},l.createElement("div",null,t)))}))},7044:(e,t,n)=>{"use strict";n.d(t,{i:()=>c});var r=n(9526),a=n(909),i=n(562),l=n(4673),o=n(5944),c=(0,i.Z)((function(e){return(0,a.Z)({root:{"@media print":{display:"none"},color:o.wL.Grey,position:"fixed",zIndex:1,right:e.spacing(1),top:0,height:"100vh",display:"table","& div":{padding:0,margin:0,display:"table-cell",verticalAlign:"middle"},"& li":{cursor:"pointer",textAlign:"center"}},selected:{color:o.wL.MediumGreen,fontWeight:"bold"}})}))((function(e){var t=e.visibleIndex,n=void 0===t?0:t,a=e.children,i=e.classes,o=e.onSelect,c=void 0===o?function(){}:o,s=(0,l.X)(a),u=function(e){return e===n};return s.length?r.createElement("div",{className:i.root},r.createElement("div",null,r.createElement("ul",null,s.map((function(e,t){var n,a;return r.createElement("li",{"aria-label":null===(n=e.props)||void 0===n?void 0:n.title,title:null===(a=e.props)||void 0===a?void 0:a.title,key:t,className:"".concat(u(t)?i.selected:null),onClick:function(){return c(t)}},"•")}))))):null}))},8547:(e,t,n)=>{"use strict";n.d(t,{I:()=>d});var r=n(8239),a=n.n(r),i=n(6739),l=n.n(i),o=n(9526),c=n(909),s=n(562),u=n(4673),m=n(5944);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=(0,s.Z)((function(e){return(0,c.Z)({root:{"@media print":{display:"none"}},table:{position:"fixed",zIndex:1,bottom:0,textAlign:"center",mixBlendMode:"exclusion",width:"100%","& > div > div":{margin:"auto",display:"table","& > div":{textAlign:"center",display:"table-cell",padding:e.spacing(1),cursor:"pointer","&:nth-of-type(2)":{cursor:"none"}}}},disabled:{cursor:"default"},nav:{position:"fixed",zIndex:1,bottom:0,textAlign:"center",width:"100%",display:"none",marginBottom:2.5*e.typography.fontSize,"& > div":{display:"table-cell","& > ul":{maxWidth:150,border:"1px solid ".concat(m.wL.LightGrey),backgroundColor:m.wL.White,color:m.wL.Black,margin:"auto"}}}})}))((function(e){var t=e.visibleIndex,n=void 0===t?0:t,r=e.children,i=e.classes,c=e.onNext,s=void 0===c?function(){}:c,m=e.onPrev,d=void 0===m?function(){}:m,f=(0,o.useState)(!0),h=l()(f,2),g=h[0],v=h[1],E=(0,o.useState)(!1),y=l()(E,2),b=y[0],w=y[1],k=(0,u.X)(r).map((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props)}));return(0,o.useEffect)((function(){v(n<=0),w(n>=k.length-1)}),[n]),k.length?o.createElement("div",{className:i.root},o.createElement("div",{className:i.table},o.createElement("div",null,o.createElement("div",null,o.createElement("div",{"aria-label":"Previous section",title:"Previous",onClick:d,className:g?i.disabled:""},o.createElement("i",{className:"fas fa-chevron-left"})),o.createElement("div",null,n+1,"/",k.length),o.createElement("div",{"aria-label":"Next section",title:"Next",onClick:s,className:b?i.disabled:""},o.createElement("i",{className:"fas fa-chevron-right"})))))):null}))},5357:()=>{},6972:(e,t,n)=>{"use strict";n.d(t,{h:()=>p});var r=n(8239),a=n.n(r),i=n(9526),l=n(909),o=n(1588),c=n(2248),s=n(562),u=n(5944),m=n(8086),p=(0,s.Z)((function(e){return(0,l.Z)({root:a()({"@media print":{backgroundColor:"transparent",color:"".concat(u.wL.Black," !important")}},e.breakpoints.down("sm"),{textAlign:"center"}),contact:{"@media print":{marginTop:e.spacing(2),paddingTop:e.spacing(2),borderTopWidth:1,borderTopStyle:"solid","& .print":{marginBottom:e.spacing(1)},"& .fas":{display:"inline-block",width:2*e.typography.fontSize}}},loading:{"@media print":{display:"none"},position:"fixed",display:"table",width:"100%",height:"100vh",zIndex:2,left:0,top:0,paddingTop:e.spacing(2),fontSize:"2rem","& > div":{display:"table-cell",width:"100%",height:"100vh",textAlign:"center",verticalAlign:"middle"}}})}))((function(e){var t=e.loading,n=e.classes;return i.createElement(m.T3,{centerVertically:!0},i.createElement(o.Z,{className:n.root},i.createElement("div",{className:"noPrint"},"Hi, I'm"),i.createElement(c.Z,{variant:"h1"},"Henrik Becker"),i.createElement(c.Z,{variant:"h4",component:"div"},i.createElement("span",{className:"noPrint"},"Freelancing "),i.createElement("span",{className:"print"},"Senior "),i.createElement("span",null,"Fullstack .Net Developer")),i.createElement("div",{className:n.contact},i.createElement("div",{className:"noPrint"},"You'll like me"),i.createElement("div",{className:"print"},i.createElement("i",{className:"fas fa-phone"})," +46 (0)73 422 83 43"),i.createElement("div",{className:"print"},i.createElement("i",{className:"fas fa-globe"}),"www.henrikbecker.net"))),t&&i.createElement("div",{className:n.loading},i.createElement("div",null,i.createElement("i",{className:"fas fa-circle-notch fa-spin"}))))}))},8086:(e,t,n)=>{"use strict";n.d(t,{CL:()=>r.C,t:()=>a.t,mP:()=>a.m,$_:()=>i.$,T3:()=>l.T,v2:()=>o.v,ir:()=>c.i,IC:()=>s.I,Splash:()=>m.h});var r=n(3224),a=(n(9967),n(2782)),i=n(370),l=n(7841),o=n(8872),c=n(7044),s=n(8547),u=n(5357);n.o(u,"Splash")&&n.d(t,{Splash:function(){return u.Splash}});var m=n(6972)},8521:(e,t,n)=>{"use strict";var r=n(9526),a=n(3961),i=n(6739),l=n.n(i),o=n(565),c=n(4935),s=n(2954),u=n(4503),m=n(5944),p=n(3868),d=n(9432),f=n(3334),h=function(){return r.createElement(f.Z,{id:"error"},r.createElement("div",null,r.createElement("h1",null,r.createElement("i",{className:"far fa-dizzy"})),"A JavaScript error occurred.",r.createElement("br",null),"Maybe this Henrik Becker guy isn't that great after all ",r.createElement("i",{className:"far fa-frown"})))},g=n(8239),v=n.n(g),E=n(909),y=n(1845),b=n(562),w=n(8086),k=n(2248),x=n(4788),Z=n.n(x);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=(0,b.Z)((function(e){return(0,E.Z)({root:{fontFamily:"Open Sans","& .summary, .skills":{marginTop:e.spacing(1)},"& ul li:before":{content:'"\\2713"',color:m.wL.DarkGreen,fontSize:"1rem",fontWeight:"bold",width:e.spacing(2),display:"inline-block"},"& h6":S(S({},e.typography.caption),{},{marginTop:e.spacing(1)})}})}))((function(e){var t=e.experience,n=e.classes,a=t.name,i=t.role,l=t.from,o=t.to,c=t.summary,s=t.skills;return r.createElement("div",{className:n.root},r.createElement(k.Z,{variant:"h4"},a,r.createElement(k.Z,{variant:"caption",component:"div"},i&&r.createElement("span",null,i," | "),r.createElement("span",null,l,o?" - ".concat(o):""))),c&&c.trim().length>0&&r.createElement(Z(),{className:"summary",source:c,allowDangerousHtml:!0}),s&&s.length>0&&r.createElement("div",{className:"skills"},r.createElement(k.Z,{variant:"caption",component:"div"},"Skills used"),s.map((function(e,t){return r.createElement("span",{key:t},e,t<s.length-1?", ":"")}))))})),P=n(1588),N=n(1459),j=(0,b.Z)((function(e){return(0,E.Z)({root:{"& > ul > li":{boxSizing:"border-box",marginTop:e.spacing(2),paddingRight:e.spacing(2)}}})}))((function(e){var t=e.title,n=e.experience,a=e.classes,i=e.layout,l=void 0===i?"grid":i;return r.createElement(P.Z,{className:a.root},t&&r.createElement("header",null,t),r.createElement(N.Z,{container:!0,component:"ul"},n.map((function(e,t){return r.createElement(N.Z,{item:!0,xs:12,sm:"list"===l?12:6,key:t,component:"li"},r.createElement(C,{experience:e}))}))))})),I=(0,b.Z)((function(){return(0,E.Z)({root:{"& > div":{marginTop:m.rS.spacing(10),"&:first-child":{marginTop:0}}}})}))((function(e){var t=e.title,n=e.classes,a=(0,p.Un)(),i=a.summary,l=a.skills,o=a.languages;return r.createElement("div",{className:n.root},r.createElement(G,{title:t,summary:i}),r.createElement(M,{title:"Skills & Expertise",skills:l}),r.createElement(A,{title:"Languages",languages:o}))})),A=(0,b.Z)((function(e){return(0,E.Z)({root:{"& li":{display:"table","& > div":{display:"table-cell","&:first-child":{width:e.spacing("Swedish".length+1)}}}}})}))((function(e){var t=e.title,n=e.classes,a=e.languages;return r.createElement(P.Z,{className:n.root},t&&r.createElement("header",null,t),r.createElement("ul",null,a.map((function(e,t){return r.createElement("li",{key:t},r.createElement("div",null,e.name),r.createElement("div",null,e.proficiency))}))))})),T=n(1936),L=n(3717),D=n(3783),z=n(2386),B=n(3948),F=(0,b.Z)((function(e){return(0,E.Z)({root:{"@media print":{display:"none"},"& > div > div":{paddingRight:e.spacing(2),paddingBottom:e.spacing(4)}},interests:{},fun:{"& li":{marginBottom:e.spacing(2)}},dinghy:{"& img":{width:"100%",boxSizing:"border-box",padding:e.spacing(2),border:"1px solid ".concat(m.wL.LightGrey)},"& figcaption":{marginTop:e.spacing(1),textAlign:"center"}}})}))((function(e){var t=e.classes,n=e.title,a=e.interests,i=(0,r.useState)(!1),o=l()(i,2),c=o[0],s=o[1],u=function(){return s(!1)},m=function(){var e="That's me sailing the dinghy. Photo taken shortly after the dinosaurs went extinct.";return r.createElement(T.Z,{open:c,onClose:u,className:t.dinghy},r.createElement(L.Z,null,r.createElement("img",{src:"/assets/img/dinghy.jpg",alt:e}),r.createElement("figcaption",null,e)),r.createElement(D.Z,null,r.createElement(z.Z,{onClick:u,color:"primary",variant:"contained"},"Close")))};return r.createElement(P.Z,{className:t.root},n&&r.createElement("header",null,n),r.createElement(N.Z,{container:!0},a&&r.createElement(N.Z,{item:!0,xs:12,sm:12,md:!0,lg:!0,className:t.interests},r.createElement(k.Z,{variant:"h4"},"Interests & Hobbies"),r.createElement("ul",null,a.map((function(e,t){return r.createElement("li",{key:t},e)})))),r.createElement(N.Z,{item:!0,xs:12,sm:12,md:!0,lg:!0,className:t.fun},r.createElement(k.Z,{variant:"h4"},"Fun facts"),r.createElement("ul",null,r.createElement("li",null,r.createElement("h6",null,"I designed my own sailing dinghy when I was 13"),r.createElement(m,null),r.createElement(B.Z,{style:{cursor:"pointer"},onClick:function(){return s(!0)}},"Yep, it's true"),". I come from a family of boat builders and my dad helped me design and build it in his spare time."),r.createElement("li",null,r.createElement("h6",null,"I used to dream of being a professional musician"),"Then I saw the light and became a developer but music is still very important to me."),r.createElement("li",null,r.createElement("h6",null,r.createElement("i",{className:"fas fa-shield-virus"})," I am Covid-19 resistant"),"Had it in november 2020 but survived ",r.createElement("i",{className:"far fa-smile-beam"})," ",r.createElement("i",{className:"fas fa-glass-cheers"}))))))})),M=function(e){var t=e.title,n=e.skills;return r.createElement(P.Z,null,t&&r.createElement("header",null,t),r.createElement(N.Z,{container:!0,spacing:4},Object.keys(n).map((function(e,t){return r.createElement(N.Z,{key:t,item:!0,xs:!0,sm:!0,md:!0,lg:!0},r.createElement(W,{category:e,skills:n[e]}))}))))},R=n(4176),W=(0,b.Z)((function(e){return(0,E.Z)({root:{"& .fas, .far":{fontSize:e.typography.fontSize-3,marginRight:e.spacing(.25)},"& .fas":{color:m.wL.LightGreen},"& .far":{color:m.wL.LightGrey}}})}))((function(e){var t=e.category,n=e.skills,a=e.classes,i="fas fa-circle",o=function(e){return e?p.T7[e]:p.T7.Novice},c=function(e,t){return o(t.level)>=e?i:"far fa-circle"},s=function(e){var t=e.skill,n=(0,r.useState)(!1),a=l()(n,2),i=a[0],o=a[1];return(0,R.Z)("screen")?r.createElement("div",null,r.createElement("span",{className:"noPrint",style:{cursor:"pointer"},title:"This site uses ".concat(t.name,". Click for more info."),onClick:function(){return o(!0)}},t.name,"*"),r.createElement(w.CL,{open:i,onClose:function(){return o(!1)}})):r.createElement("div",null,t.name)};return r.createElement("div",{className:a.root},r.createElement(k.Z,{variant:"caption"},t),r.createElement("ul",null,n.sort((function(e,t){var n=function(e,t){return e&&!t?-1:t&&!e?1:0}(e.featured,t.featured);return 0===n?function(e,t){var n=o(e),r=o(t);return n>r?-1:n<r?1:0}(e.level,t.level):n})).map((function(e,t){return r.createElement("li",{key:t,title:e.level?"".concat(e.name," - ").concat(e.level):""},"React"===e.name||"TypeScript"===e.name||"HTML & CSS"===e.name?r.createElement(s,{skill:e}):r.createElement("div",null,e.name),r.createElement("div",null,r.createElement("span",{className:i}),r.createElement("span",{className:i}),r.createElement("span",{className:"".concat(c(p.T7.Intermediate,e))}),r.createElement("span",{className:"".concat(c(p.T7.Advanced,e))}),r.createElement("span",{className:"".concat(c(p.T7.Expert,e))})))}))))})),G=function(e){var t=e.title,n=e.summary;return r.createElement(P.Z,null,t&&r.createElement("header",null,t),n.map?n.map((function(e,t){return r.createElement("div",{key:t},e)})):n)},H=(0,b.Z)((function(e){return(0,E.Z)({paper:v()({},e.breakpoints.down("md"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)})})}))((function(e){var t=e.profile,n=e.classes,a=e.showContactForm,i=void 0!==a&&a,l=t.projects,o=t.employers,c=t.interests;return r.createElement(m.HQ,{showContactForm:i},r.createElement(w.Splash,{title:"Top of Page"}),r.createElement(w.T3,{title:"Skills",component:y.Z,centerVertically:!0,className:n.paper},r.createElement(I,{title:"Profile"})),r.createElement(w.T3,{title:"Featured Projects",component:y.Z,centerVertically:!0,className:n.paper},r.createElement(j,{title:"Featured Projects",experience:l})),r.createElement(w.T3,{title:"Work Experience",component:y.Z,className:n.paper},r.createElement(j,{title:"Work Experience",experience:o,layout:"list"})),r.createElement(w.T3,{title:"Personal",component:y.Z,centerVertically:!0,className:n.paper},r.createElement(F,{title:"Personal",interests:c})))})),_=function(e){var t=e.showContactForm,n=(0,p.Un)();return r.createElement(H,{profile:n,showContactForm:t})},V=function(){var e=(0,u.c)().ErrorBoundary,t=(0,r.useState)(!1),n=l()(t,2),a=n[0],i=n[1],f=(0,m.yK)().root,g=(0,d.h_)().ping;return(0,r.useEffect)((function(){alert("Ping");var e=window.setInterval((function(){console.log("Ping"),g().then((function(e){return console.log(e)}))}),3e4);return function(){return window.clearInterval(e)}}),[]),r.createElement(o.UT,null,r.createElement(d.gs,null,r.createElement(s.Z,{theme:m.rS},r.createElement("main",{className:f},a?r.createElement(h,null):r.createElement(e,null,r.createElement(p.am,{onError:function(e){console.error(e),i(!0)}},r.createElement(c.rs,null,r.createElement(c.AW,{exact:!0,path:"/"},r.createElement(_,null)),r.createElement(c.AW,{exact:!0,path:"/cv"},r.createElement(_,null)),r.createElement(c.AW,{exact:!0,path:"/contact"},r.createElement(_,{showContactForm:!0})))))))))};a.render(r.createElement(V,null),document.getElementById("root"))},5944:(e,t,n)=>{"use strict";var r;n.d(t,{wL:()=>r,HQ:()=>u,rS:()=>C,yK:()=>Z}),function(e){e.Black="#010101",e.LightGrey="#AEAEAE",e.Grey="#484848",e.White="#FAFAFA",e.LightGreen="#A7D663",e.MediumGreen="#75A434",e.DarkGreen="#457500"}(r||(r={}));var a,i=n(6739),l=n.n(i),o=n(9526);!function(e){e[e.Left=37]="Left",e[e.Up=38]="Up",e[e.Right=39]="Right",e[e.Down=40]="Down"}(a||(a={}));var c=n(8086),s=n(4673),u=function(e){var t=e.children,n=e.showContactForm,r=void 0!==n&&n,i=(0,o.useState)(r),u=l()(i,2),m=u[0],p=u[1],d=(0,o.useState)(0),f=l()(d,2),h=f[0],g=f[1],v=(0,s.X)(t),E=new IntersectionObserver((function(e,t){e.forEach((function(e){e.intersectionRatio>.25&&g(parseInt(e.target.id.substring(e.target.id.indexOf("-")+1)))}))}),{root:null,threshold:[.25]}),y=function(e,t){var n=document.getElementById("section-".concat(t));n&&E.observe(n)},b=function(e,t){var n=document.getElementById("section-".concat(t));n&&E.unobserve(n)},w=function(e){var t;g(e),null===(t=document.getElementById("section-".concat(e)))||void 0===t||t.scrollIntoView({behavior:"smooth"})},k=function(){return w(Math.max(h-1,0))},x=function(){return w(Math.min(h+1,v.length-1))},Z=function(e){e.keyCode===a.Left?k():e.keyCode===a.Right&&x()};return(0,o.useEffect)((function(){return document.addEventListener("keydown",Z),v.forEach(y),function(){document.removeEventListener("keydown",Z),v.forEach(b)}}),[]),o.createElement(o.Fragment,null,v.map((function(e,t){return o.createElement("section",{key:"section-".concat(t),id:"section-".concat(t)},e)})),o.createElement(c.$_,{children:v,onSelect:w}),o.createElement(c.mP,{title:"Contact Me",open:m,onClose:function(){return p(!1)}}),o.createElement(c.v2,{showContactForm:function(){return p(!0)}}),v.length>1&&o.createElement(o.Fragment,null,o.createElement(c.ir,{onSelect:w,visibleIndex:h,children:v}),o.createElement(c.IC,{onPrev:k,onNext:x,visibleIndex:h,children:v})))},m=n(8239),p=n.n(m),d=n(909),f=n(1845),h=n(562);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){return(0,d.Z)({"& h1":v({},e.typography.h3),"& h2":v({},e.typography.h4),"& h4, .experience header":v({},e.typography.h5),"& aside header, .content header":v({},e.typography.h3)})},y=((0,h.Z)((function(e){return(0,d.Z)({root:v(v({},E(e)),{},{position:"relative",width:"100%","& > aside, .content":{boxSizing:"border-box",minHeight:"100vh",height:"100%",padding:e.spacing(4),"& .MuiContainer-root":{padding:0}},"& > aside":{position:"fixed",zIndex:1,width:420,"& > header":{marginBottom:e.spacing(4)}},"& > .content":{marginLeft:420,"& > section":{marginBottom:e.spacing(4)}}})})}))((function(e){var t=e.aside,n=e.children,r=e.classes;return o.createElement("div",{className:r.root},o.createElement("aside",null,t),o.createElement(f.Z,{className:"content"},n))})),n(2772));function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){return(0,d.Z)({"& h1, header":w(w({},e.typography.h1),{},{fontFamily:"Open Sans"}),"& h2, section header, aside header, .content header":w(w({},e.typography.h2),{},{fontFamily:"Open Sans"}),"& h3":w(w({},e.typography.h3),{},{fontFamily:"Open Sans"}),"& h4":w(w({},e.typography.h4),{},{fontFamily:"Open Sans"}),"& h5":w(w({},e.typography.h5),{},{fontFamily:"Open Sans"}),"& h6":w(w({},e.typography.h6),{},{fontFamily:"Open Sans"})})},x={"@media screen":{"& .print":{display:"none"}}},Z=(0,y.Z)((function(e){return(0,d.Z)({root:w(w(w(w(w({},x),(0,d.Z)({"& ul":{listStyle:"none",padding:0,margin:0}})),k(e)),(0,d.Z)({"@media print":{"& .noPrint, .buttonDown, footer":{display:"none"},"& a, a:link, a:visited, a:hover, a:active":{color:"".concat(r.Black," !important")}}})),{},p()({fontFamily:"Open Sans","& div, section, header, ul, li, nav, p":{boxSizing:"border-box"},"& .MuiPaper-root":{"&:last-child":{paddingBottom:e.spacing(5)}}},e.breakpoints.down("md"),{"& #section-0, .MuiPaper-root":{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}))})})),O=n(8632),S=n(7295),C=(0,O.Z)((0,S.Z)({palette:{type:"dark",text:{primary:r.White,secondary:r.Black},background:{default:r.Black,paper:r.White},primary:{main:r.LightGreen},secondary:{main:r.LightGreen},success:{main:r.LightGreen}},typography:{fontFamily:["'Open Sans'","sans-serif"].join(","),allVariants:{fontWeight:"lighter"},caption:{fontWeight:"bold"}},props:{MuiButton:{disableElevation:!0},MuiPaper:{square:!0,elevation:0}},overrides:{MuiPaper:{root:{color:r.Black}},MuiInputBase:{root:{color:"inherit",backgroundColor:"transparent"}},MuiOutlinedInput:{root:{"& fieldset":{borderColor:r.LightGrey},"&:hover fieldset":{borderColor:"".concat(r.LightGreen," !important")}}}}}))}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0},t=[[8521,216]],r=e=>{},a=(a,i)=>{for(var l,o,[c,s,u,m]=i,p=0,d=[];p<c.length;p++)o=c[p],n.o(e,o)&&e[o]&&d.push(e[o][0]),e[o]=0;for(l in s)n.o(s,l)&&(n.m[l]=s[l]);for(u&&u(n),a&&a(i);d.length;)d.shift()();return m&&t.push.apply(t,m),r()},i=self.webpackChunkhandiman_github_io=self.webpackChunkhandiman_github_io||[];function l(){for(var r,a=0;a<t.length;a++){for(var i=t[a],l=!0,o=1;o<i.length;o++){var c=i[o];0!==e[c]&&(l=!1)}l&&(t.splice(a--,1),r=n(n.s=i[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i));var o=n.x;n.x=()=>(n.x=o||(e=>{}),(r=l)())})(),n.x()})();
//# sourceMappingURL=index.js.map