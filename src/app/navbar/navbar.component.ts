import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent 
{
  catlist:any;
  token:any;
  constructor(private api:ApiService)
  {
    this.token = localStorage.getItem('token');
  }
  ngOnInit()
  {
    this.api.getCatList().subscribe((res:any)=>{
      console.log(res);
      this.catlist =res;
    });
  }
  logout()
  {
    localStorage.clear();
    this.token = localStorage.getItem('token');
  }

}
