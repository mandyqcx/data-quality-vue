<template>
  <v-app-bar
    v-model="bar"
    app
    hide-on-leave="false"
  >
<!--    侧边栏-->
    <v-btn
      icon
      @click="showSnackBar"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
<!--    返回键-->
    <v-btn
      icon
      @click="goBack"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
<!--    标题-->
    <v-toolbar-title
      style="cursor: pointer"
      @click="goIndex"
    >
      {{ appTitle }}
    </v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
import { get, sync } from 'vuex-pathify';

export default {
  name: 'AppBar',
  computed: {
    appTitle: get('app/appTitle'),
    drawer: sync('app/drawer'),
    bar: sync('app/bar'),
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goIndex() {
      this.$router.push('/');
    },
    showSnackBar() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>

</style>
