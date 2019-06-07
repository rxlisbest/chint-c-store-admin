<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" :placeholder="$t('messages.users.input.search')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.role_id" :placeholder="$t('messages.users.select.role_id')" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in roles" :key="item.id" :label="item.name" :value="item.id" />
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
      <el-table-column :label="$t('messages.users.column.email')" prop="email" align="center">
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.address')" prop="address" align="center">
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.create_time')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.role_id')" align="center">
        <template slot-scope="{ row }">
          {{ row.role_id }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.audit_status')" align="center">
        <template slot-scope="{ row }">
          <el-tag :type="row.audit_status | auditStatusFilter">
            {{ row.audit_status | auditStatusTextFilter }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('messages.users.column.status')" align="center">
        <template slot-scope="{ row }">
          <el-tag :type="row.status | statusFilter">
            {{ row.status | statusTextFilter }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button v-if="row.audit_status == 0 || row.audit_status == 2" type="success" size="mini" @click="handleAuditStatus(row, 1)">
            {{ $t('messages.users.button.audit_status_on') }}
          </el-button>
          <el-button v-if="row.audit_status == 1 || row.audit_status == 0" type="danger" size="mini" @click="handleAuditStatus(row, 2)">
            {{ $t('messages.users.button.audit_status_off') }}
          </el-button>
          <el-button v-if="row.status == 0" size="mini" type="success" @click="handleStatus(row, 1)">
            {{ $t('messages.users.button.status_on') }}
          </el-button>
          <el-button v-if="row.status == 1" size="mini" type="danger" @click="handleStatus(row, 0)">
            {{ $t('messages.users.button.status_off') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { getList, updateStatus, updateAuditStatus } from '@/api/user'
import { getRoles } from '@/api/role'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { MessageBox, Message } from 'element-ui'

export default {
  name: 'users-index',
  components: { Pagination },
  directives: { waves },
  filters: {
    auditStatusFilter(status) {
      const statusMap = {
        2: 'danger',
        1: 'success',
        0: 'info',
      }
      return statusMap[status]
    },
    auditStatusTextFilter(status) {
      const statusMap = {
        2: '不通过',
        1: '通过',
        0: '未审核',
      }
      return statusMap[status]
    },
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        0: 'danger',
      }
      return statusMap[status]
    },
    statusTextFilter(status) {
      const statusMap = {
        1: '启用',
        0: '禁用',
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
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
      roles: [],
    }
  },
  created() {
    this.getRoleList()
    this.getList()
  },
  methods: {
    getRoleList() {
      getRoles().then(response => {
        this.roles = response.data
      })
    },
    getList() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
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
    handleAuditStatus(row, audit_status) {
      this.$confirm(this.$t('messages.confirm.message'), this.$t('messages.confirm.title'), {
        confirmButtonText: this.$t('messages.confirm.confirmButtonText'),
        cancelButtonText: this.$t('messages.confirm.cancelButtonText'),
        type: 'warning'
      }).then(() => {
        updateAuditStatus({audit_status: audit_status, id: row.id})
        .then(() => {
          row.audit_status = audit_status
        })
      }).catch(() => {

      })
    }
  }
}
</script>
