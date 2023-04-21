<template>
    <div>
<!--        <meta name="csrf-token" :content="csrfToken">-->
        <form @submit.prevent="handleRegistration">
            <input type='text' name="name" v-model="form.name">
            <input type='email' name="email" v-model="form.email">
            <input type='password' name="password" v-model="form.password">
            <button type="submit" >Submit</button>
<!--            {{csrfToken}}-->
        </form>
    </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

const form = ref({
    name: "",
    email: "",
    password: "",
})
export default {
    name: "RegistrationForm",
    data() {
        return {
            form,
            // csrfToken: '',
        }
    },
    methods: {
        async handleRegistration() {
            await axios.post('/login', {
                name: this.form.name,
                email: this.form.email,
                password: this.form.password,
                // _token: this.csrfToken,
            });
        },
    },
    // async mounted() {
    //     const response = await axios.get('/csrf-token');
    //     this.csrfToken = response.data.token;
    // }
}
</script>
