<template>
    <h3 class="font-weight-light">Detalhes sobre o contato com id: {{ $route.params.id }}</h3>
</template>

<script>
export default {
    created() {
        console.log('Router params:', this.$route.params)
    }
}
</script>

<style>

</style>