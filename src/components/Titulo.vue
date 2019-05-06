<template>
    <div class="row"> <!--root element -->
        {{nome}}
        <h1 @click="clique">Campeonato Brasileiro - Série A - 2018 {{$parent.visao}}</h1>
    </div>
</template>

<script>
    export default {
        props: ['teste'],
        data(){
            return {
                nome: 'luiz carlos',
                variavel: null
            }
        },
        beforeCreate(){
            //criar coisa no this
            //verificar se o usuario está autenticado pra definir configuracoes
            //verificar informacoes no localstorage
            console.log(Object.assign({}, this),'beforeCreate');
        },
        created(){
            //this.variavel = new Date();
            console.log(Object.assign({}, this),'create');
        },
        beforeMount(){
            //this.$attrs['']
            // aqui já tem attrs
            console.log(Object.assign({}, this),'beforeMount');
        },
        mounted(){
            console.log(Object.assign({}, this),'mounted');
        },
        beforeUpdate(){
            console.log(Object.assign({}, this),'beforeUpdate');
        },
        updated(){
            console.log(Object.assign({}, this),'updated');
        },
        beforeDestroy(){
            console.log(Object.assign({}, this),'beforeDestroy');
        },
        destroyed(){
            console.log(Object.assign({}, this),'destroyed');
        },
        methods: {
            clique() {
                this.nome = 'luiz carlos diniz11111';
                console.log(this.$parent.$parent.param1);
            }
        }
    }
</script>