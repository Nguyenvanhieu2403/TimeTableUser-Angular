import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  toShow:boolean=false;
  title = 'TimeTableUser';
  body: any;
  StyleInfor: any;
  click: boolean = false;


  constructor(private router: Router) { 
  }
  

  ngOnInit(){

    if(localStorage.getItem('login')!=null){
      this.toShow=true;
      this.body = "col-md-9"
    }
    else {
      this.toShow=false;
      this.body = "col-md-12"
    }
  }

  getInformation() {
    this.router.navigate(['/information']);
  }

  Show() {
    this.click = !this.click;
    if (this.click) {
      this.StyleInfor.style.display = "block";
    }
    else {
      this.StyleInfor.style.display = "none";
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
