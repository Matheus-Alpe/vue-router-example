<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>
        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>

<script>
export default {

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