/**
 * Created by aidan on 2018. 6. 18..
 */
<template>
  <v-container grid-list-xl>
  <v-flex>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>로그인</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="person" name="id" label="id" v-model="username" type="text"></v-text-field>
        <v-text-field id="password" prepend-icon="lock" name="password" label="Password" v-model="password" type="password"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" v-on:click="loginRequest">Login</v-btn>
    </v-card-actions>
  </v-card>
  </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  props: {
  },
  data () {
    return {
        username: '',
        password: ''
    }
  },
  methods: {
      loginRequest () {
          this.$store.dispatch('login', {
              "username": this.username,
              "password": this.password
          }).then(() => {
              this.$router.push('/')
          }).catch(() => alert('로그인 실패, aidan.qs에게 문의바람'))
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
