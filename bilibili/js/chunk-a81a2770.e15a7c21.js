(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a81a2770"],{"1dde":function(t,e,n){var o=n("d039"),a=n("b622"),r=n("2d00"),i=a("species");t.exports=function(t){return r>=51||!o((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2f14":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("99af"),n("fb6a");var o=n("d4ec"),a=n("bee2"),r=function(){function t(){Object(o["a"])(this,t)}return Object(a["a"])(t,[{key:"queryString",value:function(t){var e="";for(var n in t)e+="".concat(n,"=").concat(t[n],"&");return e.slice(0,-1)}}]),t}(),i=new r},"65f0":function(t,e,n){var o=n("861d"),a=n("e8b5"),r=n("b622"),i=r("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?o(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var o=n("c04e"),a=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var i=o(e);i in t?a.f(t,i,r(0,n)):t[i]=n}},"8b58":function(t,e,n){t.exports=n.p+"img/01small.3b923fb9.jpg"},"99af":function(t,e,n){"use strict";var o=n("23e7"),a=n("d039"),r=n("e8b5"),i=n("861d"),s=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),f=n("1dde"),d=n("b622"),v=n("2d00"),h=d("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",m=v>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},C=!m||!b;o({target:"Array",proto:!0,forced:C},{concat:function(t){var e,n,o,a,r,i=s(this),f=l(i,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(r=-1===e?i:arguments[e],y(r)){if(a=c(r.length),d+a>p)throw TypeError(g);for(n=0;n<a;n++,d++)n in r&&u(f,d,r[n])}else{if(d>=p)throw TypeError(g);u(f,d++,r)}return f.length=d,f}})},a46b:function(t,e,n){t.exports=n.p+"img/bilibili.54ca026e.png"},ae40:function(t,e,n){var o=n("83ab"),a=n("d039"),r=n("5135"),i=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(r(s,t))return s[t];e||(e={});var n=[][t],u=!!r(e,"ACCESSORS")&&e.ACCESSORS,l=r(e,0)?e[0]:c,f=r(e,1)?e[1]:void 0;return s[t]=!!n&&!a((function(){if(u&&!o)return!0;var t={length:-1};u?i(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,f)}))}},b0c0:function(t,e,n){var o=n("83ab"),a=n("9bf2").f,r=Function.prototype,i=r.toString,s=/^\s*function ([^ (]*)/,c="name";o&&!(c in r)&&a(r,c,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(t){return""}}})},bee2:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return a}))},c84b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"detail"},[o("div",{staticClass:"userinfo-nav"},[o("van-nav-bar",{on:{"click-left":t.goHome,"click-right":t.goUserinfo},scopedSlots:t._u([{key:"left",fn:function(){return[o("div",{staticClass:"logo-box"},[o("img",{staticClass:"auto-img",attrs:{src:n("a46b"),alt:""}})])]},proxy:!0},{key:"title",fn:function(){return[o("van-search",{attrs:{placeholder:"请输入搜索关键词"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]},proxy:!0},{key:"right",fn:function(){return[o("div",{staticClass:"head-portrait"},[t.userinfo.user_img?t._e():o("img",{staticClass:"auto-img",attrs:{src:n("8b58"),alt:""}}),o("img",{staticClass:"auto-img",attrs:{src:t.userinfo.user_img,alt:""}})])]},proxy:!0}])})],1),o("div",{staticClass:"userinfo-list"},[o("van-cell",{attrs:{title:"头像",value:"内容"}},[o("div",{staticClass:"avatar fr"},[o("img",{staticClass:"auto-img",attrs:{src:t.userinfo.user_img,alt:""}}),o("van-uploader",{staticClass:"uploader-box",attrs:{"after-read":t.uploadUserImg}})],1)]),o("van-cell",{attrs:{title:"昵称"},on:{click:function(e){t.show=!0}}},[o("div",{staticClass:"fr"},[t._v(t._s(t.userinfo.name))])]),o("van-cell",{attrs:{title:"账号"}},[o("div",{staticClass:"fr"},[t._v(t._s(t.userinfo.username))])]),o("van-cell",{attrs:{title:"性别"},on:{click:function(e){t.genderShow=!0}}},[o("div",{staticClass:"fr"},[t._v(t._s(1==t.userinfo.gender?"男":"女"))])]),o("div",{staticClass:"desc-box"},[o("div",{staticClass:"desc-title"},[t._v("个人签名")]),o("div",{staticClass:"textarea-box"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userinfo.user_desc,expression:"userinfo.user_desc"}],staticClass:"text-area",attrs:{onfocus:"this.placeholder=''",onblur:"this.placeholder='这家伙很懒,什么东西都没有留下'",placeholder:"这家伙很懒,什么东西都没有留下"},domProps:{value:t.userinfo.user_desc},on:{change:t.modifyUserInfo,input:function(e){e.target.composing||t.$set(t.userinfo,"user_desc",e.target.value)}}})])])],1),o("div",{staticClass:"detail-control"},[o("button",{staticClass:"logout detail-control-btn",on:{click:t.logout}},[t._v("退出登陆")]),o("button",{staticClass:"back-space detail-control-btn",on:{click:t.goUserinfo}},[t._v("返回空间")])]),o("van-dialog",{attrs:{title:"昵称","show-cancel-button":""},on:{confirm:t.comfirmClick,cancel:function(e){t.content=""}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("van-field",{attrs:{autofocus:""},model:{value:t.content,callback:function(e){t.content="string"===typeof e?e.trim():e},expression:"content"}})],1),o("van-action-sheet",{attrs:{"cancel-text":"取消",actions:t.actions},on:{select:t.onSelect},model:{value:t.genderShow,callback:function(e){t.genderShow=e},expression:"genderShow"}})],1)},a=[],r=(n("b0c0"),n("eadb"),n("2f14"),{data:function(){return{value:"",userinfo:"",show:!1,textshow:!1,content:"",sexContent:"",genderShow:!1,actions:[{name:"男",val:1},{name:"女",val:0}]}},created:function(){this.userInfoData()},methods:{goUserinfo:function(){this.$router.push({name:"UserInfo"})},goHome:function(){this.$router.push({name:"Home"})},userInfoData:function(){var t=this,e=localStorage.getItem("CSTK");e?(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"get",url:"/user/"+localStorage.getItem("id")}).then((function(e){t.$toast.clear(),200==e.status&&(t.userinfo=e.data[0])})).catch((function(e){t.$toast.clear()}))):this.$router.push({name:"Login"})},uploadUserImg:function(t){var e=this,n=localStorage.getItem("CSTK");if(n){var o=new FormData;o.append("file",t.file),this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios.post("/upload",o).then((function(t){e.$toast.clear(),200==t.status&&(e.userinfo.user_img=t.data.url,e.UserUpdate(),e.$toast.success("成功修改"))})).catch((function(t){e.$toast.clear()}))}},UserUpdate:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios.post("/update/"+localStorage.getItem("id"),this.userinfo).then((function(e){t.$toast.clear(),200==e.status&&t.$toast.success("成功修改")})).catch((function(e){t.$toast.clear()}))},comfirmClick:function(){this.userinfo.name=this.content,this.UserUpdate(),this.content=""},modifyUserInfo:function(){this.UserUpdate()},onSelect:function(t){this.userinfo.gender=t.val,this.UserUpdate(),this.genderShow=!1},logout:function(){var t=this;this.$dialog.confirm({title:"警告",message:"是否退出登陆"}).then((function(){t.$router.push({name:"Login"})})).catch((function(){}))}}}),i=r,s=n("2877"),c=Object(s["a"])(i,o,a,!1,null,null,null);e["default"]=c.exports},d4ec:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},e8b5:function(t,e,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},eadb:function(t,e,n){},fb6a:function(t,e,n){"use strict";var o=n("23e7"),a=n("861d"),r=n("e8b5"),i=n("23cb"),s=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),f=n("1dde"),d=n("ae40"),v=f("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),p=l("species"),g=[].slice,m=Math.max;o({target:"Array",proto:!0,forced:!v||!h},{slice:function(t,e){var n,o,l,f=c(this),d=s(f.length),v=i(t,d),h=i(void 0===e?d:e,d);if(r(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?a(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(f,v,h);for(o=new(void 0===n?Array:n)(m(h-v,0)),l=0;v<h;v++,l++)v in f&&u(o,l,f[v]);return o.length=l,o}})}}]);
//# sourceMappingURL=chunk-a81a2770.e15a7c21.js.map