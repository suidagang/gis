import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'login', component: r => { require(['./modules/Login'], r) }},
    { path: '/adress', name: 'adress', component: r => { require(['./modules/Adress'], r) }}
]

export default new VueRouter({
    routes: routes
})