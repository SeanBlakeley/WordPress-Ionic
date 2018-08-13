import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdeasProvider } from '../../providers/ideas/ideas';
import { FirstIdeaPage } from '../first-idea';

@IonicPage()
@Component({
	selector: 'page-ideas',
	templateUrl: 'ideas.html',
})
export class IdeasPage {
	ideas;

	constructor(public navCtrl: NavController, public navParams: NavParams, private ideasProvider: IdeasProvider) {

		this.ideasProvider.getIdeas().subscribe(data => {
			if ( Object.keys(data).length <= 10 ) {
				this.pushPage();
			}
			this.ideas = data;
			this.initializeItems();
		});
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
		console.log('ionViewDidLoad IdeasPage');
	}

	onShowIdeaDetails(idea) {
		this.navCtrl.push('IdeasDetailPage', { idea: idea });
	}

	onGoToCreateIdea() {
		this.navCtrl.push('CreateIdeaPage');
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
