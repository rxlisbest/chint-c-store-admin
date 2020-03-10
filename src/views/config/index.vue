<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">
        <el-col :span="24" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane :label="$t('messages.config.title')" name="config">
                <config :user="user" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Config from './components/Config'

export default {
  name: 'config-index',
  components: { Config },
  data() {
    return {
      user: {},
      activeTab: 'config'
    }
  },
  created() {
    this.getUser()
  },
  methods: {
  }
}
</script>
