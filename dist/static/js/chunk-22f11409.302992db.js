(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22f11409"],{"508a":function(e,t,n){},bdfd:function(e,t,n){"use strict";var r=n("508a"),i=n.n(r);i.a},cc5e:function(e,t,n){"use strict";n.d(t,"e",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return l}),n.d(t,"g",function(){return c}),n.d(t,"b",function(){return s});var r=n("b775");function i(){return Object(r["a"])({url:"/index/modules/index",method:"get"})}function o(){return Object(r["a"])({url:"/index/roles/index",method:"get"})}function a(e){return Object(r["a"])({url:"/index/role_module_relations/index",method:"get",params:{role_id:e}})}function l(e){return Object(r["a"])({url:"/index/roles/save",method:"post",data:e})}function c(e,t){return Object(r["a"])({url:"/index/roles/update/id/".concat(e),method:"put",data:t})}function s(e){return Object(r["a"])({url:"/role/".concat(e),method:"delete"})}},e8d0:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[n("el-table-column",{attrs:{align:"center",label:"Role Key",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.id)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"Role Name"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"Operations"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticStyle:{width:"80px"},attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(n){return e.handleEdit(t)}}},[e._v("\n          "+e._s(e.$t("messages.button.edit"))+"\n        ")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"Name"}},[n("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Menus"}},[n("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"id"}})],1)],1),e._v(" "),n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("Confirm")])],1)],1)],1)},i=[],o=n("cebc"),a=(n("6762"),n("2fdb"),n("75fc")),l=(n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("3b8d")),c=n("df7c"),s=n.n(c),u=n("ed08"),d=n("cc5e"),h={id:0,name:"",module_id:[]},f={data:function(){return{role:Object.assign({},h),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"name"}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{getRoutes:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["e"])();case 2:t=e.sent,this.serviceRoutes=t.data,this.routes=this.generateRoutes(t.data);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getRoles:function(){var e=this;Object(d["f"])().then(function(t){e.rolesList=t.data})},generateRoutes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var c=a.value;if(c.parent_id==t){var s=this.generateRoutes(e,c.id);s.length>0&&(c.children=s),n.push(c)}}}catch(u){i=!0,o=u}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n},generateArr:function(e){var t=this,n=[];return e.forEach(function(e){if(n.push(e),e.children){var r=t.generateArr(e.children);r.length>0&&(n=[].concat(Object(a["a"])(n),Object(a["a"])(r)))}}),n},handleAddRole:function(){this.role=Object.assign({},h),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleEdit:function(e){var t=this,n=this;console.log(e),this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(u["c"])(e.row),Object(d["c"])(this.role.id).then(function(e){var r=e.data,i=[],o=!0,a=!1,l=void 0;try{for(var c,s=r[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var u=c.value,d={};d.id=u.module_id,i.push(d)}}catch(h){a=!0,l=h}finally{try{o||null==s.return||s.return()}finally{if(a)throw l}}n.$nextTick(function(){t.generateRoutes(t.role.routes);t.$refs.tree.setCheckedNodes(i),t.checkStrictly=!1})})},handleDelete:function(e){var t=this,n=e.$index,r=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["b"])(r.key);case 2:t.rolesList.splice(n,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}},e)}))).catch(function(e){console.error(e)})},generateTree:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=arguments.length>2?arguments[2]:void 0,r=[],i=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var u=l.value,d=s.a.resolve(t,u.path);u.children&&(u.children=this.generateTree(u.children,d,n)),(n.includes(d)||u.children&&u.children.length>=1)&&r.push(u)}}catch(h){o=!0,a=h}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return r},confirmRole:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this,n=this.$refs.tree.getCheckedKeys(),t.role.module_id=n,"new"==t.dialogType?Object(d["a"])(t.role).then(function(){t.dialogVisible=!1,t.getRoles()}):Object(d["g"])(t.role.id,t.role).then(function(){t.dialogVisible=!1,t.getRoles()});case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null,r=e.filter(function(e){return!e.hidden});return 1===r.length?(n=r[0],n.path=s.a.resolve(t.path,n.path),n):0===r.length&&(n=Object(o["a"])({},t,{path:"",noShowingChildren:!0}),n)}}},g=f,p=(n("bdfd"),n("2877")),b=Object(p["a"])(g,r,i,!1,null,"e68917e4",null);t["default"]=b.exports}}]);