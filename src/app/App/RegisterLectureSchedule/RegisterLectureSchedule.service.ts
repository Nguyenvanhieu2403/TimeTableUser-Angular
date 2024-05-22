import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterLectureScheduleService {

  environment: any;

  constructor(private _http: HttpClient, injector: Injector) {
    this.environment = environment.apiDomain.devEndpoint
  }

  getSchedule(pageIndex: any, pageSize: any){
    const apiUrl = `${this.environment}/LectureSchedule/Registered_Calendar?pageIndex=${pageIndex}&pageSize=${pageSize}&check=${0}&Name=${'string'}`;
    return this._http.get(apiUrl);
  }

  registerSchedule(token: any, IdSchedure: any, Course_Code: any){
    const apiUrl = `${this.environment}/LectureSchedule?token=${token}&IdSchedure=${IdSchedure}&Course_Code=${Course_Code}`;
    return this._http.post(apiUrl, null);
  }

}
