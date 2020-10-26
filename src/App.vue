<template>
	<v-app>
		<v-main>
		<router-view/>
		</v-main>
	</v-app>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	name: 'App',
	methods: {
		...mapMutations([
			'setUpProductBase'
		])
	},
	mounted() {
		if (!window.localStorage.getItem('data')) {
			window.localStorage.setItem("data", JSON.stringify({plans: []}))
		}
		if (!window.localStorage.getItem('saveLocal')) {
			window.localStorage.setItem('saveLocal', "true")
		}
		if (!window.localStorage.getItem('productHistory')) {
			window.localStorage.setItem("productHistory", JSON.stringify([]))
		}
		if (!window.localStorage.getItem('productBase')) {
			window.localStorage.setItem("productBase", JSON.stringify([]))
		}
		this.setUpProductBase()
	}
};
</script>

<style>
	:any-link {
		text-decoration: none;
	}
</style>