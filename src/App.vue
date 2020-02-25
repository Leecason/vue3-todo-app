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
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <todo-list></todo-list>
        </v-row>
      </v-container>
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
import TodoList from './components/TodoList.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TodoList,
  },
});
</script>
