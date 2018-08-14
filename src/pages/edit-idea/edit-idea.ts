import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdeasProvider } from '../../providers/ideas/ideas';

/**
 * Generated class for the EditIdeaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-edit-idea',
	templateUrl: 'edit-idea.html',
})
export class EditIdeaPage {

	reminderDate: String = new Date().toISOString();

	idea;
	id;
	title;
	reminderText;

	constructor(public navCtrl: NavController, public navParams: NavParams, private ideasProvider: IdeasProvider) {
		this.idea = this.navParams.get( 'idea' );

		this.title = this.idea.title.rendered;
		this.reminderText = this.idea.meta._reminder_content;
		this.reminderDate = this.idea.meta._reminder_time;
		console.log( "Reminder time" + this.idea.meta._reminder_time);
		this.id = this.idea.id;

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditIdeaPage');
	}

	onEditIdea() {
		this.ideasProvider.editIdea( this.id, this.title, this.reminderText, this.reminderDate ).subscribe( data => {
			console.log( data );
			this.navCtrl.push( 'TabsPage' );
		});
	}

}
