import { Component, ViewChild } from '@angular/core';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactService, Contact } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {

  @ViewChild(EditContactComponent, { static: false }) editContactModal: EditContactComponent;

  constructor(public contactService: ContactService) { }

  openEditContactModal(contact?: Contact): void {
    this.editContactModal.openModal(contact);
  }
}
