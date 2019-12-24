<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :default-openeds="collapseMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(["permission_routes", "sidebar"]),
    activeMenu() {
      this.isChildHas(this.permission_routes);
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    defaultOpeneds() {
      return this.isChildHas(this.permission_routes);
    }
  },
  data() {
    return {
      collapseMenu: []
    };
  },
  methods: {
    isChildHas(children, parentPath = "") {
      for (let v of children) {
        if (
          v.redirectAndCollapse != undefined &&
          v.redirectAndCollapse === true &&
          this.$route.path.indexOf(v.redirect.substring(0, v.redirect.lastIndexOf('/'))) === 0
        ) {
          return true;
        } else { 
          if (v.children != undefined && v.children.length > 0) {
            let r = this.isChildHas(v.children, parentPath + v.path);
            if (r === true) {
              this.collapseMenu.push(parentPath + v.path);
              return r;
            }
            continue;
          }
        }
      }
      return false;
    }
  }
};
</script>
