<template>
  <el-form>
    <el-form-item :label="$t('messages.profile.input.password')">
      <el-input type="password" v-model.trim="user.password" />
    </el-form-item>
    <el-form-item :label="$t('messages.profile.input.confirm_password')">
      <el-input type="password" v-model.trim="user.confirm_password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">{{ $t('messages.button.submit') }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { updatePassword } from '@/api/user'

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
  methods: {
    async submit() {
      const res = await updatePassword(this.user)
      this.$notify({
        title: this.$t('messages.title.success'),
        message: this.$t('messages.success'),
        type: 'success',
        duration: 2000,
        onClose: () => {
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>
