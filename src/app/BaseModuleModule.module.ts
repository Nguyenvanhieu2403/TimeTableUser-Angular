import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { RegisterComponent } from './authen/Register/Register.component';
import { IndexComponent } from './App/Index/Index.component';
import { ImportsModule } from './primeng_modules/imports';
import { InformationComponent } from './App/Information/Information.component';
import { ChangeInforComponent } from './App/ChangeInfor/ChangeInfor.component';
import { ChangePassWordComponent } from './App/ChangePassWord/ChangePassWord.component';
import { RegisterLectureScheduleComponent } from './App/RegisterLectureSchedule/RegisterLectureSchedule.component';
import { ViewLectureScheduleComponent } from './App/ViewLectureSchedule/ViewLectureSchedule.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ImportsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    NgxTippyModule
  ],
  exports: [CommonModule],
  providers: [CommonModule, DatePipe],
  declarations: [
    RegisterComponent,
    IndexComponent,
    InformationComponent,
    ChangeInforComponent,
    ChangePassWordComponent,
    RegisterLectureScheduleComponent,
    ViewLectureScheduleComponent
  ]
})
export class BaseModuleModule { }
