<template lang="pug">
	.skill-input
		.message(v-if="mes") Укажите название скилла
		input.input(type="text",
		placeholder="Добавить",
		v-model="skillName", 
		@keydown.enter="addNewSkill", @keydown="closeMes")
		button.save(type="button", @click="addNewSkill")
			span.save-text Сохранить
</template>
<script>
import { mapMutations } from "vuex";
	export default {
		data() {
			return {
				skillName: "",
				mes: false
			}
		},
		props: { 
			type: Number 
		},
		methods: {
			...mapMutations(['addSkill']),
			addNewSkill() {
				if(this.skillName !=='') {
					this.mes = false;
					const newSkill = {
						//_id: Math.round(Math.random() * 1000000),
						name: this.skillName,
						percents: 0,
						type: this.type,
					}
				this.addSkill(newSkill);
				this.skillName = '';
				}
				else this.mes = true;
			},
			closeMes() {
				return this.mes = false;
			}
		}
	}
</script>
<style lang='scss' src="../styles/skillInput.scss" scoped></style>