import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SiteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SiteProvider {

  constructor(public http: Http) {
    console.log('Hello SiteProvider Provider');
  }

  get_site() {
    return this.http.get('http://10.80.39.17/TSP58/nursing/index.php/hdks/android/Service_request/get_all_site').map((res) => res.json());
  }

}
