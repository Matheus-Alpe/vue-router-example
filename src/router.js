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

const extrairParamId = route => ({
  id: +route.params.id // Number(route.params.id)
})

export default new VueRouter({

  mode: 'history',

  linkExactActiveClass: 'active',

  routes: [
    
    {
      path: '/contatos',
      component: Contatos,
      alias: ['/meus-contatos', '/lista-de-contatos'],
      props: (route) => {
        const busca = route.query.busca
        return busca ? { busca } : {}
      },
      children: [
        {
          path: ':id(\\d+)',
          component: ContatoDetalhes,
          name: 'contato',
          // props: true,
          // props: {
          //   id: 10 // fixed value
          // }
          props: extrairParamId
        },
        { 
          path: ':id(\\d+)/editar/:opacional?',
          // path: ':id(\\d+)/editar/:zeroOuMais*',
          // path: ':id(\\d+)/editar/:umOuMais+',
          alias: ':id(\\d+)/alterar/:zeroOuMais*',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          },
          props: {
            default: extrairParamId,
            'contato-detalhes': extrairParamId
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
