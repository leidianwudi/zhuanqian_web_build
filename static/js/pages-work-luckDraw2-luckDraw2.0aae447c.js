(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-luckDraw2-luckDraw2"],{"471b":function(t,a,e){"use strict";var r=e("4ea4");e("4160"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=r(e("ade3")),o=r(e("97ac")),n=r(e("56b3")),s=r(e("8cd1")),d=r(e("c0bb")),l=r(e("f2f2")),f={data:function(){var t;return t={userEn:[],width:28,effect:!0,shadow:!1,animation:{openRotate1:!1,openRotate2:!1,openRotate3:!1,openRotate4:!1,openRotate5:!1,openRotate6:!1},awardEnable:!0,rotateId:null,uid:""},(0,i.default)(t,"shadow",!1),(0,i.default)(t,"LuckyList",[]),(0,i.default)(t,"getAwardImg",""),(0,i.default)(t,"getAwardTitle",""),(0,i.default)(t,"luckUrl",""),(0,i.default)(t,"luckSetting",""),t},onShow:function(){this.uid=n.default.getUid(),this.userEn=n.default.getMyInfo(),this.getLucky(),this.rotateId=0,this.getLuckUrl(),this.getLuckSetting()},onLoad:function(){this.openEffectAnimation()},onBackPress:function(t){},methods:{getLuckSetting:function(){var t=this;o.default.getConfig({key:"luck_open_type|luck_open_sum"},(function(a){var e=o.default.getData(a).data,r="",i="";e.forEach((function(t){if("luck_open_sum"==t.key&&(i=t.value),"luck_open_type"==t.key)switch(t.value){case"0":r="金币";break;case"1":r="现金";break;default:break}})),t.luckSetting=i+r}))},getLuckUrl:function(){var t=this;o.default.getConfig({key:"luckUrl"},(function(a){var e=o.default.getData(a).data[0];t.luckUrl=e.value}))},getLucky:function(){var t=this;o.default.getOpenLucky({},(function(a){var e=o.default.getCode(a);if(0!=e){var r=o.default.getMsg(a);uni.showModal({content:r,showCancel:!1,success:function(t){t.confirm&&uni.navigateBack({delta:1})}})}else{var i=o.default.getData(a).data;t.LuckyList=i}}))},closeShadow:function(){s.default.playAudio(),this.shadow=!1,l.default.contains(this.luckUrl,"http")&&d.default.openUrl(this.luckUrl)},openEffectAnimation:function(){setInterval(this.effectAnimation,1e3)},effectAnimation:function(){this.effect=!this.effect},openLucky:function(){this.awardEnable&&(s.default.playAudio(),this.getOpenLucky())},getOpenLucky:function(){var t=this;uni.showModal({title:"幸运抽奖",content:"确定消耗"+t.luckSetting+"进行一次抽奖？",success:function(a){a.confirm&&(t.rotateId=0,o.default.openLucky({uid:t.uid},(function(a){var e=o.default.getCode(a);o.default.getData(a);if(0==e){t.awardEnable=!1;var r=o.default.getData(a);console.log(r),t.rotateId=r.order,t.getAwardTitle=r.title,t.LuckyList.forEach((function(a,e){a.order==t.rotateId&&(t.getAwardImg=a.imgUrl)})),setTimeout((function(){t.showAward()}),3500)}else{var i=o.default.getMsg(a);uni.showModal({content:i,showCancel:!1})}})))}})},showAward:function(){this.awardEnable=!0;this.shadow=!0},close:function(){this.shadow=!1},toLuckDrawDetails:function(){this.awardEnable&&uni.navigateTo({url:"/pages/work/luckDraw2/LuckDrawDetails/LuckDrawDetails"})}}};a.default=f},"48b7":function(t,a,e){"use strict";var r=e("eb00"),i=e.n(r);i.a},ac5f:function(t,a,e){var r=e("24fb");a=r(!1),a.push([t.i,"uni-page-body[data-v-396d2b13]{width:100%;height:100%}.content[data-v-396d2b13]{width:100%;height:100vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:44px;box-sizing:border-box;position:relative}.bg-set[data-v-396d2b13], .shadow[data-v-396d2b13]{position:fixed;width:100%;height:100vh;top:0;left:0;z-index:-1}.main[data-v-396d2b13]{width:86%;height:%?900?%;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:20vh}\n\t/* \t.gz, .jp{\n\t\twidth:90rpx;\n\t\theight:90rpx;\n\t\tposition: absolute;\n\t}\n\t.gz{\n\t\tleft: 10rpx;\n\t\ttop: 10rpx;\n\t}\n\t.jp{\n\t\tright: 10rpx;\n\t\ttop: 10rpx;\n\t} */.active_test[data-v-396d2b13]{color:#ffdf81;position:absolute;top:9vh;font-size:17px}.list[data-v-396d2b13]{position:absolute;top:16vh;z-index:5}.botline[data-v-396d2b13]{width:%?500?%;height:%?20?%;border-radius:%?10?%;border:1px solid #fff3dd;background-color:rgba(255,217,147,.6)}.topline[data-v-396d2b13]{height:%?20?%;background-color:#91dc0d;border-radius:%?10?%}.progress_award[data-v-396d2b13]{width:%?70?%;height:%?80?%;position:absolute;-webkit-transform:translateY(-60%);transform:translateY(-60%);left:10%}.awardT[data-v-396d2b13]{left:30%}.awardS[data-v-396d2b13]{left:50%}.awardF[data-v-396d2b13]{top:%?7?%;left:83%}.award_test[data-v-396d2b13]{width:%?158?%;height:%?40?%;position:absolute;right:%?-30?%;top:%?60?%}.award_test>uni-text[data-v-396d2b13]{width:%?0?%;height:%?0?%;border-top:%?10?% solid transparent;border-bottom:%?10?% solid #ff4007;border-right:%?10?% solid transparent;border-left:%?10?% solid transparent;display:inline-block;position:absolute;left:45%;top:%?-16?%}.luckdraw_box[data-v-396d2b13]{width:%?750?%;height:%?750?%;position:absolute;top:25vh\n\t\t/* transform:rotate(-300deg); */}.rotate[data-v-396d2b13]{width:%?750?%;height:%?750?%;position:absolute;top:0;left:0;-webkit-transform-origin:center;transform-origin:center;/*定义bai动画的旋转中心点*/z-index:3}.position1[data-v-396d2b13]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.position2[data-v-396d2b13]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.position3[data-v-396d2b13]{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.position4[data-v-396d2b13]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.position5[data-v-396d2b13]{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.position6[data-v-396d2b13]{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.open_rotate1[data-v-396d2b13]{-webkit-animation:rotate1-data-v-396d2b13 3s ease 1;animation:rotate1-data-v-396d2b13 3s ease 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards\n\t\t/* animation-iteration-count: 1; */}.open_rotate2[data-v-396d2b13]{-webkit-animation:rotate2-data-v-396d2b13 3s ease 1;animation:rotate2-data-v-396d2b13 3s ease 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.open_rotate3[data-v-396d2b13]{-webkit-animation:rotate3-data-v-396d2b13 3s ease 1;animation:rotate3-data-v-396d2b13 3s ease 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.open_rotate4[data-v-396d2b13]{-webkit-animation:rotate4-data-v-396d2b13 3s ease 1;animation:rotate4-data-v-396d2b13 3s ease 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.open_rotate5[data-v-396d2b13]{-webkit-animation:rotate5-data-v-396d2b13 3s ease 1;animation:rotate5-data-v-396d2b13 3s ease 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.open_rotate6[data-v-396d2b13]{-webkit-animation:rotate6-data-v-396d2b13 3s ease 1;animation:rotate6-data-v-396d2b13 3s ease 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes rotate1-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(5turn);transform:rotate(5turn)}}@keyframes rotate1-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(5turn);transform:rotate(5turn)}}@-webkit-keyframes rotate2-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(1860deg);transform:rotate(1860deg)}}@keyframes rotate2-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(1860deg);transform:rotate(1860deg)}}@-webkit-keyframes rotate3-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(1920deg);transform:rotate(1920deg)}}@keyframes rotate3-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(1920deg);transform:rotate(1920deg)}}@-webkit-keyframes rotate4-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(1980deg);transform:rotate(1980deg)}}@keyframes rotate4-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(1980deg);transform:rotate(1980deg)}}@-webkit-keyframes rotate5-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(2040deg);transform:rotate(2040deg)}}@keyframes rotate5-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(2040deg);transform:rotate(2040deg)}}@-webkit-keyframes rotate6-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(2100deg);transform:rotate(2100deg)}}@keyframes rotate6-data-v-396d2b13{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n\t\t/* 75%{transform:rotate(1440deg);} */100%{-webkit-transform:rotate(2100deg);transform:rotate(2100deg)}}.luck_draw[data-v-396d2b13]{width:%?740?%;height:%?700?%;position:absolute;-webkit-transform:translateY(0);transform:translateY(0);z-index:4}.pointer[data-v-396d2b13]{width:%?280?%;height:%?290?%;position:absolute;top:50%;left:50%;z-index:10;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);\n\t\t/* animation: spin 1s infinite; */-webkit-transform-origin:0 0;transform-origin:0 0;background-image:url(/static/img/luck/ef5b234566bdb5d9f3d261c814fe44b0.png);background-size:100%}.pointer_hover[data-v-396d2b13]{-webkit-transform:scale(.9) translate(-50%,-50%);transform:scale(.9) translate(-50%,-50%)}@-webkit-keyframes spin-data-v-396d2b13{0%{-webkit-transform:scale(1.2) translate(-50%,-50%);transform:scale(1.2) translate(-50%,-50%)}25%{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}50%{-webkit-transform:scale(1.2) translate(-50%,-50%);transform:scale(1.2) translate(-50%,-50%)}75%{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}100%{-webkit-transform:scale(1.2) translate(-50%,-50%);transform:scale(1.2) translate(-50%,-50%)}}@keyframes spin-data-v-396d2b13{0%{-webkit-transform:scale(1.2) translate(-50%,-50%);transform:scale(1.2) translate(-50%,-50%)}25%{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}50%{-webkit-transform:scale(1.2) translate(-50%,-50%);transform:scale(1.2) translate(-50%,-50%)}75%{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}100%{-webkit-transform:scale(1.2) translate(-50%,-50%);transform:scale(1.2) translate(-50%,-50%)}}.award[data-v-396d2b13]{text-align:center;color:#ff9e23;font-size:14px;position:absolute;width:%?200?%;height:%?170?%}.award_img[data-v-396d2b13]{margin:auto;width:%?120?%;height:%?120?%}.award_1[data-v-396d2b13]{top:10%;left:37%}.award_6[data-v-396d2b13]{top:25%;left:61%;-webkit-transform:rotate(60deg);transform:rotate(60deg)}.award_5[data-v-396d2b13]{top:53%;left:61%;-webkit-transform:rotate(120deg);transform:rotate(120deg)}.award_4[data-v-396d2b13]{top:67%;left:37%;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.award_3[data-v-396d2b13]{top:52%;left:12%;-webkit-transform:rotate(240deg);transform:rotate(240deg)}.award_2[data-v-396d2b13]{top:24%;left:13%;-webkit-transform:rotate(300deg);transform:rotate(300deg)}\n\t/* 遮罩层 */.shadow[data-v-396d2b13]{z-index:999;background-color:rgba(50,37,15,.7)}.card[data-v-396d2b13]{width:86%;height:%?400?%;position:absolute;left:50%}.card_header[data-v-396d2b13]{width:%?668?%;top:%?620?%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:10}.card_content1[data-v-396d2b13]{width:%?630?%;top:%?900?%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.active1_img[data-v-396d2b13]{position:absolute;width:%?700?%;height:%?320?%;top:50%;left:50%;background-image:url(/static/app/active.jpg);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:%?10?%;background-size:100% 100%}.active1_img>uni-image[data-v-396d2b13]{width:100%;height:auto}.active1_btn[data-v-396d2b13]{width:%?300?%;height:%?140?%;position:absolute;left:50%;-webkit-transform:translate(-50%,-40%);transform:translate(-50%,-40%)}.reward_btn[data-v-396d2b13]{width:%?300?%;height:%?300?%;position:absolute;top:60%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:10;background-image:url(/static/img/luck/reward.png);background-size:100%;-webkit-transform-origin:0 50%;transform-origin:0 50%}.rewardBtn_hover[data-v-396d2b13]{-webkit-transform:scale(.9) translate(-50%);transform:scale(.9) translate(-50%)}.close[data-v-396d2b13]{width:%?80?%;height:%?80?%;position:absolute;top:%?300?%;left:80%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.award_box[data-v-396d2b13]{position:absolute;top:%?180?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);text-align:center;color:red}.getaward_img[data-v-396d2b13]{width:%?220?%;height:%?220?%;margin-top:%?20?%}.record[data-v-396d2b13]{position:absolute;right:0;top:26%;background-color:#f8f8f8;width:%?180?%;height:%?70?%;text-align:center;font-size:15px;line-height:%?70?%;color:#fbb742;border-radius:%?40?% 0 0 %?40?%;z-index:99}.gold_btn[data-v-396d2b13]{opacity:.8}",""]),t.exports=a},c1b1:function(t,a,e){"use strict";e.r(a);var r=e("471b"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(a,t,(function(){return r[t]}))}(o);a["default"]=i.a},cc20:function(t,a,e){"use strict";e.r(a);var r=e("f801"),i=e("c1b1");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("48b7");var n,s=e("f0c5"),d=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"396d2b13",null,!1,r["a"],n);a["default"]=d.exports},eb00:function(t,a,e){var r=e("ac5f");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("2e1b600d",r,!0,{sourceMap:!1,shadowMode:!1})},f2f2:function(t,a,e){e("caad"),e("2532"),t.exports={contains:function(t,a){return t.includes(a)}}},f801:function(t,a,e){"use strict";var r;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return r}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content",staticStyle:{height:"100%"}},[e("v-uni-image",{staticClass:"bg-set",attrs:{src:"/static/img/luck/6764fbf06a78763f6b2162e6d4bd731c.png",mode:""}}),e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"botline"},[e("v-uni-view",{staticClass:"topline",style:{width:t.width+"%"}})],1),e("v-uni-view",{staticClass:"progress_award"},[e("v-uni-image",{attrs:{src:"/static/img/luck/2baa8604a9b148c7451de22336a6557e.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"progress_award awardT"},[e("v-uni-image",{attrs:{src:"/static/img/luck/2baa8604a9b148c7451de22336a6557e.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"progress_award awardS"},[e("v-uni-image",{attrs:{src:"/static/img/luck/2baa8604a9b148c7451de22336a6557e.png",mode:"widthFix"}})],1),e("v-uni-view",{},[e("v-uni-view",{staticClass:"progress_award awardF"},[e("v-uni-image",{attrs:{src:"/static/img/luck/3584f21da8adbe692696a04e1633d966.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"award_test"},[e("v-uni-image",{attrs:{src:"/static/img/luck/76163e615c7627425fb89448d46baaa2.png",mode:""}})],1)],1)],1),e("v-uni-button",{staticClass:"record",staticStyle:{padding:"0"},attrs:{"hover-class":"gold_btn"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toLuckDrawDetails.apply(void 0,arguments)}}},[t._v("历史记录")]),e("v-uni-view",{staticClass:"luckdraw_box"},[e("v-uni-view",{staticClass:"rotate",class:{open_rotate1:1==t.rotateId,open_rotate2:2==t.rotateId,open_rotate3:3==t.rotateId,open_rotate4:4==t.rotateId,open_rotate5:5==t.rotateId,open_rotate6:6==t.rotateId},staticStyle:{"animation-fill-mode":"forwards"}},[e("v-uni-image",{attrs:{src:"/static/img/luck/58ea510e1129b8b4287e32e2f3b064ed.png",mode:"widthFix"}}),t.LuckyList.length>1?e("v-uni-view",{},[e("v-uni-view",{staticClass:"award award_1"},[e("v-uni-text",[t._v(t._s(t.LuckyList[0].title))]),e("v-uni-view",{staticClass:"award_img"},[e("v-uni-image",{attrs:{src:t.LuckyList[0].imgUrl,mode:""}})],1)],1),e("v-uni-view",{staticClass:"award award_2"},[e("v-uni-text",[t._v(t._s(t.LuckyList[1].title))]),e("v-uni-view",{staticClass:"award_img"},[e("v-uni-image",{attrs:{src:t.LuckyList[1].imgUrl,mode:""}})],1)],1),e("v-uni-view",{staticClass:"award award_3"},[e("v-uni-text",[t._v(t._s(t.LuckyList[2].title))]),e("v-uni-view",{staticClass:"award_img"},[e("v-uni-image",{attrs:{src:t.LuckyList[2].imgUrl,mode:""}})],1)],1),e("v-uni-view",{staticClass:"award award_4"},[e("v-uni-text",[t._v(t._s(t.LuckyList[3].title))]),e("v-uni-view",{staticClass:"award_img"},[e("v-uni-image",{attrs:{src:t.LuckyList[3].imgUrl,mode:""}})],1)],1),e("v-uni-view",{staticClass:"award award_5"},[e("v-uni-text",[t._v(t._s(t.LuckyList[4].title))]),e("v-uni-view",{staticClass:"award_img"},[e("v-uni-image",{attrs:{src:t.LuckyList[4].imgUrl,mode:""}})],1)],1),e("v-uni-view",{staticClass:"award award_6"},[e("v-uni-text",[t._v(t._s(t.LuckyList[5].title))]),e("v-uni-view",{staticClass:"award_img"},[e("v-uni-image",{attrs:{src:t.LuckyList[5].imgUrl,mode:""}})],1)],1)],1):t._e()],1),e("v-uni-view",{staticClass:"luck_draw"},[e("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.effect,expression:"effect"}],attrs:{src:"/static/img/luck/lamp1.40547699.png",mode:"widthFix"}}),e("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:!t.effect,expression:"!effect"}],attrs:{src:"/static/img/luck/lamp2.062c14d4.png",mode:"widthFix"}})],1),e("v-uni-button",{staticClass:"pointer",staticStyle:{"background-color":"transparent"},attrs:{"hover-class":"pointer_hover"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openLucky.apply(void 0,arguments)}}})],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.shadow,expression:"shadow"}],staticClass:"shadow"},[e("v-uni-view",{staticClass:"main"},[e("v-uni-image",{attrs:{src:"/static/img/luck/rewardBag.png",mode:"widthFix"}}),e("v-uni-view",{staticClass:"award_box"},[e("v-uni-text",[t._v(t._s(t.getAwardTitle))]),e("v-uni-view",{staticClass:"getaward_img"},[e("v-uni-image",{attrs:{src:t.getAwardImg,mode:""}})],1)],1),e("v-uni-button",{staticClass:"reward_btn",staticStyle:{"background-color":"transparent"},attrs:{"hover-class":"rewardBtn_hover"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.closeShadow.apply(void 0,arguments)}}})],1)],1)],1)},o=[]}}]);