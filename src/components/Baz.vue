<template>
  <div>
    <h1>Baz</h1>
    <!--<p>英雄报道{{$route.params.post_id}}</p>-->

    <!--<div v-for="item in doneTodosCount">-->
      <!--{{item.id}}-{{item.text}}-->
    <!--</div>-->
    <count></count>
  </div>
</template>

<script>
  import store from '../store/store'
  import Count from './Count.vue'
export default {
  name: 'Baz',
  store: store,
  components: {Count},
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
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
