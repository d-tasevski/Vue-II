import Vue from 'vue';
import App from './App.vue';

export const eventBus = new Vue({
	methods: {
		incrementAge(age) {
			this.$emit('addAge', age);
		},
	},
});

new Vue({
	el: '#app',
	render: h => h(App),
});
