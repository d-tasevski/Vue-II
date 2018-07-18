<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
				<button @click="selectedComponent = 'appQuote'">Quote</button>
				<button @click="selectedComponent = 'quoteAuthor'">Author</button>
				<button @click="selectedComponent = 'newQuote'">New Quote</button>
				<hr>
				{{ selectedComponent }}
				<hr>
               <!-- <appQuote >
				   <h2 slot="title">{{ quoteTitle }} </h2>
				   <p slot="content">Just another quote!</p>
			   </appQuote> -->
			   <keep-alive>
					<component :is="selectedComponent">
						<p>Default Content</p>
					</component>
			   </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue';
import New from './components/New.vue';
import Author from './components/Author.vue';

export default {
	components: {
		appQuote: Quote,
		quoteAuthor: Author,
		newQuote: New,
	},
	data() {
		return {
			quoteTitle: 'The Quote',
			selectedComponent: 'appQuote',
		};
	},
};
</script>

<style>
</style>
