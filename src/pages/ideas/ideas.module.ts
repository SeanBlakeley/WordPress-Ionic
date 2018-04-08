import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdeasPage } from './ideas';

@NgModule({
  declarations: [
    IdeasPage,
  ],
  imports: [
    IonicPageModule.forChild(IdeasPage),
  ],
})
export class IdeasPageModule {}
