<template>
  <div class="competitors-container">
    <template v-for="(v, k) in value">
      <el-row>
        <el-col :span="8">项目</el-col>
        <el-col :span="6">费用（元）</el-col>
        <el-col :span="8">时间</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-input v-model="v.name" :rows="3" type="textarea" class="article-textarea" autosize />
        </el-col>
        <el-col :span="6">
          <el-input v-model="v.money" :rows="3" type="textarea" class="article-textarea" autosize />
        </el-col>
        <el-col :span="8">
          <el-date-picker v-model="v.date" type="date" placeholder="选择日期"></el-date-picker>
        </el-col>
        <el-col :span="1" :offset="1" v-if="k > 0">
          <el-button @click="removeItem(v)">
            <i class="el-icon-delete"></i>
          </el-button>
        </el-col>
      </el-row>
    </template>

    <el-row :gutter="50">
      <el-col :span="10">
        <el-button @click="addItem">{{ $t('messages.button.create') }}项目建设费用</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const defaultItem = {
  name: "",
  money: "",
  introduce: ""
};

const defaultList = [Object.assign({}, defaultItem)];

export default {
  name: "ProjectBuildFee",
  props: {
    value: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    if (!this.value) {
      this.emitInput(defaultList);
    }
  },
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
    }
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
      padding-left: 0px;
      padding-right: 0px;
      width: 90%;
      margin-right: 10px;
      resize: none;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid #bfcbd9;
    }
  }
  .el-row {
    margin-top: 10px;
  }
}
</style>
