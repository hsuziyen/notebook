import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/components/Home'
import MixinDemo from '@/components/MixinDemo'
import ComponentDemo from '@/components/ComponentDemo'
import AxiosDemo from '@/components/AxiosDemo'
import Validation from '@/components/Validation'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'mixin',
        name: 'MixinDemo',
        component: MixinDemo
      },
      {
        path: 'component',
        name: 'ComponentDemo',
        component: ComponentDemo
      },
      {
        path: 'axios',
        name: 'AxiosDemo',
        component: AxiosDemo
      },
      {
        path: 'validation',
        name: 'ValidationDemo',
        component: Validation
      },
    ]
  }, ]
})
