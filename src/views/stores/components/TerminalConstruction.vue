<template>
  <div class="terminal-construction-container">
    <el-transfer v-model="has" :data="list"></el-transfer>
  </div>
</template>

<script>
import { allTagend } from "@/api/tagend";
const defaultList = [];

export default {
  name: "TerminalConstruction",
  props: {
    value: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      list: [],
      has: []
    };
  },
  computed: {},
  created() {
    this.getList()
    if (!this.value) {
      this.emitInput(defaultList);
    }
  },
  mounted() {
  },
  watch: {
    has(val) {
      this.$emit("input", val);
      console.log(val)
    }
  },
  methods: {
    async getList() {
      let res = await allTagend();
      let list = []
      res.data.forEach(v => {
        let disabled = false;
        list.push({ key: v.id, label: v.name, disabled: disabled });
      });
      this.list = list
      this.has = this.value
    },
    emitInput(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.terminal-construction-container {
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
