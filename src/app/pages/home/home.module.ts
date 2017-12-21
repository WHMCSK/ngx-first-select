import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { routes } from './home.routes';

// import { Ng2FirstTreeModule } from '../../../ng2-first-tree';
import { ngxFirstSelectModule } from '../../../ngx-first-select';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ngxFirstSelectModule,
    // Ng2FirstTreeModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
