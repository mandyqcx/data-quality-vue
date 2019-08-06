<template>
  <div class="control-house">
    <!--<control-house-management-duration class="management-duration-component" />-->
    <!-- <control-house-management-contrast class="management-contrast-component" />-->
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
// eslint-disable-next-line max-len
// import ControlHouseManagementDuration from '@/pages/control-house/ControlHouseManagementDuration.vue';
// eslint-disable-next-line max-len
// import ControlHouseManagementContrast from '@/pages/control-house/ControlHouseManagementContrast.vue';

export default {
  name: 'ControlHouse',
  components: {
    // ControlHouseManagementContrast,
    // ControlHouseManagementDuration,
  },
/*  computed: {
    bar: sync('app/bar'),
  },
  created() {
    this.bar = false;
  },
  beforeDestroy() {
    this.bar = true;
  }, */
};
</script>

<style scoped>
  .map-component {
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;
  }
  .toolbar-component {
    width: 550px;
    position: relative;
    z-index: 1;
  }
  .site-warning-component {
    width: 550px;
    height: 190px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 1;
  }
  .site-data-component {
    width: 480px;
    height: 190px;
    position: absolute;
    left: 570px;
    bottom: 10px;
    z-index: 1;
  }
  .site-load-component {
    width: 400px;
    height: 190px;
    position: absolute;
    left: 1060px;
    bottom: 10px;
  }
  .management-duration-component {
    width: 425px;
    height: 190px;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .management-contrast-component {
    width: 425px;
    height: 300px;
    position: absolute;
    right: 10px;
    top: 55px;
  }
</style>
