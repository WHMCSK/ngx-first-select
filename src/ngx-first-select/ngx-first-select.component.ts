import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ElementRef, ViewChild, HostListener } from '@angular/core';
import { AfterViewInit } from '@angular/core';

import { deepExtend } from './lib/helpers';
import { log } from 'util';

@Component({
  selector: 'ngx-first-select',
  styleUrls: ['./ngx-first-select.component.scss'],
  templateUrl: './ngx-first-select.component.html',
})
export class NgxFirstSelectComponent {

  selectedValue = ''; //被选择的选项，显示在select框中
  treeShow = false; // 控制下拉框内容的显示隐藏
  @Input() width = "200px";
  @Input() data;
  @Input() treeSettings = {
    filter: {
      isShow: true,
    },
    // foldedExpansionIsShow: false,

    // selectBgc: {            // 选中行背景色
    //   open: true,           // 是否开启
    //   bgc: '#00abff',        // 配置背景色
    //   lv1: true,            // 第一级是否开启选中背景色 
    // },
  };
  @Input() currentValue; // 当前选中的值
  @Output() selected = new EventEmitter<any>();

  constructor(private el:ElementRef) {
    // 点击body关闭下拉框
    document.body.onclick = (event) => {
      if (this.treeShow === true) {
        this.treeShow = false;
        event.stopPropagation();
      }
      console.log(1232);

    };
   
    
  }

  ngOnInit(){
    this.currentValue = 'aaaaaa'
    console.log(this.currentValue);
    
  }
  onClick() {
    this.treeShow = !this.treeShow;
  }
  nodeClick(e) {
    this.currentValue = e.text;
    this.selected.emit(e);
    this.treeShow = false;
  }
  
  ngAfterViewInit() { // 模板中的元素已创建完成
    let body = this.el.nativeElement.querySelector(".select-container");
    console.log(body.parentNode);
  }
}
