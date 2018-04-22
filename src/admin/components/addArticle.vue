<template lang="pug">
  .add-article-container
    h3.title Добавить запись
    form.table#blog(@submit.prevent="sendArticle")
      input.input(type="text", placeholder="Название", v-model="title")
      label.label-date
        span.date-title Дата
        input.input(type="date", v-model="date")
      textarea.textarea(type="text", placeholder="Содержание", v-model="text")
    button.save(type="submit", form="blog")
      span.save-text Добавить
    .overlay(v-if="msgblog&&open")
      .popup
        .popup-text {{msgblog}}
        button.save(type="button", @click="closeOverlay")
          span.save-text Закрыть
</template>
<script>
import moment from 'moment';
export default {
  data: () => {
    return {
      moment: moment,
      title: '',
      date: moment(new Date(), 'DD/MM/YYYY').format('YYYY-MM-DD'),
      text: '',
      msgblog: '',
      open: false,
    };
  },
  methods: {
    sendArticle() {
      console.log(this.title, this.date, this.text);
      this.axios({
        method: 'post',
        url: '/api/blog',
        data: {
          title: this.title,
          date: this.date,
          text: this.text
        }
      }).then(rs => {
        this.msgblog = rs.data.status;
        this.title = '';
        this.text = '';
        this.open = true;
      });
    },
    closeOverlay() {
      return this.open = false;
    }
  }
}
</script>
<style lang="scss" src="../styles/addArticle.scss" scoped></style>