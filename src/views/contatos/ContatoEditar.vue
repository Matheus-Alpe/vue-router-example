<template>
    <div>
        <h3 class="font-weight-light">Editar contato com id: {{ id }}</h3>
        <button
            class="btn btn-secondary mt-4 mb-4"
            @click="$router.back()"
        >
            Voltar
        </button>
    </div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         data: 'VueJS'
    //     }
    // },
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter - Navigation Guard | Component |', 'to:', to.path, '-> from:', from.path)
        next()
        // console.log('Data:', this.data)
        // if (to.query.autenticado === 'true') {
        //     return next((vm) => {
        //         console.log('Data:', vm.data)
        //     })
        // }
        // next('/contatos')
    }
}
</script>

<style>

</style>