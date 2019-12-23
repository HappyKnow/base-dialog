# base-dialog

基于vue的弹窗组件

## 使用

安装
``` bash
npm install base-dialog -S
```

全局应用组件
``` javascript
import BaseDialog from 'base-dialog'
Vue.use(BaseDialog)
```

使用组件
```
import myComponent from './myComponent';

  this.$openDialog({
      title:'HelloWorld',
      content:myComponent,
      showClose:false,
      param:{
        text:this.text
      }
  })
```

组件方法
```
1.打开弹窗：
this.$openDialog(Object);
Object:{
  title     :弹窗标题（选填）<string>默认'消息'
  showClose :是否显示关闭按钮（选填）<boolean>true/false,默认true
  content   :弹窗内容（必填）<.vue文件>
  param     :传递参数（选填）<object>
}
2.关闭弹窗
this.$closeDialog(this);
```

## 效果
![image](https://raw.githubusercontent.com/HappyKnow/base-dialog/master/screen.png)