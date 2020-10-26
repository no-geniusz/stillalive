<template>
    <div id="productMenu">
        <div class="hold">
            <v-app-bar id='app-bar' dense flat color="#fffd">
	        	<v-btn icon @click="$router.push('/mainPage')">
	        		<v-icon color="#000">
	        			mdi-arrow-left
	        		</v-icon>
	        	</v-btn>
	        	<v-spacer/>
	        	<v-btn icon @click="$router.push('/setupProduct')">
	        		<v-icon color='#000'>
	        			mdi-plus
	        		</v-icon>
	        	</v-btn>
	        </v-app-bar>
            <v-list>
                <v-list-item @click="addToHistory(product)" v-for="product of productBase" :key="product.id">
                    <span style="padding: 0 8px 0 0">{{product.title}}</span>
                    <v-spacer/>
                    <span style="opacity: 0.6">{{product.calories}} kcal</span>
                    <v-icon>mdi-alert-circle</v-icon>
                </v-list-item>
            </v-list>
            <v-text-field class="search" solo></v-text-field>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "productMenu",
    computed: {
        ...mapState([
            'productBase'
        ])
    },
    methods: {
        ...mapMutations([
            'mutateProductHistory',
        ]),
        addToHistory(item) {
            this.mutateProductHistory(a => {
                a.push(item)
                return a 
            })
        },
    }
}
</script>

<style scoped>
	.hold {
        margin: 0 auto;
		max-width: 100vh;
        height: 100%;
	}
    .search {
        position: fixed;
        bottom: -16px;
        left: 0;
        right: 0;
        margin: 0 auto 0 auto;
        width: calc(100% - 16px);
        max-width: calc(100vh - 16px);
    }
    #productMenu {
        height: 100%;
    }
</style>