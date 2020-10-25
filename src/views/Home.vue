<template>
	<div class="home">
			<h1>STILLALIVE</h1>
			<img src="../assets/tse.png" alt="">
			<div class="button-hold">
					<v-btn @click="$router.push('/planSelect'); useLocalStorage()" color='#f5f5f5' rounded elevation='1' large>otwórz bez logowania</v-btn>
				<!-- <v-btn color='#f5f5f5' rounded elevation='1' large>otwórz z google</v-btn> -->
			</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	name: 'Home',
	methods: {
		...mapMutations([
			'useLocalStorage'
		]),
	}
}
</script>

<style scoped>
	.button-hold {
		display: flex;
		flex-direction: column;
	}
	.home {
		height: 100vh;
		width: 100vw;
		display: grid;
		place-items: center;
	}
	.button-hold button:first-child {
		margin: 0;
	}
	.button-hold button {
		margin: 16px 0 0 0;
	}
</style>