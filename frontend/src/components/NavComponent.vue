<template>
    <b-navbar toggleable type="dark" variant="dark">

        <div >
            <div v-if="this.user.data.name">
                {{this.user.data.name}}
                <button @click="logOut()"> LogOut</button>
            </div>
            <div v-else>
                <b-navbar-brand href="/login">Login</b-navbar-brand> |
                <b-navbar-brand href="/registration">Sing up</b-navbar-brand>
            </div>

        </div>

    </b-navbar>
</template>

<script>

export default {
    name: "NavComponent",
    data() {
        return{
            user: '',
        }
    },
    methods: {
        logOut: function () {
            this.$store.dispatch('AuthStore/handleLogout');
        }
    },
     async beforeMount() {
         console.log('before')
         this.user = this.$store.dispatch('AuthStore/getUser');
         console.log(this.user)
         console.log('after')
     }

}
</script>

<style scoped>
nav {
    display: flex;
    flex-direction: row-reverse;
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: white;
}

nav a.router-link-exact-active {
    color: white;
}
</style>
