<template>

    <div style="padding-bottom: 10px;">

        <p>{{param.text}}</p>
        <div class="btn" >
            <a @click="close">取消</a> <a v-if="!param.text" style="margin-left:5px;" @click="open">弹出</a>
        </div>

    </div>

</template>

<script>
  import percentage from './percentage';
    export default {
        props: {
            param: Object
        },
        data() {
            return {

            }
        },
      methods:{
          close:function () {
              this.$closeDialog(this)
          },
          open:function () {
            this.$openDialog({
                title:'我是第二层弹窗',
                content:percentage
            })
          }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a{
        width:120px;
        height:40px;
        line-height: 40px;
        border:1px solid skyblue;
        text-align: center;
        cursor: pointer;
        display: inline-block;
    }
    .btn{
        text-align: center;
    }
</style>
