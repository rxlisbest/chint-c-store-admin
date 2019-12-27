(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ba5a5e6"],{b701:function(e,t,n){"use strict";var r=n("cd3e"),i=n.n(r);i.a},cd3e:function(e,t,n){},d78e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v("New Role")]),e._v(" "),n("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[n("el-table-column",{attrs:{align:"center",label:"Role Key",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.key)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"Role Name",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"header-center",label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.description)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"Operations"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return e.handleEdit(t)}}},[e._v("Edit")]),e._v(" "),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return e.handleDelete(t)}}},[e._v("Delete")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"Name"}},[n("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Desc"}},[n("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Menus"}},[n("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),e._v(" "),n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("Confirm")])],1)],1)],1)},i=[],a=n("cebc"),l=(n("7f7f"),n("6762"),n("2fdb"),n("75fc")),o=(n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("3b8d")),s=n("df7c"),c=n.n(s),u=n("ed08"),h=n("cc5e"),d={key:"",name:"",description:"",routes:[]},f={data:function(){return{role:Object.assign({},d),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{getRoutes:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["e"])();case 2:t=e.sent,this.serviceRoutes=t.data,this.routes=this.generateRoutes(t.data);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getRoles:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["getRoles"])();case 2:t=e.sent,this.rolesList=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),generateRoutes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=[],r=!0,i=!1,a=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){var s=l.value;if(!s.hidden){var u=this.onlyOneShowingChild(s.children,s);s.children&&u&&!s.alwaysShow&&(s=u);var h={path:c.a.resolve(t,s.path),title:s.meta&&s.meta.title};s.children&&(h.children=this.generateRoutes(s.children,h.path)),n.push(h)}}}catch(d){i=!0,a=d}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return n},generateArr:function(e){var t=this,n=[];return e.forEach(function(e){if(n.push(e),e.children){var r=t.generateArr(e.children);r.length>0&&(n=[].concat(Object(l["a"])(n),Object(l["a"])(r)))}}),console.log(n),n},handleAddRole:function(){this.role=Object.assign({},d),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleEdit:function(e){var t=this;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(u["deepClone"])(e.row),this.$nextTick(function(){var e=t.generateRoutes(t.role.routes);t.$refs.tree.setCheckedNodes(t.generateArr(e)),t.checkStrictly=!1})},handleDelete:function(e){var t=this,n=e.$index,r=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["b"])(r.key);case 2:t.rolesList.splice(n,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}},e)}))).catch(function(e){console.error(e)})},generateTree:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=arguments.length>2?arguments[2]:void 0,r=[],i=!0,a=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var u=o.value,h=c.a.resolve(t,u.path);u.children&&(u.children=this.generateTree(u.children,h,n)),(n.includes(h)||u.children&&u.children.length>=1)&&r.push(u)}}catch(d){a=!0,l=d}finally{try{i||null==s.return||s.return()}finally{if(a)throw l}}return r},confirmRole:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,r,i,a,l,o,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t="edit"===this.dialogType,n=this.$refs.tree.getCheckedKeys(),this.role.routes=this.generateTree(Object(u["deepClone"])(this.serviceRoutes),"/",n),!t){e.next=16;break}return e.next=6,Object(h["g"])(this.role.key,this.role);case 6:r=0;case 7:if(!(r<this.rolesList.length)){e.next=14;break}if(this.rolesList[r].key!==this.role.key){e.next=11;break}return this.rolesList.splice(r,1,Object.assign({},this.role)),e.abrupt("break",14);case 11:r++,e.next=7;break;case 14:e.next=22;break;case 16:return e.next=18,Object(h["a"])(this.role);case 18:i=e.sent,a=i.data,this.role.key=a.key,this.rolesList.push(this.role);case 22:l=this.role,o=l.description,s=l.key,c=l.name,this.dialogVisible=!1,this.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n            <div>Role Key: ".concat(s,"</div>\n            <div>Role Nmae: ").concat(c,"</div>\n            <div>Description: ").concat(o,"</div>\n          "),type:"success"});case 25:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=null,r=e.filter(function(e){return!e.hidden});return 1===r.length?(n=r[0],n.path=c.a.resolve(t.path,n.path),n):0===r.length&&(n=Object(a["a"])({},t,{path:"",noShowingChildren:!0}),n)}}},p=f,v=(n("b701"),n("2877")),g=Object(v["a"])(p,r,i,!1,null,"7f65718f",null);t["default"]=g.exports}}]);