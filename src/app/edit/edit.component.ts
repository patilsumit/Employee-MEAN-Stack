import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    public empService:EmpserviceService,
    public route:ActivatedRoute,
    public router:Router
 ) { }

 ngOnInit() {
   this.getEmployee();
 }

 employees:any[];
 employee:Employee ={ 
  name: '',
  position: '',
  department: '',
  salary: ''
}
@ViewChild('empForm') form:any;
 
id = this.route.snapshot.params['id']; 
 getEmployee(){
   console.log("update id check",this.id);
   this.empService.getEmployee(this.id)
       .subscribe((response) =>{
         this.employee=response;
       })
 }

 updateEmployee(){
   this.empService.updateEmployee(this.id,this.employee) 
       .subscribe((response:Employee[])=>
       this.employees=response
       ) 
 }

  goBack(){
   this.router.navigate(['/home'])
 }
}
