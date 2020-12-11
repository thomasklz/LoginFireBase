import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IoncardPageRoutingModule } from './ioncard-routing.module';

import { IoncardPage } from './ioncard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IoncardPageRoutingModule
  ],
  declarations: [IoncardPage]
})
export class IoncardPageModule {}
