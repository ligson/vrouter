<template>
  <div>
    111
    <el-button @click="goToLogin">login</el-button>
    <router-link to="/register">to register</router-link>
  </div>
</template>

<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
  import { processMenuData } from "@/router/loadRouter";

  export default {
    components: {ElButton},
    name: "HelloWorld",
    data () {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    },
    methods: {
      goToLogin () {
        let routerList = processMenuData();
        this.$router.addRoutes([routerList]);
        this.$router.push("/admin/user");
      }
    }
  };
</script>
