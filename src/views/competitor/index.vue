<template>
  <div class="app-container">
    <div class="filter-container">
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
      <el-table-column :label="$t('messages.competitor.column.item')" prop="item" align="center">
      </el-table-column>
      <el-table-column :label="$t('messages.competitor.column.promotion')" prop="promotion" align="center" width="180px">
      </el-table-column>
      <el-table-column :label="$t('messages.competitor.column.other')" prop="other" align="center" width="180px">
      </el-table-column>
      <el-table-column :label="$t('messages.competitor.column.file_id')" align="center" width="180px">
        <template slot-scope="scope">
          <img width="96" height="160" :src="scope.row.file_url" />
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button size="mini" type="primary" @click="handleEdit(row)" icon="el-icon-edit" style="width: 70px;">
            {{ $t('messages.button.edit') }}
          </el-button>
          <el-button size="mini" type="danger" @click="deleteCompetitor(row)" style="width: 70px;">
            <i class="el-icon-close" />
            {{ $t('messages.button.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="$t('messages.users.dialog.title')" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="dialogForm" label-position="left" label-width="70px" style="margin-left:50px;">
        <el-form-item :label="$t('messages.competitor.column.item')">
          <el-input v-model="dialogForm.item"></el-input>
        </el-form-item>
        <el-form-item :label="$t('messages.competitor.column.promotion')">
          <el-input v-model="dialogForm.promotion"></el-input>
        </el-form-item>
        <el-form-item :label="$t('messages.competitor.column.other')">
          <el-input v-model="dialogForm.other"></el-input>
        </el-form-item>
        <el-form-item prop="image_uri" label-width="72px" :label="$t('messages.competitor.column.file_id')" style="margin-bottom: 30px;">
          <Upload v-model="dialogForm.file_id" :previewWidth="192" :previewHeight="320" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          {{ $t('messages.button.cancel') }}
        </el-button>
        <el-button type="primary" @click="saveCompetitor()">
          {{ $t('messages.button.confirm') }}
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Upload from '@/components/Upload/SingleImage4'
import { indexCompetitor, saveCompetitor, readCompetitor, deleteCompetitor, updateCompetitor } from '@/api/competitor'
import { MessageBox, Message } from 'element-ui'
import waves from '@/directive/waves' // waves directive

let id = 0;
export default {
  name: 'Competitor',
  components: { Upload },
  directives: { waves },
  props: {
  },
  data() {
    return {
      tableKey: 0,
      store_id: 0,
      list: [],
      file_id: 0,
      listLoading: false,
      dialogFormVisible: false,
      dialogForm: {
        item: '',
        promotion: '',
        other: '',
        file_id: undefined,
      },
      id: 0,
      row: {}
    }
  },
  computed: {
  },
  watch: {
    file_id(curVal, oldVal) {
      this.saveCompetitor()
    }
  },
  created() {
    // const store_id = this.store_id = this.dialogForm.store_id = this.$route.params && this.$route.params.store_id
    this.indexCompetitor()
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  mounted() {
  },
  methods: {
    indexCompetitor(store_id) {
      indexCompetitor({store_id: store_id}).then(res => {
        this.list = res.data
      }).catch(err => {

      })
    },
    saveCompetitor() {
      if (this.id > 0) {
        updateCompetitor(this.id, this.dialogForm).then(res => {
          this.indexCompetitor(this.store_id)
          this.dialogFormVisible = false
        })
      } else {
        saveCompetitor(this.dialogForm).then(res => {
          this.indexCompetitor(this.store_id)
          this.dialogFormVisible = false
        })
      }
    },
    deleteCompetitor(image) {
      this.$confirm(this.$t('messages.confirm.message'), this.$t('messages.confirm.title'), {
        confirmButtonText: this.$t('messages.confirm.confirmButtonText'),
        cancelButtonText: this.$t('messages.confirm.cancelButtonText'),
        type: 'warning'
      }).then(() => {
        deleteCompetitor(image.id).then(res => {
          this.indexCompetitor(this.store_id)
        })
      })
    },
    handleEdit(row) {
      this.dialogForm.file_id = row.file_id
      this.dialogForm.item = row.item
      this.dialogForm.promotion = row.promotion
      this.dialogForm.other = row.other
      this.dialogFormVisible = true
      this.id = row.id
    },
    handleAdd() {
      this.dialogForm.file_id = 0
      this.dialogForm.item = ''
      this.dialogForm.promotion = ''
      this.dialogForm.other = ''
      this.dialogFormVisible = true
      this.id = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.amap-wrapper{
  height: 800px;
  margin-bottom: 40px;
}
.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea /deep/ {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
.image-preview {
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px dashed #d9d9d9;
  float: left;
  // margin-left: 50px;
  .image-preview-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .image-preview-action {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    cursor: default;
    text-align: center;
    color: #fff;
    opacity: 0;
    font-size: 20px;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s;
    cursor: pointer;
    text-align: center;
    line-height: 800px;
    .el-icon-delete {
      font-size: 36px;
    }
  }
  &:hover {
    .image-preview-action {
      opacity: 1;
    }
  }
}
.image-app-preview {
  // width: 320px;
  // height: 180px;
  position: relative;
  border: 1px dashed #d9d9d9;
  float: left;
  // margin-left: 50px;
  .app-fake-conver {
    height: 44px;
    position: absolute;
    width: 100%; // background: rgba(0, 0, 0, .1);
    text-align: center;
    line-height: 64px;
    color: #fff;
  }
}
.phone {
  float: left;
  width: 480px;
  height: 800px;
}
.el-carousel__container {
  height: 800px !important;
}
.phone-item {
  width: 480px;
  height: 800px;
}
</style>
