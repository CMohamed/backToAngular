import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventListComponent} from './event-list/event-list.component';
import {EventFormComponent} from './event-form/event-form.component';
import {FeaturesRoutingModule} from "./features-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    EventListComponent,
    EventFormComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class FeaturesModule {
}
