import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
	ideas;
	id;

	constructor(public navCtrl: NavController, public navParams: NavParams, private ideasProvider: IdeasProvider, public alertCtrl: AlertController) {
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
		this.showDeleteConfirm(this.idea.id);
		this.navCtrl.push('IdeasPage');
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

}
