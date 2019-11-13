<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" class="form-container">
      <sticky :z-index="10" :class-name="'sub-navbar '+ postForm.status">
        <el-button
          v-loading="loading"
          style="margin-left: 10px;"
          type="success"
          @click="submitForm"
        >{{ $t('messages.stores.button.submit') }}</el-button>
        <!-- <el-button v-loading="loading" type="warning" @click="draftForm">
          Draft
        </el-button>-->
      </sticky>

      <div class="createPost-main-container">
        <el-form-item style="margin-bottom: 40px;" prop="title">
          <MDinput
            v-model="postForm.name"
            :maxlength="100"
            name="name"
            required
          >{{ $t('messages.stores.input.name') }}</MDinput>
        </el-form-item>

        <el-form-item
          v-if="parent_id > 0 || isEdit && postForm.parent_id > 0 || display_module"
          prop="cover_file_id"
          label-width="72px"
          :label="$t('messages.stores.input.module_id')"
          style="margin-bottom: 30px;"
        >
          <el-select v-model="postForm.module_id" placeholder="请选择">
            <el-option
              v-for="item in module_options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
              v-if="item.is_group == 0"
            />
            <el-option-group
              v-for="item in module_options"
              :key="item.id"
              :label="item.name"
              v-if="item.is_group == 1"
            >
              <el-option
                v-for="child in item.children"
                :key="child.id"
                :label="child.name"
                :value="child.id"
              ></el-option>
            </el-option-group>
          </el-select>
        </el-form-item>

        <el-form-item style="margin-bottom: 40px;" prop="title" />
        <el-form-item
          prop="cover_file_id"
          label-width="72px"
          :label="$t('messages.stores.input.cover_file_id')"
          style="margin-bottom: 30px;"
        >
          <Upload v-model="postForm.cover_file_id" />
        </el-form-item>

        <!-- <el-form-item v-if="module_id == 1" prop="location_file_id" label-width="72px" :label="$t('messages.stores.input.location_file_id')" style="margin-bottom: 30px;">
          <Upload v-model="postForm.location_file_id" />
        </el-form-item>-->

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="72px"
          :label="$t('messages.stores.input.business_hours')"
        >
          <el-input
            v-model="postForm.business_hours"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            placeholder="Please enter the content"
          />
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="72px"
          :label="$t('messages.stores.input.phone')"
        >
          <el-input
            v-model="postForm.phone"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            placeholder="Please enter the content"
          />
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="72px"
          :label="$t('messages.stores.input.area_code')"
        >
          <el-cascader
            v-model="postForm.area_code"
            :options="area_options"
            :props="area_props"
            @active-item-change="handleAreaItemChange"
            @change="handleAreaChange"
          />
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="72px"
          :label="$t('messages.stores.input.address')"
        >
          <el-input
            v-model="postForm.address"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            placeholder="Please enter the content"
            @blur="resetMap"
          />
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="72px"
          :label="$t('messages.stores.input.lat_lng')"
        >
          <div id="amap-demo1" class="amap-wrapper" />
          <div class="range-edit" v-if="!(parent_id > 0 || isEdit && postForm.parent_id > 0 || display_module)">
            <div
              class="range-edit-button"
              style="margin-bottom: 5px"
              @click="polyEditor.open()"
            >{{ $t('messages.stores.input.range_edit') }}</div>
            <div
              class="range-save-button"
              @click="polyEditor.close()"
            >{{ $t('messages.stores.input.range_save') }}</div>
          </div>
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="72px"
          :label="$t('messages.stores.input.introduce')"
        >
          <el-input
            v-model="postForm.introduce"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            placeholder="Please enter the content"
          />
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="72px"
          :label="$t('messages.stores.input.business_scope')"
        >
          <el-input
            v-model="postForm.business_scope"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            placeholder="Please enter the content"
          />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import Upload from "@/components/Upload/SingleImage4";
import MDinput from "@/components/MDinput";
import Sticky from "@/components/Sticky"; // 粘性header组件
// import { validURL } from '@/utils/validate'
import { saveStore, updateStore, readStore } from "@/api/store";
import { searchUser } from "@/api/remote-search";
import Warning from "./Warning";
import { lazyAMapApiLoaderInstance } from "vue-amap";
import { Message } from "element-ui";

import { indexArea } from "@/api/area";
import { indexModule } from "@/api/module";
import { Decimal } from "decimal.js";

const defaultForm = {
  name: "",
  module_id: undefined,
  parent_id: 0,
  cover_file_id: undefined,
  // location_file_id: undefined,
  area_code: [],
  location: "",
  lat: "",
  lng: "",
  phone: "",
  business_hours: "",
  address: "",
  introduce: "",
  business_scope: "",
  range: []
};

// const id = 0
export default {
  name: "Detail",
  components: { MDinput, Upload, Sticky },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      module_id: 0,
      parent_module_id: 0,
      parent_id: 0,
      map: undefined,
      polyEditor: undefined,
      zoom: 16,
      center: [121.59996, 31.197646],
      postForm: Object.assign({}, defaultForm),
      loading: false,
      userListOptions: [],
      tempRoute: {},
      area_props: {
        value: "code",
        label: "name",
        children: "children"
      },
      area_options: [],
      module_options: [],
      display_module: false
    };
  },
  computed: {},
  watch: {},
  created() {
    this.center = [121.59996, 31.197646];
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id;
      this.fetchData(id);
    } else {
      this.postForm = Object.assign({}, defaultForm);
    }

    this.module_id = this.$route.meta.module_id;
    console.log(this.$route.meta.parent_module_id)
    if (this.$route.meta.parent_module_id == 21) {
      this.display_module = true
      this.indexModule(this.$route.meta.parent_module_id);
    }
    if (
      this.$route.query &&
      this.$route.query.parent_id &&
      this.$route.query.parent_module_id
    ) {
      this.parent_id = this.postForm.parent_id =
        this.$route.query && this.$route.query.parent_id;
      this.parent_module_id = this.$route.query.parent_module_id;
      this.indexModule(this.parent_module_id);
    } else {
      this.postForm.module_id = this.module_id;
    }

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route);
  },
  mounted() {
    const _this = this;
    setTimeout(function() {
      lazyAMapApiLoaderInstance.load().then(() => {
        if (_this.isEdit) {
          this.map = new AMap.Map("amap-demo1", {
            center: [_this.postForm.lng, _this.postForm.lat],
            zoom: 16
          });
        } else {
          this.map = new AMap.Map("amap-demo1", {
            resizeEnable: true,
            zoom: 16
          });
          AMap.plugin("AMap.Geolocation", function() {
            var geolocation = new AMap.Geolocation({
              enableHighAccuracy: true, // 是否使用高精度定位，默认:true
              timeout: 10000, // 超过10秒后停止定位，默认：5s
              buttonPosition: "RB", // 定位按钮的停靠位置
              buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
              zoomToAccuracy: true // 定位成功后是否自动调整地图视野到定位点
            });
            setTimeout(() => {
              map.addControl(geolocation);
            }, 0);
            geolocation.getCurrentPosition(function(status, result) {
              if (status == "complete") {
                onComplete(result);
              } else {
                onError(result);
              }
            });
          });
        }
        // this.map = new AMap.Map('amap-demo1', {
        //   center: [121.59996, 31.197646],
        //   zoom: 16
        // })
        // 解析定位结果
        function onComplete(data) {}
        // 解析定位错误信息
        function onError(data) {
          Message(data.message);
        }

        const map = (_this.map = this.map);

        if (_this.isEdit) {
          var marker = new AMap.Marker({
            icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [_this.postForm.lng, _this.postForm.lat]
          });
          map.add(marker);
          _this.setRange(
            _this.map,
            _this.postForm.lng,
            _this.postForm.lat,
            _this.postForm.range
          );
        }

        this.map.on("click", function(e) {
          var marker = new AMap.Marker({
            icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [e.lnglat.getLng(), e.lnglat.getLat()]
          });
          map.clearMap();
          map.add(marker);
          const lng = e.lnglat.getLng();
          const lat = e.lnglat.getLat();
          _this.postForm.lng = lng;
          _this.postForm.lat = lat;

          _this.setRange(map, lng, lat);
        });
      });
    }, 1000);
    this.initArea();
  },
  methods: {
    indexModule(parent_id) {
      indexModule({ parent_id: parent_id })
        .then(response => {
          this.module_options = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchData(id) {
      readStore(id)
        .then(response => {
          this.postForm = response.data;
          if (this.postForm.parent_id > 0) {
            this.indexModule(1);
          }
          this.initEditArea();
        })
        .catch(err => {
          console.log(err);
        });
    },
    setTagsViewTitle() {
      const title = "Edit Article";
      const route = Object.assign({}, this.tempRoute, {
        title: `${title}-${this.postForm.id}`
      });
      this.$store.dispatch("tagsView/updateVisitedView", route);
    },
    setPageTitle() {
      const title = "Edit Article";
      document.title = `${title} - ${this.postForm.id}`;
    },
    submitForm() {
      this.loading = true;
      if (this.isEdit) {
        updateStore(this.postForm.id, this.postForm)
          .then(response => {
            if (response.code == 1) {
              this.$notify({
                title: this.$t("messages.title.success"),
                message: this.$t("messages.success"),
                type: "success",
                duration: 2000,
                onClose: () => {
                  this.$router.go(-1);
                }
              });
            }
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });
      } else {
        saveStore(this.postForm)
          .then(response => {
            if (response.code == 1) {
              this.$notify({
                title: this.$t("messages.title.success"),
                message: this.$t("messages.success"),
                type: "success",
                duration: 2000,
                onClose: () => {
                  this.$router.go(-1);
                }
              });
            }
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
    // draftForm() {
    //   if (this.postForm.content.length === 0 || this.postForm.title.length === 0) {
    //     this.$message({
    //       message: '请填写必要的标题和内容',
    //       type: 'warning'
    //     })
    //     return
    //   }
    //   this.$message({
    //     message: '保存成功',
    //     type: 'success',
    //     showClose: true,
    //     duration: 1000
    //   })
    //   this.postForm.status = 'draft'
    // },
    getRemoteUserList(query) {
      searchUser(query).then(response => {
        if (!response.data.items) return;
        this.userListOptions = response.data.items.map(v => v.name);
      });
    },
    handleAreaChange(val) {
      this.getAreaName(val);
    },
    handleAreaItemChange(val) {
      const _this = this;
      const params = {};
      params.code = val[val.length - 1];
      indexArea(params)
        .then(res => {
          _this.setAreaChildren(val[val.length - 1], res.data);
        })
        .catch(err => {});
    },
    initArea() {
      const _this = this;
      indexArea()
        .then(res => {
          const data = res.data;
          data.forEach((v, k) => {
            data[k].children = [];
          });
          _this.area_options = data;
        })
        .catch(err => {});
    },
    initEditArea() {
      const _this = this;
      if (_this.postForm.area_code && _this.postForm.area_code.length == 3) {
        const params = {};
        params.code = _this.postForm.area_code[0];
        indexArea(params)
          .then(res => {
            _this.setAreaChildren(_this.postForm.area_code[0], res.data);
            params.code = _this.postForm.area_code[1];
            indexArea(params)
              .then(res => {
                _this.setAreaChildren(_this.postForm.area_code[1], res.data);
              })
              .catch(err => {});
          })
          .catch(err => {});
      }
    },
    setAreaChildren(code, children) {
      const _this = this;
      const area_options = this.area_options;
      _this.area_options.forEach((v, k) => {
        // console.log(v)
        if (v.code == code) {
          children.forEach((vv, kk) => {
            children[kk].children = [];
          });
          _this.area_options[k].children = children;
        } else {
          v.children.forEach((vv, kk) => {
            if (vv.code == code) {
              _this.area_options[k].children[kk].children = children;
            }
          });
        }
      });
    },
    getAreaName(value) {
      const _this = this;
      const area_options = this.area_options;
      const name = [];
      _this.area_options.forEach((v, k) => {
        // console.log(v)
        if (v.code == value[0]) {
          name.push(v.name);
          v.children.forEach((vv, kk) => {
            if (vv.code == value[1]) {
              name.push(vv.name);
              vv.children.forEach((vvv, kkk) => {
                if (vvv.code == value[2]) {
                  name.push(vvv.name);
                }
                return true;
              });
            }
            return true;
          });
        }
        return true;
      });
      return name;
    },
    resetMap() {
      const _this = this;
      let area_code = this.getAreaName(this.postForm.area_code);
      area_code = area_code.join(" ");
      const address = area_code + " " + this.postForm.address;

      lazyAMapApiLoaderInstance.load().then(() => {
        AMap.plugin("AMap.Geocoder", function() {
          const geocoder = new AMap.Geocoder();
          const marker = new AMap.Marker();
          geocoder.getLocation(address, (status, result) => {
            if (status === "complete" && result.geocodes.length) {
              const lnglat = result.geocodes[0].location;
              // this.map.add(marker)
              marker.setPosition(lnglat);
              _this.map.setFitView(marker);
            } else {
              // log.error('根据地址查询位置失败')
            }
          });
        });
      });
    },
    setRange(map, lng, lat, range) {
      const _this = this;
      lng = new Decimal(lng);
      lat = new Decimal(lat);
      if (!range) {
        range = [
          [lng.minus(0.0002).toFixed(6), lat.minus(0.0002).toFixed(6)],
          [lng.minus(0.0002).toFixed(6), lat.add(0.0002).toFixed(6)],
          [lng.add(0.0002).toFixed(6), lat.add(0.0002).toFixed(6)],
          [lng.add(0.0002).toFixed(6), lat.minus(0.0002).toFixed(6)]
        ];
      }

      _this.postForm.range = range;
      // 画范围
      var path = Object.assign([], range);

      var polygon = new AMap.Polygon({
        path: path,
        strokeColor: "#FF33FF",
        strokeWeight: 6,
        strokeOpacity: 0.2,
        fillOpacity: 0.4,
        fillColor: "#1791fc",
        zIndex: 50
      });

      map.add(polygon);
      map.setFitView([polygon]);
      var polyEditor = new AMap.PolyEditor(map, polygon);

      polyEditor.on("addnode", function(event) {
        console.log("触发事件：addnode");
      });

      polyEditor.on("adjust", function(event) {
        console.log("触发事件：adjust");
      });

      polyEditor.on("removenode", function(event) {
        console.log("触发事件：removenode");
      });

      polyEditor.on("end", function(event) {
        console.log("触发事件： end");
        // event.target 即为编辑后的多边形对象
        const rangeArr = event.target.toString().split(";");
        const range = new Array();
        rangeArr.forEach((v, k) => {
          range.push(v.split(","));
        });
        _this.postForm.range = range;
      });
      this.polyEditor = polyEditor;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.amap-wrapper {
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

.range-edit {
  margin-top: -30px;
  width: 150px;
}

.range-edit-button {
  width: 150px;
  text-align: center;
  border: 1px solid #888;
}

.range-save-button {
  text-align: center;
  border: 1px solid #888;
}
</style>
