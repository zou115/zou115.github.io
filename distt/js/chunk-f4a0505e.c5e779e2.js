(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4a0505e"],{"59ed":function(t,e,s){"use strict";var a=s("d2a5"),l=s.n(a);l.a},adb6:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-nav-bar",{attrs:{title:"找回密码","left-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),s("div",{staticClass:"xmc_bk"},[s("van-field",{attrs:{center:"",clearable:"",placeholder:"请输入手机号"},scopedSlots:t._u([{key:"button",fn:function(){return[s("button",{directives:[{name:"show",rawName:"v-show",value:!t.flag,expression:"!flag"}],staticClass:"xmc_btn",on:{click:t.xgyz}},[t._v("发送验证码")]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"xmc_btn clock",attrs:{disabled:""}},[t._v("60秒后重试")])]},proxy:!0}]),model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),s("div",{staticClass:"xmc_bk1"},[s("van-cell-group",[s("van-field",{attrs:{placeholder:"请输入短信验证码"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),s("div",{staticClass:"xmc_bk2"},[s("van-field",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("div",{staticClass:"xmc_tj"},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"linear-gradient(to right, #ff6034, #ee0a24)"},on:{click:t.tj}},[t._v("登录")])],1)],1)},l=[],o=s("1157"),i=s.n(o),n={name:"",props:[],components:{},data(){return{tel:"",value:"",password:"",flag:!1}},computed:{},watch:{},methods:{onClickLeft(){this.$router.go(-1)},xgyz(){let t=new RegExp(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/);if(console.log(this.tel),!t.test(this.tel))return this.$toast("请输入正确的手机号"),!1;this.flag=!0,this.sendCode(),this.$Axios.post("/api/app/smsCode",{mobile:this.tel,sms_type:"getPassword"}).then(t=>{console.log(t)})},tj(){let t=new RegExp(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/);return console.log(this.tel),t.test(this.tel)?""==this.value?(this.$toast("请输入验证码"),!1):""==this.password?(this.$toast("请输入密码"),!1):void this.$Axios.post("/api/app/password",{mobile:this.tel,password:this.password,sms_code:this.value}).then(t=>{console.log(t),this.$router.push("/login")}):(this.$toast("请输入正确的手机号"),!1)},sendCode(){let t=60,e=setInterval(()=>{t--,i()(".clock").html(t+"秒后重试"),0==t&&(this.flag=!1,console.log(this.flag),clearInterval(e),i()(".clock").hide().siblings().show())},1e3)}},created(){},mounted(){},updated(){},activated(){},deactivated(){}},c=n,r=(s("59ed"),s("2877")),d=Object(r["a"])(c,a,l,!1,null,"3718a38c",null);e["default"]=d.exports},d2a5:function(t,e,s){}}]);
//# sourceMappingURL=chunk-f4a0505e.c5e779e2.js.map