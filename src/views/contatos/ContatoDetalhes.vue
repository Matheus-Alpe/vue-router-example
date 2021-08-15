<template>
    <div>
        <h3 class="font-weight-light">Detalhes sobre o contato com id: {{ id }}</h3>
        <div style="height: 900px;"></div>
        <router-link
            id="parametros"
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary"
        >
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },

    beforeRouteUpdate(to, from, next) {
        console.log('beforeRouteUpdate - Navigation Guard | Component |', 'to:', to.path, '-> from:', from.path)
        next()
    },
}
</script>

<style>

</style>