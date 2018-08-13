import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdeasProvider } from '../../providers/ideas/ideas';

/**
 * Generated class for the IdeasDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-ideas-detail',
	templateUrl: 'ideas-detail.html',
})
export class IdeasDetailPage {

	idea;
	id;

	constructor(public navCtrl: NavController, public navParams: NavParams, private ideasProvider: IdeasProvider) {
		this.idea = this.navParams.get( 'idea' );
		console.log( this.idea );
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad IdeasDetailPage');
	}

	onGoToEditIdea() {
		this.navCtrl.push( 'EditIdeaPage', { idea: this.idea } );
	}

	onGoToDeleteIdea() {
		this.ideasProvider.deleteIdea( this.idea.id );
		this.navCtrl.push('IdeasPage');
	}
}
