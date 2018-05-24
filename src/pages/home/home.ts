import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SiteProvider } from '../../providers/site/site';
import { SiteProblemPage } from '../site-problem/site-problem';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Title: String = "การติดตามคำร้อง"; //title
  public arr_site: Site[];

  constructor(public navCtrl: NavController, public site: SiteProvider, public navParams: NavParams) {
    this.site.get_site().subscribe((response) => {
      console.log("log response home :" + response);
      this.arr_site = response;
    });

  } //constructor

  site_problem(site_id) {
    this.navCtrl.push(SiteProblemPage, {
      site_id: site_id
    });
  }

}
interface Site {
  site_id: number;
  site_code: string;
  site_name: string;
  site_desciption: string;
  site_status: number;
}
