<template>
  <div class="createPost-container">
    <div class="createPost-main-container">
      <Upload v-model="file_id" />
      <div class="image-preview image-app-preview" v-for="v in list">
        <div class="image-preview-wrapper">
          <img :src="v.file_url">
          <div class="image-preview-action">
            <i class="el-icon-delete" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/Upload/SingleImageNoPreview'
import { indexStoreImage, saveStoreImage, readStoreImage } from '@/api/store_image'
import { MessageBox, Message } from 'element-ui'

let id = 0;
export default {
  name: 'Detail',
  components: { Upload },
  props: {
  },
  data() {
    return {
      store_id: 0,
      list: [],
      file_id: 0,
      loading: false,
      tempRoute: {}
    }
  },
  computed: {
  },
  watch: {
    file_id(curVal, oldVal) {
      this.saveStoreImage()
    }
  },
  created() {
    const store_id = this.store_id = this.$route.params && this.$route.params.store_id
    this.indexStoreImage(this.store_id)
    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  mounted() {
  },
  methods: {
    indexStoreImage(store_id) {
      indexStoreImage({store_id: store_id}).then(res => {
        this.list = res.data
      }).catch(err => {

      })
    },
    saveStoreImage() {
      let data = {store_id: this.store_id, file_id: this.file_id}
      saveStoreImage(data).then(res => {
        this.readStoreImage(res.data)
      }).catch(err => {

      })
    },
    readStoreImage(id) {
      readStoreImage(id).then(res => {
        this.list.push(res.data)
      }).catch(err => {

      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.amap-wrapper{
  height: 300px;
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
  width: 200px;
  height: 200px;
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
</style>
