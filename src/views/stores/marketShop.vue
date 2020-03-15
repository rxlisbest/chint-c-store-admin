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
      <el-table-column
        :label="$t('messages.store_market.column.establishment_time')"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.establishment_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('messages.store_market.column.sales_area')"
        prop="sales_area"
        align="center"
      ></el-table-column>
      <el-table-column :label="$t('messages.store_market.column.create_time')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('messages.column.actions')"
        align="center"
        width="500"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row}" v-if="user_id == row.user_id">
          <!-- <el-button
            size="mini"
            type="primary"
            @click="handleEdit(row)"
            icon="el-icon-edit"
            style="width: 100px;"
          >{{ $t('messages.stores.button.market_introduce') }}</el-button> -->
          <router-link :to="'images/' + row.id">
            <el-button type="success" size="mini" icon="el-icon-picture" style="width: 90px;">
              {{ $t('messages.stores.button.images') }}
            </el-button>
          </router-link>
          <router-link :to="'incomes/' + row.id">
            <el-button type="success" size="mini" style="width: 90px;">
              <svg-icon icon-class="chart" />
              {{ $t('messages.stores.button.incomes') }}
            </el-button>
          </router-link>
          <router-link :to="'kpi/' + row.id">
            <el-button type="success" size="mini" style="width: 90px;">
              <svg-icon icon-class="chart" />
              {{ $t('messages.stores.button.kpi') }}
            </el-button>
          </router-link>
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

    <el-dialog
      :title="$t('messages.stores.button.market_introduce')"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        ref="dataForm"
        :model="dialogForm"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item :label="$t('messages.stores.button.market_introduce')">
          <el-input type="textarea" v-model="dialogForm.introduce"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('messages.button.cancel') }}</el-button>
        <el-button type="primary" @click="handleDialogForm()">{{ $t('messages.button.confirm') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { indexStore, deleteStore, storeUpdateIntroduce } from "@/api/store";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import { MessageBox, Message } from "element-ui";
import { mapGetters } from "vuex";

export default {
  name: "marketShip",
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
      dialogFormVisible: false,
      dialogForm: {
        id: 0,
        introduce: undefined
      },
      row: {}
    };
  },
  created() {
    console.log(this.user_id, "a");
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
    handleEdit(row) {
      this.dialogForm.id = row.id;
      this.dialogForm.introduce = row.introduce;
      this.dialogFormVisible = true;
    },
    handleDialogForm() {
      if (this.dialogForm.id > 0) {
        storeUpdateIntroduce(this.dialogForm.id, this.dialogForm).then(() => {
          this.getList();
          this.dialogFormVisible = false;
        });
      }
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
