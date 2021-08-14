import Vue from 'vue'
import VueRouter from 'vue-router'


// Components
import Home from './views/Home.vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'


Vue.use(VueRouter)

export default new VueRouter({

  mode: 'history',

  linkExactActiveClass: 'active',

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contatos',
      component: Contatos,
      children: [
        { path: ':id', component: ContatoDetalhes },
      ]
    },
    
  ]
  
})
