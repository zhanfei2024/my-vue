<template>
  <div>
    <div>
      <router-link to="/heroes">首页</router-link>
      <router-link to="/crisises">危机中心</router-link>
    </div>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'Menu',
    data () {
      return {
        theme3: 'light'
      }
    }
  }
</script>
<style>
  .one {
    border: 1px solid red;
  }
  .two {
    border: 1px solid yellow;
  }
  .three {
    border: 1px solid blue;
  }
</style>
