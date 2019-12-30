<template>
  <div class="app-container">
    <!-- <el-button type="primary" @click="handleAddRole">New Role</el-button> -->

    <el-table :data="rolesList" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" :label="$t('messages.role.column.id')" width="220">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column align="center" :label="$t('messages.role.column.name')">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column align="center" :label="$t('messages.column.actions')">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="handleEdit(scope)"
            icon="el-icon-edit"
            style="width: 80px;"
          >{{ $t('messages.button.edit') }}</el-button>
          <!-- <el-button type="danger" size="small" @click="handleDelete(scope)">Delete</el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      width="80%"
      :visible.sync="dialogVisible"
      :title="$t('messages.role.input.module_id')"
    >
      <el-form :model="role" label-width="80px" label-position="left">
        <el-form-item :label="$t('messages.role.input.name')">
          <el-input v-model="role.name" :placeholder="$t('messages.placeholder.common')" />
        </el-form-item>
        <el-form-item :label="$t('messages.role.input.module_id')">
          <!-- <el-tree
            ref="tree"
            :check-strictly="checkStrictly"
            :data="routesData"
            :props="defaultProps"
            show-checkbox
            node-key="id"
            class="permission-tree"
          />-->
          <Role v-model="role.module_id"></Role>
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">{{ $t('messages.button.cancel') }}</el-button>
        <el-button type="primary" @click="confirmRole">{{ $t('messages.button.confirm') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import path from "path";
import { deepClone } from "@/utils";
import {
  getRoutes,
  indexRoles,
  addRole,
  deleteRole,
  updateRole,
  getRoleModuleRelations
} from "@/api/role";
import Role from "./Role";

const defaultRole = {
  id: 0,
  name: "",
  module_id: []
};

export default {
  components: { Role },
  data() {
    return {
      role: Object.assign({}, defaultRole),
      routes: [],
      rolesList: [],
      dialogVisible: false,
      dialogType: "new",
      defaultProps: {
        children: "children",
        label: "name"
      }
    };
  },
  computed: {
    routesData() {
      return this.routes;
    }
  },
  created() {
    // Mock: get all routes and roles list from server
    this.getRoutes();
    this.getRoles();
  },
  methods: {
    async getRoutes() {
      const res = await getRoutes();
      this.serviceRoutes = res.data;
      this.routes = this.generateRoutes(res.data);
    },
    getRoles() {
      indexRoles().then(res => {
        this.rolesList = res.data;
      });
    },
    // Reshape the routes structure so that it looks the same as the sidebar
    generateRoutes(list = [], parent_id = 0) {
      let data = [];
      for (let v of list) {
        if (v.parent_id == parent_id) {
          let children = this.generateRoutes(list, v.id);
          if (children.length > 0) {
            v.children = children;
          }
          data.push(v);
        }
      }
      return data;
    },
    generateArr(routes) {
      let data = [];
      routes.forEach(route => {
        data.push(route);
        if (route.children) {
          const temp = this.generateArr(route.children);
          if (temp.length > 0) {
            data = [...data, ...temp];
          }
        }
      });
      return data;
    },
    handleAddRole() {
      this.role = Object.assign({}, defaultRole);
      if (this.$refs.tree) {
        this.$refs.tree.setCheckedNodes([]);
      }
      this.dialogType = "new";
      this.dialogVisible = true;
    },
    handleEdit(scope) {
      this.role = deepClone(scope.row);
      getRoleModuleRelations(this.role.id).then(response => {
        this.dialogType = "edit";
        let list = response.data;
        let module_id = [];
        for (let v of list) {
          module_id.push(v.module_id);
        }
        this.role.module_id = module_id;
        this.dialogVisible = true;
      });
    },
    handleDelete({ $index, row }) {
      this.$confirm("Confirm to remove the role?", "Warning", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(async () => {
          await deleteRole(row.key);
          this.rolesList.splice($index, 1);
          this.$message({
            type: "success",
            message: "Delete succed!"
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
    async confirmRole() {
      let _this = this;
      if (_this.dialogType == "new") {
        addRole(_this.role).then(() => {
          _this.dialogVisible = false;
          _this.getRoles();
        });
      } else {
        updateRole(_this.role.id, _this.role).then(() => {
          _this.dialogVisible = false;
          _this.getRoles();
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
