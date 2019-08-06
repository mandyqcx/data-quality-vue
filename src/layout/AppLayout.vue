<template>
  <v-app>
    <app-bar />
    <app-drawer />
    <v-content style="overflow-x: auto; overflow-y: hidden">
      <v-container
        fluid
        class="pa-0"
      >
        <router-view />
      </v-container>
      <app-loading-overlay />
    </v-content>
    <app-snackbar />
  </v-app>
</template>

<script>

import AppBar from '@/layout/AppBar.vue';
import AppDrawer from '@/layout/AppDrawer.vue';
import AppSnackbar from '@/layout/AppSnackbar.vue';
import AppLoadingOverlay from '@/layout/AppLoadingOverlay.vue';

export default {
  name: 'AppLayout',
  components: {
    AppLoadingOverlay,
    AppSnackbar,
    AppDrawer,
    AppBar,
  },

};
</script>
