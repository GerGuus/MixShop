<template>
    <div class="registration">
        <b-form @submit.prevent="handleRegistration" v-if="show">
            <b-form-group id="input-group-1" label="Name:" label-for="input-1">
                <b-form-input
                    id="input-1"
                    v-model="form.name"
                    type="email"
                    placeholder="Enter name"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Email:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.email"
                    placeholder="Enter email"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Your Password:" label-for="input-3">
                <b-form-input
                    type="password"
                    id="input-3"
                    v-model="form.password"
                    placeholder="Enter password"
                    required
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>

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
            show: true
        }
    },
    methods: {
        async handleRegistration() {
            await axios.post('/register', {
                name: this.form.name,
                email: this.form.email,
                password: this.form.password,
            });
        },
    },
}
</script>
<style>
.registration{
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 20%;
    margin-right: 20%;
}
.registration .form-group {
    margin-bottom: 10px; /* или любой другой размер отступа */
}
</style>
