import Vue from "vue";
import Router from 'vue-router'
import Opening from '@/router/modules/opening.js'
import Main from '@/router/modules/main.js'
import Login from '@/router/modules/login.js'
import Admin from '@/router/modules/admin.js'
import Amount from '@/router/modules/amount.js'
import Calculate from '@/router/modules/calculate.js'
import Distributor from '@/router/modules/distributor.js'
import Policy from '@/router/modules/policy.js'
import User from '@/router/modules/user.js'
import Charge from '@/router/modules/charge.js'
import Error from '@/views/error/Error'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...Login,
    ...Main,
    ...Opening,
    ...Admin,
    ...Amount,
    ...Calculate,
    ...Distributor,
    ...Policy,
    ...User,
    ...Charge,
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '*',
      component: Error
    }
  ]
})
