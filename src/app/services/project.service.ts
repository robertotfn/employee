import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ProjectService {

constructor(private _http:HttpClient) { }


getProjects() : Observable<any> {
  return this._http.get('http://localhost:3000/progetti')
}

}
