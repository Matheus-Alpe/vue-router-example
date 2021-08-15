<template>
    <div v-if="contato">
        <h3 class="font-weight-light">Nome: {{ contato.nome }}</h3>

        <form @submit.prevent="salvar">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input 
                    type="text"
                    id="nome"
                    class="form-control"    
                    placeholder="Insira o nome"
                    v-model="contato.nome"
                >
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    class="form-control"    
                    placeholder="Insira o email"
                    v-model="contato.email"
                >
            </div>

             <button
                class="btn btn-secondary mt-4 mb-4"
                @click="$router.back()"
            >
                Voltar
            </button>
            <button 
                class="btn btn-success"
                type="submit"    
            >
                Salvar
            </button>
        </form>
    </div>
</template>

<script>
import EventBus from './../../event-bus'

export default {
    props: ['id'],
    data() {
        return {
            contato: undefined
        }
    },

    methods: {
        salvar() {
            EventBus.editarContato(this.contato)
            this.$router.push(`/contatos/${this.contato.id}`)
        }
    },

    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.contato = EventBus.buscarContato(Number(to.params.id))
        })
    },

    // beforeRouteEnter(to, from, next) {
    //     console.log('beforeRouteEnter - Navigation Guard | Component |', 'to:', to.path, '-> from:', from.path)
    //     next()
    //     // console.log('Data:', this.data)
    //     // if (to.query.autenticado === 'true') {
    //     //     return next((vm) => {
    //     //         console.log('Data:', vm.data)
    //     //     })
    //     // }
    //     // next('/contatos')
    // },

    // beforeRouteLeave(to, from, next) {
    //     console.log('beforeRouteLeave - Navigation Guard | Component |', 'to:', to.path, '-> from:', from.path)
    //     const confirmar = window.confirm('Deseja realmente sair?')
    //     next(confirmar)
    // }
}
</script>

<style>

</style>