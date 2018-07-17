new Vue({
	el: '#app',
	data: {
		title: 'The Vue Instance example',
	},
	beforeCreate() {
		console.log('BeforeCreate()');
	},
	created() {
		console.log('created()');
	},
	beforeMount() {
		console.log('beforeMount()');
	},
	mounted() {
		console.log('mounted()');
	},
	beforeUpdate() {
		console.log('beforeUpdate()');
	},
	updated() {
		console.log('updated()');
	},
	beforeDestroy() {
		console.log('beforeDestroy()');
	},
	destroyed() {
		console.log('destroyed()');
	},
	methods: {
		destroy() {
			this.$destroy();
		},
		updateTitle() {
			this.title = 'The Vue Instance example (Updated)';
		},
	},
});
