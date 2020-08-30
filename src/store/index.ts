import { createStore } from 'vuex';

// The modules to import
import { moduleA, Store as ModuleAStore } from './ModuleA';
import { moduleB, Store as ModuleBStore } from './ModuleB';
import { State as ModuleAState } from './ModuleA/state';
import { State as ModuleBState } from './ModuleB/state';
// import counter, { Store as CounterStore, State as CounterState } from './counter';

// A State type with all the submodules
type State = {
  moduleA: ModuleAState;
  moduleB: ModuleBState;
  // counter: CounterState;
};

// And the store is an extension of all the stores but each store receives its own state
export type Store = ModuleAStore & ModuleBStore;

// export type Store = ModuleAStore & ModuleBStore;

export const store = createStore({
  modules: {
    moduleA,
    moduleB,
    // counter,
  },
});

export function useStore() {
  // This made the trick to me, i dont love it, but i dont know other way to do it.
  // The compiler kept complaining about it not being compatible with Vuex' store so i casted it to uknnown
  // and after that re-casted as the Store we just defined.
  return (store as unknown) as Store;
}

// export default store;
