export default {
  SET_STATE(state, payload) {
    state[payload.stateName] = payload.value;
  },
};
