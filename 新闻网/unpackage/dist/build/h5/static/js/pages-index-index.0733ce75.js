(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0034":function(t,n,e){"use strict";e.r(n);var a=e("47b1"),i=e("f72b");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("02e6");var o,s=e("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"110f2a22",null,!1,a["a"],o);n["default"]=c.exports},"02e6":function(t,n,e){"use strict";var a=e("6ce5"),i=e.n(a);i.a},"169b":function(t,n,e){var a=e("9e5d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("c7ef27e6",a,!0,{sourceMap:!1,shadowMode:!1})},"287c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"newsbox",props:{item:{type:Object,default:function(){return{title:"组件内默认的标题",author:"张三",hits:668,picurl:"../../static/images/nopic.jpg"}}}},data:function(){return{}}};n.default=a},2909:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=c;var a=s(e("6005")),i=s(e("db90")),r=s(e("06c5")),o=s(e("3427"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){return(0,a.default)(t)||(0,i.default)(t)||(0,r.default)(t)||(0,o.default)()}},3427:function(t,n,e){"use strict";function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},"44aa":function(t,n,e){"use strict";var a=e("4ea4");e("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("2909")),r={data:function(){return{navIndex:0,navArr:[],newsArr:[],currentPage:1,loading:0}},onLoad:function(){this.getNavData(),this.getNewsData()},onReachBottom:function(){console.log("到底部了"),2!=this.loading&&(this.currentPage++,this.loading=1,this.getNewsData())},methods:{clickNav:function(t,n){this.navIndex=t,this.currentPage=1,this.newsArr=[],this.loading=0,this.getNewsData(n)},goDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?cid=".concat(t.classid,"&id=").concat(t.id)})},getNavData:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/navlist.php",success:function(n){console.log(n),t.navArr=n.data}})},getNewsData:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;uni.request({url:"https://ku.qingnian8.com/dataApi/news/newslist.php",data:{cid:n,page:this.currentPage},success:function(n){console.log(n),0==n.data.length&&(t.loading=2),t.newsArr=[].concat((0,i.default)(t.newsArr),(0,i.default)(n.data))}})}}};n.default=r},"47b1":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"newsbox"},[e("v-uni-view",{staticClass:"pic"},[e("v-uni-image",{attrs:{src:t.item.picurl,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.item.title))]),t.item.looktime?e("v-uni-view",{staticClass:"info"},[e("v-uni-text",[t._v("浏览时间："+t._s(t.item.looktime))])],1):e("v-uni-view",{staticClass:"info"},[e("v-uni-text",[t._v(t._s(t.item.author))]),e("v-uni-text",[t._v(t._s(t.item.hits)+"浏览")])],1)],1)],1)},r=[]},6005:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=r;var a=i(e("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t))return(0,a.default)(t)}},6382:function(t,n,e){"use strict";e.r(n);var a=e("8caa"),i=e("e539");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("8229");var o,s=e("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"996d054a",null,!1,a["a"],o);n["default"]=c.exports},"6ce5":function(t,n,e){var a=e("dc5d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("58bbfb96",a,!0,{sourceMap:!1,shadowMode:!1})},8229:function(t,n,e){"use strict";var a=e("169b"),i=e.n(a);i.a},"8caa":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={newsbox:e("0034").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"home"},[a("v-uni-scroll-view",{staticClass:"navscroll",attrs:{"scroll-x":!0}},t._l(t.navArr,(function(n,e){return a("v-uni-view",{key:n.id,staticClass:"item",class:e==t.navIndex?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickNav(e,n.id)}}},[t._v(t._s(n.classname))])})),1),a("v-uni-view",{staticClass:"content"},t._l(t.newsArr,(function(n){return a("div",{key:n.id,staticClass:"row"},[a("newsbox",{attrs:{item:n},nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail(n)}}})],1)})),0),t.newsArr.length?t._e():a("v-uni-view",{staticClass:"nodata"},[a("v-uni-image",{attrs:{src:e("a11b"),mode:"widthFix"}})],1),t.newsArr.length?a("v-uni-view",{staticClass:"loading"},[1==t.loading?a("v-uni-view",[t._v("数据加载中...")]):t._e(),2==t.loading?a("v-uni-view",[t._v("没有更多了~~")]):t._e()],1):t._e()],1)},r=[]},"9e5d":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.navscroll[data-v-996d054a]{height:%?100?%;background:#f7f8fa;white-space:nowrap;position:fixed;top:var(--window-top);left:0;z-index:10}.navscroll[data-v-996d054a] ::-webkit-scrollbar{width:4px!important;height:1px!important;overflow:auto!important;background:transparent!important;-webkit-appearance:auto!important;display:block}.navscroll .item[data-v-996d054a]{font-size:%?40?%;display:inline-block;line-height:%?100?%;padding:0 %?30?%;color:#333}.navscroll .item.active[data-v-996d054a]{color:#31c27c}.content[data-v-996d054a]{padding:%?30?%;padding-top:%?130?%}.content .row[data-v-996d054a]{border-bottom:1px dotted #efefef;padding:%?20?% 0}.nodata[data-v-996d054a]{display:flex;justify-content:center}.nodata uni-image[data-v-996d054a]{width:%?360?%}.loading[data-v-996d054a]{text-align:center;font-size:%?26?%;color:#888;line-height:2em}',""]),t.exports=n},a11b:function(t,n,e){t.exports=e.p+"static/img/nodata.56986da7.png"},db90:function(t,n,e){"use strict";function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("d3b7"),e("3ca3"),e("ddb0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=a},dc5d:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.newsbox[data-v-110f2a22]{display:flex}.newsbox .pic[data-v-110f2a22]{width:%?230?%;height:%?160?%}.newsbox .pic uni-image[data-v-110f2a22]{width:100%;height:100%}.newsbox .text[data-v-110f2a22]{flex:1;padding-left:%?20?%;display:flex;flex-direction:column;justify-content:space-between}.newsbox .text .title[data-v-110f2a22]{font-size:%?36?%;color:#333;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.newsbox .text .info[data-v-110f2a22]{font-size:%?26?%;color:#999}.newsbox .text .info uni-text[data-v-110f2a22]{padding-right:%?30?%}',""]),t.exports=n},e539:function(t,n,e){"use strict";e.r(n);var a=e("44aa"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},f72b:function(t,n,e){"use strict";e.r(n);var a=e("287c"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a}}]);