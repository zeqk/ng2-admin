import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { TerritoriesService, Territory } from '../.';

@Component({
  selector: 'territories-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list : Territory[];
  filter: any = {};

  constructor(private territories : TerritoriesService) { }

  ngOnInit() {

    this.all();
  }

  all() {
    this.territories.get().subscribe(
      data => {
        this.list = data;
      },
      error => {
        console.log(error);
      });
  }

  search() {
    this.territories.find({name: this.filter.name, number: -1 }).subscribe(data => {
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
