/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewLectureScheduleService } from './ViewLectureSchedule.service';

describe('Service: ViewLectureSchedule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewLectureScheduleService]
    });
  });

  it('should ...', inject([ViewLectureScheduleService], (service: ViewLectureScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
