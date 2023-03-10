import { AppComponent } from './../app.component';
import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject, Input, Inject, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../app.component';
import { EployeeService } from '../services/eployee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  empForm! :FormGroup;
  email = new FormControl('', [Validators.required,Validators.email ]);
  hide = true;
  ruolo :string[]=[
    'Junior',
    'Senior',
    'Admin'
  ]
  indice!: number;
  data!: IEmployee ;
  selected:any;

constructor(private _fb:FormBuilder, private _EmpService:EployeeService ,
  private activeRoute:ActivatedRoute,
  ){
  this.empForm = _fb.group({
    nome: new FormControl('', Validators.required),
    ruolo:new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email ]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  })
}


ngOnInit(): void {
  this.getEmployee()
}


getEmployee() {
  this._EmpService.dataSource.subscribe(data => {
this.data = data;
String(data.ruolo)
this.indice =  this.ruolo.indexOf(data.ruolo);
this.selected = this.ruolo[this.indice]
  })

}

  onFormSubmit(){
    if (this.empForm.valid) {
 this._EmpService.editEmployee(this.data.id,this.empForm.value).subscribe({
  next: (val: any) => {
    alert('modifiche effettuate con successo');
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
