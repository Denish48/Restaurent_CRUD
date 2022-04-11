import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css'],
})
export class AddRestaurentComponent implements OnInit {
  addnewresdata = new FormGroup({
    Restaurent: new FormControl(''),
    Email: new FormControl(''),
    Phone: new FormControl(''),
    Address: new FormControl('')
  });

  alert: boolean = false;
  unameforavatar:string | any;
  ngOnInit(): void {

   this.unameforavatar=localStorage.getItem("user_name")
   console.log(this.unameforavatar)
   
  }

  constructor(private api: ApiService,private navroute:Router) {}
  Get_RES_Data() {
    this.api.POST_API_CALL(this.addnewresdata.value).subscribe((res) => {
      this.alert = true;
    });
    this.addnewresdata.reset({});
  }
  alertclose() {
    this.alert = false;
  }
  on_user_edit_page()
  {
    this.navroute.navigateByUrl('/edituser')
  }
}
