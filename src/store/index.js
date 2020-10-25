import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLocal: false,
		maxCalories: 0,
	},
	mutations: {
		useLocalStorage(state) {
			state.isLocal = true
			window.localStorage.setItem('saveLocal', true)
		},
		setMaxCalories(state, val) {
			state.maxCalories = val
		}
	},
	actions: {
	},
	modules: {
	}
})