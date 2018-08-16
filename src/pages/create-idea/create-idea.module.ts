import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateIdeaPage } from './create-idea';

@NgModule({
	declarations: [
		CreateIdeaPage,
	],
	imports: [
		IonicPageModule.forChild(CreateIdeaPage),
	],
})
export class CreateIdeaPageModule { }
