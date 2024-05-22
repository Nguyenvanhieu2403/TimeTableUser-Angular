import { Component, OnInit } from '@angular/core';
import { ViewLectureScheduleService } from './ViewLectureSchedule.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-ViewLectureSchedule',
  templateUrl: './ViewLectureSchedule.component.html',
  styleUrls: ['./ViewLectureSchedule.component.css']
})
export class ViewLectureScheduleComponent implements OnInit {

  token: any = localStorage.getItem('login');
  classes!: any[];
  first = 0;
  rows = 10;
  searchText: any;

  constructor(private viewService: ViewLectureScheduleService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.viewService.getSchedule(this.token,1,999).subscribe((res: any) => {
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

  ExportExcel() {
    import("xlsx").then(xlsx => {
      const json = this.classes.map(item => ({
        "STT": item.NumericalOrder,
        "Mã học phần": item.course_Code,
        "Lớp học": item.lopHoc,
        "Phòng học": item.phongHoc,
        "Môn học": item.monHoc,
        "Ngày bắt đầu": item.dateStart,
        "Ngày kết thúc": item.dateEnd,
        "Lịch học": item.lichHocTongList
      }));
      const worksheet = xlsx.utils.json_to_sheet(json, 
        { 
          header: [
            "STT",
            "Mã học phần",
            "Lớp học",
            "Phòng học",
            "Môn học",
            "Ngày bắt đầu",
            "Ngày kết thúc",
            "Lịch học"
          ]
        }
      );
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "Danh sách lịch học");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }

}
