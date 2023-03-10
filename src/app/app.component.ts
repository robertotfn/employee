import { UpdateComponent } from './update/update.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { Component, ViewChild, Inject, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EployeeService } from './services/eployee.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface IEmployee {
  nome: string;
  email: string;
  ruolo: string;
  password: string;
  id: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="Reactivx"
  displayedColumns: string[] = ['id', 'nome', 'email', 'ruolo', 'action'];
  dataSource!: MatTableDataSource<IEmployee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getEmployeeList()


  }
  constructor(private _dialog:MatDialog, private _emp:EployeeService, ){  }
  //apri modale per aggiungere dipendente
    openAddEditEmpForm() {
      this._dialog.open(EmpAddEditComponent)
    }
//ottieni lista dipendenti
    getEmployeeList() {
      this._emp.getEmployees().subscribe({
        next: (res)=> {
           this.dataSource = new MatTableDataSource(res);
           this.dataSource.sort =  this.sort
           this.dataSource.paginator =  this.paginator

       },
        error: (err)=>
  { console.log("error",err)}
      })
    }
//funzione per il filtro
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }

}

//cancella dipendente
deleteEm(id:number){
  this._emp.deleteEmployee(id).subscribe({
    next: (res) => {
     alert('Employee deleted!', );
      this.getEmployeeList();
    },
    error: console.log,
  });
}

//apri modale per modificare dipendente
openEditForm(data:any){
  this._emp.setDataList(data);
  this._dialog.open(UpdateComponent, {
    data,

  });
}

}
