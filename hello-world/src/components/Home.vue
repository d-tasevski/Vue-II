<template>
	<div>
		<app-server v-for="server in 5" :key="server"></app-server>
	</div>
</template>

<script>
import ServerStatus from './ServerStatus'
export default {
	components: {
		'app-server':ServerStatus
	}
	
}
</script>
