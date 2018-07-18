<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
		<p>User Name: {{ switchName() }} </p>
		<p>User Age: {{ userAge }} </p>
		<button @click="resetNameInner">Reset Name</button>
		<button @click="resetName()">Reset Name ||</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
	props: {
		myName: {
			type: String,
			default: 'This is a name',
			required: true,
		},
		resetName: {
			type: Function,
			required: true,
		},
		userAge: {
			type: Number,
		},
	},
	methods: {
		switchName() {
			return this.myName
				.split('')
				.reverse()
				.join('');
		},
		resetNameInner() {
			this.myName = 'TesT';
			this.$emit('nameReset', this.myName);
		},
	},
	created() {
		eventBus.$on('addAge', age => {
			this.userAge = age;
		});
	},
};
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
