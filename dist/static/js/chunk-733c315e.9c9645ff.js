(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-733c315e"],{"0af1":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"competitors-container"},[t._l(t.value,function(e,a){return[s("el-row",[s("el-col",{attrs:{span:4}},[s("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:t.$t("messages.stores.input.competitors_children.name")},model:{value:e.name,callback:function(s){t.$set(e,"name",s)},expression:"v.name"}})],1),t._v(" "),s("el-col",{attrs:{span:4,offset:1}},[s("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:t.$t("messages.stores.input.competitors_children.money")},model:{value:e.money,callback:function(s){t.$set(e,"money",s)},expression:"v.money"}})],1),t._v(" "),s("el-col",{attrs:{span:10,offset:1}},[s("el-input",{staticClass:"article-textarea",attrs:{rows:3,type:"textarea",autosize:"",placeholder:t.$t("messages.stores.input.competitors_children.introduce")},model:{value:e.introduce,callback:function(s){t.$set(e,"introduce",s)},expression:"v.introduce"}})],1),t._v(" "),a>0?s("el-col",{attrs:{span:1,offset:1}},[s("el-button",{on:{click:function(s){return t.removeItem(e)}}},[s("i",{staticClass:"el-icon-delete"})])],1):t._e()],1)]}),t._v(" "),s("el-row",{attrs:{gutter:50}},[s("el-col",{attrs:{span:10}},[s("el-button",{on:{click:t.addItem}},[t._v(t._s(t.$t("messages.button.create"))+t._s(t.$t("messages.stores.input.competitors")))])],1)],1)],2)},n=[],o={name:"",money:"",introduce:""},i=[Object.assign({},o)],c={name:"Competitors",props:{value:{type:Array,default:void 0}},data:function(){return{}},computed:{},created:function(){this.value||this.emitInput(i)},watch:{},methods:{removeItem:function(t){var e=Object.assign([],this.value),s=e.indexOf(t);-1!==s&&e.splice(s,1),this.emitInput(e)},addItem:function(){var t=Object.assign([],this.value);t.push(Object.assign({},o)),this.emitInput(t)},emitInput:function(t){this.$emit("input",t)}}},r=c,l=(s("ba74"),s("2877")),u=Object(l["a"])(r,a,n,!1,null,"ce9981b6",null);e["default"]=u.exports},aaff:function(t,e,s){},ba74:function(t,e,s){"use strict";var a=s("aaff"),n=s.n(a);n.a}}]);