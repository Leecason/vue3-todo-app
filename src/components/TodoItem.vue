<template>
  <v-card
    :color="todoItem.color"
    :class="{ 'lighten-3': done }"
    dark
    hover
  >
    <v-card-title
      :class="{ 'text--line-through': done }"
      class="headline"
    >
      {{ todoItem.text }}
    </v-card-title>

    <v-card-actions class="justify-space-between">
      <v-btn
        text
        @click="toggleTodo"
      >
        <span v-if="done">Cancel done</span>
        <span v-else>I have done this</span>
      </v-btn>

      <v-btn
        text
        class="btn-delete"
        @click="deleteTodo"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
} from '@vue/composition-api';

export default defineComponent({
  props: {
    todoItem: {
      type: Object,
      required: true,
    },
  },

  setup (props, { emit }) {
    const { todoItem } = props;

    const done = computed(() => todoItem.done);

    return {
      done,
      toggleTodo: () => {
        todoItem.done = !done.value;
      },
      deleteTodo: () => {
        emit('delete', todoItem);
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.text--line-through {
  text-decoration: line-through;
}

.v-card {
  transition: all .3s ease-in-out;

  .btn-delete {
    opacity: 0;
    transition: all .3s ease-in-out;
  }

  &:hover {
    .btn-delete {
      opacity: 1;
    }
  }
}
</style>
