import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Adopt a Friend';
  users: any;

  constructor(private accountService: AccountService){}

  ngOnInit(){
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userFromLS: any = localStorage.getItem('user');
    const user = JSON.parse(userFromLS);
    this.accountService.setCurrentUser(user);
  }

}