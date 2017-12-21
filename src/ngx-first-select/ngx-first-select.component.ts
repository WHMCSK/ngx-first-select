import { Component, Input, Output, SimpleChange, EventEmitter, OnChanges, ElementRef, ViewChild } from '@angular/core';
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
  @Input() defaultSelect; // 默认选中的值
  @Output() selected = new EventEmitter<any>();

  constructor(){

  }
  onClick(){
    this.treeShow = !this.treeShow;
  }
  nodeClick(e){
    this.selectedValue = e.text;
    this.selected.emit(e);
    this.treeShow = false;
  }
}
