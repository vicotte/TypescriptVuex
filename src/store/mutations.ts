import { MutationTree, Mutation } from 'vuex';
import { MutationTypes } from './mutation-types';
import { State } from './state';

export type Mutations<S = State> = {
  [MutationTypes.TOGGLE_STATUS](state: S, payload: null): void;
  [MutationTypes.SET_STATUS](state: S, payload: { status: boolean }): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.TOGGLE_STATUS](state) {
    state.status = !state.status;
    return state;
  },

  [MutationTypes.SET_STATUS](state: State, payload) {
    state.status = payload.status;
  },
};
