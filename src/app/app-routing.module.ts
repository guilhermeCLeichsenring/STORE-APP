import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'animals',
    component: AnimalsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //faz com que se inicie direto na página home
];
//canActivate:[] : Realiza a permição para a ativação da rota

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
