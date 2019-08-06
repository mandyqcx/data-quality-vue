<template>
  <v-navigation-drawer
    v-model="appDrawer"
    app
    :temporary="!bar"
  >
    <v-list
      dense
      nav
      light
      exact
      class="py-0"
    >
      <v-list-item two-line>
        <v-list-item-avatar>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ $store.get('user/user').nickname }}</v-list-item-title>
          <v-list-item-subtitle>{{ $store.get('user/user').username }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn
            text
            icon
            @click="logout"
          >
            <v-icon v-text="'mdi-close'" />
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider />
      <template v-for="(section, index) in appDrawerItems">
        <v-subheader
          v-if="section.subheader"
          :key="'s' + index"
        >
          {{ section.subheader }}
        </v-subheader>
        <template v-for="(item, itemIndex) in section.items">
          <template v-if="item.subItems">
            <v-list-group
              :key="'i'+itemIndex"
              color=""
              :prepend-icon="item.icon"
            >
              <template slot="activator">
                <v-list-item>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </template>
              <v-list-item
                v-for="(subItem, subItemIndex) in item.subItems"
                :key="'si'+subItemIndex"
                :to="subItem.route"
                color="primaryLight"
              >
                <v-list-item-icon v-if="subItem.icon">
                  <v-icon v-text="subItem.icon" />
                </v-list-item-icon>
                <v-list-item-title v-text="subItem.title" />
              </v-list-item>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item
              :key="'ib'+itemIndex"
              color="primaryLight"
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { sync, get } from 'vuex-pathify';
import appDrawerItems from '@/config/drawer-config';

export default {
  name: 'AppDrawer',
  data() {
    return {

    };
  },
  computed: {
    appDrawerItems() {
      return appDrawerItems;
    },
    appDrawer: sync('app/drawer'),
    bar: get('app/bar'),
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style scoped>

</style>
