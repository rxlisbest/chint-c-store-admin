<template>
  <div class="parent-container">
    <el-select v-model="valueData" filterable placeholder="请选择">
      <el-option 
      v-for="item in options" 
      :key="item.id" 
      :label="item.name" 
      :value="item.id"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { storeAll } from "@/api/store";

export default {
  name: "Parent",
  props: {
    value: {
      type: Number,
      default: undefined,
    },
    module_id: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      options: [],
      valueData: this.value
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.initOptions();
  },
  watch: {
    valueData(val) {
      this.emitInput(val);
    },
    value(val) {
      this.valueData = val;
    }
  },
  methods: {
    emitInput(val) {
      this.$emit("input", val);
    },
    async initOptions() {
      let res = await storeAll({module_id: this.module_id})
      this.options = res.data
    },
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.parent-container {
  width: 100%;
  position: relative;
  @include clearfix;
}
</style>
