(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-setting-setting"],{"1ec8":function(t,e,i){var s=i("f4ba");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("a96e27dc",s,!0,{sourceMap:!1,shadowMode:!1})},2724:function(t,e,i){"use strict";var s=i("ee27");i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("56b3")),a=s(i("97ac")),u=s(i("c0bb")),l={data:function(){return{userEn:[],uid:"",loginType:null,wxId:"",userName:"",levelName:"新人",levelList:[]}},onShow:function(){var t=this;this.uid=n.default.getUid(),this.loginType=n.default.getLoginType(),this.userEn=n.default.getMyInfo(),this.levelList=n.default.getLevelList(),a.default.getUserByUid({uid:this.uid},(function(e){var i=a.default.getData(e);t.userEn=i,n.default.setMyInfo(t.userEn),t.getName()})),this.getMyLevelName()},methods:{getMyLevelName:function(){var t=this;this.levelList.forEach((function(e,i){e.id==t.userEn.level&&(t.levelName=e.levelName)}))},getName:function(){0==this.loginType?this.userName=this.uid:u.default.isEmpty(this.userEn.wxId)?this.userName=this.userEn.account:this.userName=this.userEn.wxId},revise:function(){uni.previewImage({urls:[this.userEn.headUrl]})},toBank:function(){uni.navigateTo({url:"/pages/my/setting/bank/bank"})},toUpdInfo:function(t,e,i){uni.navigateTo({url:"/pages/my/setting/updMyInfo/updMyInfo?type="+t+"&title="+e+"&value="+i})},toUpdMyImg:function(){uni.navigateTo({url:"/pages/my/setting/updMyImg/updMyImg"})}}};e.default=l},"691e":function(t,e,i){"use strict";var s={tuiIcon:i("83bb").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:" func"},[i("v-uni-button",{staticClass:"setting",attrs:{"hover-class":"setting_hover",type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toUpdMyImg.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"func_left"},[i("v-uni-text",{staticClass:"func_test"},[t._v("头像")])],1),i("v-uni-view",{staticClass:"func_right"},[i("v-uni-view",{staticClass:"header_img",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.revise.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:""==t.userEn.headUrl?"/static/img/headImg.jpg":t.userEn.headUrl,mode:"widthFix"}})],1),i("tui-icon",{attrs:{name:"arrowright",size:26}})],1)],1),i("v-uni-button",{staticClass:"setting",staticStyle:{"line-height":"1.8"},attrs:{"hover-class":"setting_hover",type:"default"}},[i("v-uni-view",{staticClass:"func_left"},[i("v-uni-text",{staticClass:"func_test"},[t._v("账号")])],1),i("v-uni-view",{staticClass:"func_right"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.userName))]),i("tui-icon",{staticStyle:{visibility:"hidden"},attrs:{name:"arrowright",size:26}})],1)],1),i("v-uni-button",{staticClass:"setting",staticStyle:{"line-height":"1.8"},attrs:{"hover-class":"setting_hover",type:"default"}},[i("v-uni-view",{staticClass:"func_left"},[i("v-uni-text",{staticClass:"func_test"},[t._v("等级")])],1),i("v-uni-view",{staticClass:"func_right"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.levelName))]),i("tui-icon",{staticStyle:{visibility:"hidden"},attrs:{name:"arrowright",size:26}})],1)],1),i("v-uni-button",{staticClass:"setting",staticStyle:{"line-height":"1.8"},attrs:{"hover-class":"setting_hover",type:"default"}},[i("v-uni-view",{staticClass:"func_left"},[i("v-uni-text",{staticClass:"func_test"},[t._v("邀请码")])],1),i("v-uni-view",{staticClass:"func_right"},[i("v-uni-view",{},[t._v(t._s(t.userEn.code))]),i("tui-icon",{staticStyle:{visibility:"hidden"},attrs:{name:"arrowright",size:26}})],1)],1),i("v-uni-button",{staticClass:"setting",staticStyle:{"line-height":"1.8"},attrs:{"hover-class":"setting_hover",type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toUpdInfo("nick","昵称",t.userEn.nick)}}},[i("v-uni-view",{staticClass:"func_left"},[i("v-uni-text",{staticClass:"func_test"},[t._v("昵称")])],1),i("v-uni-view",{staticClass:"func_right"},[i("v-uni-view",{},[t._v(t._s(t.userEn.nick))]),i("tui-icon",{attrs:{name:"arrowright",size:26}})],1)],1),i("v-uni-button",{staticClass:"setting",staticStyle:{"line-height":"1.8"},attrs:{"hover-class":"setting_hover",type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toUpdInfo("tel","手机号",t.userEn.tel)}}},[i("v-uni-view",{staticClass:"func_left"},[i("v-uni-text",{staticClass:"func_test"},[t._v("手机号")])],1),i("v-uni-view",{staticClass:"func_right"},[i("v-uni-view",{},[t._v(t._s(t.userEn.tel))]),i("tui-icon",{attrs:{name:"arrowright",size:26}})],1)],1),i("v-uni-button",{staticClass:"setting",staticStyle:{"line-height":"1.8"},attrs:{"hover-class":"setting_hover",type:"default"}},[i("v-uni-view",{staticClass:"func_left"},[i("v-uni-text",{staticClass:"func_test"},[t._v("注册时间")])],1),i("v-uni-view",{staticClass:"func_right"},[i("v-uni-text",{},[t._v(t._s(t.userEn.regTime))]),i("tui-icon",{staticStyle:{visibility:"hidden"},attrs:{name:"arrowright",size:26}})],1)],1),i("v-uni-button",{staticClass:"setting",staticStyle:{"line-height":"1.8"},attrs:{"hover-class":"setting_hover",type:"default"}},[i("v-uni-view",{staticClass:"func_left"},[i("v-uni-text",{staticClass:"func_test"},[t._v("最后一次登录时间")])],1),i("v-uni-view",{staticClass:"func_right"},[i("v-uni-view",{},[t._v(t._s(t.userEn.loginTime))]),i("tui-icon",{staticStyle:{visibility:"hidden"},attrs:{name:"arrowright",size:26}})],1)],1)],1)],1)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}))},"738b":function(t,e,i){"use strict";i.r(e);var s=i("691e"),n=i("97ce");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("ecfa");var u,l=i("f0c5"),c=Object(l["a"])(n["default"],s["b"],s["c"],!1,null,"db777e0a",null,!1,s["a"],u);e["default"]=c.exports},"97ce":function(t,e,i){"use strict";i.r(e);var s=i("2724"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},ecfa:function(t,e,i){"use strict";var s=i("1ec8"),n=i.n(s);n.a},f4ba:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".func>uni-button[data-v-db777e0a]{background-color:#fff;padding:0 %?40?%;box-sizing:border-box;border-radius:0}.func_left[data-v-db777e0a]{font-size:15px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.func_right[data-v-db777e0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999;font-size:15px}.func_test[data-v-db777e0a]{margin-left:%?12?%}.setting[data-v-db777e0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;\n\t/* margin-top:20rpx; */border-bottom:1px solid #f9f9f9;padding:%?10?% 0}.setting_hover[type = default][data-v-db777e0a]{background-color:#eee}.header_img[data-v-db777e0a]{width:%?100?%;height:%?100?%;border-radius:50%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?10?%}",""]),t.exports=e}}]);