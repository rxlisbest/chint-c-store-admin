(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eaabba72"],{"0bd9":function(t,e,n){"use strict";var i=n("2092"),o=n.n(i);o.a},1172:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"createPost-container"},[n("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[n("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.status}},[n("CommentDropdown",{model:{value:t.postForm.comment_disabled,callback:function(e){t.$set(t.postForm,"comment_disabled",e)},expression:"postForm.comment_disabled"}}),t._v(" "),n("PlatformDropdown",{model:{value:t.postForm.platforms,callback:function(e){t.$set(t.postForm,"platforms",e)},expression:"postForm.platforms"}}),t._v(" "),n("SourceUrlDropdown",{model:{value:t.postForm.source_uri,callback:function(e){t.$set(t.postForm,"source_uri",e)},expression:"postForm.source_uri"}}),t._v(" "),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("\n        Publish\n      ")]),t._v(" "),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:t.draftForm}},[t._v("\n        Draft\n      ")])],1),t._v(" "),n("div",{staticClass:"createPost-main-container"},[n("el-row",[n("Warning"),t._v(" "),n("el-col",{attrs:{span:24}},[n("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[n("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[t._v("\n              Title\n            ")])],1),t._v(" "),n("div",{staticClass:"postInfo-container"},[n("el-row",[n("el-col",{attrs:{span:8}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"60px",label:"Author:"}},[n("el-select",{attrs:{"remote-method":t.getRemoteUserList,filterable:"","default-first-option":"",remote:"",placeholder:"Search user"},model:{value:t.postForm.author,callback:function(e){t.$set(t.postForm,"author",e)},expression:"postForm.author"}},t._l(t.userListOptions,function(t,e){return n("el-option",{key:t+e,attrs:{label:t,value:t}})}),1)],1)],1),t._v(" "),n("el-col",{attrs:{span:10}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",label:"Publish Time:"}},[n("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"Select date and time"},model:{value:t.displayTime,callback:function(e){t.displayTime=e},expression:"displayTime"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"90px",label:"Importance:"}},[n("el-rate",{staticStyle:{display:"inline-block"},attrs:{max:3,colors:["#99A9BF","#F7BA2A","#FF9900"],"low-threshold":1,"high-threshold":3},model:{value:t.postForm.importance,callback:function(e){t.$set(t.postForm,"importance",e)},expression:"postForm.importance"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"70px",label:"Summary:"}},[n("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.content_short,callback:function(e){t.$set(t.postForm,"content_short",e)},expression:"postForm.content_short"}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"words")])],1),t._v(" "),n("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[n("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1),t._v(" "),n("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"image_uri"}},[n("Upload",{model:{value:t.postForm.image_uri,callback:function(e){t.$set(t.postForm,"image_uri",e)},expression:"postForm.image_uri"}})],1)],1)],1)],1)},o=[],a=(n("7f7f"),n("8256")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-container"},[n("el-upload",{staticClass:"image-uploader",attrs:{data:t.dataObj,multiple:!1,"show-file-list":!1,"on-success":t.handleImageSuccess,drag:"",action:"https://httpbin.org/post"}},[n("i",{staticClass:"el-icon-upload"}),t._v(" "),n("div",{staticClass:"el-upload__text"},[t._v("\n      将文件拖到此处，或"),n("em",[t._v("点击上传")])])]),t._v(" "),n("div",{staticClass:"image-preview image-app-preview"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.imageUrl.length>1,expression:"imageUrl.length>1"}],staticClass:"image-preview-wrapper"},[n("img",{attrs:{src:t.imageUrl}}),t._v(" "),n("div",{staticClass:"image-preview-action"},[n("i",{staticClass:"el-icon-delete",on:{click:t.rmImage}})])])]),t._v(" "),n("div",{staticClass:"image-preview"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.imageUrl.length>1,expression:"imageUrl.length>1"}],staticClass:"image-preview-wrapper"},[n("img",{attrs:{src:t.imageUrl}}),t._v(" "),n("div",{staticClass:"image-preview-action"},[n("i",{staticClass:"el-icon-delete",on:{click:t.rmImage}})])])])],1)},r=[],l=n("b775");function c(){return Object(l["a"])({url:"/qiniu/upload/token",method:"get"})}var u={name:"SingleImageUpload3",props:{value:{type:String,default:""}},data:function(){return{tempUrl:"",dataObj:{token:"",key:""}}},computed:{imageUrl:function(){return this.value}},methods:{rmImage:function(){this.emitInput("")},emitInput:function(t){this.$emit("input",t)},handleImageSuccess:function(t){this.emitInput(t.files.file)},beforeUpload:function(){var t=this,e=this;return new Promise(function(n,i){c().then(function(i){var o=i.data.qiniu_key,a=i.data.qiniu_token;e._data.dataObj.token=a,e._data.dataObj.key=o,t.tempUrl=i.data.qiniu_url,n(!0)}).catch(function(t){console.log(t),i(!1)})})}}},d=u,m=(n("0bd9"),n("2877")),p=Object(m["a"])(d,s,r,!1,null,"0e0b11b7",null),h=p.exports,f=n("1aba"),g=n("b804"),b=n("61f7"),v=n("2423"),_=n("828d"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",[t._v("\n  Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support\n  caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching\n  effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all\n  pages directly. See details\n  "),n("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html",target:"_blank"}},[t._v("Document")])])}],k={},C=Object(m["a"])(k,y,w,!1,null,null,null),F=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[n("el-button",{attrs:{plain:""}},[t._v("\n    "+t._s(t.comment_disabled?"Comment: closed":"Comment: opened")+"\n    "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{staticClass:"no-padding",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("el-radio-group",{staticStyle:{padding:"10px"},model:{value:t.comment_disabled,callback:function(e){t.comment_disabled=e},expression:"comment_disabled"}},[n("el-radio",{attrs:{label:!0}},[t._v("\n          Close comment\n        ")]),t._v(" "),n("el-radio",{attrs:{label:!1}},[t._v("\n          Open comment\n        ")])],1)],1)],1)],1)},O=[],j={props:{value:{type:Boolean,default:!1}},computed:{comment_disabled:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},S=j,$=Object(m["a"])(S,x,O,!1,null,null,null),I=$.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{attrs:{"hide-on-click":!1,"show-timeout":100,trigger:"click"}},[n("el-button",{attrs:{plain:""}},[t._v("\n    Platfroms("+t._s(t.platforms.length)+")\n    "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{staticClass:"no-border",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-checkbox-group",{staticStyle:{padding:"5px 15px"},model:{value:t.platforms,callback:function(e){t.platforms=e},expression:"platforms"}},t._l(t.platformsOptions,function(e){return n("el-checkbox",{key:e.key,attrs:{label:e.key}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),1)],1)],1)},T=[],E={props:{value:{required:!0,default:function(){return[]},type:Array}},data:function(){return{platformsOptions:[{key:"a-platform",name:"a-platform"},{key:"b-platform",name:"b-platform"},{key:"c-platform",name:"c-platform"}]}},computed:{platforms:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},L=E,D=Object(m["a"])(L,U,T,!1,null,null,null),P=D.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[n("el-button",{attrs:{plain:""}},[t._v("\n    Link\n    "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{staticClass:"no-padding no-border",staticStyle:{width:"400px"},attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{"label-width":"0px",prop:"source_uri"}},[n("el-input",{attrs:{placeholder:"Please enter the content"},model:{value:t.source_uri,callback:function(e){t.source_uri=e},expression:"source_uri"}},[n("template",{slot:"prepend"},[t._v("\n          URL\n        ")])],2)],1)],1)],1)},q=[],R={props:{value:{type:String,default:""}},computed:{source_uri:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},V=R,B=Object(m["a"])(V,A,q,!1,null,null,null),N=B.exports,z={status:"draft",title:"",content:"",content_short:"",source_uri:"",image_uri:"",display_time:void 0,id:void 0,platforms:["a-platform"],comment_disabled:!1,importance:0},M={name:"ArticleDetail",components:{Tinymce:a["a"],MDinput:f["a"],Upload:h,Sticky:g["a"],Warning:F,CommentDropdown:I,PlatformDropdown:P,SourceUrlDropdown:N},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,n,i){""===n?(t.$message({message:e.field+"为必传项",type:"error"}),i(new Error(e.field+"为必传项"))):i()},n=function(e,n,i){n?Object(b["d"])(n)?i():(t.$message({message:"外链url填写不正确",type:"error"}),i(new Error("外链url填写不正确"))):i()};return{postForm:Object.assign({},z),loading:!1,userListOptions:[],rules:{image_uri:[{validator:e}],title:[{validator:e}],content:[{validator:e}],source_uri:[{validator:n,trigger:"blur"}]},tempRoute:{}}},computed:{contentShortLength:function(){return this.postForm.content_short.length},displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(t){this.postForm.display_time=new Date(t)}}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=Object.assign({},z);this.tempRoute=Object.assign({},this.$route)},methods:{fetchData:function(t){var e=this;Object(v["b"])(t).then(function(t){e.postForm=t.data,e.postForm.title+="   Article Id:".concat(e.postForm.id),e.postForm.content_short+="   Article Id:".concat(e.postForm.id),e.setTagsViewTitle(),e.setPageTitle()}).catch(function(t){console.log(t)})},setTagsViewTitle:function(){var t="Edit Article",e=Object.assign({},this.tempRoute,{title:"".concat(t,"-").concat(this.postForm.id)});this.$store.dispatch("tagsView/updateVisitedView",e)},setPageTitle:function(){var t="Edit Article";document.title="".concat(t," - ").concat(this.postForm.id)},submitForm:function(){var t=this;console.log(this.postForm),this.$refs.postForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$notify({title:"成功",message:"发布文章成功",type:"success",duration:2e3}),t.postForm.status="published",t.loading=!1})},draftForm:function(){0!==this.postForm.content.length&&0!==this.postForm.title.length?(this.$message({message:"保存成功",type:"success",showClose:!0,duration:1e3}),this.postForm.status="draft"):this.$message({message:"请填写必要的标题和内容",type:"warning"})},getRemoteUserList:function(t){var e=this;Object(_["a"])(t).then(function(t){t.data.items&&(e.userListOptions=t.data.items.map(function(t){return t.name}))})}}},K=M,W=(n("661b"),Object(m["a"])(K,i,o,!1,null,"73746a18",null));e["a"]=W.exports},2092:function(t,e,n){},2423:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"d",function(){return s}),n.d(e,"a",function(){return r}),n.d(e,"e",function(){return l});var i=n("b775");function o(t){return Object(i["a"])({url:"/article/list",method:"get",params:t})}function a(t){return Object(i["a"])({url:"/article/detail",method:"get",params:{id:t}})}function s(t){return Object(i["a"])({url:"/article/pv",method:"get",params:{pv:t}})}function r(t){return Object(i["a"])({url:"/article/create",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/article/update",method:"post",data:t})}},2811:function(t,e,n){},"661b":function(t,e,n){"use strict";var i=n("2811"),o=n.n(i);o.a},8256:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),n("div",{staticClass:"editor-custom-btn-container"},[n("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])},o=[],a=(n("ac6a"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-container"},[n("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("\n    upload\n  ")]),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,action:"https://httpbin.org/post","list-type":"picture-card"}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("\n        Click upload\n      ")])],1),t._v(" "),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("\n      Cancel\n    ")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("\n      Confirm\n    ")])],1)],1)}),s=[],r=(n("456d"),{name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return Object.keys(this.listObj).every(function(e){return t.listObj[e].hasSuccess})},handleSubmit:function(){var t=this,e=Object.keys(this.listObj).map(function(e){return t.listObj[e]});this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleSuccess:function(t,e){for(var n=e.uid,i=Object.keys(this.listObj),o=0,a=i.length;o<a;o++)if(this.listObj[i[o]].uid===n)return this.listObj[i[o]].url=t.files.file,void(this.listObj[i[o]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,n=Object.keys(this.listObj),i=0,o=n.length;i<o;i++)if(this.listObj[n[i]].uid===e)return void delete this.listObj[n[i]]},beforeUpload:function(t){var e=this,n=window.URL||window.webkitURL,i=t.uid;return this.listObj[i]={},new Promise(function(o,a){var s=new Image;s.src=n.createObjectURL(t),s.onload=function(){e.listObj[i]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},o(!0)})}}}),l=r,c=(n("fd60"),n("2877")),u=Object(c["a"])(l,a,s,!1,null,"3fefeeec",null),d=u.exports,m=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],p=m,h=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],f=h,g=(n("ac4d"),n("8a81"),[]);function b(){return window.tinymce}var v=function(t,e){var n=document.getElementById(t),i=e||function(){};if(!n){var o=document.createElement("script");o.src=t,o.id=t,document.body.appendChild(o),g.push(i);var a="onload"in o?s:r;a(o)}function s(e){e.onload=function(){this.onerror=this.onload=null;for(var t=0,n=g;t<n.length;t++){var i=n[t];i(null,e)}g=null},e.onerror=function(){this.onerror=this.onload=null,i(new Error("Failed to load "+t),e)}}function r(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e=!0,n=!1,i=void 0;try{for(var o,a=g[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value;s(null,t)}}catch(r){n=!0,i=r}finally{try{e||null==a.return||a.return()}finally{if(n)throw i}}g=null}}}n&&i&&(b()?i(null,n):g.push(i))},_=v,y="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",w={name:"Tinymce",components:{editorImage:d},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t||"")})}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;_(y,function(e){e?t.$message.error(e.message):t.initTinymce()})},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["en"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:f,menubar:this.menubar,plugins:p,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",n.getContent())})},setup:function(t){t.on("FullscreenStateChanged",function(t){e.fullscreen=t.state})}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))})}}},k=w,C=(n("9adc"),Object(c["a"])(k,i,o,!1,null,"c6234f8a",null));e["a"]=C.exports},"9adc":function(t,e,n){"use strict";var i=n("fcb3"),o=n.n(i);o.a},dc65:function(t,e,n){},fcb3:function(t,e,n){},fd60:function(t,e,n){"use strict";var i=n("dc65"),o=n.n(i);o.a}}]);