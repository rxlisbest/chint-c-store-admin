(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a43c670"],{"3f5e":function(t,e,o){"use strict";o.d(e,"b",function(){return n}),o.d(e,"a",function(){return s});var a=o("b775");function n(t){return Object(a["a"])({url:"/index/files/save",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/index/files/read/id/"+t,method:"get"})}},"6e42":function(t,e,o){},"73f5":function(t,e,o){"use strict";o.d(e,"b",function(){return n}),o.d(e,"c",function(){return s}),o.d(e,"d",function(){return i}),o.d(e,"g",function(){return r}),o.d(e,"a",function(){return c}),o.d(e,"e",function(){return l}),o.d(e,"f",function(){return u});var a=o("b775");function n(t){return Object(a["a"])({url:"/index/stores/index",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/index/stores/read/id/".concat(t),method:"get"})}function i(t){return Object(a["a"])({url:"/index/stores/save",method:"post",data:t})}function r(t,e){return Object(a["a"])({url:"/index/stores/update/id/".concat(t),method:"put",data:e})}function c(t){return Object(a["a"])({url:"/index/stores/delete/id/".concat(t),method:"delete"})}function l(t){return Object(a["a"])({url:"/index/stores/statisticCreate",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/index/stores/statisticNow",method:"get",params:t})}},7865:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("detail",{attrs:{"is-edit":!0}})},n=[],s=o("e005"),i={name:"EditForm",components:{Detail:s["a"]}},r=i,c=o("2877"),l=Object(c["a"])(r,a,n,!1,null,null,null);e["default"]=l.exports},"828d":function(t,e,o){"use strict";o.d(e,"a",function(){return n});var a=o("b775");function n(t){return Object(a["a"])({url:"/search/user",method:"get",params:{name:t}})}},"9e68":function(t,e,o){"use strict";var a=o("6e42"),n=o.n(a);n.a},e005:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm}},[o("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.status}},[o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v(t._s(t.$t("messages.stores.button.submit")))])],1),t._v(" "),o("div",{staticClass:"createPost-main-container"},[o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[o("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}},[t._v(t._s(t.$t("messages.stores.input.name")))])],1),t._v(" "),t.parent_id>0||t.isEdit&&t.postForm.parent_id>0?o("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"cover_file_id","label-width":"72px",label:t.$t("messages.stores.input.module_id")}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postForm.module_id,callback:function(e){t.$set(t.postForm,"module_id",e)},expression:"postForm.module_id"}},t._l(t.module_options,function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1):t._e(),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}}),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"cover_file_id","label-width":"72px",label:t.$t("messages.stores.input.cover_file_id")}},[o("Upload",{model:{value:t.postForm.cover_file_id,callback:function(e){t.$set(t.postForm,"cover_file_id",e)},expression:"postForm.cover_file_id"}})],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.business_hours")}},[o("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.business_hours,callback:function(e){t.$set(t.postForm,"business_hours",e)},expression:"postForm.business_hours"}})],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.phone")}},[o("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.phone,callback:function(e){t.$set(t.postForm,"phone",e)},expression:"postForm.phone"}})],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.area_code")}},[o("el-cascader",{attrs:{options:t.area_options,props:t.area_props},on:{"active-item-change":t.handleAreaItemChange,change:t.handleAreaChange},model:{value:t.postForm.area_code,callback:function(e){t.$set(t.postForm,"area_code",e)},expression:"postForm.area_code"}})],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.address")}},[o("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},on:{blur:t.resetMap},model:{value:t.postForm.address,callback:function(e){t.$set(t.postForm,"address",e)},expression:"postForm.address"}})],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.lat_lng")}},[o("div",{staticClass:"amap-wrapper",attrs:{id:"amap-demo1"}}),t._v(" "),o("div",{staticClass:"range-edit"},[o("div",{staticClass:"range-edit-button",staticStyle:{"margin-bottom":"5px"},on:{click:function(e){return t.polyEditor.open()}}},[t._v(t._s(t.$t("messages.stores.input.range_edit")))]),t._v(" "),o("div",{staticClass:"range-save-button",on:{click:function(e){return t.polyEditor.close()}}},[t._v(t._s(t.$t("messages.stores.input.range_save")))])])]),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.introduce")}},[o("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.introduce,callback:function(e){t.$set(t.postForm,"introduce",e)},expression:"postForm.introduce"}})],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.business_scope")}},[o("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.business_scope,callback:function(e){t.$set(t.postForm,"business_scope",e)},expression:"postForm.business_scope"}})],1)],1)],1)],1)},n=[],s=(o("6b54"),o("28a5"),o("ac6a"),o("7f7f"),o("fbf8")),i=o("1aba"),r=o("b804"),c=(o("61f7"),o("73f5")),l=o("828d"),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",[t._v("\n  Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support\n  caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching\n  effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all\n  pages directly. See details\n  "),o("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html",target:"_blank"}},[t._v("Document")])])}],p=o("2877"),m={},h=Object(p["a"])(m,u,d,!1,null,null,null),f=h.exports,g=o("8f9b"),b=o("5c96"),_=o("b775");function v(t){return Object(_["a"])({url:"/index/areas/index",method:"get",params:t})}function F(t){return Object(_["a"])({url:"/index/modules/index",method:"get",params:t})}var x=o("4128"),y={name:"",module_id:void 0,parent_id:0,cover_file_id:void 0,area_code:[],location:"",lat:"",lng:"",phone:"",business_hours:"",address:"",introduce:"",business_scope:"",range:[]},w={name:"Detail",components:{MDinput:i["a"],Upload:s["a"],Sticky:r["a"],Warning:f},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{module_id:0,parent_id:0,map:void 0,polyEditor:void 0,zoom:16,center:[121.59996,31.197646],postForm:Object.assign({},y),loading:!1,userListOptions:[],tempRoute:{},area_props:{value:"code",label:"name",children:"children"},area_options:[],module_options:[]}},computed:{},watch:{},created:function(){if(this.center=[121.59996,31.197646],this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=Object.assign({},y);this.module_id=this.$route.meta.module_id,this.$route.query&&this.$route.query.parent_id?(this.parent_id=this.postForm.parent_id=this.$route.query&&this.$route.query.parent_id,this.indexModule(this.module_id)):this.postForm.module_id=this.module_id,this.tempRoute=Object.assign({},this.$route)},mounted:function(){var t=this;setTimeout(function(){var e=this;g["lazyAMapApiLoaderInstance"].load().then(function(){function o(t){}function a(t){Object(b["Message"])(t.message)}t.isEdit?e.map=new AMap.Map("amap-demo1",{center:[t.postForm.lng,t.postForm.lat],zoom:16}):(e.map=new AMap.Map("amap-demo1",{resizeEnable:!0,zoom:16}),AMap.plugin("AMap.Geolocation",function(){var t=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonPosition:"RB",buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0});setTimeout(function(){n.addControl(t)},0),t.getCurrentPosition(function(t,e){"complete"==t?o(e):a(e)})}));var n=t.map=e.map;if(t.isEdit){var s=new AMap.Marker({icon:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",position:[t.postForm.lng,t.postForm.lat]});n.add(s),t.setRange(t.map,t.postForm.lng,t.postForm.lat,t.postForm.range)}e.map.on("click",function(e){var o=new AMap.Marker({icon:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",position:[e.lnglat.getLng(),e.lnglat.getLat()]});n.clearMap(),n.add(o);var a=e.lnglat.getLng(),s=e.lnglat.getLat();t.postForm.lng=a,t.postForm.lat=s,t.setRange(n,a,s)})})},1e3),this.initArea()},methods:{indexModule:function(t){var e=this;F({parent_id:t}).then(function(t){e.module_options=t.data}).catch(function(t){console.log(t)})},fetchData:function(t){var e=this;Object(c["c"])(t).then(function(t){e.postForm=t.data,e.postForm.parent_id>0&&e.indexModule(1),e.initEditArea()}).catch(function(t){console.log(t)})},setTagsViewTitle:function(){var t="Edit Article",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.postForm.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="Edit Article";document.title="".concat(t," - ").concat(this.postForm.id)},submitForm:function(){var t=this;this.loading=!0,this.isEdit?Object(c["g"])(this.postForm.id,this.postForm).then(function(e){1==e.code&&t.$notify({title:t.$t("messages.title.success"),message:t.$t("messages.success"),type:"success",duration:2e3,onClose:function(){t.$router.go(-1)}}),t.loading=!1}).catch(function(){t.loading=!1}):Object(c["d"])(this.postForm).then(function(e){1==e.code&&t.$notify({title:t.$t("messages.title.success"),message:t.$t("messages.success"),type:"success",duration:2e3,onClose:function(){t.$router.go(-1)}}),t.loading=!1}).catch(function(){t.loading=!1})},getRemoteUserList:function(t){var e=this;Object(l["a"])(t).then(function(t){t.data.items&&(e.userListOptions=t.data.items.map(function(t){return t.name}))})},handleAreaChange:function(t){this.getAreaName(t)},handleAreaItemChange:function(t){var e=this,o={};o.code=t[t.length-1],v(o).then(function(o){e.setAreaChildren(t[t.length-1],o.data)}).catch(function(t){})},initArea:function(){var t=this;v().then(function(e){var o=e.data;o.forEach(function(t,e){o[e].children=[]}),t.area_options=o}).catch(function(t){})},initEditArea:function(){var t=this;if(t.postForm.area_code&&3==t.postForm.area_code.length){var e={};e.code=t.postForm.area_code[0],v(e).then(function(o){t.setAreaChildren(t.postForm.area_code[0],o.data),e.code=t.postForm.area_code[1],v(e).then(function(e){t.setAreaChildren(t.postForm.area_code[1],e.data)}).catch(function(t){})}).catch(function(t){})}},setAreaChildren:function(t,e){var o=this;this.area_options;o.area_options.forEach(function(a,n){a.code==t?(e.forEach(function(t,o){e[o].children=[]}),o.area_options[n].children=e):a.children.forEach(function(a,s){a.code==t&&(o.area_options[n].children[s].children=e)})})},getAreaName:function(t){var e=this,o=(this.area_options,[]);return e.area_options.forEach(function(e,a){return e.code==t[0]&&(o.push(e.name),e.children.forEach(function(e,a){return e.code==t[1]&&(o.push(e.name),e.children.forEach(function(e,a){return e.code==t[2]&&o.push(e.name),!0})),!0})),!0}),o},resetMap:function(){var t=this,e=this.getAreaName(this.postForm.area_code);e=e.join(" ");var o=e+" "+this.postForm.address;g["lazyAMapApiLoaderInstance"].load().then(function(){AMap.plugin("AMap.Geocoder",function(){var e=new AMap.Geocoder,a=new AMap.Marker;e.getLocation(o,function(e,o){if("complete"===e&&o.geocodes.length){var n=o.geocodes[0].location;a.setPosition(n),t.map.setFitView(a)}else log.error("根据地址查询位置失败")})})})},setRange:function(t,e,o,a){var n=this;e=new x["Decimal"](e),o=new x["Decimal"](o),a||(a=[[e.minus(2e-4).toFixed(6),o.minus(2e-4).toFixed(6)],[e.minus(2e-4).toFixed(6),o.add(2e-4).toFixed(6)],[e.add(2e-4).toFixed(6),o.add(2e-4).toFixed(6)],[e.add(2e-4).toFixed(6),o.minus(2e-4).toFixed(6)]]),n.postForm.range=a;var s=Object.assign([],a),i=new AMap.Polygon({path:s,strokeColor:"#FF33FF",strokeWeight:6,strokeOpacity:.2,fillOpacity:.4,fillColor:"#1791fc",zIndex:50});t.add(i),t.setFitView([i]);var r=new AMap.PolyEditor(t,i);r.on("addnode",function(t){console.log("触发事件：addnode")}),r.on("adjust",function(t){console.log("触发事件：adjust")}),r.on("removenode",function(t){console.log("触发事件：removenode")}),r.on("end",function(t){console.log("触发事件： end");var e=t.target.toString().split(";"),o=new Array;e.forEach(function(t,e){o.push(t.split(","))}),n.postForm.range=o}),this.polyEditor=r}}},$=w,A=(o("9e68"),Object(p["a"])($,a,n,!1,null,"9833397a",null));e["a"]=A.exports}}]);