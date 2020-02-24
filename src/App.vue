<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      dark
    >
      <v-toolbar-title>Vue3-Todo-App</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>

    <v-footer
      app
      color="purple"
    >
      <v-spacer></v-spacer>

      <span class="white--text">&copy; Leecason 2020</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
});
</script>
