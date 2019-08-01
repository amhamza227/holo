// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsProvider {
	userId: any;
	userData: any;

	constructor() {
		console.log('Hello GlobalsProvider Provider');
	}

	clear() {
		this.userId = undefined;
		this.userData = undefined;
	}

	reinitializeGlobals() {
		this.userId = '';
		this.userData = '';
	}

}
