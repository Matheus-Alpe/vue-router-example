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
      path: '/home',
      component: Home
    },

    // {
    //   path: '/',
    //   redirect: '/contatos'
    // },

    {
      path: '/',
      redirect: (to) => {
        console.log(to)
        return { name: 'contatos' }
      }
    },

    {
      path: '/contatos',
      component: Contatos,
      alias: ['/meus-contatos', '/lista-de-contatos'],
      children: [
        { path: '', component: ContatosHome, name: 'contatos' },
        { path: ':id', component: ContatoDetalhes, name: 'contato' },
        { 
          path: ':id/editar',
          alias: ':id/alterar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
        },
      ]
    },

  ]
  
})
