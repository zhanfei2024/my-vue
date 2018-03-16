import Vue from 'vue'
import Router from 'vue-router'
import Heroes from '../components/Heroes.vue'
import Crisises from '../components/Crisises.vue'
import Hero from '../components/Hero.vue'
import Post from '../components/Post.vue'
import Menu from '../components/Menu.vue'
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import baz from '../components/baz.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '',
      redirect: { name: 'Heroes' }
    },
    {
      path: '',
      name: 'Menu',
      component: Menu,
      // a meta field
      meta: { requiresAuth: true },
      // beforeEnter: (to, from, next) => {
      //   const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
      //   if (answer) {
      //     next()
      //   } else {
      //     next(false)
      //   }
      // },
      children: [
        {
          path: '/heroes',
          name: 'Heroes',
          components: {
            default: Foo,
            a: Bar,
            b: baz
          },
        },
        {
          path: '/hero/:id',
          name: 'Hero',
          component: Hero
        },
        {
          path: '/hero/:id/post/:post_id',
          name: 'Post',
          component: Post
        },
        {
          path: '/crisises',
          name: 'Crisises',
          component: Crisises
        }
      ]
    },


  ]
})

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // if (!auth.loggedIn()) {
    //   next({
    //     path: '/login',
    //     query: { redirect: to.fullPath }
    //   })
    // } else {
    //   next()
    // }
    console.log('你是否登录？');
    next()
  } else {
    next() // 确保一定要调用 next()
  }
})
