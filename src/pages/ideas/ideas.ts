/**
 * Generated class for the IdeasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdeasProvider } from '../../providers/ideas/ideas';

@IonicPage()
@Component({
	selector: 'page-ideas',
	templateUrl: 'ideas.html',
})
export class IdeasPage {
	ideas;

	constructor(public navCtrl: NavController, public navParams: NavParams, private ideasProvider: IdeasProvider) {

		this.ideasProvider.getIdeas().subscribe(data => {
			this.ideas = data;
			this.initializeItems();
		});
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
