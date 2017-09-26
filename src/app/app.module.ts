import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { CounterService } from './services/counter.service';
import { ContactService } from './contact-service.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';
import { ContactOverviewComponent } from './contact-overview/contact-overview.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    MyCounterComponent,
    MySecondCounterComponent,
    ContactOverviewComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CounterService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
