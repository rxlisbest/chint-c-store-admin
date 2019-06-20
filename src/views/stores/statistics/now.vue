<template>
  <div class="app-container">
    <chart height="100%" width="100%" :list="chartData" />
  </div>
</template>

<script>
import Chart from '@/components/Charts/Pie'
import { statisticNow } from '@/api/store'

const query = {
	parent_module_id: 0,
	module_id: 0,
  parent_id: 0
}
const chartData = []
export default {
  name: 'statistic-now',
  components: { Chart },
  data() {
    return {
		  chartData: Object.assign([], chartData),
      query: Object.assign({}, query)
    }
  },
  created() {
    this.query.parent_module_id = this.$route.meta.parent_module_id
    this.query.module_id = this.$route.meta.module_id
    this.query.parent_id = this.$route.params && this.$route.query.parent_id
  	this.statisticNow()
  },
  methods: {
  	async statisticNow() {
      const res = await statisticNow(this.query)
      this.chartData = res.data
  	},
    handleFilter() {
      this.statisticNow()
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
