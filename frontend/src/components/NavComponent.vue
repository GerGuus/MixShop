<template>
    <b-navbar toggleable type="dark" variant="dark">

        <div >
            <b-navbar-brand href="/login">Login</b-navbar-brand>
            <b-navbar-brand href="/registration">Sing up</b-navbar-brand>
        </div>

    </b-navbar>
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
