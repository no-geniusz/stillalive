<template>
	<div class="planSelect">
		<div style="margin: 0 auto; max-width: 100vh;">
			<v-app-bar id='app-bar' dense flat color="#fffd">
				<v-btn @click="$router.push('/')" icon>
						<v-icon color="#000">
							mdi-arrow-left
						</v-icon>
				</v-btn>
				<v-spacer/>
				<v-toolbar-title >
					Wybór Planu
				</v-toolbar-title>
				<v-spacer/>
				<v-btn @click="$router.push('/setupPlan')" icon>
						<v-icon color='#000'>
							mdi-card-plus
						</v-icon>
				</v-btn>
			</v-app-bar>
			<div class="plans">
				<plan v-for="(plan, index) in plans" @remove='remove(index)' :key="index" :planData='plan'></plan>
			</div>
		</div>
	</div>
</template>

<script>
import plan from "@/components/plan.vue"
import { mapState } from 'vuex'
export default {
	name: 'planSelect',
	components: {
		plan
	},
	data() {return{
		plans: []
	}},
	computed: {
		...mapState([
			'isLocal'
		]),
	},
	methods: {
        //f needs to return value
		mutatePlans(f) {
			window.localStorage.setItem("data", JSON.stringify(f(JSON.parse(window.localStorage.getItem("data")))))
        },
		getPlans () {
			this.plans = JSON.parse(window.localStorage.getItem('data')).plans
		},
		remove (i) {
			this.mutatePlans(a => {
				let delId = a.plans.map(b => b.id).indexOf(this.plans[i].id)
				a.plans.splice(delId, 1)
				return a
			})
			this.plans.splice(i, 1)
		},
		qlog(qwe){
			console.log('qweqwe', qwe)
		}
	},
	mounted() {
		this.getPlans()
	},
}
</script>

<style>
	.plans {
		padding: 8px 16px;
		height: 100%;
	}
	#app-bar {
		position: sticky;
	}
</style>