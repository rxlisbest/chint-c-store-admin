(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75e290e4"],{"0dfb":function(t,e,a){},"1f80":function(t,e,a){"use strict";var o=a("0dfb"),n=a.n(o);n.a},"3f5e":function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"a",function(){return s});var o=a("b775");function n(t){return Object(o["a"])({url:"/index/files/save",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/index/files/read/id/"+t,method:"get"})}},"4a4a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("detail",{attrs:{"is-edit":!1}})},n=[],s=a("e005"),i={name:"CreateForm",components:{Detail:s["a"]}},r=i,c=a("2877"),l=Object(c["a"])(r,o,n,!1,null,null,null);e["default"]=l.exports},"73f5":function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s}),a.d(e,"c",function(){return i}),a.d(e,"f",function(){return r}),a.d(e,"d",function(){return c}),a.d(e,"e",function(){return l});var o=a("b775");function n(t){return Object(o["a"])({url:"/index/stores/index",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/index/stores/read/id/".concat(t),method:"get"})}function i(t){return Object(o["a"])({url:"/index/stores/save",method:"post",data:t})}function r(t,e){return Object(o["a"])({url:"/index/stores/update/id/".concat(t),method:"put",data:e})}function c(t){return Object(o["a"])({url:"/index/stores/statisticCreate",method:"get",params:t})}function l(t){return Object(o["a"])({url:"/index/stores/statisticNow",method:"get",params:t})}},"828d":function(t,e,a){"use strict";a.d(e,"a",function(){return n});var o=a("b775");function n(t){return Object(o["a"])({url:"/search/user",method:"get",params:{name:t}})}},e005:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createPost-container"},[a("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm}},[a("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.status}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.$t("messages.stores.button.submit"))+"\n      ")])],1),t._v(" "),a("div",{staticClass:"createPost-main-container"},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[a("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}},[t._v("\n          "+t._s(t.$t("messages.stores.input.name"))+"\n        ")])],1),t._v(" "),t.parent_id>0||t.isEdit&&t.postForm.parent_id>0?a("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"cover_file_id","label-width":"72px",label:t.$t("messages.stores.input.module_id")}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postForm.module_id,callback:function(e){t.$set(t.postForm,"module_id",e)},expression:"postForm.module_id"}},t._l(t.module_options,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1):t._e(),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}}),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"cover_file_id","label-width":"72px",label:t.$t("messages.stores.input.cover_file_id")}},[a("Upload",{model:{value:t.postForm.cover_file_id,callback:function(e){t.$set(t.postForm,"cover_file_id",e)},expression:"postForm.cover_file_id"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.phone")}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.phone,callback:function(e){t.$set(t.postForm,"phone",e)},expression:"postForm.phone"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.area_code")}},[a("el-cascader",{attrs:{options:t.area_options,props:t.area_props},on:{"active-item-change":t.handleAreaItemChange,change:t.handleAreaChange},model:{value:t.postForm.area_code,callback:function(e){t.$set(t.postForm,"area_code",e)},expression:"postForm.area_code"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.address")}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},on:{blur:t.resetMap},model:{value:t.postForm.address,callback:function(e){t.$set(t.postForm,"address",e)},expression:"postForm.address"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.lat_lng")}},[a("div",{staticClass:"amap-wrapper",attrs:{id:"amap-demo1"}})]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.introduce")}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.introduce,callback:function(e){t.$set(t.postForm,"introduce",e)},expression:"postForm.introduce"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.business_scope")}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.business_scope,callback:function(e){t.$set(t.postForm,"business_scope",e)},expression:"postForm.business_scope"}})],1)],1)],1)],1)},n=[],s=(a("ac6a"),a("7f7f"),a("fbf8")),i=a("1aba"),r=a("b804"),c=(a("61f7"),a("73f5")),l=a("828d"),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[t._v("\n  Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support\n  caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching\n  effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all\n  pages directly. See details\n  "),a("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html",target:"_blank"}},[t._v("Document")])])}],p=a("2877"),m={},h=Object(p["a"])(m,u,d,!1,null,null,null),f=h.exports,g=a("8f9b"),b=a("5c96"),_=a("b775");function v(t){return Object(_["a"])({url:"/index/areas/index",method:"get",params:t})}function x(t){return Object(_["a"])({url:"/index/modules/index",method:"get",params:t})}var F={name:"",module_id:void 0,parent_id:0,cover_file_id:void 0,area_code:[],location:"",lat:"",lng:"",phone:"",address:"",introduce:"",business_scope:""},w={name:"Detail",components:{MDinput:i["a"],Upload:s["a"],Sticky:r["a"],Warning:f},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{module_id:0,parent_id:0,map:void 0,zoom:16,center:[121.59996,31.197646],postForm:Object.assign({},F),loading:!1,userListOptions:[],tempRoute:{},area_props:{value:"code",label:"name",children:"children"},area_options:[],module_options:[]}},computed:{},watch:{},created:function(){if(this.center=[121.59996,31.197646],this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=Object.assign({},F);this.module_id=this.$route.meta.module_id,this.$route.query&&this.$route.query.parent_id?(this.parent_id=this.postForm.parent_id=this.$route.query&&this.$route.query.parent_id,this.indexModule(this.module_id)):this.postForm.module_id=this.module_id,this.tempRoute=Object.assign({},this.$route)},mounted:function(){var t=this;setTimeout(function(){var e=this;g["lazyAMapApiLoaderInstance"].load().then(function(){function a(t){}function o(t){Object(b["Message"])(t.message)}t.isEdit?e.map=new AMap.Map("amap-demo1",{center:[t.postForm.lng,t.postForm.lat],zoom:16}):(e.map=new AMap.Map("amap-demo1",{resizeEnable:!0,zoom:16}),AMap.plugin("AMap.Geolocation",function(){var t=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonPosition:"RB",buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0});setTimeout(function(){n.addControl(t)},0),t.getCurrentPosition(function(t,e){"complete"==t?a(e):o(e)})}));var n=t.map=e.map;if(t.isEdit){var s=new AMap.Marker({icon:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",position:[t.postForm.lng,t.postForm.lat]});n.add(s)}e.map.on("click",function(e){var a=new AMap.Marker({icon:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",position:[e.lnglat.getLng(),e.lnglat.getLat()]});n.clearMap(),n.add(a);var o=e.lnglat.getLng(),s=e.lnglat.getLat();t.postForm.lng=o,t.postForm.lat=s})})},1e3),this.initArea()},methods:{indexModule:function(t){var e=this;x({parent_id:t}).then(function(t){e.module_options=t.data}).catch(function(t){console.log(t)})},fetchData:function(t){var e=this;Object(c["b"])(t).then(function(t){e.postForm=t.data,e.postForm.parent_id>0&&e.indexModule(1),e.initEditArea()}).catch(function(t){console.log(t)})},setTagsViewTitle:function(){var t="Edit Article",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.postForm.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="Edit Article";document.title="".concat(t," - ").concat(this.postForm.id)},submitForm:function(){var t=this;this.loading=!0,this.isEdit?Object(c["f"])(this.postForm.id,this.postForm).then(function(e){1==e.code&&t.$notify({title:t.$t("messages.title.success"),message:t.$t("messages.success"),type:"success",duration:2e3,onClose:function(){t.$router.go(-1)}}),t.loading=!1}).catch(function(){t.loading=!1}):Object(c["c"])(this.postForm).then(function(e){1==e.code&&t.$notify({title:t.$t("messages.title.success"),message:t.$t("messages.success"),type:"success",duration:2e3,onClose:function(){t.$router.go(-1)}}),t.loading=!1}).catch(function(){t.loading=!1})},getRemoteUserList:function(t){var e=this;Object(l["a"])(t).then(function(t){t.data.items&&(e.userListOptions=t.data.items.map(function(t){return t.name}))})},handleAreaChange:function(t){this.getAreaName(t)},handleAreaItemChange:function(t){var e=this,a={};a.code=t[t.length-1],v(a).then(function(a){e.setAreaChildren(t[t.length-1],a.data)}).catch(function(t){})},initArea:function(){var t=this;v().then(function(e){var a=e.data;a.forEach(function(t,e){a[e].children=[]}),t.area_options=a}).catch(function(t){})},initEditArea:function(){var t=this;if(t.postForm.area_code&&3==t.postForm.area_code.length){var e={};e.code=t.postForm.area_code[0],v(e).then(function(a){t.setAreaChildren(t.postForm.area_code[0],a.data),e.code=t.postForm.area_code[1],v(e).then(function(e){t.setAreaChildren(t.postForm.area_code[1],e.data)}).catch(function(t){})}).catch(function(t){})}},setAreaChildren:function(t,e){var a=this;this.area_options;a.area_options.forEach(function(o,n){o.code==t?(e.forEach(function(t,a){e[a].children=[]}),a.area_options[n].children=e):o.children.forEach(function(o,s){o.code==t&&(a.area_options[n].children[s].children=e)})})},getAreaName:function(t){var e=this,a=(this.area_options,[]);return e.area_options.forEach(function(e,o){return e.code==t[0]&&(a.push(e.name),e.children.forEach(function(e,o){return e.code==t[1]&&(a.push(e.name),e.children.forEach(function(e,o){return e.code==t[2]&&a.push(e.name),!0})),!0})),!0}),a},resetMap:function(){var t=this,e=this.getAreaName(this.postForm.area_code);e=e.join(" ");var a=e+" "+this.postForm.address;g["lazyAMapApiLoaderInstance"].load().then(function(){AMap.plugin("AMap.Geocoder",function(){var e=new AMap.Geocoder,o=new AMap.Marker;e.getLocation(a,function(e,a){if("complete"===e&&a.geocodes.length){var n=a.geocodes[0].location;o.setPosition(n),t.map.setFitView(o)}else log.error("根据地址查询位置失败")})})})}}},$=w,y=(a("1f80"),Object(p["a"])($,o,n,!1,null,"6ff94f3a",null));e["a"]=y.exports}}]);