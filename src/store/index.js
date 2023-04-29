import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        routes: []
    },
    // 同步执行
    mutations: {
        initRouters(state, data) {
            state.routes = data;
        }
    },
    // 异步执行
    actions: {}
})