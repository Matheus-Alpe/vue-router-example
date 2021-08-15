import Vue from 'vue'
import VueRouter from 'vue-router'


// Components
import Home from './views/Home.vue'
import Login from './views/login/Login.vue'
import Contatos from './views/contatos/Contatos.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'
import Erro404Contatos from './views/contatos/Erro404Contatos.vue'
import Erro404 from './views/Erro404.vue'


import EventBus from './event-bus'

Vue.use(VueRouter)

const extrairParamId = route => ({
  id: +route.params.id // Number(route.params.id)
})

const router = new VueRouter({

  mode: 'history',

  linkExactActiveClass: 'active',

  routes: [
    
    { // CONTATOS
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
          meta: {
            requerAutenticacao: true
          },
          beforeEnter: (to, from, next) => {
            console.log('beforeEnter - Navigation Guard | Route |', 'to:', to.path, '-> from:', from.path)
            // exemplo de autenticação e redirecionamento
            // if (to.query.autenticado === 'true') {
            //   return next()
            // }
            // next('/contatos')

            next() //continuar
            // next(true) //continuar ? true : false
            // next('/contatos') //redirect
            // next({ path: '/contatos', params: { id: 1 } }) //redirect
            // next({ name: '/contatos' }) //redirect
            // next(new Error(`Permissões insuficiente para acessar o recurso "${to.fullPath}"`)) //jogando erros
          },
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

    { // LOGIN
      path: '/login',
      component: Login
    },

    { // HOME
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

router.beforeEach((to, from, next) => {
  console.log('beforeEach - Navigation Guard | Global |', 'to:', to.path, '-> from:', from.path)
  console.log('Metafield:', to.meta)

  const estaAutenticado = EventBus.autenticado
  if (to.matched.some(rota => rota.meta.requerAutenticacao)) {
    if (!estaAutenticado) {
      next({
        path: '/login',
        query: {
          redirecionar: to.fullPath
        }
      })
      return
    }
  }

  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve - Navigation Guard | Global |', 'to:', to.path, '-> from:', from.path)
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach - Navigation Guard | Global |', 'to:', to.path, '-> from:', from.path)
})

router.onError((erro) => {
  console.log(erro)
})

export default router