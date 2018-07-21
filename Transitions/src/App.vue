<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
				<hr>
				<button class="btn btn-primary" @click="show = !show">Show Alert</button>
				<br>
				<br>
				<transition name="fade">
					<div v-show="show" class="alert alert-info">This is just info</div>
				</transition>
				<transition name="slide" type="animations">
					<div v-if="show" class="alert alert-info">This is just info</div>
				</transition>
				<transition name="fade" appear>
					<div v-if="show" class="alert alert-info">This is just info</div>
				</transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			show: true,
		};
	},
};
</script>

<style>
.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 1s;
}

.fade-leave {
	/* opacity: 1; */
}

.fade-leave-active {
	transition: opacity 1s;
	opacity: 0;
}

.slide-enter {
	opacity: 0;
}

.slide-enter-active {
	animation: slide-in 1s ease-out forwards;
	transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
	animation: slide-out 1s ease-out forwards;
	transition: opacity 1s;
	opacity: 0;
}

@keyframes slide-in {
	from {
		transform: translateX(202px);
	}
	to {
		transform: translateX(0);
	}
}

@keyframes slide-out {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(220px);
	}
}
</style>
