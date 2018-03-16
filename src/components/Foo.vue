<template>
  <div>
    <h1>foo</h1>
    <!--<p>英雄报道{{$route.params.post_id}}</p>-->
  </div>
</template>

<script>
export default {
  name: 'Foo',
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
