(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e88a2"],{"8a69":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Button",{attrs:{countTime:t.countTime,loading:t.loading,type:t.type,size:t.size,ghost:t.ghost,disabled:t.disabled||t.clicked,icon:t.icon,shape:t.shape,long:t.long},on:{click:t.handleClick}},[t._v(t._s(t.buttonText))])],1)},o=[],s={name:"iconChoose",props:{text:{type:String,default:"提交"},autoCountDown:{type:Boolean,default:!0},countTime:{type:[Number,String],default:60},suffixText:{type:String,default:"后重试"},type:String,size:String,loading:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:String,shape:String,long:{type:Boolean,default:!1}},data(){return{buttonText:this.text,count:Number(this.countTime),clicked:!1}},methods:{init(){},handleClick(){this.autoCountDown&&(this.clicked=!0,this.countDown()),this.$emit("on-click",!0)},startCountDown(){this.clicked=!0,this.countDown()},countDown(){let t=this;if(0==this.count)return this.clicked=!1,this.count=this.countTime,void(this.buttonText=this.text);this.buttonText=this.count+" 秒"+this.suffixText,this.count--,setTimeout((function(){t.countDown()}),1e3)},setText(t){t!==this.buttonText&&(this.buttonText=t)}},watch:{text(t){this.setText(t)}},mounted(){this.init()}},u=s,c=n("2877"),l=Object(c["a"])(u,i,o,!1,null,null,null);e["default"]=l.exports}}]);