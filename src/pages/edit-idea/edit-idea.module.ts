import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditIdeaPage } from './edit-idea';

@NgModule({
	declarations: [
		EditIdeaPage,
	],
	imports: [
		IonicPageModule.forChild(EditIdeaPage),
	],
})
export class EditIdeaPageModule {}
