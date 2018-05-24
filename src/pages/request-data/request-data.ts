import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';

/**
 * Generated class for the RequestDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-data',
  templateUrl: 'request-data.html',
})
export class RequestDataPage {

  public arr_req_data: Req_data[];
  public get_sch_id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Req_data: RequestProvider) {
    console.log("log req_dt_p (sch_id) : " + this.navParams.data.sch_id);
    this.get_sch_id = navParams.data.sch_id;
    console.log("log req_dt_p (get_sch_id) : " + this.get_sch_id);
    this.Req_data.get_request().subscribe((response) => {
      console.log("log response site_problem :" + response);
      this.arr_req_data = response;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestDataPage');
  }



}
interface Req_data {
  rq_id: number;
  rq_code: string;
  rq_name_add_rq: string;
  rq_pc_id: number;
  rq_sys_id: number;
  rq_ct_id: number;
  rq_lv_id: number;
  rq_date: Date;
  rq_subject: string;
  rq_detail: string;
  rq_name_reply: string;
  rq_team_id: number;
  rq_responsible: number;
  rq_problem_clear: string;
  rq_status_id: number;
  rq_start_date: Date;
  rq_end_date: Date;
  rq_time: string;
  rq_status: number;
  rq_scheme: number;
  sch_id: number;
  sch_code: string;
  sch_name: string;
  sch_site_id: number;
  sch_year: Date;
  sch_status: number;
  site_id: number;
  site_code: string;
  site_name: string;
  site_desciption: string;
  site_status: number;
  sys_id: number;
  sys_name: number;
  sys_description: number;
  sys_status: number;
  status_id: number;
  status_code: string;
  status_name: string;
  status_dev: number;
  status_status: number;
  team_id: number;
  team_name: string;
  team_status: number;
  lv_id: number;
  lv_code: string;
  lv_name: string;
  lv_color: string;
  lv_status: number;
}
