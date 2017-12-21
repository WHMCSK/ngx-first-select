import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxFirstSelectComponent } from './ngx-first-select.component';
import { Ng2FirstTreeModule } from 'ng2-first-tree';

// tree 折叠展开组件
// import { FoldedExpansionComponent } from './components/foldedExpansion/foldedExpansion.component';
// tree 搜索组件
// import { FilterComponent } from './components/fliter/filter.componet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2FirstTreeModule
  ],
  declarations: [
    NgxFirstSelectComponent,
    // tree 折叠展开组件
    // FoldedExpansionComponent,
    // tree 搜索组件
    // FilterComponent,
  ],
  exports: [
    NgxFirstSelectComponent,
  ],
})
export class ngxFirstSelectModule {
}
