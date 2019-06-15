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
    <div class="image-preview image-app-preview" :style="(previewWidth > 0? 'width:' + previewWidth + 'px;': '') + (previewHeight > 0? 'height:' + previewHeight + 'px;' + 'line-height:' + previewHeight + 'px;': '')">
      <div v-show="imageUrl.length>1" class="image-preview-wrapper">
        <img :src="imageUrl">
        <div class="image-preview-action" :style="(previewHeight > 0? 'line-height:' + previewHeight + 'px;': '')">
          <i class="el-icon-delete" @click="rmImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import domain from '@/api/domain'
import { getToken } from '@/utils/auth'
import { saveFile, getInfo } from '@/api/file'

export default {
  name: 'SingleImageUpload4',
  props: {
    value: {
      type: Number,
      default: 0
    },
    previewWidth: {
      type: Number,
      default: 0
    },
    previewHeight: {
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
  created() {
    this.getInfo()
  },
  watch: {
    value(val) {
      this.getInfo()
    }
  },
  methods: {
    rmImage() {
      this.emitInput(0)
    },
    emitInput(val) {
      this.$emit('input', val)
    },
    getInfo() {
      let _this = this
      if (this.value > 0) {
        getInfo(this.value).then((res) => {
          let url = res.data.domain + res.data.key
          _this.imageUrl = url
        })
      } else {
        _this.imageUrl = ''
      }
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
    width: 35%;
    float: left;
  }
  .image-preview {
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;
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
      line-height: 200px;
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
    width: 320px;
    height: 180px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;
    .app-fake-conver {
      height: 44px;
      position: absolute;
      width: 100%; // background: rgba(0, 0, 0, .1);
      text-align: center;
      line-height: 64px;
      color: #fff;
    }
  }
}
</style>
