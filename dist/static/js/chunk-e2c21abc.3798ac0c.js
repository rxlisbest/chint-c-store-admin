(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2c21abc","chunk-5d484e5c","chunk-733c315e","chunk-0d4a9936","chunk-2d22bd8d"],{"061e":function(t,e,a){"use strict";var n=a("d868"),o=a.n(n);o.a},"0af1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"competitors-container"},[t._l(t.value,function(e,n){return[a("el-row",[a("el-col",{attrs:{span:4}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:t.$t("messages.stores.input.competitors_children.name")},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"v.name"}})],1),t._v(" "),a("el-col",{attrs:{span:4,offset:1}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:t.$t("messages.stores.input.competitors_children.money")},model:{value:e.money,callback:function(a){t.$set(e,"money",a)},expression:"v.money"}})],1),t._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:t.$t("messages.stores.input.competitors_children.introduce")},model:{value:e.introduce,callback:function(a){t.$set(e,"introduce",a)},expression:"v.introduce"}})],1),t._v(" "),n>0?a("el-col",{attrs:{span:1,offset:1}},[a("el-button",{on:{click:function(a){return t.removeItem(e)}}},[a("i",{staticClass:"el-icon-delete"})])],1):t._e()],1)]}),t._v(" "),a("el-row",{attrs:{gutter:50}},[a("el-col",{attrs:{span:10}},[a("el-button",{on:{click:t.addItem}},[t._v(t._s(t.$t("messages.button.create"))+t._s(t.$t("messages.stores.input.competitors")))])],1)],1)],2)},o=[],s={name:"",money:"",introduce:""},i=[Object.assign({},s)],r={name:"Competitors",props:{value:{type:Array,default:void 0}},data:function(){return{}},computed:{},created:function(){this.value||this.emitInput(i)},watch:{},methods:{removeItem:function(t){var e=Object.assign([],this.value),a=e.indexOf(t);-1!==a&&e.splice(a,1),this.emitInput(e)},addItem:function(){var t=Object.assign([],this.value);t.push(Object.assign({},s)),this.emitInput(t)},emitInput:function(t){this.$emit("input",t)}}},c=r,u=(a("ba74"),a("2877")),l=Object(u["a"])(c,n,o,!1,null,"ce9981b6",null);e["default"]=l.exports},"39dd":function(t,e,a){"use strict";var n=a("4062"),o=a.n(n);o.a},"3f5e":function(t,e,a){"use strict";a.d(e,"b",function(){return o}),a.d(e,"a",function(){return s});var n=a("b775");function o(t){return Object(n["a"])({url:"/index/files/save",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/index/files/read/id/"+t,method:"get"})}},4062:function(t,e,a){},"599c":function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("b775");function o(t){return Object(n["a"])({url:"/index/areas/index",method:"get",params:t})}},"73f5":function(t,e,a){"use strict";a.d(e,"b",function(){return o}),a.d(e,"c",function(){return s}),a.d(e,"d",function(){return i}),a.d(e,"o",function(){return r}),a.d(e,"a",function(){return c}),a.d(e,"e",function(){return u}),a.d(e,"f",function(){return l}),a.d(e,"i",function(){return d}),a.d(e,"m",function(){return p}),a.d(e,"l",function(){return m}),a.d(e,"h",function(){return f}),a.d(e,"k",function(){return h}),a.d(e,"g",function(){return v}),a.d(e,"j",function(){return g}),a.d(e,"n",function(){return b});var n=a("b775");function o(t){return Object(n["a"])({url:"/index/stores/index",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/index/stores/read/id/".concat(t),method:"get"})}function i(t){return Object(n["a"])({url:"/index/stores/save",method:"post",data:t})}function r(t,e){return Object(n["a"])({url:"/index/stores/update/id/".concat(t),method:"put",data:e})}function c(t){return Object(n["a"])({url:"/index/stores/delete/id/".concat(t),method:"delete"})}function u(t){return Object(n["a"])({url:"/index/stores/statisticCreate",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/index/stores/statisticNow",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/index/stores/saveMarket",method:"post",data:t})}function p(t,e){return Object(n["a"])({url:"/index/stores/updateMarket/id/".concat(t),method:"put",data:e})}function m(t,e){return Object(n["a"])({url:"/index/stores/updateIntroduce/id/".concat(t),method:"put",data:e})}function f(t){return Object(n["a"])({url:"/index/stores/saveAgent",method:"post",data:t})}function h(t,e){return Object(n["a"])({url:"/index/stores/updateAgent/id/".concat(t),method:"put",data:e})}function v(t){return Object(n["a"])({url:"/index/stores/all",method:"get",params:t})}function g(t){return Object(n["a"])({url:"/index/stores/saveShop",method:"post",data:t})}function b(t,e){return Object(n["a"])({url:"/index/stores/updateShop/id/".concat(t),method:"put",data:e})}},"816b":function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("b775");function o(t){return Object(n["a"])({url:"/index/modules/index",method:"get",params:t})}},"828d":function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("b775");function o(t){return Object(n["a"])({url:"/search/user",method:"get",params:{name:t}})}},a731:function(t,e,a){"use strict";a.r(e);var n,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createPost-container"},[a("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm}},[a("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.status}},[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v(t._s(t.$t("messages.stores.button.submit")))])],1),t._v(" "),a("div",{staticClass:"createPost-main-container"},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[a("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}},[t._v(t._s(t.$t("messages.stores.input.name")))])],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}}),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.area_code")}},[a("Area",{ref:"area",model:{value:t.postForm.area_code,callback:function(e){t.$set(t.postForm,"area_code",e)},expression:"postForm.area_code"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.address")}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},on:{blur:t.resetMap},model:{value:t.postForm.address,callback:function(e){t.$set(t.postForm,"address",e)},expression:"postForm.address"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.lat_lng")}},[a("Map",{ref:"map",attrs:{id:"map","is-edit":t.isEdit},model:{value:t.mapData,callback:function(e){t.mapData=e},expression:"mapData"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.introduce")}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.introduce,callback:function(e){t.$set(t.postForm,"introduce",e)},expression:"postForm.introduce"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"plan_file_id","label-width":"72px",label:t.$t("messages.stores.input.plan_file_id")}},[a("Upload",{model:{value:t.postForm.plan_file_id,callback:function(e){t.$set(t.postForm,"plan_file_id",e)},expression:"postForm.plan_file_id"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.establishment_time")}},[a("el-date-picker",{attrs:{"value-format":"timestamp",type:"datetime",placeholder:"选择日期时间"},model:{value:t.postForm.establishment_time,callback:function(e){t.$set(t.postForm,"establishment_time",e)},expression:"postForm.establishment_time"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.sales_area")}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.sales_area,callback:function(e){t.$set(t.postForm,"sales_area",e)},expression:"postForm.sales_area"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"72px",label:t.$t("messages.stores.input.competitors")}},[a("Competitors",{model:{value:t.postForm.competitors,callback:function(e){t.$set(t.postForm,"competitors",e)},expression:"postForm.competitors"}})],1)],1)],1)],1)},s=[],i=a("cebc"),r=a("bd86"),c=a("fbf8"),u=a("1aba"),l=a("b804"),d=a("73f5"),p=(a("828d"),a("f15a"),a("0af1")),m=a("b6e6"),f=a("da0e"),h=(a("5c96"),a("599c"),a("816b")),v=(a("4128"),n={name:"",module_id:void 0,parent_id:0,cover_file_id:void 0,area_code:[],location:"",lat:"",lng:"",phone:"",business_hours:"",address:"",introduce:"",business_scope:"",range:[],sales_area:"",plan_file_id:void 0,establishment_time:void 0},Object(r["a"])(n,"sales_area",""),Object(r["a"])(n,"competitors",void 0),n),g={name:"DetailMarketIndex",components:{MDinput:u["a"],Upload:c["a"],Sticky:l["a"],Competitors:p["default"],Map:m["default"],Area:f["default"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{module_id:0,parent_module_id:0,parent_id:0,map:void 0,polyEditor:void 0,zoom:16,center:[121.59996,31.197646],postForm:Object.assign({},v),loading:!1,userListOptions:[],tempRoute:{},area_props:{value:"code",label:"name",children:"children"},area_options:[],module_options:[],display_module:!1,mapData:void 0}},computed:{},watch:{},created:function(){if(this.center=[121.59996,31.197646],this.isEdit){var t=this.$route.params&&this.$route.params.store_id;this.fetchData(t)}else this.postForm=Object.assign({},v);this.module_id=this.$route.meta.module_id,this.postForm.module_id=this.module_id,this.tempRoute=Object.assign({},this.$route)},mounted:function(){},methods:{indexModule:function(t){var e=this;Object(h["a"])({parent_id:t}).then(function(t){e.module_options=t.data}).catch(function(t){console.log(t)})},fetchData:function(t){var e=this;Object(d["c"])(t).then(function(t){e.postForm=t.data,e.postForm.establishment_time*=1e3,e.mapData={lat:t.data.lat,lng:t.data.lng,range:t.data.range},e.$refs.area.initEditArea(e.postForm.area_code)}).catch(function(t){console.log(t)})},submitForm:function(){var t=this;this.loading=!0;var e=Object.assign({},Object(i["a"])({},this.postForm,this.mapData));e.establishment_time/=1e3,this.isEdit?Object(d["m"])(e.id,e).then(function(e){1==e.code&&t.$notify({title:t.$t("messages.title.success"),message:t.$t("messages.success"),type:"success",duration:2e3,onClose:function(){t.$router.go(-1)}}),t.loading=!1}).catch(function(){t.loading=!1}):Object(d["i"])(e).then(function(e){1==e.code&&t.$notify({title:t.$t("messages.title.success"),message:t.$t("messages.success"),type:"success",duration:2e3,onClose:function(){t.$router.go(-1)}}),t.loading=!1}).catch(function(){t.loading=!1})},resetMap:function(){var t=this.$refs.area.getAreaName(this.postForm.area_code);t=t.join(" ");var e=t+" "+this.postForm.address;this.$refs.map.resetMap(e)}}},b=g,_=(a("061e"),a("2877")),x=Object(_["a"])(b,o,s,!1,null,"54d6cead",null);e["default"]=x.exports},aaff:function(t,e,a){},b6e6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map-container"},[a("div",{staticClass:"amap-wrapper",attrs:{id:"id"}}),t._v(" "),a("div",{staticClass:"range-edit"},[a("div",{staticClass:"range-edit-button",staticStyle:{"margin-bottom":"5px"},on:{click:function(e){return t.polyEditor.open()}}},[t._v(t._s(t.$t("messages.stores.input.range_edit")))]),t._v(" "),a("div",{staticClass:"range-save-button",on:{click:function(e){return t.polyEditor.close()}}},[t._v(t._s(t.$t("messages.stores.input.range_save")))])])])},o=[],s=(a("ac6a"),a("6b54"),a("28a5"),a("8f9b")),i=a("4128"),r={lat:"",lng:"",range:[]},c={name:"Map",props:{value:{type:Object,default:function(){return r}},id:{type:String,default:void 0},isEdit:{type:Boolean,default:!1}},data:function(){return{map:void 0}},computed:{},created:function(){},mounted:function(){var t=this;setTimeout(function(){var e=this;s["lazyAMapApiLoaderInstance"].load().then(function(){function a(t){}function n(t){Message(t.message)}t.isEdit?e.map=new AMap.Map(e.id,{center:[t.value.lng,t.value.lat],zoom:16}):(e.map=new AMap.Map(e.id,{resizeEnable:!0,zoom:16}),AMap.plugin("AMap.Geolocation",function(){var t=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonPosition:"RB",buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0});setTimeout(function(){o.addControl(t)},0),t.getCurrentPosition(function(t,e){"complete"==t?a(e):n(e)})}));var o=t.map=e.map;if(t.isEdit){var s=new AMap.Marker({icon:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",position:[t.value.lng,t.value.lat]});o.add(s),t.setRange(t.map,t.value.lng,t.value.lat,t.value.range)}e.map.on("click",function(e){var a=new AMap.Marker({icon:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",position:[e.lnglat.getLng(),e.lnglat.getLat()]});o.clearMap(),o.add(a);var n=e.lnglat.getLng(),s=e.lnglat.getLat();t.value.lng=n,t.value.lat=s,console.log(t.value),t.setRange(o,n,s)})})},1e3)},watch:{},methods:{emitInput:function(t){this.$emit("input",t)},resetMap:function(t){var e=this;s["lazyAMapApiLoaderInstance"].load().then(function(){AMap.plugin("AMap.Geocoder",function(){var a=new AMap.Geocoder,n=new AMap.Marker;a.getLocation(t,function(t,a){if("complete"===t&&a.geocodes.length){var o=a.geocodes[0].location;n.setPosition(o),e.map.setFitView(n)}})})})},setRange:function(t,e,a,n){var o=this,s=Object.assign({},this.value);e=new i["Decimal"](e),a=new i["Decimal"](a),n||(n=[[e.minus(2e-4).toFixed(6),a.minus(2e-4).toFixed(6)],[e.minus(2e-4).toFixed(6),a.add(2e-4).toFixed(6)],[e.add(2e-4).toFixed(6),a.add(2e-4).toFixed(6)],[e.add(2e-4).toFixed(6),a.minus(2e-4).toFixed(6)]]),s.range=n,o.emitInput(s);var r=Object.assign([],n),c=new AMap.Polygon({path:r,strokeColor:"#FF33FF",strokeWeight:6,strokeOpacity:.2,fillOpacity:.4,fillColor:"#1791fc",zIndex:50});t.add(c),t.setFitView([c]);var u=new AMap.PolyEditor(t,c);u.on("addnode",function(t){console.log("触发事件：addnode")}),u.on("adjust",function(t){console.log("触发事件：adjust")}),u.on("removenode",function(t){console.log("触发事件：removenode")}),u.on("end",function(t){console.log("触发事件： end");var e=t.target.toString().split(";"),a=new Array;e.forEach(function(t,e){a.push(t.split(","))}),s.range=a,o.emitInput(s)}),this.polyEditor=u}}},u=c,l=(a("39dd"),a("2877")),d=Object(l["a"])(u,n,o,!1,null,"1d24c798",null);e["default"]=d.exports},ba74:function(t,e,a){"use strict";var n=a("aaff"),o=a.n(n);o.a},cc2c:function(t,e,a){},d849:function(t,e,a){"use strict";var n=a("cc2c"),o=a.n(n);o.a},d868:function(t,e,a){},da0e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"area-container"},[a("el-cascader",{attrs:{options:t.area_options,props:t.area_props},on:{"active-item-change":t.handleAreaItemChange,change:t.handleAreaChange},model:{value:t.valueData,callback:function(e){t.valueData=e},expression:"valueData"}})],1)},o=[],s=(a("7f7f"),a("ac6a"),a("599c")),i={name:"Area",props:{value:{type:Array,default:function(){return[]}}},data:function(){return{area_options:[],area_props:{value:"code",label:"name",children:"children"},valueData:this.value}},computed:{},created:function(){},mounted:function(){this.initArea()},watch:{valueData:function(t){this.emitInput(t)},value:function(t){this.valueData=t}},methods:{emitInput:function(t){this.$emit("input",t)},handleAreaItemChange:function(t){var e=this,a={};a.code=t[t.length-1],Object(s["a"])(a).then(function(a){e.setAreaChildren(t[t.length-1],a.data)}).catch(function(t){})},handleAreaChange:function(t){this.getAreaName(t)},getAreaName:function(t){var e=this,a=(this.area_options,[]);return e.area_options.forEach(function(e,n){return e.code==t[0]&&(a.push(e.name),e.children.forEach(function(e,n){return e.code==t[1]&&(a.push(e.name),e.children.forEach(function(e,n){return e.code==t[2]&&a.push(e.name),!0})),!0})),!0}),a},initArea:function(){var t=this;Object(s["a"])().then(function(e){var a=e.data;a.forEach(function(t,e){a[e].children=[]}),t.area_options=a}).catch(function(t){})},setAreaChildren:function(t,e){var a=this;this.area_options;a.area_options.forEach(function(n,o){n.code==t?(e.forEach(function(t,a){e[a].children=[]}),a.area_options[o].children=e):n.children.forEach(function(n,s){n.code==t&&(a.area_options[o].children[s].children=e)})})},initEditArea:function(t){var e=this;if(t&&3==t.length){var a={};a.code=t[0],Object(s["a"])(a).then(function(n){e.setAreaChildren(t[0],n.data),a.code=t[1],Object(s["a"])(a).then(function(a){e.setAreaChildren(t[1],a.data)}).catch(function(t){})}).catch(function(t){})}}}},r=i,c=(a("d849"),a("2877")),u=Object(c["a"])(r,n,o,!1,null,"37344f35",null);e["default"]=u.exports},f15a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[t._v("\n  Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support\n  caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching\n  effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all\n  pages directly. See details\n  "),a("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html",target:"_blank"}},[t._v("Document")])])}],s=a("2877"),i={},r=Object(s["a"])(i,n,o,!1,null,null,null);e["default"]=r.exports}}]);