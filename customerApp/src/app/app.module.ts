import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
  
  { path: '', component:EmployeesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
