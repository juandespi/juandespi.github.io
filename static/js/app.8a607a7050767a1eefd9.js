webpackJsonp([0],{As4C:function(t,e,s){var a={"./slider-0.png":"kz8b","./slider-1.png":"K11k","./slider-2.png":"LWjq"};function i(t){return s(n(t))}function n(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="As4C"},K11k:function(t,e,s){t.exports=s.p+"static/img/slider-1.e03b313.png"},LWjq:function(t,e,s){t.exports=s.p+"static/img/slider-2.27511e4.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"masterhead"},[e("div",{staticClass:"masterhead__logo"},[e("a",{staticClass:"masterhead__link",attrs:{href:"https://www.google.com"}},[this._v("Website Logo")])])])}]},n=s("VU/8")({name:"masterhead"},i,!1,null,null,null).exports,r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider"},[a("ul",{staticClass:"slider__arrow"},[0!==t.currentPage?a("li",{staticClass:"slider__arrow--left",on:{click:function(e){t.navigatePage("left")}}}):t._e(),t._v(" "),t.currentPage!==this.sliders.length-1?a("li",{staticClass:"slider__arrow--right",on:{click:function(e){t.navigatePage("right")}}}):t._e()]),t._v(" "),a("ul",{staticClass:"slider__inner",class:"slider__inner-page"+t.currentPage},t._l(t.sliders,function(e,i){return a("li",{staticClass:"slider__item"},[a("img",{staticClass:"slider__img",attrs:{src:s("As4C")("./slider-"+i+".png"),alt:"Slider image"}}),t._v(" "),a("div",{staticClass:"slider__text"},[a("h2",{staticClass:"slider__heading"},[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"slider__desc"},[t._v(t._s(e.desc))])])])})),t._v(" "),a("ul",{staticClass:"slider__pager"},t._l(t.sliders,function(e,s){return a("li",{class:{active:s===t.currentPage},on:{click:function(e){t.setActivePager(s)}}})}))])},staticRenderFns:[]},o=s("VU/8")({name:"slider",data:function(){return{currentPage:0,sliders:[{title:"1キャッチコピーが入ります。",desc:"1サンプルテキストサンプルテキストサンプルテキストサンプルテキスト サンプルテキストサンプルテキストサンプルテキストサンプルテキ"},{title:"2キャッチコピーが入ります。",desc:"2サンプルテキストサンプルテキストサンプルテキストサンプルテキスト サンプルテキストサンプルテキストサンプルテキストサンプルテキ"},{title:"3キャッチコピーが入ります。",desc:"3サンプルテキストサンプルテキストサンプルテキストサンプルテキスト サンプルテキストサンプルテキストサンプルテキストサンプルテキ"}]}},methods:{setActivePager:function(t){this.currentPage=t},navigatePage:function(t){"right"===t?this.currentPage<this.sliders.length-1&&this.currentPage++:this.currentPage>0?this.currentPage--:this.currentPage}},computed:{sliderWidth:function(){}}},r,!1,null,null,null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("a",{staticClass:"banner__link",attrs:{href:"https://www.google.com"}}),this._v(" "),e("span",{staticClass:"banner__title"},[this._v("Dummy banner")])])}]},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommendation",on:{mouseover:function(e){t.value.showHoverImage=!0},mouseout:function(e){t.value.showHoverImage=!1}}},[a("a",{staticClass:"recommendation__link",attrs:{href:"https://www.google.com"}}),t._v(" "),a("div",{staticClass:"recommendation__layout recommendation__img"},[a("img",{directives:[{name:"show",rawName:"v-show",value:!t.value.showHoverImage,expression:"!value.showHoverImage"}],attrs:{src:s("TchP")}}),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:t.value.showHoverImage,expression:"value.showHoverImage"}],attrs:{src:s("mty1")}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recommendation__layout recommendation__content"},[e("h3",{staticClass:"recommendation__title"},[this._v("サンプルテキストサンプルテキストサンプルテキストサンプルテキスト")]),this._v(" "),e("div",{staticClass:"recommendation__date"},[this._v("2016.03.26")])])}]},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"advs"},t._l(3,function(e){return s("li",{staticClass:"advs__item"},[s("a",{staticClass:"advs__link",attrs:{href:"https://www.google.com"}}),t._v(" "),s("span",{staticClass:"advs__title"},[t._v("Dummy banner")])])}))},staticRenderFns:[]},u={name:"sidebar",components:{Banner:s("VU/8")({name:"banner"},l,!1,null,null,null).exports,Recommendation:s("VU/8")({name:"recommendation",data:function(){return{}},props:{value:{}}},c,!1,null,null,null).exports,Advs:s("VU/8")({name:"ads"},_,!1,null,null,null).exports},data:function(){return{data:[{id:1,showHoverImage:!1},{id:2,showHoverImage:!1},{id:3,showHoverImage:!1},{id:4,showHoverImage:!1}]}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar"},[e("div",{staticClass:"sidebar__layout sidebar__banner"},[e("banner")],1),this._v(" "),e("div",{staticClass:"sidebar__layout sidebar__recommendations"},[e("h2",[this._v("Recommend")]),this._v(" "),this._l(this.data,function(t){return e("recommendation",{key:t.id,attrs:{value:t}})}),this._v(" "),e("advs")],2)])},staticRenderFns:[]},v=s("VU/8")(u,d,!1,null,null,null).exports,m={name:"app-article",components:{Sidebar:v},props:{value:{}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"article",on:{mouseover:function(e){t.value.showHoverImage=!0},mouseout:function(e){t.value.showHoverImage=!1}}},[a("a",{staticClass:"article__link",attrs:{href:"https://www.google.com"}}),t._v(" "),a("div",{staticClass:"article__layout article__img"},[a("img",{directives:[{name:"show",rawName:"v-show",value:!t.value.showHoverImage,expression:"!value.showHoverImage"}],attrs:{src:s("TchP")}}),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:t.value.showHoverImage,expression:"value.showHoverImage"}],attrs:{src:s("mty1")}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"article__layout article__content"},[e("div",{staticClass:"article__date"},[this._v("2016.01.01")]),this._v(" "),e("h3",{staticClass:"article__title"},[this._v("サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト")]),this._v(" "),e("div",{staticClass:"article__desc"},[this._v("サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキス")])])}]},p={name:"app-content",components:{AppArticle:s("VU/8")(m,h,!1,null,null,null).exports,Sidebar:v},data:function(){return{showHoverImage:!1,data:[{id:1,showHoverImage:!1},{id:2,showHoverImage:!1},{id:3,showHoverImage:!1},{id:4,showHoverImage:!1},{id:5,showHoverImage:!1},{id:6,showHoverImage:!1},{id:7,showHoverImage:!1},{id:8,showHoverImage:!1},{id:9,showHoverImage:!1},{id:10,showHoverImage:!1}]}},method:{}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-content"},[e("main",{staticClass:"app-content__layout app-content__layout--articles"},[e("div",{staticClass:"app-content__articles"},this._l(this.data,function(t,s){return e("app-article",{key:s,attrs:{value:t}})})),this._v(" "),this._m(0)]),this._v(" "),e("aside",{staticClass:"app-content__layout app-content__layout--sidebar"},[e("sidebar")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-content__more"},[e("a",{attrs:{href:"https://www.google.com"}}),this._v(" "),e("span",[this._v("More")]),this._v(" "),e("i",{staticClass:"ico ico-arrow"})])}]},g={name:"app-footer",created:function(){},methods:{backToTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},computed:{showBackToTopBtn:function(){return document.body.scrollTop>20||document.documentElement.scrollTop>20}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"app-footer"},[s("div",{staticClass:"app-footer__inner"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"back-to-top",on:{click:function(e){t.backToTop()}}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"app-footer__layout app-footer__nav"},[e("li",{staticClass:"app-footer__nav-item"},[e("a",{staticClass:"app-footer__link",attrs:{href:"https://www.google.com"}}),this._v(" "),e("span",[this._v("運営会社")])]),this._v(" "),e("li",{staticClass:"app-footer__nav-item"},[e("a",{staticClass:"app-footer__link",attrs:{href:"https://www.google.com"}}),this._v(" "),e("span",[this._v("個人情報保護について")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-footer__layout app-footer__copyright"},[e("span",[this._v("©2016 Sample")])])}]},C={name:"App",components:{Masterhead:n,Slider:o,AppContent:s("VU/8")(p,f,!1,null,null,null).exports,AppFooter:s("VU/8")(g,w,!1,null,null,null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"main-wrapper index-page"},[e("masterhead"),this._v(" "),e("slider"),this._v(" "),e("app-content"),this._v(" "),e("app-footer")],1)])},staticRenderFns:[]},H=s("VU/8")(C,b,!1,null,null,null).exports,I=s("/ocq");a.a.use(I.a);var y=new I.a({mode:"history",routes:[{path:"/"}]});s("M4fF"),s("pOKD");a.a.config.productionTip=!1,new a.a({el:"#app",router:y,components:{App:H},template:"<App/>"})},TchP:function(t,e,s){t.exports=s.p+"static/img/article.5dad2fa.png"},kz8b:function(t,e,s){t.exports=s.p+"static/img/slider-0.df9d043.png"},mty1:function(t,e,s){t.exports=s.p+"static/img/article_hov.1688604.png"},pOKD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8a607a7050767a1eefd9.js.map