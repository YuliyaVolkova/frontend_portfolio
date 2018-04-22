'use strict';
import axios from 'axios';
//*----------------------------------
//*------js-form-feed-data-validation-----
//*----------------------------------
import Vue from 'vue';
const validateFormFeed = new Vue ({
  el: '.c-feeds-form',
  data: {
    name: { value: '',
      error: '',
    },
    email: { value: '',
      error: '',
    },
    textmes: { value: '',
      error: '',
    },
    attemptSubmit: false,
    mes: '',
  },
  computed: {
    wrongName() {
      this.name.error = '';
      if(!this.isName(this.name.value))
        this.name.error='В имени 2 буквы минимум';
      if(this.name.value==='')
        this.name.error='Укажите имя';
      return this.isName(this.name.value)===false||this.name.value==='';
    },
    wrongMail() {
      this.email.error = '';
      if(!this.isMail(this.email.value))
        this.email.error='Невалидный email';
      if(this.email.value==='')
        this.email.error='Укажите email';
      return this.isMail(this.email.value)===false||this.email.value==='';
    },
    missingMessage() {
      this.textmes.error = '';
      if(this.textmes.value==='')
        this.textmes.error='Оставьте сообщение';
      return  this.textmes.value==='';
    },
  },
  methods: {
    isName(value) {
      if (value.length > 0 && value.length < 2)
        return false;
      return new RegExp(/^[a-zA-Z\sа-яА-ЯёЁ]+$/g).test(value);
    },
    isMail(value) {
      return new RegExp(/^(("[\w-\s]+")|([\w]+(?:\.[\w]+)*)|("[\w-\s]+")([\w]+(?:\.[\w]+)*))(@((?:[\w]+\.)*\w[\w]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(value);
    },
    validateForm(e) {
      this.attemptSubmit = true;
      if(this.wrongName||this.wrongMail||this.missingMessage) {
        e.preventDefault();
      }
      else {
        e.preventDefault();
        axios({ method: 'post',
          url: '/mail',
          data: {
            name: this.name.value,
            email: this.email.value,
            text: this.textmes.value,
          },
        }).then((rs) => {
          if (rs) {
            this.attemptSubmit = false;
            this.name.value = '';
            this.email.value = '';
            this.textmes.value = '';
            this.name.error = '';
            this.email.error = '';
            this.textmes.error = '';
            this.mes = rs.data.mes;
          }
        });
      }
    },
  },
});
export default validateFormFeed;