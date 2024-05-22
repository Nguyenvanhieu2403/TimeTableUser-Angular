import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authen/Login/Login.component';
import { RegisterComponent } from './authen/Register/Register.component';
import { IndexComponent } from './App/Index/Index.component';
import { ChangeInforComponent } from './App/ChangeInfor/ChangeInfor.component';
import { ChangePassWordComponent } from './App/ChangePassWord/ChangePassWord.component';
import { InformationComponent } from './App/Information/Information.component';
import { RegisterLectureScheduleComponent } from './App/RegisterLectureSchedule/RegisterLectureSchedule.component';
import { ViewLectureScheduleComponent } from './App/ViewLectureSchedule/ViewLectureSchedule.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    children: [
      {
        path: 'login', loadChildren: () => import('./authen/Login/Login.module').then(m => m.LoginModule),
      }
    ],

  },
  {
    path: '', component: LoginComponent,
    children: [
      {
        path: 'login', loadChildren: () => import('./authen/Login/Login.module').then(m => m.LoginModule),
      }
    ],

  },
  {   
    path: 'register', component: RegisterComponent,
  },
  {   
    path: 'index', component: IndexComponent,
  },
  {   
    path: 'information', component: InformationComponent,
  },
  {
    path: 'changeInfor', component: ChangeInforComponent,
  },
  {
    path: 'changePassWord', component: ChangePassWordComponent,
  },
  {
    path: 'registerLectureSchedule', component: RegisterLectureScheduleComponent,
  },
  {
    path: 'viewLectureSchedule', component: ViewLectureScheduleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
