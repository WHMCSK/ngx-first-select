import { Component } from '@angular/core';
import { SimpleTreeService } from '../../local_data_services/simple.tree.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data = [];
  
  settings = {
    menuDatas: [
      {title: 'add', text: '新增'},
      {title: 'edit', text: '修改'},
      {title: 'delete', text: '删除'},
    ],
    filter: {
      isShow: false,
    },
    foldedExpansionIsShow: false,

    selectBgc: {            // 选中行背景色
      open: true,           // 是否开启
      bgc: '#00abff',        // 配置背景色
      lv1: false,            // 第一级是否开启选中背景色 
    },
  };
  
  defaultSelect = '呼吸科';
  width = "150px";
  constructor(private dp: SimpleTreeService){
      this.data = dp.getASimpleTree();
      // 异步promise
      // dp.getTreeData().then((tree) => {
      //   this.treedata1 = tree;
      // });
      
  }
  onclick(obj){
    // console.info(`node clicked`);
    // console.log(obj);
  }


  onFolded(e){
   
    
  }
  
  onExpansion(e){
  
  }

  onsearch(e){
    console.log(e);
    
  }
  onSelected(e){
    console.log(e);
    
  }

}
