import Vue from 'vue'
import Router from 'vue-router'
import VueYoutube from '@/components/VueYoutube'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueYoutube',
      component: VueYoutube
    }
  ]
})
