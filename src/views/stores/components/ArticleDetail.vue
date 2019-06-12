<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">

      <sticky :z-index="10" :class-name="'sub-navbar '+postForm.status">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          {{ $t('messages.stores.button.submit') }}
        </el-button>
        <!-- <el-button v-loading="loading" type="warning" @click="draftForm">
          Draft
        </el-button> -->
      </sticky>

      <div class="createPost-main-container">
        <el-form-item style="margin-bottom: 40px;" prop="title">
          <MDinput v-model="postForm.name" :maxlength="100" name="name" required>
            {{ $t('messages.stores.input.name') }}
          </MDinput>
        </el-form-item>

        <el-form-item prop="image_uri" label-width="72px" :label="$t('messages.stores.input.cover_file_id')" style="margin-bottom: 30px;">
          <Upload v-model="postForm.cover_file_id" />
        </el-form-item>

        <el-form-item style="margin-bottom: 40px;" label-width="72px" :label="$t('messages.stores.input.area_code')">
          <el-cascader
            :options="area_options"
            @active-item-change="handleItemChange"
            :props="area_props"
            v-model="postForm.area_code"
          ></el-cascader>
        </el-form-item>

        <el-form-item style="margin-bottom: 40px;" label-width="72px" :label="$t('messages.stores.input.phone')">
          <el-input v-model="postForm.phone" :rows="3" type="textarea" class="article-textarea" autosize placeholder="Please enter the content" />
        </el-form-item>

        <el-form-item style="margin-bottom: 40px;" label-width="72px" :label="$t('messages.stores.input.address')">
          <el-input v-model="postForm.address" :rows="3" type="textarea" class="article-textarea" autosize placeholder="Please enter the content" />
        </el-form-item>

        <el-form-item style="margin-bottom: 40px;" label-width="72px" :label="$t('messages.stores.input.lat_lng')">
          <div class="amap-wrapper" id="amap-demo1">
          </div>
        </el-form-item>

        <el-form-item style="margin-bottom: 40px;" label-width="72px" :label="$t('messages.stores.input.introduce')">
          <el-input v-model="postForm.introduce" :rows="3" type="textarea" class="article-textarea" autosize placeholder="Please enter the content" />
        </el-form-item>

        <el-form-item style="margin-bottom: 40px;" label-width="72px" :label="$t('messages.stores.input.business_scope')">
          <el-input v-model="postForm.business_scope" :rows="3" type="textarea" class="article-textarea" autosize placeholder="Please enter the content" />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import Upload from '@/components/Upload/SingleImage4'
import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky' // 粘性header组件
import { validURL } from '@/utils/validate'
import { saveStore, updateStore } from '@/api/store'
import { searchUser } from '@/api/remote-search'
import Warning from './Warning'
import { CommentDropdown, PlatformDropdown, SourceUrlDropdown } from './Dropdown'
import { lazyAMapApiLoaderInstance } from 'vue-amap'
import { MessageBox, Message } from 'element-ui'


const defaultForm = {
  name: '',
  module_id: 0,
  cover_file_id: undefined,
  area_code: undefined,
  location: '',
  lat: '',
  lng: '',
  phone: '',
  address: '',
  introduce: '',
  business_scope: ''
}

let id = 0;
export default {
  name: 'ArticleDetail',
  components: { MDinput, Upload, Sticky, Warning, CommentDropdown, PlatformDropdown, SourceUrlDropdown },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必传项',
          type: 'error'
        })
        callback(new Error(rule.field + '为必传项'))
      } else {
        callback()
      }
    }
    const validateSourceUri = (rule, value, callback) => {
      if (value) {
        if (validURL(value)) {
          callback()
        } else {
          this.$message({
            message: '外链url填写不正确',
            type: 'error'
          })
          callback(new Error('外链url填写不正确'))
        }
      } else {
        callback()
      }
    }
    return {
      map: undefined,
      zoom: 16,
      center: [121.59996, 31.197646],
      postForm: Object.assign({}, defaultForm),
      loading: false,
      userListOptions: [],
      rules: {
        image_uri: [{ validator: validateRequire }],
        title: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }],
        source_uri: [{ validator: validateSourceUri, trigger: 'blur' }]
      },
      tempRoute: {},
      area_props: {
        value: 'value',
        label: 'label',
        children: 'cities'
      },
      area_options: [{
        value: 1,
        label: '江苏',
        cities: [
          {
            value: 3,
            label: '江苏1',
            cities: []
          }
        ]
      }, {
        value: 2,
        label: '浙江',
        cities: []
      }]
    }
  },
  computed: {
    contentShortLength() {
      return this.postForm.content_short.length
    },
    displayTime: {
      // set and get is useful when the data
      // returned by the back end api is different from the front end
      // back end return => "2013-06-25 06:59:25"
      // front end need timestamp => 1372114765000
      get() {
        return (+new Date(this.postForm.display_time))
      },
      set(val) {
        this.postForm.display_time = new Date(val)
      }
    }
  },
  created() {
    this.center = [121.59996, 31.197646]
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    } else {
      this.postForm = Object.assign({}, defaultForm)
    }

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  mounted() {
    let _this = this
    setTimeout(function(){
      lazyAMapApiLoaderInstance.load().then(() => {
        // this.map = new AMap.Map('amap-demo1', {
        //   center: [121.59996, 31.197646],
        //   zoom: 16
        // })
        this.map = new AMap.Map('amap-demo1', {
          resizeEnable: true,
          zoom: 16
        });
        AMap.plugin('AMap.Geolocation', function() {
          var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：5s
            buttonPosition:'RB',    //定位按钮的停靠位置
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
          });
          map.addControl(geolocation);
          geolocation.getCurrentPosition(function(status,result){
            if(status=='complete'){
              onComplete(result)
            }else{
              onError(result)
            }
          });
        });
        //解析定位结果
        function onComplete(data) {
        }
        //解析定位错误信息
        function onError(data) {
          Message(data.message)
        }

        let map = _this.map = this.map
        this.map.on('click', function(e) {
          var marker = new AMap.Marker({
            icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [e.lnglat.getLng(), e.lnglat.getLat()]
          });
          map.clearMap()
          map.add(marker)
          let lng = e.lnglat.getLng()
          let lat = e.lnglat.getLat()
          _this.postForm.lng = lng
          _this.postForm.lat = lat
        });
      })
    }, 1000)
  },
  methods: {
    fetchData(id) {
      fetchArticle(id).then(response => {
        this.postForm = response.data

        // just for test
        this.postForm.title += `   Article Id:${this.postForm.id}`
        this.postForm.content_short += `   Article Id:${this.postForm.id}`

        // set tagsview title
        this.setTagsViewTitle()

        // set page title
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setTagsViewTitle() {
      const title = 'Edit Article'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.postForm.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = 'Edit Article'
      document.title = `${title} - ${this.postForm.id}`
    },
    submitForm() {
      this.loading = true
      saveStore(this.postForm).then((response) => {
        if (response.code == 1) {
          this.$notify({
            title: this.$t('messages.title.success'),
            message: this.$t('messages.success'),
            type: 'success',
            duration: 2000
          })
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    draftForm() {
      if (this.postForm.content.length === 0 || this.postForm.title.length === 0) {
        this.$message({
          message: '请填写必要的标题和内容',
          type: 'warning'
        })
        return
      }
      this.$message({
        message: '保存成功',
        type: 'success',
        showClose: true,
        duration: 1000
      })
      this.postForm.status = 'draft'
    },
    getRemoteUserList(query) {
      searchUser(query).then(response => {
        if (!response.data.items) return
        this.userListOptions = response.data.items.map(v => v.name)
      })
    },
    handleItemChange(val, label) {
      console.log('active item:', val);
      setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
          this.options2[0].cities = [{
            label: '南京'
          }];
        } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
          this.options2[1].cities = [{
            label: '杭州'
          }];
        }
      }, 300);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.amap-wrapper{
  height: 300px;
  margin-bottom: 40px;
}
.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea /deep/ {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
