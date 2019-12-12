import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  }
];


@NgModule({
  declarations: [
    ContactsListComponent,
    EditContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactsListModule { }
