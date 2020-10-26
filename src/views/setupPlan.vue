<template>
	<div class="setupPlan">
		<div class="edit">
            <v-list>
                <div style="display: flex; justify-content: space-between; padding: 0 8px;">
                    <v-btn @click="$router.push('/planSelect')" large icon>
                            <v-icon color="#000">
                                mdi-arrow-left
                            </v-icon>
                    </v-btn>
                    <v-btn :disabled='isPlanData' elevation="0" large @click="addPlan(); $router.push('/planSelect')">
                        dodaj
                    </v-btn>
                </div>
                <v-list-item>
                    <span style="padding: 0 8px 0 0">Tytuł</span>
                    <v-list-item-title>
                        <v-text-field :rules="[rules.require]" class="title" single-line v-model="title"/>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <span style="padding: 0 8px 0 0">Dzienna dawka kalorii</span>
                    <v-text-field :rules="[rules.require]" class="dailyDose" reverse prefix="kcal" v-model="dailyDose"/>
                </v-list-item>
                <v-list-item>
                    <span style="padding: 0 8px 0 0">Opis</span>
                    <v-textarea :rules="[rules.require]" auto-grow class="describtion" v-model="describtion"/>
                </v-list-item>
                <v-list-item>
                    <span style="padding: 0 8px 0 0">plan ograniczony czasOWO</span>
                    <v-spacer/>
                    <v-switch v-model="fullTime"/>
                </v-list-item>
                <v-list-item :disabled='fullTime' @click="startDateBool = true">
                    <span style="padding: 0 8px 0 0">Data rozpoczęcia</span>
                    <v-spacer/>
                    <span style="opacity: 0.6">{{startDate}}</span>
                </v-list-item>
                <v-list-item :disabled='fullTime' @click="endDateBool = true">
                    <span style="padding: 0 8px 0 0">Data zakończenia</span>
                    <v-spacer/>
                    <span style="opacity: 0.6">{{endDate}}</span>
                </v-list-item>
            </v-list>
		</div>
        <v-overlay :value="startDateBool">
            <v-date-picker v-model="startDate"/>
        </v-overlay>
        <v-overlay :value="endDateBool">
            <v-date-picker v-model="endDate"/>
        </v-overlay>
	</div>
</template>

<script>

export default {
    name: "setupPlan",
    data() {return{
        title: "",
        describtion: "",
        dailyDose: "",
        fullTime: false,
        startDate: "",
        startDateBool: false,
        endDate: "",
        endDateBool: false,
        rules: {
            require: v => !!v || 'Required'
        },
    }},
    computed: {
        isPlanData () {
            return !(!!this.title && !!this.describtion && !!this.dailyDose && (!!this.fullTime ? true : !!this.startDate && !!this.endDate))
        },
    },
    watch: {
        startDate: function () {
            this.startDateBool = false
        },
        endDate: function () {
            this.endDateBool = false
        },
    },
    methods: {
        //f needs to return value
		mutatePlans(f) {
			window.localStorage.setItem("data", JSON.stringify(f(JSON.parse(window.localStorage.getItem("data")))))
        },
        addPlan() {
            let lastId = parseInt(JSON.parse(window.localStorage.getItem("data")).plans.map(a => a.id).sort().reverse()[0]) || 0
            this.mutatePlans(a => {
                let plan = {
                    title: this.title,
                    dailyDose: this.dailyDose,
                    fullTime: this.fullTime,
                    describtion: this.describtion,
                    startDate: this.startDate,
                    endDate: this.endDate,
                    id: lastId + 1,
                }
                a.plans.push(plan)
                return a
            })
        },
    }
}
</script>

<style>
	.edit {
        margin: 0 auto;
		max-width: 100vh;
	}
</style>