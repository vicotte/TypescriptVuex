import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex';
import { State, state } from './state';
import { Mutations, mutations } from './mutations';
import { Actions, actions } from './actions';

export const moduleB = {
  state,
  mutations,
  actions,
};

type ModuleState = {
  moduleB: State;
};

export type Store = Omit<
  VuexStore<ModuleState>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>;
};
