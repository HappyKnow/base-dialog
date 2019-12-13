<template>
    <div style="padding-bottom: 10px;text-align: center">
        <p>the percentage</p>
        <circular-similarity :value="0.8"></circular-similarity>
    </div>
</template>

<script>
    import CircularSimilarity from 'circular-similarity'
    export default {
        props: {
            param: Object
        },
      components:{
        CircularSimilarity
      },
        data() {
            return {

            }
        },
      methods:{
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
