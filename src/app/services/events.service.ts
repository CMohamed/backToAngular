import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private BASE_URI: string = "";
  private EVENT_LIST_SEGMENT: string = "";
  private CREATE_EVENT_SEGMENT: string = "";

  constructor(private httpClient: HttpClient) { }

  getEvents() {
    return this.httpClient.get(`${this.BASE_URI}\\${this.EVENT_LIST_SEGMENT}`);
  }

  createEvent(event: any) {
    return this.httpClient.post(`${this.BASE_URI}\\${this.CREATE_EVENT_SEGMENT}`, event);
  }

}
