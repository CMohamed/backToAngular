import { Component, OnInit } from '@angular/core';
import {Event} from '../../infrastructure/models/event.model';
import {EventsService} from "../../services/events.service";

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

  constructor(protected eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((data: any ) => {
      this.events = data;
    }, (error) => {
      // handle error
    });
  }

}
