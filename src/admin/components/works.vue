<template lang="pug">
	.works
		.container
			h2.section-title Страница «Мои работы»
			add-work
</template>
<script>
	import addWork from './addWork.vue';
	export default {
		components: {addWork}
	}
</script>
<style lang="scss" scoped>
	.works {
		@include size(100%);
	}
</style>