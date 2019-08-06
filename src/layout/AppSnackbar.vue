<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="1800"
    top
  >
    <v-icon :color="snackbarColor">
      {{ snackbarIcon }}
    </v-icon>
    {{ snackbarText }}
    <v-btn
      dark
      text
      icon
      @click="snackbar = false"
    >
      <v-icon>
        mdi-close
      </v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { sync, get } from 'vuex-pathify';

export default {
  name: 'AppSnackbar',
  computed: {
    snackbar: sync('app/snackbar'),
    snackbarText: get('app/snackbarText'),
    snackbarIcon: get('app/snackbarIcon'),
    snackbarColor: get('app/snackbarColor'),
  },
};
</script>

<style scoped>
</style>
