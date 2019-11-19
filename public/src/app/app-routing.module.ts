import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { ViewoneComponent } from './components/viewone/viewone.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  { path: 'products', component: HomeComponent },
  { path: 'products/new', component: CreateComponent },
  { path: 'products/:id', component: ViewoneComponent },
  { path: 'products/:id/edit', component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
