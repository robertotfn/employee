import { BarraComponent } from './start/barra/barra.component';
import { StartComponent } from './start/start.component';
import { SediComponent } from './sedi/sedi.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sedi', component: SediComponent },
  { path: 'dipendenti', component: AppComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


