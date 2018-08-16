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
	ideas;
	id;
	title;
	reminderText;
	reminderDate;

	constructor(public navCtrl: NavController, public navParams: NavParams, private ideasProvider: IdeasProvider) {
		this.idea = this.navParams.get('idea');

		this.title = this.idea.title.rendered;
		this.reminderText = this.idea.reminder_content;
		this.reminderDate = this.idea.reminder_date;
		console.log(this.reminderDate);
		this.id = this.idea.id;

	}

	pushPage() {
		// push another page on to the navigation stack
		// causing the nav controller to transition to the new page
		// optional data can also be passed to the pushed page.
		this.navCtrl.push('FirstIdeaPage');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditIdeaPage');
	}

	onEditIdea() {
		if (this.reminderDate) {
			var timestamp = this.reminderDate;
			timestamp.replace('-', '/');
			this.reminderDate = Date.parse(this.reminderDate);
		} else {
			this.reminderDate = 0;
		}
		this.ideasProvider.editIdea(this.id, this.title, this.reminderText, this.reminderDate).subscribe(data => {
			this.ideasProvider.getIdeas().subscribe(data => {

				if (Object.keys(data).length <= 0) {
					this.pushPage();
				}
				this.ideas = data;

				console.log(data);
				this.navCtrl.push('TabsPage');
			});
		});
	}

}
