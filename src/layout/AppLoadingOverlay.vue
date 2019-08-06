<template>
  <v-overlay
    absolute
    :value="loadingOverlay"
  >
    <v-progress-circular
      indeterminate
      size="64"
    />
  </v-overlay>
</template>
<script>
import { get } from 'vuex-pathify';

export default {
  name: 'AppLoadingOverlay',

  computed: {
    loadingOverlay: get('app/loadingOverlay'),
  },
};
</script>
