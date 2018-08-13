import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the First Idea page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-first-idea',
	templateUrl: 'first-idea.html',
})
export class FirstIdeaPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FirstIdeaPage');
	}

	onGoToCreateIdea() {
		this.navCtrl.push('CreateIdeaPage');
	}

}
