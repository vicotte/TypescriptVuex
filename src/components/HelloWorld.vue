<template>
  <div class="hello">
    <div>
      <h1>Module 1</h1>
      <p>status : {{ storeStatus.state.status }}</p>
      <button @click="clickButton1">click me 1</button>
    </div>
    <div>
      <h1>Module 2</h1>
      <p>status : {{ storeStatus.state.status }}</p>
      <button @click="storeStatus.toggleStatus">click me</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ActionTypes } from '../store/action-types';
import { MutationTypes } from '../store/mutation-types';
import { storeStatus } from '../testStore/store2';

// import { useStore } from '../store'

import useStatus from '../testStore/store';
import { AxiosPromise } from 'axios';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    status(): string {
      return this.$store.state.moduleB.status ? 'on' : 'off';
    },
  },

  methods: {
    clickButton1: async function(): Promise<void> {
      // this.storeStatus.setStatus({ value: true });
      console.log('premiere etape');
      storeStatus.actions.getData();
      console.log('deuxieme etape');
    },
  },
  setup() {
    return { storeStatus };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
