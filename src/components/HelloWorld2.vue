<template>
  <div class="hello">
    <div>
      <h1>Module 1</h1>
      <p>status : {{ status }}</p>
      <button @click="clickButton1">click me 1</button>
    </div>
    <div>
      <h1>Module 2</h1>
      <p>status : {{ status2 }}</p>
      <button @click="toggleStatus2">click me</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ActionTypes } from '../store/action-types';
import { MutationTypes } from '../store/mutation-types';
// import { useStore } from '../store'

import useStatus from '../testStore/store';

export default defineComponent({
  name: 'HelloWorld2',
  props: {
    msg: String,
  },
  computed: {
    status(): string {
      return this.$store.state.moduleB.status ? 'on' : 'off';
    },
  },

  methods: {
    clickButton1: function(): void {
      this.$store.dispatch(ActionTypes.ModuleA.TOGGLE_STATUS, null);
      console.log(this.$store.state.moduleB.status);
    },
  },
  setup() {
    const { toggleStatus: toggleStatus2, status: status2 } = useStatus();

    return { toggleStatus2, status2 };
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
