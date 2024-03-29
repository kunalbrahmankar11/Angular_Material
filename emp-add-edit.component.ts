import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent 
{
   empForm:FormGroup;

//   education:string[] = 
//   {
//     'Matric',
//     "Dimploma",
//     'Intermediate':
//     'Graduate':
//     'Post Graduate':
//  };

constructor(private _fb:FormBuilder){
  this.empForm=this._fb.group({
    FirstName:" ",
    LastName:" ",
    email:" ",
    DOB:" ",
    Gender:" ",
    company:" ",
    experience:" ",
    package:" ",
  });
}
onFormSubmit(){
  if(this.empForm.valid){
    console.log(this.empForm.valid);
  }
}

}
