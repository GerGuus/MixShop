import axios from "axios";
import router from "@/router";

const state = () => ({
        authUser: null,
        authErrors: [],
        authStatus: null,
    })
const getters = {
        getAuthUser: (state) => () => {
            return state.authUser;
        },
        getAuthErrors: (state) => () =>{
            return state.authErrors;
        },
        getAuthStatus: (state) => () =>{
            return state.authStatus;
        },
    }
const actions = {
        async getToken() {
            await axios.get("/csrf-token");
        },

        async getUser() {
            try{
                return await axios.get("/api/user");
            }catch (error){
                if (error.response.status === 401) {
                    return null;
                }
                else{
                    console.log(error)
                }
            }
        },

        async handleLogin({ commit },  form ) {
            this.authErrors = [];
            // await actions.getToken();

            try {
                await axios.post("/login", {
                    email: form.email,
                    password: form.password
                });
                router.push('/');
            } catch (error) {
                console.log(error);
                commit('setAuthErrors', error.response.data.errors)
            }

        },

        async handleRegister(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                await axios.post("/register", {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                });
                window.location.href = 'http://localhost:8081/';
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },

        async handleLogout() {
            await axios.post("/logout");
            router.push('/');
        },
    }
    const mutations = {
        setAuthErrors (state, { error }) {
            console.log(error)
            state.authErrors = 'error'
        },
    }

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
