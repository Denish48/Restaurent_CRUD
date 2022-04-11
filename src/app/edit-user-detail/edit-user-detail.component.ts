import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { setInterval } from 'timers';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-user-detail',
  templateUrl: './edit-user-detail.component.html',
  styleUrls: ['./edit-user-detail.component.css'],
})
export class EditUserDetailComponent implements OnInit {
  constructor(
    private apicall: ApiService,
    private navroute: Router,
    private _toastService: ToastService,
    private route:Router
  ) {}

  user_data: any = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Password: new FormControl(''),
    Address: new FormControl(''),
    Accept_Conditions: new FormControl(''),
  });

  lstorageid: any = localStorage.getItem('id');
  ngOnInit(): void {
    this.apicall
      .GET_USER_DATA_FOR_EDIT(this.lstorageid)
      .subscribe((res: any) => {
        console.log(res);
        this.user_data = new FormGroup({
          Name: new FormControl(res.Name),
          Email: new FormControl(res.Email),
          Password: new FormControl(res.Password),
          Address: new FormControl(res.Address),
          Accept_Conditions: new FormControl(res.Accept_Conditions),
        });
      });
  }
  back_to() {
    this.navroute.navigateByUrl('/addrestaurent');
  }
  user_edit_data_submit() {
    this.apicall
      .POST_UPDATED_USER_DATA(this.lstorageid, this.user_data.value)
      .subscribe((update_res) => {
        console.log(update_res);
      });
    this._toastService.success('Data update Successfully');
    setTimeout(() => {
      this.route.navigateByUrl('/addrestaurent')
    }, 1000);

  }
}
