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
          label-width="100px"
          :label="$t('messages.stores.input.no')"
          :required="true"
        >
          <el-input
            v-model="postForm.no"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            :placeholder="$t('messages.placeholder.common')"
          />
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.is_one')"
          :required="true"
        >
          <el-radio-group v-model="postForm.is_one">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="'办事处'"
        >{{agency.name}}</el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="'运营状态'"
          :required="true"
        >
          <el-radio-group v-model="postForm.operate_status">
            <el-radio :label="1">运营中</el-radio>
            <el-radio :label="0">停滞</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.module_id')"
          :required="true"
        >
          <Parent v-model="postForm.parent_id" :module_id="parent_module_id"></Parent>
        </el-form-item>

        <!-- <el-form-item
          v-if="parent_id > 0 || isEdit && postForm.parent_id > 0 || display_module"
          prop="cover_file_id"
          label-width="100px"
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
        </el-form-item>-->

        <el-form-item style="margin-bottom: 40px;" prop="title" />
        <el-form-item
          prop="cover_file_id"
          label-width="100px"
          :label="$t('messages.stores.input.cover_file_id')"
          :required="true"
          style="margin-bottom: 30px;"
        >
          <Upload v-model="postForm.cover_file_id" />
        </el-form-item>

        <!-- <el-form-item v-if="module_id == 1" prop="location_file_id" label-width="100px" :label="$t('messages.stores.input.location_file_id')" style="margin-bottom: 30px;">
          <Upload v-model="postForm.location_file_id" />
        </el-form-item>-->

        <!-- <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.business_hours')"
        >
          <el-input
            v-model="postForm.business_hours"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            :placeholder="$t('messages.placeholder.common')"
          />
        </el-form-item>-->

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.phone')"
          :required="true"
        >
          <el-input
            v-model="postForm.phone"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            :placeholder="$t('messages.placeholder.common')"
          />
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.area_code')"
          :required="true"
        >
          <Area v-model="postForm.area_code" ref="area"></Area>
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.address')"
          :required="true"
        >
          <el-input
            v-model="postForm.address"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            :placeholder="$t('messages.placeholder.common')"
            @blur="resetMap"
          />
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.lat_lng')"
          :required="true"
        >
          <Map v-model="mapData" id="map" ref="map" :is-edit="isEdit"></Map>
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.introduce')"
          :required="true"
        >
          <el-input
            v-model="postForm.introduce"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            :placeholder="$t('messages.placeholder.common')"
          />
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.business_scope')"
          :required="true"
        >
          <el-input
            v-model="postForm.business_scope"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            :placeholder="$t('messages.placeholder.common')"
          />
        </el-form-item>

        <!-- <el-form-item
          prop="plan_file_id"
          label-width="100px"
          :label="$t('messages.stores.input.plan_file_id')"
          style="margin-bottom: 30px;"
        >
          <Upload v-model="postForm.plan_file_id" />
        </el-form-item>-->

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.establishment_time')"
          :required="true"
        >
          <el-date-picker
            value-format="timestamp"
            v-model="postForm.establishment_time"
            type="date"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>

        <!-- <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.sales_area')"
        >
          <el-input
            v-model="postForm.sales_area"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            :placeholder="$t('messages.placeholder.common')"
          />
        </el-form-item> -->

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.competitors')"
          :required="false"
        >
          <Competitors v-model="postForm.competitors" />
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px; display: none;"
          label-width="100px"
          :label="$t('messages.stores.input.terminal_construction')"
          :required="true"
        >
          <terminal-construction v-model="postForm.terminal_construction"></terminal-construction>
        </el-form-item>

        <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="'项目建设费用'"
          :required="true"
        >
          <project-build-fee v-model="postForm.project_build_fee"></project-build-fee>
        </el-form-item>

        <!-- <el-form-item
          style="margin-bottom: 40px;"
          label-width="100px"
          :label="$t('messages.stores.input.business_product')"
        >
          <el-input
            v-model="postForm.business_product"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
            :placeholder="$t('messages.placeholder.common')"
          />
        </el-form-item> -->
      </div>
    </el-form>
  </div>
</template>

<script>
import Upload from "@/components/Upload/SingleImage4";
import MDinput from "@/components/MDinput";
import Sticky from "@/components/Sticky"; // 粘性header组件
// import { validURL } from '@/utils/validate'
import { storeSaveShop, storeUpdateShop, readStore } from "@/api/store";
import { searchUser } from "@/api/remote-search";
import Warning from "./Warning";
import Competitors from "./Competitors";
import TerminalConstruction from "./TerminalConstruction";
import ProjectBuildFee from "./ProjectBuildFee";
import Map from "./Map";
import Area from "./Area";
import Parent from "./Parent";
import { lazyAMapApiLoaderInstance } from "vue-amap";
import { Message } from "element-ui";

import { indexArea } from "@/api/area";
import { indexModule } from "@/api/module";
import { Decimal } from "decimal.js";
import { mapGetters } from "vuex";

const defaultForm = {
  name: "",
  is_one: 0,
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
  range: [],
  sales_area: "",
  plan_file_id: undefined,
  establishment_time: undefined,
  sales_area: "",
  competitors: undefined,
  terminal_construction: undefined,
  project_build_fee: undefined,
  business_product: "",
  no: undefined,
  agency_id: undefined
};

// const id = 0
export default {
  name: "DetailStoreShop",
  components: {
    MDinput,
    Upload,
    Sticky,
    Competitors,
    Map,
    Area,
    Parent,
    TerminalConstruction,
    ProjectBuildFee
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(["agency"])
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

    this.parent_module_id = this.$route.meta.parent_module_id;

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
          this.postForm = response.data;
          this.postForm.establishment_time *= 1000;
          this.mapData = {
            lat: response.data.lat,
            lng: response.data.lng,
            range: response.data.range
          };
          this.$refs.area.initEditArea(this.postForm.area_code);
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitForm() {
      this.loading = true;
      let postData = Object.assign({}, { ...this.postForm, ...this.mapData });
      postData.agency_id = this.agency.id;
      postData.establishment_time /= 1000;
      if (this.isEdit) {
        storeUpdateShop(postData.id, postData)
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
        storeSaveShop(postData)
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
