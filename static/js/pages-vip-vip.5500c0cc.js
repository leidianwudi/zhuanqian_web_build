(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vip-vip"],{"0c5c":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".lay_head[data-v-35c02304]{width:100%;height:%?380?%;background-image:-webkit-linear-gradient(left,#2aa4f9,#8b72f5);background-image:linear-gradient(90deg,#2aa4f9,#8b72f5);color:#fff;font-size:14px;padding:%?60?% %?40?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative}.head_info[data-v-35c02304]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-weight:700;font-size:17px}.head_img[data-v-35c02304]{width:%?120?%;height:%?120?%;margin-right:%?20?%}.vip[data-v-35c02304]{width:%?200?%;height:%?60?%;text-align:center;line-height:%?60?%;border-radius:%?40?% 0 0 %?40?%;background-color:#cfa55d;position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.func[data-v-35c02304]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?60?%}.lay_func[data-v-35c02304]{width:30%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.func_img[data-v-35c02304]{width:%?120?%;height:%?120?%}.func_test[data-v-35c02304]{font-size:15px}.test1[data-v-35c02304]{color:#febb35}.test2[data-v-35c02304]{color:#fa3b56}.test3[data-v-35c02304]{color:#3bd4f8}.lay_level[data-v-35c02304]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?40?%}.level_box[data-v-35c02304]{width:26%;height:%?400?%;padding:%?40?% %?20?%;border:1px solid #ccc;border-radius:%?30?%;text-align:center;font-size:%?24?%;margin-top:%?20?%}.level_box>uni-view[data-v-35c02304]{margin-top:%?10?%}.level_type[data-v-35c02304]{font-size:18px}.level_box2[data-v-35c02304]{color:#000}.level_money[data-v-35c02304]{color:#228aff;font-weight:700}.level_test[data-v-35c02304]{color:#a6a6ba}.lay_pay[data-v-35c02304]{width:60%;margin:%?40?% auto}.pay_info[data-v-35c02304]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pay_img[data-v-35c02304]{width:%?40?%;height:%?40?%;margin-right:%?40?%}.pay_success[data-v-35c02304]{width:%?32?%;height:%?32?%}.pay_btn[data-v-35c02304]{margin-top:%?40?%}.pay_btn>uni-button[data-v-35c02304]{padding:%?5?%;border-radius:%?40?%;box-sizing:border-box;font-size:14px;color:#fff}.click_box[data-v-35c02304]{background-color:#0a91fb;color:#fff}.click_box>uni-view[data-v-35c02304]{color:#fff}",""]),e.exports=t},"104a":function(e,t,i){var a=i("0c5c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("46e54f1c",a,!0,{sourceMap:!1,shadowMode:!1})},"14c8":function(e,t,i){"use strict";var a=i("ee27");i("4160"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("97ac")),s=a(i("56b3")),c={data:function(){return{uid:"",isShowPay:!1,levelName:"",workNum:null,payNum:0,userLevel:[],clickBox:null,myLevel:0,myLevelMoney:0,buyLevel:0}},onShow:function(){this.init(),this.uid=s.default.getUid(),this.getUserLevel()},methods:{init:function(){this.isShowPay=!1,this.levelName="",this.workNum=null,this.payNum=0,this.clickBox=null,this.myLevel=0,this.myLevelMoney=0,this.buyLevel=0},pay:function(){var e=this;uni.showModal({content:"确认支付购买会员等级?",success:function(t){t.confirm&&n.default.buyLevel({uid:e.uid,level:e.buyLevel},(function(t){var i=n.default.getCode(t);if(0==i)uni.showToast({title:"购买成功",icon:"none"}),setTimeout((function(){e.init(),e.getMyInfo()}),1e3);else{var a=n.default.getMsg(t);uni.showToast({title:a,icon:"none"})}}))}})},getUserLevel:function(){var e=this;n.default.getLevelAll((function(t){var i=n.default.getData(t).data;e.userLevel=i,e.getMyInfo()}))},getMyInfo:function(){var e=this;n.default.getUserByUid({uid:this.uid},(function(t){var i=n.default.getData(t);e.myLevel=i.level,s.default.setMyInfo(i),e.setUserLevel()}))},setUserLevel:function(){var e=this;this.userLevel.forEach((function(t,i){t.level==e.myLevel&&(e.workNum=t.receiveTaskSum,e.levelName=t.levelName,e.myLevelMoney=t.money)}))},toPower:function(){uni.navigateTo({url:"/pages/power/power"})},openPay:function(e){e.id<=this.myLevel||(this.payNum=e.money-this.myLevelMoney,this.isShowPay=!0,this.clickBox=e.id-1,this.buyLevel=e.level)}}};t.default=c},"729f":function(e,t,i){"use strict";i.r(t);var a=i("14c8"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},"840d":function(e,t,i){"use strict";i.r(t);var a=i("9123"),n=i("729f");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("ca0c");var c,l=i("f0c5"),o=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"35c02304",null,!1,a["a"],c);t["default"]=o.exports},9123:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"lay_head"},[i("v-uni-view",{staticClass:"head_info"},[i("v-uni-view",{staticClass:"head_img"},[i("v-uni-image",{attrs:{src:"/static/img/head.png",mode:""}})],1),i("v-uni-view",{},[e._v("会员等级："+e._s(e.levelName))])],1),i("v-uni-view",{},[e._v("每天可接："),i("v-uni-text",[e._v(e._s(e.workNum))]),e._v("(任务)")],1),i("v-uni-view",{},[e._v("会员到期时间：21-08-07 17:02:38")]),i("v-uni-view",{staticClass:"vip",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPower.apply(void 0,arguments)}}},[e._v("会员详情")])],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"func"},[i("v-uni-view",{staticClass:"lay_func"},[i("v-uni-view",{staticClass:"func_img"},[i("v-uni-image",{attrs:{src:"/static/img/v1.png",mode:""}})],1),i("v-uni-view",{staticClass:"func_test test1"},[e._v("佣金加成")])],1),i("v-uni-view",{staticClass:"lay_func"},[i("v-uni-view",{staticClass:"func_img"},[i("v-uni-image",{attrs:{src:"/static/img/v2.png",mode:""}})],1),i("v-uni-view",{staticClass:"func_test test2"},[e._v("任务增多")])],1),i("v-uni-view",{staticClass:"lay_func"},[i("v-uni-view",{staticClass:"func_img"},[i("v-uni-image",{attrs:{src:"/static/img/v3.png",mode:""}})],1),i("v-uni-view",{staticClass:"func_test test3"},[e._v("专属客服")])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.isShowPay,expression:"isShowPay"}],staticClass:"lay_pay"},[i("v-uni-view",{staticClass:"pay_info"},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticClass:"pay_img"},[i("v-uni-image",{attrs:{src:"/static/img/yq.png",mode:""}})],1),i("v-uni-view",{staticStyle:{"font-size":"12px"}},[e._v("余额支付")])],1),i("v-uni-view",{staticClass:"pay_success"},[i("v-uni-image",{attrs:{src:"/static/img/gou.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"pay_btn btn_style"},[i("v-uni-button",{attrs:{type:"default","hover-class":"btn_hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pay.apply(void 0,arguments)}}},[e._v("立即升级需支付"+e._s(e.payNum)+"元")])],1)],1),i("v-uni-view",{staticClass:"lay_level"},e._l(e.userLevel,(function(t,a){return i("v-uni-view",{key:a,staticClass:"level_box level_test",class:a==e.clickBox?"click_box":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.openPay(t)}}},[i("v-uni-view",{staticClass:"level_type"},[e._v(e._s(t.levelName))]),i("v-uni-view",{staticClass:"level_money"},[e._v(e._s(t.money)+"元")]),i("v-uni-view",{},[e._v("可接任务:"+e._s(t.receiveTaskSum)+"/天")]),i("v-uni-view",{},[e._v("提现次数:"+e._s(t.drawSum)+"/次")]),i("v-uni-view",{},[e._v("-")]),i("v-uni-view",{},[e._v("-")]),i("v-uni-view",{},[e._v("开通会员:365天")])],1)})),1)],1)],1)},s=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}))},ca0c:function(e,t,i){"use strict";var a=i("104a"),n=i.n(a);n.a}}]);