import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-sedi',
  templateUrl: './sedi.component.html',
  styleUrls: ['./sedi.component.scss']
})
export class SediComponent implements OnInit {
  ngOnInit() {
    this.ImportProjects()
  }
  progetti:any;

  constructor(private _progetto:ProjectService) { }


 ImportProjects(){
this._progetto.getProjects().subscribe ({
  next: (res: any)=> {
    this.progetti = res;

  } ,
  error: (err)=>
  { console.log("error",err)}
      })

}
}
