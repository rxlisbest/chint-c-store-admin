<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" :placeholder="$t('messages.stores.input.name')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" icon="el-icon-search" @click="handleFilter">
        {{$t('messages.button.search')}}
      </el-button>
      <router-link :to="'/stores/module_id/' + module_id + '/create'">
        <el-button class="filter-item" type="primary" icon="el-icon-plus">
          {{ $t('messages.button.create') }}
        </el-button>
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
      <el-table-column :label="$t('messages.stores.column.name')" prop="name" align="center">
      </el-table-column>
      <el-table-column :label="$t('messages.stores.column.phone')" prop="phone" align="center">
      </el-table-column>
      </el-table-column>
      <el-table-column :label="$t('messages.stores.column.address')" prop="address" align="center">
      </el-table-column>
      <el-table-column :label="$t('messages.stores.column.create_time')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="380" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <router-link :to="'/stores/module_id/' + module_id +'/edit/' + row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit" style="width: 70px;">
              {{ $t('messages.button.edit') }}
            </el-button>
          </router-link>
          <router-link :to="'/stores/module_id/' + module_id +'/images/' + row.id">
            <el-button type="primary" size="mini" icon="el-icon-picture" style="width: 90px;">
              {{ $t('messages.stores.button.images') }}
            </el-button>
          </router-link>
          <router-link :to="'/stores/module_id/' + module_id +'/incomes/' + row.id">
            <el-button type="primary" size="mini" style="width: 90px;">
              <svg-icon icon-class="chart" />
              {{ $t('messages.stores.button.incomes') }}
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
        module_id: 0,
        page: 1,
        limit: undefined,
        name: undefined
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
    this.module_id = this.listQuery.module_id = this.$route.meta.module_id
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
