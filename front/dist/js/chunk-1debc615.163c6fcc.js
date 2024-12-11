(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1debc615"],{"1b62":function(e,t,r){},"64f3":function(e,t,r){"use strict";r("1b62")},"65b9":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search"},[r("Card",[r("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[r("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":0}},[r("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:e.searchForm,inline:"","label-width":0}},[r("Form-item",{attrs:{label:"",prop:"doctorName"}},[r("Input",{staticStyle:{width:"200px"},attrs:{type:"text",placeholder:"医生姓名",clearable:""},model:{value:e.searchForm.doctorName,callback:function(t){e.$set(e.searchForm,"doctorName",t)},expression:"searchForm.doctorName"}})],1),r("Form-item",{attrs:{label:"",prop:"date"}},[r("DatePicker",{staticStyle:{width:"200px"},attrs:{placeholder:"挂号日期",clearable:""},on:{"on-change":e.changeDate}})],1),r("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[r("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:e.handleSearch}},[e._v("搜索")]),r("Button",{attrs:{type:"warning",size:"small",icon:"md-refresh",ghost:""},on:{click:e.handleReset}},[e._v("重置")])],1),r("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"130px"}},[r("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"md-settings",size:"small",ghost:""},on:{click:function(t){e.showFilterPanelFlag=!e.showFilterPanelFlag}}},[e._v(" 列筛选")]),r("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"ios-help-circle-outline",size:"small",ghost:""},on:{click:function(t){e.modal1=!0}}},[e._v(" 使用教程")]),r("Modal",{attrs:{title:"使用教程"},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[r("p",[e._v("1.XXXXXXXXXXXXXXXXXXXXXXXX")]),r("p",[e._v("2.XXXXXXXXXXXXXXXXXXXXXXXX")]),r("p",[e._v("3.XXXXXXXXXXXXXXXXXXXXXXXX")])])],1)],1)],1)],1),r("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[r("transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[r("CheckboxGroup",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.mycolumns,(function(e){return r("div",{key:e.key},[r("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:e.title}})],1)})),0)],1)])],1),r("Row",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}]}),r("Row",[r("Table",{ref:"table",attrs:{loading:e.loading,height:e.tableHeight,border:"",stripe:"",size:"small",columns:e.columns,data:e.data,sortable:"custom","row-class-name":e.rowClassNmae},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect,"on-row-click":e.rowClick}})],1),r("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[r("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1),r("Modal",{attrs:{width:"950",title:"查询医生放号情况","footer-hide":""},model:{value:e.orderFindModal,callback:function(t){e.orderFindModal=t},expression:"orderFindModal"}},[r("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[r("Form",{ref:"orderSearchForm",attrs:{model:e.orderSearchForm,inline:"","label-width":0}},[r("Form-item",{ref:"searchForm",staticStyle:{display:"flex"},attrs:{model:e.searchForm,inline:"","label-width":0}},[r("Form-item",{attrs:{label:""}},[r("Select",{staticStyle:{width:"120px"},attrs:{placeholder:"放号时段"},model:{value:e.orderSearchForm.step,callback:function(t){e.$set(e.orderSearchForm,"step",t)},expression:"orderSearchForm.step"}},[r("Option",{attrs:{value:"0"}},[e._v("上午")]),r("Option",{attrs:{value:"1"}},[e._v("下午")])],1)],1),r("Form-item",{attrs:{label:""}},[r("DatePicker",{staticStyle:{width:"120px"},attrs:{placeholder:e.orderSearchForm.date,clearable:""},on:{"on-change":e.changeAddNumberDate2}})],1),r("Form-item",{staticClass:"br",staticStyle:{"margin-left":"10px"}},[r("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:""},on:{click:e.getDoctorSchedulingListFx}},[e._v("搜索")])],1)],1)],1)],1),r("Row",[r("Table",{attrs:{loading:e.loading,height:e.tableHeight,border:"",stripe:"",size:"small",columns:e.orderColumns,data:e.orderData}})],1),r("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[r("Page",{attrs:{current:e.orderSearchForm.pageNumber,total:e.orderTotal,"page-size":e.orderSearchForm.pageSize,"page-size-opts":[15,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changeOrderPage,"on-page-size-change":e.changeOrderPageSize}})],1)],1)],1)},o=[],s=r("7f80");const i=e=>Object(s["b"])("/hospitalSubject/getAll",e),l=e=>Object(s["b"])("/doctorScheduling/getByPage",e),n=e=>Object(s["e"])("/hospitalOrder/getMyOrderList",e),c=e=>Object(s["e"])("/hospitalOrder/payMoney",e),d=e=>Object(s["e"])("/hospitalOrder/noneOrder",e);var h={name:"single-window",components:{},data(){return{orderData:[],orderFindModal:!1,orderModal:!1,tableHeight:0,selected:["选择","序号","就诊人","医生姓名","挂号日期","时段","排号","挂号状态","挂号费用","支付情况"],modal1:!1,openSearch:!0,openTip:!0,formData:{},loading:!0,searchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},selectList:[],selectCount:0,selectRow:0,zwzSelecrDoctor:{id:""},orderColumns:[{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(e,t)=>e("span",t.index+(this.orderSearchForm.pageNumber-1)*this.orderSearchForm.pageSize+1)},{title:"医生姓名",key:"doctorName",minWidth:120,tooltip:!0,sortable:!1},{title:"就诊日期",key:"date",minWidth:120,tooltip:!0},{title:"就诊时段",key:"step",minWidth:120,tooltip:!0,render:(e,t)=>"0"==t.row.step?e("div",[e("span",{style:{color:"#3CB371"}},"上午")]):e("div",[e("span",{style:{color:"#ff0000"}},"下午")])},{title:"排号",key:"number",minWidth:120,tooltip:!0},{title:"预约情况",key:"orderFlag",minWidth:120,tooltip:!0,render:(e,t)=>0==t.row.orderFlag?e("div",[e("Button",{props:{type:"warning",size:"small",icon:"md-trash",ghost:!0},on:{click:()=>{this.addOrderFx(t.row)}}},"挂号")]):e("div",[e("span",{style:{color:"#ff0000"}},"已被预约")])}],columns:[{type:"selection",width:60,title:"选择",align:"center",fixed:"left"},{title:"序号",width:85,align:"center",fixed:"left",sortType:!0,render:(e,t)=>e("span",t.index+(this.searchForm.pageNumber-1)*this.searchForm.pageSize+1)},{title:"就诊人",key:"userName",minWidth:120,tooltip:!0,sortable:!1},{title:"医生姓名",key:"doctorName",minWidth:120,tooltip:!0,sortable:!1},{title:"挂号日期",key:"dateTime",minWidth:120,tooltip:!0,sortable:!1},{title:"时段",key:"step",minWidth:120,tooltip:!0,sortable:!1},{title:"排号",key:"number",minWidth:120,tooltip:!0,sortable:!1},{title:"挂号状态",key:"status",minWidth:120,tooltip:!0,sortable:!1,render:(e,t)=>0==t.row.status?e("div",[e("span",{style:{color:"#ff9900"}},"正常"),e("Button",{props:{type:"error",size:"small",ghost:!0},style:{marginLeft:"15px"},on:{click:()=>{this.noneOrderFx(t.row)}}},"取消点我")]):e("div",[e("span",{style:{color:"#ff0000"}},"已取消")])},{title:"挂号费用",key:"moneyData",minWidth:120,tooltip:!0,sortable:!1},{title:"支付情况",key:"moneyFlag",minWidth:120,tooltip:!0,sortable:!1,render:(e,t)=>0==t.row.moneyFlag?e("div",[e("Button",{props:{type:"error",size:"small",icon:"md-trash",ghost:!0},on:{click:()=>{this.payMoneyFx(t.row)}}},"付款")]):e("div",[e("span",{style:{color:"#ff0000"}},"已付款")])}],data:[],pageNumber:1,pageSize:10,total:0,orderTotal:0,showFilterPanelFlag:!1,zwzOrderDate:"",zwzOrderStep:"0",zwzOrderNumber:1,orderSearchForm:{pageNumber:1,pageSize:15,sort:"createTime",order:"asc",doctorId:"",date:"",step:""},subList:[]}},methods:{init(){this.getDataList(),this.getAllHospitalSubjectListFx()},noneOrderFx(e){var t=this;this.$Modal.confirm({title:"确认取消",content:"您确认要取消该医生的号?",loading:!0,onOk:()=>{d({orderId:e.id}).then(e=>{this.$Modal.remove(),e.success&&(t.getDataList(),this.$Message.success("取消成功"))})}})},payMoneyFx(e){var t=this;this.$Modal.confirm({title:"确认付款",content:"您确认要付款该医生的号?",loading:!0,onOk:()=>{c({orderId:e.id}).then(e=>{this.$Modal.remove(),e.success&&(t.getDataList(),this.$Message.success("付款成功"))})}})},changeDate(e){this.searchForm.dateTime=e},addOrderFx(e){var t=this;this.$Modal.confirm({title:"确认预约",content:"您确认要预约该医生的号?",loading:!0,onOk:()=>{addOrder({orderId:e.id}).then(e=>{this.$Modal.remove(),e.success&&(t.orderFindModal=!1,this.$Message.success("挂号成功"))})}})},getAllHospitalSubjectListFx(){var e=this;i().then(t=>{t.success&&(e.subList=t.result)})},changeAddNumberDate(e){this.zwzOrderDate=e},changeAddNumberDate2(e){this.orderSearchForm.date=e},getDoctorSchedulingListFxFx(e){this.orderSearchForm.doctorId=e.id,this.getDoctorSchedulingListFx(),this.orderFindModal=!0},getDoctorSchedulingListFx(){var e=this;l(e.orderSearchForm).then(t=>{t.success&&(e.orderData=t.result.records,e.orderTotal=t.result.total)})},submited(){this.getDataList()},changePage(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize(e){this.searchForm.pageSize=e,this.getDataList()},changeOrderPage(e){this.orderSearchForm.pageNumber=e,this.getDoctorSchedulingListFx()},changeOrderPageSize(e){this.orderSearchForm.pageSize=e,this.getDoctorSchedulingListFx()},rowClick(e,t){this.selectRow=e},rowClassNmae(e,t){return e.id==this.selectRow.id?"rowClassNmaeColor":""},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=15,this.getDataList()},handleReset(){this.searchForm={pageNumber:1,pageSize:15,sort:"createTime",order:"desc"},this.getDataList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"===e.order&&(this.searchForm.order=""),this.getDataList()},clearSelectAll(){this.$refs.table.selectAll(!1)},changeSelect(e){this.selectList=e,this.selectCount=e.length},getDataList(){this.loading=!0,n(this.searchForm).then(e=>{this.loading=!1,e.success&&(this.data=e.result.records,this.total=e.result.total)})}},mounted(){this.init(),this.tableHeight=Number(window.innerHeight-273),this.mycolumns=this.columns;let e=[];for(var t=0;t<this.selected.length;t++)for(var r=this.selected[t],a=0;a<this.columns.length;a++)this.columns[a].title==r&&e.push(this.columns[a]);this.columns=e},watch:{selected:function(e){let t=[];for(var r=0;r<this.mycolumns.length;r++){var a=this.mycolumns[r];(void 0==a.title||e.includes(a.title))&&t.push(a)}this.columns=t}}},m=h,p=(r("64f3"),r("2877")),g=Object(p["a"])(m,a,o,!1,null,null,null);t["default"]=g.exports}}]);