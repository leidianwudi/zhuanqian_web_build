(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-guide-guide"],{"120c":function(t,n,e){"use strict";var a=e("878e"),i=e.n(a);i.a},6196:function(t,n,e){"use strict";e.r(n);var a=e("d5d3"),i=e("93da");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("120c");var u,r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"53e30c4a",null,!1,a["a"],u);n["default"]=c.exports},7107:function(t,n,e){"use strict";var a=e("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("97ac")),o={data:function(){return{guideList:[]}},onShow:function(){this.getInformation()},methods:{getInformation:function(){var t=this;i.default.getInformation({type:3,page:1,count:99},(function(n){var e=i.default.getData(n).data;t.guideList=e,console.log(t.guideList)}))}}};n.default=o},"878e":function(t,n,e){var a=e("acc0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("3f422b21",a,!0,{sourceMap:!1,shadowMode:!1})},"93da":function(t,n,e){"use strict";e.r(n);var a=e("7107"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},acc0:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".question[data-v-53e30c4a]{color:#9b59b6}.container>uni-view[data-v-53e30c4a]{margin-bottom:%?50?%}",""]),t.exports=n},d5d3:function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container",staticStyle:{"background-color":"#fff","font-size":"14px"}},t._l(t.guideList,(function(n,a){return e("v-uni-view",{key:a},[e("v-uni-view",{staticClass:"question"},[t._v(t._s(n.title))]),e("v-uni-view",{staticClass:"answer"},[e("p",{staticStyle:{"white-space":"pre-wrap"},domProps:{innerHTML:t._s(n.content)}})])],1)})),1)},o=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}))}}]);