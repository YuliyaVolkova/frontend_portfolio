<template lang="pug">
	.skillList
		h3.skills-title {{skillsType}}
		.table(v-if="skills.length")
			skills-item(
			v-for="skill in skills",
			v-if="convertSkillTypeStringToNum(skillsType) === skill.type",
			:key="skill.id",
			:skill="skill",
			)
			.mes(v-if="!length(convertSkillTypeStringToNum(skillsType))") {{skillsType}} категория пуста, введите данные
		//-.overlay(v-else)
			.popup
				span.popup-text Идет загрузка скиллов
		skill-input(:type="convertSkillTypeStringToNum(skillsType)")
</template>
<script>
	import skillsItem from './skillsItem.vue';
	import skillInput from './skillInput.vue';
	export default {
		components: {
			skillsItem, skillInput
		},
		props: {
			skillsType: String,
			skills: Array
		},
		methods: {
			convertSkillTypeStringToNum(type) {
				switch (type) {
					case 'Frontend' :
						return 1;
					case 'Workflow' :
						return 2;
					case 'Backend' :
						return 3;
				}
			},
			length(type) {
				return this.skills.filter(x => x.type === type).length;
			}
		}
	}
</script>
<style lang="scss" src="../styles/skillsList.scss" scoped></style>