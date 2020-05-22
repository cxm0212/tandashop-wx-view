<template>
  <div id="app">
    <!-- <mt-header title="商城">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header> -->

    <component :is="curPage" ref="activecomponent"></component>


    <mt-tabbar v-model="tabbarSelected" style="margin-bottom:5px;">
      <mt-tab-item id="1">
        <img slot="icon" src="./assets/logo.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" src="./assets/logo.png" />
        我的课程
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" src="./assets/logo.png" />
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import httpApi from "./api/http";
import axios from "axios";
import HomePage from './views/homePage.vue';


export default {
  name:'App',
  components:{HomePage},
  data() {
    return {
      tabbarSelected: "1",
      curPage:HomePage
    };
  },
  methods: {
  
    getCategorys() {
      axios
        .post(httpApi.getCategoryListUrl)
        .then((result) => {
          this.$refs.activecomponent.categoryList = result.data.data;
          
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getCategorys();
  }
};
</script>

<style scoped>

</style>


