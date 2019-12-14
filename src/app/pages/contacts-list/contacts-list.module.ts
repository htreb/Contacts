import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  }
];


@NgModule({
  declarations: [
    ContactsListComponent,
    EditContactComponent,
    ContactListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ContactsListModule { }
