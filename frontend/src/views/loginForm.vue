<template>
    <div>
        <meta name="csrf-token" :content="csrfToken">
        <form @submit.prevent="handleLogin">
            <input type='email' name="email" v-model="form.email">
            <input type='password' name="password" v-model="form.password">
            <button type="submit" >Submit</button>
            {{csrfToken}}
        </form>
    </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

const form = ref({
    email: "",
    password: "",
})
export default {
    name: "LoginForm",
    data() {
        return {
            form,
            csrfToken: '',
        }
    },
    methods: {
        async handleLogin() {
            await axios.post('/login', {
                email: this.form.email,
                password: this.form.password,
                _token: this.csrfToken,
            });
        },
    },
    async mounted() {
        const response = await axios.get('/csrf-token');
        this.csrfToken = response.data.token;
    }
}
</script>

