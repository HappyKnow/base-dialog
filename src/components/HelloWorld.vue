<template>

    <div>
        <div>
            <p>默认弹框</p>
            <a @click="percentage">点击弹出</a>
        </div>
        <div>
            <p>传递参数</p>
            <div>
                <input v-model="text" placeholder="请输入参数"/>
                <a @click="myDialog" style="margin-left:5px;">点击弹出</a>
            </div>

        </div>
        <div>
            <p>多层弹窗</p>
            <div>
                <a @click="myDialog(true)">点击弹出</a>
            </div>

        </div>

    </div>

</template>

<script>
    import myComponent from './myComponent';
    import percentage from './percentage';
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                text:''
            }
        },
      methods:{
        percentage:function () {
          this.$openDialog({
            title:'HelloWorld',
            content:percentage
          })
        },
        myDialog:function (flag) {
          if(flag===true) this.text='';
          this.$openDialog({
            title:'HelloWorld',
            content:myComponent,
            showClose:false,
            param:{
              text:this.text
            }
          })
        }
      },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a{
        cursor: pointer;
        display: inline-block;
        color:blue;
    }
    a:hover{
        text-decoration: underline;
    }
</style>
