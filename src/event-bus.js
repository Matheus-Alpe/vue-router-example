import Vue from 'vue'

export default new Vue({
    data: {
        autenticado: false,
        contatos: [
            { id: 1, nome: 'Matheus Alves', email: 'matttalves@gmail.com' },
            { id: 2, nome: 'Rosana Fernandes', email: 'rosana@gmail.com' },
            { id: 3, nome: 'Thiago Laurenir', email: 'thiago@gmail.com' },
        ]
    },

    methods: {
        buscarContato(id) {
            return Object.assign({}, this.contatos.find((contato) => contato.id === id))
        },

        editarContato(contato) {
            const indice = this.contatos.findIndex((c) => c.id === contato.id)
            this.contatos.splice(indice, 1, contato)
        }
    },

    created() {
        this.$on('autenticar', (autenticado) => {
            this.autenticado = autenticado
        })
    }
})