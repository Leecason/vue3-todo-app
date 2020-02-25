// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import shortid from 'shortid';

export default [
  {
    id: shortid.generate(),
    text: 'Learning how to use Vue 3 Composition API',
    done: false,
    color: 'orange',
  },
  {
    id: shortid.generate(),
    text: 'Using TypeScript with Vue Single File Components',
    done: false,
    color: 'pink',
  },
  {
    id: shortid.generate(),
    text: 'Learning the way to integrate Vue3 to 2',
    done: true,
    color: 'indigo',
  },
  {
    id: shortid.generate(),
    text: 'Buy me a coffee',
    done: false,
    color: 'blue',
  },
];
