<template lang="pug">
	mixin icon(iconName, iconClass, url)
		svg(class=`${iconClass}`)
			use(xlink:href=`${url}#${iconName}`)
				title=iconName
	.add-work-container
		h3.title Добавить работу
		form.table#work(@submit.prevent="sendFile" enctype="multipart/form-data")
			.input-row
				input.input.name(type="text", placeholder="Название проекта", v-model="title.value", @change="title.error=''")
				.validator-error(v-if="title.error")
					| {{title.error}}
			.input-row
				input.input.technologies(type="text", placeholder="Технологии", v-model="technologies.value", @change="technologies.error=''")
				.validator-error(v-if="technologies.error")
					| {{technologies.error}}
			label.input-file
				input.visually-hidden(type="file", :photo="photo" accept="image/*", @change="fileChange($event.target.files)", ref="upload")
				+icon('file_upload', 'svg_load_file', './assets/images/sprites/sprite_admin.svg')
				span.input-img-title Загрузить картинку
				.validator-error.validator-error-file(v-if="errmes")
					| {{errmes}}
		button.save(type="submit", form="work")
			span.save-text Добавить
		.overlay(v-if="msgfile&&open")
			.popup
				.popup-text {{msgfile}}
				button.save(type="button", @click="closeOverlay")
					span.save-text Закрыть
</template>
<script>
export default {
	data: () => {
		return {
			title: { value: '',
      				error: '',
    				},
    		technologies: { value: '',
      				error: '',
    				},
    		photo: null,
      		errmes: '',
			msgfile: '',
			open: false,
		}
	},
	computed: {
    	missingTitle() {
      		this.title.error = '';
      		if(this.title.value==='')
        		this.title.error='Укажите название работы';
      		return this.title.value==='';
    	},
    	missingTechnologies() {
      		this.technologies.error = '';
      		if(this.technologies.value==='')
        		this.technologies.error='Укажите технологии';
      		return this.technologies.value==='';
    	},
    	missingFile() {
      		this.errmes = '';
      		if(!this.photo)
        		this.errmes='Выберите файл';
      		return  this.photo===null;
    	},
  	},
	methods: {
		sendFile: function(e) {
			if(this.missingTitle || this.missingTechnologies || this.missingFile) 
				e.preventDefault();
			else {
        		e.preventDefault();
				let formData = new FormData();
				formData.append('photo', this.photo, this.photo.name);
				formData.append('title', this.title.value);
				formData.append('technologies', this.technologies.value);
				this.axios.post('/admin/slider', formData)
				.then(rs => { 
					this.msgfile = rs.data.msg;
					this.open = true;
					if (rs.data.status === 'Ok') {
						this.title.value = '';
						this.technologies.value = '';
						this.photo = null;
						this.$refs.upload.value = null;
					}
				});
			}
		},
		fileChange: function(file) {
			this.photo = file[0];
			this.errmes='';
		},
		closeOverlay() {
			return this.open = false;
		}
	}
}	
</script>
<style lang="scss" src='../styles/addWork.scss' scoped></style>