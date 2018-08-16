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
		console.log("refreshed ideas");
		let user_id = JSON.parse(localStorage.getItem('wpIonicToken')).user_id;
		return this.http.get(this.api_url + '?_embed&author=' + user_id);
	}

	postIdea(title, reminderText, reminderDate) {
		let data = {
			title: title,
			reminder_content: reminderText,
			reminder_date: reminderDate,
			author: JSON.parse(localStorage.getItem('wpIonicToken')).user_id,
			status: 'publish'
		};

		let token = JSON.parse(localStorage.getItem('wpIonicToken')).token;

		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		});

		console.log(headers);
		return this.http.post(this.api_url, data, { headers: headers });
	}

	editIdea(id, title, reminderText, reminderDate) {
		let data = {
			title: title,
			reminder_content: reminderText,
			reminder_date: reminderDate,
			status: 'publish'
		};

		let token = JSON.parse(localStorage.getItem('wpIonicToken')).token;

		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		});

		return this.http.put(this.api_url + '/' + id, data, { headers: headers });
	}

	deleteIdea(id) {

		console.log(this.api_url + '/' + id);
		let token = JSON.parse(localStorage.getItem('wpIonicToken')).token;

		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		});

		this.http.delete(this.api_url + '/' + id, { headers: headers }).subscribe(
			resp => console.log('deleted'),
			error => console.log('error occur, delete fail')
		);

	}

}
