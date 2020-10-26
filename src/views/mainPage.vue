<template>
    <div id='mainPage'>
        <div class="hold">
            <v-app-bar id='app-bar' dense flat color="#fffd">
	        	<v-btn icon @click="$router.push('/planSelect')">
	        		<v-icon color="#000">
	        			mdi-arrow-left
	        		</v-icon>
	        	</v-btn>
	        	<v-spacer/>
	        	<v-btn icon>
	        		<v-icon color='#000'>
	        			mdi-dots-vertical
	        		</v-icon>
	        	</v-btn>
	        </v-app-bar>
            <div class='content'>
                <v-progress-circular class="calories" :size="200" :width='8' :value="displayCalories" color="blue-grey">
                    {{maxCalories - calories}}
                </v-progress-circular>
                <v-list class="productHistory">
                    <v-list-item v-for="product of productHistory" :key="product.id">
                        <span style="padding: 0 8px 0 0">{{product.name}}</span>
                        <v-spacer/>
                        <span style="opacity: 0.6">{{product.calories}}</span>
                    </v-list-item>
                </v-list>
                <v-btn @click="$router.push('/productMenu')" icon large class="add">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </div>
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
            'productHistory',
        ]),
        displayCalories() {
            Math.ceil(this.maxCalories / this.calories * 100)
        },
    },
    mounted() {
        window.localStorage.getItem('productHistory')
    }
}
</script>

<style scoped>
	.hold {
        margin: 0 auto;
		max-width: 100vh;
        height: 100%;
	}
    .content {
        display: flex;
        justify-content: center;
        height: 100%;
    }
    .calories {
        margin: 40px auto 0 auto;
    }
    .add {
        position: fixed;
        bottom: 0;
        margin: 0 auto 28px auto;
        box-shadow: 0 0 6px #bbb;
    }
    #mainPage {
        height: 100%;
    }
</style>
