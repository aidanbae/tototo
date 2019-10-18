import Vue from 'vue'
import Router from 'vue-router'
import PaymentScreen from '@/components/PaymentScreen'
import RequestScreen from '@/components/RequestScreen'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'PaymentScreen',
            component: PaymentScreen
        },
        {
            path: '/request',
            name: 'RequestScreen',
            component: RequestScreen
        }
    ]
})
