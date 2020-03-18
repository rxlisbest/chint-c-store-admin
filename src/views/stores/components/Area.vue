<template>
  <div class="area-container">
    <el-cascader
      v-model="valueData"
      :options="area_options"
      :props="area_props"
      @active-item-change="handleAreaItemChange"
      @change="handleAreaChange"
    ></el-cascader>
    <span>所属办事处：{{agency_name}}</span>
  </div>
</template>

<script>
import { indexArea } from "@/api/area";

export default {
  name: "Area",
  props: {
    value: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      area_options: [],
      area_props: {
        value: "code",
        label: "name",
        children: "children"
      },
      valueData: this.value,
      agency_name: "办事处",
      province: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.initArea();
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
    handleAreaItemChange(val) {
      const _this = this;
      const params = {};
      params.code = val[val.length - 1];
      indexArea(params)
        .then(res => {
          _this.setAreaChildren(val[val.length - 1], res.data);
        })
        .catch(err => {});
    },
    handleAreaChange(val) {
      this.province.forEach((v, k) => {
        if (v.code == val[0]) {
          this.agency_name = v.agency_name;
        }
      });
      this.getAreaName(val);
    },
    getAreaName(value) {
      const _this = this;
      const area_options = this.area_options;
      const name = [];
      _this.area_options.forEach((v, k) => {
        // console.log(v)
        if (v.code == value[0]) {
          name.push(v.name);
          v.children.forEach((vv, kk) => {
            if (vv.code == value[1]) {
              name.push(vv.name);
              vv.children.forEach((vvv, kkk) => {
                if (vvv.code == value[2]) {
                  name.push(vvv.name);
                }
                return true;
              });
            }
            return true;
          });
        }
        return true;
      });
      return name;
    },
    initArea() {
      const _this = this;
      indexArea()
        .then(res => {
          let data = res.data;
          data.forEach((v, k) => {
            data[k].children = [];
          });
          _this.area_options = data;
          this.province = data;
        })
        .catch(err => {});
    },
    setAreaChildren(code, children) {
      const _this = this;
      const area_options = this.area_options;
      _this.area_options.forEach((v, k) => {
        // console.log(v)
        if (v.code == code) {
          children.forEach((vv, kk) => {
            children[kk].children = [];
          });
          _this.area_options[k].children = children;
        } else {
          v.children.forEach((vv, kk) => {
            if (vv.code == code) {
              _this.area_options[k].children[kk].children = children;
            }
          });
        }
      });

      // this.province.forEach((v, k) => {
      //   if (v.code == val[0]) {
      //     this.agency_name = v.agency_name;
      //   }
      // });
    },
    initEditArea(area_code) {
      const _this = this;
      if (area_code && area_code.length == 3) {
        const params = {};
        params.code = area_code[0];
        indexArea(params)
          .then(res => {
            _this.setAreaChildren(area_code[0], res.data);
            params.code = area_code[1];
            indexArea(params)
              .then(res => {
                _this.setAreaChildren(area_code[1], res.data);
              })
              .catch(err => {});
          })
          .catch(err => {});
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.area-container {
  width: 100%;
  position: relative;
  @include clearfix;
}
</style>
