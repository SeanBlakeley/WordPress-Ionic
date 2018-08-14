import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IdeasProvider } from '../../providers/ideas/ideas';


@IonicPage()
@Component({
	selector: 'page-ideas',
	templateUrl: 'ideas.html',
})
export class IdeasPage {
	ideas;
	items;
	idea;

	constructor(public navCtrl: NavController, public navParams: NavParams, private ideasProvider: IdeasProvider, public alertCtrl: AlertController) {

		this.ideasProvider.getIdeas().subscribe(data => {

			if ( Object.keys(data).length <= 0 ) {
				this.pushPage();
			}
			this.ideas = data;
			this.initializeItems();
		});

	}

	showDeleteConfirm(ideaID) {
		const confirm = this.alertCtrl.create({
			title: 'Delete this Idea?',
			message: 'Are you sure you want to delete this idea?',
			buttons: [
				{
					text: 'Delete',
					handler: () => {
						this.ideasProvider.deleteIdea( ideaID );
						this.navCtrl.push('IdeasPage');
					}
				},
				{
					text: 'Cancel',
					handler: () => {
						this.navCtrl.push('IdeasPage');
					}
				}
			]
		});
		confirm.present();
	}

	pushPage(){
		// push another page on to the navigation stack
		// causing the nav controller to transition to the new page
		// optional data can also be passed to the pushed page.
		this.navCtrl.push('FirstIdeaPage');
	}

	initializeItems() {
		this.items = this.ideas;
	}

	ionViewDidLoad() {
		console.log(this.ideas);
		console.log('ionViewDidLoad IdeasPage');
	}

	onShowIdeaDetails(idea) {
		this.navCtrl.push('IdeasDetailPage', { idea: idea });
	}

	onGoToCreateIdea() {
		this.navCtrl.push('CreateIdeaPage');
	}

	onDeleteIdeaDetails(idea) {
		this.showDeleteConfirm(idea.id);
	}

	onEditIdea(idea) {
		return this.navCtrl.push('EditIdeaPage', { idea: idea } );
	}

	getItems(ev) {
		// Reset items back to all of the items
		this.initializeItems();

		// set val to the value of the ev target
		var val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.items = this.items.filter((item) => {
				return (item.title.rendered.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}
}
