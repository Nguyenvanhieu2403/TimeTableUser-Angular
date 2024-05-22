/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterLectureScheduleService } from './RegisterLectureSchedule.service';

describe('Service: RegisterLectureSchedule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterLectureScheduleService]
    });
  });

  it('should ...', inject([RegisterLectureScheduleService], (service: RegisterLectureScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
