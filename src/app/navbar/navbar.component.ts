import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toShow:boolean=false;
  title = 'TimeTableAdmin';
  body: any;
  StyleInfor: any;
  click: boolean = false;
  imgSrc: any;
  FullName: any;
  selectedNavItem: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.imgSrc = localStorage.getItem('avata');
    this.FullName = localStorage.getItem('fullname');
      // Thực hiện các hành động khác sau khi đã reload
      if (localStorage.getItem('login') != null) {
        this.toShow = true;
        this.body = "col-md-6";
      } else {
        this.toShow = false;
        this.body = "col-md-12";
      }
  }

  selectNavItem(item: string) {
    this.selectedNavItem = item;
  }

  getInformation() {
    this.router.navigate(['/information']);
  }

  showChangeInfo() {
    this.router.navigate(['/changeInfor']);
  }
  showChangePassword() {
    this.router.navigate(['/changePassWord']);
  }

  ShowRegisterLectureSchedule() {
    this.router.navigate(['/registerLectureSchedule']);
  }
  
  ShowViewLectureSchedule() {
    this.router.navigate(['/viewLectureSchedule']);
  }

  Show() {
    this.click = !this.click;
    if (this.click) {
      this.StyleInfor= "display: block;";
    }
    else {
      this.StyleInfor= "display: none;";
    }
  }

  Logout(){
    localStorage.removeItem("fullname");
    localStorage.removeItem("avata");
    localStorage.removeItem("email");
    localStorage.removeItem("hasReloaded");
    localStorage.removeItem("login");
    this.router.navigate(['/login']);
    this.toShow=false;
  }  

}
