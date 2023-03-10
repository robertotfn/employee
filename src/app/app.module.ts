import { ProjectService } from './services/project.service';
import { MatPaginator } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort';
import { UpdateComponent } from './update/update.component';
import {MatMenuModule} from '@angular/material/menu';
import { SediComponent } from './sedi/sedi.component';
import {MatCardModule} from '@angular/material/card';
import { StartComponent } from './start/start.component';
import { BarraComponent } from './start/barra/barra.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    EmpAddEditComponent,
    UpdateComponent,
      SediComponent,
      BarraComponent,StartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule, ReactiveFormsModule, MatSelectModule,MatInputModule,
    HttpClientModule, ObserversModule, MatTableModule, MatPaginatorModule, MatSortModule,MatMenuModule,
    MatCardModule, RouterModule
  ],
  providers: [ProjectService],
  exports: [RouterModule],

  bootstrap: [StartComponent]
})
export class AppModule { }
