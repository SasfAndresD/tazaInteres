import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TazaComponent } from './Cotizador/taza/taza.component';

const routes: Routes = [
  {
    path: '',
    component: TazaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
