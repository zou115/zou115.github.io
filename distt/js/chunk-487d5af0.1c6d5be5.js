(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-487d5af0"],{"36eb":function(t,e,i){},"548b":function(t,e,i){"use strict";var s=i("36eb"),a=i.n(s);a.a},b255:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("van-nav-bar",{attrs:{title:"我的收藏","left-arrow":"",fixed:!0},on:{"click-left":t.onClickLeft}}),s("div",{staticClass:"cont"},[s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.newList,(function(e,a){return s("dl",{key:a},[s("span",{staticClass:"xing",on:{click:function(i){return t.qxsc(e.collect_id)}}},[t._v("★")]),s("dt",{on:{click:function(i){return t.jbrXq(e.course_id,e)}}},[s("p",{staticClass:"title"},[t._v(t._s(e.title))]),s("van-icon",{staticClass:"jbr_icon",attrs:{name:"clock-o"}}),s("span",[t._v(t._s(t._f("time")(e.start_play_date))+" | 共"+t._s(e.total_periods)+"课时")]),s("div",{staticClass:"jbr_lq"},[s("img",{attrs:{src:e.teachersAvatar,alt:""}}),s("span",[t._v(t._s(e.teachers))])])],1),s("dd",{on:{click:function(i){return t.jbrXq(e.course_id,e)}}},[s("p",[s("span",[t._v(t._s(e.sales_num)+"人已报名")]),s("span",{staticClass:"jbr_jg",style:{color:(e.price,"red")}},[s("img",{directives:[{name:"show",rawName:"v-show",value:e.price>0,expression:"item.price>0"}],attrs:{src:i("875b"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:0==e.price,expression:"item.price==0"}],attrs:{src:i("875b"),alt:""}}),t._v(" "+t._s(e.price>0?(e.price/100).toFixed(2):e.price)+" ")])])])])})),0)],1)],1)},a=[],n={data(){return{newList:[],loading:!1,finished:!1}},created(){},mounted(){this.newlist()},methods:{onClickLeft(){this.$router.go(-1)},async newlist(){let{data:t}=await this.$Axios.get("/api/app/collect?page=1&limit=10&type=1");console.log(t),this.newList=t.data.list},onLoad(){setTimeout(()=>{this.loading=!1,this.newList.length>=this.newList.length&&(this.finished=!0)},1e3)},jbrXq(t,e){this.$router.push({path:"/cod",query:{id:t,item:e}})},async qxsc(t){let{data:e}=await this.$Axios.put(`/api/app/collect/cancel/${t}/1`);console.log(e),this.$toast("取消收藏成功"),setTimeout(()=>{this.newlist()},1e3)}}},c=n,o=(i("548b"),i("2877")),l=Object(o["a"])(c,s,a,!1,null,"46c5bcea",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-487d5af0.1c6d5be5.js.map