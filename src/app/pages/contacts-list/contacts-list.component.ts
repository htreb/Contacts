import { Component, ViewChild } from '@angular/core';
import { EditContactComponent } from './edit-contact/edit-contact.component';
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {

  @ViewChild(EditContactComponent, { static: false }) editContactModal: EditContactComponent;

  constructor() { }

  openEditContactModal(): void {
    this.editContactModal.openModal();
  }
}
