(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b686b7e"],{"708f":function(t,e,s){},a7e5:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"My-Address"},[s("div",{staticClass:"na-nav"},[s("van-nav-bar",{attrs:{title:"地址管理","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}})],1),s("div",{staticClass:"Empty"},[t.list.length<=0?s("van-empty",{attrs:{description:"你的地址空空如也",image:t.carimgurls}}):t._e()],1),s("div",{staticClass:"body-content"},[s("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认"},on:{add:t.newAddress,edit:t.editAddress},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)])},i=[],n=(s("d81d"),s("b0c0"),s("708f"),{data:function(){return{chosenAddressId:"",carimgurls:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598452249276&di=e957c4d2634a1ba31354ca96d7f3af03&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F38%2F92%2F03573c9ea4377a3.jpg",list:[]}},created:function(){this.getReceiveAddress()},methods:{back:function(){this.$router.go(-1)},getReceiveAddress:function(){var t=this,e=localStorage.getItem("RETK");e&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findAddress",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),2e4==e.data.code&&e.data.result.map((function(e){var s=e.province+e.city+e.county+e.addressDetail;t.list.push({id:e.aid,name:e.name,tel:e.tel,address:s,isDefault:Boolean(e.isDefault)})}))})).catch((function(e){t.$toast.clear()})))},newAddress:function(){this.$router.push({name:"NewAddress"})},editAddress:function(t){this.$router.push({name:"NewAddress",query:{aid:t.id}})}}}),d=n,r=s("2877"),c=Object(r["a"])(d,a,i,!1,null,null,null);e["default"]=c.exports},b0c0:function(t,e,s){var a=s("83ab"),i=s("9bf2").f,n=Function.prototype,d=n.toString,r=/^\s*function ([^ (]*)/,c="name";a&&!(c in n)&&i(n,c,{configurable:!0,get:function(){try{return d.call(this).match(r)[1]}catch(t){return""}}})},d81d:function(t,e,s){"use strict";var a=s("23e7"),i=s("b727").map,n=s("1dde"),d=s("ae40"),r=n("map"),c=d("map");a({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-5b686b7e.f60c6c26.js.map