'use strict';
//*----------------------------------
//*------js-form-login-data-validation-----
//*----------------------------------
import axios from 'axios';
import Vue from 'vue';
const validateFormLogin = new Vue ({
  el: '#autorization',
  data: {
    login: { value: '',
      error: '',
    },
    password: { value: '',
      error: '',
    },
    checkbox: { value: false,
      error: '',
    },
    radio: { value: 'none',
      error: '',
    },
    attemptSubmit: false,
    mes: '',
  },
  computed: {
    wrongLogin() {
      this.login.error = '';
      if(!this.isLogin(this.login.value))
        this.login.error='Логин более 5 символов';
      if(this.login.value==='')
        this.login.error='Вы не ввели логин';
      return this.isLogin(this.login.value)===false||this.login.value==='';
    },
    wrongPassword() {
      this.password.error = '';
      if(!this.isPassword(this.password.value))
        this.password.error='Пароль более 8 символов';
      if(this.password.value==='')
        this.password.error='Вы не ввели пароль';
      return this.isPassword(this.password.value)===false||this.password.value==='';
    },
    wrongCheckbox() {
      return this.checkbox.value===false;
    },
    wrongRadio() {
      return this.radio.value!=='yes';
    },
  },
  methods: {
    isLogin(value) {
      if (value.length > 0 && value.length < 6)
        return false;
      return new RegExp(/^[a-zA-Z\sа-яА-ЯёЁ\s0-9]+$/g).test(value);
    },
    isPassword(value) {
      if (value.length > 0 && value.length < 8)
        return false;
      return new RegExp(/^[a-zA-Z\sа-яА-ЯёЁ\s0-9]+$/g).test(value);
    },
    validateForm(e) {
      this.attemptSubmit = true;
      if(this.wrongLogin||this.wrongPassword||this.wrongCheckbox||this.wrongRadio) {
        e.preventDefault();
      }
      else {
        e.preventDefault();
        axios({ method: 'post',
          url: '/login',
          data: {
            login: this.login.value,
            password: this.password.value,
          },
        }).then((rs) => {
          if (rs) {
            this.attemptSubmit = false;
            this.login.value = '';
            this.password.value = '';
            this.login.error = '';
            this.password.error = '';
            this.mes = rs.data.mes;
          }
        });
      }
    },
  },
});
export default validateFormLogin;