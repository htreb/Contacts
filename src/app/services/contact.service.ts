import { Injectable } from '@angular/core';

export interface Contact {
  isFavorite: boolean;
  name: string;
  email: string;
  phone?: string;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getId(): string {
    return `${(Math.random() + '').substr(2)}X${new Date().getTime()}`;
  }

  getContacts(): Contact[] {
    return JSON.parse(localStorage.getItem('contacts')) || [];
  }

  getFavorites(): Contact[] {
    return this.getContacts().filter(c => c.isFavorite);
  }

  saveContact(contact: Contact): void {
    let contacts: Contact[] = this.getContacts();
    if (contact.id) {
      // if we are editing a contact which already exists, then do not duplicate it.
      contacts = contacts.filter(c => c.id !== contact.id);
    } else {
      contact.id = this.getId();
    }
    contacts.push(contact);
    return localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  deleteContact(contact: Contact): void {
    if (contact.id) {
      const contacts: Contact[] = this.getContacts().filter(c => c.id !== contact.id);
      return localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  toggleFavorite(contact: Contact): void {
    contact.isFavorite = !contact.isFavorite;
    this.saveContact(contact);
  }
}
