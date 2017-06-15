import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	activeName: "1" //左侧导航栏状态
}

export default new Vuex.Store({
	state
})