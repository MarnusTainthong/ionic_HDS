import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';
import { RequestDataPage } from '../request-data/request-data';

/**
 * Generated class for the SiteProblemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-site-problem',
  templateUrl: 'site-problem.html',
})
export class SiteProblemPage {

  public Title: String = "การติดตามคำร้อง"; //title
  public get_site_id:number;
  public arr_req: Req[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public Req: RequestProvider) {

    console.log("getParams : "+this.navParams.data.site_id);
    this.get_site_id = navParams.data.site_id;
    console.log("setParams : "+ this.get_site_id);
    this.Req.get_request().subscribe((response) => {
      console.log("log response site_problem :" + response);
      this.arr_req = response;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SiteProblemPage');
  }

  get_req_data(sch_id) {
    this.navCtrl.push(RequestDataPage, {
      sch_id: sch_id
    });
  }

}
interface Req{
  rq_id : number;
  rq_code : string;
  rq_name_add_rq : string;
  rq_pc_id : number;
  rq_sys_id : number;
  rq_ct_id : number;
  rq_lv_id : number;
  rq_date : Date;
  rq_subject : string;
  rq_detail : string;
  rq_name_reply : string;
  rq_team_id : number;
  rq_responsible : number;
  rq_problem_clear : string;
  rq_status_id : number;
  rq_start_date : Date;
  rq_end_date : Date;
  rq_time : string;
  rq_status : number;
  rq_scheme : number;
  sch_id : number;
  sch_code : string;
  sch_name : string;
  sch_site_id : number;
  sch_year : Date;
  sch_status : number;
  site_id : number;
  site_code : string;
  site_name : string;
  site_desciption : string;
  site_status : number;
  sys_id : number;
  sys_name : number;
  sys_description : number;
  sys_status : number;
  status_id : number;
  status_code : string;
  status_name : string;
  status_dev : number;
  status_status : number;
  team_id : number;
  team_name : string;
  team_status : number;
  lv_id : number;
  lv_code : string;
  lv_name : string;
  lv_color : string;
  lv_status : number;
}
