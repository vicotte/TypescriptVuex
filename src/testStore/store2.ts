import { readonly, reactive } from 'vue';
import axios from 'axios';

interface State {
  status: boolean;
}

//////////////////////////////////
// STATE
/////////////////////////////////
const state: State = reactive({
  status: true,
});

//////////////////////////////////
// MUTATION
/////////////////////////////////

const mutations = {
  toggleStatus(): void {
    state.status = !state.status;
  },

  /**
   * set the state status
   */
  setStatus(payload: { status: boolean }): void {
    state.status = payload.status;
  },
};

//////////////////////////////////
// ACTION
/////////////////////////////////
const actions = {
  /**
   * Fonction qui recupere les exchange api
   */
  getData(): void {
    state.status = !state.status;
    console.log('ici ca marche');
    axios
      .get('https://api.exchangeratesapi.io/latest')
      .then((resp: any) => console.log(resp))
      .catch((err: any) => console.log(err));
  },
};

export const storeStatus = readonly({
  state,
  actions,
  mutations,
});
