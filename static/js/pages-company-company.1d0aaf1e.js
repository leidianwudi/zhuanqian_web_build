(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-company-company"],{1709:function(t,n,a){"use strict";a.r(n);var i=a("f4dc"),e=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(n,t,(function(){return i[t]}))}(c);n["default"]=e.a},a7ca:function(t,n,a){"use strict";var i=a("fc29"),e=a.n(i);e.a},bcc2:function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,".container[data-v-679c7c84]{margin-top:%?20?%;padding:0 %?40?%;box-sizing:border-box}.container>uni-view[data-v-679c7c84]{margin-bottom:%?40?%}.introduce>uni-view[data-v-679c7c84]{margin-bottom:%?10?%}.company_img[data-v-679c7c84]{width:100%;height:%?800?%}",""]),t.exports=n},ca98:function(t,n,a){"use strict";var i,e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"container",staticStyle:{"background-color":"#fff","font-size":"14px"}},[t._l(t.guideList,(function(n,i){return a("v-uni-view",{key:i,staticClass:"introduce"},[a("v-uni-view",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(n.title))]),a("v-uni-view",{},[a("p",{staticStyle:{"white-space":"pre-wrap"},domProps:{innerHTML:t._s(n.content)}})])],1)})),a("v-uni-view",{staticClass:"company_img"},[a("v-uni-image",{attrs:{src:"/static/img/gs.png",mode:""}})],1)],2)},c=[];a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return i}))},d4a7:function(t,n,a){"use strict";a.r(n);var i=a("ca98"),e=a("1709");for(var c in e)"default"!==c&&function(t){a.d(n,t,(function(){return e[t]}))}(c);a("a7ca");var o,r=a("f0c5"),u=Object(r["a"])(e["default"],i["b"],i["c"],!1,null,"679c7c84",null,!1,i["a"],o);n["default"]=u.exports},f4dc:function(t,n,a){"use strict";var i=a("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(a("97ac")),c={data:function(){return{guideList:[]}},onShow:function(){this.getInformation()},methods:{getInformation:function(){var t=this;e.default.getInformation({type:7,page:1,count:99},(function(n){var a=e.default.getData(n).data;t.guideList=a}))}}};n.default=c},fc29:function(t,n,a){var i=a("bcc2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("85e25d46",i,!0,{sourceMap:!1,shadowMode:!1})}}]);