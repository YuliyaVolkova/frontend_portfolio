<template lang="pug">
	label.skill
		.name {{skill.name}}
		.percents-value
			input.input(
			type="text",
			v-model="percent",
			@change="editCurSkill(skill)"
			)
		.percent-type %
		.delete
			button.button-delete(type="button" @click="removeCurSkill(skill._id)")
				| X
		.overlay(v-if="msg&&open")
			.popup
				.popup-text {{msg}}
				button.save(type="button", @click="closeOverlay")
					span.save-text Закрыть
</template>
<script>
	import axios from 'axios';
	import { mapMutations } from 'vuex';
	export default {
		props: {
			skill: Object,
		},
		data() {
			return {
				percent: this.skill.percents,
				msg: '',
				open: false,
			}
		},
		methods: {
			...mapMutations(['removeSkill', 'editSkill']),
			removeCurSkill(skillId) {
			axios.delete(`/api/skill/${skillId}`).then(rs => {
					this.msg = rs.data.status;
					this.removeSkill(skillId);
					this.open = true;
        			return this.msg;
				});		 		 
			},
			editCurSkill(skill) {
				axios({ method: 'put',
        			url: `/api/skill/${skill._id}`,
        			data: {
          			name: skill.name,
          			percents: this.percent,
          			type: skill.type,
        		},
      			}).then(rs => {
        			this.msg = rs.data.status;
        			this.msg;
        			this.open = true;
        			this.editSkill();
      			});
			},
			closeOverlay() {
				return this.open = false;
			}
		}
	}
</script>
<style lang="scss" src="../styles/skillItem.scss" scoped></style>