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

	idea;
	id;
	title;
	content;
  reminderTime;
  reminderContent;


	constructor(public navCtrl: NavController, public navParams: NavParams, private ideasProvider: IdeasProvider) {
		this.idea = this.navParams.get( 'idea' );

		this.title = this.idea.title.rendered;
		this.content = this.idea.content.rendered;
		this.id = this.idea.id;

    this.reminderTime = this.idea.meta._reminder_time;
    this.reminderContent = this.idea.meta._reminder_content;

  }

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditIdeaPage');
	}

	onEditIdea() {
		this.ideasProvider.editIdea( this.id, this.title, this.content, this.reminderTime, this.reminderContent ).subscribe( data => {
			console.log( data );
			this.navCtrl.push( 'TabsPage' );
		});
	}

}
