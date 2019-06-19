<template>
  <div class="app-container">
    <div class="filter-container">
      <el-date-picker
        class="filter-item"
        v-model="query.month"
        type="monthrange"
        value-format="timestamp"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份">
      </el-date-picker>
      <el-button class="filter-item" icon="el-icon-search" @click="handleFilter">
        {{$t('messages.button.search')}}
      </el-button>
    </div>
    <chart height="80%" width="100%" :list="chartData" />
  </div>
</template>

<script>
import Chart from '@/components/Charts/MultiLine'
import { statisticCreate } from '@/api/store'

const query = {
	parent_module_id: 0,
	module_id: 0,
	month: []
}
const chartData = {
  series: [],
  xData: []
}
export default {
  name: 'statistic',
  components: { Chart },
  data() {
    return {
		  chartData: Object.assign({}, chartData),
      query: Object.assign({}, query)
    }
  },
  created() {
    this.query.parent_module_id = 3
  	this.statisticCreate()
  },
  methods: {
  	async statisticCreate() {
      let query = JSON.parse(JSON.stringify(this.query))
      if (query.month !== null && query.month.length == 2) {
        query.month[0] = query.month[0] / 1000
        query.month[1] = query.month[1] / 1000
      }
      const res = await statisticCreate(query)
      this.chartData = res.data
  	},
    handleFilter() {
      this.statisticCreate()
    }
  }
}
</script>

<style scoped>
.app-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
