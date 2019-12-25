<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.name"
        :placeholder="$t('messages.stores.input.name')"
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
      <router-link :to="'create'">
        <el-button
          class="filter-item"
          type="primary"
          icon="el-icon-plus"
        >{{ $t('messages.button.create') }}</el-button>
      </router-link>
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
      <el-table-column :label="$t('messages.store_market.column.name')" prop="name" align="center"></el-table-column>
      <el-table-column :label="$t('messages.store_market.column.create_time')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('messages.column.actions')"
        align="center"
        width="380"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row}" v-if="user_id == row.user_id">
          <router-link :to="'edit/' + row.id">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              style="width: 70px;"
            >{{ $t('messages.button.edit') }}</el-button>
          </router-link>
          <el-button size="mini" type="danger" @click="deleteStore(row)" style="width: 70px;">
            <i class="el-icon-close" />
            {{ $t('messages.button.delete') }}
          </el-button>
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
  </div>
</template>

<script>
import { indexStore, deleteStore } from "@/api/store";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import { MessageBox, Message } from "element-ui";
import { mapGetters } from "vuex";

export default {
  name: "stores-index",
  components: { Pagination },
  directives: { waves },
  computed: {
    ...mapGetters(["user_id"])
  },
  data() {
    return {
      parent_module_id: 0,
      module_id: 0,
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        module_id: undefined,
        page: 1,
        limit: undefined,
        name: undefined
      },
      roles: {},
      auditFormVisible: false,
      auditForm: {
        user_id: 0,
        content: "",
        status: 2
      },
      row: {}
    };
  },
  created() {
    this.parent_module_id = this.$route.meta.parent_module_id;
    if (this.$route.meta.module_id !== undefined) {
      this.module_id = this.listQuery.module_id = this.$route.meta.module_id;
    }
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      indexStore(this.listQuery).then(response => {
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
      console.log(row);
      this.row = row;
      this.auditForm.user_id = row.id;
      this.auditForm.status = Number(row.audit_status) || 2;
      this.auditForm.content = "";
      this.auditFormVisible = true;
    },
    deleteStore(image) {
      this.$confirm(
        this.$t("messages.confirm.message"),
        this.$t("messages.confirm.title"),
        {
          confirmButtonText: this.$t("messages.confirm.confirmButtonText"),
          cancelButtonText: this.$t("messages.confirm.cancelButtonText"),
          type: "warning"
        }
      ).then(() => {
        deleteStore(image.id).then(res => {
          this.getList();
        });
      });
    }
  }
};
</script>
