import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../../../common/model';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  list : User[];
  filter: any = {};

  constructor(private usersService : UsersService) { }

  ngOnInit() {

    this.all();
  }

  all() {
    this.usersService.get().subscribe(
      data => {
        console.log(data);
        this.list = data;
      },
      error => {
        console.log(error);
      });
  }

  search() {
    this.usersService.find({name: this.filter.name, number: -1 }).subscribe(data => {
      this.list = data;
    },
    error => {
      console.log(error);
    });
  }

  clearForm() {
    this.filter = {};
    this.all();
  }

}
