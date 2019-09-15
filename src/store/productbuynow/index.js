const state = {
    bool: false,
};

const actions = {

};

const mutations = {
    buynowhandler(state, props) {
        if (state.bool) {
            state.bool = false;
        } else if (!state.bool) {
            state.bool = true;
        }
        console.log(state.bool);
    }
};
const getters = {

};

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
}