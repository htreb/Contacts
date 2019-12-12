import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  }
];


@NgModule({
  declarations: [ContactsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactsListModule { }
