(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d78ede8"],{"11f0":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return a})),s.d(e,"d",(function(){return c})),s.d(e,"c",(function(){return o})),s.d(e,"e",(function(){return r}));var i=s("7f80");const n=t=>Object(i["e"])("/myDoor/getMyDoorList",t),a=t=>Object(i["e"])("/myDoor/getMyDoorList6",t),c=t=>Object(i["e"])("/myDoor/setMyDoorList",t),o=t=>Object(i["b"])("/common/ip/info",t),r=t=>Object(i["e"])("/user/edit",t)},"15f2":function(t,e,s){},"77b8":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topDiv",style:{height:t.clientHeight}},[i("Row",{attrs:{gutter:20}},[i("div",{staticClass:"body"},[i("img",{staticClass:"title",attrs:{src:s("cf05"),alt:""}}),i("div",{staticClass:"awayMenu"},[i("div",{staticClass:"awayLeft"},[i("span",{staticClass:"manage2"},[t._v(" 欢迎 "),i("span",[t._v(t._s(t.name))])])])]),i("div",{staticClass:"bigTips"},[i("span",{staticStyle:{color:"rgba(255,255,255,0.8)"}},[t._v("常用模块")]),i("span",{staticStyle:{}})]),i("div",{staticClass:"buttonMenu"},[i("div",{staticClass:"addMenuBox",staticStyle:{"margin-left":"260px"}},t._l(t.addMenuTempList,(function(e,s){return i("div",{key:s,staticClass:"addMenu",on:{click:function(s){return t.selectItem(e)}}},[t._v(" "+t._s(e.title)+" ")])})),0)]),i("div",{staticClass:"bottomText",on:{click:t.toOwnMenu}},[t._v(' 添加"常用模块"? 点我 进入个人门户设置 ')])])])],1)},n=[],a=s("852e"),c=s.n(a),o=s("11f0"),r={name:"home",data(){return{name:"",showtime:"",showtime2:"",location:"公司内网",addMenuTempList:[],number1:0,number2:0,number3:0,number1List:[],number2List:[],number3List:[]}},methods:{init(){this.getMyDoorListFx();let t=JSON.parse(c.a.get("userInfo"));this.name=t.nickname,this.getNowTime(),Object(o["c"])().then(t=>{t.success&&(this.location=t.result)}),this.timer=setInterval(this.getNowTime,1e3)},selectItem(t){void 0!=t.name&&"null"!=t.name&&this.$router.push({name:t.name})},toDaiBanPage(){this.$Message.success("正在开发，敬请期待！")},toFaQiPage(){this.$Message.success("正在开发，敬请期待！")},toJingBanPage(){this.$Message.success("正在开发，敬请期待！")},toOwnMenu(){this.$router.push("/myHome")},getMyDoorListFx(){var t=this;Object(o["b"])().then(e=>{t.addMenuTempList=e.result})},getNowTime(){this.showtime=this.format(new Date,"yyyy年MM月dd日"),this.showtime2=this.format(new Date,"HH:mm:dd")}},mounted(){this.init(),this.clientHeight=""+document.documentElement.clientHeight;let t=this;window.onresize=function(){this.clientHeight=""+document.documentElement.clientHeight,t.$refs.page&&(t.$refs.page.style.minHeight=clientHeight-100+"px")}},watch:{clientHeight(){this.changeFixed(this.clientHeight)}}},u=r,m=(s("833b"),s("2877")),l=Object(m["a"])(u,i,n,!1,null,"65bd617b",null);e["default"]=l.exports},"833b":function(t,e,s){"use strict";s("15f2")}}]);