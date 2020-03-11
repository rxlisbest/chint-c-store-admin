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
          style="margin-bottom: 40px;"
          label-width="72px"
          :label="$t('messages.stores.input.module_id')"
        >
          <Parent v-model="postForm.parent_id" :module_id="1"></Parent>
        </el-form-item>


        <el-form-item
          style="margin-bottom: 40px;"
          label-width="72px"
          :label="$t('messages.stores.input.area_code')"
        >
          <Area v-model="postForm.area_code" ref="area"></Area>
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
import { storeSaveAgent, storeUpdateAgent, readStore } from "@/api/store";
import { searchUser } from "@/api/remote-search";
import Warning from "./Warning";
import Competitors from "./Competitors";
import Map from "./Map";
import Area from "./Area";
import Parent from "./Parent";
import { lazyAMapApiLoaderInstance } from "vue-amap";
import { Message } from "element-ui";

import { indexArea } from "@/api/area";
import { indexModule } from "@/api/module";
import { Decimal } from "decimal.js";

const defaultForm = {
  name: "",
  module_id: undefined,
  parent_id: undefined,
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
  range: "",
  sales_area: "",
  plan_file_id: undefined,
  establishment_time: 0,
  sales_area: "",
  competitors: "",
  terminal_construction: "",
  business_product: "",
};

// const id = 0
export default {
  name: "DetailMarketAgent",
  components: { MDinput, Upload, Sticky, Competitors, Map, Area, Parent },
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
      display_module: false,
      mapData: undefined
    };
  },
  computed: {},
  watch: {},
  created() {
    this.center = [121.59996, 31.197646];
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.store_id;
      this.fetchData(id);
    } else {
      this.postForm = Object.assign({}, defaultForm);
    }

    this.module_id = this.$route.meta.module_id;

    this.postForm.module_id = this.module_id;

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route);
  },
  mounted() {
    // this.initArea();
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
          this.postForm = Object.assign({}, {...defaultForm, id: response.data.id, name: response.data.name, parent_id: response.data.parent_id});
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitForm() {
      this.loading = true;
      let postData = Object.assign({}, { ...this.postForm, ...this.mapData });
      if (this.isEdit) {
        storeUpdateAgent(postData.id, postData)
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
        storeSaveAgent(postData)
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
    resetMap() {
      let area_code = this.$refs.area.getAreaName(this.postForm.area_code);
      area_code = area_code.join(" ");
      const address = area_code + " " + this.postForm.address;
      this.$refs.map.resetMap(address);
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
