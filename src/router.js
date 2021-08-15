import Vue from 'vue'
import VueRouter from 'vue-router'


// Components
import Home from './views/Home.vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'
import Erro404Contatos from './views/contatos/Erro404Contatos.vue'
import Erro404 from './views/Erro404.vue'


Vue.use(VueRouter)

export default new VueRouter({

  mode: 'history',

  linkExactActiveClass: 'active',

  routes: [
    
    {
      path: '/contatos',
      component: Contatos,
      alias: ['/meus-contatos', '/lista-de-contatos'],
      children: [
        {
          path: ':id',
          component: ContatoDetalhes,
          name: 'contato',
          props: true
        },
        { 
          path: ':id/editar',
          alias: ':id/alterar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: true,
            'contato-detalhes': true
          }
        },
        { path: '', component: ContatosHome, name: 'contatos' },
        { path: '*', component: Erro404Contatos }, // NOT FOUND
      ]
    },

    {
      path: '/home',
      alias: '/',
      component: Home
    },

    // {
    //   path: '/',
    //   redirect: '/contatos'
    // },

    // {
    //   path: '/',
    //   redirect: (to) => {
    //     console.log(to)
    //     return { name: 'contatos' }
    //   }
    // },

    { // NOT FOUND
      path: '*',
      component: Erro404
    },


  ]
  
})
