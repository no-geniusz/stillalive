<template>
    <div class="plan">
        <div class="data" @click="setMaxCalories(planData.dailyDose); $router.push('/mainPage')">
            <h1>{{planData.title}}</h1>
            <div>{{planData.dailyDose}} kcal</div>
            <div>{{planData.describtion}}</div>
            <div :v-if='!planData.fullTime'>
                <div>{{planData.endDate}}</div>
                <div>{{planData.startDate}}</div>
            </div>
        </div>
        <div class='control'>
            <!-- <v-btn icon>
                <v-icon>
                    mdi-pencil
                </v-icon>
            </v-btn> -->
            <v-btn icon @click='onRemove'>
                <v-icon large>
                    mdi-close-circle
                </v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'plan',
    props: {
        planData: Object
    },
    methods: {
        ...mapMutations([
            'setMaxCalories'
        ]),
        onRemove () {
            this.$emit('remove')
        },
    },
}
</script>

<style scoped>
    .plan {
        background: #fff0;
        border-radius: 16px;
        padding: 8px 16px;
        box-shadow: 0 0 6px #ddd;
        margin: 0 0 8px 0;
        /* justify-content: space-between; */
        display: flex;
        flex-direction: row;
    }
    .data {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .control {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>