<template>
  <div class="role-container">
    <div class="market-container">
      <el-row>
        <el-col :span="4">
          <el-checkbox v-model="marketObject.market1" @change="changeStatus('market', 1)">专业市场</el-checkbox>
        </el-col>
        <el-col :span="4">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market2" @change="changeStatus('market', 2)">一级经销商</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market11"
                @change="changeStatus('market', 11)"
              >二级分销商</el-checkbox>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market3" @change="changeStatus('market', 3)">门店</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market8" @change="changeStatus('market', 8)">媒介广告</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market12"
                @change="changeStatus('market', 12)"
              >二级形象店</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market13" @change="changeStatus('market', 13)">二级门招</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market14" @change="changeStatus('market', 14)">二级货架</el-checkbox>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market15"
                @change="changeStatus('market', 15)"
              >品牌体验馆</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market16"
                @change="changeStatus('market', 16)"
              >电器工业超市</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market4" @change="changeStatus('market', 4)">SI专卖店</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market9" @change="changeStatus('market', 9)">户外广告</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market10" @change="changeStatus('market', 10)">正泰岗亭</el-checkbox>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market5"
                @change="changeStatus('market', 5)"
              >电器工业超市旗舰店</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market6"
                @change="changeStatus('market', 6)"
              >电器工业超市标准店</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market7"
                @change="changeStatus('market', 7)"
              >电器工业超市单体店</el-checkbox>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4" class="other-role">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market50" @change="changeStatus('market', 50)">市场介绍</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market51" @change="changeStatus('market', 51)">市场分布</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market52" @change="changeStatus('market', 52)">级别区分</el-checkbox>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="store-container">
      <el-row>
        <el-col :span="4">
          <el-checkbox v-model="marketObject.market21" @change="changeStatus('market', 21)">正泰门店</el-checkbox>
        </el-col>
        <el-col :span="4">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market22"
                @change="changeStatus('market', 22)"
              >一级经销商</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market31"
                @change="changeStatus('market', 31)"
              >二级分销商</el-checkbox>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market23" @change="changeStatus('market', 23)">门店</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market28" @change="changeStatus('market', 28)">媒介广告</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market32"
                @change="changeStatus('market', 32)"
              >二级形象店</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market33" @change="changeStatus('market', 33)">二级门招</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market34" @change="changeStatus('market', 34)">二级货架</el-checkbox>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market35"
                @change="changeStatus('market', 35)"
              >品牌体验馆</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market36"
                @change="changeStatus('market', 36)"
              >电器工业超市</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market24"
                @change="changeStatus('market', 24)"
              >SI专卖店</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market29" @change="changeStatus('market', 29)">户外广告</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market30" @change="changeStatus('market', 30)">正泰岗亭</el-checkbox>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market25"
                @change="changeStatus('market', 25)"
              >电器工业超市旗舰店</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market26"
                @change="changeStatus('market', 26)"
              >电器工业超市标准店</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox
                v-model="marketObject.market27"
                @change="changeStatus('market', 27)"
              >电器工业超市单体店</el-checkbox>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4" class="other-role">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market53" @change="changeStatus('market', 53)">简介</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market54" @change="changeStatus('market', 54)">品牌形象</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market55" @change="changeStatus('market', 55)">运营状况</el-checkbox>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-checkbox v-model="marketObject.market56" @change="changeStatus('market', 56)">开发统计</el-checkbox>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="statistics-container">
      <el-row>
        <el-col :span="4">
          <el-checkbox v-model="marketObject.market40" @change="changeStatus('market', 40)">开发统计</el-checkbox>
        </el-col>
        <el-col :span="4">
          <el-checkbox v-model="marketObject.market41" @change="changeStatus('market', 41)">市场开发统计</el-checkbox>
        </el-col>
        <el-col :span="4">
          <el-checkbox v-model="marketObject.market42" @change="changeStatus('market', 42)">新增门店排名</el-checkbox>
        </el-col>
        <el-col :span="4">
          <el-checkbox v-model="marketObject.market43" @change="changeStatus('market', 43)">销售额统计</el-checkbox>
        </el-col>
        <el-col :span="4">
          <el-checkbox v-model="marketObject.market44" @change="changeStatus('market', 44)">竞争对手统计</el-checkbox>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { indexArea } from "@/api/area";

const market = [
  {
    id: 1,
    name: "专业市场",
    children: [
      {
        id: 2,
        name: "一级经销商",
        children: [
          {
            id: 3,
            name: "门店",
            children: [
              { id: 4, name: "SI专卖店" },
              {
                id: 16,
                name: "电器工业超市",
                children: [
                  { id: 5, name: "电器工业超市旗舰店" },
                  { id: 6, name: "电器工业超市标准店" },
                  { id: 7, name: "电器工业超市单体店" }
                ]
              },
              { id: 15, name: "品牌体验馆" }
            ]
          },
          {
            id: 8,
            name: "媒介广告",
            children: [
              { id: 9, name: "户外广告" },
              { id: 10, name: "正泰岗亭" }
            ]
          }
        ]
      },
      {
        id: 11,
        name: "二级分销商",
        children: [
          { id: 12, name: "二级形象店" },
          { id: 13, name: "二级门招" },
          { id: 14, name: "二级货架" }
        ]
      }
    ]
  },
  {
    id: 21,
    name: "正泰门店",
    children: [
      {
        id: 22,
        name: "一级经销商",
        children: [
          {
            id: 23,
            name: "门店",
            children: [
              { id: 24, name: "SI专卖店" },
              {
                id: 36,
                name: "电器工业超市",
                children: [
                  { id: 25, name: "电器工业超市旗舰店" },
                  { id: 26, name: "电器工业超市标准店" },
                  { id: 27, name: "电器工业超市单体店" }
                ]
              },
              { id: 35, name: "品牌体验馆" }
            ]
          },
          {
            id: 28,
            name: "媒介广告",
            children: [
              { id: 29, name: "户外广告" },
              { id: 30, name: "正泰岗亭" }
            ]
          }
        ]
      },
      {
        id: 31,
        name: "二级分销商",
        children: [
          { id: 32, name: "二级形象店" },
          { id: 33, name: "二级门招" },
          { id: 34, name: "二级货架" }
        ]
      }
    ]
  },
  {
    id: 40,
    name: "开发统计",
    children: [
      { id: 41, name: "市场开发统计" },
      { id: 42, name: "新增门店排名" },
      { id: 43, name: "销售额统计" },
      { id: 44, name: "竞争对手统计" }
    ]
  }
];

export default {
  name: "Role",
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
      tmpArray: [],
      market: market,
      marketObject: {
        market1: false,
        market2: false,
        market3: false,
        market4: false,
        market5: false,
        market6: false,
        market7: false,
        market8: false,
        market9: false,
        market10: false,
        market11: false,
        market12: false,
        market13: false,
        market14: false,
        market15: false,
        market16: false,
        market21: false,
        market22: false,
        market23: false,
        market24: false,
        market25: false,
        market26: false,
        market27: false,
        market28: false,
        market29: false,
        market30: false,
        market31: false,
        market32: false,
        market33: false,
        market34: false,
        market35: false,
        market36: false,
        market40: false,
        market41: false,
        market42: false,
        market43: false,
        market44: false,
        market50: false,
        market51: false,
        market52: false,
        market53: false,
        market54: false,
        market55: false,
        market56: false
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
    for (let i in this.marketObject) {
      this.marketObject[i] = false;
    }
    for (let v of this.value) {
      let key = "market" + v;
      this.marketObject[`${key}`] = true;
    }
  },
  watch: {
    value(val) {
      for (let i in this.marketObject) {
        this.marketObject[i] = false;
      }
      for (let v of val) {
        let key = "market" + v;
        this.marketObject[`${key}`] = true;
      }
    }
  },
  methods: {
    emitInput(val) {
      this.$emit("input", val);
    },
    changeStatus(module, id) {
      let key = module + id;
      let status = this.marketObject[`${key}`];
      let arr = [];
      if (status === true) {
        this.getStatusOnArray("market", id, market);
        arr = Object.assign([], this.tmpArray);
        this.tmpArray = [];
      } else {
        arr = this.getStatusOffArray("market", id, false, market);
      }
      this.batchChangeStatus(module, arr, status);
      this.everyChangeStatus();
    },
    getStatusOnArray(module, id, importArr, exportArr = []) {
      for (let v of importArr) {
        let a = Object.assign([], exportArr);
        a.push(v.id);
        if (v.id == id) {
          this.tmpArray = Object.assign([], a);
        } else {
          if (v.children != undefined && v.children.length > 0) {
            this.getStatusOnArray(module, id, v.children, a);
          } else {
            continue;
          }
        }
      }
    },
    getStatusOffArray(module, id, sign = false, importArr, exportArr = []) {
      if (sign === false) {
        for (let v of importArr) {
          if (v.id == id) {
            exportArr.push(v.id);
            if (v.children != undefined && v.children.length > 0) {
              exportArr.concat(
                this.getStatusOffArray(module, id, true, v.children, exportArr)
              );
            }
          } else {
            if (v.children != undefined && v.children.length > 0) {
              exportArr.concat(
                this.getStatusOffArray(module, id, false, v.children, exportArr)
              );
            }
          }
        }
      } else {
        for (let v of importArr) {
          exportArr.push(v.id);
          if (v.children != undefined && v.children.length > 0) {
            exportArr.concat(
              this.getStatusOffArray(module, id, true, v.children, exportArr)
            );
          } else {
            continue;
          }
        }
      }
      return exportArr;
    },
    batchChangeStatus(module, arr, status) {
      for (let v of arr) {
        let key = module + v;
        this.marketObject[`${key}`] = status;
      }
    },
    everyChangeStatus() {
      let newValue = [];
      for (let i in this.marketObject) {
        if (this.marketObject[i] == true) {
          newValue.push(Number(i.substring(6)));
        }
        this.emitInput(newValue);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.role-container {
  width: 100%;
  position: relative;
  @include clearfix;
  .store-container {
    border-top: 1px solid #dcdcdc;
    margin-top: 20px;
    padding-top: 10px;
    /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
      background-color: #ffa500;
      border-color: #ffa500;
    }
    /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #ffa500;
    }
  }
  .other-role {
    background-color: #dcdcdc;
    border: 1px solid #c0c0c0;
    padding-left: 2%;
  }
  .statistics-container {
    border-top: 1px solid #dcdcdc;
    margin-top: 20px;
    padding-top: 10px;
    /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
      background-color: #9acd32;
      border-color: #9acd32;
    }
    /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #9acd32;
    }
  }
}
</style>
