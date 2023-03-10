import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EployeeService} from '../services/eployee.service'
@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm! :FormGroup;
  email = new FormControl('', [Validators.required,Validators.email ]);
  hide = true;
  ruolo :string[]=[
    'Junior',
    'Senior',
    'Admin'
  ]

constructor(private _fb:FormBuilder, private _EmpService:EployeeService,  private  _dialog: DialogRef<EmpAddEditComponent>
  ){
  this.empForm = _fb.group({
    nome: new FormControl('', Validators.required),
    ruolo:new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email ]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  })
}

  onFormSubmit(){
    if (this.empForm.valid) {
 this._EmpService.addEmployee(this.empForm.value).subscribe({
  next: (val:any) =>{
    alert("dipendente aggiunto correttamente");
    window.location.reload();
    this._dialog.close()

  },
  error: (err:any)=>{
    alert("qualcosa è andato storto")
    console.log("qualcosa è andato storto", err)

  },
});
 } else {
  alert("qualcosa è andato storto")

 }
  }
}
