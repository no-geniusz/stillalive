<template>
	<v-app>
		<v-main>
		<router-view/>
		</v-main>
	</v-app>
</template>

<script>

export default {
	name: 'App',
	mounted() {
		if (!window.localStorage.getItem('data')) {
			window.localStorage.setItem("data", JSON.stringify({plans: []}))
		}
		if (!window.localStorage.getItem('saveLocal')) {
			window.localStorage.setItem('saveLocal', "true")
		}
	}
};
</script>

<style>
	:any-link {
		text-decoration: none;
	}
</style>