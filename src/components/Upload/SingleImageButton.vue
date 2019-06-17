<template>
  <div class="upload-container">
    <el-upload
      :data="dataObj"
      :multiple="false"
      :show-file-list="false"
      :on-success="handleImageSuccess"
      :headers="headers"
      :action="domain + '/index/files/upload'"
      :before-upload="beforeUpload"
    >
    <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { saveFile } from '@/api/file'

const domain = process.env.VUE_APP_BASE_API

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
      dataObj: { name: '' },
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
</style>
