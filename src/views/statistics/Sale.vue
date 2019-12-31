<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="query.area" placeholder="请选择" class="filter-item">
        <el-option
          v-for="item in areaOptions"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        ></el-option>
      </el-select>
      <!-- <el-select v-model="query.type" placeholder="请选择" class="filter-item">
        <el-option
          v-for="item in typeOptions"
          :key="item"
          :label="item"
          :value="item"
        ></el-option>
      </el-select> -->
      <el-date-picker v-model="query.year" type="year" value-format="yyyy" class="filter-item" placeholder="选择年"></el-date-picker>
      <el-button
        class="filter-item"
        icon="el-icon-search"
        @click="handleFilter"
      >{{$t('messages.button.search')}}</el-button>
    </div>
    <chart height="80%" width="100%" :list="chartData" :yAxisName="'预估销售额(万)'" :yAxisUnit="'万'" />
  </div>
</template>

<script>
import Chart from "@/components/Charts/SingleBar";
import { Sale } from "@/api/statistics";
import { indexArea } from "@/api/area";

// const typeArray = [
//   'SI专卖店',
//   '电气工业超市旗舰店',
//   '电气工业超市标准店',
//   '电气工业超市单体店',
//   '品牌体验馆',
//   '户外广告',
//   '正泰岗亭',
//   '二级形象店',
//   '二级门招',
//   '二级货架',
// ]

const query = {
  area: 330000,
  // type: 'SI专卖店',
  year: (new Date()).getFullYear().toString()
};
const chartData = [];
export default {
  name: "Sale",
  components: { Chart },
  data() {
    return {
      areaOptions: [],
      // typeOptions: Object.assign([], typeArray),
      chartData: Object.assign([], chartData),
      query: Object.assign({}, query)
    };
  },
  created() {
    this.initAreaOptions();
    this.initChart()
  },
  methods: {
    async initAreaOptions() {
      const res = await indexArea();
      this.areaOptions = res.data;
    },
    async initChart() {
      const res = await Sale(this.query);
      this.chartData = res.data;
    },
    handleFilter() {
      this.initChart();
    }
  }
};
</script>

<style scoped>
.app-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
