import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

  constructor(public http: Http) {
    console.log('Hello RequestProvider Provider');
  }

  get_request(){
    return this.http.get('http://10.80.39.17/TSP58/nursing/index.php/hdks/android/Service_request/get_site_request').map((res) => res.json());
  }

}
