<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.name"
        :placeholder="$t('messages.users.input.search')"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-select
        v-model="listQuery.role_id"
        :placeholder="$t('messages.users.select.role_id')"
        clearable
        class="filter-item"
        style="width: 130px"
      >
        <el-option v-for="(v, k) in roles" :key="k" :label="v" :value="k" />
      </el-select>
      <el-select
        v-model="listQuery.audit_status"
        :placeholder="$t('messages.users.select.audit_status')"
        clearable
        class="filter-item"
        style="width: 130px"
      >
        <el-option v-for="(v, k) in audit_status" :key="k" :label="v" :value="k" />
      </el-select>
      <el-button
        v-waves
        class="filter-item"
        icon="el-icon-search"
        @click="handleFilter"
      >{{$t('messages.users.button.search')}}</el-button>
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
      <el-table-column :label="$t('messages.users.column.name')" prop="name" align="center"></el-table-column>
      <el-table-column :label="$t('messages.users.column.phone')" prop="phone" align="center"></el-table-column>
      <el-table-column :label="$t('messages.users.column.email')" prop="email" align="center"></el-table-column>
      <el-table-column :label="$t('messages.users.column.address')" prop="address" align="center"></el-table-column>
      <el-table-column :label="$t('messages.users.column.create_time')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.role_id')" align="center">
        <template slot-scope="{ row }">{{ roles[row.role_id] }}</template>
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.audit_status')" align="center">
        <template slot-scope="{ row }">
          <el-tag
            :type="row.audit_status | auditStatusFilter"
          >{{ row.audit_status | auditStatusTextFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.status')" align="center">
        <template slot-scope="{ row }">
          <el-tag :type="row.status | statusFilter">{{ row.status | statusTextFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row}">
          <el-button
            v-if="row.audit_status > 0"
            type="primary"
            size="mini"
            @click="handleAuditForm(row)"
          >{{ $t('messages.users.button.audit_status') }}</el-button>
          <el-button
            v-if="row.status == 0"
            size="mini"
            type="success"
            @click="handleStatus(row, 1)"
          >{{ $t('messages.users.button.status_on') }}</el-button>
          <el-button
            v-if="row.status == 1"
            size="mini"
            type="danger"
            @click="handleStatus(row, 0)"
          >{{ $t('messages.users.button.status_off') }}</el-button>
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
    <el-dialog :title="$t('messages.users.dialog.title')" :visible.sync="auditFormVisible">
      <el-form
        ref="dataForm"
        :model="auditForm"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item :label="$t('messages.users.dialog.status')" prop="resource">
          <el-radio-group v-model="auditForm.status">
            <el-radio :label="1">{{ $t('messages.users.dialog.status_on') }}</el-radio>
            <el-radio :label="2">{{ $t('messages.users.dialog.status_off') }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('messages.users.dialog.content')">
          <el-input type="textarea" v-model="auditForm.content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="auditFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleAuditStatus()">Confirm</el-button>
      </div>
    </el-dialog>

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
import { getList, updateStatus, updateAuditStatus, updateAgencyId } from "@/api/user";
import { allAgency } from "@/api/agency";
import { saveUserAuditLog } from "@/api/user_audit_log";
import { indexRoles } from "@/api/role";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import { MessageBox, Message } from "element-ui";

export default {
  name: "users-index",
  components: { Pagination },
  directives: { waves },
  filters: {
    auditStatusFilter(status) {
      const statusMap = {
        3: "info",
        2: "danger",
        1: "success",
        0: "info"
      };
      return statusMap[status];
    },
    auditStatusTextFilter(status) {
      const statusMap = {
        3: "未审核",
        2: "不通过",
        1: "通过",
        0: "未提交"
      };
      return statusMap[status];
    },
    statusFilter(status) {
      const statusMap = {
        1: "success",
        0: "danger"
      };
      return statusMap[status];
    },
    statusTextFilter(status) {
      const statusMap = {
        1: "启用",
        0: "禁用"
      };
      return statusMap[status];
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type];
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: undefined,
        name: undefined,
        role_id: undefined
      },
      roles: {},
      auditFormVisible: false,
      auditForm: {
        user_id: 0,
        content: "",
        status: 2
      },
      row: {},
      audit_status: {
        0: "未提交",
        3: "待审核",
        1: "已通过",
        2: "未通过"
      },
      agencyFormVisible: false,
      agencyForm: {
        id: 0,
        agency_id: 0
      },
      agencyList: []
    };
  },
  created() {
    this.getRoleList();
    this.getList();
  },
  methods: {
    getRoleList() {
      indexRoles().then(response => {
        let roles = {};
        response.data.forEach(v => {
          roles[v.id] = v.name;
        });
        this.roles = roles;
      });
    },
    getList() {
      this.listLoading = true;
      getList(this.listQuery).then(response => {
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
    handleStatus(row, status) {
      this.$confirm(
        this.$t("messages.confirm.message"),
        this.$t("messages.confirm.title"),
        {
          confirmButtonText: this.$t("messages.confirm.confirmButtonText"),
          cancelButtonText: this.$t("messages.confirm.cancelButtonText"),
          type: "warning"
        }
      )
        .then(() => {
          updateStatus({ status: status, id: row.id }).then(() => {
            row.status = status;
          });
        })
        .catch(() => {});
    },
    handleAuditStatus() {
      let _this = this;
      saveUserAuditLog(this.auditForm).then(() => {
        _this.row.audit_status = _this.auditForm.status;
        _this.auditFormVisible = false;
      });
    },
    handleAuditForm(row) {
      this.row = row;
      this.auditForm.user_id = row.id;
      this.auditForm.status = Number(row.audit_status) || 2;
      this.auditForm.content = "";
      this.auditFormVisible = true;
    },
    handleAuditStatus() {
      let _this = this;
      saveUserAuditLog(this.auditForm).then(() => {
        _this.row.audit_status = _this.auditForm.status;
        _this.auditFormVisible = false;
      });
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
        this.getList()
        this.agencyFormVisible = false;
      });
    },
  }
};
</script>
