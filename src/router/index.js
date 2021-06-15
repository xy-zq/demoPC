import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes_mailList = [
	{
	  path: '/',  // 个人通讯录
	  name: 'personalMailList',
	  component: () => import('@/views/mailList/personalMailList/personalMailList')
	},
	{
	  path: '/mailGroup',  // 分组通讯
	  name: 'mailGroup',
	  component: () => import('@/views/mailList/mailGroup/mailGroup')
	},
]

const router = new VueRouter({
	routes: routes_mailList, // 通讯录
})

export default router
