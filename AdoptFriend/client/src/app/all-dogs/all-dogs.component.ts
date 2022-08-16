import { Component, OnInit } from '@angular/core';
import { Member } from '../_models/member';
import { Pagination } from '../_models/pagination';
import { UserParams } from '../_models/userParams';
import { User } from '../_models/users';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-all-dogs',
  templateUrl: './all-dogs.component.html',
  styleUrls: ['./all-dogs.component.css']
})
export class AllDogsComponent implements OnInit {
members: Member[];
pagination: Pagination;
userParams: UserParams = new UserParams();
user: User;
search: string = "";

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
    this.memberService.getAllMembers(this.userParams).subscribe(response => {
      this.members = response.result; 
      this.pagination = response.pagination;
    })
  }

  loadMemberByType(){
    this.memberService.getMemberByType(this.search).subscribe(member => {
      this.members = member;
      this.pagination = null;
    })
  }
  pageChanged(event: any){
    this.userParams.pageNumber = event.page;
    this.loadMembers();
  }

}
