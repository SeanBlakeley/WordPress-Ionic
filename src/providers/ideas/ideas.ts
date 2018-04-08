import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

/*
	Generated class for the IdeasProvider provider.

	See https://angular.io/guide/dependency-injection for more info on providers
	and Angular DI.
*/
@Injectable()
export class IdeasProvider {
	api_url = environment.site_url + environment.ideas_url;

	constructor(public http: HttpClient) {
		console.log('Hello IdeasProvider Provider');
	}

	getIdeas() {
		return this.http.get( this.api_url + '?_embed' );
	}

	postIdea( title, content, author ) {
		let data = {
			title: title,
			content: content,
			author: author,
			status: 'publish'
		};
//    console.log(data);
		let token = JSON.parse( localStorage.getItem( 'wpIonicToken' ) ).token;

		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		});

			console.log( headers);
		return this.http.post( this.api_url, data, { headers: headers } );
	}

	editIdea( id, title, content ) {
		let data = {
			title: title,
			content: content,
			status: 'publish'
		};

		let token = JSON.parse( localStorage.getItem( 'wpIonicToken' ) ).token;

		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		});

			console.log( headers);
		return this.http.put( this.api_url + '/' + id, data, { headers: headers } );
	}

	deleteIdea( id ) {

		console.log(  this.api_url + '/' + id );
		let token = JSON.parse( localStorage.getItem( 'wpIonicToken' ) ).token;

		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		});

		this.http.delete( this.api_url + '/' + id, { headers: headers } ).subscribe(
			resp => console.log('deleted'),
			error => console.log('error occur, delete fail')
		);

	}

}
