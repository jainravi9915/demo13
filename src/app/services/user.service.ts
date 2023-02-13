import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient,

  ) { }
  // create user  

  localhost="http://localhost:8080/admin/user/"
  admin="http://localhost:8080/admin/"

  addUser(user:any):Observable<any>{
    return this.http.post(
      this.localhost+"create",
      user
    )
  }
  loginUser(user:any):Observable<any>{
    return this.http.post(
      this.localhost+"login",
      user
    )
  }  
  getCurrentUser():Observable<any>{
    return this.http.get(
      this.localhost+'current-user'
    )
  }
  getAllEnquriy():Observable<any>{
    return this.http.get(
      this.admin+"get-all-enquiry"
    )
  }
  
  getAllActiveEnquriy():Observable<any>{
    return this.http.get(
      this.admin+"get-active-enquiry"
    )
  }
  
  getAllInActiveEnquriy():Observable<any>{
    return this.http.get(
      this.admin+"get-in-active-enquiry"
    )
  }
  toggleActiveStatus(id:any):Observable<any>{
    return this.http.put(
      this.admin+'update-status',
      id
    )
  }
}
