(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-luckDraw-luckDraw"],{1969:function(t,a,i){"use strict";i.r(a);var e=i("7555"),c=i("bf64");for(var o in c)"default"!==o&&function(t){i.d(a,t,(function(){return c[t]}))}(o);i("8708");var n,d=i("f0c5"),u=Object(d["a"])(c["default"],e["b"],e["c"],!1,null,"0c2c9d32",null,!1,e["a"],n);a["default"]=u.exports},5810:function(t,a,i){"use strict";var e=i("4ea4");i("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=e(i("97ac")),o=e(i("56b3")),n=(e(i("c0bb")),{data:function(){return{circleList:24,awardList:[],indexSelect:1,isRunning:!1,userEn:[]}},onShow:function(){this.userEn=o.default.getMyInfo(),this.getOpenLucky()},methods:{getOpenLucky:function(){var t=this;c.default.getOpenLucky({account:this.userEn.account},(function(a){var i=c.default.getCode(a);if(0!=i)uni.showModal({content:"获取转盘信息错误",showCancel:!1,success:function(t){t.confirm&&uni.navigateBack({delta:1})}});else{var e=c.default.getData(a).data;t.awardList=e}}))},getRandom:function(t){var a=Math.random()>.5?"2":"1";t=t||3;for(var i=0;i<t;i++)a+=Math.floor(10*Math.random());return Number(a)},startDrawing:function(){var t=this;uni.showModal({title:"幸运抽奖",content:"确定消耗10金币进行一次抽奖？",success:function(a){if(a.confirm){if(t.isRunning)return;t.isRunning=!0,c.default.openLucky({account:t.userEn.account},(function(a){var i=c.default.getCode(a);if(0!=i)uni.showModal({content:"获取转盘信息错误",showCancel:!1,success:function(t){t.confirm&&uni.navigateBack({delta:1})}});else{var e=c.default.getData(a);console.log(e);var o=0,n=0,d=setInterval((function(){++o,o%=8,t.indexSelect=o,n+=40,n>1500&&(clearInterval(d),d=null,t.indexSelect=e.id,uni.showModal({title:"恭喜您",content:"获得了奖品【"+e.title+"】",confirmColor:"#5677FC",showCancel:!1,success:function(a){a.confirm&&(t.isRunning=!1)}}))}),70+n)}}))}}})}}});a.default=n},7555:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return c})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var c=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"container"},[t._l(t.circleList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"tui-dot",class:["tui-dot-"+(a+1)]})})),i("v-uni-view",{staticClass:"tui-container-in"},[t._l(t.awardList,(function(a,e){return i("v-uni-view",{key:a.id,staticClass:"tui-content-out box",class:["tui-award-"+(e+1),a.id==t.indexSelect?"tui-awardSelect":""]},[i("v-uni-view",{staticClass:"img_box"},[i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:0==a.type,expression:"item.type == 0"}],attrs:{src:"/static/img/Lucky_img1.png",mode:"widthFix"}}),i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:1==a.type,expression:"item.type == 1"}],attrs:{src:"/static/img/Lucky_img2.png",mode:"widthFix"}}),i("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:10==a.type,expression:"item.type == 10"}],attrs:{src:"/static/img/Lucky_img3.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"test"},[i("v-uni-text",[t._v(t._s(a.title))])],1)],1)})),i("v-uni-view",{staticClass:"tui-btn-start",class:[t.isRunning?"tui-ative":""],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.startDrawing.apply(void 0,arguments)}}},[t._v("立即抽奖")])],2)],2)},o=[]},"77cd":function(t,a,i){var e=i("bb21");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var c=i("4f06").default;c("40485a05",e,!0,{sourceMap:!1,shadowMode:!1})},8708:function(t,a,i){"use strict";var e=i("77cd"),c=i.n(e);c.a},bb21:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".box[data-v-0c2c9d32]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.img_box[data-v-0c2c9d32]{height:%?80?%;width:%?88?%;text-align:center}uni-image[data-v-0c2c9d32]{width:100%;height:auto}.test[data-v-0c2c9d32]{margin-top:%?20?%;font-size:12px;color:red}.container[data-v-0c2c9d32]{height:%?600?%;width:%?650?%;background-color:#fc4034;margin:%?100?% auto;border-radius:%?40?%;box-shadow:0 10px 0 #d80014;position:relative}.tui-container-in[data-v-0c2c9d32]{width:%?580?%;height:%?530?%;background-color:#d80014;border-radius:%?40?%;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}\n/**小圆点 start*/.tui-dot[data-v-0c2c9d32]{position:absolute;display:block;border-radius:50%;height:%?20?%;width:%?20?%}.tui-dot[data-v-0c2c9d32]:nth-child(odd){background:#fff;-webkit-animation:.5s odd-data-v-0c2c9d32 linear infinite;animation:.5s odd-data-v-0c2c9d32 linear infinite}.tui-dot[data-v-0c2c9d32]:nth-child(even){background:#fcf400;-webkit-animation:.5s even-data-v-0c2c9d32 linear infinite;animation:.5s even-data-v-0c2c9d32 linear infinite}.tui-dot-1[data-v-0c2c9d32]{left:%?15?%;top:%?15?%}.tui-dot-2[data-v-0c2c9d32]{left:%?117.5?%;top:%?7.5?%}.tui-dot-3[data-v-0c2c9d32]{left:%?220?%;top:%?7.5?%}.tui-dot-4[data-v-0c2c9d32]{left:%?322.5?%;top:%?7.5?%}.tui-dot-5[data-v-0c2c9d32]{left:%?425?%;top:%?7.5?%}.tui-dot-6[data-v-0c2c9d32]{left:%?527.5?%;top:%?7.5?%}.tui-dot-7[data-v-0c2c9d32]{left:%?620?%;top:%?15?%}.tui-dot-8[data-v-0c2c9d32]{left:%?622?%;top:%?109?%}.tui-dot-9[data-v-0c2c9d32]{left:%?622?%;top:%?203?%}.tui-dot-10[data-v-0c2c9d32]{left:%?622?%;top:%?297?%}.tui-dot-11[data-v-0c2c9d32]{left:%?622?%;top:%?391?%}.tui-dot-12[data-v-0c2c9d32]{left:%?622?%;top:%?485?%}.tui-dot-13[data-v-0c2c9d32]{left:%?620?%;top:%?565?%}.tui-dot-14[data-v-0c2c9d32]{left:%?517.5?%;top:%?572?%}.tui-dot-15[data-v-0c2c9d32]{left:%?415?%;top:%?572?%}.tui-dot-16[data-v-0c2c9d32]{left:%?312.5?%;top:%?572?%}.tui-dot-17[data-v-0c2c9d32]{left:%?210?%;top:%?572?%}.tui-dot-18[data-v-0c2c9d32]{left:%?107.5?%;top:%?572?%}.tui-dot-19[data-v-0c2c9d32]{left:%?15?%;top:%?565?%}.tui-dot-20[data-v-0c2c9d32]{left:%?7.5?%;top:%?471?%}.tui-dot-21[data-v-0c2c9d32]{left:%?7.5?%;top:%?377?%}.tui-dot-22[data-v-0c2c9d32]{left:%?7.5?%;top:%?283?%}.tui-dot-23[data-v-0c2c9d32]{left:%?7.5?%;top:%?189?%}.tui-dot-24[data-v-0c2c9d32]{left:%?7.5?%;top:%?95?%}@-webkit-keyframes odd-data-v-0c2c9d32{0%{background:#fff}100%{background:#fcf400}}@keyframes odd-data-v-0c2c9d32{0%{background:#fff}100%{background:#fcf400}}@-webkit-keyframes even-data-v-0c2c9d32{0%{background:#fcf400}100%{background:#fff}}@keyframes even-data-v-0c2c9d32{0%{background:#fcf400}100%{background:#fff}}\n/**小圆点 end*/.tui-content-out[data-v-0c2c9d32]{position:absolute;height:%?150?%;width:%?168?%;background-color:#fcecec;border-radius:%?15?%;box-shadow:0 4px 0 #fcc8d0}\n/* 580 530  */.tui-award-1[data-v-0c2c9d32]{left:%?24?%;top:%?24?%}.tui-award-2[data-v-0c2c9d32]{left:%?206?%;top:%?24?%}.tui-award-3[data-v-0c2c9d32]{left:%?388?%;top:%?24?%}.tui-award-4[data-v-0c2c9d32]{left:%?388?%;top:%?188?%}.tui-award-5[data-v-0c2c9d32]{left:%?388?%;top:%?352?%}.tui-award-6[data-v-0c2c9d32]{left:%?206?%;top:%?352?%}.tui-award-7[data-v-0c2c9d32]{left:%?24?%;top:%?352?%}.tui-award-8[data-v-0c2c9d32]{left:%?24?%;top:%?188?%}\n/**居中 加粗*/.tui-btn-start[data-v-0c2c9d32]{position:absolute;top:%?188?%;left:%?206?%;border-radius:%?15?%;height:%?150?%;width:%?168?%;background-color:#fc4034;box-shadow:0 4px 0 #fcc8d0;color:#fcf400;text-align:center;font-size:%?32?%;font-weight:700;line-height:%?150?%}.tui-ative[data-v-0c2c9d32]{opacity:.6!important}.tui-award-image[data-v-0c2c9d32]{position:absolute;margin:auto;top:0;left:0;bottom:0;right:0;height:%?134?%;width:%?134?%}.tui-awardSelect[data-v-0c2c9d32]{background-color:#fcf400!important;box-shadow:0 4px 0 #f0d00c!important}",""]),t.exports=a},bf64:function(t,a,i){"use strict";i.r(a);var e=i("5810"),c=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=c.a}}]);