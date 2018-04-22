<template lang="pug">
	.blog
		.container
			h2.section-title Страница «Блог»
			add-article
</template>
<script>
	import addArticle from './addArticle.vue';
	export default {
		components: {addArticle}
	}
</script>
<style lang="scss" scoped>
	.blog {
		@include size(100%);
	}
</style>