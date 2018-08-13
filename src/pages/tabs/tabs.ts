import { Component } from '@angular/core';

@IonicPage()
@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = 'IdeasPage';
	tab2Root = 'CreateIdeaPage';
	tab3Root = 'RemindersPage';

	constructor() {

	}
}
