import { IEmployee } from './../app.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EployeeService {

  constructor(private _http:HttpClient)   { }

  addEmployee(data: any) : Observable<any> {
    return this._http.post('http://localhost:3000/posts',data)
  }

  getEmployees() : Observable<any> {
    return this._http.get('http://localhost:3000/posts')
  }



   editEmployee(id:number, data:any) : Observable<any> {
    data.id = id;
      return this._http.put(`http://localhost:3000/posts/${id}`, data);
    }

  deleteEmployee(id:number) : Observable<any> {
    return this._http.delete(`http://localhost:3000/posts/${id}`);
  }

  dataSource = new BehaviorSubject<any>(null);

  //prendi "data" di un solo dipendente
  setDataList(data: any) {
    this.dataSource.next(data)
 }
}


