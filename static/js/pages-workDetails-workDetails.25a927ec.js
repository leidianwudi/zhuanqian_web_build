(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-workDetails-workDetails"],{"05c4":function(e,t,i){"use strict";var a=i("ee27");i("4160"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("c0bb")),o=a(i("97ac")),s=a(i("56b3")),c=a(i("80ca")),r=a(i("4dc4")),l=a(i("501e")),d=a(i("dc08")),u={components:{tuiDatetime:c.default,tuiDrawer:r.default,tuiLoadmore:l.default,tuiNomore:d.default},data:function(){return{loadding:!1,pullUpOn:!0,rightDrawer:!1,userEn:[],showIncome:!0,incomeList:[],openTag:!1,openId:null,page:1,begTime:"",endTime:"",type:0,startYear:1980,endYear:2030,cancelColor:"#888",color:"#5677fc",setDateTime:"",num:null,uid:""}},onShow:function(){this.uid=s.default.getUid(),this.userEn=s.default.getMyInfo(),this.getTaskDetails()},methods:{onPullDownRefresh:function(){var e=this;setTimeout((function(){e.getTaskDetails(),e.pullUpOn=!0,e.loadding=!1,uni.stopPullDownRefresh(),uni.showToast({title:"刷新成功",icon:"none",duration:1e3})}),200)},closeDrawer:function(e){this.rightDrawer=!1},openDrawer:function(){this.rightDrawer=!0},show:function(e){switch(this.cancelColor="#888",this.color="#5677fc",this.setDateTime="",this.startYear=1980,this.endYear=2030,this.type=2,e){case 1:this.num=1;break;case 2:this.num=2;break;default:break}this.$refs.dateTime.show()},change:function(e){switch(this.num){case 1:this.begTime=e.result;break;case 2:this.endTime=e.result;break;default:break}},isShowIncome:function(){n.default.isEmpty(this.incomeList)?this.showIncome=!1:this.showIncome=!0},getTaskDetails:function(){var e=this;this.page=1;var t={uid:this.uid,state:1,page:this.page,count:10};if(!n.default.isEmpty(this.begTime)){var i=this.begTime+" 00:00:00";t.begFinishTime=i}if(!n.default.isEmpty(this.endTime)){var a=this.endTime+" 23:59:59";t.endFinishTime=a}o.default.getTaskDetails(t,(function(t){var i=o.default.getData(t).data;n.default.isEmpty(i)?e.showIncome=!1:(i.forEach((function(e){i.openTag=!1})),e.incomeList=i,e.showIncome=!0)}))},open:function(e){var t=this;this.openId==e?this.openId=-1:this.openId=e,this.incomeList.forEach((function(e){e.id==t.openId?e.openTag=!0:e.openTag=!1}))}},onReachBottom:function(){var e=this;this.page=this.page+1,o.default.getTaskDetails({uid:this.uid,state:1,page:this.page,count:10},(function(t){var i=o.default.getData(t).data;n.default.isEmpty(i)?(e.loadding=!1,e.pullUpOn=!1):i.forEach((function(t){e.loadding=!1,e.incomeList.push(t)}))}))}};t.default=u},1065:function(e,t,i){"use strict";i.r(t);var a=i("05c4"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},2119:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-416ab85c]{height:100%}.page[data-v-416ab85c]{height:100%}.income[data-v-416ab85c]{padding:%?20?% %?40?%;box-sizing:border-box;font-size:14px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;border-bottom:1px solid #eee}.lack_box[data-v-416ab85c]{width:100%;height:%?700?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.lack_test[data-v-416ab85c]{font-size:16px;margin-top:%?20?%;display:inline-block}.coin_query[data-v-416ab85c]{margin-top:%?40?%;background-color:#fcd030;font-size:16px;border-radius:%?40?%;width:%?400?%}.coin_query[data-v-416ab85c]::after{border:none}.incomeTime[data-v-416ab85c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.info_from[data-v-416ab85c]{margin-bottom:%?10?%;font-size:14px}.info_time[data-v-416ab85c]{font-size:12px;color:#959fa6}.incomeNum[data-v-416ab85c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.gold_img[data-v-416ab85c]{width:%?60?%;height:%?60?%}.num[data-v-416ab85c]{margin-right:%?20?%;font-size:16px}.open[data-v-416ab85c]{margin-left:%?10?%}.open_box[data-v-416ab85c]{margin-top:%?20?%;width:100%}.income_data[data-v-416ab85c]{color:#959fa6}.open_box>uni-view[data-v-416ab85c]{margin-top:%?10?%}.search_column[data-v-416ab85c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?20?%;font-size:16px;padding:0 %?40?% %?10?%;box-sizing:border-box;border-bottom:1px solid grey}.search_column uni-input[data-v-416ab85c]{text-align:center}.sea_btn uni-button[data-v-416ab85c]{font-size:12px;color:#fff;width:%?120?%}.d-container[data-v-416ab85c]{padding:%?80?%;font-size:15px}.search_time[data-v-416ab85c]{margin-top:%?40?%}.search_test[data-v-416ab85c]{margin-bottom:%?20?%}.d-container uni-input[data-v-416ab85c]{border-bottom:1px solid grey;color:grey}.search_btn[data-v-416ab85c]{margin-top:%?100?%}.search_btn uni-button[data-v-416ab85c]{font-size:14px;color:#fff;border-radius:%?40?%;padding:0!important}",""]),e.exports=t},"378c":function(e,t,i){"use strict";i.r(t);var a=i("b972"),n=i("1065");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("887c");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"416ab85c",null,!1,a["a"],s);t["default"]=r.exports},"887c":function(e,t,i){"use strict";var a=i("e487"),n=i.n(a);n.a},b972:function(e,t,i){"use strict";var a={tuiIcon:i("83bb").default,tuiDatetime:i("80ca").default,tuiDrawer:i("4dc4").default,tuiLoadmore:i("501e").default,tuiNomore:i("dc08").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"search_column"},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-input",{attrs:{type:"text",value:"",disabled:!0,placeholder:"开始时间"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openDrawer.apply(void 0,arguments)}},model:{value:e.begTime,callback:function(t){e.begTime=t},expression:"begTime"}}),i("v-uni-text",[e._v("至")]),i("v-uni-input",{attrs:{type:"text",value:"",disabled:!0,placeholder:"结束时间"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openDrawer.apply(void 0,arguments)}},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1),i("v-uni-view",{staticClass:"sea_btn btn_style"},[i("v-uni-button",{staticStyle:{padding:"0"},attrs:{type:"default","hover-class":"btn_hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getTaskDetails.apply(void 0,arguments)}}},[e._v("查询")])],1)],1),i("v-uni-view",{staticClass:"gold_info"},[e._l(e.incomeList,(function(t,a){return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.showIncome,expression:"showIncome"}],key:a,staticClass:"income",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.open(t.id)}}},[i("v-uni-view",{staticClass:"incomeTime"},[i("v-uni-text",{staticClass:"info_from"},[e._v(e._s(t.title))]),i("v-uni-text",{staticClass:"info_time"},[e._v(e._s(t.finishTime))])],1),i("v-uni-view",{staticClass:"incomeNum"},[i("v-uni-text",{staticClass:"num"},[e._v("+ "+e._s(t.award))]),i("v-uni-view",{staticClass:"gold_img"},[i("v-uni-image",{attrs:{src:"/static/img/gold2.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"open"},[i("tui-icon",{directives:[{name:"show",rawName:"v-show",value:!t.openTag,expression:"!item.openTag"}],attrs:{name:"arrowdown",size:20}}),i("tui-icon",{directives:[{name:"show",rawName:"v-show",value:t.openTag,expression:"item.openTag"}],attrs:{name:"arrowup",size:20}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.id==e.openId,expression:"item.id == openId"}],staticClass:"open_box"},[i("v-uni-view",{},[e._v("内容："),i("v-uni-text",{staticClass:"income_data"},[e._v(e._s(t.explain))])],1)],1)],1)})),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!e.showIncome,expression:"!showIncome"}],staticClass:"data_lack"},[i("v-uni-view",{staticClass:"lack_box"},[i("tui-icon",{attrs:{name:"nodata",size:120}}),i("v-uni-text",{staticClass:"lack_test"},[e._v("暂无数据")]),i("v-uni-button",{staticClass:"coin_query",attrs:{type:"default","hover-class":"btn_hover"}},[e._v("去获取金币")])],1)],1)],2),i("tui-datetime",{ref:"dateTime",staticStyle:{"z-index":"100000"},attrs:{type:e.type,startYear:e.startYear,endYear:e.endYear,cancelColor:e.cancelColor,color:e.color,setDateTime:e.setDateTime},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}}),i("tui-drawer",{attrs:{mode:"right",visible:e.rightDrawer},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.closeDrawer.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"d-container"},[i("v-uni-view",{staticClass:"search_time"},[i("v-uni-view",{staticClass:"search_test"},[i("v-uni-text",[e._v("开始时间")])],1),i("v-uni-view",{},[i("v-uni-input",{attrs:{type:"text",value:"",disabled:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.show(1)}},model:{value:e.begTime,callback:function(t){e.begTime=t},expression:"begTime"}})],1)],1),i("v-uni-view",{staticClass:"search_time"},[i("v-uni-view",{staticClass:"search_test"},[i("v-uni-text",[e._v("结束时间")])],1),i("v-uni-view",{},[i("v-uni-input",{attrs:{type:"text",value:"",disabled:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.show(2)}},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1)],1),i("v-uni-view",{staticClass:"search_btn btn_style"},[i("v-uni-button",{attrs:{type:"default","hover-class":"btn_hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeDrawer.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1),e.loadding?i("tui-loadmore",{attrs:{index:3,type:"primary"}}):e._e(),e.pullUpOn?e._e():i("tui-nomore")],1)},o=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}))},e487:function(e,t,i){var a=i("2119");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("b171dcc0",a,!0,{sourceMap:!1,shadowMode:!1})}}]);