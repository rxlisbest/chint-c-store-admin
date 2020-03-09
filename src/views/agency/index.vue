<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.name"
        :placeholder="$t('messages.agency.input.name')"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
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
      <el-table-column :label="$t('messages.agency.column.name')" prop="name" align="center">
      </el-table-column>
      <el-table-column :label="$t('messages.agency.column.create_time')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('messages.column.actions')" align="center" width="230" class-name="small-padding fixed-width">
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
        <el-form-item :label="$t('messages.agency.column.name')">
          <el-input v-model="dialogForm.name" :precision="2" :step="1"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="handleDialogForm()">
          Confirm
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { indexAgency, saveAgency, updateAgency } from '@/api/agency'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { MessageBox, Message } from 'element-ui'

const listQuery = {
        page: 1,
        limit: undefined,
      }
export default {
  name: 'agency-index',
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
        name: undefined
      },
      id: 0,
      row: {}
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      indexAgency(this.listQuery).then(response => {
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
      this.dialogForm.name = row.name
      this.dialogFormVisible = true
      this.id = row.id
    },
    handleDialogForm() {
      if (this.id > 0) {
        updateAgency(this.id, this.dialogForm)
        .then(() => {
          this.getList()
          this.dialogFormVisible = false
        })
      } else {
        saveAgency(this.dialogForm)
        .then(() => {
          this.getList()
          this.dialogFormVisible = false
        })
      }
    },
    handleAdd() {
      this.dialogForm.name = undefined
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
