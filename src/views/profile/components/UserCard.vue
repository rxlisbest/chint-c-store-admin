<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>About me</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.headimg_url" :height="'100px'" :width="'100px'" :hoverable="false">
        </pan-thumb>
      </div>
    </div>
    <Upload v-model="user.headimg_file_id" />
    <el-button size="small" type="primary" @click="updateHeadimg()">保存</el-button>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import Upload from '@/components/Upload/SingleImageButton'
import { saveFile, getInfo } from '@/api/file'
import { getInfo as readUser, updateHeadimg } from '@/api/user'

export default {
  components: { PanThumb, Upload },
  data() {
    return {
      user: {
        headimg_url: '',
        headimg_file_id: 0
      }
    }
  },
  watch: {
    'user.headimg_file_id': function (curVal, oldVal) {
      console.log(curVal)
      this.getInfo()
    }
  },
  created() {
    this.readUser()
  },
  methods: {
    async readUser() {
      const res = await readUser()
      this.user.headimg_url = res.data.headimg_url
      this.user.headimg_file_id = res.data.headimg_file_id
    },
    getInfo() {
      let _this = this
      console.log(this.user.headimg_file_id)
      if (this.user.headimg_file_id > 0) {
        getInfo(this.user.headimg_file_id).then((res) => {
          let url = res.data.domain + res.data.key
          this.user.headimg_url = url
        })
      }
    },
    async updateHeadimg() {
      const res = await updateHeadimg(this.user)
      this.$notify({
        title: this.$t('messages.title.success'),
        message: this.$t('messages.success'),
        type: 'success',
        duration: 2000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 .box-center {
   margin: 0 auto;
   display: table;
 }

 .text-muted {
   color: #777;
 }

 .user-profile {
   .user-name {
     font-weight: bold;
   }

   .box-center {
     padding-top: 10px;
   }

   .user-role {
     padding-top: 10px;
     font-weight: 400;
     font-size: 14px;
   }

   .box-social {
     padding-top: 30px;

     .el-table {
       border-top: 1px solid #dfe6ec;
     }
   }

   .user-follow {
     padding-top: 20px;
   }
 }

 .user-bio {
   margin-top: 20px;
   color: #606266;

   span {
     padding-left: 4px;
   }

   .user-bio-section {
     font-size: 14px;
     padding: 15px 0;

     .user-bio-section-header {
       border-bottom: 1px solid #dfe6ec;
       padding-bottom: 10px;
       margin-bottom: 10px;
       font-weight: bold;
     }
   }
 }
</style>
