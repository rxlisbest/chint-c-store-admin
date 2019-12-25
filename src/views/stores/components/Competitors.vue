<template>
  <div class="competitors-container">
    <el-row v-if="value.length === 0">
      <el-col :span="4">
        <el-input
          v-model="v.name"
          :rows="3"
          type="textarea"
          class="article-textarea"
          autosize
          :placeholder="$t('messages.stores.input.competitors_children.name')"
        />
      </el-col>
      <el-col :span="4" :offset="1">
        <el-input
          v-model="v.money"
          :rows="3"
          type="textarea"
          class="article-textarea"
          autosize
          :placeholder="$t('messages.stores.input.competitors_children.money')"
        />
      </el-col>
      <el-col :span="10" :offset="1">
        <el-input
          v-model="v.introduce"
          :rows="3"
          type="textarea"
          class="article-textarea"
          autosize
          :placeholder="$t('messages.stores.input.competitors_children.introduce')"
        />
      </el-col>
    </el-row>
    <template v-else>
      <template v-for="(v, k) in value">
        <el-row>
          <el-col :span="4">
            <el-input
              v-model="v.name"
              :rows="3"
              type="textarea"
              class="article-textarea"
              autosize
              :placeholder="$t('messages.stores.input.competitors_children.name')"
            />
          </el-col>
          <el-col :span="4" :offset="1">
            <el-input
              v-model="v.money"
              :rows="3"
              type="textarea"
              class="article-textarea"
              autosize
              :placeholder="$t('messages.stores.input.competitors_children.money')"
            />
          </el-col>
          <el-col :span="10" :offset="1">
            <el-input
              v-model="v.introduce"
              :rows="3"
              type="textarea"
              class="article-textarea"
              autosize
              :placeholder="$t('messages.stores.input.competitors_children.introduce')"
            />
          </el-col>
          <el-col :span="1" :offset="1" v-if="k > 0">
            <el-button @click="removeItem(v)">
              <i class="el-icon-delete"></i>
            </el-button>
          </el-col>
        </el-row>
      </template>
    </template>

    <el-row :gutter="50">
      <el-col :span="10">
        <el-button @click="addItem">新增域名</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
import { saveFile, getInfo } from "@/api/file";

const domain = process.env.VUE_APP_BASE_API;

const defaultItem = {
  name: "",
  money: "",
  introduce: ""
};

const defaultList = [Object.assign({}, defaultItem)];

export default {
  name: "Competitors",
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
    };
  },
  computed: {},
  created() {},
  watch: {},
  methods: {
    removeItem(item) {
      let list = Object.assign([], this.value);
      var index = list.indexOf(item);
      if (index !== -1) {
        list.splice(index, 1);
      }
      this.emitInput(list);
    },
    addItem() {
      let list = Object.assign([], this.value);
      list.push(Object.assign({}, defaultItem));
      this.emitInput(list);
    },
    emitInput(val) {
      this.$emit("input", val);
    },
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.competitors-container {
  width: 100%;
  position: relative;
  @include clearfix;
  .article-textarea /deep/ {
    textarea {
      padding-right: 40px;
      resize: none;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid #bfcbd9;
    }
  }
}
</style>
