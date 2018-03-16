<template>
  <div>
    <h2>危机中心</h2>
    <ul>
      <li v-for="item in heroes" v-bind:key="item.id">
        <router-link :to="'/hero/'+item.id">{{item.id}}-{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Crisises',
  data () {
    return {
      heroes: [
        {id: 1, title: '外星人入侵'},
        {id: 2, title: '火山爆发'},
        {id: 3, title: '地震'},
        {id: 4, title: '龙侵入'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
