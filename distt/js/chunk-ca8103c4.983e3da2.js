(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca8103c4"],{"1ab4":function(t,e,n){"use strict";var r=n("3c82"),a=n.n(r);a.a},"3c82":function(t,e,n){},"7c15":function(t,e,n){"use strict";n.d(e,"i",(function(){return i})),n.d(e,"o",(function(){return u})),n.d(e,"n",(function(){return o})),n.d(e,"m",(function(){return c})),n.d(e,"e",(function(){return s})),n.d(e,"l",(function(){return p})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return l})),n.d(e,"p",(function(){return f})),n.d(e,"g",(function(){return m})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return g})),n.d(e,"a",(function(){return b})),n.d(e,"j",(function(){return _})),n.d(e,"h",(function(){return j})),n.d(e,"k",(function(){return O}));var r=n("be3b"),a=n("3b59");function i(){return Object(r["a"])({url:"/api/app/userInfo",method:"GET"})}function u(){return Object(r["a"])({url:"/api/app/userInfo",method:"GET"})}function o(t){return Object(r["a"])({url:"/api/app/user",method:"PUT",data:{nickname:t}})}function c(t){return Object(r["a"])({url:"/api/app/user",method:"PUT",data:{sex:t}})}function s(t){return Object(r["a"])({url:`/api/app/sonArea/${t}?`,method:"GET"})}function p(){return Object(r["a"])({url:"/api/app/sonArea/0?",method:"get"})}function d(t){return Object(r["a"])({url:`/api/app/sonArea/${t}?`,method:"get"})}function l(){return Object(r["a"])({url:"api/app/module/attribute/1?",method:"get"})}function f(t){return Object(r["a"])({url:"/api/app/vip/grade",method:"get"})}function m(t,e){return Object(r["a"])({url:"/api/app/order/downOrder",method:"post",data:{shop_id:t,type:e}})}function h(t){return Object(r["a"])({url:"/api/app/user",method:"put",data:t})}function g(t,e,n){return Object(r["a"])({url:"/api/app/user",method:"put",data:{province_id:t,city_id:e,district_id:n}})}function b(t){return Object(r["a"])({url:"/api/app/public/img",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/api/app/message/classifyMessage",method:"post"})}function j(t){return Object(r["a"])({url:"/api/app/feedback",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/api/app/message/getMessage",method:"post",data:t})}console.log(a["a"].NewGuid().ToString("D"))},fede:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"msg"},[n("van-nav-bar",{attrs:{title:"课程通知","left-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"jh_messageDetail_cont"},[n("ul",t._l(t.list,(function(e,r){return n("li",{key:r},[n("p",[t._v(t._s(t._f("timeA")(1e3*e.created_at)))]),n("p",[t._v(" "+t._s(e.content)+" "),1===e.link_type?n("router-link",{attrs:{to:{path:"/orderDetail",query:{order_id:e.order_id}},tag:"span"}},[t._v("点击支付>>")]):t._e()],1)])})),0),n("p",[t._v("没有更多了")])])],1)},a=[],i=n("7c15"),u={components:{},data(){return{title:"",message_classify:"",limit:10,page:1,list:[]}},created(){this.title=this.$route.query.title,this.message_classify=this.$route.query.message_classify},mounted(){this.getMessage()},methods:{async getMessage(){let t={message_classify:this.message_classify,limit:this.limit,page:this.page},{data:e}=await Object(i["k"])(t);console.log(e),this.list=e.data.list},onClickLeft(){this.$router.go(-1)}}},o=u,c=(n("1ab4"),n("2877")),s=Object(c["a"])(o,r,a,!1,null,"610c9f6a",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-ca8103c4.983e3da2.js.map