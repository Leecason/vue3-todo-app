import TODOS from './todos';

const STORAGE_KEY = 'vue3-todos';

export default {
  fetch: function () {
    const todos = localStorage.getItem(STORAGE_KEY);

    if (todos) {
      return JSON.parse(todos);
    } else {
      return TODOS;
    }
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};
