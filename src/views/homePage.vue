<template>
<div>

     <mt-search v-model="searchvalue" cancel-text="取消" placeholder="搜索" class="searchdiv"></mt-search>

    <mt-navbar v-model="categoryId" style="overflow-x:auto;border-bottom:1px solid #d9d9d9;">
      <mt-tab-item  id="0" ><span @click="changeCategory(0)">推荐</span></mt-tab-item>
      <mt-tab-item v-for="cate in categoryList" :key="cate.id" :id="cate.id" >
        <span @click="changeCategory(cate.id)">{{cate.categoryName}}</span>
        </mt-tab-item>
    </mt-navbar>

    <mt-swipe :auto="4000" style="margin:15px;background-color:#fff;border-radius:20px;">
      <mt-swipe-item><img src="../assets/testimg/01.png"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/testimg/02.png"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/testimg/03.png"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/testimg/04.png"></mt-swipe-item>
    </mt-swipe>

    <div class="coursetext">
      <div class="headertitle">精选课程</div>
      <div class="contextdiv">
        <img src="../assets/logo.png">
      </div>
    </div>
</div>
</template>

<script>
export default {
    name:'HomePage',
    data(){
        return{
            categoryId:'0',
            categoryList:[],
            searchvalue:'',
        }
    },
    methods:{
      changeCategory(key){
          console.log("--------切换类别-------"+key);
          
      }
    }

}
</script>

<style scoped>
.coursetext{
width:100%;
}
.coursetext > .headertitle{
  padding:10px 15px;font-size: 26px;font-weight: 800;
}
.coursetext >.contextdiv{
  background-color:#fff;margin:0 15px;border:1px solid #d9d9d9;border-radius:5px;
}
</style>