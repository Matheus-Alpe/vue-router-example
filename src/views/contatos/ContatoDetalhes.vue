<template>
    <div v-if="contato">
        <h3 class="font-weight-light">Nome: {{ contato.nome }}</h3>
        <p>Email: {{ contato.email }}</p>
        <button 
            class="btn btn-secondary mr-2" 
            @click="$router.back()"
        >
            Voltar
        </button>

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
import EventBus from './../../event-bus'

export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            contato: undefined
        }
    },

    // created() {
    //     this.contato = EventBus.buscarContato(this.id)
    // },

    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.contato = EventBus.buscarContato(Number(to.params.id))
        })
    },

    beforeRouteUpdate(to, from, next) {
        this.contato = EventBus.buscarContato(Number(to.params.id))
        next()
    },
}
</script>

<style>

</style>