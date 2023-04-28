import Vue from 'vue'
import Vuex from 'vuex'
import AuthStore from "@/store/auth.js";



Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        AuthStore
    }
})

export default store

