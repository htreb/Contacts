import { Component, ViewChild, OnInit } from '@angular/core';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactService, Contact } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  @ViewChild(EditContactComponent, { static: false }) editContactModal: EditContactComponent;
  public allContacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.allContacts = this.contactService.getContacts();
  }

  openEditContactModal(): void {
    this.editContactModal.openModal();
  }
}
