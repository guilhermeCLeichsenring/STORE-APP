import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { AnimalsComponent } from './pages/animals/animals.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //faz com que se inicie direto na página home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
