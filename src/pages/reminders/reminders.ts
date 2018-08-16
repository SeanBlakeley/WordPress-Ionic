import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IdeasProvider } from '../../providers/ideas/ideas';


@IonicPage()
@Component({
	selector: 'page-reminders',
	templateUrl: 'reminders.html',
})
export class RemindersPage {
	idea;
	ideas;
	id;
	title;
	reminderText;
	reminderDate;
	items;
	timestamp = new Date();

	constructor(public navCtrl: NavController, public navParams: NavParams, private ideasProvider: IdeasProvider, public alertCtrl: AlertController) {

		this.ideasProvider.getIdeas().subscribe(data => {
			this.ideas = data;
			this.initializeItems();
		});

	}

	initializeItems() {
		this.items = this.ideas;
	}

	ionViewDidEnter() {
		this.ideasProvider.getIdeas().subscribe(data => {
			this.ideas = data;
			this.initializeItems();
		});
	}

	ionViewDidLoad() {
		console.log(this.ideas);
		console.log('ionViewDidLoad RemindersPage');
	}

	onShowIdeaDetails(idea) {
		this.navCtrl.push('IdeasDetailPage', { idea: idea });
	}

	onDismissReminder(idea) {
		console.log(idea);
		this.ideasProvider.editIdea(idea.id, idea.title, '', 0).subscribe(data => {
			this.ionViewDidEnter();
		});

	}

	onEditIdea(idea) {
		return this.navCtrl.push('EditIdeaPage', { idea: idea });
	}

	getItems(ev) {
		// Reset items back to all of the items
		this.initializeItems();

		// set val to the value of the ev target
		var val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.items = this.items.filter((item) => {
				if (item.reminder_content) {
					return (item.reminder_content.toLowerCase().indexOf(val.toLowerCase()) > -1);
				}
			})
		}
	}
}
