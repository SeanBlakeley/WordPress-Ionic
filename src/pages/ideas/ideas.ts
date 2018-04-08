import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdeasProvider } from '../../providers/ideas/ideas';

/**
 * Generated class for the IdeasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ideas',
  templateUrl: 'ideas.html',
})
export class IdeasPage {

  ideas;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ideasProvider: IdeasProvider ) {
    this.ideasProvider.getIdeas().subscribe( data => {
      console.log( data );
      this.ideas = data;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeasPage');
  }

  onShowIdeaDetails( idea ) {
    this.navCtrl.push( 'IdeasDetailPage', { idea: idea } );
  }

  onGoToCreateIdea() {
    this.navCtrl.push( 'CreateIdeaPage' );
  }

}
