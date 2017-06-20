import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

const state = {
	activeName: "1", //左侧导航栏状态
	admin: {}
}

export default new Vuex.Store({
    state,
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.admin = JSON.stringify(data);
            state.admin = data;
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('admin');
			state.activeName = "1";
            state.admin = {};
        }
    }
})