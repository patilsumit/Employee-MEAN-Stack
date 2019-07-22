import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  employee:Employee;
  constructor(
    public empService:EmpserviceService,
    public route:ActivatedRoute,
    public router:Router
 ) { }

 ngOnInit() {
   this.getEmployee();
 }

 
 getEmployee(){
   var id = this.route.snapshot.params['id'];
   this.empService.getEmployee(id)
       .subscribe(response=>{
         this.employee = response;
       })
 }
 goBack(){
   this.router.navigate(['/'])
 }

}
