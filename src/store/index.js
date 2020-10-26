import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLocal: false,
		maxCalories: 0,
		productHistory: [],
		productBase: [],
	},
	mutations: {
		useLocalStorage(state) {
			state.isLocal = true
			window.localStorage.setItem('saveLocal', true)
		},
		setMaxCalories(state, val) {
			state.maxCalories = val
		},
		setUpProductHistory(state, val) {
			state.productBase = JSON.parse(window.localStorage.getItem('productBase'))
		},
		mutateProductHistory(state, f) {
			window.localStorage.setItem("productHistory", JSON.stringify(f(JSON.parse(window.localStorage.getItem("productHistory")))))
			state.productHistory = JSON.parse(window.localStorage.getItem("productHistory"))
        },
		setUpProductBase(state, val) {
			state.productBase = JSON.parse(window.localStorage.getItem('productBase'))
		},
		mutateProductBase(state, f) {
			window.localStorage.setItem("productBase", JSON.stringify(f(JSON.parse(window.localStorage.getItem("productBase")))))
			state.productBase = JSON.parse(window.localStorage.getItem("productBase"))
        },
	},
	actions: {
	},
	modules: {
	}
})