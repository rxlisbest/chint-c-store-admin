<template>
  <div class="app-container">
    <el-card class="box-card" shadow="never">
      <div class="text item">
        <el-row>
          <el-col :span="2">{{$t('messages.stores.input.name')}}</el-col>
          <el-col :span="22">{{ store.name }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="2">{{$t('messages.stores.input.phone')}}</el-col>
          <el-col :span="22">{{ store.phone }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="2">{{$t('messages.stores.input.address')}}</el-col>
          <el-col :span="22">{{ store.address }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="2">{{$t('messages.stores.input.introduce')}}</el-col>
          <el-col :span="22">{{ store.introduce }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="2">{{$t('messages.stores.input.business_scope')}}</el-col>
          <el-col :span="22">{{ store.business_scope }}</el-col>
        </el-row>
      </div>
    </el-card>
    <div class="filter-container">
      <el-input v-model="listQuery.name" :placeholder="$t('messages.stores.input.name')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" icon="el-icon-search" @click="handleFilter">
        {{$t('messages.button.search')}}
      </el-button>
      <router-link :to="'/stores/' + parent_module_id + '/module_id/' + module_id + '/create?parent_id=' + parent_id + '&parent_module_id=' + store.module_id">
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
          <router-link :to="'/stores/' + parent_module_id + '/module_id/' + row.module_id +'/edit/' + row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit" style="width: 70px;">
              {{ $t('messages.button.edit') }}
            </el-button>
          </router-link>
          <router-link :to="'/stores/' + parent_module_id + '/module_id/' + row.module_id +'/images/' + row.id">
            <el-button type="primary" size="mini" icon="el-icon-picture" style="width: 90px;">
              {{ $t('messages.stores.button.images') }}
            </el-button>
          </router-link>
          <router-link :to="'/stores/' + parent_module_id + '/module_id/' + row.module_id +'/incomes/' + row.id">
            <el-button type="primary" size="mini" style="width: 90px;">
              <svg-icon icon-class="chart" />
              {{ $t('messages.stores.button.incomes') }}
            </el-button>
          </router-link>
          <router-link :to="'/stores/' + parent_module_id + '/module_id/' + row.module_id +'/children/' + row.id">
            <el-button type="warning" size="mini" style="width: 70px;">
              <svg-icon icon-class="tree-table" />
              {{ $t('messages.stores.button.children') }}
            </el-button>
          </router-link>
          <el-button size="mini" type="danger" @click="deleteStore(row)" style="width: 70px;">
            <i class="el-icon-close" />
            {{ $t('messages.button.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { indexStore, readStore, deleteStore } from '@/api/store'
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
      parent_id: 0,
      parent_module_id: 0,
      module_id: 0,
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        parent_id: undefined,
        module_id: undefined,
        page: 1,
        limit: undefined,
        name: undefined
      },
      store: {
        'name': ''
      },
      roles: {},
      row: {}
    }
  },
  created() {
    this.parent_module_id = this.$route.meta.parent_module_id
    if (this.$route.meta.module_id !== undefined) {
      this.module_id = this.$route.meta.module_id
    }
    if (this.$route.params && this.$route.params.id) {
      this.parent_id = this.listQuery.parent_id = this.$route.params && this.$route.params.id
    }
    this.getList()
    this.readStore()
  },
  methods: {
    readStore() {
      readStore(this.parent_id).then(res => {
        this.store = res.data
      })
    },
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
    deleteStore(image) {
      this.$confirm(this.$t('messages.confirm.message'), this.$t('messages.confirm.title'), {
        confirmButtonText: this.$t('messages.confirm.confirmButtonText'),
        cancelButtonText: this.$t('messages.confirm.cancelButtonText'),
        type: 'warning'
      }).then(() => {
        deleteStore(image.id).then(res => {
          this.getList()
        })
      })
    }
  }
}
</script>

<style scoped>
  .filter-container {
    margin-top: 20px;
  }
  .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
