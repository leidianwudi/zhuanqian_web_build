(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-workClassify-workClassify"],{"0f3c":function(e,t,a){"use strict";var i=a("26c5"),n=a.n(i);n.a},"26c5":function(e,t,a){var i=a("37e9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("ed19c268",i,!0,{sourceMap:!1,shadowMode:!1})},"37e9":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".lay_work[data-v-20dd7f14]{padding:%?25?% %?20?% 0;box-sizing:border-box;font-size:16px}.work_list[data-v-20dd7f14]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?6?%}.work[data-v-20dd7f14]{width:48%;height:%?260?%;\n\t/* background-color: #F1F2F2; */background-color:#f5f5f5;border-radius:%?20?%;padding-top:%?20?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.work_num[data-v-20dd7f14]{font-size:14px;font-weight:700;margin-bottom:%?10?%;padding-left:%?20?%;box-sizing:border-box}.work_text[data-v-20dd7f14]{font-size:13px;color:grey;margin-bottom:%?10?%;padding-left:%?20?%;box-sizing:border-box}.work_img[data-v-20dd7f14]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.work_title[data-v-20dd7f14]{font-weight:700}.lay_sort[data-v-20dd7f14]{-webkit-box-flex:1;-webkit-flex:1;flex:1;border-radius:%?10?%;color:#fff;font-size:14px;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?30?%;box-sizing:border-box;position:relative;overflow:hidden}.sort_img[data-v-20dd7f14]{width:%?80?%;height:%?100?%;position:absolute;right:%?30?%;bottom:%?10?%}.background_sort1[data-v-20dd7f14]{background-image:-webkit-linear-gradient(left,#f27116,#ca4540);background-image:linear-gradient(90deg,#f27116,#ca4540)}.background_sort2[data-v-20dd7f14]{background-image:-webkit-linear-gradient(left,#332fa0,#970b3c);background-image:linear-gradient(90deg,#332fa0,#970b3c)}.background_sort3[data-v-20dd7f14]{background-image:-webkit-linear-gradient(left,#22a265,#a2c137);background-image:linear-gradient(90deg,#22a265,#a2c137)}.background_sort4[data-v-20dd7f14]{background-image:-webkit-linear-gradient(left,#ee2b29,#b5257c);background-image:linear-gradient(90deg,#ee2b29,#b5257c)}.background_sort5[data-v-20dd7f14]{background-image:-webkit-linear-gradient(left,#7410c0,#b5248b);background-image:linear-gradient(90deg,#7410c0,#b5248b)}.background_sort6[data-v-20dd7f14]{background-image:-webkit-linear-gradient(left,#ff8e30,#d23b66);background-image:linear-gradient(90deg,#ff8e30,#d23b66)}",""]),e.exports=t},9733:function(e,t,a){"use strict";var i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"lay_work"},[a("v-uni-view",{staticClass:"work_list"},e._l(e.levelList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"work",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.toWork(t.level)}}},[a("v-uni-view",{staticClass:"work_num"},[e._v(e._s(t.levelName))]),a("v-uni-view",{staticClass:"work_text"},[e._v("任务数量"+e._s(t.publishTaskSum)+"单/天")]),a("v-uni-view",{staticClass:"lay_sort",class:"background_sort"+t.id},[a("v-uni-view",{},[a("v-uni-view",{},[e._v("悬赏")]),a("v-uni-view",{staticClass:"sort_img"},[a("v-uni-image",{attrs:{src:"/static/img/member"+t.id+".png",mode:""}})],1)],1)],1)],1)})),1)],1)],1)},r=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}))},b905:function(e,t,a){"use strict";a.r(t);var i=a("eeab"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},babb:function(e,t,a){"use strict";a.r(t);var i=a("9733"),n=a("b905");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("0f3c");var d,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"20dd7f14",null,!1,i["a"],d);t["default"]=l.exports},eeab:function(e,t,a){"use strict";var i=a("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("56b3")),r=i(a("97ac")),d=i(a("c0bb")),o=i(a("8d9c")),l={data:function(){return{levelList:[],classifyData:""}},onLoad:function(e){this.classifyData=o.default.url2Obj(e.title),d.default.setBarTitle(this.classifyData.name+"任务"),this.getUserLevel()},methods:{toWork:function(e){var t={bigClassifyId:this.classifyData.bigClassifyId,classifyId:this.classifyData.classifyId,level:e};uni.reLaunch({url:"/pages/work/work1/work1?data="+o.default.obj2Url(t)})},getUserLevel:function(){var e=this;r.default.getLevelAll((function(t){var a=r.default.getData(t).data;e.levelList=a,n.default.setLevelList(e.levelList)}))}}};t.default=l}}]);