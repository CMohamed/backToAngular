import { Component, OnInit } from '@angular/core';
import { Event } from '../features.type'
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  event: Event = {
    name: '',
    description: '',
    startDate: null,
    endDate: null,
  }

  constructor(protected eventsService: EventsService) { }

  save() {
    this.eventsService.createEvent(this.event).subscribe(resp => {
      // event created
      // may be redirected to event/list
    }, error => {
      // error handling
    })
  }

  ngOnInit(): void {
  }

}
