webpackJsonp([0],{As4C:function(t,e,s){var a={"./slider-0.png":"kz8b","./slider-1.png":"K11k","./slider-2.png":"LWjq"};function n(t){return s(r(t))}function r(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="As4C"},K11k:function(t,e,s){t.exports=s.p+"static/img/slider-1.e03b313.png"},LWjq:function(t,e,s){t.exports=s.p+"static/img/slider-2.27511e4.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"masterhead"},[e("div",{staticClass:"masterhead__logo"},[e("a",{attrs:{href:"https://www.google.com"}},[this._v("Website Logo")])])])}]},r=s("VU/8")({name:"masterhead"},n,!1,null,null,null).exports,i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider",style:{"background-image":"url("+s("As4C")("./slider-"+t.currentPage+".png")+")"}},[a("div",{staticClass:"slider__content"},[a("div",{staticClass:"slider__text"},t._l(t.sliders,function(e,s){return s===t.currentPage?a("div",{class:"slider__text--"+e},[a("h2",[t._v(t._s(t.sliders[s].title))]),t._v(" "),a("small",[t._v(t._s(t.sliders[s].desc))])]):t._e()})),t._v(" "),a("ul",{staticClass:"slider__arrow"},[0!==t.currentPage?a("li",{staticClass:"slider__arrow--left",on:{click:function(e){t.navigatePage("prev")}}}):t._e(),t._v(" "),t.currentPage!==this.sliders.length-1?a("li",{staticClass:"slider__arrow--right",on:{click:function(e){t.navigatePage("next")}}}):t._e()]),t._v(" "),a("ul",{staticClass:"slider__pager"},t._l(t.sliders,function(e,s){return a("li",{class:{active:s===t.currentPage},on:{click:function(e){t.setActivePager(s)}}})}))])])},staticRenderFns:[]},o=s("VU/8")({name:"slider",data:function(){return{currentPage:0,sliders:[{title:"1キャッチコピーが入ります。",desc:"1サンプルテキストサンプルテキストサンプルテキストサンプルテキスト サンプルテキストサンプルテキストサンプルテキストサンプルテキ"},{title:"2キャッチコピーが入ります。",desc:"2サンプルテキストサンプルテキストサンプルテキストサンプルテキスト サンプルテキストサンプルテキストサンプルテキストサンプルテキ"},{title:"3キャッチコピーが入ります。",desc:"3サンプルテキストサンプルテキストサンプルテキストサンプルテキスト サンプルテキストサンプルテキストサンプルテキストサンプルテキ"}]}},methods:{setActivePager:function(t){this.currentPage=t},navigatePage:function(t){"next"===t?this.currentPage<this.sliders.length-1&&this.currentPage++:this.currentPage>0?this.currentPage--:this.currentPage}}},i,!1,null,null,null).exports,c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommendation",on:{mouseover:function(e){t.value.showHoverImage=!0},mouseout:function(e){t.value.showHoverImage=!1}}},[a("a",{attrs:{href:"https://www.google.com"}}),t._v(" "),a("div",{staticClass:"recommendation__layout recommendation__img"},[t.value.showHoverImage?t._e():a("img",{attrs:{src:s("TchP")}}),t._v(" "),t.value.showHoverImage?a("img",{attrs:{src:s("mty1")}}):t._e()]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recommendation__layout recommendation__content"},[e("h3",{staticClass:"recommendation__title"},[this._v("サンプルテキストサンプルテキストサンプルテキストサンプルテキスト")]),this._v(" "),e("div",{staticClass:"recommendation__date"},[this._v("2016.03.26")])])}]},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ads"},t._l(3,function(e){return s("div",{staticClass:"ads__item"},[s("a",{attrs:{href:"https://www.google.com"}}),t._v(" "),s("span",[t._v("Dummy banner")]),t._v(" "),s("img",{attrs:{src:"",alt:""}})])}))},staticRenderFns:[]},_={name:"sidebar",components:{Recommendation:s("VU/8")({name:"recommendation",data:function(){return{}},props:{value:{}}},c,!1,null,null,null).exports,Ads:s("VU/8")({name:"ads"},l,!1,null,null,null).exports},data:function(){return{data:[{id:1,showHoverImage:!1},{id:2,showHoverImage:!1},{id:3,showHoverImage:!1},{id:4,showHoverImage:!1}]}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar"},[this._m(0),this._v(" "),e("div",{staticClass:"sidebar__layout sidebar__recommendations"},[e("h2",[this._v("Recommend")]),this._v(" "),this._l(this.data,function(t){return e("recommendation",{key:t.id,attrs:{value:t}})}),this._v(" "),e("ads")],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar__layout sidebar__banner"},[e("a",{attrs:{href:"https://www.google.com"}}),this._v(" "),e("img",{attrs:{src:"",alt:""}}),this._v(" "),e("span",[this._v("Dummy banner")])])}]},u={name:"app-content",components:{Sidebar:s("VU/8")(_,d,!1,null,null,null).exports},data:function(){return{showHoverImage:!1,data:[{id:1,showHoverImage:!1},{id:2,showHoverImage:!1},{id:3,showHoverImage:!1},{id:4,showHoverImage:!1},{id:5,showHoverImage:!1},{id:6,showHoverImage:!1},{id:7,showHoverImage:!1},{id:8,showHoverImage:!1},{id:9,showHoverImage:!1},{id:10,showHoverImage:!1}]}},method:{}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-content"},[a("div",{staticClass:"app-content__layout app-content__layout--articles"},[t._l(t.data,function(e){return a("div",{staticClass:"article",on:{mouseover:function(t){e.showHoverImage=!0},mouseout:function(t){e.showHoverImage=!1}}},[a("a",{attrs:{href:"https://www.google.com"}}),t._v(" "),a("div",{staticClass:"article__layout article__img"},[e.showHoverImage?t._e():a("img",{attrs:{src:s("TchP")}}),t._v(" "),e.showHoverImage?a("img",{attrs:{src:s("mty1")}}):t._e()]),t._v(" "),t._m(0,!0)])}),t._v(" "),t._m(1)],2),t._v(" "),a("div",{staticClass:"app-content__layout app-content__layout--sidebar"},[a("sidebar")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"article__layout article__content"},[e("div",{staticClass:"article__date"},[this._v("2016.01.01")]),this._v(" "),e("h3",{staticClass:"article__title"},[this._v("サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト")]),this._v(" "),e("div",{staticClass:"article__desc"},[this._v("サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキス")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-content__more"},[e("a",{attrs:{href:"https://www.google.com"}}),this._v(" "),e("span",[this._v("More")]),this._v(" "),e("i",{staticClass:"ico ico-arrow"})])}]},v={name:"app-footer",created:function(){},methods:{backToTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},computed:{showBackToTopBtn:function(){return document.body.scrollTop>20||document.documentElement.scrollTop>20}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-footer"},[s("div",{staticClass:"app-footer__inner"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"back-to-top",on:{click:function(e){t.backToTop()}}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"app-footer__layout app-footer__nav"},[e("li",[e("a",{attrs:{href:"https://www.google.com"}}),this._v(" "),e("span",[this._v("運営会社")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.google.com"}}),this._v(" "),e("span",[this._v("個人情報保護について")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-footer__layout app-footer__copyright"},[e("span",[this._v("©2016 Sample")])])}]},p={name:"App",components:{Masterhead:r,Slider:o,AppContent:s("VU/8")(u,m,!1,null,null,null).exports,AppFooter:s("VU/8")(v,h,!1,null,null,null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"main-wrapper index-page"},[e("masterhead"),this._v(" "),e("slider"),this._v(" "),e("app-content"),this._v(" "),e("app-footer")],1)])},staticRenderFns:[]},f=s("VU/8")(p,g,!1,null,null,null).exports,w=s("/ocq");a.a.use(w.a);var C=new w.a({mode:"history",routes:[{path:"/"}]});s("M4fF"),s("pOKD");a.a.config.productionTip=!1,new a.a({el:"#app",router:C,components:{App:f},template:"<App/>"})},TchP:function(t,e,s){t.exports=s.p+"static/img/article.5dad2fa.png"},kz8b:function(t,e,s){t.exports=s.p+"static/img/slider-0.df9d043.png"},mty1:function(t,e,s){t.exports=s.p+"static/img/article_hov.1688604.png"},pOKD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.223f039a5195b7ad1d0c.js.map