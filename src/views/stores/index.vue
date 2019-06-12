<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" :placeholder="$t('messages.users.input.search')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.role_id" :placeholder="$t('messages.users.select.role_id')" clearable class="filter-item" style="width: 130px">
        <el-option v-for="(v, k) in roles" :key="k" :label="v" :value="k" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{$t('messages.users.button.search')}}
      </el-button>
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
      <el-table-column :label="$t('messages.users.column.name')" prop="name" align="center">
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.phone')" prop="phone" align="center">
      </el-table-column>
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.address')" prop="address" align="center">
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.create_time')" align="center">
        <template slot-scope="scope">
        </template>
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.role_id')" align="center">
        <template slot-scope="{ row }">
          {{ row.create_time }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.audit_status')" align="center">
        <template slot-scope="{ row }">
        </template>
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.status')" align="center">
        <template slot-scope="{ row }">
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <router-link :to="'/stores/edit/' + row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">
              Edit
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { indexStore } from '@/api/store'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { MessageBox, Message } from 'element-ui'

export default {
  name: 'stores-index',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      module_id: 0,
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
        content: '',
        status: 2
      },
      row: {}
    }
  },
  created() {
    this.module_id = this.$route.meta.module_id
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      indexStore(this.listQuery).then(response => {
        this.list = response.data.data
        this.total = response.data.total
        this.listQuery.limit = Number(response.data.per_page)

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleStatus(row, status) {
      this.$confirm(this.$t('messages.confirm.message'), this.$t('messages.confirm.title'), {
        confirmButtonText: this.$t('messages.confirm.confirmButtonText'),
        cancelButtonText: this.$t('messages.confirm.cancelButtonText'),
        type: 'warning'
      }).then(() => {
        updateStatus({status: status, id: row.id})
        .then(() => {
          row.status = status
        })
      }).catch(() => {

      })
    },
    handleAuditStatus() {
      let _this = this
      saveUserAuditLog(this.auditForm)
      .then(() => {
        _this.row.audit_status = _this.auditForm.status
        _this.auditFormVisible = false
      })
    },
    handleAuditForm(row) {
      console.log(row)
      this.row = row
      this.auditForm.user_id = row.id
      this.auditForm.status = Number(row.audit_status) || 2
      this.auditForm.content = ''
      this.auditFormVisible = true
    }
  }
}
</script>
