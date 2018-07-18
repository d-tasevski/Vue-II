<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
		<p>{{ userAge }} </p>
		<button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
	props: ['userAge'],
	methods: {
		editAge() {
			this.age = this.userAge++;
			// this.$emit('addAge', this.userAge);
			// eventBus.$emit('addAge', this.userAge);
			eventBus.incrementAge(this.userAge);
		},
	},
};
</script>

<style scoped>
div {
	background-color: lightgreen;
}
</style>
