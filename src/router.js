import Vue from 'vue'
import VueRouter from 'vue-router'


// Components
import Home from './views/Home.vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'


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
        { path: '', component: ContatosHome },
        { path: ':id', component: ContatoDetalhes, name: 'contato' },
        { 
          path: ':id/editar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
        },
      ]
    },

  ]
  
})
