<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "200px"
    },
    yAxisName: {
      type: String,
      default: ""
    },
    yAxisUnit: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    list(val) {
      this.initChart();
    }
  },
  mounted() {
    this.initChart();
  },
  mounted() {},
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      const xAxisData = [];
      const series = [];
      for (let v of this.list) {
        xAxisData.push(v.area);
        series.push(v.value);
      }
      
      const yAxisName = this.yAxisName
      const yAxisUnit = this.yAxisUnit

      this.chart.setOption({
        xAxis: {
          type: "category",
          data: xAxisData
        },
        yAxis: {
          name: yAxisName,
          type: "value",
          axisLabel: {
            formatter: "{value} " + yAxisUnit
          }
        },
        series: [
          {
            data: series,
            barWidth: '50',
            type: "bar"
          }
        ]
      });
    }
  }
};
</script>
