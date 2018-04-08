import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdeasDetailPage } from './ideas-detail';

@NgModule({
  declarations: [
    IdeasDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(IdeasDetailPage),
  ],
})
export class IdeasDetailPageModule {}
