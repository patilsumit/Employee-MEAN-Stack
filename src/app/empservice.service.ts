import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

  
 
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  private myURL='/api/employees';
  constructor(private http:HttpClient,public router:Router) { }
  getEmployees(){
    return this.http.get(this.myURL);
  }
  getEmployee(id){
    return this.http.get(this.myURL+ '/' + id);
  }
   
  addEmployee(info){
    // let headers = new HttpHeaders();
  // headers.append('Content-Type', 'application/json');
  console.log('----------------------desk', info);  
  return this.http.post(this.myURL,info )   
  }
  deleteEmployee(id){
    return this.http.delete(this.myURL+ '/' +id);  
  }
  updateEmployee(id, info){
    this.router.navigate(['/']);
    return this.http.put(this.myURL+ '/' +id,info);
    
     
  }

}
