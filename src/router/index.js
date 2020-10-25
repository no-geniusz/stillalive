import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import planSelect from '../views/planSelect.vue'
import setupPlan from '../views/setupPlan.vue'
import mainPage from '../views/mainPage.vue'
import productMenu from '../views/productMenu.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'LoginPage',
		component: Home
	},
	{
		path: '/planSelect',
		name: 'planSelect',
		component: planSelect
	},
	{
		path: '/setupPlan',
		name: 'setupPlan',
		component: setupPlan
	},
	{
		path: '/mainPage',
		name: 'mainPage',
		component: mainPage
	},
	{
		path: '/productMenu',
		name: 'productMenu',
		component: productMenu
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
