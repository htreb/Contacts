import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mockContacts } from './mockContacts';

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

  public allContacts$ = new BehaviorSubject<Contact[]>([]);
  public favoriteContacts$ = new BehaviorSubject<Contact[]>([]);

  constructor() {
    this.updateContactBehaviorSubject();
  }

  getId(): string {
    return `${(Math.random() + '').substr(2)}X${new Date().getTime()}`;
  }

  updateContactBehaviorSubject(): void {
    const allContacts: Contact[] = JSON.parse(localStorage.getItem('contacts')) || [];
    const orderedContacts: Contact[] = allContacts.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    });
    this.allContacts$.next(orderedContacts);
    this.favoriteContacts$.next(orderedContacts.filter(c => c.isFavorite));
  }

  saveContact(contact: Contact): void {
    let contacts: Contact[] = this.allContacts$.value;
    if (contact.id) {
      // if we are editing a contact which already exists, then do not duplicate it.
      contacts = contacts.filter(c => c.id !== contact.id);
    } else {
      contact.id = this.getId();
    }
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.updateContactBehaviorSubject();
  }

  deleteContact(contact: Contact): void {
    if (contact.id) {
      const contacts: Contact[] = this.allContacts$.value.filter(c => c.id !== contact.id);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.updateContactBehaviorSubject();
    }
  }

  toggleFavorite(contact: Contact): void {
    contact.isFavorite = !contact.isFavorite;
    this.saveContact(contact);
  }

  mockContacts() {
    localStorage.setItem('contacts', JSON.stringify(mockContacts));
    this.updateContactBehaviorSubject();
  }
}
