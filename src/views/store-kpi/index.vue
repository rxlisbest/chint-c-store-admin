<template>
  <div class="app-container">
    <div class="filter-container">
      <el-date-picker
        class="filter-item"
        v-model="listQuery.month"
        type="monthrange"
        value-format="timestamp"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份">
      </el-date-picker>
      <el-button v-waves class="filter-item" icon="el-icon-search" @click="handleFilter">
        {{$t('messages.button.search')}}
      </el-button>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-plus" @click="handleAdd">
        {{$t('messages.button.create')}}
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
      <el-table-column :label="$t('messages.store_kpi.column.month')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.month | parseTime('{y}-{m}') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('messages.store_kpi.column.money')" prop="money" align="center">
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button size="mini" type="primary" @click="handleEdit(row)" icon="el-icon-edit" style="width: 70px;">
            {{ $t('messages.button.edit') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog :title="$t('messages.users.dialog.title')" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="dialogForm" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-form-item :label="$t('messages.store_kpi.column.month')" prop="resource">
          <el-date-picker
            v-model="dialogForm.month"
            type="month"
            value-format="timestamp"
            placeholder="选择月">
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('messages.store_kpi.column.money')">
          <el-input-number v-model="dialogForm.money" :precision="2" :step="1"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          {{ $t('messages.button.cancel') }}
        </el-button>
        <el-button type="primary" @click="handleDialogForm()">
          {{ $t('messages.button.confirm') }}
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { indexStoreKpi, saveStoreKpi, updateStoreKpi } from '@/api/store_kpi'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { MessageBox, Message } from 'element-ui'

const listQuery = {
        page: 1,
        limit: undefined,
        month: [],
        store_id: undefined
      }
export default {
  name: 'stores-index',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: Object.assign({}, listQuery),
      dialogFormVisible: false,
      dialogForm: {
        store_id: 0,
        month: undefined,
        money: 0.00
      },
      id: 0,
      row: {}
    }
  },
  created() {
    const store_id = this.dialogForm.store_id = this.listQuery.store_id = this.$route.params && this.$route.params.store_id
    this.getList()
  },
  methods: {
    getList() {
      let listQuery = JSON.parse(JSON.stringify(this.listQuery))
      if (listQuery.month !== null && listQuery.month.length == 2) {
        listQuery.month[0] = listQuery.month[0] / 1000
        listQuery.month[1] = listQuery.month[1] / 1000
      }
      this.listLoading = true
      indexStoreKpi(listQuery).then(response => {
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
    handleEdit(row) {
      this.dialogForm.month = row.month * 1000
      this.dialogForm.money = row.money
      this.dialogFormVisible = true
      this.id = row.id
    },
    handleDialogForm() {
      let data = {}
      data.store_id = this.dialogForm.store_id
      data.month = this.dialogForm.month / 1000
      data.money = this.dialogForm.money
      if (this.id > 0) {
        updateStoreKpi(this.id, data)
        .then(() => {
          this.getList()
          this.dialogFormVisible = false
        })
      } else {
        saveStoreKpi(data)
        .then(() => {
          this.getList()
          this.dialogFormVisible = false
        })
      }
    },
    handleAdd() {
      this.dialogForm.month = undefined
      this.dialogForm.money = 0.00
      this.dialogFormVisible = true
      this.id = 0
    }
  }
}
</script>
<style scoped>
  .el-date-editor .el-range-separator{
    width: 10% !important;
  }
</style>
