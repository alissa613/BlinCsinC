import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { DashboardModule } from './dashboard/dashboard.module'
import { UpcomingModule } from './upcoming/upcoming.module'

import { HomeRoutingModule } from './home-routing.module'

import { HomeComponent } from './home.component'
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component'
import { ContactListComponent } from './contact-list/contact-list.component'
import { SimpleFilterComponent } from './simple-filter/simple-filter.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LunchComponent } from './lunch/lunch-component'
import { UpcomingComponent } from './upcoming/upcoming.component'

import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
@NgModule({

  declarations: [HomeComponent, DragAndDropComponent, ContactListComponent, SimpleFilterComponent, DashboardComponent, UpcomingComponent, LunchComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DragDropModule,
    DashboardModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    UpcomingModule
  ]
})
export class HomeModule {}
