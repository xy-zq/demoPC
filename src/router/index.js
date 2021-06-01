import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes_missionManage = [
	{
	  path: '/',  // 任务管理
	  name: 'missionManage',
	  component: () => import('@/views/missionManage/missionManage/missionManage')
	},
	{
	  path: '/missionManage/sendMission/:id',  // 下派任务
	  name: 'sendMission',
	  component: () => import('@/views/missionManage/missionManage/sendMission')
	},
	{
	  path: '/myMission',  // 下派任务
	  name: 'sendMission',
	  component: () => import('@/views/missionManage/myMission/myMission')
	},
]

const routes_disasterInfo = [
	{
	  path: '/',  // 灾情信息
	  name: 'disasterInfo',
	  component: () => import('@/views/disasterInfo/disasterInfo/disasterInfo')
	},
	{
	  path: '/disasterInfo/disasterInfoDetail/:id',  // 灾情信息详情
	  name: 'disasterInfoDetail',
	  component: () => import('@/views/disasterInfo/disasterInfo/disasterInfoDetail')
	},
	{
	  path: '/infoExamine',  // 信息审核
	  name: 'infoExamine',
	  component: () => import('@/views/disasterInfo/infoExamine/infoExamine')
	},
	{
	  path: '/infoExamine/infoExamineDetail/:id',  // 审核详情
	  name: 'infoExamineDetail',
	  component: () => import('@/views/disasterInfo/infoExamine/infoExamineDetail')
	},
	{
	  path: '/infoDelivery',  // 信息发布
	  name: 'infoDelivery',
	  component: () => import('@/views/disasterInfo/infoDelivery/infoDelivery')
	},
]

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
	routes: routes_missionManage, // 任务管理
	// routes: routes_disasterInfo, // 灾情信息
	// routes: routes_mailList, // 通讯录
})

export default router
