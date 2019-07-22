import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees:any[];
  employee:Employee ={ 
    name: '',
    position: '',
    department: '',
    salary: ''
  }
  constructor(
    public empService:EmpserviceService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }
  
  getEmployees(){
    this.empService.getEmployees()
        .subscribe((responses:Employee[]) =>{
          this.employees=responses;
          console.log('Data Successfully Fetched!',);
        })
  }

  deleteEmployee(id){
    this.empService.deleteEmployee(id)  
      .subscribe(()=>{ 
        this.getEmployees();
      });
  }

}
