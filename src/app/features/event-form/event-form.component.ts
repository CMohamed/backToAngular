import {Component, OnInit} from '@angular/core';
import {Event} from '../../infrastructure/models/event.model';
import {EventsService} from "../../services/events.service";
import {FormControl, FormGroup} from "@angular/forms";

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

  eventForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });

  constructor(protected eventsService: EventsService) {
  }

  submit(event: any) {
    console.log(this.eventForm.value)
    // handle dates
    //this.save();
  }

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
