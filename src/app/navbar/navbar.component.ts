import { Component, OnInit, Renderer2 } from '@angular/core';
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

  constructor(private router: Router, private renderer: Renderer2) { }

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

  toggleNavbar() {
    const navbar = document.querySelector('.container_navbar');
    const leftSide = document.querySelector('.container_left_side');

    if (navbar) {
      if (navbar.classList.contains('active')) {
        this.renderer.removeClass(navbar, 'active');
      } else {
        this.renderer.addClass(navbar, 'active');
      }
    }

    if (leftSide) {
      if (leftSide.classList.contains('d-none')) {
        this.renderer.removeClass(leftSide, 'd-none');
      } else {
        this.renderer.addClass(leftSide, 'd-none');
      }
    }
  }
}
