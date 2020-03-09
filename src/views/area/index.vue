<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.name"
        :placeholder="$t('messages.area.input.name')"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-button
        v-waves
        class="filter-item"
        icon="el-icon-search"
        @click="handleFilter"
      >{{$t('messages.button.search')}}</el-button>
      <!-- <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-plus"
        @click="handleAdd"
      >{{$t('messages.button.create')}}</el-button> -->
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column :label="$t('messages.area.column.name')" prop="name" align="center"></el-table-column>
      <el-table-column
        :label="$t('messages.area.column.agency_name')"
        prop="agency_name"
        align="center"
      ></el-table-column>
      <el-table-column
        :label="$t('messages.column.actions')"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row}">
          <el-button
            type="primary"
            size="mini"
            @click="handleAgencyForm(row)"
          >{{ $t('messages.users.button.agency_id') }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />

    <el-dialog :title="$t('messages.users.dialog.agency')" :visible.sync="agencyFormVisible">
      <el-form
        ref="dataForm"
        :model="agencyForm"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-select v-model="agencyForm.agency_id" filterable placeholder="请选择">
          <el-option v-for="item in agencyList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="agencyFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleAgencyId()">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { provinceArea, saveArea, updateArea, updateAgencyId } from "@/api/area";
import waves from "@/directive/waves"; // waves directive
import { allAgency } from "@/api/agency";
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import { MessageBox, Message } from "element-ui";

const listQuery = {
  name: undefined,
  page: 1,
  limit: undefined
};
export default {
  name: "area-index",
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: Object.assign({}, listQuery),
      agencyFormVisible: false,
      agencyForm: {
        id: 0,
        agency_id: 0
      },
      agencyList: [],
      id: 0,
      row: {}
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      provinceArea(this.listQuery).then(response => {
        this.list = response.data.data;
        this.total = response.data.total;
        this.listQuery.limit = Number(response.data.per_page);

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    async handleAgencyForm(row) {
      let res = await allAgency();
      this.agencyList = res.data;
      this.row = row;
      this.agencyForm.id = row.id;
      if (row.agency_id > 0) {
        this.agencyForm.agency_id = row.agency_id;
      } else {
        this.agencyForm.agency_id = "";
      }
      this.agencyFormVisible = true;
    },
    handleAgencyId() {
      updateAgencyId(this.agencyForm).then(() => {
        this.getList();
        this.agencyFormVisible = false;
      });
    }
  }
};
</script>
<style scoped>
.el-date-editor .el-range-separator {
  width: 10% !important;
}
</style>
