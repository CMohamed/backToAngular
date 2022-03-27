import { Component, OnInit } from '@angular/core';
import {Event} from '../features.type';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [
    {name: 'event', description: 'desc', startDate: new Date(), endDate: new Date()}
  ]

  displayedColumns: string[] = ['name', 'description', 'startDate', 'endDate']

  constructor() { }

  ngOnInit(): void {
  }

}
