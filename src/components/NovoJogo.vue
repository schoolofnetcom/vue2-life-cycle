<template>
    <div>
        <!--<img src="../assets/america_mg_60x60.png" alt="">-->
        <button class="btn btn-primary" @click="criarNovoJogo" ref="button" :disabled="loading">Novo jogo</button>
        <button @click="$refs.modal.$destroy()">Destruir modal</button>
        <placar-modal-mat :time-casa="timeCasa" :time-fora="timeFora" ref="modal"></placar-modal-mat>
    </div>
</template>

<script>
    import getTimes from '../get-times';
    export default {
        created() {
            //vue-resource, axios, jquery
            //setTimeout
            //AJAX
            getTimes
                .then(times => {
                    this.times = times;
                })
                .finally(() => this.loading = false);
            console.log(this.times); //[]
        },
        data() {
            return {
                loading: true,
                timeCasa: null,
                timeFora: null,
                //times: this.timesColecao
                times: []
            }
        },
        //props: ['times'],
        inject: ['timesColecao'],
        methods: {
            criarNovoJogo() {
                console.log(this.$refs);
                var indiceCasa = Math.floor(Math.random() * 20),
                    indiceFora = Math.floor(Math.random() * 20);

                // var timeCasa = this.$root.times[indiceCasa];
                // var timeFora = this.$root.times[indiceFora];
                //var timeCasa = this.timesColecao[indiceCasa];
                //var timeFora = this.timesColecao[indiceFora];
                this.timeCasa = this.times[indiceCasa];
                this.timeFora = this.times[indiceFora];
                var modal = this.$refs.modal;
                //var modal = this.$refs.modal.$refs.componente.$refs;
                console.log(modal);
                modal.showModal();
                //this.$emit('novo-jogo',{timeCasa, timeFora});
            },
        }
    }
</script>