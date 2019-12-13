<template>
  <div class="dialog-bg" v-if="isShow" ref="dialogData">
    <div :class="'dialog-box '+(isShow?'bounce-enter-active':'bounce-leave-active')">
      <h2 class="dialog-title">{{ title }}<i class="iconfont iconchahao close" @click="onClose" v-if="showClose"></i></h2>
      <component :is='content' v-if="isShow" :param="param" :dialog_parent="dialog_parent"></component>
    </div>
  </div>
</template>

<script>
const baseDialog={
  name: 'BaseDialog',
    data() {
        return {
            isShow:false,
            title:'消息',
            showClose:false,
            content:null,
            param:'',
            dialog_parent:''
        }
    },
    created:function(){
        var _this = this;
        baseDialog.$eventBus.$on("closeDialog", function () {
            _this.onClose();
        });
        baseDialog.$eventBus.$on("openDialog", function (data) {
            _this.content=data.content;
            _this.title=data.title||'消息';
            _this.showClose=data.showClose!==false;
            _this.isShow=true;
            _this.param=data.param;
            _this.dialog_parent=data.dialog_parent;

        });
    },
    methods: {
        onClose() {
            this.isShow=false;
        }
    },
    mounted: function () {

    }
}
export default baseDialog;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
.dialog-bg{
  position:absolute;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  background-color:rgba(0,0,0,.3);
  justify-content:center;
  align-items:center;
  display:flex;
  z-index: 2000;
}
.dialog-box{
  background-color:#FFF;
  box-shadow:0px 0px .9vw .1vw #757575;
  padding:0 1vw;
  min-height:150px;
  min-width:300px;
}
.dialog-title{
  font-size:1.2rem;
  border-bottom:1px solid #ccc;
  line-height: 3rem;
  position:relative;
  font-weight:bold;

}
.close{
  position: absolute;
  right: 0;
  cursor:pointer;
  font-weight:bold;
  font-size:1rem;
}
.bounce-enter-active {
  /*animation: bounce-in .5s;*/
}
.bounce-leave-active {
  /*animation: bounce-in .5s reverse;*/
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
