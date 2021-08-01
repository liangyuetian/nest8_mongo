<template>
  <div>
    <div>
      <span>用户名:</span>
      <input type="text" v-model="username">
    </div>
    <div>
      <span>密码:</span>
      <input type="text" v-model="password">
    </div>
    <button @click="login">登录</button>
    <button @click="create">注册</button>
    <button @click="verify">校验</button>
    <div>{{resData.data}}</div>
    <div>{{resData.headers}}</div>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import { authLogin, authCreate, authVerify } from "./api";
const username = ref('wangchuang')
const password = ref('123456')
const resData = ref({})
function login() {
  authLogin({
    username: username.value,
    password: password.value
  }).then(res => {
    resData.value = { data: res.data, headers: res.headers }
    console.log(res.data);
  })
}
function create() {
  authCreate({
    username: username.value,
    password: password.value
  }).then(res => {
    resData.value = { data: res.data, headers: res.headers }
    console.log(res.data);
  })
}
function verify() {
  authVerify({
    username: username.value,
    password: password.value
  }).then(res => {
    resData.value = { data: res.data, headers: res.headers }
    console.log(res.data);
  })
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
