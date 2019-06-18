import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'login', component: r => require.ensure([], () => r(require('./modules/Login')), 'Login') },
    { path: '/adress', name: 'adress', component: r => require.ensure([], () => r(require('./modules/Adress')), 'Adress')  }
]

export default new VueRouter({
    routes: routes
})