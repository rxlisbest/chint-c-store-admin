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
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    list() {
      this.initChart();
    }
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      let _this = this;
      this.chart = echarts.init(document.getElementById(this.id));

      const xAxisData = [];
      const series1 = [];
      const series2 = [];
      for (let v of this.list) {
        xAxisData.push(v.area);
        series1.push(v.value);
        series2.push(v.num);
      }

      var colors = ["#5793f3", "#d14a61"];
      this.chart.setOption({
        color: colors,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        grid: {
          // right: "20%"
        },
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        legend: {
          data: ["预估销售额", "竞争对手个数"]
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            data: xAxisData
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "预估销售额（万）",
            min: 0,
            max: 250,
            position: "left",
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: "{value} 万"
            }
          },
          {
            type: "value",
            name: "竞争对手个数（个）",
            min: 0,
            max: 250,
            position: "right",
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: "{value} 个"
            }
          }
        ],
        series: [
          {
            name: "预估销售额",
            type: "bar",
            barWidth: '50',
            data: series1
          },
          {
            name: "竞争对手个数",
            type: "bar",
            yAxisIndex: 1,
            barWidth: '50',
            data: series2
          }
        ]
      });
    }
  }
};
</script>
