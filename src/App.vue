<template>
  <div id="app">
    <router-view></router-view>
    <Nubia-tabBar v-if='this.$route.meta.flag'/>
  </div>
</template>

<script>
import TabBar from '@components/tabBar';
export default {
  name:"App",
  components:{
    [TabBar.name]:TabBar
  }
};
</script>
<style scoped>
#app{
  height: 100%;
}
</style>
