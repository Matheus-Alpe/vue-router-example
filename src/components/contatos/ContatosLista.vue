<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>

        <ul class="list-group" v-if="contatos.length > 0">
            <ContatoListaItem 
                class="list-group-item"
                v-for="contato in contatos"
                :key="contato.id"
                :contato="contato"
            />
        </ul>

        <p v-esel>Nenhum contato cadastrado.</p>


        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>

<script>
import ContatoListaItem from './ContatosListaItem.vue'

export default {
    components: {
        ContatoListaItem
    },

    data() {
        return {
            contatos: [
                { id: 1, nome: 'Matheus Alves', email: 'matttalves@gmail.com' },
                { id: 2, nome: 'Rosana Fernandes', email: 'rosana@gmail.com' },
                { id: 3, nome: 'Thiago Laurenir', email: 'thiago@gmail.com' },
            ]
        }
    },

     methods: {

        voltar() {
            // this.$router.push('/') //redireciona para a página especificada e inclui no histórico de navegação
            // this.$router.push({ 
            //     path: '/'
            // })


            // this.$router.replace('/') //replace troca a nevagação atual, não matendo o histórico
            // this.$router.replace({ 
            //     path: '/'
            // })

            // this.$router.go(-1) //indica quantas páginas seguir, exemplo: +1, -1
            // this.$router.forward()
            this.$router.back()
        }

    }
}
</script>

<style>

</style>