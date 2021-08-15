<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>

        <div class="form-group">
            <input 
                type="search"
                class="form-control"
                placeholder="Buscar contatos"
                @keyup.enter="buscar"
                :value="$route.query.busca"
            />
        </div>

        <hr>

        <ul class="list-group" v-if="contatosFiltrados.length > 0">
            <ContatoListaItem 
                class="list-group-item"
                v-for="contato in contatosFiltrados"
                :key="contato.id"
                :contato="contato"
            />
        </ul>

        <p v-else>Nenhum contato cadastrado.</p>


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

    computed: {
        contatosFiltrados() {
            const busca = this.$route.query.busca
            return !busca
                ? this.contatos
                : this.contatos.filter(contato => contato.nome.toLowerCase().includes(busca.toLowerCase()))
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
        },

        buscar(event) {
            this.$router.push({
                path: '/contatos',
                query: {
                    busca: event.target.value
                }
            })
        }

    }
}
</script>

<style>

</style>