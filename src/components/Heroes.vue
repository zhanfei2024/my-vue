<template>
  <div>
    <h2>英雄列表</h2>
    <ul>
      <li v-for="item in heroes" v-bind:key="item.id">
        <router-link :to="'/hero/'+item.id">{{item.id}}-{{item.name}}</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Heroes',
  data () {
    return {
      heroes: [
        {id: 1, name: 'lilei'},
        {id: 2, name: 'hello'},
        {id: 3, name: 'test'},
        {id: 4, name: 'zhansan'},
        {id: 5, name: 'hanmei'},
        {id: 6, name: 'ige'},
        {id: 7, name: 'kskks'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
