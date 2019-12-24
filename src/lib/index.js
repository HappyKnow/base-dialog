import dialog from './BaseDialog.vue'
import './iconfont/iconfont.css'
dialog.install = function (Vue) {
    

    Vue.$openDialog = Vue.prototype.$openDialog = function (attribute,callback) {
      
      dialog.$eventBus =new Vue();
      let fragment = document.createElement('div');
      fragment.id='base_dialog';
      document.body.appendChild(fragment);
  
      let newDialog = new Vue({
        render:h => h(dialog)
      }).$mount('#base_dialog');
        if(!attribute)
            return;
        if(attribute.content.props.dialog_parent){
            attribute.dialog_parent=this;
        }
        newDialog.$eventBus = new Vue();
        newDialog.$eventBus.$on("closeDialog",function () {
          newDialog.$children[0].onClose()
        });
        dialog.$eventBus.$emit("openDialog",attribute);
    };
    Vue.$closeDialog = Vue.prototype.$closeDialog = function(data){
        dialog.$eventBus.$emit("closeDialog");
        if(data)
          data.$root.$eventBus.$emit("closeDialog");
    }
}
export default dialog