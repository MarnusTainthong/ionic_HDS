import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestDataPage } from './request-data';

@NgModule({
  declarations: [
    RequestDataPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestDataPage),
  ],
})
export class RequestDataPageModule {}
