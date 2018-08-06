import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemindersPage } from './reminders';

@NgModule({
  declarations: [
    RemindersPage,
  ],
  imports: [
    IonicPageModule.forChild(RemindersPage),
  ],
})
export class RemindersPageModule {}
