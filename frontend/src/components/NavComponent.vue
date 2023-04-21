<template>
    <nav>
        <template v-if="!authStore.user">
            <li>
                <router-link
                    :to="{ name: 'login' }"
                >Login</router-link
                >
            </li>
            <li>
                <router-link
                    :to="{ name: 'registration' }"
                >Register</router-link
                >
            </li>
        </template>
        <template v-else>
            <button>
<!--                @click="authStore.handleLogout"-->
                Logout
            </button>
        </template>
    </nav>
</template>

<script>
export default {
    name: "NavComponent"
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
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
