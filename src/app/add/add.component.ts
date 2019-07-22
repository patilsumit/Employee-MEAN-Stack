import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { Observable,Subscriber} from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employees:any[];
  employee:Employee ={ 
    name: '',
    position: '',
    department: '',
    salary: ''
  }

  constructor(private services:EmpserviceService,  private route:ActivatedRoute,
    private router:Router) { }

  @ViewChild('empForm') form:any;
  ngOnInit() {
  }
                                         
  addEmployee(employee){
    this.services.addEmployee(this.employee).subscribe((response)=>
        this.goBack()
      //  console.log("done")  
     )  
  }
       
  goBack(){
    this.router.navigate(['/']) 
  }
  
}
