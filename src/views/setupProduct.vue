<template>
    <div id="setupProduct">
        <div class="hold">
            <v-list>
                <div style="display: flex; justify-content: space-between; padding: 0 8px;">
                    <v-btn @click="$router.push('/productMenu')" large icon>
                        <v-icon color="#000">
                            mdi-arrow-left
                        </v-icon>
                    </v-btn>
                    <v-btn :disabled='isPlanData' elevation="0" large @click="addProduct(); $router.push('/productMenu')">
                        dodaj
                    </v-btn>
                </div>
                <v-list-item>
                    <span style="padding: 0 8px 0 0">Nazwa produktu</span>
                    <v-list-item-title>
                        <v-text-field :rules="[rules.require]" class="title" single-line v-model="title"/>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <span style="padding: 0 8px 0 0">Ilość kalorii</span>
                    <v-text-field :rules="[rules.require]" class="calories" reverse prefix="kcal" v-model="calories"/>
                </v-list-item>
                <v-list-item>
                    <span style="padding: 0 8px 0 0">Products</span>
                    <v-text-field @keydown.enter="appendToList" append-outer-icon='mdi-plus' @click:append-outer="appendToList" class="productsInput" v-model="product"/>
                </v-list-item>
                <v-list-item>
                    <v-chip class="chip" @click:close="remove(index)" v-for="(product, index) of listOfProducts" :key="product" close>
                        {{product}}
                    </v-chip>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'setupProduct',
    data() {return{
        title: '',
        calories: '',
        product: '',
        listOfProducts: [],
        rules: {
            require: v => !!v || 'Required'
        },
    }},
    computed: {
        ...mapState([
            'productBase',
        ]),
        isPlanData() {
            return !(!!this.title && !!this.calories && this.listOfProducts.length > 0)
        }
    },
    methods: {
        ...mapMutations([
            'mutateProductBase',
        ]),
        addProduct() {
            this.mutateProductBase(a => {
                a.push({
                    title: this.title,
                    calories: this.calories,
                    listOfProducts: this.listOfProducts,
                })
                return a
            })
        },
        appendToList() {
            this.listOfProducts.push(this.product)
            this.product = ''
        },
        remove(i) {
            this.listOfProducts.splice(i, 1)
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
    .chip {
        margin-left: 4px;
    }
</style>