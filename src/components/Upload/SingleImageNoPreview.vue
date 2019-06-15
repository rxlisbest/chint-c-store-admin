<template>
  <div class="upload-container">
    <el-upload
      :data="dataObj"
      :multiple="false"
      :show-file-list="false"
      :on-success="handleImageSuccess"
      class="image-uploader"
      drag
      :headers="headers"
      :action="domain + '/index/files/upload'"
      :before-upload="beforeUpload"
    >
      <i class="el-icon-upload" />
      <div class="el-upload__text">
        将文件拖到此处，或<em>点击上传</em>
      </div>
    </el-upload>
  </div>
</template>

<script>
import domain from '@/api/domain'
import { getToken } from '@/utils/auth'
import { saveFile } from '@/api/file'

export default {
  name: 'SingleImageNoPreview',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      imageUrl: '',
      domain: domain,
      tempUrl: '',
      dataObj: { name: 'test.png' },
      headers: {
        'Authorization': 'Bearer ' + getToken()
      }
    }
  },
  computed: {
  },
  watch: {
    value(val) {
      // this.getInfo()
    }
  },
  methods: {
    rmImage() {
      this.emitInput('')
    },
    emitInput(val) {
      this.$emit('input', val)
    },
    handleImageSuccess(response, file) {
      let _this = this
      // this.emitInput(file)
      let data = {}
      data.key = response.data
      saveFile(data).then((r) => {
        _this.emitInput(Number(r.data))
      })
    },
    beforeUpload(file) {
      function GetExtensionFileName(pathfilename)
      {
        var reg = /(\\+)/g;
        var pfn = pathfilename.replace(reg, "#");
        var arrpfn = pfn.split("#");
        var fn = arrpfn[arrpfn.length - 1];
        var arrfn = fn.split(".");
        return arrfn[arrfn.length - 1];
      }
      let ext = GetExtensionFileName(file.name)
      this.dataObj.name = Date.parse(new Date()) + Math.random().toString().slice(-6) + "." +ext
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.upload-container {
  width: 100%;
  position: relative;
  @include clearfix;
  .image-uploader {
    width: 360px;
    float: left;
  }
}
</style>
