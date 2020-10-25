<template>
    <div id='mainPage'>
        <v-app-bar id='app-bar' dense flat color="#fffd">
	    	<v-btn icon @click="$router.push('/planSelect')">
	    		<v-icon color="#000">
	    			mdi-arrow-left
	    		</v-icon>
	    	</v-btn>
	    	<v-spacer/>
	    	<v-btn icon @click="$router.push('/preferences')">
	    		<v-icon color='#000'>
	    			mdi-dots-vertical
	    		</v-icon>
	    	</v-btn>
	    </v-app-bar>
        <div>
            <v-progress-circular
                size="80px"
                :value="displayCalories"
                color="blue-grey"
            ></v-progress-circular>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "mainPage",
    data () {return{
        calories: 0,
    }},
    computed: {
        ...mapState([
            'maxCalories',
        ]),
        displayCalories() {
            Math.ceil(this.maxCalories / this.calories * 100)
        },
    },
    methods: {
        // ...mapMutations([
        //     jd
        // ])
    },
}
</script>

<style scoped>

</style>