(function(e){function n(n){for(var a,u,o=n[0],f=n[1],d=n[2],i=0,h=[];i<o.length;i++)u=o[i],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&h.push(c[u][0]),c[u]=0;for(a in f)Object.prototype.hasOwnProperty.call(f,a)&&(e[a]=f[a]);s&&s(n);while(h.length)h.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,u=1;u<t.length;u++){var o=t[u];0!==c[o]&&(a=!1)}a&&(r.splice(n--,1),e=f(f.s=t[0]))}return e}var a={},u={app:0},c={app:0},r=[];function o(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-00ed6a6c":"5a779665","chunk-15f76bae":"26fd378f","chunk-2514f670":"152de658","chunk-2b901510":"ca9e7574","chunk-351940dc":"2fe9c79d","chunk-5b686b7e":"f60c6c26","chunk-68e17aa4":"def509d9","chunk-6f242b26":"a83eb85d","chunk-77ce4655":"5748a66a","chunk-7d0b0db5":"b1a6d541","chunk-929ac94a":"67f3687c","chunk-b33b347a":"39928b8c","chunk-b53248a4":"3a58ad69","chunk-f1046dfa":"249848c4","chunk-fb361e76":"6827f922"}[e]+".js"}function f(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-00ed6a6c":1,"chunk-15f76bae":1,"chunk-2514f670":1,"chunk-2b901510":1,"chunk-351940dc":1,"chunk-5b686b7e":1,"chunk-68e17aa4":1,"chunk-77ce4655":1,"chunk-7d0b0db5":1,"chunk-929ac94a":1,"chunk-b33b347a":1,"chunk-b53248a4":1,"chunk-f1046dfa":1,"chunk-fb361e76":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-00ed6a6c":"7091ac53","chunk-15f76bae":"74bb784d","chunk-2514f670":"d5779b2b","chunk-2b901510":"d47c4bf9","chunk-351940dc":"560f1623","chunk-5b686b7e":"603bb69a","chunk-68e17aa4":"ed4af45d","chunk-6f242b26":"31d6cfe0","chunk-77ce4655":"43a59c49","chunk-7d0b0db5":"ce55d7a0","chunk-929ac94a":"085537b1","chunk-b33b347a":"7ca2aa58","chunk-b53248a4":"68de0791","chunk-f1046dfa":"5458c90e","chunk-fb361e76":"5127440c"}[e]+".css",c=f.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var d=r[o],i=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(i===a||i===c))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){d=h[o],i=d.getAttribute("data-href");if(i===a||i===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var a=n&&n.target&&n.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete u[e],s.parentNode.removeChild(s),t(r)},s.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(s)})).then((function(){u[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=r);var d,i=document.createElement("script");i.charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.src=o(e);var h=new Error;d=function(n){i.onerror=i.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+u+")",h.name="ChunkLoadError",h.type=a,h.request=u,t[1](h)}c[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:i})}),12e4);i.onerror=i.onload=d,document.head.appendChild(i)}return Promise.all(n)},f.m=e,f.c=a,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)f.d(t,a,function(n){return e[n]}.bind(null,a));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var s=i;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("fb6a"),t("d3b7"),t("4d63"),t("ac1f"),t("25f0"),t("5319"),t("285a");var a=t("d336"),u=(t("48cc"),t("c364")),c=(t("f820"),t("4959")),r=(t("ef80"),t("ae53")),o=(t("0fd0"),t("fd40")),f=(t("4fbc"),t("ca00")),d=(t("23b9"),t("8571")),i=(t("c454"),t("5ff7")),h=(t("f2d4"),t("95a4")),s=(t("ead7"),t("2496")),l=(t("53c9"),t("fad5")),b=(t("a6ac"),t("8bbd")),p=(t("748b"),t("0860")),m=(t("1428"),t("b1f2")),k=(t("5c57"),t("3975")),g=(t("5f9d"),t("3403")),v=(t("b3bb"),t("c6eb")),y=(t("ca47"),t("a75c")),w=(t("c64f"),t("c614")),S=(t("5d57"),t("b217")),O=(t("ec5b"),t("76b3")),j=(t("1630"),t("cc15")),x=(t("6176"),t("871e")),E=(t("7276"),t("b39d")),C=(t("0299"),t("5344")),M=(t("6abf"),t("f22a")),P=(t("3fa3"),t("24df")),_=(t("541c"),t("0c54")),A=(t("041f"),t("04ed")),N=(t("ca8b"),t("d0d3")),L=(t("4387"),t("f8c9")),T=(t("05a0"),t("3dea")),D=(t("21a5"),t("063f")),B=(t("f0ab"),t("4f4a")),F=(t("158f"),t("f047")),R=(t("35d4"),t("2aae")),$=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),H=t("82ae"),U=t.n(H),q=t("e7aa"),J=t.n(q),V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:e.SkipSwitchName}},[t("router-view")],1)],1)},G=[],I={data:function(){return{SkipSwitchName:""}}},K=I,Q=(t("7c55"),t("2877")),W=Object(Q["a"])(K,V,G,!1,null,null,null),X=W.exports,Y=t("8c4f"),Z=[{path:"/login",name:"Login",component:function(){return t.e("chunk-7d0b0db5").then(t.bind(null,"a55b"))}},{path:"/main",name:"Main",component:function(){return t.e("chunk-6f242b26").then(t.bind(null,"cd56"))},children:[{path:"home",name:"Home",component:function(){return t.e("chunk-b33b347a").then(t.bind(null,"4e26"))}},{path:"menu",name:"Menu",component:function(){return t.e("chunk-fb361e76").then(t.bind(null,"4333"))}},{path:"shopbag",name:"Shopbag",component:function(){return t.e("chunk-f1046dfa").then(t.bind(null,"0763"))}},{path:"my",name:"My",component:function(){return t.e("chunk-b53248a4").then(t.bind(null,"b593"))}}]},{path:"/order",name:"Order",component:function(){return t.e("chunk-2514f670").then(t.bind(null,"cf2a"))}},{path:"/detail",name:"Detail",component:function(){return t.e("chunk-00ed6a6c").then(t.bind(null,"c84b"))}},{path:"/newaddress",name:"NewAddress",component:function(){return t.e("chunk-929ac94a").then(t.bind(null,"5f65"))}},{path:"/myaddress",name:"MyAddress",component:function(){return t.e("chunk-5b686b7e").then(t.bind(null,"a7e5"))}},{path:"/acount",name:"Acount",component:function(){return t.e("chunk-68e17aa4").then(t.bind(null,"d53c"))}},{path:"/checkorder",name:"CheckOrder",component:function(){return t.e("chunk-77ce4655").then(t.bind(null,"a92a"))}},{path:"/like",name:"Like",component:function(){return t.e("chunk-2b901510").then(t.bind(null,"7c2a"))}},{path:"/secure",name:"Secure",component:function(){return t.e("chunk-15f76bae").then(t.bind(null,"305b"))}},{path:"/forgot",name:"Forgot",component:function(){return t.e("chunk-351940dc").then(t.bind(null,"0fdf"))}},{path:"*",redirect:{name:"Login"}}];$["a"].use(Y["a"]);var z=new Y["a"]({routes:Z}),ee=z;t("44ce");$["a"].use(a["a"]).use(u["a"]).use(c["a"]).use(r["a"]).use(o["a"]).use(f["a"]).use(d["a"]).use(i["a"]).use(h["a"]).use(s["a"]).use(l["a"]).use(b["a"]).use(p["a"]).use(m["a"]).use(k["a"]).use(g["a"]).use(v["a"]).use(y["a"]).use(w["a"]).use(S["a"]).use(O["a"]).use(j["a"]).use(x["a"]).use(E["a"]).use(C["a"]).use(M["a"]).use(P["a"]).use(_["a"]).use(A["a"]).use(N["a"]).use(L["a"]).use(T["a"]).use(D["a"]).use(B["a"]).use(F["a"]).use(R["a"]),$["a"].use(J.a,U.a),U.a.defaults.baseURL="http://www.kangliuyong.com:10002",U.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",$["a"].config.productionTip=!1,$["a"].prototype.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",$["a"].filter("formatDate",(function(e,n){var t=new Date(e),a=t.getFullYear();if(/(y+)/.test(n)){var u=RegExp.$1;n=n.replace(u,a.toString().slice(4-u.length))}var c={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};for(var r in c){var o=new RegExp("(".concat(r,"+)"));if(o.test(n)){var f=RegExp.$1,d=c[r]>=10?c[r]:2==f.length?"0"+c[r]:c[r];n=n.replace(f,d)}}return n})),new $["a"]({router:ee,render:function(e){return e(X)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";var a=t("2395"),u=t.n(a);u.a}});
//# sourceMappingURL=app.3c58e93d.js.map