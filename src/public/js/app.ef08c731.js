(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"082fde3a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["f"])("Home"),a=Object(r["f"])(" | "),u=Object(r["f"])("About");function i(e,t,n,i,s,l){var f=Object(r["t"])("router-link"),p=Object(r["t"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["g"])(f,{to:"/"},{default:Object(r["z"])((function(){return[c]})),_:1}),a,Object(r["g"])(f,{to:"/about"},{default:Object(r["z"])((function(){return[u]})),_:1}),Object(r["e"])("button",{onClick:t[0]||(t[0]=function(){return e.cerrarSesion&&e.cerrarSesion.apply(e,arguments)})},"Cerrar Sesion")]),Object(r["g"])(p)],64)}var s=n("5530"),l=n("5502"),f={methods:Object(s["a"])({},Object(l["b"])(["obtenerToken","cerrarSesion"])),created:function(){this.obtenerToken()}},p=(n("7b86"),n("6b0d")),b=n.n(p);const d=b()(f,[["render",i]]);var m=d,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),j=n("cf05"),O=n.n(j),v={class:"home"},g=Object(r["e"])("img",{alt:"Vue logo",src:O.a},null,-1),y=Object(r["e"])("button",{type:"submit"},"Acceder",-1);function k(e,t,n,o,c,a){return Object(r["p"])(),Object(r["d"])("div",v,[g,Object(r["e"])("form",{onSubmit:t[2]||(t[2]=Object(r["B"])((function(t){return e.login(c.user)}),["prevent"]))},[Object(r["A"])(Object(r["e"])("input",{type:"text",placeholder:"Ingrese email","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.user.email=e})},null,512),[[r["x"],c.user.email]]),Object(r["A"])(Object(r["e"])("input",{type:"password",placeholder:"Ingrese contraseña","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.user.password=e})},null,512),[[r["x"],c.user.password]]),y],32)])}var w={data:function(){return{user:{email:"luis25@gamil.com",password:"123"}}},methods:Object(s["a"])({},Object(l["b"])(["login"]))};const S=b()(w,[["render",k]]);var x=S,T=n("1da1"),P=(n("96cf"),Object(l["a"])({state:{token:null},mutations:{setToken:function(e,t){e.token=t}},actions:{login:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,fetch("http://localhost:3000/api/auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return o=n.sent,n.next=7,o.json();case 7:c=n.sent,console.log(c.token),r("setToken",c.token),localStorage.setItem("token2",c.token),n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](1),console.log("error: ",n.t0);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))()},obtenerToken:function(e){var t=e.commit;localStorage.getItem("token")?t("setToken",localStorage.getItem("token")):t("setToken",null)},cerrarSesion:function(e){var t=e.commit;t("setToken",null),localStorage.removeItem("token2")}}})),A=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{requireAuth:!0}}],_=Object(h["a"])({history:Object(h["b"])("/"),routes:A});_.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requireAuth}));r&&null===P.state.token?n({name:"Home"}):n()}));var I=_;Object(r["c"])(m).use(P).use(I).mount("#app")},"7b86":function(e,t,n){"use strict";n("fcde")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},fcde:function(e,t,n){}});
//# sourceMappingURL=app.ef08c731.js.map