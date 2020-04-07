<template>
  <div class="app-container">
    <div class="block">
      <span class="demonstration">请选择导入年份</span>
      <el-date-picker v-model="date" type="year" format="yyyy" placeholder="选择年"></el-date-picker>
      <el-button type="primary" @click="download()">下载模板</el-button>
    </div>
    <br />
    <upload-excel-component
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
      :before-header-rows="2"
    />
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from "./components/UploadExcel.vue";
import { saveRegionContrastFee } from "@/api/region_contrast_fee";
var myDate = new Date();

export default {
  name: "RegionContrastFee",
  components: { UploadExcelComponent },
  data() {
    return {
      date: myDate,
      tableData: [],
      tableHeader: []
    };
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (isLt1M) {
        return true;
      }

      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning"
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableHeader = header;
      saveRegionContrastFee({ data: results, year: this.date.getFullYear() }).then(res => {
        this.tableData = res.data;
      });
    },
    download() {
      window.location.href = process.env.VUE_APP_BASE_API + '/downloads/强弱区域费用导入模版.xlsx'
    }
  }
};
</script>
