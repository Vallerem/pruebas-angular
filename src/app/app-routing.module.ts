import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component' ;
import { ContactOverviewComponent } from './contact-overview/contact-overview.component' ;
import { ContactEditComponent } from './contact-edit/contact-edit.component' ;

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactComponent,
    children: [
      { path: '', component: ContactOverviewComponent },
      { path: 'edit', component: ContactEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
