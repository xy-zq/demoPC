import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes_mailList = [
	{
	  path: '/',
	  name: 'personalMailList',
	  component: () => import('@/views/mailList/personalMailList/personalMailList')
	},
	{
	  path: '/mailGroup',
	  name: 'personalMailList',
	  component: () => import('@/views/mailList/mailGroup/mailGroup')
	},
]

const router = new VueRouter({
  routes: routes_mailList
})

export default router
