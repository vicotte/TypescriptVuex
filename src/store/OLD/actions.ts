import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import { ActionTree, ActionContext } from 'vuex';
import { State } from './state';
import { Mutations } from './mutations';
import axios from 'axios';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.TOGGLE_STATUS](
    { commit }: AugmentedActionContext,
    payload: null,
  ): void;
  [ActionTypes.SET_STATUS](
    { commit }: AugmentedActionContext,
    payload: { status: boolean },
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.TOGGLE_STATUS]({ commit }) {
    console.log('before');
    axios
      .get('https://api.exchangeratesapi.io/latest')
      .then((resp: any) => console.log(resp))
      .catch((err: any) => console.log(err));
    console.log('zigzog');
    commit(MutationTypes.TOGGLE_STATUS, null);
  },

  [ActionTypes.SET_STATUS]({ commit }, payload) {
    commit(MutationTypes.SET_STATUS, { status: payload.status });
  },
};
