(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-registerTel-registerTel"],{"04e5":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".page[data-v-17c43641]{padding-top:%?100?%;box-sizing:border-box}.name[data-v-17c43641], .pwd[data-v-17c43641], .code[data-v-17c43641]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?40?%;border-bottom:1px solid #f2f4f6;margin-bottom:%?40?%}.ipt[data-v-17c43641]{margin-left:%?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ipt>uni-input[data-v-17c43641]{font-size:15px}.reg[data-v-17c43641]{width:100%;text-align:right;font-size:12px;color:#999}.reg_test[data-v-17c43641]{color:#5677fc}.login[data-v-17c43641]{margin-top:%?100?%}.login>uni-button[data-v-17c43641]{border-radius:%?60?%;color:#000;font-size:15px}.pwd_ipt[data-v-17c43641]{position:relative}.open_pwd[data-v-17c43641]{position:absolute;right:%?20?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.tel_code[data-v-17c43641]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999;height:%?60?%}.tel_code>uni-button[data-v-17c43641]{font-size:12px}",""]),t.exports=e},"07cf":function(t,e,i){"use strict";var n=i("d47f"),s=i.n(n);s.a},"2c3c":function(t,e,i){"use strict";i.r(e);var n=i("5e95"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},"473e":function(t,e,i){"use strict";var n={tuiIcon:i("83bb").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content page"},[i("v-uni-view",{staticClass:"name"},[i("tui-icon",{attrs:{name:"people",color:"#6d7a87",size:20}}),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入手机号","adjust-position":!1,maxlength:"30"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1)],1),i("v-uni-view",{staticClass:"pwd"},[i("tui-icon",{attrs:{name:"pwd",color:"#6d7a87",size:20}}),i("v-uni-view",{staticClass:"ipt pwd_ipt"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入密码","adjust-position":!1,maxlength:"30",password:t.isPwd},model:{value:t.passWord,callback:function(e){t.passWord=e},expression:"passWord"}}),i("v-uni-view",{staticClass:"open_pwd",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isPassWord.apply(void 0,arguments)}}},[i("tui-icon",{attrs:{name:"eye",size:30}})],1)],1)],1),i("v-uni-view",{staticClass:"pwd"},[i("tui-icon",{attrs:{name:"pwd",color:"#6d7a87",size:20}}),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请再次输入密码","adjust-position":!1,maxlength:"30",password:!0},model:{value:t.passWordAgain,callback:function(e){t.passWordAgain=e},expression:"passWordAgain"}})],1)],1),i("v-uni-view",{staticClass:"code"},[i("tui-icon",{attrs:{name:"member",color:"#6d7a87",size:24}}),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入邀请码","adjust-position":!1,maxlength:"30"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)],1),i("v-uni-view",{staticClass:"code"},[i("v-uni-view",{staticClass:"ipt"},[i("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机验证码","adjust-position":!1,maxlength:"30"},model:{value:t.telCode,callback:function(e){t.telCode=e},expression:"telCode"}})],1),i("v-uni-view",{staticClass:"tel_code btn_style"},[t.isQuery?i("v-uni-text",[t._v(t._s(t.second)+"重新获取")]):t._e(),t.isQuery?t._e():i("v-uni-button",{attrs:{type:"default","hover-class":"btn_hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openTimer.apply(void 0,arguments)}}},[t._v("获取验证码")])],1)],1),i("v-uni-view",{staticClass:"login btn_style"},[i("v-uni-button",{staticClass:"login_btn",attrs:{type:"default","hover-class":"btn_hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindReg.apply(void 0,arguments)}}},[t._v("注册")])],1)],1)},a=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"5e95":function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("c0bb")),a=n(i("97ac")),o=n(i("56b3")),l={data:function(){return{tel:null,passWord:null,passWordAgain:null,code:null,telCode:null,isPwd:!0,uid:"",isQuery:!1,second:60,timerId:""}},onShow:function(){this.uid=o.default.getUid()},methods:{openTimer:function(){var t=this;a.default.sendTelCode({account:this.tel},(function(e){var i=a.default.getCode(e);0==i&&(t.second=60,t.isQuery=!0,t.timerId=setInterval(t.telCodeTimer,1e3))}))},telCodeTimer:function(){0==this.second&&(clearInterval(this.timerId),this.isQuery=!1),this.second-=1},isPassWord:function(){this.isPwd=!this.isPwd},isPhone:function(t){var e=/^1\d{10}$/;return e.test(t)},bindReg:function(){if(this.isPhone(this.tel))if(this.passWord.length<3)uni.showToast({icon:"none",title:"密码最短为 3 个字符"});else if(this.passWord==this.passWordAgain)if(s.default.isEmpty(this.telCode))uni.showToast({icon:"none",title:"请输入手机验证码"});else if(5==this.telCode.length){var t={account:this.tel,pwd:this.passWord,uid:this.uid,telCode:this.telCode,type:0};s.default.isEmpty(this.code)||(t.upperCode=this.code),this.register(t)}else uni.showToast({icon:"none",title:"请输入正确的手机验证码"});else uni.showToast({icon:"none",title:"二次密码输入不一致"});else uni.showToast({icon:"none",title:"手机号格式不合法"})},register:function(t){a.default.registerByTel(t,(function(t){var e=a.default.getCode(t),i=a.default.getMsg(t);if(0==e){var n=a.default.getData(t);uni.showModal({content:i,showCancel:!1,success:function(t){t.confirm&&(o.default.setUid(n),o.default.setLoginType(1),uni.reLaunch({url:"/pages/index/index"}))}})}else uni.showModal({content:i,showCancel:!1})}))}}};e.default=l},be36:function(t,e,i){"use strict";i.r(e);var n=i("473e"),s=i("2c3c");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("07cf");var o,l=i("f0c5"),d=Object(l["a"])(s["default"],n["b"],n["c"],!1,null,"17c43641",null,!1,n["a"],o);e["default"]=d.exports},d47f:function(t,e,i){var n=i("04e5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("e55cdcea",n,!0,{sourceMap:!1,shadowMode:!1})}}]);