<template lang="pug">
	.about
		.container
			h2.section-title Страница "Oбо мне"
			.skills-content
				skills-list(
				v-for="skillType in skillsTypes",
				:skillsType="skillType",
				:key="skillType",
				:skills="skills"
				)
</template>
<script>
	import { mapActions, mapGetters } from 'vuex';
	import skillsList from "./skillsList.vue";
	export default {
		components: {skillsList},
		data() {
			return {
				skillsTypes: ['Frontend', 'Workflow', 'Backend']
			}
		},
		computed: {
			...mapGetters(['skills']),
		},
		methods: {
			...mapActions(['fetchSkills'])
		},
		mounted() {
			this.fetchSkills();
		}
	}
	
</script>
<style lang="scss" scoped>
	.about {
		@include size(100%);
	}
	.skills-content {
		display: flex;
		flex-wrap: wrap;
		@include tablet {
			flex-direction: column;
			flex-wrap: none;
		}
	}
</style>