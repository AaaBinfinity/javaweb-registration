(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50c19ff5"],{"0471":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAADU0lEQVQ4T02SW0xbdQCHf/9z6Tk9PW2ht1EKHReXEbqYLGPOaHRBcTEYXXQIOmP0wUXReddoxh5U4qXoFt6Ul+ncFnAXdTGSEJx4W1iGDGHjEmRDoLbrvaXt6ek5p+eYLVni7+l7+H1vH8H/FoudFOXZVJNssK2XJq48qYEw27Y3D/Kq/HNdS8M8cbav37qTW2AYYeHS2a/f//XshU4ndd3HKxLNed3QfRvLK/Nq5J62wJlte57tIaSqcMO5KRqGwUenjuw7FBzu28DG+V3JFQiyAZPLDK3GjTFPAEtzueLrbz30svv26qOEtGrEMP5kI1MTH3zc+0c3Z1Htb9pnkf0hBllgwVpZyEtxVL+9EwO5LZDW4snXXmnqD1PXgsSID3hHxpaHXnxHv/fDjjm0/jKOxAoFysKgrOpQSgoq/QwWX+jCS0EafQdMY491bt9Lcuf290yuqj37gi7z4UcvYuvINJLXNdBtXvAOAaXRNbCGgvSBPdjba0f/e0Rq3xX4jISGnvgpqXD3dwWb8WrHFezWp7E4moJjZxUs/gqoCzm4m0X8mK/HR0c8GPo0jQYHf54sDjwetTvh6TxxF0ozMzjaPgmkDOQTJfAuARwBzPU2PHWqAeXGTfj+jXnkwsUImf2iI+2zZSu+jN2HQwdD+IY9httaLAhxHESfDTWyhqXhGHYX2vF87ybs3zyBWE4MkeXB5+ZFc7wp7wig86AVpt/OoYWLwG8pwyKyiAkOTK1asNocwOBhFS4tgZJhmyT/fNu9LkfCVqeHwhwVwKnhAv5apnF3XRZ2poBj424Iooh3n5HQVruITLoMwV+bIYmZvpPrC+cfUSJ5TmQUVLTU40ZXXKmIcl5Fzl4FhjZAX/4bRY0Gv9FatDZuPU6K6fG6/MrI53J0+sH8QhpWvx02nx2lVBGUmQVXwUMKZSGlNDDVHlCC+ztbw5Zusr58uknNzH1V1tZ2aDkVKMmgTABoDrSuQIpkQXgevM8FXdMArvKi4N38NJH+HfAbeqanEL3WpacyVpYDpeVlEJqGLivQKQaUQBngBIPdUBPlKmtPUETsvxl56uon9uiFq3cqyfgDnK20g+c4L8PCSplMOhhzgnFWhaU89bthYkbrGu+4TKoflv4DDAFn2kNBLNMAAAAASUVORK5CYII="},"10fd":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));const s=(t,e,a)=>{var s=/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,16}$/;e.length>16?a(new Error("长度不能超过16个字符")):s.test(e)?a():a(new Error("仅支持大小写英文、中文和下划线_"))},i=(t,e,a)=>{e.length<6?a(new Error("密码长度不得小于6位")):a()},o=(t,e,a)=>{var s=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;s.test(e)?a():a(new Error("手机号格式错误"))}},"47cd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("Row",{staticStyle:{height:"100%"},attrs:{justify:"center",align:"middle"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitRegist.apply(null,arguments)}}},[s("div",{staticClass:"loginUp"},[s("div",{staticClass:"loginLeft"},[s("img",{attrs:{src:a("ceca"),alt:"",srcset:""}}),s("span",{staticClass:"line"}),s("span",{staticClass:"title"},[t._v("医院门诊预约挂号管理")])])]),s("div",{staticClass:"loginMiddle"},[s("div",{staticClass:"login-background"},[s("div",{staticClass:"loginBg"}),s("div",{staticClass:"loginRight"},[t.socialLogining?t._e():s("Row",{staticClass:"loginRow"},[s("Form",{ref:"usernameLoginForm",staticClass:"form",staticStyle:{width:"100%"},attrs:{model:t.form,rules:t.rules}},[s("FormItem",{staticClass:"loginInput",attrs:{prop:"username"}},[s("Row",[s("Input",{attrs:{size:"large",clearable:"",placeholder:"您的手机号",autocomplete:"off"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}},[s("Icon",{staticClass:"iconfont icon-yonghu",staticStyle:{"line-height":"50px"},attrs:{slot:"prefix"},slot:"prefix"})],1)],1)],1),s("FormItem",{staticClass:"loginInput",attrs:{prop:"nickname"}},[s("Row",[s("Input",{attrs:{size:"large",clearable:"",placeholder:"您的姓名",autocomplete:"off"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}},[s("Icon",{staticClass:"iconfont icon-yonghu",staticStyle:{"line-height":"50px"},attrs:{slot:"prefix"},slot:"prefix"})],1)],1)],1),s("FormItem",{attrs:{prop:"password"}},[s("Input",{staticStyle:{height:"50px","line-height":"50px"},attrs:{type:"password",size:"large",placeholder:"您的密码",password:"",autocomplete:"off"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[s("Icon",{staticClass:"iconfont icon-mima1",staticStyle:{"line-height":"50px"},attrs:{slot:"prefix"},slot:"prefix"})],1)],1),s("FormItem",{attrs:{prop:"code"}},[s("Row",{staticStyle:{"align-items":"center",overflow:"hidden"},attrs:{type:"flex",justify:"space-between"}},[s("Col",{attrs:{span:"16"}},[s("Input",{staticClass:"input-verify",staticStyle:{width:"90%"},attrs:{size:"large",clearable:"",placeholder:"请输入图片验证码",maxlength:10},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),s("Col",{attrs:{span:"8"}},[s("div",{staticClass:"code-image",staticStyle:{position:"relative","font-size":"12px",width:"100%"}},[t.loadingCaptcha?s("Spin",{attrs:{fix:""}}):t._e(),s("img",{staticStyle:{width:"110px",cursor:"pointer",display:"block"},attrs:{src:t.captchaImg,alt:"加载验证码失败"},on:{click:t.getCaptchaImg}})],1)])],1)],1)],1),s("Row",[s("Button",{staticClass:"login-btn",attrs:{type:"primary",size:"large",loading:t.loading,long:""},on:{click:t.submitRegist}},[t.loading?s("span",[t._v("正在注册")]):s("span",{staticStyle:{"letter-spacing":"20px","font-weight":"bold"}},[t._v("注册")])])],1),s("Row",[s("router-link",{attrs:{to:"/login"}},[s("Button",{staticClass:"login-btn",attrs:{type:"primary",size:"large",long:""}},[t._v("返回登录")])],1)],1)],1),s("p",{staticClass:"loginBottom"},[t._v(" ART YOUR DREAM ")]),t.socialLogining?s("div",[s("RectLoading")],1):t._e()],1)])]),s("div",{staticClass:"loginDown"},[s("p",{staticStyle:{"margin-top":"10px"}},[t._v("帮助 | 隐私 | 条款")]),s("p",[s("span",[t._v("Copyright © 2020 - 至今 XXX 版权所有")]),s("span",{staticStyle:{display:"inline-block",width:"4px",height:"6px"}}),s("a",{staticStyle:{color:"#848585"},attrs:{target:"_blank",href:"https://beian.miit.gov.cn"}},[t._v("ICP备案 浙ICP备XXXXXXXX号")]),s("a",{attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=XXXXXXXXXXXXXX号"}},[s("img",{staticStyle:{"margin-left":"6px"},attrs:{src:a("0471")}}),s("p",{staticStyle:{display:"inline-block",color:"#848585"}},[t._v("浙公网安备 XXXXXXXXXXXXXX号")])])])])])],1)},i=[],o=a("365c"),r=a("10fd"),n={components:{},data(){return{captchaId:"",captchaImg:"",error:!1,loading:!1,errorCode:"",form:{username:"",password:"",mobile:"",code:"",captchaId:""},rules:{username:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:r["a"],trigger:"blur"}],nickname:[{required:!0,message:"请输入您的姓名",trigger:"blur"}],password:[{required:!0,message:"请输入登陆密码",trigger:"blur"},{validator:r["b"],trigger:"blur"}]}}},methods:{getCaptchaImg(){this.loadingCaptcha=!0,Object(o["e"])().then(t=>{this.loadingCaptcha=!1,t.success&&(this.captchaId=t.result,this.captchaImg=o["a"]+this.captchaId)})},submitRegist(){this.form.captchaId=this.captchaId,this.form.mobile=this.form.username,this.$refs.usernameLoginForm.validate(t=>{if(t){if(!this.form.code)return void(this.errorCode="验证码不能为空");this.errorCode="",this.loading=!0,Object(o["i"])(this.form).then(t=>{this.loading=!1,t.success&&this.$router.push({name:"login"})})}})}},mounted(){this.getCaptchaImg()}},l=n,c=(a("9448"),a("2877")),p=Object(c["a"])(l,s,i,!1,null,null,null);e["default"]=p.exports},9448:function(t,e,a){"use strict";a("a677")},a677:function(t,e,a){},ceca:function(t,e,a){t.exports=a.p+"img/logo.7ce6a050.png"}}]);