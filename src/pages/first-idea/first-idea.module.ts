import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstIdeaPage } from './first-idea';

@NgModule({
  declarations: [
    FirstIdeaPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstIdeaPage),
  ],
})
export class FirstIdeaPageModule {}
