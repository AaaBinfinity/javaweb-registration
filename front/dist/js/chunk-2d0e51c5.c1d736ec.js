(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e51c5"],{"92a7":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[t._v("编辑")]),i("Form",{ref:"form",staticStyle:{position:"relative"},attrs:{model:t.form,"label-width":90,rules:t.formValidate}},[i("FormItem",{attrs:{label:"名称",prop:"name"}},[i("Input",{staticStyle:{width:"400px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("Form-item",{staticClass:"br"},[i("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),i("Button",{on:{click:t.handleReset}},[t._v("重置")])],1),t.loading?i("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1)},s=[],r={name:"edit",data(){return{loading:!0,submitLoading:!1,form:{id:"",name:""},formValidate:{name:[{required:!0,message:"不能为空",trigger:"blur"}]},backRoute:""}},methods:{init(){this.handleReset(),this.form.id=this.$route.query.id,this.backRoute=this.$route.query.backRoute,this.getData()},handleReset(){this.$refs.form.resetFields()},getData(){this.loading=!0,this.loading=!1,this.form.id,this.form.name="zwz"},handleSubmit(){this.$refs.form.validate(t=>{t&&(this.submitLoading=!1,this.$Message.success("编辑成功"),this.closeCurrentPage())})},closeCurrentPage(){this.$store.commit("removeTag","edit"),localStorage.pageOpenedList=JSON.stringify(this.$store.state.app.pageOpenedList),this.$router.push({name:this.backRoute})}},watch:{$route(t,e){"edit"==t.name&&(this.handleReset(),this.form.id=this.$route.query.id,this.getData())}},mounted(){this.init()}},o=r,n=i("2877"),l=Object(n["a"])(o,a,s,!1,null,null,null);e["default"]=l.exports}}]);