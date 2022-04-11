import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  url:any = 'http://localhost:3000/Restaurent';
  url2 :any= 'http://localhost:3000/UserData';



  API_CALL() {
   let GetParams=new HttpParams().append('get','RestaurentAPI');
   let GetHeader=new HttpHeaders({'custom-header':'hellooo'})
   
    return this.http.get(this.url,{headers:GetHeader,params:GetParams});
  }
  POST_API_CALL(data: any) {
    let POSTParams=new HttpParams().append('post','RestaurentApi');
    let POSTHeader=new HttpHeaders({'custom-header':'hellooo'})

    return this.http.post(this.url, data,{headers:POSTHeader,params:POSTParams});
  }
  DELETE_API_CALL(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  //to get value of the currnt update data:
  GET_CURR_DATA_API_CALL(id: any) {
    let NEW_DATA_GET_Params=new HttpParams().append('update','Res-Data-Api');
    let NEW_DATA_GET_Header=new HttpHeaders({'custom-header':'hellooo'})
    return this.http.get(`${this.url}/${id}`,{headers:NEW_DATA_GET_Header,params:NEW_DATA_GET_Params});
  }
  //call api for update the data:
  GET_NEW_UPDATE_DATA(id: any, updatedata: any) {
    let NEW_UPDATE_PUT_Header=new HttpHeaders({'custom-header':'hellooo'})

    return this.http.put(`${this.url}/${id}`, updatedata,{headers:NEW_UPDATE_PUT_Header});
  }
  //user datas api calls:
GET_USER_DATA()
{
  return this.http.get(this.url2)
}
  POST_USER_DATA_API_CALL(data: any) {
    let USER_POST_Header=new HttpHeaders({'custom-header':'hellooo'})
    return this.http.post(this.url2, data,{headers:USER_POST_Header});
  }
  GET_USER_DATA_FOR_EDIT(id:any)
  {
    return this.http.get(`${this.url2}/${id}`)
  }
POST_UPDATED_USER_DATA(id:any,updatdatas:any)
{
  return this.http.put(`${this.url2}/${id}`,updatdatas)
}

}
