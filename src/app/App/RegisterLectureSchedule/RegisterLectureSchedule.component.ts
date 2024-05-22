import { Component, OnInit } from '@angular/core';
import { RegisterLectureScheduleService } from './RegisterLectureSchedule.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-RegisterLectureSchedule',
  templateUrl: './RegisterLectureSchedule.component.html',
  styleUrls: ['./RegisterLectureSchedule.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class RegisterLectureScheduleComponent implements OnInit {

  token: any = localStorage.getItem('login');
  classes!: any[];
  first = 0;
  rows = 10;
  searchText: any;

  constructor(private registerService: RegisterLectureScheduleService, private datePipe: DatePipe, private confirmationService: ConfirmationService, private messageService: MessageService, private toastr: ToastrService) { }

  ngOnInit() {
    this.registerService.getSchedule(1,999).subscribe((res: any) => {
      this.classes = res.result;
      let i = 1;
      this.classes.forEach((element: any) => {
          element.NumericalOrder = i++;
          element.idChoose = element.idLecture_Schedule;
          element.dateStart = this.datePipe.transform(element.dateStart, 'dd/MM/yyyy');
          element.dateEnd = this.datePipe.transform(element.dateEnd, 'dd/MM/yyyy');
      });
    });
  }

  pageChange(event: { first: number; rows: number; }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  private parseDate(input: string): Date | null {
    const parts = input.split('/');
    if (parts.length !== 3) return null;
  
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Tháng trong JavaScript Date bắt đầu từ 0
    const year = parseInt(parts[2], 10);
  
    return new Date(year, month, day);
  }

  Save(event: Event, lectureSchedule: any) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Bạn có chắc chắn muốn lưu không?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          try {
            this.registerService.registerSchedule(this.token, lectureSchedule.idLecture_Schedule, lectureSchedule.course_Code).subscribe((res: any) => {
              if(res.statusCode == 200){
                this.toastr.success ('Đăng ký lịch học thành công');
                setTimeout(() => {
                  location.reload();
                }, 1000);
              }
              else {
                this.toastr.error (res.result);
              }
            }, error => {
              this.toastr.error (error.result);
            }, () => {});
          }
          catch (error) {
            this.toastr.error ('Đăng ký lịch học thất bại');
          }
        },
        reject: () => {
            this.toastr.warning("Hành động đã bị hủy", "Hủy bỏ");
        }
    });
  }

  filterClasses() {
    if (this.searchText) {
      this.classes = this.classes.filter((element: any) => {
        return element.course_Code.toLowerCase().includes(this.searchText.toLowerCase()) || element.lopHoc.toLowerCase().includes(this.searchText.toLowerCase())
        || element.monHoc.toLowerCase().includes(this.searchText.toLowerCase()) || element.phongHoc.toLowerCase().includes(this.searchText.toLowerCase())
        || element.lichHocTongList.toLowerCase().includes(this.searchText.toLowerCase());
      });
    } else {
      this.ngOnInit();
    }
  }

}
