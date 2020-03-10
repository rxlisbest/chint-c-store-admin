<template>
  <el-form>
    <el-form-item v-for="v in list" :label="v.name">
      <el-input type="text" v-model.trim="v.value" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">{{ $t('messages.button.submit') }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { indexConfig, saveConfig } from '@/api/config'

export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          password: '',
          confirm_password: ''
        }
      }
    }
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      let res = await indexConfig()
      this.list = res.data
    },
    async submit() {
      const res = await saveConfig(this.list)
      this.$notify({
        title: this.$t('messages.title.success'),
        message: this.$t('messages.success'),
        type: 'success',
        duration: 2000,
        onClose: () => {
          // this.$router.go(-1)
        }
      })
    }
  }
}
</script>
