<template>
    <div class="login">
        <meta name="csrf-token" :content="csrfToken">
        <b-form @submit.prevent="handleLogin()" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                <b-form-input
                    type="password"
                    id="input-2"
                    v-model="form.password"
                    placeholder="Enter name"
                    required
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
import 'vuex'
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
            show: true
        }
    },
    methods: {
        handleLogin(){
            this.$store.state.AuthStore.handleLogin(form);
        }
        // async handleLogin() {
        //     await axios.post('/login', {
        //         email: this.form.email,
        //         password: this.form.password,
        //
        //     });
        // },
    },
    created(){
        console.log(this.$store.state.authErrors)
    },
    async mounted() {
        const response = await axios.get('/csrf-token');
        this.csrfToken = response.data.token;
    }
}
</script>
<style>
.login{
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 20%;
    margin-right: 20%;
}
.login .form-group {
    margin-bottom: 10px; /* или любой другой размер отступа */
}
</style>

