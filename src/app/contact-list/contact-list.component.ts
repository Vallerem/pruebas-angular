import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact-service.service';

@Component({
  selector: 'contact-list',
  template: `
    <table>
      <tr>
        <th> Id</th>
        <th> Name </th>
        <th> Details (btn) </th>
        <th> Details (link) </th>
        <th> Opt. Param </th>
      </tr>
      <tr *ngFor="let contact of contacts">
        <td> {{ contact.id }} </td>
        <td> {{ contact.name }} </td>
        <td>
          <button (click)="viewDetails(contact.id, optionalParam.value)">
              details (btn)
          </button>
        </td>
        <td>
          <a [routerLink]="['/contact', contact.id]"
             [queryParams]="{ foo: optionalParam.value }">
              details (link) </a>
        </td>
        <td> <input #optionalParam (keyup)="0" /> </td>
      </tr>
    </table>
  `,
  styles: ['table {padding-left: 20px;}'],
})

export class ContactListComponent implements OnInit {

  contacts: Array<any>;

  constructor(
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.contacts = this.contactService.getList();
  }

  viewDetails(id, param){
    this.router.navigate(['contact', id], { queryParams: { foo: param }});
  }
}