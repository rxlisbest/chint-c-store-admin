<template>
  <div class="app-container">
    <div class="block">
      <span class="demonstration">请选择导入年份</span>
      <el-date-picker v-model="date" type="year" format="yyyy" placeholder="选择年"></el-date-picker>
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
import { saveAgencyFee } from "@/api/agency_fee";
var myDate = new Date();

export default {
  name: "agency-fee",
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
      saveAgencyFee({ data: results, year: this.date.getFullYear() }).then(res => {
        this.tableData = res.data;
      });
    }
  }
};
</script>
